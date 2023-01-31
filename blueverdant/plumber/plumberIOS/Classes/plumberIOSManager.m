//
//  plumberCompassManager.m
//  Compass
//
//  Created by 李耀忠 on 24/09/2017.
//

#import "plumberIOSManager.h"
#import <UIKit/UIKit.h>
#import <objc/runtime.h>
#import "NSObject+plumberExtension.h"
#import "NSString+plumberMD5.h"
#import "UIDevice+plumberExtension.h"
#import "UncaughtExceptionHandler.h"
#import "plumberApi.h"
#import "plumberConfig.h"
#import "plumberConfiguration+Private.h"
#import "plumberConfiguration.h"
#import "plumberConstant.h"
#import "plumberDatabase.h"
#import "plumberIOSManager+Private.h"
#import "plumberInfoCenter.h"
#import "plumberNetworkReachabilityManager.h"
#import "plumberRecorditem.pb.h"
#import "plumberStatisticsTableAccess.h"

#define NO_VALUE -1

@interface plumberIOSManager ()

@property(nonatomic, readwrite) plumberConfiguration *configuration;

@property(nonatomic, assign) UIBackgroundTaskIdentifier bgtask;
@property(nonatomic) plumberStatisticsTableAccess *databaseAccess;
@property(nonatomic, weak) NSURLSessionDataTask *task;
@property(nonatomic) dispatch_queue_t dbqueue;
@property(nonatomic) NSInteger count;
@property(nonatomic) NSInteger retryCount;
@property(nonatomic) NSTimer *timer;

@property(nonatomic, copy) NSString *projChannel;
@property(nonatomic, copy) NSString *projName;
@property(nonatomic, copy) NSString *projVer;

@property(nonatomic) int64_t appStartTimestamp;
@property(nonatomic) int64_t appEnterBackgroundTimestamp;

//@property (nonatomic) NSMutableDictionary<NSURLSessionTask *, plumberAppRequestInfo *>
//*requestUrlDict;
@property(nonatomic) dispatch_queue_t requestInfoQueue;

@end

@implementation plumberIOSManager

@synthesize appStartTimestamp = _appStartTimestamp;
@synthesize appEnterBackgroundTimestamp = _appEnterBackgroundTimestamp;

+ (instancetype)sharedInstance {
    static dispatch_once_t onceToken;
    static plumberIOSManager *manager;
    dispatch_once(&onceToken, ^{
        manager = [[plumberIOSManager alloc] init];
    });

    return manager;
}

- (instancetype)init {
    self = [super init];
    if (self) {
        //_requestUrlDict = [NSMutableDictionary dictionary];
        _requestInfoQueue =
            dispatch_queue_create("plumberASS_Request_Queue", DISPATCH_QUEUE_CONCURRENT);
        _dbqueue = dispatch_queue_create("Compass_Statistics_DB_Queue", DISPATCH_QUEUE_SERIAL);

        _appStartTimestamp = NO_VALUE;
        _appEnterBackgroundTimestamp = NO_VALUE;

        [self setAppStartTimestamp:[plumberInfoBase timestampInMiniseconds]];
    }

    return self;
}

