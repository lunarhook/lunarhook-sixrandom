

import React, { Component } from 'react';
import { StyleSheet, View, Alert, Text, TouchableOpacity, FlatList } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { InputItem, WhiteSpace, List, Icon, WingBlank, Button, Stepper } from '@ant-design/react-native';
import IconConfig from '../config/IconConfig'
import ScreenConfig from '../config/ScreenConfig';
import { StyleConfig, FontStyleConfig } from '../config/StyleConfig';
import UserModule from '../config/UserModule'
import { HistoryArrayGroup } from '../config/StorageModule'
import { DevTimeManager } from '../net/NetApi'

var Agreement = new Array()
Agreement.push("")
Agreement.push("乾坤爻")
Agreement.push("乾坤爻字体大小测试")
Agreement.push("乾坤爻是以心理学、天文学，中国传统国学，玄学（古代以《周易》《老子》《庄子》三者合称三玄，与四书五经同列）为主依据的测评及解答学习产品")
Agreement.push("")
let MyFontConfigPagethis = undefined

class MyFontConfigPage extends React.Component {
  constructor(props) {
    var r = FontStyleConfig.getFontChangeSize()
    super(props);
    this.state = {
      fontSizechange: r
    }; MyFontConfigPagethis = this
  }
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;

    return {
      title: RouteConfig["MyFontConfigPage"].name,
    }
  };

  changeFontRefresh()
  {
    const { navigate } = this.props.navigation
    FontStyleConfig.setfontsize(MyFontConfigPagethis.state.fontSizechange).then(
      T1 => {
        ScreenConfig.DeviceToast("保存字体成功")
        navigate('MainPage', { text: "refresh" })
        /*
        Alert.alert("", '保存字体成功', [
          { text: '确定', onPress: () => navigate('MainPage', { text: "refresh" }) }
        ])
        */
      }
    )
  }

  onFontChange(value) {
    value = Number(value)

    MyFontConfigPagethis.setState({
      fontSizechange: value
    })
  }
  render() {
    Small = (<TabNavigator.Item
      title={" "}
      renderIcon={() => IconConfig.IconFontSmall}
      //renderSelectedIcon={() => IconConfig.IconDvinationSel}
      onPress={() => this.onFontChange(1)}
      titleStyle={StyleConfig.menufont}>
    </TabNavigator.Item>)
    Big = (<TabNavigator.Item
      title={" "}
      renderIcon={() => IconConfig.IconFontLarge}
      //renderSelectedIcon={() => IconConfig.IconDvinationSel}
      onPress={() => this.onFontChange(10)}
      titleStyle={StyleConfig.menufont}>
    </TabNavigator.Item>)
    Default = (<TabNavigator.Item
      title={" "}
      renderIcon={() => IconConfig.IconFontDefault}
      //renderSelectedIcon={() => IconConfig.IconDvinationSel}
      onPress={() => this.changeFontRefresh()}
      titleStyle={StyleConfig.menufont}>
    </TabNavigator.Item>)
    return (<View style={StyleConfig.container}>
      <View style={{ height: ScreenConfig.__screenH()-ScreenConfig.getTabBarHeight()*4}}>
      <FlatList
        ref={(flatList) => this._flatList = flatList}
        useFlatList={true}
        //1数据的获取和渲染
        //data={undefined != content[this.state.keyindex]?content[this.state.keyindex]:""}
        data={Agreement}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(data) => (<View><Text style={{ fontSize: 15 + this.state.fontSizechange - 5, paddingLeft: 15, paddingRight: 15 }}>{data.item}</Text><WhiteSpace size="xl" /></View>)}
      >
      </FlatList>
      </View>
      <View >
        <List.Item styles={{ height:60}}
          extra={
            <Stepper
              styles={{ height:60}}
              inputStyle = {{fontSize:12,lineHeight:15}}
              key="0"
              max={10}
              min={1}
              value = {this.state.fontSizechange}
              defaultValue={this.state.fontSizechange}
              onChange={this.onFontChange}
            />
          }
        >
          字体大小
          </List.Item></View>
      <TabNavigator tabBarStyle={{ height: ScreenConfig.getTabBarHeight(), backgroundColor: '#ffffff', }}>
        {Small}
        {Default}
        {Big}
      </TabNavigator >
    </View>)

  }

}
module.exports = MyFontConfigPage;  