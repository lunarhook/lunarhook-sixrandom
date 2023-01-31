
import React,{Component} from 'react';
import {Alert ,Platform,AppRegistry ,View,Image,Text,Linking,NativeModules,PermissionsAndroid} from 'react-native';
import { Modal } from '@ant-design/react-native';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import TabNavigator from '@lunarhook/react-native-tab-navigator';  
import { captureRef } from "react-native-view-shot";
import * as WeChat from 'react-native-wechat-lib';
import shareimg from './shareimage'
import ScreenConfig from './ScreenConfig';
import {StyleConfig,FontStyleConfig} from './StyleConfig';
import {appinfo,appname} from './appinfo'

class WechatError extends Error {
  constructor(resp) {
    const message = resp.errStr || resp.errCode.toString();
    super(message);
    
    this.name = 'WechatError';
    this.code = resp.errCode;
    if (typeof Object.setPrototypeOf === 'function') {
      Object.setPrototypeOf(this, WechatError.prototype);
    } else {
      this.__proto__ = WechatError.prototype;
    }

  }

}
let WechatSharethis = null
class WechatShare extends React.Component {


  constructor(props) {
    super(props);
    this.version = ""
    this.app = ""
    this.apiVersion = null,
    this.isWXAppInstalled = false,
    this.wxAppInstallUrl = null,
    this.isWXAppSupportApi = false,
    this.init = false
    var NativePlumber = NativeModules.NativePlumber;
    NativePlumber.PlumberGetAppVersion((error,appname,appver) => {
      this.app = appname
      this.version = appver
    })
    WechatSharethis = this
  }
  async initWcchatshart() {
    if(false==WechatSharethis.init){
      try {
        var keys = AppRegistry.getAppKeys();
        var str = appinfo[keys[1]]
          //console.log("wechatshare",str,keys,appname)
          WeChat.registerApp(str,"https://www.lunarhook.com/Uni_"+keys[1]+"/");
          WechatSharethis.apiVersion = await WeChat.getApiVersion();
          WechatSharethis.wxAppInstallUrl = Platform.OS === 'ios' ? await WeChat.getWXAppInstallUrl(): null;
          WechatSharethis.isWXAppSupportApi = await WeChat.isWXAppSupportApi();
          WechatSharethis.isWXAppInstalled = await WeChat.isWXAppInstalled();
          WechatSharethis.init = true;
      } catch (e) {
        console.error(e);
      }
      //console.log(WeChat);
    }
    
    
  }

  WechatLogin() {
    WechatSharethis.initWcchatshart()
    return new Promise(function (resolve, reject) {
      console.log("WCOAuth");
    WeChat.sendAuthRequest('snsapi_userinfo').then(responseCode => {
      //返回code码，通过code获取access_token
      console.log(responseCode.code);
      this.getWechatAccessToken(responseCode.code);
      resolve("OK");
    }).catch(err => {
      console.log(err);
      reject("loginfail");
      })
    })
  }



  getWechatAccessToken(responseCode){
    // ToastUtil.showShort(responseCode, true);
    var AccessTokenUrl = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid='+appid+'&secret='+secretID+'&code='+responseCode+'&grant_type=authorization_code';
    // console.log('AccessTokenUrl=',AccessTokenUrl);
    fetch(AccessTokenUrl,{
        method:'GET',
        timeout: 2000,
        headers:{
            'Content-Type':'application/json; charset=utf-8',
        },
        })
        .then((response)=>response.json())
        .then((responseData)=>{
            console.log('responseData.refresh_token=',responseData);
            this.getWechatRefreshToken(responseData.refresh_token);
        })
        .catch((error)=>{
            if(error){
                console.log('error=',error);
            }
        })
     }

     getWechatRefreshToken(refreshtoken){
      var getRefreshTokenUrl = 'https://api.weixin.qq.com/sns/oauth2/refresh_token?appid='+appid+'&grant_type=refresh_token&refresh_token='+refreshtoken;
      // console.log('getRefreshTokenUrl=',getRefreshTokenUrl);
      fetch(getRefreshTokenUrl,{
          method:'GET',
          timeout: 2000,
          headers:{
              'Content-Type':'application/json; charset=utf-8',
          },
          })
          .then((response)=>response.json())
          .then((responseData)=>{
              console.log('responseData.accesstoken=',responseData);
              this.getWechatUserInfo(responseData);
          })
          .catch((error)=>{
              if(error){
                  console.log('error=',error);
              }
          })
     }

