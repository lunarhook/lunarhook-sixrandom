

import React, {Component} from 'react';
import {StyleSheet,View, Text,Button,Dimensions,FlatList,ScrollView} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import TabNavigator from 'react-native-tab-navigator';  
import Storage from 'react-native-storage';


import { captureRef } from "react-native-view-shot";
import StorageModule from '../../../config/StorageModule'
import taiyiModule from './taiyiModule'
import ScreenConfig from '../../../config/ScreenConfig';
import StyleConfig from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'

const {width, height} = Dimensions.get('window');  

var jump = false

class taiyiMainPage extends React.Component {
  constructor(props) {

  super(props);

		this.state = {
      taiyiDate:"",
      tip:"",
      taiyiarray:"",
      title:"",
      activeSections: [0],
    };
    this.onChange = (activeSections: number[]) => {
        
      var re = this.state.activeSections
      
      if(activeSections.length>1)
      {
        this.setState({activeSections:activeSections})
      }
      else
      {
        re.push(activeSections[0])
        this.setState({activeSections:re})
      }
      
      
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

  componentWillUnmount() {
		// 如果存在this.timer，则使用clearTimeout清空。
		// 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
		this.timer && clearInterval(this.timer);
	}

  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    return{
      
    //headerLeft:(<Button title="万年历" onPress={  () => navigate('MainPage')  }/>),
    //headerRight:(<Button title="历史" onPress={  () => navigate('HistoryPage')  }/>),
    title: '太乙神数',
    }
  };

 
  

  refreshlist()
  {
      const { navigate } = this.props.navigation;
      
      var parameter = this.props.navigation.state.params

      console.log("refreshlist",parameter)
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
        
        var ret = taiyiModule.main_FourCalc(info.Y,info.M,info.D,info.H);
        console.log("taiyi:",ret,info);
        this.build(ret);
        this.setState({  
                taiyiDate:info.taiyiDate,
                tip:info.tip,
              }); 
      }
      else
      {
        StorageModule.load({
            key:"lasttaiyi",
        }).then(ret => {
              var rt = taiyiModule.main_FourCalc(ret.taiyiDate[3],ret.taiyiDate[4],ret.taiyiDate[5],ret.taiyiDate[6]);
              this.setState({  
                taiyiDate:rt.taiyiDate,
                tip:rt.tip,
               }); 
            }).catch(err => {
            if(false==jump)
            {
               this.begin('taiyiNewPage')
               jump = true
            }
        })
      }
    }
  
  
  build(ret)
  {
     var title = new Array();
     
     for(var i=0;i<6;i++)
     {
      title.push(ret[i])
     }
     var taiyiarray = new Array()
     // 阵列对应—0子1丑2艮3寅4卯5辰6巽7巳8午9未10坤11申12酉13戌14干15亥16中
     // 第一行阵
     taiyiarray.push({text:[ret[6][6][0] , "(巽)"]})
     taiyiarray.push({text:[ret[6][7][0] , "(巳)"]})
     taiyiarray.push({text:[ret[6][8][0] , "(午)"]})
     taiyiarray.push({text:[ret[6][9][0] , "(未)"]})
     taiyiarray.push({text:[ret[6][10][0] , "(坤)"]})
     // 第二行阵
     taiyiarray.push({text:[ret[6][5][0] , "(辰)"]})
     taiyiarray.push({text: ["","(九)"]})
     taiyiarray.push({text:["", "(二)"]})
     taiyiarray.push({text:[ "","(七)"]})
     taiyiarray.push({text:[ret[6][11][0] , "(申)"]})
    // 第三行阵
    taiyiarray.push({text:[ret[6][4][0] , "(卯)"]})
    taiyiarray.push({text:["","(四)"]})
    taiyiarray.push({text:["","(五)"]})
    taiyiarray.push({text:["","(六)"]})
    taiyiarray.push({text:[ret[6][12][0] , "(酉)"]})
    // 第四行阵
    taiyiarray.push({text:[ret[6][3][0] , "(寅)"]})
    taiyiarray.push({text:["","(三)"]})
    taiyiarray.push({text:["","(八)"]})
    taiyiarray.push({text:["","(一)"]})
    taiyiarray.push({text:[ret[6][13][0] , "(戌)"]})
    // 第五行阵
    taiyiarray.push({text:[ret[6][2][0] ,"(艮)"]})
    taiyiarray.push({text:[ret[6][1][0] , "(丑)"]})
    taiyiarray.push({text:[ret[6][0][0], "(子)"]})
    taiyiarray.push({text:[ret[6][15][0], "(亥)"]})
    taiyiarray.push({text:[ret[6][14][0], "(干)"]})
    
    this.setState({taiyiarray:taiyiarray,title:title})
  }
  
  
  keyExtractor=(item, index) => index.toString()

