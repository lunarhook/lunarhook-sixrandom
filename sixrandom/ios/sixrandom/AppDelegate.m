#import "AppDelegate.h"
#import <UIKit/UIKit.h>
#import <Foundation/Foundation.h>
#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <React/RCTLinkingManager.h>
#import "plumberIOSManager.h"
#import "KeepBG.h"

#ifdef FB_SONARKIT_ENABLED
#import <FlipperKit/FlipperClient.h>
#import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>
#import <FlipperKitUserDefaultsPlugin/FKUserDefaultsPlugin.h>
#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>
#import <SKIOSNetworkPlugin/SKIOSNetworkAdapter.h>
#import <FlipperKitReactPlugin/FlipperKitReactPlugin.h>

static void InitializeFlipper(UIApplication *application) {
  FlipperClient *client = [FlipperClient sharedClient];
  SKDescriptorMapper *layoutDescriptorMapper = [[SKDescriptorMapper alloc] initWithDefaults];
  [client addPlugin:[[FlipperKitLayoutPlugin alloc] initWithRootNode:application withDescriptorMapper:layoutDescriptorMapper]];
  [client addPlugin:[[FKUserDefaultsPlugin alloc] initWithSuiteName:nil]];
  [client addPlugin:[FlipperKitReactPlugin new]];
  [client addPlugin:[[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];
  [client start];
}
#endif

@interface AppDelegate()
  @property (nonatomic, assign) UIBackgroundTaskIdentifier backgroundTaskIdentifier;
@end
static NSString *const kBgTaskName = @"com.sixrandom.KeepBG";


@implementation AppDelegate
NSString *const RCTJSNavigationScheme = @"react-js-navigation";


- (BOOL)application:(UIApplication *)application handleOpenURL:(NSURL *)url {
    return  [WXApi handleOpenURL:url delegate:self];
}
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
            options:(NSDictionary<NSString*, id> *)options
{
  // Triggers a callback event.
  // 触发回调事件
  [RCTLinkingManager application:application openURL:url options:options];
  return [WXApi handleOpenURL:url delegate:self];
}
- (BOOL)application:(UIApplication *)application
  continueUserActivity:(NSUserActivity *)userActivity
  restorationHandler:(void(^)(NSArray<id<UIUserActivityRestoring>> * __nullable
  restorableObjects))restorationHandler {
  // 触发回调方法
  [RCTLinkingManager application:application continueUserActivity:userActivity restorationHandler:restorationHandler];
  return [WXApi handleOpenUniversalLink:userActivity
  delegate:self];
}
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
{
  return [RCTLinkingManager application:application openURL:url
                      sourceApplication:sourceApplication annotation:annotation];
}


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
#ifdef FB_SONARKIT_ENABLED
  InitializeFlipper(application);
#endif

  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:@"sixrandom"
                                            initialProperties:nil];

  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  
  plumberConfiguration* pConf =[[plumberConfiguration alloc] init];
  pConf.allowCatchException = true;//true is default
  pConf.allowInterveneNetwork = false; // false is default
  [plumberIOSManager plumberStart:pConf appName:@"plumber-sdk" uid:@"11111-11111-11111-11111-11111"];
  
  [[KeepBG sharedInstance] registerBgTask];
  return YES;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}


- (void)applicationWillEnterForeground:(UIApplication *)application {
    [plumberIOSManager set_geoinfo:@"测试地理信息" country:@"测试地理信息" longitude:10.0f latitude:10.0f];
    if ([KeepBG sharedInstance].needRunInBackground) {
        [[KeepBG sharedInstance].player pause];
    }
    [[UIApplication sharedApplication] endBackgroundTask: self.backgroundTaskIdentifier];
}
- (void)applicationDidEnterBackground:(UIApplication *)application {
  [[KeepBG sharedInstance] scheduleAppRefresh];
  NSLog(@"%s：应用进入后台DidEnterBackground", __FUNCTION__);
  self.backgroundTaskIdentifier = [[UIApplication sharedApplication] beginBackgroundTaskWithName:kBgTaskName expirationHandler:^{
      if (self.backgroundTaskIdentifier != UIBackgroundTaskInvalid) {
          if ([KeepBG sharedInstance].needRunInBackground) {
              [[KeepBG sharedInstance].player play];
          }
          NSLog(@"终止后台任务");
          [[UIApplication sharedApplication] endBackgroundTask:self.backgroundTaskIdentifier];
          self.backgroundTaskIdentifier = UIBackgroundTaskInvalid;
      }
  }];
}

@end
