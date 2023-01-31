//
//  NSObject+plumberExtension.m
//  Compass
//
//  Created by 李耀忠 on 26/09/2017.
//

#import "NSObject+plumberExtension.h"
#import <objc/runtime.h>

@implementation NSObject (plumberExtension)

+ (void)comp_swizzleSelector:(SEL)originalSelector withSelector:(SEL)swizzledSelector {
    Class aClass = self;
    Method originalMethod = class_getInstanceMethod(aClass, originalSelector);
    Method swizzledMethod = class_getInstanceMethod(aClass, swizzledSelector);
    BOOL didAddMethod = class_addMethod(aClass, originalSelector, method_getImplementation(swizzledMethod), method_getTypeEncoding(swizzledMethod));
    if (didAddMethod) {
        class_replaceMethod(aClass, swizzledSelector, method_getImplementation(originalMethod), method_getTypeEncoding(originalMethod));
    } else {
        method_exchangeImplementations(originalMethod, swizzledMethod);
    }
}

//Model 到字典

#ifdef DEBUG

- (NSDictionary *)comp_getProperties {
    NSMutableDictionary *props = [NSMutableDictionary dictionary];
    unsigned int outCount, i;
    objc_property_t *properties = class_copyPropertyList([self class], &outCount);

    for (i = 0; i<outCount; i++) {
        objc_property_t property = properties[i];
        const char* char_f =property_getName(property);
        NSString *propertyName = [NSString stringWithUTF8String:char_f];
        id propertyValue = [self valueForKey:(NSString *)propertyName];
        if (propertyValue) {
            if ([propertyValue isKindOfClass:[NSString class]] || [propertyValue isKindOfClass:[NSNumber class]]) {
                [props setObject:propertyValue forKey:propertyName];
            } else if ([propertyValue isKindOfClass:[NSArray class]]) {
                NSMutableArray *arrayProperty = [[NSMutableArray alloc] initWithCapacity:[propertyValue count]];
                for (id element in propertyValue) {
                    [arrayProperty addObject:[element comp_getProperties]];
                }
                [props setObject:arrayProperty forKey:propertyName];
            } else if ([propertyValue isKindOfClass:[NSDictionary class]]) {
                NSMutableDictionary *dict = [NSMutableDictionary dictionaryWithCapacity:[propertyValue count]];
                for (NSString *key in propertyValue) {
                    dict[key] = [propertyValue[key] comp_getProperties];
                }
                [props setObject:dict forKey:propertyName];
            } else {
                [props setObject:[propertyValue comp_getProperties] forKey:propertyName];
            }
        }
    }
    free(properties);

    return props;
}

#endif

@end
