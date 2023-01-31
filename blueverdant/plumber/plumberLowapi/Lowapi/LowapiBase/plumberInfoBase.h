//
//  plumberInfoBase.h
//  plumberIOS
//
//  Created by Mac on 2018/5/11.
//

#ifndef plumberInfoBase_h
#define plumberInfoBase_h
#import <CoreLocation/CoreLocation.h>
#import <CoreMotion/CoreMotion.h>
#define IS_IOS_VERSION_GREATER_THAN_OR_EQUAL_TO_10 \
    ([NSProcessInfo processInfo].operatingSystemVersion.majorVersion >= 10)
static NSString *sdkver = @"2.6.2";
#define plumber_USER_KEY_START_TIME @"plumber_startTime"
#define plumber_USER_KEY_BACKGROUND_TIME @"plumber_background"
#define NO_VALUE -1

@interface plumberInfoBase : NSObject

+ (NSString *)geoinfo;
- (Boolean)geoReady;
- (NSNumber *)isDeviceJailbroken;
// singleton center
+ (instancetype)sharedInstance;

// mapping the key-vale data format same keyname function
// 硬件识别
+ (NSString *)uid_sid;
+ (NSString *)uid_uid;

+ (NSString *)uid_idfa;
+ (NSString *)uid_imei;
+ (NSString *)uid_idfv;
+ (NSString *)uid_imsi;
+ (NSString *)uid_mac;
+ (NSString *)uid_phone_number;
+ (NSString *)uid_androidid;
+ (NSNumber *)uid_login;
//系统识别
+ (NSString *)device_phone_name;
+ (NSString *)device_os_ver;
+ (NSString *)device_os;
+ (NSString *)device_brand;
+ (NSString *)device_sim_number;
+ (NSString *)device_model;
+ (NSString *)device_type;
+ (NSNumber *)device_FontScale;
//存储识别
+ (NSNumber *)device_sc;
+ (NSNumber *)device_rc;
//处理器识别
+ (NSString *)device_cpu;
+ (double)device_TotalMemory;
//电池识别
+ (NSNumber *)device_is_charge;
+ (NSString *)device_battery;
+ (NSNumber *)device_batterypercent;
//输入识别
+ (NSNumber *)device_is_usbdebug;
+ (NSNumber *)device_volume;
+ (NSString *)device_resolution;
+ (NSNumber *)device_shake;
+ (NSString *)device_typewriting;
//网络识别
+ (NSArray *)device_SupportedAbis;
+ (NSNumber *)device_timezone;
+ (NSString *)network_signal;
+ (NSString *)network_mobile;
+ (NSString *)network_mnc;
+ (NSString *)network_cellid;
+ (NSString *)network_ip;
+ (NSString *)network_dnscache_ip;
//地理识别
+ (NSString *)geoinfo_city;
+ (NSString *)geoinfo_country;
+ (NSNumber *)geoinfo_longitude;
+ (NSNumber *)geoinfo_latitude;
// wifi网络识别
+ (NSString *)wifi_curname;
+ (NSString *)wifi_curmac;
+ (NSString *)wifi_wifilist;
//用户偏好
+ (NSString *)device_applist;
//用户使用行为，服务器提供
//+ (NSString *)session_sessiontype;
//+ (NSString *)session_duration;
//+ (NSString *)session_opentype;
//+ (NSString *)session_appname3rd;
//服务器识别，服务器提供
//+ (NSString *)server_uuid;
//+ (NSString *)server_action;
//+ (NSString *)server_time;
//项目定义信息
+ (NSString *)appmeta_appname;
+ (NSString *)appmeta_appbundlename;
+ (NSString *)appmeta_appver;
+ (NSString *)appmeta_channel;
+ (NSString *)sdk_version;
//异常信息，外部提供
//+ (NSString *)exception_class;
//+ (NSString *)exception_msg;
//+ (NSString *)stack;
//时间戳
+ (NSNumber *)time_stamp;
- (BOOL)uid_retain:(NSMutableDictionary *)dict;
+ (void)setgeoinfo_country:(NSString *)s_country;
+ (void)setgeoinfo_city:(NSString *)s_city;
+ (void)setgeoinfo_longitude:(float)s_longitude;
+ (void)setgeoinfo_latitude:(float)s_latitude;
// membership array for construction datainfo by different situtation or condition like crash
@property(nonatomic) NSArray *Allkey;
@property(nonatomic) NSArray *DeviceSetupInfo;
@property(nonatomic) NSArray *SessionInfo;
@property(nonatomic) NSArray *Exception;
@property(nonatomic) NSArray *RoutingInfo;
@property(nonatomic) NSArray *RetainInfo;
@property(nonatomic) NSArray *EventInfo;
@property(nonatomic) NSArray *PassportDeviceInfo;

@property(nonatomic, readwrite) NSString *set_uid_uid;
@property(nonatomic, readwrite) NSNumber *set_uid_login;
@property(nonatomic, readwrite) NSString *set_uid_idfa;
@property(nonatomic, readwrite) NSString *set_device_sim_number;
@property(nonatomic, readwrite) NSString *set_appmeta_appname;
@property(nonatomic, readwrite) NSString *set_appmeta_appver;
@property(nonatomic, readwrite) NSString *set_appmeta_channel;
@property(nonatomic, readwrite) float set_geoinfo_longitude;
@property(nonatomic, readwrite) float set_geoinfo_latitude;
@property(nonatomic, readwrite) NSString *set_geoinfo_country;
@property(nonatomic, readwrite) NSString *set_geoinfo_city;
- (NSString *)get_uid_uid;
- (NSString *)get_uid_idfa;
- (BOOL)get_uid_login;
- (NSString *)get_device_sim_number;
- (NSString *)get_appmeta_appname;
- (NSString *)get_appmeta_appver;
- (NSString *)get_appmeta_channel;
- (float)get_geoinfo_longitude;
- (float)get_geoinfo_latitude;
- (NSString *)get_geoinfo_country;
- (NSString *)get_geoinfo_city;

- (void)set_uid_uid:(NSString *)uid_uid;
- (void)set_uid_login:(BOOL)uid_login;
- (void)set_uid_idfa:(NSString *)uid_idfa;
- (void)set_device_sim_number:(NSString *)device_sim_number;
- (void)set_appmeta_appname:(NSString *)appmeta_appname;
- (void)set_appmeta_appver:(NSString *)appmeta_appver;
- (void)set_appmeta_channel:(NSString *)appmeta_channel;
- (void)set_geoinfo_longitude:(float)geoinfo_longitude;
- (void)set_geoinfo_latitude:(float)geoinfo_latitude;
- (void)set_geoinfo_country:(NSString *)geoinfo_country;
- (void)set_geoinfo_city:(NSString *)geoinfo_city;

- (NSMutableDictionary *)updateinfo:(NSMutableDictionary *)dict;

+ (NSDictionary *)getUUIDDictionary;
+ (void)getuuid;
+ (NSString *)uniquemacuuid;
+ (NSString *)getuniquemac;
+ (NSString *)getDeviceIPAddresses;

+ (int64_t)timestampInMiniseconds;
+ (NSString *)currentDateString;
@end

#endif /* plumberInfoBase_h */