     getWechatUserInfo(responseData){
      console.log(responseData);
     var getUserInfoUrl = 'https://api.weixin.qq.com/sns/userinfo?access_token='+responseData.access_token+'&openid='+responseData.openid;
     console.log('getUserInfoUrl=',getUserInfoUrl);
     fetch(getUserInfoUrl,{
         method:'GET',
         timeout: 2000,
         headers:{'Content-Type':'application/json; charset=utf-8',},}).then((response)=>response.json()).then((responseData)=>{
             console.log('getUserInfo=',responseData);
             //ToastUtil.showLong([responseData.nickname,responseData.province,responseData.city,responseData.openid],true) 
         }).catch((error)=>{
             if(error){
                 console.log('error=',error);
             }
         })
    }
  openWechat()
  {
    WechatSharethis.initWcchatshart()
    WeChat.openWXApp();
  }
  /*
  shareimagetotimeline(imageUrl,ds)
	{
    WechatSharethis.initWcchatshart()
    return new Promise(resolve => { 
		WeChat.isWXAppInstalled()
    .then((isInstalled) => {
      if (isInstalled) {
        try {
						WeChat.shareToTimeline({
              type: 'imageFile',
                title:ds,
                //description: 'share web image to time line',
                //mediaTagName: 'email signature',
                //messageAction: undefined,
                //messageExt: undefined,
                imageUrl: "file://"+imageUrl,
                //filePath: imageUrl,
                fileExtension:'png'
						}).then(Response=>{
                console.log(Response,imageUrl)
                resolve("success")
                return;
						}).catch (err => {
              console.log(err,imageUrl)
              resolve("failed")
						})
					}
					catch(e)
					{
            console.log(e,imageUrl)
            resolve("failed")
					}
			}
			else {
        Platform.OS == 'ios' ?
          Alert.alert('没有安装微信', '是否安装微信？', [
            {text: '取消'},
            {text: '确定', onPress: () => this.installWechat()}
          ]) :
          Alert.alert('没有安装微信', '请先安装微信客户端在进行登录', [
            {text: '确定'}
          ])
          resolve("failed")
      }
    })
  })
		
  }
	shareimagetofriend(imageUrl,ds)
	{
    WechatSharethis.initWcchatshart()
    return new Promise(resolve => { 
      WeChat.isWXAppInstalled()
      .then((isInstalled) => {
        console.log(imageUrl)
        if (isInstalled) {
          try {
              WeChat.shareToSession({
                type: 'imageFile',
                title:ds,
                //description: 'share web image to time line',
                //mediaTagName: 'email signature',
                //messageAction: undefined,
                //messageExt: undefined,
                imageUrl: "file://"+imageUrl,
                //filePath: imageUrl,
                fileExtension:'png'
              }).then(Response=>{
                  console.log(Response,imageUrl)
                  resolve("success")
              }).catch (err => {
                console.log(err,imageUrl)
                resolve("failed")
              })
            }
            catch(e)
            {
              console.log(e,imageUrl)
              resolve("failed")
            }
        }
        else {
          Platform.OS == 'ios' ?
            Alert.alert('没有安装微信', '是否安装微信？', [
              {text: '取消'},
              {text: '确定', onPress: () => this.installWechat()}
            ]) :
            Alert.alert('没有安装微信', '请先安装微信客户端在进行登录', [
              {text: '确定'}
            ])
            resolve("failed")
        }
        
    })
  })
  }
  */