- (void)start {
    NSString *documentPath =
        NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES)[0];
    NSString *databasePath = [documentPath stringByAppendingPathComponent:DATABASE_PATH];

    plumberDatabase *database = [plumberDatabase databaseWithPath:databasePath];
    if (!database) {
        return;
    }
    _databaseAccess = [[plumberStatisticsTableAccess alloc] initWithDatabase:database];
    BOOL result = [_databaseAccess createTable];
    if (!result) {
        return;
    }
    _count = [_databaseAccess count];

    //首先上传AppDeviceInfo，该信息每天只上传一次

    //删除7天前的记录，防止数据库过度膨胀
    [self deleteOldStatistics];

    //监测网络连接状态
    [[plumberNetworkReachabilityManager sharedInstance] startReachabilityMonitoring];
    [[NSNotificationCenter defaultCenter]
        addObserver:self
           selector:@selector(reachabilityStatusChanged:)
               name:plumberNetowrkReachabilityStatusChangedNotification
             object:nil];

    if (self.configuration.timeIntervalForUpload > 0) {
        _timer = [NSTimer scheduledTimerWithTimeInterval:self.configuration.timeIntervalForUpload
                                                  target:self
                                                selector:@selector(timerHandler:)
                                                userInfo:nil
                                                 repeats:YES];
    }
    //启动后立马上传一次
    [self timerHandler:_timer];

    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(applicationDidFinishLaunching:)
                                                 name:UIApplicationDidFinishLaunchingNotification
                                               object:nil];
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(applicationDidEnterBackground:)
                                                 name:UIApplicationDidEnterBackgroundNotification
                                               object:nil];
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(applicationWillEnterForeground:)
                                                 name:UIApplicationWillEnterForegroundNotification
                                               object:nil];
    [[NSNotificationCenter defaultCenter]
        addObserver:self
           selector:@selector(handleApplicationSignificantTimeChangeNotification:)
               name:UIApplicationSignificantTimeChangeNotification
             object:nil];
}

- (void)dealloc {
    [self.timer invalidate];
    [[plumberNetworkReachabilityManager sharedInstance] stopReachabilityMonitoring];
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}

- (BOOL)isReachable {
    if (self.configuration.allowsCellularAccess) {
        return [plumberNetworkReachabilityManager sharedInstance].isReachable;
    } else {
        return [plumberNetworkReachabilityManager sharedInstance].isReachableViaWiFi;
    }
}

- (void)reachabilityStatusChanged:(NSNotification *)notification {
    __weak typeof(self) weakSelf = self;
    dispatch_async(self.dbqueue, ^{
        if (!weakSelf.task && weakSelf.retryCount >= UPLOAD_RETRY_COUNT && weakSelf.isReachable) {
            weakSelf.retryCount = 0;
            [weakSelf uploadStatisticsToServer];
        }
    });
}

- (void)timerHandler:(NSTimer *)timer {
    __weak typeof(self) weakSelf = self;
    dispatch_async(self.dbqueue, ^{
        if (!weakSelf.task && weakSelf.isReachable) {
            [weakSelf uploadStatisticsToServer];
        }
    });
}

- (void)deleteOldStatistics {
    //删除7天之前的历史记录
    __weak typeof(self) weakSelf = self;
    dispatch_async(self.dbqueue, ^{
        NSDate *date = [NSDate dateWithTimeIntervalSinceNow:-DB_MAX_LIFE];
        [weakSelf.databaseAccess deleteDataBeforeDate:date];
    });
}

#pragma mark - AppDeviceInfo

- (void)uploadAppDeviceInfo:(Boolean)force {
    if ([[plumberInfoCenter sharedInstance] isNeedUpdate] || force) {
        [[NSUserDefaults standardUserDefaults] synchronize];
        NSMutableDictionary *deviceinfo = [NSMutableDictionary dictionary];
        NSData *jsonData = [[plumberInfoCenter sharedInstance] getDeviceInfo:deviceinfo];

        if ([[plumberInfoBase sharedInstance] geoReady]) {
            [self addStatisticsDataToDB:jsonData];
        }
    }
}
#pragma mark - AppSessionInfo

- (int64_t)appStartTimestamp {
    if (_appStartTimestamp == NO_VALUE) {
        _appStartTimestamp = [[[NSUserDefaults standardUserDefaults]
            objectForKey:plumber_USER_KEY_START_TIME] longLongValue];
    }
    return _appStartTimestamp;
}

- (void)setAppStartTimestamp:(int64_t)appStartTimestamp {
    _appStartTimestamp = appStartTimestamp;
    [[NSUserDefaults standardUserDefaults] setObject:@(appStartTimestamp)
                                              forKey:plumber_USER_KEY_START_TIME];
    [[NSUserDefaults standardUserDefaults] synchronize];
}

- (int64_t)appEnterBackgroundTimestamp {
    if (_appEnterBackgroundTimestamp == NO_VALUE) {
        _appEnterBackgroundTimestamp = [[[NSUserDefaults standardUserDefaults]
            objectForKey:plumber_USER_KEY_BACKGROUND_TIME] longLongValue];
    }
    return _appEnterBackgroundTimestamp;
}

