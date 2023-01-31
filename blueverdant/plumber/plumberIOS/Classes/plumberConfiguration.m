//
//  plumberConfiguration.m
//  Compass
//
//  Created by 李耀忠 on 28/09/2017.

//

#import "plumberConfiguration.h"
#import "plumberConfig.h"
#import "plumberConfiguration+Private.h"

@implementation plumberConfiguration

+ (instancetype)defaultConfiguration {
    plumberConfiguration *configuration = [[plumberConfiguration alloc] init];
    configuration.allowsCellularAccess = YES;
    configuration.maxRecordCountPerUpload = UPLOAD_COUNT;
    configuration.timeIntervalForUpload = UPLOAD_INTERVAL;
    configuration.allowInterveneNetwork = false;
    configuration.allowCatchException = YES;
    return configuration;
}

@end
