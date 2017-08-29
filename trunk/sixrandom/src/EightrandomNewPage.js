
var Dimensions = require('Dimensions');
import React, {Component} from 'react';
import {StyleSheet,Keyboard,View,Button, TextInput,TouchableOpacity, Text,ListView,Picker,TouchableWithoutFeedback} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import { AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation'
import StorageModule from './StorageModule'
import ValueTypeModule from './ValueTypeModule'
import SixrandomModule from './SixrandomModule'
import DateTimePicker from 'react-native-modal-datetime-picker';
import { RadioButtons } from 'react-native-radio-buttons'
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'


class EightrandomNewPage extends React.Component {

  constructor(porp) {
    
        super(porp);
        this.state= {
          isDatePickerVisible: false,
          isTimePickerVisible: false,
      
            selectedValue: '女',
            datepicker:"",
            timepicker:"",
            Tip: ""
    }
   
  }

  _showDatePicker = () => this.setState({ isDatePickerVisible: true });
  
    _hideDatePicker = () => this.setState({ isDatePickerVisible: false });
    _showTimePicker = () => this.setState({ isTimePickerVisible: true });
    
      _hideTimePicker = () => this.setState({ isTimePickerVisible: false });
  
    _handleDatePicked = (datepick) => {
      
      var t = new Date(datepick)
      console.log('A date has been picked: ', t);
      this.setState({datepicker: t.toLocaleDateString()})
      this._hideDatePicker();}

      _handleTimePicked = (timpick) => {
        var t = new Date(timpick)
        console.log('A time has been picked: ', t);
        this.setState({timepicker: t.toLocaleTimeString()})
        this._hideTimePicker();
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
        <TouchableOpacity onPress={this._showDatePicker}>
        <View style={styles.inputname}>  
          <Text >生日：</Text><Text >{""==this.state.datepicker?"10/10/1990":this.state.datepicker}</Text>
          <DateTimePicker
              
          isVisible={this.state.isDatePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDatePicker}
        />
          </View>
          </TouchableOpacity>
             
        <TouchableOpacity onPress={this._showTimePicker}>
          <View style={styles.inputname}>  
          <Text >时间：</Text><Text >{""==this.state.timepicker?"01:00:00 AM":this.state.timepicker}</Text>
          <DateTimePicker
              mode = 'time'
          isVisible={this.state.isTimePickerVisible}
          onConfirm={this._handleTimePicked}
          onCancel={this._hideTimePicker}
        />
          </View>
          </TouchableOpacity>
             
             
        
        <View style={styles.inputname}>  
          <Text >性别：</Text>
          <RadioGroup
          onSelect = {(index, value) => this.onSelect(index, value)}
        >
          <RadioButton value={'男'} >
            <Text>男</Text>
          </RadioButton>
  
          <RadioButton value={'女'}>
            <Text>女</Text>
          </RadioButton>
  
        </RadioGroup>
        
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