- (void)setAppEnterBackgroundTimestamp:(int64_t)appEnterBackgroundTimestamp {
    _appEnterBackgroundTimestamp = appEnterBackgroundTimestamp;
    [[NSUserDefaults standardUserDefaults] setObject:@(appEnterBackgroundTimestamp)
                                              forKey:plumber_USER_KEY_BACKGROUND_TIME];
    [[NSUserDefaults standardUserDefaults] synchronize];
}

- (void)applicationDidFinishLaunching:(NSNotification *)notification {
    NSDictionary *userInfo = notification.userInfo;

    self.appEnterBackgroundTimestamp = [plumberInfoBase timestampInMiniseconds];
    int64_t duration = self.appEnterBackgroundTimestamp - self.appStartTimestamp;
    duration = duration / 1000;
    if (duration > 24 * 60 * 60) {
        duration = 24 * 60 * 60;
    }
    NSMutableDictionary *enterbackgroud = [[NSMutableDictionary alloc] init];
    enterbackgroud[@"session_duration"] = [NSString stringWithFormat:@"%lld", duration];
    enterbackgroud[@"session_sessiontype"] = @"ff";

    //压入路径
    [plumberIOSManager push_routing_group:@"ff"
                             grouprouting:@""
                               filtername:(!userInfo ? @"install" : @"")eventfilter:@""];
    //测试事件
    //[plumberIOSManager push_routing_group:@"eventtest" grouprouting:@""
    //filtername:(!userInfo?@"install":@"") eventfilter:@"hello" ]; 发送留存信息
    [self send_clientretaininfo];
    // ff强制发送setup信息
    [self uploadAppDeviceInfo:true];
    //补获session的细节信息
    if (!userInfo) {
    } else if (userInfo[UIApplicationLaunchOptionsRemoteNotificationKey] != nil ||
               userInfo[UIApplicationLaunchOptionsLocalNotificationKey] != nil) {
        enterbackgroud[@"session_appname3rd"] =
            userInfo[UIApplicationLaunchOptionsRemoteNotificationKey];

    } else if (userInfo[UIApplicationLaunchOptionsURLKey] != nil ||
               userInfo[UIApplicationLaunchOptionsSourceApplicationKey] != nil) {
        enterbackgroud[@"session_appname3rd"] =
            userInfo[UIApplicationLaunchOptionsSourceApplicationKey];
    }
    //发送session类型信息
    NSData *sessioninfo = [[plumberInfoCenter sharedInstance] getSessionInfo:enterbackgroud];
    [self addStatisticsDataToDB:sessioninfo];
    self.appStartTimestamp = [plumberInfoBase timestampInMiniseconds];
    [self timerHandler:_timer];
}

- (void)applicationDidEnterBackground:(NSNotification *)notification {
    [plumberIOSManager push_routing_group:@"bg" grouprouting:@"" filtername:@"" eventfilter:@""];

    self.appEnterBackgroundTimestamp = [plumberInfoBase timestampInMiniseconds];
    int64_t duration = self.appEnterBackgroundTimestamp - self.appStartTimestamp;
    duration = duration / 1000;
    if (duration > 24 * 60 * 60) {
        duration = 24 * 60 * 60;
    }
    NSMutableDictionary *enterbackgroud = [[NSMutableDictionary alloc] init];
    enterbackgroud[@"session_duration"] = [NSString stringWithFormat:@"%lld", duration];
    enterbackgroud[@"session_sessiontype"] = @"bg";
    NSData *sessioninfo = [[plumberInfoCenter sharedInstance] getSessionInfo:enterbackgroud];

    [self addStatisticsDataToDB:sessioninfo];
    [self timerHandler:_timer];
    [self send_routing];

    self.bgtask = [[UIApplication sharedApplication] beginBackgroundTaskWithExpirationHandler:^{
        [[UIApplication sharedApplication] endBackgroundTask:self.bgtask];
        self.bgtask = UIBackgroundTaskInvalid;
    }];
}

