//
//  NSData+plumberAES.h
//  Compass
//
//  Created by 李耀忠 on 16/10/2017.
//

#import <Foundation/Foundation.h>
#define AES_KEY @"swxapktzteyjsali"
@interface NSData (plumberAES)

#pragma mark - Encrypt
- (NSData *)comp_AES256EncryptWithKey:(NSString *)key;
- (NSData *)comp_AES256EncryptWithKeyData:(NSData *)key;
- (NSData *)comp_AES256EncryptWithKeyData:(NSData *)key
                                isCBCMode:(BOOL)bCBCMode
                               initVector:(NSData *)initVector;

- (NSData *)comp_AES256DecryptWithKey:(NSString *)key;
- (NSData *)comp_AES256DecryptWithKeyData:(NSData *)key;
- (NSData *)comp_AES256DecryptWithKeyData:(NSData *)key
                                isCBCMode:(BOOL)bCBCMode
                               initVector:(NSData *)initVecto;

@end
