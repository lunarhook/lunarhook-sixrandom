
var Dimensions = require('Dimensions');
import React, {Component} from 'react';
import {StyleSheet,Keyboard,View,Button, TextInput,TouchableOpacity, Text,ListView,TouchableWithoutFeedback,Switch} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import { AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation'
import StorageModule from './StorageModule'
import ValueTypeModule from './ValueTypeModule'
import SixrandomModule from './SixrandomModule'
import Picker from 'react-native-picker';
//import DatePicker from 'react-native-datepicker'
//import DateTimePicker from 'react-native-modal-datetime-picker';
import { RadioButtons } from 'react-native-radio-buttons'
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'


class EightrandomNewPage extends React.Component {

  constructor(porp) {
    
        super(porp);
        this.state= {
          isDatePickerVisible: false,
          isTimePickerVisible: false,
            switchstate:true,
            selectedValue: '男',
            datepicker:"",
            timepicker:"",
            Tip: ""
    }
   
  }

 
  _showTimePicker() {
    let years = [],
        months = [],
        days = [],
        hours = [],
        minutes = [];

    for(let i=1;i<101;i++){
        years.push(i+1930);
    }
    for(let i=1;i<13;i++){
        months.push(i);
    }
    for(let i=1;i<24;i++){
      hours.push(i);
  }
    for(let i=1;i<32;i++){
        days.push(i);
    }
    for(let i=1;i<61;i++){
        minutes.push(i);
    }
    let pickerData = [years, months, days, hours, minutes];
    let date = new Date();
    let selectedValue = [
        [date.getFullYear()],
        [date.getMonth()+1],
        [date.getDate()],
        [date.getHours()],
        [date.getMinutes()]
    ];
    Picker.init({
        pickerData,
        selectedValue,
        pickerTitleText: '日期',
        wheelFlex: [2, 1, 1, 2, 1],
        onPickerConfirm: pickedValue => {
            console.log('area', pickedValue);
            var selecttime = new Date()
            selecttime.setFullYear(pickedValue[0]);
            selecttime.setMonth(pickedValue[1]-1);
            selecttime.setDate(pickedValue[2]);
            selecttime.setHours(pickedValue[3]);
            selecttime.setMinutes(pickedValue[4]);
            this.setState({datepicker:selecttime.toLocaleString()})
        },
        onPickerCancel: pickedValue => {
            console.log('area', pickedValue);
        },
        onPickerSelect: pickedValue => {
            let targetValue = [...pickedValue];
            if(parseInt(targetValue[1]) === 2){
                if(targetValue[0]%4 === 0 && targetValue[2] > 29){
                    targetValue[2] = 29;
                }
                else if(targetValue[0]%4 !== 0 && targetValue[2] > 28){
                    targetValue[2] = 28;
                }
            }
            else if(targetValue[1] in {4:1, 6:1, 9:1, 11:1} && targetValue[2] > 30){
                targetValue[2] = 30;
                
            }
            // forbidden some value such as some 2.29, 4.31, 6.31...
            if(JSON.stringify(targetValue) !== JSON.stringify(pickedValue)){
                // android will return String all the time，but we put Number into picker at first
                // so we need to convert them to Number again
                targetValue.map((v, k) => {
                    if(k !== 3){
                        targetValue[k] = parseInt(v);
                    }
                });
                Picker.select(targetValue);
                pickedValue = targetValue;
            }
        }
    });
    Picker.show();
}


_toggle() {
  Picker.toggle();
}


  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    //headerRight:(<Button title="返回" />),
    return{
    headerRight:(<Button title="八字历史" onPress={  () => navigate('HistoryPage')  }/>),
    title: '八字排盘',
    }
    
  };


  onSelect(index, value){
    this.setState({
      selectedValue:value
    })
  }
  render()
  {
    const { navigate } = this.props.navigation;


    
  
    //alert(ValueTypeModule["emotion"])
    return (
            <View style={styles.container}>
              <View style={styles.inputname}> 
              <Text >姓名：</Text>    
        <TextInput
                
                style={ [styles.inputname,{width:200,fontSize:15,textAlign:"right",}]}

                //returnKeyType="done"
                //defaultValue="陈长生"
                underlineColorAndroid="transparent"
                //underlineColorAndroid="transparent"
                //multiline={true}
                placeholder="陈长生"
                onSubmitEditing={Keyboard.dismiss} 
                onFocus={() => value=""}
                onChangeText={(text) => this.setState({Tip:text})}/>
        </View>
      
             
        <View style={styles.inputname}> 
    <TouchableOpacity onPress={this._showTimePicker.bind(this)}>
        <Text>时间</Text>
    </TouchableOpacity>
  
    
    <Text>{this.state.datepicker}</Text>
    </View>
             
        
        <View style={styles.inputname}>  
        <Text >{this.state.selectedValue}</Text>
          <Switch  
          onValueChange={(value) =>this.setState({switchstate: value,selectedValue:false==value?"女":"男"})}  
          value={this.state.switchstate}/>  
         
            </View>
            <Button
  onPress={()=>this.bazipaipan()}
  title="八字排盘"
  //accessibilityLabel="Learn more about this purple button"
/>
            </View> 
            )
    }
    bazipaipan()
    {
      var dataArray = [];
      dataArray["date"] = this.state.datepicker;
      dataArray["time"] = this.state.timepicker;
      dataArray["sex"]  = this.state.selectedValue;
      dataArray["name"] = this.state.Tip

      console.log(dataArray)
    }
  begin(pagename)
    {
      const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
              NavigationActions.navigate({ routeName: pagename}),
          ]
        })
        this.props.navigation.dispatch(resetAction)
    }
}

var styles = StyleSheet.create ({
  containerlist:{
     textAlign:'center',     
   justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
   alignItems: 'center',
   lineHeight:45,     //行高  
    
  },
  input:{
    height:45,
    //borderWidth:1,
    marginLeft: 1,
    paddingLeft:1,
    //borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    textAlign:'center', 
    textDecorationLine:'underline',
    fontSize: 12,         
  },
  menufont:{
    fontSize:15,
    color: '#333333', 
    height:25
  },
  container: {
    flex:1,
    
  },
    vb_text: {  
    color: '#333333',  
    fontFamily: 'Times',  
    margin: 10,  
    fontSize: 12,         
    textAlign: 'auto',  
    lineHeight: 20,     //行高  
      justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
   textAlign:'center',     
    fontStyle: 'italic',    //设置文字：normal：正常体；italic：斜体  
    fontWeight: 'bold', //设置粗体字，'normal' /*default*/, 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900'  
    textDecorationLine: 'none',//下划线和删除线的样式：['none' /*default*/, 'underline', 'line-through', 'underline line-through'  
  },
  inputname: {
    //justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    justifyContent:'space-between',
    flexDirection: 'row',
    marginLeft: 50, 
    marginRight: 50,
    marginTop: 10,
    marginBottom: 10,
  },
});
module.exports=EightrandomNewPage;  