- (void)applicationWillEnterForeground:(NSNotification *)notification {
    [plumberIOSManager push_routing_group:@"ef" grouprouting:@"" filtername:@"" eventfilter:@""];
    [self send_clientretaininfo];

    self.appStartTimestamp = [plumberInfoBase timestampInMiniseconds];
    int64_t duration = self.appStartTimestamp - self.appEnterBackgroundTimestamp;
    duration = duration / 1000;
    if (duration > 24 * 60 * 60) {
        duration = 24 * 60 * 60;
    }
    NSMutableDictionary *enterbackgroud = [[NSMutableDictionary alloc] init];
    enterbackgroud[@"session_duration"] = [NSString stringWithFormat:@"%lld", duration];
    enterbackgroud[@"session_sessiontype"] = @"ef";
    NSData *sessioninfo = [[plumberInfoCenter sharedInstance] getSessionInfo:enterbackgroud];
    [self addStatisticsDataToDB:sessioninfo];
    [self uploadAppDeviceInfo:false];
    [self timerHandler:_timer];
}

- (void)handleApplicationSignificantTimeChangeNotification:(NSNotification *)notification {
    //当系统时间矫正的时候，换日，需要从新发动setupinfo来保证dau，但是并非强制发送，需要程序判断是不是应该换日发送
    //by fanxiaolong
    [self uploadAppDeviceInfo:true];
    [self timerHandler:_timer];
}
/*
- (void)uploadAppSessionInfo:(plumberAppSessionInfo *)sessionInfo {

    plumberRecordItemElem *recordItemElem = [[plumberRecordItemElem alloc] init];
    recordItemElem.appSessionInfo = sessionInfo;
    recordItemElem.ts = [plumberHelper timestampInMiniseconds];
    NSData *jsonData = recordItemElem.data;

    [self addStatisticsDataToDB:jsonData uploadImmediately:YES];

}
*/
#pragma mark - AppRequestInfo

- (void)urlSessionTaskDidStart:(NSURLSessionTask *)task {
    if ([task.originalRequest.URL.absoluteString
            containsString:[[plumberInfoCenter sharedInstance] getUrl]]) {
        return;
    }
    /*
    __block plumberAppRequestInfo *requestInfoA;
    dispatch_sync(self.requestInfoQueue, ^{
        requestInfoA = self.requestUrlDict[task];
    });

    if (!requestInfoA) {
        plumberAppRequestInfo *requestInfo = [[plumberAppRequestInfo alloc] init];
        dispatch_barrier_sync(self.requestInfoQueue, ^{
            self.requestUrlDict[task] = requestInfo;
        });

        NSURLRequest *request = task.currentRequest;
        requestInfo.schema = request.URL.scheme;
        requestInfo.domain = request.URL.host;
        requestInfo.url = request.URL.path;
        requestInfo.method = request.HTTPMethod;
        requestInfo.ts = [plumberHelper timestampInMiniseconds];
        requestInfo.count = 1;
        if (request.HTTPBody) {
            requestInfo.reqSize = request.HTTPBody.length;
        }
        requestInfo.clientIp = [plumberHelper getIPAddress:YES];
    }
     */
}

- (void)urlSessionTask:(NSURLSessionTask *)task
    totalBytesExpectedToSend:(int64_t)totalBytesExpectedToSend {
    /*
    __block plumberAppRequestInfo *requestInfo;
    dispatch_sync(self.requestInfoQueue, ^{
        requestInfo = self.requestUrlDict[task];
    });

    if (requestInfo && requestInfo.reqSize == 0) {
        requestInfo.reqSize = totalBytesExpectedToSend;
    }
     */
}

- (void)urlSessionTask:(NSURLSessionTask *)task
    didReceiveResponse:(NSURLResponse *)response
                    ts:(int64_t)timestamp {
    /*
    __block plumberAppRequestInfo *requestInfo;
    dispatch_sync(self.requestInfoQueue, ^{
        requestInfo = self.requestUrlDict[task];
    });

    if (requestInfo && requestInfo.ttfb == 0) {
        requestInfo.ttfb = timestamp - requestInfo.ts;
    }
     */
}

