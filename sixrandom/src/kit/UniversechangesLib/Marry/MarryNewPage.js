

import React, { Component } from 'react';
import { StyleSheet, Keyboard, View, Button, ScrollView, TouchableOpacity, Text, TouchableWithoutFeedback } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import { InputItem, DatePicker, List, Switch, WhiteSpace, Provider, PickerView } from '@ant-design/react-native';

import { StorageModule, HistoryArrayGroup } from '../../../config/StorageModule'
import ZoneTimeModule from '../../../config/ZoneTimeModule'
import ValueTypeModule from '../../../config/ValueTypeModule'
import { SixrandomModule } from '../SixrandomLib/SixrandomModule'
import RouteConfig from '../../../config/RouteConfig';
import ScreenConfig from '../../../config/ScreenConfig';
import { StyleConfig, FontStyleConfig } from '../../../config/StyleConfig';
import UserModule from '../../../config/UserModule'
class MarryNewPage extends React.Component {

  constructor(porp) {
    super(porp);
    this.state = {
      datepickermale: new Date(),//new Date('1984-07-08'),
      //datepickermale: new Date('1980-11-05'),
      datepickerfemale: new Date(),//new Date('1987-08-22'),
      //datepickerfemale: new Date('1979-10-16'),
      switchtypemale: true,
      switchtypefemale: true,
      datatypemale: "公历",
      datatypefemale: "公历",
      switchleapmale: false,
      switchleapfemale: false,
      leaptypemale: "常年",
      leaptypefemale: "常年",
      valuemale: new Date('1980-11-05 08:00:00'),
      valuefemale:new Date('1980-11-05 08:00:00'),
    }

  }


  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    //headerRight:(<Button title="返回" />),
    return {

      title: RouteConfig["MarryNewPage"].name,
    }

  };

  //获取value值调用的方法
  getValue(text) {
    var value = text;
    this.setState({
      show: true,
      value: value
    });
  }

  //隐藏
  hide(val) {
    this.setState({
      show: false,
      value: val
    });
  }

  leapmonthmale() {
    if (false == this.state.switchtypemale) {
      return (

        <List.Item
          extra={
            <Switch
              checked={this.state.switchleapmale}
              onChange={(value) => this.setState({ switchleapmale: value, leaptypemale: value == false ? "常年" : "闰月" })}
            />
          }
        >{this.state.leaptypemale}
        </List.Item>
      )
    }
  }


  leapmonthfemale() {
    if (false == this.state.switchtypefemale) {
      return (

        <List.Item
          extra={
            <Switch
              checked={this.state.switchleapfemale}
              onChange={(value) => this.setState({ switchleapfemale: value, leaptypefemale: value == false ? "常年" : "闰月" })}
            />
          }
        >{this.state.leaptypemale}
        </List.Item>
      )
    }
  }


  onChangeDatamale = (value: any) => {
    console.log(value);
    var cur = new Date(value)
    this.setState({ valuemale:cur });
    var selecttime = new Date(cur)
    this.setState({ datepickermale: selecttime })
  }
  onChangeDatafemale = (value: any) => {
    console.log(value);
    var cur = new Date(value)
    this.setState({ valuefemale:cur });
    var selecttime = new Date(cur)
    this.setState({ datepickerfemale: selecttime })
  }

  onChangetimemale = (value: any) => {
    console.log(value);
    var cur = new Date(value)
    this.setState({ valuemale:cur });
    var selecttime = new Date(cur)
    this.setState({ datepickermale: selecttime })
  }
  onChangetimefemale = (value: any) => {
    console.log(value);
    var cur = new Date(value)
    this.setState({ valuefemale:cur });
    var selecttime = new Date(cur)
    this.setState({ datepickerfemale: selecttime })
  }
  render() {
    const { navigate } = this.props.navigation;
    //alert(ValueTypeModule["emotion"])
    return (
      <View style={styles.container}>
        <ScrollView>
          <View >
            <List style={styles.inputpicker}>
              <DatePicker
                backgroundColor='#ff00ff'
                value={this.state.datepickermale}
                //value={new Date('1980-11-05 08:00:00')}
                mode="date"
                minDate={new Date(1900, 1, 1)}
                //maxDate={new Date(2026, 11, 3)}
                onChange={this.onChangeDatamale}
                format="YYYY-MM-DD"
                numberOfLines={100}
                ellipsizeMode={'tail'}
              //itemStyle={{fontSize:9}}
              >
                <List.Item arrow="horizontal">男生辰:</List.Item>
              </DatePicker>
              <DatePicker
                backgroundColor='#ff00ff'
                value={this.state.datepickermale}
                //value={new Date('1979-10-16 08:00:00')}
                mode="time"
                minDate={new Date(1900, 1, 1)}
                //maxDate={new Date(2026, 11, 3)}
                onChange={this.onChangetimemale}
                format="HH:mm"
                numberOfLines={100}
                ellipsizeMode={'tail'}
              //itemStyle={{fontSize:9}}
              >
                <List.Item arrow="horizontal">男时辰:</List.Item>
              </DatePicker>
              <List.Item
                extra={
                  <Switch
                    checked={this.state.switchtypemale}
                    onChange={(value) => this.setState({ switchtypemale: value, datatypemale: value == false ? "农历" : "公历" })}
                  />
                }
              >{this.state.datatypemale}
              </List.Item>
              {this.leapmonthmale()}
            </List>
            <List style={styles.inputpicker}>
              <DatePicker
                backgroundColor='#ff00ff'
                value={this.state.datepickerfemale}
                //value={new Date('1979-10-16 08:00:00')}
                mode="date"
                minDate={new Date(1900, 1, 1)}
                //maxDate={new Date(2026, 11, 3)}
                onChange={this.onChangeDatafemale}
                format="YYYY-MM-DD"
                numberOfLines={100}
                ellipsizeMode={'tail'}
              //itemStyle={{fontSize:9}}
              >
                <List.Item arrow="horizontal">女生辰:</List.Item>
              </DatePicker>
              <DatePicker
                backgroundColor='#ff00ff'
                value={this.state.datepickerfemale}
                //value={new Date('1979-10-16 08:00:00')}
                mode="time"
                minDate={new Date(1900, 1, 1)}
                //maxDate={new Date(2026, 11, 3)}
                onChange={this.onChangetimefemale}
                format="HH:mm"
                numberOfLines={100}
                ellipsizeMode={'tail'}
              //itemStyle={{fontSize:9}}
              >
                <List.Item arrow="horizontal">女时辰:</List.Item>
              </DatePicker>
              <List.Item
                extra={
                  <Switch
                    checked={this.state.switchtypefemale}
                    onChange={(value) => this.setState({ switchtypefemale: value, datatypefemale: value == false ? "农历" : "公历" })}
                  />
                }
              >{this.state.datatypefemale}
              </List.Item>
              {this.leapmonthfemale()}
            </List>
          </View>

          <View style={styles.inputbutton}>
            <Button
              onPress={() => this.bazipaipan()}
              title="合盘"

            />

          </View>

        </ScrollView>
        {
        <TabNavigator tabBarStyle={{ height: ScreenConfig.getTabBarHeight(), backgroundColor: '#ffffff', }}>
        <TabNavigator.Item
          title={RouteConfig["MarryHistoryPage"].name}
          renderIcon={() => RouteConfig["MarryHistoryPage"].icon}
          onPress={() => navigate(RouteConfig["MarryHistoryPage"].route)}
          titleStyle={StyleConfig.menufont}>
        </TabNavigator.Item>
      </TabNavigator>
        }


      </View>
    )
  }
  buildmale()
  {
    var dataArraymale = [];
    dataArraymale["date"] = this.state.datepickermale;
    if (undefined == dataArraymale["date"] || "" == dataArraymale["date"]) {
      dataArraymale["date"] = new Date()
    }
    var myDatemale = new Date(dataArraymale["date"])

    if (this.state.switchtypemale == false) {
      var isleap = false
      if (this.state.switchleapmale == true) {
        isleap = true;
      }
      var Json_ret = SixrandomModule.lunar2solar(myDatemale.getFullYear(), myDatemale.getMonth() + 1, myDatemale.getDate(), isleap)
      console.log("solar2lunar", Json_ret, myDatemale.getFullYear(), myDatemale.getMonth() + 1, myDatemale.getDate())
      Json_ret_Hours = myDatemale.getHours();
      Json_ret_Min = myDatemale.getMinutes();
      myDatemale = Json_ret
      myDatemale.setHours(Json_ret_Hours)
      myDatemale.setMinutes(Json_ret_Min)
    }

    var EightDatemale = SixrandomModule.lunar_f(myDatemale)


    var savedatemale = new Array()
    savedatemale[0] = (new Date()).valueOf().toString();
    savedatemale[1] = EightDatemale.gzYear + EightDatemale.gzMonth + EightDatemale.gzDate + EightDatemale.gzTime;
    savedatemale[2] = '乾造'
    savedatemale[3] = ""
    savedatemale[4] = myDatemale.getFullYear() + "/" + (myDatemale.getMonth() + 1) + "/" + myDatemale.getDate() + " " + myDatemale.getHours() + " " + myDatemale.getMinutes() + " " + myDatemale.getSeconds();
    return savedatemale
  }
  buildfemale()
  {
    var dataArrayfemale = [];
    dataArrayfemale["date"] = this.state.datepickerfemale;
    if (undefined == dataArrayfemale["date"] || "" == dataArrayfemale["date"]) {
      dataArrayfemale["date"] = new Date()
    }
    var myDatefemale = new Date(dataArrayfemale["date"])

    if (this.state.switchtypefemale == false) {
      var isleap = false
      if (this.state.switchleapfemale == true) {
        isleap = true;
      }
      var Json_ret = SixrandomModule.lunar2solar(myDatefemale.getFullYear(), myDatefemale.getMonth() + 1, myDatefemale.getDate(), isleap)
      console.log("solar2lunar", Json_ret, myDatefemale.getFullYear(), myDatefemale.getMonth() + 1, myDatefemale.getDate())
      Json_ret_Hours = myDatefemale.getHours();
      Json_ret_Min = myDatefemale.getMinutes();
      myDatefemale = Json_ret
      myDatefemale.setHours(Json_ret_Hours)
      myDatefemale.setMinutes(Json_ret_Min)
    }

    var EightDatefemale = SixrandomModule.lunar_f(myDatefemale)


    var savedatefemale = new Array()
    savedatefemale[0] = (new Date()).valueOf().toString();
    savedatefemale[1] = EightDatefemale.gzYear + EightDatefemale.gzMonth + EightDatefemale.gzDate + EightDatefemale.gzTime;
    savedatefemale[2] = '乾造'
    savedatefemale[3] = ""
    savedatefemale[4] = myDatefemale.getFullYear() + "/" + (myDatefemale.getMonth() + 1) + "/" + myDatefemale.getDate() + " " + myDatefemale.getHours() + " " + myDatefemale.getMinutes() + " " + myDatefemale.getSeconds();
    return savedatefemale
  }
  async bazipaipan() {
    
    var savedatemale = this.buildmale()
    var savedatefemale = this.buildfemale()

    var obj = {}
    obj.id =  (new Date()).valueOf().toString()
    obj.tip = ""
    obj.star = ""
    obj.EightDatemale = savedatemale[1]
    obj.birthmale = savedatemale[4]
    obj.Datemale =  savedatemale[0]
    obj.EightDatefemale = savedatefemale[1] 
    obj.birthfemale = savedatefemale[4]
    obj.Datefemale = savedatefemale[0]
    var Jstr = JSON.stringify(obj)
    let T = await UserModule.SyncFileServer(obj.kind, obj.id, Jstr)
    if (undefined != T && 2000 == T.code) {
      Jstr = HistoryArrayGroup.MakeJsonSync(Jstr)
    }
    var parameter = "?EightDatemale=" + savedatemale[1]  + "&birthmale=" + savedatemale[4] + "&Datemale=" + savedatemale[0]
    parameter = parameter + "&EightDatefemale=" + savedatefemale[1]  + "&birthfemale=" + savedatefemale[4] + "&Datefemale=" + savedatefemale[0] + "&rowid=" +obj.id
    console.log(parameter)
    await HistoryArrayGroup.saveid("Marry", obj.id, Jstr)
    //await HistoryArrayGroup.saveid("name",index,savedate)
    //await HistoryArrayGroup.save("lastname",savedate)
    HistoryArrayGroup.GetMarryHistory()
    this.props.navigation.navigate('MarryMainPage', {"url":parameter})
  }

}

var styles = StyleSheet.create({

  input: {
    width: 240,
    height: 35,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputname: {
    //justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    alignItems: 'center',
    justifyContent: 'space-between', //虽然样式中设置了 justifyContent: 'center'，但无效  
    //justifyContent:'space-between',
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 50,
  },
  inputbutton: {
    //justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    alignItems: 'center',
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
    //justifyContent:'space-between',
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 50,
  },
  inputpicker: {

    marginLeft: 15,
    marginRight: 15,
    marginTop: 50,
  },
  buttonstyle: {
    justifyContent: 'space-between', //虽然样式中设置了 justifyContent: 'center'，但无效  
    alignItems: 'baseline',
  },

});
module.exports = MarryNewPage;  