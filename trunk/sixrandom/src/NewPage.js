
var Dimensions = require('Dimensions');
import React, {Component} from 'react';
import {StyleSheet,Keyboard,View,Button, TextInput, Text,ListView,Picker} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import { AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation'
import StorageModule from './StorageModule'
import ValueTypeModule from './ValueTypeModule'
import SixrandomModule from './SixrandomModule'
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var dataArray = [];
var randArray = []

class SixrandomNewPage extends React.Component {

  constructor(porp) {
    
        super(porp);
        this.state= {
           dataSource: ds.cloneWithRows(dataArray),
            selectedValue: 'emotion',
            Step: 7,
            Tip: ""
    }
  }

  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    //headerRight:(<Button title="返回" />),
    return{
    headerRight:(<Button title="六爻历史" onPress={  () => navigate('HistoryPage')  }/>),
    title: '六爻取卦',
    }
    
  };

  render()
  {
    const { navigate } = this.props.navigation;
    //alert(ValueTypeModule["emotion"])
    return (
            <View style={styles.container}>
              
                
              
            <Picker
             selectedValue={this.state.selectedValue}
                //选择内容时调用此方法
            //onValueChange={(value) => this.setState({selectedValue: value,Step:"0"}) }
            onValueChange={(value) => this.picker(value) }
              >
              <Picker.Item label= {ValueTypeModule["emotion"]} value="emotion" />
              <Picker.Item label={ValueTypeModule["bussiness"]} value="bussiness" />
              <Picker.Item label={ValueTypeModule["lucky"]} value="lucky" />
              <Picker.Item label={ValueTypeModule["sued"]} value="sued" />
               <Picker.Item label={ValueTypeModule["health"]} value="health" />
               <Picker.Item label={ValueTypeModule["finance"]} value="finance" />
               <Picker.Item label={ValueTypeModule["find"]} value="find" />

            </Picker>
            <Text style={styles.vb_text} onPress={() => this.random()}>点击出爻，重复六次成卦</Text>
            <ListView 
          dataSource={this.state.dataSource}
          enableEmptySections = {true}
          renderRow={(rowData) => <Text style={styles.containerlist}>{rowData}</Text>}
        />
        <TextInput
                
                style={styles.input}
                returnKeyType="done"
                placeholder="求卦笔记"
                underlineColorAndroid="transparent"
                //multiline={true}
                placeholderTextColor = "#cccccc"
                onSubmitEditing={Keyboard.dismiss} 
                onChangeText={(text) => this.setState({Tip:text})}/>
       
            </View> 
            )
    }
  random()
  {
    //alert(dataArray)
    if(this.state.Step>0)
    {    
      var t=t0=t1=t2=0
      t0= Math.random(1)>=0.5?1:0 
      t1= Math.random(1)>=0.5?1:0 
      t2= Math.random(1)>=0.5?1:0 
      t= t0+t1+t2+6
       //alert(t)
     
      var x = ""
      if(t==8)
      {
        x = SixrandomModule.getnegativedraw()
      }
      else if(t==6)
      {
        x = SixrandomModule.getnegativedraw()
      }
      else if(t==7)
      {
        x = SixrandomModule.getpositivedraw()
      }
      else if(t==9)
      {
        x = SixrandomModule.getpositivedraw()
      }
      randArray[(this.state.Step-1)] = t
      dataArray[(this.state.Step-1)] = x
      this.setState({Step: this.state.Step-1})
      this.setState({dataSource: ds.cloneWithRows(dataArray)})
    }
    if(this.state.Step==1)
    {
      randArray[0] = this.state.selectedValue;
      var index = (new Date()).valueOf().toString();
      randArray[7] = index;
      randArray[8] = this.state.Tip
      StorageModule.save({key:"last",data:randArray})
      StorageModule.save({key:"user",id:index,data:randArray})
      this.props.navigation.state.params = randArray
      //alert(this.props.navigation.state.params)
      var date = new Date(Number(randArray[7]))
      var lunar = ""
      for (i =1;i<7;i++)
      {
        lunar = lunar+(randArray[i]).toString()
      }
      var question = randArray[0]
      var parameter = "?date="+(new Date(Number(randArray[7])))+"&lunar="+lunar+"&question="+question
      this.props.navigation.navigate('SixrandomMainPage',parameter)
      //this.begin('SixrandomMainPage')
      this.picker("emotion")
     
    }
          
     
    //this.flatlist.extraData=[]
  }
  picker(value)
  {
    dataArray = []
    randArray = []
    this.setState({selectedValue: value})
    this.setState({Step: 7})
    this.setState({dataSource: ds.cloneWithRows(dataArray)})
   // this.flatlist.refresh()
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
    textDecorationLine:'underline'
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
    lineHeight: 70,     //行高  
      justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
   textAlign:'center',     
    fontStyle: 'italic',    //设置文字：normal：正常体；italic：斜体  
    fontWeight: 'bold', //设置粗体字，'normal' /*default*/, 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900'  
    textDecorationLine: 'none',//下划线和删除线的样式：['none' /*default*/, 'underline', 'line-through', 'underline line-through'  
  },
});
module.exports=SixrandomNewPage;  