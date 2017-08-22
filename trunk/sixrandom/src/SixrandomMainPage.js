
var Dimensions = require('Dimensions');
import React, {Component} from 'react';
import {StyleSheet,View, Text,Button,TouchableOpacity,RefreshControl,ListView} from 'react-native';
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
import ValueTypeModule from './ValueTypeModule'

const {width, height} = Dimensions.get('window');  
var WEBVIEW_REF = 'webview';
var DEFAULT_URL = "./sixrandomsimple.html"

var jump = false



class SixrandomMainPage extends React.Component {
  constructor(props) {

  super(props);
    var parameter = ""//"?date=Mon Jul 10 2017 23:43:54 GMT+0800 (CST)&lunar=123123";
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
      dataSource: dataSource,
      parameter:parameter,
		};
    };

  componentDidMount() {
    
		this.timer = setTimeout(
			() => {
        this.refreshlist()
        
			},
			200
    );
     
  }

  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    return{
    headerLeft:(<Button title="万年历" onPress={  () => navigate('MainPage')  }/>),
    headerRight:(<Button title="历史" onPress={  () => navigate('HistoryPage')  }/>),
    title: '六爻卦象',
    }
  };
  

  refreshlist()
  {
      const { navigate } = this.props.navigation;
      
      var parameter = this.props.navigation.state.params

      
      if(undefined!=parameter)
      {
         
         //return
          var _ret = SixrandomModule.build(parameter);
          var _build = SixrandomModule.get_simple_random_draw()

          this.setState({  
            dataSource: this.state.dataSource.cloneWithRows(_build),parameter:parameter }); 
      }
      else
      {
        StorageModule.load({
            key:"last",
        }).then(ret => {
       
              //return
            randArray = ret
            var date = new Date(Number(randArray[7]))
            var lunar = ""
            for (index =1;index<7;index++)
            {
              lunar = lunar+(randArray[index]).toString()
            }
            var question = randArray[0]

            var parameter = "?date="+date+"&lunar="+lunar+"&question="+question
            //alert(parameter);
            console.log(parameter)
            var _ret = SixrandomModule.build(parameter);
            var _build = SixrandomModule.get_simple_random_draw()

            this.setState({  
                  dataSource: this.state.dataSource.cloneWithRows(_build),parameter:parameter }); 
            }).catch(err => {
            //alert(err)
            if(false==jump)
            {
               this.begin('NewPage')
               jump = true
            }
        })
      }
  }

   _renderRow(rowData) {
    //alert(rowData.name)
    return (
      
      <View style={styles.list}>
        <Text  style={styles.rowhigth}>{rowData}</Text>
      </View>
    );
  }
  
  render(){
      const { navigate } = this.props.navigation;

      jump = false;
      
        return(
    <View style={styles.container}>

        

            <ListView
            enableEmptySections={true}
						dataSource={this.state.dataSource}
						renderRow={this._renderRow.bind(this)}
						initialListSize={1}
						pageSize={8}
						refreshControl={
							<RefreshControl
                refreshing={false}
								onRefresh={this.refreshlist.bind(this)}
								enabled={false}
								colors={['#ff0000', '#00ff00', '#0000ff', '#3ad564']}
							/>}/>
              

      
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
                        title="详细"  
                        //selected={this.state.tab=='history'}   
                        onPress={ 
                            () => navigate('FullInfoPage',this.state.parameter)
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
 rowhigth:{
    lineHeight:25,
  },
  list:{
    height:30,
    //borderWidth:1,
    marginLeft: 1,
    paddingLeft:1,
    //borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    //textAlign:'center', 
    //textDecorationLine:'underline'
    flexWrap:'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  textbutton:{
    textAlign:'center', 
  },
   button:{
    height: 50,
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
module.exports=SixrandomMainPage;  