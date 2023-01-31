//
//  NSURLSession+plumberHook.m
//  Compass
//
//  Created by 李耀忠 on 09/10/2017.
//

#import "NSURLSession+plumberHook.h"
#import "NSObject+plumberExtension.h"
#import <objc/runtime.h>
#import "plumberProxy.h"
#import "plumberIOSManager.h"
#import "plumberIOSManager+Private.h"

static NSMapTable *mapTable;

@implementation NSURLSession (plumberHook)

+ (void)load {
    [self comp_swizzleSelector:@selector(dataTaskWithRequest:completionHandler:) withSelector:@selector(comp_dataTaskWithRequest:completionHandler:)];
    [self comp_swizzleSelector:@selector(downloadTaskWithRequest:completionHandler:) withSelector:@selector(comp_downloadTaskWithRequest:completionHandler:)];
    [self comp_swizzleSelector:@selector(downloadTaskWithResumeData:completionHandler:) withSelector:@selector(comp_downloadTaskWithResumeData:completionHandler:)];
    [self comp_swizzleSelector:@selector(uploadTaskWithRequest:fromFile:completionHandler:) withSelector:@selector(comp_uploadTaskWithRequest:fromFile:completionHandler:)];
    [self comp_swizzleSelector:@selector(uploadTaskWithRequest:fromData:completionHandler:) withSelector:@selector(comp_uploadTaskWithRequest:fromData:completionHandler:)];

    Class meta = object_getClass(self);
    [meta comp_swizzleSelector:@selector(sessionWithConfiguration:delegate:delegateQueue:) withSelector:@selector(comp_sessionWithConfiguration:delegate:delegateQueue:)];

    /**
     WARNING: Trouble Ahead
     https://github.com/AFNetworking/AFNetworking/pull/2702
     */

    if (NSClassFromString(@"NSURLSessionTask")) {
        /**
         iOS 7 and iOS 8 differ in NSURLSessionTask implementation, which makes the next bit of code a bit tricky.
         Many Unit Tests have been built to validate as much of this behavior has possible.
         Here is what we know:
         - NSURLSessionTasks are implemented with class clusters, meaning the class you request from the API isn't actually the type of class you will get back.
         - Simply referencing `[NSURLSessionTask class]` will not work. You need to ask an `NSURLSession` to actually create an object, and grab the class from there.
         - On iOS 7, `localDataTask` is a `__NSCFLocalDataTask`, which inherits from `__NSCFLocalSessionTask`, which inherits from `__NSCFURLSessionTask`.
         - On iOS 8, `localDataTask` is a `__NSCFLocalDataTask`, which inherits from `__NSCFLocalSessionTask`, which inherits from `NSURLSessionTask`.
         - On iOS 7, `__NSCFLocalSessionTask` and `__NSCFURLSessionTask` are the only two classes that have their own implementations of `resume` and `suspend`, and `__NSCFLocalSessionTask` DOES NOT CALL SUPER. This means both classes need to be swizzled.
         - On iOS 8, `NSURLSessionTask` is the only class that implements `resume` and `suspend`. This means this is the only class that needs to be swizzled.
         - Because `NSURLSessionTask` is not involved in the class hierarchy for every version of iOS, its easier to add the swizzled methods to a dummy class and manage them there.

         Some Assumptions:
         - No implementations of `resume` or `suspend` call super. If this were to change in a future version of iOS, we'd need to handle it.
         - No background task classes override `resume` or `suspend`

         The current solution:
         1) Grab an instance of `__NSCFLocalDataTask` by asking an instance of `NSURLSession` for a data task.
         2) Grab a pointer to the original implementation of `comp_resume`
         3) Check to see if the current class has an implementation of resume. If so, continue to step 4.
         4) Grab the super class of the current class.
         5) Grab a pointer for the current class to the current implementation of `resume`.
         6) Grab a pointer for the super class to the current implementation of `resume`.
         7) If the current class implementation of `resume` is not equal to the super class implementation of `resume` AND the current implementation of `resume` is not equal to the original implementation of `comp_resume`, THEN swizzle the methods
         8) Set the current class to the super class, and repeat steps 3-8
         */
        NSURLSessionConfiguration *configuration = [NSURLSessionConfiguration ephemeralSessionConfiguration];
        NSURLSession * session = [NSURLSession sessionWithConfiguration:configuration];
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wnonnull"
#pragma GCC diagnostic ignored "-Wundeclared-selector"
//#pragma GCC diagnostic ignored "-Wincompatible-function-pointer-types"

        NSURLSessionDataTask *localDataTask = [session dataTaskWithURL:nil];
        Class currentClass = [localDataTask class];

        while (currentClass) {
            unsigned int count = 0;
            Method *methods = class_copyMethodList(currentClass, &count);
            for (NSInteger i = 0; i < count; i++) {
                Method method = methods[i];
                SEL sel = method_getName(method);
                if (sel == @selector(resume)) {
                    IMP originImp = method_getImplementation(method);
                    IMP compImp = imp_implementationWithBlock(^(id _self) {
                        if ([plumberIOSManager sharedInstance].configuration.allowInterveneNetwork) {
                            [[plumberIOSManager sharedInstance] urlSessionTaskDidStart:(NSURLSessionTask *)_self];
                        }

                        void (*func)(id, SEL) = (void (*)(id, SEL))originImp;
                        func(_self, _cmd);
                    });

                    method_setImplementation(method, compImp);
                    break;
                }
            }

            free(methods);
            currentClass = [currentClass superclass];
        }

#pragma clang diagnostic pop

        [localDataTask cancel];
        [session finishTasksAndInvalidate];
    }

    mapTable = [NSMapTable weakToStrongObjectsMapTable];
}

