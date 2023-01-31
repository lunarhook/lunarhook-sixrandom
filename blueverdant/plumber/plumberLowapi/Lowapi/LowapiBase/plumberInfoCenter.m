//
//  plumberinfocenter.m
//  plumberIOS
//
//  Created by Mac on 2018/5/10.
//

#import "plumberInfoCenter.h"
#import <Foundation/Foundation.h>
#import <objc/runtime.h>
//#import "plumberConstant.h"
//#import "plumberConfig.h"
//#import "UIDevice+plumberExtension.h"
#import "plumberInfoBase.h"
#import "plumberRecorditem.pb.h"
//#import "plumberConfiguration.h"

#define NET_URL_PREFIX @"https://lunarhook.picp.vip/plumber/statis/"
#define NET_URL_PREFIX_DUMP @"https://lunarhook.picp.vip/plumber/exception/"
#define plumber_USER_KEY_MD5 @"plumber_md5"
#define plumber_USER_KEY_DATE @"plumber_date"

@interface plumberInfoCenter ()
@property(nonatomic) int64_t appStartTimestamp;
@property(nonatomic) int64_t appEnterBackgroundTimestamp;
@property(nonatomic) plumberInfo *pInfo;
@property(nonatomic) BOOL needUpdate;
@property(nonatomic) NSMutableDictionary *Alldict;
@property(nonatomic) NSMutableArray *RoutingArray;
@end

@implementation plumberInfoCenter
@synthesize appStartTimestamp = _appStartTimestamp;
@synthesize appEnterBackgroundTimestamp = _appEnterBackgroundTimestamp;

- (NSData *)getPassportDeviceInfo:(NSMutableDictionary *)PassportDeviceInfoDict {
    NSEnumerator *en = [self.PassportDeviceInfo objectEnumerator];
    id obj;
    while (obj = [en nextObject]) {
        // NSLog(@"5遍历array：%d-->%@",j,obj);
        NSString *name = obj;
        PassportDeviceInfoDict[name] =
            nil == _Alldict[name] ? PassportDeviceInfoDict[name] : _Alldict[name];
    }
    PassportDeviceInfoDict = [self updateinfo:PassportDeviceInfoDict];

    NSData *jsonData = [NSJSONSerialization dataWithJSONObject:PassportDeviceInfoDict
                                                       options:kNilOptions
                                                         error:nil];
    return jsonData;
}

- (NSData *)getDeviceInfo:(NSMutableDictionary *)DeviceInfoDict {
    NSEnumerator *en = [self.DeviceSetupInfo objectEnumerator];
    id obj;
    while (obj = [en nextObject]) {
        // NSLog(@"5遍历array：%d-->%@",j,obj);
        NSString *name = obj;
        DeviceInfoDict[name] = nil == _Alldict[name] ? DeviceInfoDict[name] : _Alldict[name];
    }
    DeviceInfoDict = [self updateinfo:DeviceInfoDict];
    DeviceInfoDict[@"server_action"] = @"setup";
    NSData *jsonData = [NSJSONSerialization dataWithJSONObject:DeviceInfoDict
                                                       options:kNilOptions
                                                         error:nil];
    return jsonData;
}

- (NSData *)getSessionInfo:(NSMutableDictionary *)SessionInfoDict {
    NSEnumerator *en = [self.SessionInfo objectEnumerator];
    id obj;
    while (obj = [en nextObject]) {
        // NSLog(@"5遍历array：%d-->%@",j,obj);
        NSString *name = obj;
        SessionInfoDict[name] = nil == _Alldict[name] ? SessionInfoDict[name] : _Alldict[name];
    }
    if ([SessionInfoDict[@"session_sessiontype"] isEqual:@"bg"]) {
        @try {
            SessionInfoDict[@"build_root"] = [self isDeviceJailbroken];
        } @catch (NSException *exception) {
        } @finally {
        }
    }
    SessionInfoDict = [self updateinfo:SessionInfoDict];
    SessionInfoDict[@"server_action"] = @"session";
    NSData *jsonData = [NSJSONSerialization dataWithJSONObject:SessionInfoDict
                                                       options:kNilOptions
                                                         error:nil];
    return jsonData;
}

