//
//  NSObject+plumberExtension.h
//  Compass
//
//  Created by 李耀忠 on 26/09/2017.
//

#import <Foundation/Foundation.h>

@interface NSObject (plumberExtension)

+ (void)comp_swizzleSelector:(SEL)originalSelector withSelector:(SEL)swizzledSelector;

#ifdef DEBUG
- (NSDictionary *)comp_getProperties;
#endif

@end
