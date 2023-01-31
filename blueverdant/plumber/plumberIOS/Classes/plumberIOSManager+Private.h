//
//  plumberCompassManager+Private.h
//  Compass
//
//  Created by 李耀忠 on 26/09/2017.
//

#import <Availability.h>
#import "plumberIOSManager.h"

@interface plumberIOSManager (Private)

@property(nonatomic, readonly) plumberConfiguration *configuration;

+ (instancetype)sharedInstance;

- (void)urlSessionTaskDidStart:(NSURLSessionTask *)task;
- (void)urlSessionTask:(NSURLSessionTask *)task
    totalBytesExpectedToSend:(int64_t)totalBytesExpectedToSend;
- (void)urlSessionTask:(NSURLSessionTask *)task
    didReceiveResponse:(NSURLResponse *)response
                    ts:(int64_t)timestamp;

#if (defined(__IPHONE_10_0) && __IPHONE_OS_VERSION_MAX_ALLOWED >= __IPHONE_10_0)
- (void)urlSessionTask:(NSURLSessionTask *)task
    didFinishCollectingMetrics:(NSURLSessionTaskMetrics *)metrics;
#endif

- (void)urlSessionTaskDidStop:(NSURLSessionTask *)task error:(NSError *)error;
/*
 if addStatisticsDateToDB will use for the use action log it will more important in futher, and will
 send more and more action log to DB, so I think it should be interface to the public or use some
 func instead to record msg log and behavior action log xiaolongfan@sohu-inc.com
 */
- (void)addStatisticsDataToDB:(NSData *)data;

- (void)uploadAppDeviceInfo:(Boolean)force;

//- (NSString *)getinfobydefine:(sendinfotype)type;
@end
