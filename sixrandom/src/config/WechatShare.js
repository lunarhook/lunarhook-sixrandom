
import React,{Component} from 'react';
import {Alert ,Platform,AppRegistry ,View,Image,Text,Linking} from 'react-native';
import CameraRoll from "@react-native-community/cameraroll";
import TabNavigator from 'react-native-tab-navigator';
import { captureRef } from "react-native-view-shot";
import * as WeChat from 'react-native-wechat';
import shareimg from './shareimage'
import ScreenConfig from './ScreenConfig';
import StyleConfig from './StyleConfig';
import {appinfo,appname} from './appinfo'
//import * as QQAPI from 'react-native-qq';
import { EventEmitter } from 'events';


const emitter = new EventEmitter();

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

class WechatShare extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      apiVersion: 'waiting...',
      isWXAppSupportApi: 'waiting...',
      isWXAppInstalled: 'waiting...',
      init:false,
		};
	
  }
  init() {
    if(false==this.state.init){
      try {
        var keys = AppRegistry.getAppKeys();
        console.log("wechatshare",appinfo[keys[0]],keys,appname)
        var ret = WeChat.registerApp(appinfo[keys[0]]);
  
          apiVersion=WeChat.getApiVersion(),
          //wxAppInstallUrl:  WeChat.getWXAppInstallUrl(),
          isWXAppSupportApi= WeChat.isWXAppSupportApi(),
          isWXAppInstalled= WeChat.isWXAppInstalled()
          this.setState({init:true})
        //console.log(this.state);
      } catch (e) {
        console.error(e);
      }
      //console.log(WeChat);
    }
    
  }

  WechatLogin() {
    this.init()
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
    this.init()
    WeChat.openWXApp();
  }
  shareimagetotimeline(imageUrl,ds)
	{
    this.init()
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
    this.init()
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

  _checkPermission(){
      if (Platform.OS !== 'android') {
          return Promise.resolve(true);
      }

      const rationale = {
          'title': '相册权限',
          'message': '逗戏需要您的相册权限来保存图片'
      };

      return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, rationale)
          .then((result) => {
              return (result === true || result === PermissionsAndroid.RESULTS.GRANTED);
          });
  }
  share(img,sw,ds) {
      return new Promise(resolve => { 
        if("ttl"==sw)
        {
          this.shareimagetotimeline(img,ds).then(v=>(resolve(v)))
        }
        else if("session"==sw)
        {
          this.shareimagetofriend(img,ds).then(v=>(resolve(v)))
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
  saveImg(img,sw,ds) {
    CameraRoll.saveToCameraRoll(img).then(result => {
      this.share(img,sw,ds).then(v=>{
        console.log(v,sw)
        if(""!=sw)
        {
          var dellist = new Array()
          dellist.push(result)
          console.log("del",result)

          CameraRoll.deletePhotos(dellist)
        }
      })
    }).catch(error => {
        alert('保存失败！\n' + error);
    })
    if(""!=sw)
    {
      console.log("deloriginal",img)
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

  snapshot(ref,ds,rthis){
    //if (Platform.OS == 'ios' )
    {
      Alert.alert('截图分享\n','' ,[
        {text: '保存到相册', onPress: () => this.capture(ref,ds,"",rthis)},
        {text: '发送给朋友', onPress: () => this.capture(ref,ds,"session",rthis)},
        {text: '发送到朋友圈', onPress: () => this.capture(ref,ds,"ttl",rthis)},
        //{text: '分享朋友圈', onPress: () => this.capture(ref,ds,"ttl")},
        {text: '取消', onPress: () => this.closeshareimage(rthis)}
      ]) 
    }
    /*
    else
    {
      Alert.alert('安卓目前不支持截图分享\n','' ,[
        {text: '取消', onPress: () => this.closeshareimage(rthis)}
      ]) 
    }
    */

  }
  capture(ref,ds,sw,rthis){
    captureRef(ref, {
      format: "png",
      quality: 1.0,
      snapshotContentContainer: true
    })
    .then(
      uri => this.saveImg(uri,sw,ds),
      error => console.error("Oops, snapshot failed", error),
      this.closeshareimage(rthis)
    );
  }

  shareimg(ret)
  {
   
    if(true==ret)
    {
      var keys = AppRegistry.getAppKeys();
      return(
        <View style={{alignItems: 'center',justifyContent: 'center'}}>
        <Image
        style={{width:  128, height:128}}
        source={{uri: shareimg[keys[0]]}}
        />
        <Text style></Text>
        <Text style>{appname[keys[0]]}</Text>
        <Text style></Text>
        <Text style>www.lunarhook.com</Text>
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

}



var Wechatshare = new WechatShare()
module.exports=Wechatshare;  