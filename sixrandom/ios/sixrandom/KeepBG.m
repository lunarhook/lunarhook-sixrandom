//
//  KeepBG.m
//  sixrandom
//
//  Created by fan on 2020/8/3.
//  Copyright © 2020 Facebook. All rights reserved.
//


#import "KeepBG.h"


static KeepBG *instance = nil;

@interface KeepBG()

@end

@implementation KeepBG

+ (instancetype)sharedInstance {
    
  static dispatch_once_t onceToken;
  dispatch_once(&onceToken, ^{
      instance = [[KeepBG alloc] init];
  });
  if(false==instance.needRunInBackground){
    NSURL* urlToDocumentsFolder = [[[NSFileManager defaultManager] URLsForDirectory:NSDocumentDirectory inDomains:NSUserDomainMask] lastObject];
    __autoreleasing NSError *error;
    NSDate *installDate = [[[NSFileManager defaultManager] attributesOfItemAtPath:urlToDocumentsFolder.path error:&error] objectForKey:NSFileCreationDate];
    NSTimeInterval t = [installDate timeIntervalSince1970];
    NSDate* dat = [NSDate dateWithTimeIntervalSinceNow:0];
    NSTimeInterval curtime=[dat timeIntervalSince1970];
    NSTimeInterval diff= curtime-t;
    if(diff > 24*60*60){//安装超过24小时，就开始使用长驻后台了
      instance.needRunInBackground = true;
    }
  }
  return instance;
}

- (instancetype)init {
    
    self = [super init];
    if (!self) {
        return nil;
    }
    [self initPlayer];
    return self;
}

- (void)initPlayer {
    
    [self.player prepareToPlay];
}

- (AVAudioPlayer *)player {
    if (!_player) {
        NSURL *fileURL = [[NSBundle mainBundle] URLForResource:@"SomethingJustLikeThis" withExtension:@"mp3"];
        AVAudioPlayer *player = [[AVAudioPlayer alloc] initWithContentsOfURL:fileURL error:nil];
        player.numberOfLoops = -1;
        _player = player;
    }
    return _player;
}



- (void)registerBgTask {
    
    if (@available(iOS 13.0, *)) {
        BOOL registerFlag = [[BGTaskScheduler sharedScheduler] registerForTaskWithIdentifier:@"com.sixrandom.kRefreshTaskId" usingQueue:nil launchHandler:^(__kindof BGTask * _Nonnull task) {
            [self handleAppRefresh:task];
        }];
        if (registerFlag) {
            NSLog(@"注册成功");
        } else {
            NSLog(@"注册失败");
        }
    } else {
        // Fallback on earlier versions
    }
    
    if (@available(iOS 13.0, *)) {
        [[BGTaskScheduler sharedScheduler] registerForTaskWithIdentifier:@"com.sixrandom.kCleanTaskId" usingQueue:nil launchHandler:^(__kindof BGTask * _Nonnull task) {
            [self handleAppRefresh:task];
        }];
    } else {
        // Fallback on earlier versions
    }
}

- (void)scheduleAppRefresh {
    
    if (@available(iOS 13.0, *)) {
        BGAppRefreshTaskRequest *request = [[BGAppRefreshTaskRequest alloc] initWithIdentifier:@"com.sixrandom.kRefreshTaskId"];
        // 最早15分钟后启动后台任务请求
        request.earliestBeginDate = [NSDate dateWithTimeIntervalSinceNow:15.0 * 60];
        NSError *error = nil;
        [[BGTaskScheduler sharedScheduler] submitTaskRequest:request error:&error];
        if (error) {
            NSLog(@"错误信息：%@", error);
        }
        
    } else {
        // Fallback on earlier versions
    }
}
- (void)handleAppRefresh:(BGAppRefreshTask *)appRefreshTask  API_AVAILABLE(ios(13.0)){
    
    [self scheduleAppRefresh];
    
    NSLog(@"App刷新handleAppRefresh===================");

}


@end
