//
//  plumberNetworkReachabilityManager.m
//  Compass
//
//  Created by 李耀忠 on 25/09/2017.
//

#import "plumberNetworkReachabilityManager.h"
#import "plumberReachability.h"

NSString *const plumberNetowrkReachabilityStatusChangedNotification = @"plumberNetowrkReachabilityStatusChangedNotification";

@interface plumberNetworkReachabilityManager ()

@property (nonatomic) plumberReachability *reachability;

@end

@implementation plumberNetworkReachabilityManager

+ (instancetype)sharedInstance {
    static dispatch_once_t onceToken;
    static plumberNetworkReachabilityManager *instance;
    dispatch_once(&onceToken, ^{
        instance = [[plumberNetworkReachabilityManager alloc] init];
    });

    return instance;
}

- (instancetype)init {
    self = [super init];
    if (self) {
        plumberReachability *reachability = [plumberReachability reachabilityForInternetConnection];
        _reachability = reachability;
        [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(reachabilityStatusChanged) name:kplumberReachabilityChangedNotification object:nil];
    }

    return self;
}

- (void)dealloc {
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}

- (void)reachabilityStatusChanged {
    [[NSNotificationCenter defaultCenter] postNotificationName:plumberNetowrkReachabilityStatusChangedNotification object:nil];
}

- (void)startReachabilityMonitoring {
    [self.reachability startNotifier];
}

- (void)stopReachabilityMonitoring {
    [self.reachability stopNotifier];
}

- (BOOL)isReachable {
    return [self isReachableViaWWAN] || [self isReachableViaWiFi];
}

- (BOOL)isReachableViaWWAN {
    return self.reachability.currentReachabilityStatus == plumberReachableViaWWAN;
}

- (BOOL)isReachableViaWiFi {
    return self.reachability.currentReachabilityStatus == plumberReachableViaWiFi;
}

@end
