
var Dimensions = require('Dimensions');
import React, {Component} from 'react';
import {StyleSheet,View, Text,Button,TouchableOpacity,RefreshControl,ScrollView} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation'

import HistoryPage from './HistoryPage';
import StorageModule from './StorageModule'
import NewPage from './NewPage';
import FullInfoPage from './FullInfoPage';
import ShareModule from './ShareModule'
import SixrandomModule from './SixrandomModule'

const {width, height} = Dimensions.get('window');  
var WEBVIEW_REF = 'webview';
var DEFAULT_URL = "./sixrandomsimple.html"
var randArray = []
var parameter = ""//"?date=Mon Jul 10 2017 23:43:54 GMT+0800 (CST)&lunar=123123";
var jump = false

class MainPage extends React.Component {
  constructor(props) {

  super(props);
  
		this.state = {
			isLoading: false,
		};
  this.init()
  }

  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    return{
    headerRight:(<Button title="详细" onPress={ () => navigate("FullInfoPage",parameter) }/>),
    title: '卦象',
    }
  };
  
  build()
  {}

  init()
  {
        const { navigate } = this.props.navigation;
    //StorageModule.remove({key:"last"})
    StorageModule.load({
            key:"last",
    }).then(ret => {
       //alert(ret)
       //return
      randArray = ret
      var date = new Date(Number(randArray[7]))
      var lunar = ""
      for (index =1;index<7;index++)
      {
        lunar = lunar+(randArray[index]).toString()
      }
      var question = randArray[0]

      parameter = "?date="+date+"&lunar="+lunar

      var _ret = SixrandomModule.build(parameter);
      console.log(_ret);
      }).catch(err => {
        //alert(err)
          if(false==jump)
            {
              this.begin('NewPage')
               jump = true
            }
      })
     
  }
  
  render(){
      const { navigate } = this.props.navigation;
      jump = false;
      
        return(
    <View style={styles.container}>

        <TouchableOpacity style={styles.button} onPress={ () => navigate('FullInfoPage',parameter) }>
        <Text style={styles.textbutton}
        >
          {""==parameter?"":"详细"}   
        </Text>
        </TouchableOpacity>
        <ScrollView  
        style={styles.container}  
        refreshControl={  
          <RefreshControl  
           refreshing={this.state.isLoading}  
            onRefresh={this._onRefresh}  
          />  
        }>  
      </ScrollView>  
      <TabNavigator 
       tabBarStyle={{ height: 40 }}
       sceneStyle={{ paddingBottom: 30 }}>  
                  <TabNavigator.Item
                        title="取卦"  
                        //   
                        //selected={this.state.tab=='liuyao'}  
                        //onPress={() => this.begin('NewPage')
                        onPress={() => navigate('NewPage') 
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

   
  };


    




var styles = StyleSheet.create ({
  container: {
    flex:1,
  },
  menufont:{
    fontSize:15,
    color: '#333333', 
    height:25
  },
  textbutton:{
    textAlign:'center', 
  },
   button:{
    height: 30,
    //width: 50,
    backgroundColor:'transparent',
   justifyContent:'center',
   borderRadius: 4,
    },
  tabBarStyle:{
    flex: 1,
    height:40,
    flex:1
  }
});
module.exports=MainPage;  