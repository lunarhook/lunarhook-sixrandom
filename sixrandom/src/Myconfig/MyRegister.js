

import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Alert, Text, RefreshControl, ScrollView } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { InputItem, WhiteSpace, List, WingBlank, Toast, Button } from '@ant-design/react-native';
import { ListItem } from 'react-native-elements';
import IconConfig from '../config/IconConfig'
import ScreenConfig from '../config/ScreenConfig';
import { StyleConfig, FontStyleConfig } from '../config/StyleConfig';
import UserModule from '../config/UserModule'


class MyRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: "", password: "", codenum: "", mobiledisable: true, regdisable: true, regmobileinput: true,
      timetick: UserModule.ticktimecircle,
      buttoncode: "申请验证码",
      passtype: "password"
    };
  }


  clear(val) {
    this.props.navigation.setParams({ mobilestat: 'off' })
    this.setState({ mobile: "" })
  }
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {

      //headerLeft:(<Button title="万年历" onPress={  () => navigate('MainPage')  }/>),
      //headerRight:(<Button title="历史" onPress={  () => navigate('MyHistoryPage')  }/>),
      title: RouteConfig["MyRegister"].name,
    }
  };
  RegCheck() {
    const { navigate } = this.props.navigation;
    if (this.state.mobile.length == 11) {
      if (this.state.password != "") {
        if (this.state.password.length >= 6) {
          if (this.state.codenum.length == 6) {
            UserModule.RegCheck(this.state.mobile, this.state.password, this.state.codenum).then(T => {
              if (200 == T.code) {
                Toast.success("注册成功")
                navigate("MyPage", { id: "Login" })
              }
              else { Toast.fail("注册失败") }
            })
          } else { Toast.fail("验证码错误") }
        } else { Toast.fail("密码过短") }
      } else { Toast.fail("密码不能为空") }
    } else { Toast.fail("电话错误") }
  }
  testloginbutton() {
    if (this.state.mobile.length == 11 && this.state.regdisable == true) {
      if (this.state.codenum.length == 6) {
        if (this.state.password.length >= 6) {
          this.setState({ regdisable: false })
          return true
        }
      }
    }
    this.setState({ regdisable: true })
    return false
  }

  checkbutton(mobile, password, codenum) {
    if (mobile.length == 11) {
      if (this.state.mobiledisable == true && this.state.buttoncode == "申请验证码") { this.setState({ mobiledisable: false }) }

    }
    else {
      this.setState({ mobiledisable: true })
    }
    if (mobile.length == 11 && "" != password && password.length > 5 && codenum.length == 6) {
      if (this.state.regdisable == true) { this.setState({ regdisable: false }) }

    }
    else {
      this.setState({ regdisable: true })
    }
  }
  updatemobile(mobile) {
    //console.log("mobile1",mobile)
    mobile = mobile.replace(/[^0-9]/g, "");
    mobile = mobile.slice(0, 11);
    if ('' == mobile || "电话" == mobile) {
      mobile = "电话"
    }
    this.setState({ mobile: mobile })
    return mobile;
  }

  componentWillUnmount() {
    // 如果存在this.timer，则使用clearTimeout清空。
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    //FingerprintScanner.release();
    this.timer && clearInterval(this.timer);
  }
  showTime() {
    time = this.state.timetick
    if (time > 0) time--
    if (time <= 0) {
      this.setState({ timetick: UserModule.ticktimecircle, buttoncode: "申请验证码" })
      if (this.state.mobile.length == 11 && this.state.mobiledisable == true) {
        this.setState({ mobiledisable: false, regmobileinput: true })
      }
      clearInterval(this.timer);
      return
    }
    else {
      this.setState({ timetick: time, regmobileinput: false, mobiledisable: true, buttoncode: "申请验证码(" + time + ")" })
      clearInterval(this.timer);
      this.sendcode()
    }

  }
  sendcode() {
    if (this.state.mobiledisable == false) {
      UserModule.Reg(this.state.mobile).then(
        T => {
          if (200 == T.code) {
            Toast.success("发送激活码")
          }
          else {
            Toast.fail("申请激活码失败")
          }
        }
      )
    }
    this.timer = setTimeout(() => {
      this.showTime()
    }, 1000);


  }

  passshow() {
    if ("password" == this.state.passtype) {
      this.setState({ passtype: "text" })
    } else {
      this.setState({ passtype: "password" })
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <WingBlank size="lg">
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />

        <WhiteSpace size="xl" />

        <WhiteSpace size="xl" />
        <InputItem
          clear
          //error={this.state.mobiledisable}
          type="phone"
          editable={this.state.regmobileinput}
          value={this.state.mobile}
          onChange={(value: any) => {
            mobile = this.updatemobile(value)
            this.setState({ mobile: mobile })
            this.checkbutton(mobile, this.state.password, this.state.codenum)
          }}
          extra={<TouchableOpacity >{this.state.mobile.length == 11 ? IconConfig.CheckOk : <></>}</TouchableOpacity>}
          placeholder="+86 ｜ 输入手机号"
        >
          {IconConfig.IconPhone}
        </InputItem>


        <InputItem
          clear
          type="number"
          maxLength={6}
          value={this.state.codenum}
          onChange={(value: any) => {
            this.setState({ codenum: value })
            this.checkbutton(this.state.mobile, this.state.password, value)
          }}
          extra={<View style={{ flexDirection: "row", justifyContent: "space-between" }}><Button activeStyle={false} size="small" disabled={this.state.mobiledisable} onPress={() => this.sendcode()}>{this.state.buttoncode}</Button>
            <Text>{"   "}</Text>
            <TouchableOpacity >{this.state.codenum.length == 6 ? IconConfig.CheckOk : <></>}</TouchableOpacity></View>
          }
          placeholder="输入验证码"
        >
          {IconConfig.IconPhoneCode}
        </InputItem>
        <InputItem
          clear
          maxLength={16}
          type={this.state.passtype}
          value={this.state.password}
          onChange={(value: any) => {
            this.setState({ password: value })
            this.checkbutton(this.state.mobile, value, this.state.codenum)
          }}
          placeholder="输入密码"
          extra={<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <TouchableOpacity style={{ alignItems: "flex-end" }} onPress={() => { this.passshow() }}>{this.state.passtype == "password" ? IconConfig.Passclose : IconConfig.Passshow}</TouchableOpacity>
            <Text>{"   "}</Text>
            <TouchableOpacity >{this.state.password.length > 5 ? IconConfig.CheckOk : <></>}</TouchableOpacity></View>}
        >

          {IconConfig.IconPhonePassword}

        </InputItem>
        <WhiteSpace size="xl" />
        <WingBlank
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Button type="warning" disabled={this.state.regdisable} onPress={() => this.RegCheck()}>注册</Button>
        </WingBlank>
        </WingBlank>
      </View>
    )
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  }

});
module.exports = MyRegister;  