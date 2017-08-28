
var Dimensions = require('Dimensions');
import React, {Component} from 'react';
import {StyleSheet,View, Text,ScrollView,Button,TouchableOpacity,RefreshControl,ListView} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
import { StackNavigator,NavigationActions } from 'react-navigation';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import HistoryPage from './HistoryPage';
import StorageModule from './StorageModule'
import SixrandomNewPage from './SixrandomNewPage';
import EightrandomNewPage from './EightrandomNewPage';
import FullInfoPage from './FullInfoPage';
import ShareModule from './ShareModule'
import SixrandomModule from './SixrandomModule'
import ValueTypeModule from './ValueTypeModule'

const {width, height} = Dimensions.get('window');  
var WEBVIEW_REF = 'webview';
var DEFAULT_URL = "./sixrandomsimple.html"

var jump = false


class MainPage extends React.Component {
  constructor(props) {

  super(props);
    var parameter = ""//"?date=Mon Jul 10 2017 23:43:54 GMT+0800 (CST)&lunar=123123";
    //var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
      
     // selectedStartDate: null,
      //dataSource: dataSource,
      parameter:parameter,
    };
    this.onDayPress = this.onDayPress.bind(this);

    //this.onDateChange = this.onDateChange.bind(this);
    };

    
    
   

  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    return{
      headerLeft:null,
    headerRight:(<Button title="我的" onPress={   () => navigate('MyPage')  }/>),
    title: '万年历',
    }
  };

  fetchWanNianLiInfo() {
    return dispatch => {
        NetUtils.get(URL_WAN_NIAN_LI+'?key='+APP_KEY_WAN_NIAN_LI+'&date='+CommonUtils.dateFormat(new Date(), 'yyyy-M-d'))
        .then(function (result) {
            if (result.error_code == 0) {
                dispatch({
                    type: types.ACTION_WNL_FETCHED,
                    wnlData: result.result.data,
                });
            }
            
        }, function () {})
    };
}
 
  
  
  render(){
      const { navigate } = this.props.navigation;

      jump = false;
      const { selectedStartDate } = this.state;
      const startDate = selectedStartDate ? selectedStartDate.toString() : '';
      var wanNianLiInfo = SixrandomModule.lunarsix()
      console.log(wanNianLiInfo.info.oDate)
      console.log(wanNianLiInfo.info.cnDay)
      console.log(wanNianLiInfo.six_random_date[0])
      
        return(
    <View style={styles.container}>
      <View style={[styles.container,{height:330}]}>
  <Calendar 
  onDayPress={this.onDayPress}
  style={styles.calendar}
  //hideExtraDays
  markedDates={{[this.state.selected]: {selected: true}}}
/>
</View>

      <View style={[styles.wanNianLiContainer,{    marginTop: 150,}]}>
    <View style={styles.dateContainer}>
      <Text style={styles.list}>
        {wanNianLiInfo.info.Year}年{wanNianLiInfo.info.Month}月{wanNianLiInfo.info.Date}日 星期{wanNianLiInfo.info.cnDay}
      </Text>
      <Text style={styles.list}>
        {wanNianLiInfo.info.gzYear}年{wanNianLiInfo.info.lMonth}月{wanNianLiInfo.info.lDate} ({wanNianLiInfo.info.animal})
      </Text>

    </View>
    <Text style={styles.list}>{wanNianLiInfo.six_random_date[2]}</Text>
    <Text style={styles.list}>{wanNianLiInfo.six_random_date[3]}</Text>
    <Text style={styles.list}>{wanNianLiInfo.six_random_date[4]}</Text>

  </View>

       


  
      <TabNavigator 
      tabBarStyle={{ height: 40 }}
      //sceneStyle={{ paddingBottom: 30 }}
       >  
                  <TabNavigator.Item
                        title="六爻"  
                        
       
                        //selected={this.state.tab=='liuyao'}  
                        //onPress={() => this.begin('NewPage')
                        onPress={() => navigate('SixrandomNewPage') 
                        }  
                        titleStyle={styles.menufont}>  
                    </TabNavigator.Item>  
                    <TabNavigator.Item 
                        title="八字"  
                        //selected={this.state.tab=='history'}   
                        onPress={ 
                            () => navigate('EightrandomNewPage')
                          }titleStyle={styles.menufont}>  
                        
                    </TabNavigator.Item>  
                    <TabNavigator.Item 
                        title="探索"  
                        //selected={this.state.tab=='history'}   
                        onPress={ 
                            () => navigate('SixrandomMainPage')
                          }titleStyle={styles.menufont}>  
                        
                    </TabNavigator.Item>  
                    <TabNavigator.Item 
                        title="成长"  
                        //selected={this.state.tab=='history'}   
                        onPress={ 
                            () => navigate('StudentPage')
                          }titleStyle={styles.menufont}>  
                        
                    </TabNavigator.Item>  
                </TabNavigator>  
                 
              </View>  
    )
    }
    onDayPress(day) {
      this.setState({
        selected: day.dateString
      });
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
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent:'space-between',
    alignItems: 'stretch',
    flex:1,
  },
  calendar: {
    
    flex:1,
    //borderTopWidth: 1,
    backgroundColor: 'white',
    //paddingTop: 50,
    borderBottomWidth: 1,
    borderColor: 'white',
    //height: 650,
    //flex:1
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
    //flexWrap:'wrap',
    //alignItems: 'flex-start',
    //flexDirection: 'row',
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
    
  },
  wanNianLiContainer: {
    //backgroundColor: 'white',
    //borderColor: '#dddddd',
    borderStyle: null,
    borderWidth: 0,
    borderRadius: 2,
    marginLeft: 10,
    marginRight: 10,
    //height:300,

   // margin: 0,
    //padding: 10,
    //flex:1
  },
  dateContainer: {
    //justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    justifyContent:'space-between',
    flexDirection: 'row',
   
    //marginBottom: 5,
    //flex:1
  },
  dateText: {
    fontSize: 15,
  },
});
module.exports=MainPage;  