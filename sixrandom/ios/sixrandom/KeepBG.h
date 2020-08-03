//
//  KeepBG.h
//  sixrandom
//
//  Created by fan on 2020/8/3.
//  Copyright © 2020 Facebook. All rights reserved.
//

#ifndef KeepBG_h
#define KeepBG_h
#import <Foundation/Foundation.h>
#import <AVFoundation/AVFoundation.h>
#import <BackgroundTasks/BackgroundTasks.h>

@interface KeepBG : NSObject

+ (instancetype)sharedInstance;

@property (nonatomic, assign) BOOL needRunInBackground;
@property (nonatomic, strong) AVAudioPlayer *player;

- (void)scheduleAppRefresh;
- (void)registerBgTask;

@end

#endif /* KeepBG_h */
