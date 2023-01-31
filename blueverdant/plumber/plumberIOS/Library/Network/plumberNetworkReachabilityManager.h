//
//  plumberNetworkReachabilityManager.h
//  Compass
//
//  Created by 李耀忠 on 25/09/2017.
//

#import <Foundation/Foundation.h>

extern NSString *const plumberNetowrkReachabilityStatusChangedNotification;

@interface plumberNetworkReachabilityManager : NSObject

+ (instancetype)sharedInstance;
- (void)startReachabilityMonitoring;
- (void)stopReachabilityMonitoring;
- (BOOL)isReachable;
- (BOOL)isReachableViaWWAN;
- (BOOL)isReachableViaWiFi;

@end
