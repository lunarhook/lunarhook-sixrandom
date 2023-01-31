
#import <Availability.h>
#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import "plumberInfoBase.h"
//#import "plumberConfiguration.h"
@interface plumberInfoCenter : plumberInfoBase
// singleton center
+ (instancetype)sharedInstance;

// dump test function will send the crash info to server
+ (void)getArrayDumpDemoTest;

// research for send datainfo server ip, both for crash and statis
- (NSString*)getUrl;
- (NSString*)getCrashUrl;
- (NSMutableDictionary*)routinginfo:(NSMutableDictionary*)RoutingDict;

// functions for get datainfo
- (NSData*)getDeviceInfo:(NSMutableDictionary*)DeviceInfoDict;
- (NSData*)getSessionInfo:(NSMutableDictionary*)SessionInfoDict;
- (NSData*)getExceptionInfo:(NSMutableDictionary*)ExceptionDict;
- (NSData*)getRoutingInfo:(NSMutableDictionary*)RoutingDict;
- (NSData*)getClientRetainInfo:(NSMutableDictionary*)RetainInfoDict;
- (NSData*)getEventInfo:(NSMutableDictionary*)EventInfoDict;
- (NSData*)getPassportDeviceInfo:(NSMutableDictionary*)PassportDeviceInfoDict;

- (BOOL)isNeedUpdate;
- (void)BuildInfo;
- (void)setUserLogin;

- (NSString*)push_routing_group:(NSString*)routing
                   grouprouting:(NSString*)grouprouting
                     filtername:(NSString*)filtername;
- (NSUInteger)getroutingstep;
@end
