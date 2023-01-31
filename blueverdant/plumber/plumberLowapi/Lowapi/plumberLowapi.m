//
//  plumberLowapi.m
//  plumberIOS
//
//  Created by mac on 2019/4/11.
//

#include "plumberLowapi.h"
#import <Foundation/Foundation.h>
#import <Foundation/NSObject.h>
#include "Exception/UncaughtExceptionHandler.h"
#include "NSData+plumberAES.h"
#include "plumberInfoCenter.h"
static NSMutableDictionary *Allevent = nil;
static dispatch_once_t onceToken;

@implementation plumberLowapi
+ (void)EnableCrash {
    [UncaughtExceptionHandler enableExceptionHandler];
}
+ (SEL)getCollectFunc:(Dtype)dtype {
    if (passport == dtype) {
        return @selector(getPassportDeviceInfo:);
    }
    return nil;
}

+ (NSString *)getUrl:(Dtype)dtype {
    if (passport == dtype) {
        return @"https://lunarhook.picp.vip/plumber/statis/";
        //return @"https://passport.plumber.sohu.com";
    }
    return nil;
}

+ (NSData *_Nullable)BaseInfo:(Dtype)dtype {
    SEL func = [self getCollectFunc:dtype];
    if (nil != func) {
        NSMutableDictionary *PassportDeviceInfoDict = [NSMutableDictionary dictionary];
        plumberInfoCenter *p = [plumberInfoCenter sharedInstance];
        // to avoid memory leak by perfromSelector, modify performSelector to methodForSeleector use
        // point pfunc delivery the additional parameter to function. fanxl
        IMP imp = [p methodForSelector:func];
        NSData *(*pfunc)(id, SEL, NSMutableDictionary *) = (void *)imp;
        NSData *jsonData = pfunc(p, func, PassportDeviceInfoDict);
        // end fanxl
        // directly use performSelector will cause compile memory leak warning. fanxl
        // NSData *jsonData =  [p performSelector:func withObject: PassportDeviceInfoDict];
        return jsonData;
    }
    return nil;
}

+ (bool)PostInfo:(NSData *_Nonnull)data dtype:(Dtype)dtype {
    NSString *url = [plumberLowapi getUrl:dtype];

    if (nil != url) {
        NSMutableURLRequest *request =
            [[NSMutableURLRequest alloc] initWithURL:[NSURL URLWithString:url]];
        [request setValue:@"AES,AES/ECB/PKCS7Padding" forHTTPHeaderField:@"Encrypt-Type"];
        [request setValue:@"application/json" forHTTPHeaderField:@"Content-Type"];
        request.HTTPMethod = @"POST";
        request.HTTPBody = data;

#ifdef DEBUG
        // NSData *DecryptData = [base64
        // base64EncodedDataWithOptions:(NSDataBase64DecodingOptions)0]; NSString *DecryptData =
        // [DecryptData comp_AES256DecryptWithKey:AES_KEY];
        NSString *str = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
        NSLog(@"lowapi senddata %@, url %@", str, url);
#endif
        NSData *encryptData = [data comp_AES256EncryptWithKey:AES_KEY];
        if (!encryptData) {
            return false;
        }

        NSString *base64 =
            [encryptData base64EncodedStringWithOptions:(NSDataBase64EncodingOptions)0];
        request.HTTPBody = [base64 dataUsingEncoding:NSUTF8StringEncoding];

        NSURLResponse *response;
        NSError *error;
        NSData *result = [NSURLConnection sendSynchronousRequest:request
                                               returningResponse:&response
                                                           error:&error];
        if (nil != result) {
            @try {
                NSDictionary *dict = [NSJSONSerialization JSONObjectWithData:result
                                                                     options:kNilOptions
                                                                       error:&error];
                {
                    NSString *message = [dict objectForKey:@"message"];
                    NSString *codestr = [dict objectForKey:@"code"];
                    NSInteger code = [codestr integerValue];
                    if (200 == code && [message isEqualToString:@"success"]) {
                        NSLog(@"success code:%ld", (long)code);
                        return true;
                    } else {
                        NSLog(@"fail code:%ld", (long)code);
                    }
                }
            } @catch (NSException *exception) {
                NSLog(@"%@", exception);
            }
        }
    }

    NSLog(@"lowapi send failed");
    return false;
}

+ (bool)PostEvent:(NSData *_Nullable)event dtype:(Dtype)dtype;
{
    if (!event) return false;
    dispatch_once(&onceToken, ^{
        Allevent = [[NSMutableDictionary alloc] init];
    });
    @synchronized(Allevent) {
        NSString *stype = [NSString stringWithFormat:@"%d", dtype];
        NSMutableDictionary *dict =
            [NSJSONSerialization JSONObjectWithData:event
                                            options:NSJSONReadingMutableContainers
                                              error:nil];
        dict[@"session_sessiontype"] = @"event";
        NSString *current = dict[@"event"];
        NSNumber *currenttime = dict[@"time_stamp"];
        uint64_t time = [(currenttime) longLongValue];
        NSData *o = [Allevent objectForKey:stype];
        //检查是否有前event
        if (nil != o) {
            //如果有前event取出
            NSMutableDictionary *odict =
                [NSJSONSerialization JSONObjectWithData:o
                                                options:NSJSONReadingMutableContainers
                                                  error:nil];
            NSString *original = odict[@"event"];
            NSNumber *lasttime = odict[@"time_stamp"];
            uint64_t originaltime = [(lasttime) longLongValue];
            uint64_t duration = (time - originaltime) / 1000;
            dict[@"event_duration"] = [[NSNumber alloc] initWithLongLong:duration];
            dict[@"event_original"] = original;
        } else {
            //如果没有前置数据
            dict[@"event_duration"] = [[NSNumber alloc] initWithLong:0];
            dict[@"event_original"] = @"fp";
        }
        //发送数据
        NSData *postevent = [NSJSONSerialization dataWithJSONObject:dict
                                                            options:kNilOptions
                                                              error:nil];
        bool ret = [plumberLowapi PostInfo:postevent dtype:dtype];
        //更新老节点
        NSMutableDictionary *record = [[NSMutableDictionary alloc] init];
        record[@"event"] = current;
        record[@"time_stamp"] = [plumberInfoBase time_stamp];
        NSData *data = [NSJSONSerialization dataWithJSONObject:record
                                                       options:kNilOptions
                                                         error:nil];
        if (nil != data) {
            [Allevent setObject:data forKey:stype];
        }
        return ret;
    }
}

+ (void)set_geoinfo:(NSString *_Nullable)city
            country:(NSString *_Nullable)country
          longitude:(float)longitude
           latitude:(float)latitude {
    // 避免设置的城市名覆盖已经解析出地址代码的城市名
    if (city) [[plumberInfoCenter sharedInstance] set_geoinfo_city:city];
    if (country) [[plumberInfoCenter sharedInstance] set_geoinfo_country:country];
    [[plumberInfoCenter sharedInstance] set_geoinfo_longitude:longitude];
    [[plumberInfoCenter sharedInstance] set_geoinfo_latitude:latitude];
    [plumberInfoCenter geoinfo];
}

@end