#if (defined(__IPHONE_10_0) && __IPHONE_OS_VERSION_MAX_ALLOWED >= __IPHONE_10_0)

- (void)urlSessionTask:(NSURLSessionTask *)task
    didFinishCollectingMetrics:(NSURLSessionTaskMetrics *)metrics {
    /*
    __block plumberAppRequestInfo *requestInfo;
    dispatch_sync(self.requestInfoQueue, ^{
        requestInfo = self.requestUrlDict[task];
    });

    if (requestInfo && metrics.transactionMetrics.count > 0) {
        NSURLSessionTaskTransactionMetrics *metric = metrics.transactionMetrics[0];
        if (metric.fetchStartDate) {
            requestInfo.ts = [metric.fetchStartDate timeIntervalSince1970] * 1000;
        }
        if (metric.responseStartDate) {
            requestInfo.ttfb = [metric.responseStartDate timeIntervalSince1970] * 1000 -
    requestInfo.ts;
        }
        if (metric.responseEndDate) {
            requestInfo.time = [metric.responseEndDate timeIntervalSince1970] * 1000 -
    requestInfo.ts;
        }
    }
     */
}

#endif

- (void)urlSessionTaskDidStop:(NSURLSessionTask *)task error:(NSError *)error {
    /*
    __block plumberAppRequestInfo *requestInfo;
    dispatch_sync(self.requestInfoQueue, ^{
        requestInfo = self.requestUrlDict[task];
    });

    if (requestInfo) {
        requestInfo.time = [plumberHelper timestampInMiniseconds] - requestInfo.ts;
        if (error) {
            requestInfo.code = [plumberRequestError
    socketErrorCodeFromURLSessionErrorCode:error.code]; } else if (task.response && [task.response
    isKindOfClass:[NSHTTPURLResponse class]]) { requestInfo.code = (int32_t)[(NSHTTPURLResponse
    *)(task.response) statusCode]; } else { requestInfo.code = 0;
        }
        requestInfo.resSize = task.response.expectedContentLength;
        requestInfo.md5 = self.currentMD5;

        dispatch_barrier_sync(self.requestInfoQueue, ^{
            self.requestUrlDict[task] = nil;
        });
        [self uploadAppRequestInfo:requestInfo];
    }
     */
}
#pragma mark - Database

- (void)addStatisticsDataToDB:(NSData *)data {
    [self addStatisticsDataToDB:data uploadImmediately:NO];
}

- (void)addStatisticsDataToDB:(NSData *)data uploadImmediately:(BOOL)uploadImmediately {
    __weak typeof(self) weakSelf = self;
    dispatch_async(self.dbqueue, ^{
        BOOL result = [weakSelf.databaseAccess addStatisticsWithData:data
                                                   uploadImmediately:uploadImmediately];
        if (result) {
            weakSelf.count += 1;
            if (weakSelf.isReachable &&
                (uploadImmediately || [weakSelf.databaseAccess needUpdateImmediately] ||
                 weakSelf.count >= UPLOAD_COUNT) &&
                !weakSelf.task && weakSelf.retryCount < UPLOAD_RETRY_COUNT) {
                [weakSelf uploadStatisticsToServer];
            }
        }
    });
}

#pragma mark - Upload

