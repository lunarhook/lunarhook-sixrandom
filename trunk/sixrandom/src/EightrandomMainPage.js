
var Dimensions = require('Dimensions');
import React, {Component} from 'react';
import {StyleSheet,View, Text,Button,TouchableOpacity,RefreshControl,ListView} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation'

import EightrandomHistoryPage from './SixrandomHistoryPage';
import StorageModule from './StorageModule'
import EightrandomNewPage from './SixrandomNewPage';
import EightrandomFullInfoPage from './SixrandomFullInfoPage';
import ShareModule from './ShareModule'
import SixrandomModule from './SixrandomModule'
import ValueTypeModule from './ValueTypeModule'

const {width, height} = Dimensions.get('window');  

var jump = false

/*
八字要展现的东西就比较多了
1、公立生日
2、生肖
3、星座
4、农历生日
5、命卦
6、姓名，性别
7、八字盘
8、地势
9、纳音
10、节气
11、大运
12、排大运
13、流年小运
14、四柱神煞
15、五行力量分析
16、日柱分析
17、八字婚姻
18、日柱分析
19、六亲
20、事业
21、健康
22、运势太岁关系
*/



class EightrandomMainPage extends React.Component {
  constructor(props) {

  super(props);

    var sex = ""
    var EightDate = ""
    var buildeight = new Array();
    //var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
      //dataSource: dataSource,
      sex:sex,
      EightDate:EightDate,
      buildeight:buildeight,
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
    //headerLeft:(<Button title="万年历" onPress={  () => navigate('MainPage')  }/>),
    //headerRight:(<Button title="历史" onPress={  () => navigate('HistoryPage')  }/>),
    title: '八字分析',
    }
  };

  parentday(other,self)
  {
    var map = new Array()
    var key = '甲乙丙丁戊己庚辛壬癸'
    var num = key.indexOf(other);
    console.log(num,self,other)
    map['甲'] =['比肩', '劫财', '食神', '伤官', '偏财', '正财', '七杀', '正官', '偏印', '正印']
    map['乙'] =['劫财', '比肩', '伤官', '食神', '正财', '偏财', '正官', '七杀', '正印', '偏印']
    map['丙'] =['偏印', '正印', '比肩', '劫财', '食神', '伤官', '偏财', '正财', '七杀', '正官']
    map['丁'] =['正印', '偏印', '劫财', '比肩', '伤官', '食神', '正财', '偏财', '正官', '七杀']
    map['戊'] =['七杀', '正官', '偏印', '正印', '比肩', '劫财', '食神', '伤官', '偏财', '正财']
    map['己'] =['正官', '七杀', '正印', '偏印', '劫财', '比肩', '伤官', '食神', '正财', '偏财']
    map['庚'] =['偏财', '正财', '七杀', '正官', '偏印', '正印', '比肩', '劫财', '食神', '伤官']
    map['辛'] =['正财', '偏财', '正官', '七杀', '正印', '偏印', '劫财', '比肩', '伤官', '食神']
    map['壬'] =['食神', '伤官', '偏财', '正财', '七杀', '正官', '偏印', '正印', '比肩', '劫财']
    map['癸'] =['伤官', '食神', '正财', '偏财', '正官', '七杀', '正印', '偏印', '劫财', '比肩']
    console.log(map[self][num])
    return map[self][num];
  
  }

  parentearth(other,self)
  {
    var map = new Array()
    var key = '甲乙丙丁戊己庚辛壬癸'
    var num = key.indexOf(self);
    console.log(num,self,other)
    map['子'] =['偏印', '正印', '七杀', '正官', '偏财', '正财', '食神', '伤官', '比肩', '比劫']
    map['丑'] =['正财', '偏财', '伤官', '食神', '比劫', '比肩', '正印', '偏印', '正官', '七杀']
    map['寅'] =['比肩', '劫财', '偏印', '正印', '七杀', '正官', '偏财', '正财', '食神', '伤官']
    map['卯'] =['劫财', '比肩', '正印', '偏印', '正官', '七杀', '正财', '偏财', '伤官', '食神']
    map['辰'] =['偏财', '正财', '食神', '伤官', '比肩', '劫财', '偏印', '正印', '七杀', '正官']
    map['巳'] =['伤官', '食神', '比劫', '比肩', '正印', '偏印', '正官', '七杀', '正财', '偏财']
    map['午'] =['食神', '伤官', '比肩', '比劫', '偏印', '正印', '七杀', '正官', '偏财', '正财']
    map['未'] =['正财', '偏财', '伤官', '食神', '比劫', '比肩', '正印', '偏印', '正官', '七杀']
    map['申'] =['七杀', '正官', '偏财', '正财', '食神', '伤官', '比肩', '劫财', '偏印', '正印']
    map['酉'] =['正官', '七杀', '正财', '偏财', '伤官', '食神', '比劫', '比肩', '正印', '偏印']
    map['戌'] =['偏财', '正财', '食神', '伤官', '比肩', '劫财', '偏印', '正印', '七杀', '正官']
    map['亥'] =['正印', '偏印', '正官', '七杀', '正财', '偏财', '伤官', '食神', '劫财', '比肩']
    console.log(map[other][num])
    return map[other][num];
  
  }
  

  refreshlist()
  {
      const { navigate } = this.props.navigation;
      
      var parameter = this.props.navigation.state.params

      
      if(undefined!=parameter)
      {
        var info = null;
        
        var ret;
        var args = {};
            var match = null;
            var search = decodeURIComponent(parameter.substring(1));
            var reg = /(?:([^&]+)=([^&]+))/g;
            while((match = reg.exec(search))!==null){
                args[match[1]] = match[2];
            }
        info = args
        console.log(info.EightDate);
        console.log(info.sex);
        this.setState({  
        //  dataSource: this.state.dataSource.cloneWithRows(info.EightDate),
            sex:info.sex,EightDate:info.EightDate }); 
            this.buildeight();
      }
      else
      {
        StorageModule.load({
            key:"lastname",
        }).then(ret => {
       
              //return

              this.setState({  
                //dataSource: this.state.dataSource.cloneWithRows(ret.EightDate),
                sex:ret.sex,EightDate:ret.EightDate }); 
            }).catch(err => {
            //alert(err)
            if(false==jump)
            {
               this.begin('EightrandomNewPage')
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
  buildeight()
  {
    var buildeight = new Array()
    buildeight[0] = this.parentday(this.state.EightDate[0],this.state.EightDate[4])
    buildeight[2] = this.parentday(this.state.EightDate[2],this.state.EightDate[4])
    buildeight[4] = "日元"//this.parentday(this.state.EightDate[4],this.state.EightDate[4])
    buildeight[6] = this.parentday(this.state.EightDate[6],this.state.EightDate[4])
    buildeight[1] = this.parentearth(this.state.EightDate[1],this.state.EightDate[4])
    buildeight[3] = this.parentearth(this.state.EightDate[3],this.state.EightDate[4])
    buildeight[5] = this.parentearth(this.state.EightDate[5],this.state.EightDate[4])
    buildeight[7] = this.parentearth(this.state.EightDate[7],this.state.EightDate[4])
    this.setState({  
      buildeight:buildeight }); 
  }
  
  render(){
      const { navigate } = this.props.navigation;
      
      jump = false;
      
        return(
    <View style={styles.container}>

        

           <View style={styles.bottonstylewithfont}> 

           <View style={styles.Eightstyleline}> 
              <Text style={styles.Eightstylewithfont}>{this.state.sex}</Text>
              </View>
              </View>
              <View style={styles.Eightstyleline}> 
              <Text style={styles.Eightstylewithfont}>年</Text>
              <Text style={styles.Eightstylewithfont}>月</Text>
              <Text style={styles.Eightstylewithfont}>日</Text>
              <Text style={styles.Eightstylewithfont}>时</Text>
              </View>
              <View style={styles.Eightstyleline}> 
              <Text style={styles.Eightstylewithfont}>{this.state.buildeight[0]}</Text>
              <Text style={styles.Eightstylewithfont}>{this.state.buildeight[2]}</Text>
              <Text style={styles.Eightstylewithfont}>{this.state.buildeight[4]}</Text>
              <Text style={styles.Eightstylewithfont}>{this.state.buildeight[6]}</Text>
              </View>
              <View style={styles.Eightstyleline}> 
              <Text style={styles.Eightstylewithfont}>{this.state.EightDate[0]}</Text>
              <Text style={styles.Eightstylewithfont}>{this.state.EightDate[2]}</Text>
              <Text style={styles.Eightstylewithfont}>{this.state.EightDate[4]}</Text>
              <Text style={styles.Eightstylewithfont}>{this.state.EightDate[6]}</Text>
              </View>
              <View style={styles.Eightstyleline}> 
              <Text style={styles.Eightstylewithfont}>{this.state.EightDate[1]}</Text>
              <Text style={styles.Eightstylewithfont}>{this.state.EightDate[3]}</Text>
              <Text style={styles.Eightstylewithfont}>{this.state.EightDate[5]}</Text>
              <Text style={styles.Eightstylewithfont}>{this.state.EightDate[7]}</Text>
              </View>
              <View style={styles.Eightstyleline}> 
              <Text style={styles.Eightstylewithfont}>{this.state.buildeight[1]}</Text>
              <Text style={styles.Eightstylewithfont}>{this.state.buildeight[3]}</Text>
              <Text style={styles.Eightstylewithfont}>{this.state.buildeight[5]}</Text>
              <Text style={styles.Eightstylewithfont}>{this.state.buildeight[7]}</Text>
              </View>

      
      
                 
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
  },
  Eightstylewithfont:{
    justifyContent: 'space-between', //虽然样式中设置了 justifyContent: 'center'，但无效  
    alignItems:'center',
    fontSize:18
  },
  Eightstyleline: {
    //justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    alignItems:'center',
    justifyContent: 'space-around', //虽然样式中设置了 justifyContent: 'center'，但无效  
    //justifyContent:'space-between',
    flexDirection: 'row',
    marginLeft: 30, 
    marginRight: 30, 
    marginTop: 30,
  },
});
module.exports=EightrandomMainPage;  