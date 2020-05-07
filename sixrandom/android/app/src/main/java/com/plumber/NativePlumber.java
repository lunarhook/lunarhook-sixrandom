package com.plumber;

import android.app.Activity;
import android.content.Context;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.Environment;
import android.util.DisplayMetrics;
import android.view.View;
import androidx.annotation.Nullable;
import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.bridge.JavaScriptModule;

import com.facebook.react.bridge.GuardedAsyncTask;
import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.UIManagerModule;
import com.sixrandom.MainApplication;
import com.sohu.compass.Compass;

import java.io.File;
import java.io.FilenameFilter;
import java.io.IOException;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class NativePlumber extends ReactContextBaseJavaModule {

  private static final String DURATION_SHORT_KEY = "SHORT";
  private static final String DURATION_LONG_KEY = "LONG";
  public NativePlumber(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  /**
   *
   * @return js调用的模块名
   */
  @Override
  public String getName() {
    return "NativePlumber";
  }

  /**
   * 给rn定义模块的一些常量
   * @return 常量的一些键值
   */
  @Nullable
  @Override
  public Map<String, Object> getConstants() {
    final Map<String, Object> constants = new HashMap<>();

    return constants;
  }

  /**
   * 使用ReactMethod注解，使这个方法被js调用
   * @param message 文本
   * @param duration 时长
   */
  @ReactMethod
  public void PlumberRouting(String routing, String grouprouting, String filtername,String eventfilter) {
    try {
      System.out.printf("%s,%s,%s,%s", routing,grouprouting,filtername,eventfilter);
      Compass.putRoutingEvent(filtername,grouprouting,routing,eventfilter);
    }
    catch (Exception e){
      //error.invoke("error");
    }
  }

  /**
   * 使用ReactMethod注解，使这个方法被js调用
   * @param message 文本
   * @param duration 时长
   */
  @ReactMethod
  public void PlumberGetChannel(Callback callback) {
    try {
      Activity r =  this.getCurrentActivity();
      Context context = r.getApplicationContext();
      PackageManager pm = context.getPackageManager();
      String name = context.getPackageName();
      ApplicationInfo appInfo = pm.getApplicationInfo(name, PackageManager.GET_META_DATA);
      String channel = appInfo.metaData.getString("ChannelId");
      callback.invoke("",channel);
      return;
    } catch (Exception e) {
    }
    callback.invoke("","default");
  }

  /**
   * 使用ReactMethod注解，使这个方法被js调用
   * @param message 文本
   * @param duration 时长
   */
  @ReactMethod
  public void PlumberGetAppVersion(Callback callback) {
      try {
        Activity r =  this.getCurrentActivity();
        Context context = r.getApplicationContext();
        PackageManager pm = context.getPackageManager();
        PackageInfo packageInfo = pm.getPackageInfo(context.getPackageName(), 0);
        //返回版本号
        callback.invoke("",packageInfo.packageName,packageInfo.versionName);
      } catch (PackageManager.NameNotFoundException e) {
        e.printStackTrace();
        callback.invoke(e.getMessage(),"","");
      }

  }
  /**
   * 使用ReactMethod注解，使这个方法被js调用
   * @param message 文本
   * @param duration 时长
   */
  @ReactMethod
  public void SetHandlerException(String errormessage,Boolean _dev) {
    try {
      System.out.printf("%s%s","plumberJSException:", errormessage);
      Compass.SendException(errormessage,_dev);
    }
    catch (Exception e){
      //error.invoke("error");
    }
    if(false==_dev) {
      System.exit(0);
    }
  }
}
