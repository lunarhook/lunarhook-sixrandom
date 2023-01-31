//
//  plumberLowapi.h
//  plumberIOS
//
//  Created by mac on 2019/4/11.
//

#ifndef plumberLowapi_h
#define plumberLowapi_h
#import <Foundation/Foundation.h>

@interface plumberLowapi : NSObject
typedef enum {
    plumber,
    passport,
    tv,
} Dtype;

+ (NSData* _Nullable)BaseInfo:(Dtype)dtype;
+ (bool)PostInfo:(NSData* _Nonnull)data dtype:(Dtype)dtype;
+ (bool)PostEvent:(NSData* _Nullable)event dtype:(Dtype)dtype;
+ (void)EnableCrash;
+ (void)set_geoinfo:(NSString* _Nullable)city
            country:(NSString* _Nullable)country
          longitude:(float)longitude
           latitude:(float)latitude;
@end
#endif /* plumberLowapi_h */
