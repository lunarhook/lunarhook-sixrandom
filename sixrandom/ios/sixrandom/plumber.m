//
//  plumber.m
//  sixrandom
//
//  Created by Mac on 2018/7/26.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import  <UIKit/UIKit.h>
#include <libkern/OSAtomic.h>
#include <execinfo.h>
#import "plumber.h"
#import "plumberIOSManager.h"

@implementation NativePlumber

RCT_EXPORT_MODULE(NativePlumber);

// 导出方法，桥接到js的方法返回值类型必须是void
RCT_EXPORT_METHOD(PlumberRouting:(NSString *)routing GroupRouting:(NSString *)grouprouting filtername:(NSString*)filtername eventfilter:(NSString*)eventfilter){
  NSLog(@"%@ ===> PlumberRouting",routing);
  [plumberIOSManager push_routing_group:routing grouprouting:grouprouting filtername:filtername eventfilter:eventfilter];
}

RCT_EXPORT_METHOD(SetHandlerException:(NSString *)errormessage dev:(BOOL)devmode)
{
  NSLog(@"SetHandlerException ===> %@",errormessage);
  NSString *exceptionName = @"reactnative";    //异常的原因
  NSString *exceptionReason = errormessage;    //异常的信息
  NSDictionary *exceptionUserInfo = nil;
  NSException *exception = [NSException exceptionWithName:exceptionName reason:exceptionReason userInfo:exceptionUserInfo];
  [plumberIOSManager plumberSendJSException:exception];
  if(false==devmode)
  {
    exit(0);
  }
}

RCT_EXPORT_METHOD(PlumberGetChannel:(RCTResponseSenderBlock)callBack){
      NSString *build =@"Ios";
      callBack(@[[NSNull null],build]);
}
RCT_EXPORT_METHOD(PlumberGetAppVersion:(RCTResponseSenderBlock)callBack){
  NSDictionary *infoDictionary = [[NSBundle mainBundle] infoDictionary];
      NSString *app_Name = [infoDictionary objectForKey:@"CFBundleDisplayName"];
  NSString *app_Version = [infoDictionary objectForKey:@"CFBundleShortVersionString"];
      callBack(@[[NSNull null],app_Name,app_Version]);
}


@end

