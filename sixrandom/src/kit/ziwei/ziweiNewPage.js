

import React, {Component} from 'react';
import {StyleSheet,Keyboard,View,Button, TextInput,ScrollView, Text} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  

import { TextareaItem,DatePicker, List ,Switch,WhiteSpace,PickerView,Provider } from '@ant-design/react-native';

import {HistoryArrayGroup} from '../../config/StorageModule'
import ValueTypeModule from '../../config/ValueTypeModule'
import UserModule from '../../config/UserModule'
import {SixrandomModule} from '../UniversechangesLib/SixrandomLib/SixrandomModule'
import RouteConfig from '../../config/RouteConfig';
import ScreenConfig from '../../config/ScreenConfig';
import {StyleConfig,FontStyleConfig} from '../../config/StyleConfig';


class ziweiNewPage extends React.Component {

  constructor(porp) {
    var curday = new Date();
        super(porp);
        this.state= {
          switchstate: true,
            datepicker:"",
            switchtype:true,
            datatype:"公历",
            Tip: "",
            value:curday,
            selectedValue: '男',
    }
   
  }


  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    //headerRight:(<Button title="返回" />),
    return{
      
    title: RouteConfig["ziweiNewPage"].name,
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
              <TextareaItem style={styles.input} placeholder="简单记录您的问题，用于紫薇记录结果" rows={2} count={140} onChangeText={(text) => this.setState({Tip:text})}/>   
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
            <List.Item arrow="horizontal">紫薇生辰:</List.Item>
            </DatePicker>
            <List.Item
                extra={
                  <Switch
                    checked={this.state.switchstate}
                    onChange={(value) => this.setState({ switchstate: value, selectedValue: false == value ? "女" : "男" })}
                  />
                }
              >{this.state.selectedValue}
              </List.Item>
            <List.Item
              extra={
                <Switch
                  checked={this.state.switchtype}
                  onChange={(value) =>this.setState({switchtype:value,datatype:value==false?"农历":"公历"})}
                />
              }
            >{this.state.datatype}
            </List.Item>
           </List>
                
            
            <View style={styles.inputbutton}>
            <Button
                onPress={()=>this.ziweipaipan()}
                title="紫薇排盘"
        
            />
            <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
            </View>
            </ScrollView> 
            <TabNavigator tabBarStyle={{ height: ScreenConfig.getTabBarHeight() , backgroundColor: '#ffffff',}}>
                            <TabNavigator.Item
                                  title={RouteConfig["ziweiHistoryPage"].name}
                                  renderIcon={() => RouteConfig["ziweiHistoryPage"].icon}
                                  onPress={() => navigate(RouteConfig["ziweiHistoryPage"].route) }  
                                  titleStyle={StyleConfig.menufont}>  
                              </TabNavigator.Item>  
                          </TabNavigator>  
       
</View>

            )
    }
    async ziweipaipan()
    {
      var dataArray = [];
      dataArray["date"] = this.state.datepicker;
      dataArray["switchtype"] = this.state.switchtype
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
      savedate[1] = SixCourseDate.lunargzYear+SixCourseDate.lunargzMonth +SixCourseDate.luanrgzDate +SixCourseDate.gzTime + "紫薇"
      if ('男' == this.state.selectedValue) {
        savedate[2] = '乾造'
      }
      else {
        savedate[2] = '坤造'
      }
      savedate[3] = myDate
      savedate[4] = ""+this.state.Tip
      savedate[5] = myDate.getFullYear() + "/" + (myDate.getMonth() + 1) + "/" + myDate.getDate() + " " + myDate.getHours() + " " + myDate.getMinutes() + " " + myDate.getSeconds();
    
      var obj = {}
      obj.id = index
      obj.ret = savedate[1]
      obj.tip = this.state.Tip
      obj.sex = savedate[2] 
      obj.star = false
      obj.date = savedate[0]
      obj.birth = savedate[5]
      obj.kind ="eightrandom"
      obj.sync = false 
      var Jstr = JSON.stringify(obj)
      console.log("convertJsonSave",Jstr);
            
      let T = await UserModule.SyncFileServer(obj.kind, obj.id, Jstr)
      if (undefined != T && 2000 == T.code) {
        Jstr = HistoryArrayGroup.MakeJsonSync(Jstr)
      }
  
      //await HistoryArrayGroup.saveid(obj.kind ,obj.id,Jstr)
      //HistoryArrayGroup.GetQimenHistory()
      var parameter = "?EightDate="+savedate[1] + "&sex=" + savedate[2] + "&Date=" + savedate[0] + "&birth=" + savedate[5]
      await HistoryArrayGroup.saveid(obj.kind, obj.id, Jstr)
      //await HistoryArrayGroup.saveid("name",index,savedate)
      //await HistoryArrayGroup.save("lastname",savedate)
      HistoryArrayGroup.GetEightRandomHistory()
      this.props.navigation.navigate('ziweiMainPage',parameter)
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
module.exports=ziweiNewPage;  