- (NSData *)getExceptionInfo:(NSMutableDictionary *)ExceptionDict {
    NSEnumerator *en = [self.Exception objectEnumerator];
    id obj;
    while (obj = [en nextObject]) {
        // NSLog(@"5遍历array：%d-->%@",j,obj);
        NSString *name = obj;
        ExceptionDict[name] = nil == _Alldict[name] ? ExceptionDict[name] : _Alldict[name];
    }
    ExceptionDict = [self updateinfo:ExceptionDict];
    ExceptionDict[@"server_action"] = @"exception";
    NSData *jsonData = [NSJSONSerialization dataWithJSONObject:ExceptionDict
                                                       options:kNilOptions
                                                         error:nil];
    return jsonData;
}

- (NSData *)getRoutingInfo:(NSMutableDictionary *)RoutingInfoDict {
    NSEnumerator *en = [self.RoutingInfo objectEnumerator];
    id obj;
    while (obj = [en nextObject]) {
        // NSLog(@"5遍历array：%d-->%@",j,obj);
        NSString *name = obj;
        RoutingInfoDict[name] = nil == _Alldict[name] ? RoutingInfoDict[name] : _Alldict[name];
    }
    RoutingInfoDict = [self updateinfo:RoutingInfoDict];
    RoutingInfoDict = [self routinginfo:RoutingInfoDict];
    RoutingInfoDict[@"server_action"] = @"routing";
    //需求关闭地理信息相关数据
    RoutingInfoDict[@"geoinfo_latitude"] = nil;
    RoutingInfoDict[@"geoinfo_longitude"] = nil;
    RoutingInfoDict[@"geoinfo_city"] = nil;
    RoutingInfoDict[@"geoinfo_country"] = nil;
    //完成关闭地理信息数据
    NSData *jsonData = [NSJSONSerialization dataWithJSONObject:RoutingInfoDict
                                                       options:kNilOptions
                                                         error:nil];
    NSString *json = [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
    NSLog(@"%@", json);
    return jsonData;
}

- (NSData *)getEventInfo:(NSMutableDictionary *)EventInfoDict {
    NSEnumerator *en = [self.EventInfo objectEnumerator];
    id obj;
    while (obj = [en nextObject]) {
        // NSLog(@"5遍历array：%d-->%@",j,obj);
        NSString *name = obj;
        EventInfoDict[name] = nil == _Alldict[name] ? EventInfoDict[name] : _Alldict[name];
    }
    EventInfoDict[@"server_action"] = @"event";
    NSData *jsonData = [NSJSONSerialization dataWithJSONObject:EventInfoDict
                                                       options:kNilOptions
                                                         error:nil];
    return jsonData;
}

- (NSData *)getClientRetainInfo:(NSMutableDictionary *)RetainInfoDict {
    NSEnumerator *en = [self.RetainInfo objectEnumerator];
    id obj;
    while (obj = [en nextObject]) {
        // NSLog(@"5遍历array：%d-->%@",j,obj);
        NSString *name = obj;
        RetainInfoDict[name] = nil == _Alldict[name] ? RetainInfoDict[name] : _Alldict[name];
    }
    if (true == [self uid_retain:RetainInfoDict]) {
        RetainInfoDict[@"server_action"] = @"retain";
        NSData *jsonData = [NSJSONSerialization dataWithJSONObject:RetainInfoDict
                                                           options:kNilOptions
                                                             error:nil];
        return jsonData;
    }
    return nil;
}

+ (void)getArrayDumpDemoTest {
    NSMutableArray *array = [NSMutableArray array];
    [array addObject:@"1"];
    [array addObject:@"2"];
    NSLog(@"%@", array[9]);
}

- (NSString *)getUrl {
    return NET_URL_PREFIX;
}

- (NSString *)getCrashUrl {
    return NET_URL_PREFIX_DUMP;
}

+ (instancetype)sharedInstance {
    static dispatch_once_t onceToken;
    static plumberInfoCenter *manager;
    dispatch_once(&onceToken, ^{
        manager = [[plumberInfoCenter alloc] init];
    });
    return manager;
}

- (instancetype)init {
    self = [super init];
    if (self) {
        _appStartTimestamp = NO_VALUE;
        _appEnterBackgroundTimestamp = NO_VALUE;
        _pInfo = [[plumberInfo alloc] init];
        _needUpdate = false;
        _RoutingArray = [[NSMutableArray alloc] init];
        [self BuildInfo];
    }
    // BOOL ret = [self isNeedUpdate];
    return self;
}

- (void)BuildInfo {
    // while (false == [plumberInfoBase geo] ) {
    //    sleep(1);
    //}
    _Alldict = [NSMutableDictionary dictionary];
    NSEnumerator *en = [self.Allkey objectEnumerator];
    id obj;
    while (obj = [en nextObject]) {
        // NSLog(@"5遍历array：%d-->%@",j,obj);
        NSString *name = obj;
        SEL func = NSSelectorFromString(name);
        if ([plumberInfoBase respondsToSelector:func]) {
            id ret = [plumberInfoBase performSelector:func];
            _Alldict[name] = ret;
        }
    }
}

- (void)setUserLogin {
    _Alldict[@"uid_login"] = [[NSNumber alloc] initWithBool:TRUE];  //更新用户状态
}

- (BOOL)isNeedUpdate {
    NSString *appname = [[plumberInfoCenter sharedInstance] get_appmeta_appname];
    NSString *keyname = [NSString stringWithFormat:@"%@_%@", plumber_USER_KEY_DATE, appname];
    NSString *dateString = [[NSUserDefaults standardUserDefaults] stringForKey:keyname];
    NSString *todayString = [plumberInfoBase currentDateString];
    if (!dateString || ![dateString isEqualToString:todayString]) {
        _needUpdate = TRUE;
        [[NSUserDefaults standardUserDefaults] setObject:todayString forKey:keyname];
    } else {
        _needUpdate = false;
    }
    // return true;
    return _needUpdate;
}

- (int64_t)appStartTimestamp {
    if (_appStartTimestamp == NO_VALUE) {
        _appStartTimestamp = [[[NSUserDefaults standardUserDefaults]
            objectForKey:plumber_USER_KEY_START_TIME] longLongValue];
    }
    return _appStartTimestamp;
}

- (void):(int64_t)appStartTimestamp {
    _appStartTimestamp = appStartTimestamp;
    [[NSUserDefaults standardUserDefaults] setObject:@(appStartTimestamp)
                                              forKey:plumber_USER_KEY_START_TIME];
    [[NSUserDefaults standardUserDefaults] synchronize];
}

//步进压入数组栈
- (NSString *)push_routing_group:(NSString *)routing
                    grouprouting:(NSString *)grouprouting
                      filtername:(NSString *)filtername {
    NSString *returnlast = @"";
    NSMutableDictionary *routinginfo = [[NSMutableDictionary alloc] init];
    routinginfo[@"routing"] = routing;
    routinginfo[@"group"] = grouprouting;
    routinginfo[@"filter"] = filtername;
    routinginfo[@"step"] = [[NSNumber alloc] initWithInteger:_RoutingArray.count];
    routinginfo[@"timestamp"] =
        [[NSNumber alloc] initWithLong:[plumberInfoBase timestampInMiniseconds]];
    //一下数据需要根据前栈覆盖
    routinginfo[@"duration"] = [[NSNumber alloc] initWithLongLong:0];
    routinginfo[@"edge"] = [NSString stringWithFormat:@"%@|%@", @"NULL", routing];
    routinginfo[@"original"] = @"NULL";
    @synchronized(self) {
        if (_RoutingArray.count > 0) {
            NSDictionary *dict = [_RoutingArray lastObject];
            NSNumber *lasttime = dict[@"timestamp"];
            int64_t lasttimestamp = [(lasttime) longLongValue];
            int64_t duration = ([plumberInfoBase timestampInMiniseconds] - lasttimestamp) / 1000;
            routinginfo[@"duration"] = [[NSNumber alloc] initWithLong:duration];
            routinginfo[@"edge"] = [NSString stringWithFormat:@"%@|%@", dict[@"routing"], routing];
            routinginfo[@"original"] = dict[@"routing"];
            returnlast = dict[@"routing"];
        }

        [_RoutingArray addObject:routinginfo];
    }
    return returnlast;
}

//从数组中逆向出栈最后的路径步进
- (NSMutableDictionary *)routinginfo:(NSMutableDictionary *)RoutingDict {
    NSMutableDictionary *r = [[NSMutableDictionary alloc] initWithDictionary:RoutingDict];
    NSMutableArray *arr = [[NSMutableArray alloc] initWithArray:_RoutingArray];
    int countItem = (int)arr.count;  //全发送，清理进度
    int duration = 0;
    for (int i = countItem - 1; i >= 0; i--) {
        NSMutableDictionary *value = arr[i];
        duration = duration + [value[@"duration"] intValue];
    }
    [arr removeObjectAtIndex:0];

    // r[@"routing_count"] = [[NSNumber alloc]initWithInt:(countItem)];
    r[@"routing_stack"] = arr;
    // r[@"routing_duration"] = [[NSNumber alloc]initWithInt:duration];
    [_RoutingArray removeAllObjects];
    return r;
}

//判断步进总长度
- (NSUInteger)getroutingstep {
    return _RoutingArray.count;
}

@end
