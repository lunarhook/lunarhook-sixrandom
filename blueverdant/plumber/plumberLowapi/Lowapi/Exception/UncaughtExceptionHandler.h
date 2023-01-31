//
//  UncaughtExceptionHandler.h
//  TessarMobileSDK
//
//  Created by dingrui_cx on 13-10-13.
//  Copyright (c) 2013年 dingrui_cx. All rights reserved.
//

#import <Foundation/Foundation.h>
#include <execinfo.h>
#include <signal.h>

@interface UncaughtExceptionHandler : NSObject {
}

+ (void)enableExceptionHandler;

+ (void)setUncaughtExceptionHandler;

+ (void)setSingalHandler;

+ (void)JSExceptionHandler:(NSException*)exception;

@end
