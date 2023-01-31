
import React, {Component} from 'react';
import {StyleSheet,View, Text,ScrollView,RefreshControl,FlatList,Dimensions} from 'react-native';
import { Grid ,WingBlank,WhiteSpace} from '@ant-design/react-native';
import { Button, Drawer, List } from '@ant-design/react-native';
import IconConfig from '../config/IconConfig';
import {StyleConfig,FontStyleConfig} from '../config/StyleConfig';
import RouteConfig from '../config/RouteConfig'
import QIndexPage from './QDateBase/QIndexPage'

let LunarCourseAnswerPagethis = null
class LunarCourseAnswerPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        date:QIndexPage.GetAllQIndex(),
        datahistory:[],
        activeSections: [0, 1,2,3,4,5],
        keyindex: 0
      };
      LunarCourseAnswerPagethis = this
    };
  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;

    return{
      title: RouteConfig["LunarCourseAnswerPage"].titlename,
    }
  };


  
  render(){
      const { navigate } = this.props.navigation;
      return(

          <View style={StyleConfig.container}>

        
            <FlatList 
            useFlatList={true}
            //1数据的获取和渲染
            data={this.state.date}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(data,index) => 
              {
                var mark = new Array()
                if (undefined!=data.item.rang)
                {
                  for(i=0;i<Number(data.item.rang);i++)
                  {
                    var T = IconConfig.IconStar
                    mark.push( T)
                  } 
                }  
                let itemArr = mark.map(function(_, i,arr) { 
                  return i;
                })
                .map((_i, index) => {
                  return <Text key={index}>{IconConfig.IconStar}</Text>
                })
                var contentinfo = (
                  <WingBlank key={data.index} style={{fontSize:FontStyleConfig.getFontApplySize()+25,paddingRight:40,color:IconConfig.colorfire,alignSelf:"flex-end"}}><Button type="ghost" size="small" onPress={
                    ()=>navigate(RouteConfig["CourseSearchPage"].route, { "text":data.item.key})}
                    >说文:{data.item.key}</Button>
                  </WingBlank>
                )
                if(""==data.item.key || undefined==data.item.key)
                {contentinfo=(<Text></Text>)}
                return (<View key={index}>
                          <Text style={{fontSize:FontStyleConfig.getFontApplySize()+15,paddingLeft:15,paddingRight:15}}>{data.item.Q}{itemArr}</Text>
                          <Text style={{fontSize:FontStyleConfig.getFontApplySize()+15,paddingLeft:15,paddingRight:15}}>{data.item.A}</Text>
                          
                            {contentinfo}
                          
                          <WhiteSpace size="xl" />
                        </View>)
            }}>
            </FlatList>

        
        <Text></Text>

          
          
      
              </View>  
              )
    }
  };
var styles = StyleSheet.create ({

   button:{
    height: 50,
    backgroundColor:'transparent',
   justifyContent:'center',
   borderRadius: 4,
    },
  dateContainer: {
    justifyContent:'space-between',
    flexDirection: 'row',
  },
});
module.exports=LunarCourseAnswerPage;  