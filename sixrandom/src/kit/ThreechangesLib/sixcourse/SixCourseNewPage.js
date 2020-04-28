

import React, {Component} from 'react';
import {StyleSheet,Keyboard,View,Button, TextInput,ScrollView, Text} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  

import { TextareaItem,DatePicker, List ,Switch,WhiteSpace,PickerView,Provider } from '@ant-design/react-native';

import {HistoryArrayGroup} from '../../../config/StorageModule'
import UserModule from '../../../config/UserModule'
import ValueTypeModule from '../../../config/ValueTypeModule'
import {SixrandomModule} from '../../UniversechangesLib/SixrandomLib/SixrandomModule'
import RouteConfig from '../../../config/RouteConfig';
import ScreenConfig from '../../../config/ScreenConfig';
import {StyleConfig,FontStyleConfig} from '../../../config/StyleConfig';

const dataitem = [
  [
    {label: "自动",value: 0,},
    {label: "昼",value: 1},
    {label: "夜",value: 2,},

  ],
];

class SixCourseNewPage extends React.Component {

  constructor(porp) {
    var curday = new Date();
        super(porp);
        this.state= {
            datepicker:"",
            switchtype:true,
            datatype:"公历",
            switchperson:true,
            switchpersondata:"甲戊庚牛羊",
            switchtime:true,
            switchtimedata:"日旬遁干",
            selvalue:0,
            switchleap:false,
            Tip: "",
            value:curday
    }
   
  }


  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    //headerRight:(<Button title="返回" />),
    return{
      
    title: RouteConfig["SixCourseNewPage"].name,
    }
    
  };

    onChange = (value: any) => {
        console.log(value);
        this.setState({ value });
        var selecttime = new Date(value)
        this.setState({datepicker:selecttime})
      }

  render()
  {
    const { navigate } = this.props.navigation;

    
  
    //alert(ValueTypeModule["emotion"])
    return (
        <View style={styles.container}>
            <ScrollView> 
              <Text></Text>
              <TextareaItem style={styles.input} placeholder="简单记录您的问题，启课排盘后可以记录结果注释" rows={2} count={140} onChangeText={(text) => this.setState({Tip:text})}/>   
              <Text></Text>
              <List style={styles.inputpicker}>
              <DatePicker
                backgroundColor='#ff00ff'
                value={this.state.value}
                mode="datetime"
                minDate={new Date(1950, 1, 1)}
                //maxDate={new Date(2026, 11, 3)}
                onChange={this.onChange}
                format="YYYY-MM-DD-HH"
              >
            <List.Item arrow="horizontal">启课时间:</List.Item>
            </DatePicker>

            <List.Item
              extra={
                <Switch
                  checked={this.state.switchtype}
                  onChange={(value) =>this.setState({switchtype:value,datatype:value==false?"农历":"公历"})}
                />
              }
            >{this.state.datatype}
            </List.Item>
            {
/*
            }
            
            <List.Item
              extra={
                <Switch
                  checked={this.state.switchperson}
                  onChange={(value) =>this.setState({switchperson:value,switchpersondata:value==true?"甲戊庚牛羊":"甲羊戊庚牛"})}
                />
              }
            >{this.state.switchpersondata}
            </List.Item>
            <List.Item
              extra={
                <Switch
                  checked={this.state.switchtime}
                  onChange={(value) =>this.setState({switchtime:value,switchtimedata:value==true?"日旬遁干":"时旬遁干"})}
                />
              }
            >{this.state.switchtimedata}
            </List.Item>

            <PickerView
            data={dataitem}
            value={this.state.selvalue}
            onChange={(value) =>this.setState({selvalue:value})}
            cascade={false}
            >
            </PickerView>
            {
              */
            }
           </List>
                
            
            <View style={styles.inputbutton}>
            <Button
                onPress={()=>this.sixcoursepan()}
                title="启课排盘"
        
            />
            <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <Text></Text>
            </View>
            </ScrollView> 
            <TabNavigator tabBarStyle={{ height: ScreenConfig.getTabBarHeight() , backgroundColor: '#ffffff',}}>
                            <TabNavigator.Item
                                  title={RouteConfig["SixCourseHistoryPage"].name}
                                  renderIcon={() => RouteConfig["SixCourseHistoryPage"].icon}
                                  onPress={() => navigate(RouteConfig["SixCourseHistoryPage"].route) }  
                                  titleStyle={StyleConfig.menufont}>  
                              </TabNavigator.Item>  
                          </TabNavigator>  
       
</View>
            )
    }
    async sixcoursepan()
    {
      var dataArray = [];
      dataArray["date"] = this.state.datepicker;
      dataArray["switchtype"] = this.state.switchtype
      dataArray["switchperson"]  = this.state.switchpersondata;
      dataArray["switchtime"] = this.state.switchtimedata
      dataArray["selvalue"] = this.state.selvalue
      dataArray["tip"] = this.state.tip

      if(undefined==dataArray["date"] || ""==dataArray["date"])
      {
        dataArray["date"] = new Date()
      }
      var myDate=new Date(dataArray["date"])
      if(this.state.switchtype==false)
      {
            var isleap = false
            if(this.state.switchleap==true)
            {
                isleap = true;
            }
            var Json_ret = SixrandomModule.lunar2solar(myDate.getFullYear(),myDate.getMonth()+1,myDate.getDate(),isleap)
            console.log("solar2lunar",Json_ret,myDate.getFullYear(),myDate.getMonth()+1,myDate.getDate())
            myDate=Json_ret
      }
      
      var SixCourseDate = SixrandomModule.lunar_f(myDate)

      var index = (new Date()).valueOf().toString();
      var savedate = new Array()
      savedate[0] = index;
      savedate[1] = SixCourseDate.gzYear+SixCourseDate.gzMonth +SixCourseDate.gzDate +SixCourseDate.gzTime;
      savedate[2] = ""+this.state.Tip
      savedate[3] = this.state.switchpersondata;//贵人方式
      savedate[4] = this.state.switchtimedata;//日遁夜遁
      savedate[5] = this.state.selvalue//贵人行运
      savedate[6] = myDate

      var obj = {}
      obj.id = index
      obj.tip = this.state.Tip
      obj.star = false
      obj.date = myDate
      obj.kind ="sixcourse"
      obj.sync = false 
      obj.persondata = this.state.switchpersondata
      obj.timedata = this.state.switchtimedata
      obj.selvalue = this.state.selvalue
      var Jstr = JSON.stringify(obj)
      console.log("convertJsonSave",Jstr);
      let T = await UserModule.SyncFileServer(obj.kind,obj.id,Jstr)
      if(undefined!=T && 2000==T.code ){
          Jstr = HistoryArrayGroup.MakeJsonSync(Jstr)
      }
      await HistoryArrayGroup.saveid(obj.kind ,obj.id,Jstr)

      //HistoryArrayGroup.saveid("sixcourse",index,savedate)
      HistoryArrayGroup.GetSixCourseHistory()
      var parameter = "?SixCourseDate="+savedate[1] + "&tip=" + savedate[2] + "&persondata=" + savedate[3] + "&timedata=" + savedate[4] + "&selvalue=" + savedate[5] + "&mydate=" + savedate[6]
      this.props.navigation.navigate('SixCourseMainPage',parameter)
    }
}

var styles = StyleSheet.create ({
  input:{
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    textAlign:'center', 
    textDecorationLine:'underline',
    fontSize:FontStyleConfig.getFontApplySize()+11,
  },
  

  container: {
    flex:1,
    backgroundColor: 'white',
  },
  inputname: {
    //justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    alignItems:'center',
    justifyContent: 'space-between', //虽然样式中设置了 justifyContent: 'center'，但无效  
    //justifyContent:'space-between',
    flexDirection: 'row',
    marginLeft: 30, 
    marginRight: 30, 
    marginTop: 50,
  },
  inputbutton: {
    //justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    alignItems:'center',
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
  buttonstyle:{
    justifyContent: 'space-between', //虽然样式中设置了 justifyContent: 'center'，但无效  
    alignItems:'baseline',
  },

});
module.exports=SixCourseNewPage;  