- (void)uploadStatisticsToServer {
    NSArray<NSDictionary *> *statisticsList =
        [self.databaseAccess statisticsDataWithCount:UPLOAD_COUNT];
    NSInteger count = statisticsList.count;
    if (count < 1 || !self.isReachable) {
        return;
    }
    NSMutableString *multJsonString = [NSMutableString string];

    plumberRecordItemListReq *list = [[plumberRecordItemListReq alloc] init];
    for (NSInteger index = 0; index < count; index++) {
        NSDictionary *dict = statisticsList[index];
        // NSData *data= [NSJSONSerialization dataWithJSONObject:dict
        // options:NSJSONWritingPrettyPrinted error:nil];
        NSData *data = [dict objectForKey:@"content"];
        plumberRecordItemElem *pinfo = [[plumberRecordItemElem alloc] init];
        pinfo.plumberUpdateJson = data;

        if (nil != pinfo.plumberUpdateJson) {
            NSString *newString = [[NSString alloc] initWithData:pinfo.plumberUpdateJson
                                                        encoding:NSUTF8StringEncoding];
            if (index == 0) {
                [multJsonString appendFormat:@"%@", newString];
            } else {
                [multJsonString appendFormat:@"\n%@", newString];
            }
        }
    }
    list.plumberUpdateMultJson = [multJsonString dataUsingEncoding:NSUTF8StringEncoding];

    NSDictionary *lastData = [statisticsList lastObject];
    __weak typeof(self) weakSelf = self;
    NSString *posturl = [[plumberInfoCenter sharedInstance] getUrl];
    NSURLSessionDataTask *task = [plumberApi
                     post:posturl
                 jsonData:list.plumberUpdateMultJson
        completionHandler:^(NSError *error) {
            dispatch_async(weakSelf.dbqueue, ^{
                weakSelf.task = nil;
                if (!error || (error.code != plumberApiErrorCodeLocal)) {
                    if (error) {
                        NSLog(@"Compass埋点数据客户端错误，error = %@", error);
                    } else {
                        NSLog(@"Compass埋点数据上传服务器成功，共%@条", @(count));
                    }

                    [weakSelf.databaseAccess deleteStatisticsNoNewerThanData:lastData];
                    weakSelf.count = [weakSelf.databaseAccess count];
                    weakSelf.retryCount = 0;
                    if (weakSelf.isReachable && (weakSelf.count >= UPLOAD_COUNT ||
                                                 [weakSelf.databaseAccess needUpdateImmediately])) {
                        [weakSelf uploadStatisticsToServer];
                    }
                } else {
                    weakSelf.retryCount++;
                    if (weakSelf.retryCount < UPLOAD_RETRY_COUNT) {
                        NSLog(@"Compass埋点上传失败重试 %@", @(weakSelf.retryCount));
                        [weakSelf uploadStatisticsToServer];
                    } else {
                        NSLog(@"Compass埋点上传重试%@次失败，等待%@秒", @UPLOAD_RETRY_COUNT,
                              @UPLOAD_RETRY_INTERVAL);
                        dispatch_after(
                            dispatch_time(DISPATCH_TIME_NOW,
                                          (int64_t)(UPLOAD_RETRY_INTERVAL * NSEC_PER_SEC)),
                            weakSelf.dbqueue, ^{
                                if (weakSelf.isReachable && !weakSelf.task &&
                                    weakSelf.retryCount >= UPLOAD_RETRY_COUNT) {
                                    weakSelf.retryCount = 0;
                                    [weakSelf uploadStatisticsToServer];
                                }
                            });
                    }
                }
            });
        }];

    self.task = task;
}

+ (void)plumberStart:(plumberConfiguration *)plumberConf
             appName:(NSString *)appname
                 uid:(NSString *)uid {
    plumberIOSManager *instance = [self sharedInstance];

    if (plumberConf) {
        plumberConfiguration *copyConfiguration = [plumberConfiguration defaultConfiguration];
        copyConfiguration.allowInterveneNetwork = plumberConf.allowInterveneNetwork;
        instance.configuration = copyConfiguration;
    } else {
        instance.configuration = [plumberConfiguration defaultConfiguration];
    }

    if (instance && instance.configuration.allowCatchException) {
        [UncaughtExceptionHandler enableExceptionHandler];
    }

    plumberInfoCenter *pInfoCenter = [plumberInfoCenter sharedInstance];
    if (![@"" isEqual:appname] && nil != appname) {
        [pInfoCenter set_appmeta_appname:appname];
    } else {
        NSAssert(0, @"plumbersdk init appname must without nil or empty");
    }

    if (nil != pInfoCenter) {
        [pInfoCenter set_uid_uid:uid];
    }
    [instance start];
}
+ (void)set_uid_uid:(NSString *)uid_uid {
    [[plumberInfoCenter sharedInstance] set_uid_uid:uid_uid];
}
+ (void)set_uid_idfa:(NSString *)uid_idfa {
    [[plumberInfoCenter sharedInstance] set_uid_idfa:uid_idfa];
}

