

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
class PartnershipNewPage extends React.Component {

  constructor(porp) {
    super(porp);
    this.state = {
      datepickerleader: new Date(),//new Date('1984-07-08'),
      //datepickerleader: new Date('1980-11-05'),
      datepickerPartnership: new Date(),//new Date('1987-08-22'),
      //datepickerPartnership: new Date('1979-10-16'),
      switchstateleader:true,
      switchstatePartnership:true,
      switchtypeleader: true,
      switchtypePartnership: true,
      datatypeleader: "公历",
      datatypePartnership: "公历",
      switchleapleader: false,
      switchleapPartnership: false,
      leaptypeleader: "常年",
      leaptypePartnership: "常年",
      valueleader: new Date('1980-11-05 08:00:00'),
      valuePartnership:new Date('1980-11-05 08:00:00'),
    }

  }


  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    //headerRight:(<Button title="返回" />),
    return {

      title: RouteConfig["PartnershipNewPage"].name,
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

  leapmonthleader() {
    if (false == this.state.switchtypeleader) {
      return (

        <List.Item
          extra={
            <Switch
              checked={this.state.switchleapleader}
              onChange={(value) => this.setState({ switchleapleader: value, leaptypeleader: value == false ? "常年" : "闰月" })}
            />
          }
        >{this.state.leaptypeleader}
        </List.Item>
      )
    }
  }


  leapmonthPartnership() {
    if (false == this.state.switchtypePartnership) {
      return (

        <List.Item
          extra={
            <Switch
              checked={this.state.switchleapPartnership}
              onChange={(value) => this.setState({ switchleapPartnership: value, leaptypePartnership: value == false ? "常年" : "闰月" })}
            />
          }
        >{this.state.leaptypeleader}
        </List.Item>
      )
    }
  }


  onChangeDataleader = (value: any) => {
    console.log(value);
    var cur = new Date(value)
    this.setState({ valueleader:cur });
    var selecttime = new Date(cur)
    this.setState({ datepickerleader: selecttime })
  }
  onChangeDataPartnership = (value: any) => {
    console.log(value);
    var cur = new Date(value)
    this.setState({ valuePartnership:cur });
    var selecttime = new Date(cur)
    this.setState({ datepickerPartnership: selecttime })
  }

  onChangetimeleader = (value: any) => {
    console.log(value);
    var cur = new Date(value)
    this.setState({ valueleader:cur });
    var selecttime = new Date(cur)
    this.setState({ datepickerleader: selecttime })
  }
  onChangetimePartnership = (value: any) => {
    console.log(value);
    var cur = new Date(value)
    this.setState({ valuePartnership:cur });
    var selecttime = new Date(cur)
    this.setState({ datepickerPartnership: selecttime })
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
                value={this.state.datepickerleader}
                //value={new Date('1980-11-05 08:00:00')}
                mode="date"
                minDate={new Date(1900, 1, 1)}
                maxDate={new Date(2050, 12, 31)}
                onChange={this.onChangeDataleader}
                format="YYYY-MM-DD"
                numberOfLines={100}
                ellipsizeMode={'tail'}
              //itemStyle={{fontSize:9}}
              >
                <List.Item arrow="horizontal">创始人生辰:</List.Item>
              </DatePicker>
              <DatePicker
                backgroundColor='#ff00ff'
                value={this.state.datepickerleader}
                //value={new Date('1979-10-16 08:00:00')}
                mode="time"
                minDate={new Date(1900, 1, 1)}
                maxDate={new Date(2050, 12, 31)}
                onChange={this.onChangetimeleader}
                format="HH:mm"
                numberOfLines={100}
                ellipsizeMode={'tail'}
              //itemStyle={{fontSize:9}}
              >
                <List.Item arrow="horizontal">创始人时辰:</List.Item>
              </DatePicker>
              <List.Item
                extra={
                  <Switch
                    checked={this.state.switchstateleader}
                    onChange={(value) => this.setState({ switchstateleader: value})}
                  />
                }
              >{true==this.state.switchstateleader?"男":"女"}
              </List.Item>
              <List.Item
                extra={
                  <Switch
                    checked={this.state.switchtypeleader}
                    onChange={(value) => this.setState({ switchtypeleader: value, datatypeleader: value == false ? "农历" : "公历" })}
                  />
                }
              >{this.state.datatypeleader}
              </List.Item>
              {this.leapmonthleader()}
            </List>
            <List style={styles.inputpicker}>
              <DatePicker
                backgroundColor='#ff00ff'
                value={this.state.datepickerPartnership}
                //value={new Date('1979-10-16 08:00:00')}
                mode="date"
                minDate={new Date(1900, 1, 1)}
                maxDate={new Date(2050, 12, 31)}
                onChange={this.onChangeDataPartnership}
                format="YYYY-MM-DD"
                numberOfLines={100}
                ellipsizeMode={'tail'}
              //itemStyle={{fontSize:9}}
              >
                <List.Item arrow="horizontal">合伙人生辰:</List.Item>
              </DatePicker>
              <DatePicker
                backgroundColor='#ff00ff'
                value={this.state.datepickerPartnership}
                //value={new Date('1979-10-16 08:00:00')}
                mode="time"
                minDate={new Date(1900, 1, 1)}
                maxDate={new Date(2050, 12, 31)}
                onChange={this.onChangetimePartnership}
                format="HH:mm"
                numberOfLines={100}
                ellipsizeMode={'tail'}
              //itemStyle={{fontSize:9}}
              >
                <List.Item arrow="horizontal">合伙人时辰:</List.Item>
              </DatePicker>
              <List.Item
                extra={
                  <Switch
                    checked={this.state.switchstatePartnership}
                    onChange={(value) => this.setState({ switchstatePartnership: value})}
                  />
                }
              >{true==this.state.switchstatePartnership?"男":"女"}
              </List.Item>
              <List.Item
                extra={
                  <Switch
                    checked={this.state.switchtypePartnership}
                    onChange={(value) => this.setState({ switchtypePartnership: value, datatypePartnership: value == false ? "农历" : "公历" })}
                  />
                }
              >{this.state.datatypePartnership}
              </List.Item>
              {this.leapmonthPartnership()}
            </List>
          </View>

          <View style={styles.inputbutton}>
            <Button
              onPress={() => this.bazipaipan()}
              title="合伙测评"

            />

          </View>

        </ScrollView>
        {
        <TabNavigator tabBarStyle={{ height: ScreenConfig.getTabBarHeight(), backgroundColor: '#ffffff', }}>
        <TabNavigator.Item
          title={RouteConfig["PartnershipHistoryPage"].name}
          renderIcon={() => RouteConfig["PartnershipHistoryPage"].icon}
          onPress={() => navigate(RouteConfig["PartnershipHistoryPage"].route)}
          titleStyle={StyleConfig.menufont}>
        </TabNavigator.Item>
      </TabNavigator>
        }


      </View>
    )
  }
  buildleader()
  {
    var dataArrayleader = [];
    dataArrayleader["date"] = this.state.datepickerleader;
    if (undefined == dataArrayleader["date"] || "" == dataArrayleader["date"]) {
      dataArrayleader["date"] = new Date()
    }
    var myDateleader = new Date(dataArrayleader["date"])

    if (this.state.switchtypeleader == false) {
      var isleap = false
      if (this.state.switchleapleader == true) {
        isleap = true;
      }
      var Json_ret = SixrandomModule.lunar2solar(myDateleader.getFullYear(), myDateleader.getMonth() + 1, myDateleader.getDate(), isleap)
      console.log("solar2lunar", Json_ret, myDateleader.getFullYear(), myDateleader.getMonth() + 1, myDateleader.getDate())
      Json_ret_Hours = myDateleader.getHours();
      Json_ret_Min = myDateleader.getMinutes();
      myDateleader = Json_ret
      myDateleader.setHours(Json_ret_Hours)
      myDateleader.setMinutes(Json_ret_Min)
    }

    var EightDateleader = SixrandomModule.lunar_f(myDateleader)


    var savedateleader = new Array()
    savedateleader[0] = (new Date()).valueOf().toString();
    savedateleader[1] = EightDateleader.gzYear + EightDateleader.gzMonth + EightDateleader.gzDate + EightDateleader.gzTime;
    savedateleader[2] = '乾造'
    savedateleader[3] = (true==this.state.switchstateleader?'乾造':'坤造');
    savedateleader[4] = myDateleader.getFullYear() + "/" + (myDateleader.getMonth() + 1) + "/" + myDateleader.getDate() + " " + myDateleader.getHours() + " " + myDateleader.getMinutes() + " " + myDateleader.getSeconds();
    return savedateleader
  }
  buildPartnership()
  {
    var dataArrayPartnership = [];
    dataArrayPartnership["date"] = this.state.datepickerPartnership;
    if (undefined == dataArrayPartnership["date"] || "" == dataArrayPartnership["date"]) {
      dataArrayPartnership["date"] = new Date()
    }
    var myDatePartnership = new Date(dataArrayPartnership["date"])

    if (this.state.switchtypePartnership == false) {
      var isleap = false
      if (this.state.switchleapPartnership == true) {
        isleap = true;
      }
      var Json_ret = SixrandomModule.lunar2solar(myDatePartnership.getFullYear(), myDatePartnership.getMonth() + 1, myDatePartnership.getDate(), isleap)
      console.log("solar2lunar", Json_ret, myDatePartnership.getFullYear(), myDatePartnership.getMonth() + 1, myDatePartnership.getDate())
      Json_ret_Hours = myDatePartnership.getHours();
      Json_ret_Min = myDatePartnership.getMinutes();
      myDatePartnership = Json_ret
      myDatePartnership.setHours(Json_ret_Hours)
      myDatePartnership.setMinutes(Json_ret_Min)
    }

    var EightDatePartnership = SixrandomModule.lunar_f(myDatePartnership)


    var savedatePartnership = new Array()
    savedatePartnership[0] = (new Date()).valueOf().toString();
    savedatePartnership[1] = EightDatePartnership.gzYear + EightDatePartnership.gzMonth + EightDatePartnership.gzDate + EightDatePartnership.gzTime;
    savedatePartnership[2] = '乾造'
    savedatePartnership[3] = (true==this.state.switchstatePartnership?'乾造':'坤造');
    savedatePartnership[4] = myDatePartnership.getFullYear() + "/" + (myDatePartnership.getMonth() + 1) + "/" + myDatePartnership.getDate() + " " + myDatePartnership.getHours() + " " + myDatePartnership.getMinutes() + " " + myDatePartnership.getSeconds();
    return savedatePartnership
  }
  async bazipaipan() {
    
    var savedateleader = this.buildleader()
    var savedatePartnership = this.buildPartnership()

    var obj = {}
    obj.id =  (new Date()).valueOf().toString()
    obj.tip = ""
    obj.star = ""
    obj.EightDateleader = savedateleader[1]
    obj.birthleader = savedateleader[4]
    obj.Dateleader =  savedateleader[0]
    obj.EightDatePartnership = savedatePartnership[1] 
    obj.birthPartnership = savedatePartnership[4]
    obj.DatePartnership = savedatePartnership[0]
    var Jstr = JSON.stringify(obj)
    let T = await UserModule.SyncFileServer(obj.kind, obj.id, Jstr)
    if (undefined != T && 2000 == T.code) {
      Jstr = HistoryArrayGroup.MakeJsonSync(Jstr)
    }
    var parameter = "?EightDateleader=" + savedateleader[1]  + "&birthleader=" + savedateleader[4] + "&Dateleader=" + savedateleader[0] + "&sexleader=" + savedateleader[3]
    parameter = parameter + "&EightDatePartnership=" + savedatePartnership[1]  + "&birthPartnership=" + savedatePartnership[4] + "&DatePartnership=" + savedatePartnership[0] + "&rowid=" +obj.id + "&sexPartnership=" + savedatePartnership[3]
    console.log(parameter)
    await HistoryArrayGroup.saveid("Partnership", obj.id, Jstr)
    //await HistoryArrayGroup.saveid("name",index,savedate)
    //await HistoryArrayGroup.save("lastname",savedate)
    //HistoryArrayGroup.GetMarryHistory()
    this.props.navigation.navigate('PartnershipMainPage', {"url":parameter})
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
module.exports = PartnershipNewPage;  