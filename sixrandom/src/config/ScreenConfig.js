
import React, {Component} from 'react';
import {PixelRatio,Platform,Dimensions} from 'react-native';
import { Portal, Toast } from '@ant-design/react-native'
const screenW = Dimensions.get('window').width;
const  screenH = Dimensions.get('window').height;
// iPhoneX
const X_WIDTH = 375;
const X_HEIGHT = 812;
// iPhoneRX RXMax
const RX_WIDTH = 414;
const RX_HEIGHT = 896;
// iPhoneRX 该尺寸目前不用适配
const XS_WIDTH = 375;
const XS_HEIGHT = 812;
class ScreenConfig extends React.Component {
    Toastkey = undefined;
    __navigationMenuFontsize()
    {   return 11}
    __screenW()
    { return screenW;}
    __screenH()
    { return screenH;}
    isIphoneX() {
        //console.log(screenH,screenW)
        return (
            Platform.OS === 'ios' &&
            ((screenH === X_HEIGHT && screenW === X_WIDTH) ||
                (screenH === X_WIDTH && screenW === X_HEIGHT)) ||
            ((screenH === RX_HEIGHT && screenW === RX_WIDTH) ||
                (screenH === RX_WIDTH && screenW === RX_HEIGHT))
        )
    }

    getTabBarHeight()
    {
      if (this.isIphoneX()) {
        return 49 + 44;
      } else if (Platform.OS === 'ios') {
          return 59
      } else {
          return 49 + 20
      }
    }
    getFontheight()
    {
      if (this.isIphoneX()) {
        return 15 + 34;
      } else if (Platform.OS === 'ios') {
          return 15
      } else {
          return 22
      }
    }
    getKeyboardHeight()
    {
      return 128
    }
    DeviceToast(msg,time) {
      console.log("DeviceToast",msg,time)
      if (undefined==time) {time=1}
      if(undefined!=this.Toastkey)
      {
          Portal.remove(this.Toastkey)
      }
      key = Toast.loading(msg,time,undefined,false)
      this.Toastkey = key
    }
    DeviceToastClear(){
      if(undefined!=this.Toastkey)
      {
          Portal.remove(this.Toastkey)
          this.Toastkey = undefined
      }
    }
}
var sc = new ScreenConfig()
module.exports=sc;  