+ (void)set_uid_login:(BOOL)uid_login {
    [[plumberInfoCenter sharedInstance] set_uid_login:uid_login];
}
+ (void)set_device_sim_number:(NSString *)device_sim_number {
    [[plumberInfoCenter sharedInstance] set_device_sim_number:device_sim_number];
}
+ (void)set_appmeta_appname:(NSString *)appmeta_appname {
    [[plumberInfoCenter sharedInstance] set_appmeta_appname:appmeta_appname];
}
+ (void)set_appmeta_appver:(NSString *)appmeta_appver {
    [[plumberInfoCenter sharedInstance] set_appmeta_appver:appmeta_appver];
}
+ (void)set_appmeta_channel:(NSString *)appmeta_channel {
    [[plumberInfoCenter sharedInstance] set_appmeta_channel:appmeta_channel];
}

+ (void)set_geoinfo:(NSString *)city
            country:(NSString *)country
          longitude:(float)longitude
           latitude:(float)latitude {
    [[plumberInfoCenter sharedInstance] set_geoinfo_city:city];
    [[plumberInfoCenter sharedInstance] set_geoinfo_country:country];
    [[plumberInfoCenter sharedInstance] set_geoinfo_latitude:longitude];
    [[plumberInfoCenter sharedInstance] set_geoinfo_longitude:latitude];
}
//发送路径信息,压入路径信息栈
+ (NSString *)push_routing_group:(NSString *)routing
                    grouprouting:(NSString *)grouprouting
                      filtername:(NSString *)filtername
                     eventfilter:(NSString *)eventfilter {
    //
    NSString *lastrouting = [[plumberInfoCenter sharedInstance] push_routing_group:routing
                                                                      grouprouting:grouprouting
                                                                        filtername:filtername];
    if (nil != eventfilter && ![@"" isEqual:eventfilter]) {
        [[plumberIOSManager sharedInstance] send_event:routing
                                           eventfilter:eventfilter
                                           lastrouting:lastrouting];
    }
    return lastrouting;
}
- (void)send_event:(NSString *)routing
       eventfilter:(NSString *)eventfilter
       lastrouting:(NSString *)lastrouting {
    NSMutableDictionary *eventdict = [[NSMutableDictionary alloc] init];
    eventdict[@"event_routing"] = routing;
    eventdict[@"event_filter"] = eventfilter;
    eventdict[@"event_original"] = lastrouting;
    NSData *eventinfo = [[plumberInfoCenter sharedInstance] getEventInfo:eventdict];
    NSString *posturl = [[plumberInfoCenter sharedInstance] getUrl];
    bool ret = [plumberApi postcrash:posturl jsonData:eventinfo];
    //[[plumberIOSManager sharedInstance] addStatisticsDataToDB:eventinfo uploadImmediately:true];
}
//发送路径信息，一律bg条件发送
- (void)send_routing {
    NSMutableDictionary *routingdict = [[NSMutableDictionary alloc] init];
    NSData *routinginfo = [[plumberInfoCenter sharedInstance] getRoutingInfo:routingdict];
    [[plumberIOSManager sharedInstance] addStatisticsDataToDB:routinginfo uploadImmediately:true];
}

- (void)send_clientretaininfo {
    // 2.1版本关闭客户端留存功能
    return;
    /*
    NSMutableDictionary* retaininfo =[[NSMutableDictionary alloc] init];
    NSData* retain = [[plumberInfoCenter sharedInstance] getClientRetainInfo:retaininfo];
    if (nil!=retain) {
        //需要判断是不是只发一次，nil表示已经发送过了
        [[plumberIOSManager sharedInstance] addStatisticsDataToDB:retain uploadImmediately:true];
    }
     */
}

+ (void)plumberSendJSException:(NSException *)exception {
    [UncaughtExceptionHandler JSExceptionHandler:exception];
}
@end
