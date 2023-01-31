//
//  plumberConfiguration.h
//  Compass
//
//  Created by 李耀忠 on 28/09/2017.

//

#import <Foundation/Foundation.h>

@interface plumberConfiguration : NSObject

//是否允许拦截网络请求, 默认为YES
@property(nonatomic) BOOL allowInterveneNetwork;

@property(nonatomic) BOOL allowCatchException;

@end
