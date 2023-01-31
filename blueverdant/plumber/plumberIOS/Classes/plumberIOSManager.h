//
//  plumberCompassManager.h
//  Compass
//
//  Created by 李耀忠 on 24/09/2017.
//

#import <UIKit/UIKit.h>
#import "plumberConfiguration.h"
#define DATABASE_PATH @"plumber.db"
@interface plumberIOSManager : NSObject

+ (void)plumberStart:(plumberConfiguration*)plumberConf
             appName:(NSString*)appname
                 uid:(NSString*)uid;  // no allow nil

+ (void)set_uid_login:(BOOL)uid_login;
+ (void)set_uid_uid:(NSString*)uid_uid;
+ (void)set_uid_idfa:(NSString*)uid_idfa;
+ (void)set_device_sim_number:(NSString*)device_sim_number;
+ (void)set_appmeta_appname:(NSString*)appmeta_appname;
+ (void)set_appmeta_appver:(NSString*)appmeta_appver;
+ (void)set_appmeta_channel:(NSString*)appmeta_channel;
+ (void)set_geoinfo:(NSString*)city
            country:(NSString*)country
          longitude:(float)longitude
           latitude:(float)latitude;

/*
 系统路径功能，
 1、routing表示路径名字，在关联统计中有用
 2、grouprouting有值时，表示是一个路径组，routing则成为子路由，在关联聚类统计中有用。
 3、eventname是当前事件的别名，用于服务器计算过滤条件
 4、eventkey立即上报描述，若无描述，等同于普通路径，不会上报

 当出现a-1-b，a-2-b的路由事件，路由1和2可以合并成路由c
 当出现a-b，b-c，c-d，b-d，a-d这种复杂情况，可以在部分b做filter，用于筛选一些逻辑特殊情况比如只想关心a-b同时也符合b-d的类型但需要排除c-d类型，就可以使用eventname做标记，将部分不符合逻辑的路径剔除，该关键字主要用于复杂的分类，聚类混合运算
 参数名称长度不得少于6个字符，不得多于32个字符
 */
+ (NSString*)push_routing_group:(NSString*)routing
                   grouprouting:(NSString*)grouprouting
                     filtername:(NSString*)filtername
                    eventfilter:(NSString*)eventfilter;

+ (void)plumberSendJSException:(NSException*)exception;
@end
