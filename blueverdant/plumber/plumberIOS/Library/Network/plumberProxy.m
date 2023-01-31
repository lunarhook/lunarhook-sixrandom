//
//  plumberProxy.m
//  Compass
//
//  Created by 李耀忠 on 16/10/2017.
//

#import "plumberProxy.h"
#import "plumberIOSManager+Private.h"
#import "plumberInfoBase.h"
#import <Availability.h>
#import <objc/runtime.h>

@interface plumberProxy ()

@property (nonatomic) NSObject<NSURLSessionDelegate> *delegate;

@end

@implementation plumberProxy

- (instancetype)initWithDelegate:(id<NSURLSessionDelegate>)delegate {
    _delegate = delegate;

    return self;
}

- (BOOL)respondsToSelector:(SEL)aSelector {
#if (defined(__IPHONE_10_0) && __IPHONE_OS_VERSION_MAX_ALLOWED >= __IPHONE_10_0)
    if (IS_IOS_VERSION_GREATER_THAN_OR_EQUAL_TO_10) {
        if (aSelector == @selector(URLSession:task:didFinishCollectingMetrics:)) {
            return YES;
        }
    }
#endif

    if (aSelector == @selector(URLSession:task:didSendBodyData:totalBytesSent:totalBytesExpectedToSend:) ||
        aSelector == @selector(URLSession:dataTask:didReceiveResponse:completionHandler:) ||
        aSelector == @selector(URLSession:task:didCompleteWithError:)) {
        return YES;
    }
    BOOL result = [self.delegate respondsToSelector:aSelector];
    return result;
}

- (NSMethodSignature *)methodSignatureForSelector:(SEL)sel {
    NSMethodSignature *signature = [self.delegate methodSignatureForSelector:sel];
    return signature;
}

- (void)forwardInvocation:(NSInvocation *)invocation {
    [invocation invokeWithTarget:self.delegate];
}


#pragma mark - NSURLSessionTaskDelegate

- (void)URLSession:(NSURLSession *)session
              task:(NSURLSessionTask *)task
   didSendBodyData:(int64_t)bytesSent
    totalBytesSent:(int64_t)totalBytesSent
totalBytesExpectedToSend:(int64_t)totalBytesExpectedToSend
{
    if ([self.delegate respondsToSelector:@selector(URLSession:task:didSendBodyData:totalBytesSent:totalBytesExpectedToSend:)]) {
        [(id<NSURLSessionTaskDelegate>)self.delegate URLSession:session task:task didSendBodyData:bytesSent totalBytesSent:totalBytesSent totalBytesExpectedToSend:totalBytesExpectedToSend];
    }

    [[plumberIOSManager sharedInstance] urlSessionTask:task totalBytesExpectedToSend:totalBytesExpectedToSend];
}

- (void)URLSession:(NSURLSession *)session
              task:(NSURLSessionTask *)task
didCompleteWithError:(NSError *)error
{
    if ([self.delegate respondsToSelector:@selector(URLSession:task:didCompleteWithError:)]) {
        [(id<NSURLSessionTaskDelegate>)self.delegate URLSession:session task:task didCompleteWithError:error];
    }

    [[plumberIOSManager sharedInstance] urlSessionTaskDidStop:task error:error];
}

#if (defined(__IPHONE_10_0) && __IPHONE_OS_VERSION_MAX_ALLOWED >= __IPHONE_10_0)

- (void)URLSession:(NSURLSession *)session task:(nonnull NSURLSessionTask *)task didFinishCollectingMetrics:(nonnull NSURLSessionTaskMetrics *)metrics {
    if (IS_IOS_VERSION_GREATER_THAN_OR_EQUAL_TO_10) {
        if ([self.delegate respondsToSelector:@selector(URLSession:task:didFinishCollectingMetrics:)]) {
            [(id<NSURLSessionTaskDelegate>)self.delegate URLSession:session task:task didFinishCollectingMetrics:metrics];
        }

        [[plumberIOSManager sharedInstance] urlSessionTask:task didFinishCollectingMetrics:metrics];
    }
}

#endif

#pragma mark - NSURLSessionDataDelegate

- (void)URLSession:(NSURLSession *)session
          dataTask:(NSURLSessionDataTask *)dataTask
didReceiveResponse:(NSURLResponse *)response
 completionHandler:(void (^)(NSURLSessionResponseDisposition disposition))completionHandler
{
    if ([self.delegate respondsToSelector:@selector(URLSession:dataTask:didReceiveResponse:completionHandler:)]) {
        [(id<NSURLSessionDataDelegate>)self.delegate URLSession:session dataTask:dataTask didReceiveResponse:response completionHandler:completionHandler];
    } else if (completionHandler) {
        completionHandler(NSURLSessionResponseAllow);
    }

    [[plumberIOSManager sharedInstance] urlSessionTask:dataTask didReceiveResponse:response ts:[plumberInfoBase timestampInMiniseconds]];
}


@end
