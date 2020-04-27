

import React, {Component} from 'react';
import {StyleSheet,View, Text,Button,TouchableOpacity,FlatList,ScrollView,Dimensions} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import TabNavigator from 'react-native-tab-navigator';  
import Storage from 'react-native-storage';

import { captureRef } from "react-native-view-shot";
import StorageModule from '../../../config/StorageModule'
import SixCourseModule from './SixCourseModule'
import ScreenConfig from '../../../config/ScreenConfig';
import StyleConfig from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'
import IconConfig from '../../../config/IconConfig'
const {width, height} = Dimensions.get('window');  

var jump = false
let curyear = 0

class SixCourseMainPage extends React.Component {
  constructor(props) {

  super(props);

		this.state = {
      sanchuanarray1:"",
      sanchuanarray2:"",
      sanchuanarray3:"",
      sanchuanarray4:"",
      Gstr:[],
      historySection:[0],
      activeSections: [0,1,2,3],
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
    title: '六壬启课',
    }
  };

 
  

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
        var Gstr = SixCourseModule.qiKe(info.mydate);
        console.log(info.mydate,Gstr)
        this.build(Gstr);
        
        this.setState({  
                Gstr:Gstr,
              }); 
      }
      else
      {
        StorageModule.load({
            key:"lastSixCourse",
        }).then(ret => {
              this.setState({  
                Date:ret.SixCourseDate,
                switchpersondata:ret.switchpersondata,
                switchtimedata:ret.switchtimedata,
                selvalue:ret.selvalue,
                tip:ret.tip,
                mydate:ret.mydate
               }); 
            }).catch(err => {
            if(false==jump)
            {
               this.begin('SixCourseNewPage')
               jump = true
            }
        })
      }
    }
  
  
  build(Gstr)
  {
     var sanchuanarray1 = new Array();

     for(var i=0;i<2;i++)
     {
      sanchuanarray1.push({text:[Gstr.siZhu[i+0],""]})
      sanchuanarray1.push({text:[Gstr.siZhu[i+2],""]})
      sanchuanarray1.push({text:[Gstr.siZhu[i+4],""]})
      sanchuanarray1.push({text:[Gstr.siZhu[i+6],""]})
     }

     var sanchuanarray2 = new Array();
     for(var i=0;i<3;i++)
     {
      sanchuanarray2.push({text:[Gstr.liuQin[i],""]})
      sanchuanarray2.push({text:[Gstr.sanChuanDunGan[i],""]})
      sanchuanarray2.push({text:[Gstr.sanChuan[i],""]})
      sanchuanarray2.push({text:[Gstr.sanChuanTianJiang[i],""]})
     }
     var sanchuanarray4 = new Array();
     for(var i=0;i<4;i++)
     {
      sanchuanarray4.push({text:[Gstr.siKeTianJiang[3-i],""]})
     }
      for(var i=0;i<4;i++)
     {
      sanchuanarray4.push({text:[Gstr.siKe[7-2*i],""]})
    }
    for(var i=0;i<4;i++){
      sanchuanarray4.push({text:[Gstr.siKe[6-2*i],""]})
     }

     var sanchuanarray3 = new Array();
     for(var i=0;i<4;i++){
      sanchuanarray3.push({text:[Gstr.tianPan[5+i],Gstr.tianJiang[5+i]]})
     }
  
     sanchuanarray3.push({text:[Gstr.tianPan[4],Gstr.tianJiang[4]]})
     sanchuanarray3.push({text:["",""]})
     sanchuanarray3.push({text:["",""]})
     sanchuanarray3.push({text:[Gstr.tianPan[9],Gstr.tianJiang[9]]})

     sanchuanarray3.push({text:[Gstr.tianPan[3],Gstr.tianJiang[3]]})
     sanchuanarray3.push({text:["",""]})
     sanchuanarray3.push({text:["",""]})
     sanchuanarray3.push({text:[Gstr.tianPan[10],Gstr.tianJiang[10]]})

      for(var i=0;i<3;i++){
        sanchuanarray3.push({text:[Gstr.tianPan[2-i],Gstr.tianJiang[2-i]]})
       }
       sanchuanarray3.push({text:[Gstr.tianPan[11],Gstr.tianJiang[11]]})

     
     this.setState({sanchuanarray1:sanchuanarray1,sanchuanarray2:sanchuanarray2,sanchuanarray3:sanchuanarray3,sanchuanarray4:sanchuanarray4})
  }
  //keyExtractor = (item,index) => item.key
  keyExtractor=(item, index) => index.toString()

  renderItem(item) {
    return (

        <Text key={item.item} style={styles.flatTextfone}>{item.item}</Text>

    );
  }

  renderminyearItem(item) {
    return (

        <Text numberoflines={4} key={item.item} style={[styles.flatTextfone,{width:50,fontSize:14}]}>{item.item}</Text>

    );
  }
  getColor(king) {
    if ("甲" == king || "乙" == king || "寅" == king || "卯" == king) {
      return (<Text style={[styles.Eightstylewithfont, { color: IconConfig.colorgreen }]}>{king}</Text>)
    }
    if ("丙" == king || "丁" == king || "午" == king || "巳" == king) {
      return (<Text style={[styles.Eightstylewithfont, { color: IconConfig.colorfire }]}>{king}</Text>)
    }
    if ("戊" == king || "己" == king || "丑" == king || "未" == king || "辰" == king || "戌" == king) {
      return (<Text style={[styles.Eightstylewithfont, { color: 'brown' }]}>{king}</Text>)
    }
    if ("庚" == king || "辛" == king || "申" == king || "酉" == king) {
      return (<Text style={[styles.Eightstylewithfont, { color: IconConfig.colorgold }]}>{king}</Text>)
    }
    if ("癸" == king || "壬" == king || "子" == king || "亥" == king) {
      return (<Text style={[styles.Eightstylewithfont, { color: IconConfig.colorblue }]}>{king}</Text>)
    }
    if (undefined != king && king.toString().length > 1) {
      return king
    }

    return (<Text style={[styles.Eightstylewithfont]}>{king}</Text>)
  }

  
  
  render(){
      const { navigate } = this.props.navigation;
      
      
      
      
        return(
        <View style={styles.container} >
          <ScrollView ref="location" style={{backgroundColor:'#ffffff'}}>
          <View style={styles.container} >
          <WingBlank size="lg">
          <Text></Text>
          <WhiteSpace size="xl" />
          <Text>{this.state.Gstr.gongli}</Text>
          <WhiteSpace size="xl" />
          <Text>{this.state.Gstr.nongli}</Text>
          <WhiteSpace size="xl" />
          <Text>{this.state.Gstr.jieqi}</Text>
          <WhiteSpace size="xl" />
          <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
          <Accordion.Panel header={"四柱"}>
          <Grid
          data={this.state.sanchuanarray1}
          columnNum={4}
          hasLine={true}
          itemStyle={{height:25}}
          renderItem={dataItem => (
              <View style={styles.container}>
              <View style={styles.grid}>
              {this.getColor(dataItem.text[0])}
              
              </View>
              </View>
              

          )}
        />
        </Accordion.Panel>
        <Accordion.Panel header={"三传"}>
        <Grid
          data={this.state.sanchuanarray2}
          columnNum={4}
          hasLine={true}
          itemStyle={{height:25}}
          renderItem={dataItem => (
              <View style={styles.container}>
              <View style={styles.grid}>
              {this.getColor(dataItem.text[0])}
              
              </View>
              </View>
              

          )}/>
                  </Accordion.Panel>
                  <Accordion.Panel header={"四课"}>
        <Grid
          data={this.state.sanchuanarray4}
          columnNum={4}
          hasLine={true}
          itemStyle={{height:25}}
          renderItem={dataItem => (
              <View style={styles.container}>
              <View style={styles.grid}>
              {this.getColor(dataItem.text[0])}
              
              </View>
              </View>
              

          )}/>
                  </Accordion.Panel>
        <Accordion.Panel header={"六壬"}>
          <Grid
          data={this.state.sanchuanarray3}
          columnNum={4}
          hasLine={true}
          itemStyle={{height:50}}
          renderItem={dataItem => (
              <View style={styles.container}>
              <View style={styles.grid}>
              {this.getColor(dataItem.text[0])}
              
              </View>
              <View style={styles.gridfix}>
              {this.getColor(dataItem.text[1])}
              </View>
              </View>
              

          )}/>
          </Accordion.Panel >
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
              
              {WechatShare.shareRetBar(WechatShare,this,"六壬详情")}
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
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    textAlignVertical:"center",
    //alignItems: 'center',
  },
  gridfix:
  {
    flex:1,
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
  EightstyleLinewithfont:{
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
    fontSize:18
  },
  Eightstylewithfont:{
    justifyContent: 'space-around', //虽然样式中设置了 justifyContent: 'center'，但无效  
    fontSize:18
  },
  Eightstylewithfontmultline:{
    width:40,
    justifyContent: 'space-around', //虽然样式中设置了 justifyContent: 'center'，但无效  
    fontSize:18
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
module.exports=SixCourseMainPage;  