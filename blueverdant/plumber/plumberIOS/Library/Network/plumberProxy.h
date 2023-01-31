//
//  plumberProxy.h
//  Compass
//
//  Created by 李耀忠 on 16/10/2017.
//

#import <Foundation/Foundation.h>

@interface plumberProxy : NSProxy <NSURLSessionDelegate>

- (instancetype)initWithDelegate:(id<NSURLSessionDelegate>)delegate;

@end
