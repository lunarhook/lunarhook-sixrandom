

import React, {Component} from 'react';
import {StyleSheet,Keyboard,View,Button, TextInput,ScrollView, Text} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  

import { TextareaItem,DatePicker, List ,Switch,WhiteSpace,PickerView ,Provider} from '@ant-design/react-native';
import {HistoryArrayGroup} from '../../../config/StorageModule'
import ValueTypeModule from '../../../config/ValueTypeModule'
import {SixrandomModule} from '../../UniversechangesLib/SixrandomLib/SixrandomModule'
import RouteConfig from '../../../config/RouteConfig';
import ScreenConfig from '../../../config/ScreenConfig';
import StyleConfig from '../../../config/StyleConfig';
import UserModule from '../../../config/UserModule'


class taiyiNewPage extends React.Component {

  constructor(porp) {
    var curday = new Date();
        super(porp);
        this.state= {
          value:"",
            datepicker:"",
            switchtype:true,
            datatype:"公历",
            Tip: "",
            value:curday
    }
   
  }


  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    //headerRight:(<Button title="返回" />),
    return{
      
    title: RouteConfig["taiyiNewPage"].name,
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
              <TextareaItem style={styles.input} placeholder="记录您的问题，用于太乙结果参考" rows={2} count={140} onChangeText={(text) => this.setState({Tip:text})}/>   
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
            <List.Item arrow="horizontal">时间:</List.Item>
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
           </List>
                
            
            <View style={styles.inputbutton}>
            <Button
                onPress={()=>this.taiyipan()}
                title="太乙排盘"
        
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
                                  title={RouteConfig["taiyiHistoryPage"].name}
                                  renderIcon={() => RouteConfig["taiyiHistoryPage"].icon}
                                  onPress={() => navigate(RouteConfig["taiyiHistoryPage"].route) }  
                                  titleStyle={StyleConfig.menufont}>  
                              </TabNavigator.Item>  
                          </TabNavigator>  
       
</View>
            )
    }
    async taiyipan()
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
      
      var taiyiDate = SixrandomModule.lunar_f(myDate)
      console.log(taiyiDate)
      var index = (new Date()).valueOf().toString();
      var savedate = new Array()
      savedate[0] = index;
      savedate[1] = taiyiDate.gzYear+taiyiDate.gzMonth +taiyiDate.gzDate +taiyiDate.gzTime;
      savedate[2] = ""+this.state.Tip
      savedate[3] = myDate.getFullYear();
      savedate[4] = myDate.getMonth()+1;
      savedate[5] = myDate.getDate();
      savedate[6] = myDate.getHours();
      var obj = {}
      obj.id = index
      obj.tip = this.state.Tip
      obj.star = false
      obj.date = myDate
      obj.kind ="taiyi"
      obj.sync = false 
      obj.Y = myDate.getFullYear();
      obj.M = myDate.getMonth()+1;
      obj.D = myDate.getDate();
      obj.H = myDate.getHours();
      var Jstr = JSON.stringify(obj)
      console.log("convertJsonSave",Jstr);
      let T = await UserModule.SyncFileServer(obj.kind,obj.id,Jstr)
      if(undefined!=T && 2000==T.code ){
          Jstr = HistoryArrayGroup.MakeJsonSync(Jstr)
      }
      await HistoryArrayGroup.saveid(obj.kind ,obj.id,Jstr)
     
      //HistoryArrayGroup.saveid("taiyi",index,savedate)
      var parameter = "?taiyiDate="+savedate[1] + "&tip=" + savedate[2] + "&Y=" + savedate[3] + "&M=" + savedate[4] +"&D=" + savedate[5]  +"&H=" + savedate[6] 
      this.props.navigation.navigate('taiyiMainPage',parameter)
    }
  
}

var styles = StyleSheet.create ({
  input:{
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    textAlign:'center', 
    textDecorationLine:'underline',
    fontSize:11,
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
module.exports=taiyiNewPage;  