//
//  UncaughtExceptionHandler.m
//  TessarMobileSDK
//
//  Created by dingrui_cx on 13-10-13.
//  Copyright (c) 2013年 dingrui_cx. All rights reserved.
//

#import "UncaughtExceptionHandler.h"

#import "plumberApi.h"
//#import "plumberIOSManager+Private.h"
//#import "plumberDatabase.h"
#import "plumberInfoCenter.h"

@implementation UncaughtExceptionHandler

+ (NSUncaughtExceptionHandler *)getUncaughtExceptionHandler {
    @try {
        return NSGetUncaughtExceptionHandler();
    } @catch (NSException *exception) {
    } @finally {
    }
}

+ (void)setUncaughtExceptionHandler {
    @try {
        NSSetUncaughtExceptionHandler(&ExceptionHandler);
    } @catch (NSException *exception) {
        return;
    } @finally {
    }
}

+ (void)setSingalHandler {
    @try {
        struct sigaction mySigAction;
        mySigAction.sa_sigaction = StackTrace;
        mySigAction.sa_flags = SA_SIGINFO;

        sigemptyset(&mySigAction.sa_mask);
        sigaction(SIGQUIT, &mySigAction, NULL);
        sigaction(SIGILL, &mySigAction, NULL);
        sigaction(SIGTRAP, &mySigAction, NULL);
        sigaction(SIGABRT, &mySigAction, NULL);
        sigaction(SIGEMT, &mySigAction, NULL);
        sigaction(SIGFPE, &mySigAction, NULL);
        sigaction(SIGBUS, &mySigAction, NULL);
        sigaction(SIGSEGV, &mySigAction, NULL);
        sigaction(SIGSYS, &mySigAction, NULL);
        sigaction(SIGPIPE, &mySigAction, NULL);
        sigaction(SIGXCPU, &mySigAction, NULL);
        sigaction(SIGXFSZ, &mySigAction, NULL);
    } @catch (NSException *exception) {
        return;
    } @finally {
    }
}

+ (void)enableExceptionHandler {
    @try {
        [self setUncaughtExceptionHandler];
        [self setSingalHandler];
    } @catch (NSException *exception) {
        return;
    } @finally {
    }
}

+ (NSData *)getDeviceInfo:(NSMutableDictionary *)ExceptionDict {
    @try {
        return [[plumberInfoCenter sharedInstance] getExceptionInfo:ExceptionDict];

    } @catch (NSException *exception) {
        return nil;
    }
}

void StackTrace(int sig, siginfo_t *info, void *context) {
    @try {
        NSMutableDictionary *stackInfo = [NSMutableDictionary dictionary];

        NSMutableString *strStack = [NSMutableString stringWithCapacity:3072];
        void *callstack[128];
        int frames = backtrace(callstack, 128);
        char **strs = backtrace_symbols(callstack, frames);
        for (int i = 0; i < frames; i++) {
            [strStack appendFormat:@"%s\n", strs[i]];
        }
        free(strs);

        sigignore(sig);
        sigignore(SIGQUIT);
        sigignore(SIGILL);
        sigignore(SIGTRAP);
        sigignore(SIGABRT);
        sigignore(SIGEMT);
        sigignore(SIGFPE);
        sigignore(SIGBUS);
        sigignore(SIGSEGV);
        sigignore(SIGSYS);
        sigignore(SIGPIPE);
        sigignore(SIGXCPU);
        sigignore(SIGXFSZ);

        [stackInfo setObject:strStack forKey:@"stack"];
        NSData *jsonData = [UncaughtExceptionHandler getDeviceInfo:stackInfo];
        NSString *url = [[plumberInfoCenter sharedInstance] getCrashUrl];
        if (jsonData != nil && [jsonData length] > 0) {
#ifdef DEBUG
            NSLog(@"Upload data %@", stackInfo);
#endif
            bool ret = [plumberApi postcrash:url jsonData:jsonData];
            if (false == ret) {
                //[[plumberIOSManager sharedInstance] addStatisticsDataToDB:jsonData];
            }
        }

    } @catch (NSException *exception) {
        return;
    } @finally {
    }
}
+ (void)JSExceptionHandler:(NSException *)exception {
    @try {
        NSMutableDictionary *stackInfo = [NSMutableDictionary dictionary];
        [stackInfo setObject:[exception name] forKey:@"exception_class"];
        [stackInfo setObject:[exception reason] forKey:@"exception_msg"];
        NSData *jsonData = [UncaughtExceptionHandler getDeviceInfo:stackInfo];
        NSString *url = [[plumberInfoCenter sharedInstance] getCrashUrl];
        if (jsonData != nil && [jsonData length] > 0) {
#ifdef DEBUG
            NSLog(@"Exception Info %@", stackInfo);
#endif
            bool ret = [plumberApi postcrash:url jsonData:jsonData];
            if (false == ret) {
                //[[plumberIOSManager sharedInstance] addStatisticsDataToDB:jsonData];
            }
        } else {
            // return nil;
        }
    } @catch (NSException *exception) {
        return;
    } @finally {
    }
}

void ExceptionHandler(NSException *exception) {
    @try {
        sigignore(SIGQUIT);
        sigignore(SIGILL);
        sigignore(SIGTRAP);
        sigignore(SIGABRT);
        sigignore(SIGEMT);
        sigignore(SIGFPE);
        sigignore(SIGBUS);
        sigignore(SIGSEGV);
        sigignore(SIGSYS);
        sigignore(SIGPIPE);
        sigignore(SIGXCPU);
        sigignore(SIGXFSZ);

        NSMutableDictionary *stackInfo = [NSMutableDictionary dictionary];

        NSArray *symbols = [exception callStackSymbols];
        NSString *strStack =
            [NSString stringWithFormat:@"%@", [symbols componentsJoinedByString:@"\n"]];
        [stackInfo setObject:strStack forKey:@"stack"];
        [stackInfo setObject:[exception name] forKey:@"exception_class"];
        [stackInfo setObject:[exception reason] forKey:@"exception_msg"];
        NSData *jsonData = [UncaughtExceptionHandler getDeviceInfo:stackInfo];
        NSString *url = [[plumberInfoCenter sharedInstance] getCrashUrl];
        if (jsonData != nil && [jsonData length] > 0) {
#ifdef DEBUG
            NSLog(@"Exception Info %@", stackInfo);
#endif
            bool ret = [plumberApi postcrash:url jsonData:jsonData];
            if (false == ret) {
                //[[plumberIOSManager sharedInstance] addStatisticsDataToDB:jsonData];
            }
        } else {
            // return nil;
        }
    } @catch (NSException *exception) {
        return;
    } @finally {
    }
}

@end
