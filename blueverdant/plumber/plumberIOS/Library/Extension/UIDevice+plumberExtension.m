//
//  UIDevice+plumberExtension.m
//  Compass
//
//  Created by 李耀忠 on 24/09/2017.
//

#import "UIDevice+plumberExtension.h"
#include <sys/sysctl.h>

@implementation UIDevice (plumberExtension)

+ (NSString*)comp_devicePlatformVersion {
    size_t size;
    sysctlbyname("hw.machine",NULL, &size, NULL,0);
    char *machine = (char*)malloc(size);
    sysctlbyname("hw.machine", machine, &size,NULL, 0);
    NSString *platform = [NSString stringWithCString:machine encoding:NSUTF8StringEncoding];
    free(machine);
    return platform;
}

+ (NSString *)_comp_deviceModelName {
    NSString *platform = [self comp_devicePlatformVersion];
    //iPhone
    if ([platform isEqualToString:@"iPhone1,1"]) return @"iPhone2G";
    if ([platform isEqualToString:@"iPhone1,2"]) return @"iPhone3G";
    if ([platform isEqualToString:@"iPhone2,1"]) return @"iPhone3GS";
    if ([platform isEqualToString:@"iPhone3,1"]) return @"iPhone4";
    if ([platform isEqualToString:@"iPhone3,2"]) return @"iPhone4";
    if ([platform isEqualToString:@"iPhone3,3"]) return @"iPhone4";
    if ([platform isEqualToString:@"iPhone4,1"]) return @"iPhone4S";
    if ([platform isEqualToString:@"iPhone5,1"]) return @"iPhone5";
    if ([platform isEqualToString:@"iPhone5,2"]) return @"iPhone5";
    if ([platform isEqualToString:@"iPhone5,3"]) return @"iPhone5C";
    if ([platform isEqualToString:@"iPhone5,4"]) return @"iPhone5C";
    if ([platform isEqualToString:@"iPhone6,1"]) return @"iPhone5S";
    if ([platform isEqualToString:@"iPhone6,2"]) return @"iPhone5S";
    if ([platform isEqualToString:@"iPhone7,1"]) return @"iPhone6Plus";
    if ([platform isEqualToString:@"iPhone7,2"]) return @"iPhone6";
    if ([platform isEqualToString:@"iPhone8,1"]) return @"iPhone6S";
    if ([platform isEqualToString:@"iPhone8,2"]) return @"iPhone6SPlus";
    if ([platform isEqualToString:@"iPhone8,3"]) return @"iPhoneSE";
    if ([platform isEqualToString:@"iPhone8,4"]) return @"iPhoneSE";
    if ([platform isEqualToString:@"iPhone9,1"]) return @"iPhone7";
    if ([platform isEqualToString:@"iPhone9,2"]) return @"iPhone7Plus";
    if ([platform isEqualToString:@"iPhone10,1"]) return @"iPhone8";
    if ([platform isEqualToString:@"iPhone10,2"]) return @"iPhone8Plus";
    if ([platform isEqualToString:@"iPhone10,3"]) return @"iPhoneX";
    
    if ([platform isEqualToString:@"iPhone11,8"]) return @"iPhoneXR";
    if ([platform isEqualToString:@"iPhone11,2"]) return @"iPhoneXS";
    if ([platform isEqualToString:@"iPhone11,6"]) return @"iPhoneXSMax";
    if ([platform isEqualToString:@"iPhone12,1"]) return @"iPhone11";
    if ([platform isEqualToString:@"iPhone12,3"]) return @"iPhone11Pro";
    if ([platform isEqualToString:@"iPhone12,5"]) return @"iPhone11ProMax";
    if ([platform isEqualToString:@"iPhone12,8"]) return @"iPhoneSE2G";
    if ([platform isEqualToString:@"iPhone13,1"]) return @"iPhone12Mini";
    if ([platform isEqualToString:@"iPhone13,2"]) return @"iPhone12";
    if ([platform isEqualToString:@"iPhone13,3"]) return @"iPhone12Pro";
    if ([platform isEqualToString:@"iPhone13,4"]) return @"iPhone12ProMax";

    //iPot Touch
    if ([platform isEqualToString:@"iPod1,1"]) return @"iPodTouch";
    if ([platform isEqualToString:@"iPod2,1"]) return @"iPodTouch2";
    if ([platform isEqualToString:@"iPod3,1"]) return @"iPodTouch3";
    if ([platform isEqualToString:@"iPod4,1"]) return @"iPodTouch4";
    if ([platform isEqualToString:@"iPod5,1"]) return @"iPodTouch5";
    if ([platform isEqualToString:@"iPod7,1"]) return @"iPodTouch6";
    if ([platform isEqualToString:@"iPod9,1"]) return @"iPodTouch7G";

    //iPad
    if ([platform isEqualToString:@"iPad1,1"]) return @"iPad";
    if ([platform isEqualToString:@"iPad2,1"]) return @"iPad2";
    if ([platform isEqualToString:@"iPad2,2"]) return @"iPad2";
    if ([platform isEqualToString:@"iPad2,3"]) return @"iPad2";
    if ([platform isEqualToString:@"iPad2,4"]) return @"iPad2";
    if ([platform isEqualToString:@"iPad2,5"]) return @"iPadMini1";
    if ([platform isEqualToString:@"iPad2,6"]) return @"iPadMini1";
    if ([platform isEqualToString:@"iPad2,7"]) return @"iPadMini1";
    if ([platform isEqualToString:@"iPad3,1"]) return @"iPad3";
    if ([platform isEqualToString:@"iPad3,2"]) return @"iPad3";
    if ([platform isEqualToString:@"iPad3,3"]) return @"iPad3";
    if ([platform isEqualToString:@"iPad3,4"]) return @"iPad4";
    if ([platform isEqualToString:@"iPad3,5"]) return @"iPad4";
    if ([platform isEqualToString:@"iPad3,6"]) return @"iPad4";
    if ([platform isEqualToString:@"iPad4,1"]) return @"iPadAir";
    if ([platform isEqualToString:@"iPad4,2"]) return @"iPadAir";
    if ([platform isEqualToString:@"iPad4,3"]) return @"iPadAir";
    if ([platform isEqualToString:@"iPad4,4"]) return @"iPadMini2";
    if ([platform isEqualToString:@"iPad4,5"]) return @"iPadMini2";
    if ([platform isEqualToString:@"iPad4,6"]) return @"iPadMini2";
    if ([platform isEqualToString:@"iPad4,7"]) return @"iPadMini3";
    if ([platform isEqualToString:@"iPad4,8"]) return @"iPadMini3";
    if ([platform isEqualToString:@"iPad4,9"]) return @"iPadMini3";
    if ([platform isEqualToString:@"iPad5,1"]) return @"iPadMini4";
    if ([platform isEqualToString:@"iPad5,2"]) return @"iPadMini4";
    if ([platform isEqualToString:@"iPad11,1"]) return @"iPadMini5";
    if ([platform isEqualToString:@"iPad11,2"]) return @"iPadMini5";

    if ([platform isEqualToString:@"iPad11,3"]) return @"iPadAir3G";
    if ([platform isEqualToString:@"iPad11,4"]) return @"iPadAir3G";
    if ([platform isEqualToString:@"iPad13,1"]) return @"iPadAir4G";
    if ([platform isEqualToString:@"iPad13,2"]) return @"iPadAir4G";

    if ([platform isEqualToString:@"iPad5,3"]) return @"iPadAir2";
    if ([platform isEqualToString:@"iPad5,4"]) return @"iPadAir2";
    if ([platform isEqualToString:@"iPad6,3"]) return @"iPadPro97";
    if ([platform isEqualToString:@"iPad6,4"]) return @"iPadPro97";
    if ([platform isEqualToString:@"iPad6,7"]) return @"iPadPro129";
    if ([platform isEqualToString:@"iPad6,8"]) return @"iPadPro129";
    if ([platform isEqualToString:@"iPad6,11"]) return @"iPad5WiFi";
    if ([platform isEqualToString:@"iPad6,12"]) return @"iPad5Cellular";
    
    if ([platform isEqualToString:@"iPad7,5"]) return @"iPad6G";
    if ([platform isEqualToString:@"iPad7,6"]) return @"iPad6G";
    if ([platform isEqualToString:@"iPad7,11"]) return @"iPad7G";
    if ([platform isEqualToString:@"iPad7,12"]) return @"iPad7G";
    if ([platform isEqualToString:@"iPad11,6"]) return @"iPad8G";
    if ([platform isEqualToString:@"iPad11,7"]) return @"iPad8G";
    
    if ([platform isEqualToString:@"iPad7,1"]) return @"iPadPro1292GWiFi";
    if ([platform isEqualToString:@"iPad7,2"]) return @"iPadPro1292GCellular";
    if ([platform isEqualToString:@"iPad7,3"]) return @"iPadPro105WiFi";
    if ([platform isEqualToString:@"iPad7,4"]) return @"iPadPro105Cellular";
    
    if ([platform isEqualToString:@"iPad8,1"]) return @"iPadPro11inch";
    if ([platform isEqualToString:@"iPad8,2"]) return @"iPadPro11inch";
    if ([platform isEqualToString:@"iPad8,3"]) return @"iPadPro11inch";
    if ([platform isEqualToString:@"iPad8,4"]) return @"iPadPro11inch";
    if ([platform isEqualToString:@"iPad8,5"]) return @"iPadPro12d9inch3G";
    if ([platform isEqualToString:@"iPad8,6"]) return @"iPadPro12d9inch3G";
    if ([platform isEqualToString:@"iPad8,7"]) return @"iPadPro12d9inch3G";
    if ([platform isEqualToString:@"iPad8,8"]) return @"iPadPro12d9inch3G";
    if ([platform isEqualToString:@"iPad8,9"]) return @"iPadPro11inch2G";
    if ([platform isEqualToString:@"iPad8,10"]) return @"iPadPro11inch2G";
    if ([platform isEqualToString:@"iPad8,11"]) return @"iPadPro11inch2G";
    if ([platform isEqualToString:@"iPad8,12"]) return @"iPadPro12d9inch4G";

    if ([platform isEqualToString:@"AppleTV2,1"]) return @"AppleTV2";
    if ([platform isEqualToString:@"AppleTV3,1"]) return @"AppleTV3";
    if ([platform isEqualToString:@"AppleTV3,2"]) return @"AppleTV3";
    if ([platform isEqualToString:@"AppleTV5,3"]) return @"AppleTV4";
    if ([platform isEqualToString:@"AppleTV5,3"]) return @"appleTV4G";
    if ([platform isEqualToString:@"AppleTV6,2"]) return @"appleTV4K";
    
    if ([platform isEqualToString:@"iPhone Simulator"] || [platform isEqualToString:@"x86_64"] || [platform isEqualToString:@"i386"]) return @"iPhoneSimulator";
    return platform;
}

+ (NSString *)comp_deviceModelName {
    static NSString *deviceModelName = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        deviceModelName = [self _comp_deviceModelName];
    });

    return deviceModelName;
}

@end