#pragma mark - URLSession Create

+ (NSURLSession *)comp_sessionWithConfiguration:(NSURLSessionConfiguration *)configuration delegate:(id<NSURLSessionDelegate>)delegate delegateQueue:(NSOperationQueue *)queue {
    NSURLSession *session;
    
    if ([plumberIOSManager sharedInstance].configuration.allowInterveneNetwork) {
        plumberProxy *proxy = [[plumberProxy alloc] initWithDelegate:delegate];
        session = [self comp_sessionWithConfiguration:configuration delegate:proxy delegateQueue:queue];
        [mapTable setObject:proxy forKey:session];
    } else {
        session = [self comp_sessionWithConfiguration:configuration delegate:delegate delegateQueue:queue];
    }

    NSLog(@"Create URLSession");
    return session;
}

#pragma mark - URLSessionTask

- (NSURLSessionDataTask *)comp_dataTaskWithRequest:(NSURLRequest *)request completionHandler:(void (^)(NSData * _Nullable, NSURLResponse * _Nullable, NSError * _Nullable))completionHandler {
    __block NSURLSessionDataTask *task;
    void (^comp_completionHandler)(NSData * _Nullable, NSURLResponse * _Nullable, NSError * _Nullable) = completionHandler;

    if ([plumberIOSManager sharedInstance].configuration.allowInterveneNetwork && completionHandler) {
        comp_completionHandler = ^(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error) {
            completionHandler(data, response, error);

            [[plumberIOSManager sharedInstance] urlSessionTaskDidStop:task error:error];
        };
    }

    task = [self comp_dataTaskWithRequest:request completionHandler:comp_completionHandler];
    return task;
}

- (NSURLSessionDownloadTask *)comp_downloadTaskWithRequest:(NSURLRequest *)request completionHandler:(void (^)(NSURL * _Nullable, NSURLResponse * _Nullable, NSError * _Nullable))completionHandler {
    __block NSURLSessionDownloadTask *task;
    void (^comp_completionHandler)(NSURL * _Nullable, NSURLResponse * _Nullable, NSError * _Nullable) = completionHandler;

    if ([plumberIOSManager sharedInstance].configuration.allowInterveneNetwork && completionHandler) {
        comp_completionHandler = ^(NSURL * _Nullable url, NSURLResponse * _Nullable response, NSError * _Nullable error) {
            completionHandler(url, response, error);

            [[plumberIOSManager sharedInstance] urlSessionTaskDidStop:task error:error];
        };
    }

    task = [self comp_downloadTaskWithRequest:request completionHandler:comp_completionHandler];
    return task;
}

- (NSURLSessionDownloadTask *)comp_downloadTaskWithResumeData:(NSData *)resumeData completionHandler:(void (^)(NSURL * _Nullable, NSURLResponse * _Nullable, NSError * _Nullable))completionHandler {
    __block NSURLSessionDownloadTask *task;
    void (^comp_completionHandler)(NSURL * _Nullable, NSURLResponse * _Nullable, NSError * _Nullable) = completionHandler;

    if ([plumberIOSManager sharedInstance].configuration.allowInterveneNetwork && completionHandler) {
        comp_completionHandler = ^(NSURL * _Nullable url, NSURLResponse * _Nullable response, NSError * _Nullable error) {
            completionHandler(url, response, error);

            [[plumberIOSManager sharedInstance] urlSessionTaskDidStop:task error:error];
        };
    }

    task = [self comp_downloadTaskWithResumeData:resumeData completionHandler:comp_completionHandler];
    return task;
}

- (NSURLSessionUploadTask *)comp_uploadTaskWithRequest:(NSURLRequest *)request fromData:(NSData *)bodyData completionHandler:(void (^)(NSData * _Nullable, NSURLResponse * _Nullable, NSError * _Nullable))completionHandler {
    __block NSURLSessionUploadTask *task;
    void (^comp_completionHandler)(NSData * _Nullable, NSURLResponse * _Nullable, NSError * _Nullable) = completionHandler;

    if ([plumberIOSManager sharedInstance].configuration.allowInterveneNetwork && completionHandler) {
        comp_completionHandler = ^(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error) {
            completionHandler(data, response, error);

            [[plumberIOSManager sharedInstance] urlSessionTaskDidStop:task error:error];
        };
    }

    task = [self comp_uploadTaskWithRequest:request fromData:bodyData completionHandler:comp_completionHandler];
    return task;
}

- (NSURLSessionUploadTask *)comp_uploadTaskWithRequest:(NSURLRequest *)request fromFile:(NSURL *)fileURL completionHandler:(void (^)(NSData * _Nullable, NSURLResponse * _Nullable, NSError * _Nullable))completionHandler {
    __block NSURLSessionUploadTask *task;
    void (^comp_completionHandler)(NSData * _Nullable, NSURLResponse * _Nullable, NSError * _Nullable) = completionHandler;

    if ([plumberIOSManager sharedInstance].configuration.allowInterveneNetwork && completionHandler) {
        comp_completionHandler = ^(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error) {
            completionHandler(data, response, error);

            [[plumberIOSManager sharedInstance] urlSessionTaskDidStop:task error:error];
        };
    }

    task = [self comp_uploadTaskWithRequest:request fromFile:fileURL completionHandler:comp_completionHandler];
    return task;
}

@end