  WechaShareShareLocalImage(imageUrl,type)
  {
    WechatSharethis.initWcchatshart()
      WeChat.isWXAppInstalled()
      .then((isInstalled) => {
        //console.log(imageUrl)
        if (isInstalled) {
          try {
              WeChat.shareLocalImage({imageUrl:imageUrl,scene:type,}).then((ret)=>{
                console.log("shareLocalImage",ret)
              }).then(r=>{
                console.log("shareLocalImage error",r)
              })
            }
          catch(e)
          {
            console.log("shareLocalImage error",e)
          }

        }
        else {
            Alert.alert('没有安装微信', '请先安装微信客户端在进行登录', [
              {text: '确定'}
            ])
            resolve("failed")
        }
        
    })
  }
  share(img,sw,ds) {
      return new Promise(resolve => { 
        if("ttl"==sw)
        {
          //this.shareimagetotimeline(img,ds).then(v=>(resolve(v)))
          this.WechaShareShareLocalImage(img,1)
        }
        else if("session"==sw)
        {
          //this.shareimagetofriend(img,ds).then(v=>(resolve(v)))
          this.WechaShareShareLocalImage(img,0)
        }
        else if("wechatcollect"==sw)
        {
          this.WechaShareShareLocalImage(img,2)
        }
        else if("qqttl"==sw)//打开qq群
        {
          var url = "mqqapi://card/show_pslcard?src_type=internal&version=1&uin="+775931827+"&card_type=group&source=external"
          Linking.canOpenURL(url).then(supported => {
            if (supported) {
              Linking.openURL(url);
            }
            else
            {
              Alert.alert('需要安装QQ','' ,[
                {text: '取消', onPress: () => {}}
              ]) 
            }
          });
        }
        else
        {
          Alert.alert('保存成功'); 
        }
    })
  }
  saveImg(img,sw,ds,rthis) {
    CameraRoll.save(img, 'photo', "sixrandom").then(result => {
      this.share(img, sw, ds).then(v => {
        console.log("this.share", v, sw)
        if ("" != sw) {
          var dellist = new Array()
          dellist.push(result)
          console.log("del", result)

          CameraRoll.deletePhotos(dellist)
          
        }
        this.closeshareimage(rthis)
      }).catch(t=>{
        this.closeshareimage(rthis)
      })

    }).catch(error => {
      this.closeshareimage(rthis)
      alert('保存失败！\n' + "需要允许相机和存储使用权限");
    })
    if ("" != sw) {
      console.log("deloriginal", img)
    }

  }
  closeshareimage (bindthis)
  {
    bindthis.setState({shareimg:false})
  }

  snapservice(ref,ds,rthis){

    if (Platform.OS == 'ios' )
    {
      Alert.alert('服务支持\n','' ,[
        {text: '打开服务QQ群', onPress: () => this.capture(ref,ds,"qqttl",rthis)},
        //{text: '分享朋友圈', onPress: () => this.capture(ref,ds,"ttl")},
        {text: '取消', onPress: () => this.closeshareimage(rthis)}
      ]) 
    }else
    {
        this.share("","qqttl",ds)
    }
  }
  async requestCameraPermission() {
    try {

      const permissions = [
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.CAMERA,
            //PermissionsAndroid.PERMISSIONS.CALL_PHONE,
            //PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
           ]
      const granteds = await PermissionsAndroid.requestMultiple(permissions)
      var data = data+"是否同意相机功能和基础存储服务\n(拒绝该服务将停止服务): "
      if (granteds["android.permission.CAMERA"] === "granted") {
        data = data + "是\n"
      } else {
        data = data + "否\n"
        return false;
      }
      /*
      if (granteds["android.permission.CALL_PHONE"] === "granted") {
        data = data + "是\n"
      } else {
        data = data + "否\n"
      }
      data = data+"是否同意使用电话拨入权限: "
      */
      if (granteds["android.permission.WRITE_EXTERNAL_STORAGE"] === "granted") {
        data = data + "是\n"
      } else {
        data = data + "否\n"
        return false;
      }
      /*
      if (granteds["android.permission.ACCESS_COARSE_LOCATION"] === "granted") {
        data = data + "是\n"
      } else {
        data = data + "否\n"
      }
      data = data+"是否同意位置信息: "
      */
      console.warn(data)
    } catch (err) {
      console.warn(err)
    }
    return true
  }

