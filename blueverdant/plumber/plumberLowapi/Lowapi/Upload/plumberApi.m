//
//  plumberApi.m
//  Compass
//
//  Created by 李耀忠 on 25/09/2017.

//

#import "plumberApi.h"
#import "NSData+plumberAES.h"
//#import "plumberConstant.h"
//#import "Recorditem.pb.h"
//#import "NSObject+plumberExtension.h"

static NSString *plumberErrorDomain = @"plumberErrorDomain";

@interface plumberApi () <NSURLSessionDelegate>

@property(nonatomic) NSURLSession *session;
@property(nonatomic) NSOperationQueue *operationQueue;
//@property(nonatomic, copy) NSString *message;
//@property(nonatomic, copy) NSString *code;

@end

@implementation plumberApi

+ (instancetype)sharedInstance {
    static dispatch_once_t onceToken;
    static plumberApi *instance;
    dispatch_once(&onceToken, ^{
        instance = [[plumberApi alloc] init];
    });

    return instance;
}

- (instancetype)init {
    self = [super init];
    if (self) {
        NSURLSessionConfiguration *configuration =
            [NSURLSessionConfiguration defaultSessionConfiguration];
        configuration.timeoutIntervalForRequest = 30;
        configuration.allowsCellularAccess = YES;

        _operationQueue = [[NSOperationQueue alloc] init];
        _operationQueue.maxConcurrentOperationCount = 1;
        _session = [NSURLSession sessionWithConfiguration:configuration
                                                 delegate:self
                                            delegateQueue:_operationQueue];
    }

    return self;
}

#pragma mark - Task

+ (NSURLSessionDataTask *)post:(NSString *)url
                      jsonData:(NSData *)data
             completionHandler:(void (^)(NSError *error))completionHandler {
    NSMutableURLRequest *request =
        [[NSMutableURLRequest alloc] initWithURL:[NSURL URLWithString:url]];
    [request setValue:@"AES,AES/ECB/PKCS7Padding" forHTTPHeaderField:@"Encrypt-Type"];
    [request setValue:@"application/json" forHTTPHeaderField:@"Content-Type"];
    request.HTTPMethod = @"POST";

    NSData *encryptData = [data comp_AES256EncryptWithKey:AES_KEY];
    if (!encryptData) {
        NSError *error = [NSError errorWithDomain:plumberErrorDomain
                                             code:plumberApiErrorCodeEncrypt
                                         userInfo:nil];
        completionHandler(error);
        return nil;
    }

    NSString *base64 = [encryptData base64EncodedStringWithOptions:(NSDataBase64EncodingOptions)0];
    request.HTTPBody = [base64 dataUsingEncoding:NSUTF8StringEncoding];

#ifdef DEBUG
    // NSData *DecryptData = [base64 base64EncodedDataWithOptions:(NSDataBase64DecodingOptions)0];
    // NSString *DecryptData = [DecryptData comp_AES256DecryptWithKey:AES_KEY];
    NSString *str = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
    NSLog(@"Upload data %@, url %@", str, url);
#endif

    NSURLSessionDataTask *task = [[plumberApi sharedInstance].session
        dataTaskWithRequest:request
          completionHandler:^(NSData *_Nullable data, NSURLResponse *_Nullable response,
                              NSError *_Nullable error) {
              if (completionHandler) {
                  NSInteger errorCode = 0;
                  if (error) {
                      errorCode = plumberApiErrorCodeLocal;
                  } else {
                      NSError *error;
                      NSDictionary *dict = [NSJSONSerialization JSONObjectWithData:data
                                                                           options:kNilOptions
                                                                             error:&error];
                      {
                          NSString *message = [dict objectForKey:@"message"];
                          NSString *codestr = [dict objectForKey:@"code"];
                          NSInteger code = [codestr integerValue];
                          if (200 == code && [message isEqualToString:@"success"]) {
                              completionHandler(nil);
                              NSLog(@"success code:%ld", (long)code);
                              return;
                          } else {
                              errorCode = code;
                              NSLog(@"fail code:%ld", (long)code);
                          }
                      }
                  }
                  NSError *compError = [[NSError alloc] initWithDomain:plumberErrorDomain
                                                                  code:errorCode
                                                              userInfo:nil];
                  completionHandler(compError);
              }
          }];

    [task resume];

    return task;
}

+ (bool)postcrash:(NSString *)url jsonData:(NSData *)data {
    return [plumberApi postwithoutrepeat:url jsonData:data];
}
+ (bool)postwithoutrepeat:(NSString *)url jsonData:(NSData *)data {
    NSMutableURLRequest *request =
        [[NSMutableURLRequest alloc] initWithURL:[NSURL URLWithString:url]];
    [request setValue:@"AES,AES/ECB/PKCS7Padding" forHTTPHeaderField:@"Encrypt-Type"];
    [request setValue:@"application/json" forHTTPHeaderField:@"Content-Type"];
    request.HTTPMethod = @"POST";
    request.HTTPBody = data;

#ifdef DEBUG
    // NSData *DecryptData = [base64 base64EncodedDataWithOptions:(NSDataBase64DecodingOptions)0];
    // NSString *DecryptData = [DecryptData comp_AES256DecryptWithKey:AES_KEY];
    NSString *str = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
    NSLog(@"Upload data %@, url %@", str, url);
#endif
    NSData *encryptData = [data comp_AES256EncryptWithKey:AES_KEY];
    if (!encryptData) {
        [NSError errorWithDomain:plumberErrorDomain code:plumberApiErrorCodeEncrypt userInfo:nil];
        return false;
    }

    NSString *base64 = [encryptData base64EncodedStringWithOptions:(NSDataBase64EncodingOptions)0];
    request.HTTPBody = [base64 dataUsingEncoding:NSUTF8StringEncoding];

    NSURLResponse *response;
    NSError *error;
    NSData *result = [NSURLConnection sendSynchronousRequest:request
                                           returningResponse:&response
                                                       error:&error];

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
    return false;
}

+ (bool)postevent:(NSString *)url jsonData:(NSData *)data {
    return [plumberApi postwithoutrepeat:url jsonData:data];
}

@end
