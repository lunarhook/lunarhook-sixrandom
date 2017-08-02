
var Dimensions = require('Dimensions');
import React, {Component} from 'react';
import {StyleSheet,View, TextInput, Text,ListView,Picker} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import { AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation'
import StorageModule from './StorageModule'
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var dataArray = [];
var randArray = []

class HistoryPage extends React.Component {

  constructor(porp) {
    
        super(porp);
        this.state= {
           dataSource: ds.cloneWithRows(dataArray),
            selectedValue: 'emotion',
            Step: 7,
            Tip: ""
    }
  }

  flatlist:FlatList
  static navigationOptions = {
    //headerRight:(<Button title="返回" />),
    title: '取卦',
    
  };

  render()
  {
    const { navigate } = this.props.navigation;
    return (
            <View style={styles.container}>
              <TextInput
                
                style={styles.input}
                returnKeyType="done"
                placeholder="求卦笔记"
                underlineColorAndroid="transparent"
                multiline={true}
                placeholderTextColor = "#cccccc"
                onChangeText={(text) => this.setState({Tip:text})}/>
                
              
            <Picker
             selectedValue={this.state.selectedValue}
                //选择内容时调用此方法
            //onValueChange={(value) => this.setState({selectedValue: value,Step:"0"}) }
            onValueChange={(value) => this.picker(value) }
              >
              <Picker.Item label="感情" value="emotion" />
              <Picker.Item label="事业" value="bussiness" />
              <Picker.Item label="运气" value="lucky" />
              <Picker.Item label="官司" value="sued" />
               <Picker.Item label="健康" value="health" />
               <Picker.Item label="求财" value="finance" />
            </Picker>
            <Text style={styles.vb_text} onPress={() => this.random()}>点击或者晃动出爻，重复六次成卦</Text>
            <ListView 
          dataSource={this.state.dataSource}
          enableEmptySections = {true}
          renderRow={(rowData) => <Text style={styles.containerlist}>{rowData}</Text>}
        />
        <TabNavigator 
       tabBarStyle={{ height: 40 }}
       sceneStyle={{ paddingBottom: 30 }}>  
                  <TabNavigator.Item
                        title="解卦"  
                        //   
                        //selected={this.state.tab=='liuyao'}  
                        //onPress={() => this.begin('NewPage')
                        onPress={() => this.begin('MainPage') 
                        }  
                        titleStyle={styles.menufont}>  
                    </TabNavigator.Item>  
                    <TabNavigator.Item 
                        title="历史"  
                        //selected={this.state.tab=='history'}   
                        onPress={ 
                            () => navigate('HistoryPage') 
                          }titleStyle={styles.menufont}>  
                        
                    </TabNavigator.Item>  
                </TabNavigator>  
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
      t= t0+t1+t2
       //alert(t)
     
      var x = ""
      if(t==0)
      {
        x = "--- ---"
      }
      else if(t==1)
      {
        x = "--- ---"
      }
      else if(t==2)
      {
        x = "-------"
      }
      else if(t==3)
      {
        x = "-------"
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
      
      //this.props.navigation.navigate('MainPage',randArray)
      this.picker("emotion")
      StorageModule.load({
            key:"last",
    }).then(ret => {
      //alert(index)
      //alert(ret)
       this.begin("MainPage")
      })
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
    marginLeft: 10,
    paddingLeft:10,
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
module.exports=HistoryPage;  