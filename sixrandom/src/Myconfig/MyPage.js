

import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Alert, Text, NativeModules, Image, ScrollView, Platform } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { InputItem, WhiteSpace, List, Icon, WingBlank, Button, Switch } from '@ant-design/react-native';
import IconConfig from '../config/IconConfig'
import ScreenConfig from '../config/ScreenConfig';
import {FontStyleConfig} from '../config/StyleConfig';
import UserModule from '../config/UserModule'
import { HistoryArrayGroup } from '../config/StorageModule'
import { DevTimeManager } from '../net/NetApi'
import {appinfo,appname} from '../config/appinfo'
let MyPagethis = undefined
class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      version : "",
      appname : "",
      islogin: false,
      passtype: "password",
      mobile: "", password: "", logindisable: true, networkstate: true, checked: false, sync: false
    };
    this.onSwitchChange = value => {
      HistoryArrayGroup.ForceSyncServer = value
      console.log(" HistoryArrayGroup.ForceSyncServer", HistoryArrayGroup.ForceSyncServer)
      this.setState({
        checked: value,
      });
    }; MyPagethis = this
    var NativePlumber = NativeModules.NativePlumber;
    NativePlumber.PlumberGetAppVersion((error,appname,appver) => {
      this.state.appname = appname
      this.state.version = appver
      this.forceUpdate()
    })
  }
  UNSAFE_componentWillMount() {
    //console.log("MyPage", "componentWillMount")
    this.LoginCheck()//这里迅速检测登陆状态
    this.timer = setInterval(() => {
      this.LoginCheck()
    }, DevTimeManager["MyPageTick"]);
    MyPagethis = this
  }
  componentWillUnmount() {
    console.log("MyPage", "componentWillUnmount")
    ScreenConfig.DeviceToastClear()
    this.timer && clearInterval(this.timer)
    MyPagethis = undefined
  }
  RSYNC() {
    this.LoginCheck(true)
  }


  LoginCheck(rsync) {
    UserModule.islogin(rsync).then(ret => {
      console.log("LoginCheck", ret)
      if (true == ret.ret) {
        this.setState({ islogin: ret.ret, mobile: ret.LoginInfo.mobile })
      }
      else {
        this.setState({ islogin: ret.ret })
      }
      if (undefined != ret.LoginInfo.network && false == ret.LoginInfo.network) {
        "" != ret.LoginInfo.mobile ? ScreenConfig.DeviceToast("登陆检测异常", 60) : () => { } //已经登陆的需要检查网络状态提示网络，否则不工作
        this.setState({ networkstate: false })
      } else {
        this.setState({ networkstate: true })
      }
    }).catch((error) => {
      console.log("LoginCheck", error.message)
      ScreenConfig.DeviceToast("网络连接异常")
    })
  }
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;

    return {

      headerRight:()=> (<Icon name="bars" style={{ paddingRight: 30 }} onPress={() => MyPagethis.setState({ sync: !MyPagethis.state.sync })} />),
      title: RouteConfig["MyPage"].name,
    }
  };

  checkbutton(password) {
    console.log("checkbutton",this.state.password.length>5,this.state.password)
    if (this.state.mobile.length == 11 && password.length > 5 && "" != password) {
      if (this.state.logindisable == true){
        this.setState({ logindisable: false })
      }
    }
    else {
      if (this.state.logindisable == false) {
        this.setState({ logindisable: true })
      }
    }
  }
  updatenumber(number) {
    //console.log("number1",number)
    number = number.replace(/[^0-9]/g, "");
    number = number.slice(0, 11);
    if ('' == number || "电话" == number) {
      number = "电话"
    }


    //console.log("number",number)
    this.setState({ mobile: number })
    return number;
  }

  LOGIN() {
    ScreenConfig.DeviceToast("登陆中")
    if (this.state.islogin) {
      UserModule.logout()

    }

    UserModule.login(this.state.mobile, this.state.password).then(
      T => {
        if (200 == T.code) {
          this.LoginCheck(true)
          this.setState({ islogin: true, networkstate: true })
          ScreenConfig.DeviceToast("登陆成功")
        }
        else {
          ScreenConfig.DeviceToast("登陆失败")
        }
      }
    ).catch((err) => {
      ScreenConfig.DeviceToast("网络异常")
    })
  }

  LOGOUT() {
    UserModule.logout()
    ScreenConfig.DeviceToastClear()
    this.setState({ islogin: false, mobile: "", password: "", })
  }

  rendersync() {
    if (true == MyPagethis.state.sync && this.state.islogin) {
      return (
        <View>
          <Button type="primary" disabled={!this.state.islogin} onPress={() => this.RSYNC()}>同步</Button>
          <WhiteSpace size="xl" />
          <Button type="primary" disabled={!this.state.islogin} onPress={() => this.props.navigation.navigate("MyFontConfigPage")}>字体大小</Button>
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <List.Item
            extra={
              <Switch
                checked={this.state.checked}
                onChange={this.onSwitchChange}
              />
            }
          >{this.state.checked ? "强制同步" : "检测同步"}</List.Item>
        </View>
      )
    }
    else if (true == MyPagethis.state.sync){
      return (
        <View>
          <WhiteSpace size="xl" />
          <Button type="primary"  onPress={() => this.props.navigation.navigate("MyFontConfigPage")}>字体大小</Button>
          <WhiteSpace size="xl" />

        </View>
      )
    }
  }
  passshow() {
    if ("password" == this.state.passtype) {
      this.setState({ passtype: "text" })
    } else {
      this.setState({ passtype: "password" })
    }
  }
  showprivary(){
    if(Platform.OS === 'android')
    {
      return(<View>
        <Text style={{ textAlign: "center", marginBottom: 20, }} onPress={() => this.props.navigation.navigate("AgreePage")}>《用户协议》</Text>
        <Text style={{ textAlign: "center", marginBottom: 20, }} onPress={() => this.props.navigation.navigate("PrivacyPage")}>《隐私政策》</Text>
        </View>
      )
    }

  }

  renderreg() {

    if (this.state.islogin) {
      mobile = this.state.mobile
      mobile = mobile.replace(/^(\w{3})\w{5}(.*)$/, '$1*****$2')
      networkstate = this.state.networkstate;
      const tabs = [
        { title: '登陆' },
        { title: '同步' },

      ];
      
      return (
        <ScrollView>
          <View style={styles.inputpicker}>
            <WhiteSpace size="xl" />
            <View style={{ alignItems: "center" }}>
              <Image source={require('../../img/sixrandom_qq100.jpg')} style={{ width: 50, height: 50, borderRadius: 10, justifyContent: "center" }} />
            </View>
            <WhiteSpace size="xl" />
            <Text style={{ textAlign: "center" }}>{mobile}</Text>
            <WhiteSpace size="xl" />
            <Text style={{ textAlign: "center", color: "#FFC0CB" }}>{(true == networkstate) ? "" : "网络连接中..."}</Text>
            <WhiteSpace size="xl" />
            <Button type="primary" onPress={() => this.LOGOUT()}>注销</Button>
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            {this.showprivary()}
            <WhiteSpace size="xl" />
            <Text style={{ textAlign: "center", marginBottom: 20, }} > {this.state.appname+ " " +  this.state.version}</Text>
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            {this.rendersync()}
          </View>
        </ScrollView>
      )
    }
    else {
      return (<ScrollView>
        <View style={styles.inputpicker}>
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <InputItem
            clear
            type="phone"
            value={this.state.mobile}
            onChange={(value: any) => {
              this.setState({ mobile: this.updatenumber(value) })
              
            }}
            extra={<TouchableOpacity >{this.state.mobile.length == 11 ? IconConfig.CheckOk : <></>}</TouchableOpacity>}
            placeholder="phone">
            电话
          </InputItem>
          <InputItem
            clear
            maxLength={16}
            type={this.state.passtype}
            value={this.state.password}
            onChange={(value: any) => {
              this.setState({ password: value })
            }}
            placeholder="password"
            extra={<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <TouchableOpacity style={{ alignItems: "flex-end" }} onPress={() => { this.passshow() }}>{this.state.passtype == "password" ? IconConfig.Passclose : IconConfig.Passshow}</TouchableOpacity>
              <Text>{"   "}</Text>
              <TouchableOpacity >{this.state.password.length > 5 ? IconConfig.CheckOk : <></>}</TouchableOpacity></View>}>
            密码
          </InputItem>
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WingBlank
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Button type="primary" disabled={this.state.logindisable} onPress={() => this.LOGIN()}>登陆</Button>
            <Button type="warning" disabled={!this.state.logindisable} onPress={() => this.props.navigation.navigate("MyRegister")}>注册</Button>
          </WingBlank>
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <Text style={{ textAlign: "center", marginBottom: 20, }} type="warning" onPress={() => this.props.navigation.navigate("MyUpdateRegister")}>-忘记密码-</Text>
          <Text style={{ textAlign: "center", marginBottom: 20, }} > {this.state.appname+ " " +  this.state.version}</Text>
          {this.showprivary()}
          <WhiteSpace size="xl" />
            {this.rendersync()}
        </View>
      </ScrollView>
      )
    }
  }

  render() {
    //这个检查放这里不适合，最好是有个专门的地方处理，当然，tick里也是不适合的
    const { navigate } = this.props.navigation;
    this.checkbutton(this.state.password)
    if (undefined != this.props.navigation.state.params) {
      if (undefined != this.props.navigation.state.params.id && "Login" == this.props.navigation.state.params.id) {
        this.LoginCheck(true)//这里必须立刻同步一次网络以保证返回的网络状态最新
        this.props.navigation.state.params = undefined
      }
    }
    return (
      <View style={styles.container}>
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        {this.renderreg()}
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    //paddingTop:5
  },
  ratingText: {
    paddingLeft: 10,
    color: 'blue'
  },
  index:
  {
    lineHeight: 24,
    //marginLeft: 10,
    //paddingLeft:10,
    textAlign: 'center',
    fontSize:FontStyleConfig.getFontApplySize()+ 15,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
    alignItems: 'center',
  },

  list: {
    height: 45,
    //borderWidth:1,
    marginLeft: 10,
    paddingLeft: 10,
    //borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    //textAlign:'center', 
    //textDecorationLine:'underline'
  },
  inputpicker: {

    marginLeft: 35,
    marginRight: 35,
    marginTop: 50,
  },
});
module.exports = MyPage;  