package com.sixrandom;

import android.app.Application;
import android.app.Activity;
import android.content.Context;
import com.facebook.react.PackageList;
import android.os.Bundle;

import androidx.multidex.MultiDex;
import com.facebook.react.ReactApplication;
import com.horcrux.svg.SvgPackage;
import com.rnfs.RNFSPackage;
import com.facebook.react.ReactInstanceManager;
import com.reactlibrary.RNSwissephPackage;
import com.theweflex.react.WeChatPackage;
import com.github.wumke.RNExitApp.RNExitAppPackage;
import com.th3rdwave.safeareacontext.SafeAreaContextPackage;
import com.reactnativecommunity.cameraroll.CameraRollPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.swmansion.rnscreens.RNScreensPackage;
import com.swmansion.reanimated.ReanimatedPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnativecommunity.geolocation.GeolocationPackage;
import com.horcrux.svg.SvgPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.clipsub.RNShake.RNShakeEventPackage;
//import com.hieuvp.fingerprint.ReactNativeFingerprintScannerPackage;

import fr.greweb.reactnativeviewshot.RNViewShotPackage;
import java.lang.reflect.InvocationTargetException;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.sohu.compass.Compass;
import com.plumber.NativePlumberPackage;
import java.util.Arrays;
import java.util.List;
//import com.facebook.react.PackageList;
import android.content.pm.*;
import android.content.Context;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new MyReactNativePackage());
            packages.add(new NativePlumberPackage());
          return packages;
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

    private String getChannel(Context context) {
        try {
            PackageManager pm = context.getPackageManager();
            String name = context.getPackageName();
            ApplicationInfo appInfo = pm.getApplicationInfo(name, PackageManager.GET_META_DATA);
            String channel = appInfo.metaData.getString("ChannelId");
            return channel;
        } catch (Exception e) {
        }
        return "default";
    }

  @Override
  public void onCreate() {
      Compass.init(this, getChannel(this), "", "plumber-sdk");
      super.onCreate();
      SoLoader.init(this, /* native exopackage */ false);
      MultiDex.install(this);
      initializeFlipper(this, getReactNativeHost().getReactInstanceManager()); // Remove this line if you don't want Flipper enabled
      this.registerActivityLifecycleCallbacks(new ActivityLifecycleCallbacks() {

          @Override
          public void onActivitySaveInstanceState(Activity activity, Bundle outState) {

          }

          @Override
          public void onActivityCreated(Activity activity, Bundle savedInstanceState) {

          }

          @Override
          public void onActivityStarted(Activity activity) {

          }


          @Override
          public void onActivityPaused(Activity activity) {
              Compass.setLocationInfo(20.0f,20.0f,"testgeoinfo","testgeoinfo");
          }

          @Override
          public void onActivityStopped(Activity activity) {

          }

          @Override
          public void onActivityResumed(Activity activity) {
              //Compas
              Compass.setLocationInfo(10.0f,10.0f,"testgeoinfo","testgeoinfo");
          }

          @Override
          public void onActivityDestroyed(Activity activity) {

          }
      });
  }

  /**
   * Loads Flipper in React Native templates. Call this in the onCreate method with something like
   * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
   *
   * @param context
   * @param reactInstanceManager
   */
  private static void initializeFlipper(
      Context context, ReactInstanceManager reactInstanceManager) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("com.sixrandom.ReactNativeFlipper");
        aClass
            .getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)
            .invoke(null, context, reactInstanceManager);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }
}