  snapshot(ref,ds,rthis){
    if (Platform.OS === 'ios' )
    {
      Alert.alert('截图分享\n','' ,[
       
        {text: '发送给朋友', onPress: () => this.capture(ref,ds,"session",rthis)},
        {text: '发送到朋友圈', onPress: () => this.capture(ref,ds,"ttl",rthis)},
        {text: '微信收藏', onPress: () => this.capture(ref,ds,"wechatcollect",rthis)},
        {text: '保存到相册', onPress: () => this.capture(ref,ds,"",rthis)},
        {text: '取消', onPress: () => this.closeshareimage(rthis)},

      ]) 
    }
    else if(Platform.OS === 'android'){
      this.requestCameraPermission().then(T=>{
        if(true==T)
        {
          Modal.alert('截图分享\n',"", [

            {text: '发送给朋友', onPress: () => this.capture(ref,ds,"session",rthis)},
            {text: '发送到朋友圈', onPress: () => this.capture(ref,ds,"ttl",rthis)},
            {text: '微信收藏', onPress: () => this.capture(ref,ds,"wechatcollect",rthis)},
            {text: '保存到相册', onPress: () => this.capture(ref,ds,"",rthis)},
            {text: '取消', onPress:() => {this.closeshareimage(rthis)},style: 'cancel',},
          ])
        }
      })
    }
  }
  capture(ref,ds,sw,rthis){
    captureRef(ref, {
      format: "jpg",
      quality: 0.8,
      useRenderInContext:true,
      snapshotContentContainer: true
    })
    .then(
      uri => this.saveImg(uri,sw,ds,rthis),
      error => console.error("Oops, snapshot failed", error),
      
    );
  }

  shareimg(ret)
  {
   

    if(true==ret || false==ret)
    {
      var dateDigitToString = function (num) {  
        return num < 10 ? '0' + num : num;  
      };  
      var currentDate = new Date(),  
      year = dateDigitToString(currentDate.getFullYear()),  
      month = dateDigitToString(currentDate.getMonth() + 1),//Date.getMonth()的返回值是0-11,所以要+1  
      date = dateDigitToString(currentDate.getDate()),  
      hour = dateDigitToString(currentDate.getHours()),  
      minute = dateDigitToString(currentDate.getMinutes()),  
      second = dateDigitToString(currentDate.getSeconds()),  
      formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;  
      var keys = AppRegistry.getAppKeys();
      return(
        <View style={{ alignItems: 'center', justifyContent: 'space-around', alignself: 'flex-start'}}>
          <View style={{ justifyContent: 'space-between', flexDirection: "row" }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', alignself: 'flex-start' }}>
              <Image
                style={{ width: 128, height: 128 ,alignself: 'flex-start'  }}
                source={{ uri: shareimg['website'] }}
              />
              <Text ></Text>
              <Text >www.lunarhook.com</Text>
              <Text ></Text>
            </View>
          </View>
          <Text ></Text>
            <Text >{appname[keys[1]]} {Platform.OS.toUpperCase() + " " + this.version}</Text>
            <Text ></Text>
            <Text >{formattedDateString}</Text>
        </View>
      )
    }
    
  }

  shareRetBar(refwechatshare,refthis,refname)
  {
    return(
      <TabNavigator tabBarStyle={{ height: ScreenConfig.getTabBarHeight() , backgroundColor: '#ffffff',}}>
      <TabNavigator.Item
        title={RouteConfig["ScreenImage"].name}
        renderIcon={() => RouteConfig["ScreenImage"].icon}
        onPress={() => {refthis.setState({shareimg:true}),refwechatshare.snapshot(refthis.refs['location'], refname,refthis)}}
        titleStyle={StyleConfig.menufont}>
      </TabNavigator.Item>
      <TabNavigator.Item
        title={RouteConfig["service"].name}
        renderIcon={() => RouteConfig["service"].icon}
        //renderSelectedIcon={() => IconConfig.IconDvinationSel}
        onPress={() => refwechatshare.snapservice(refthis.refs['location'], refname,refthis)}
        titleStyle={StyleConfig.menufont}>
      </TabNavigator.Item>
    </TabNavigator>
    )
  }

  CourseShareBar(refwechatshare,refthis,refname)
  {
    return(
      <TabNavigator.Item
        title={RouteConfig["ScreenImage"].name}
        renderIcon={() => RouteConfig["ScreenImage"].icon}
        onPress={() => {refthis.setState({shareimg:true}),refwechatshare.snapshot(refthis.refs['location'], refname,refthis)}}
        titleStyle={StyleConfig.menufont}>
      </TabNavigator.Item>
    )
  }

}



var Wechatshare = new WechatShare()
module.exports=Wechatshare;  