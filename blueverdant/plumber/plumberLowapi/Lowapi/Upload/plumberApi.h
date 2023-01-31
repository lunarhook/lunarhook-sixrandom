//
//  plumberApi.h
//  Compass
//
//  Created by 李耀忠 on 25/09/2017.
//

#import <Foundation/Foundation.h>

static NSString *plumberErrorDomain;

typedef NS_ENUM(NSInteger, plumberApiErrorCode) {
    plumberApiErrorCodeLocal = -1,

    plumberApiErrorCodeUndefined = 0,
    plumberApiErrorCodeParamInvalid = 400,
    plumberApiErrorCodeEncrypt = 480,
    plumberApiErrorCodePBParse = 481,
    plumberApiErrorCodeServerInternalException = 500,
};

@interface plumberApi : NSObject

+ (NSURLSessionDataTask *)post:(NSString *)url
                      jsonData:(NSData *)data
             completionHandler:(void (^)(NSError *error))completionHandler;

+ (bool)postwithoutrepeat:(NSString *)url jsonData:(NSData *)data;

+ (bool)postcrash:(NSString *)url jsonData:(NSData *)data;

+ (bool)postevent:(NSString *)url jsonData:(NSData *)data;

@end