  renderItem(item) {
    return (
  
        <Text>{item.item}</Text>
  
    );
  }
  render(){
      const { navigate } = this.props.navigation;
      
      
      
      
        return(
        <View style={styles.container} >
          <ScrollView ref="location" style={{backgroundColor:'#ffffff'}}>
          <View style={styles.container} >
          <WingBlank size="lg">
          <WhiteSpace size="xl" />
          <FlatList  
              data={this.state.title}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              />
        <WhiteSpace size="xl" />
          <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
          <Accordion.Panel header={"太乙神数"}>
          <Grid
          data={this.state.taiyiarray}
          columnNum={5}
          hasLine={true}
          //itemStyle={styles.grid}
          renderItem={dataItem => (
            <View style={styles.grid}>
              <Text>{dataItem.text[0]}</Text>
              <View style={styles.gridfix}>
              <Text >{dataItem.text[1]}</Text>
              </View>
              </View>
          )}
        
        /></Accordion.Panel >
        </Accordion>
        <WhiteSpace size="xl" />
            {
             (WechatShare.shareimg(this.state.shareimg))
            }
            
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
        </WingBlank>
        </View>
              </ScrollView>  
              
              {WechatShare.shareRetBar(WechatShare,this,"太乙详情")}
                          </View>
                         
    )
    }
   

   
  };


    




var styles = StyleSheet.create ({
  container: {
    flex:1,
    backgroundColor:'#ffffff'
  },

 rowhigth:{
    lineHeight:25,
  },
  grid:{
    flex: 1,
    fontSize:12,
    justifyContent: 'space-between',
    //alignItems: 'center',
  },
  gridfix:
  {
    justifyContent: 'flex-end',
    alignItems:'flex-end',
    textAlignVertical:"bottom",
  },
  list:{
    height:30,
    marginLeft: 1,
    paddingLeft:1,
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    flexWrap:'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  textbutton:{
    flex:1,
    justifyContent:'center', 
    flexWrap:'wrap',
    alignItems:'stretch',
    flexDirection: 'row',
  },
   button:{
    height: 50,
    backgroundColor:'transparent',
   justifyContent:'center',
   borderRadius: 4,
    },
  tabBarStyle:{
    flex: 1,
    height:40,
    flex:1
  },
  EightstyleSectionline: {
    justifyContent: 'space-around', //虽然样式中设置了 justifyContent: 'center'，但无效  
    flexDirection: 'row',
    marginLeft: 5, 
    marginRight: 5, 
    marginTop: 30,
  },
  EightstyleCoreline: {
    justifyContent: 'space-around', //虽然样式中设置了 justifyContent: 'center'，但无效  
    flexDirection: 'row',
    marginLeft: 5, 
    marginRight: 5, 
  },
  Eightstylebetweenline: {
    justifyContent:'space-between',
    flexDirection: 'row',
    //flexwrap:'nowrap',
    paddingLeft:5
  },
  flatText: {
    justifyContent: 'space-around', //虽然样式中设置了 justifyContent: 'center'，但无效  
    flexDirection: 'row',
    alignItems:'stretch',
    marginLeft: 5, 
    marginRight: 5, 
  },
  flatTextfone:{
    justifyContent: 'space-around', //虽然样式中设置了 justifyContent: 'center'，但无效  
    flexDirection: 'row',
    alignItems:'stretch',
    //paddingLeft:5
  },
});
module.exports=taiyiMainPage;  