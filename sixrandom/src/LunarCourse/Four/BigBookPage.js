
import React, {Component} from 'react';
import {StyleSheet,View, Text,ScrollView,TouchableOpacity,RefreshControl,FlatList,Dimensions} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import { Grid ,Accordion,WhiteSpace} from '@ant-design/react-native';
import { Button, Drawer, List } from '@ant-design/react-native';
import QIndexPage from '../QDateBase/QIndexPage'
import ScreenConfig from '../../config/ScreenConfig';
import StyleConfig from '../../config/StyleConfig';
import IconConfig from '../../config/IconConfig'


class BigBookPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        dateBig:QIndexPage.GetBigBook(),
        datahistory:[],
        keyindex: 0
      };
     
    };
  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;

    return{
      
      title: RouteConfig["BigBookPage"].titlename,
    }
  };

 
  
  
  render(){
    const { navigate } = this.props.navigation;
    var constBig= new Array()
    for(var key in this.state.dateBig){
      constBig[key]=this.state.dateBig[key]
    }
      if(this.state.keyindex<0)
      {
        this.setState({keyindex:constBig.length-1})
        return(<View/>)
      }
      if(this.state.keyindex>=constBig.length)
      {
        this.setState({keyindex:0})
        return(<View/>)
      }


      itemArr = constBig.map(function(_, i,arr) { 
        return i;
      })
      .map((_i, index) => {
       
        if (index === 0) {
          return (
            <List.Item
              key={index}
              multipleLine
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >

                  <Text style={{fontSize:22}}>{ constBig[index].name}</Text>

                
                <Button
                  type="primary"
                  size="small"
                  onPress={() => this.drawer.closeDrawer()}
                >
                  {"返回"}
                </Button>
              </View>
            </List.Item>
          );
        }
        return (
          
          <List.Item
            key={index}
          >
           
            <Button
                style={{
                  justifyContent: "center",
                  alignItems: 'flex-start',
                  alignContent:"center",
                  
                }}
                  onPress={() => {this.setState({keyindex:index}),this.drawer.closeDrawer()}}
                >
                   <Text style={{fontSize:18}}>{constBig[index].name  }{index==this.state.keyindex?IconConfig.IconStar:""}</Text>
                </Button>
          </List.Item>
        );
      });
      
      const sidebar = (
        <ScrollView style={[styles.container]}>
          <List>{itemArr}</List>
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
        </ScrollView>
      );
      var curBig = new Array()
      curBig.push(constBig[this.state.keyindex].name )
      if(undefined != constBig[this.state.keyindex].content)
      {
        curBig=curBig.concat(constBig[this.state.keyindex].content)
      }
      curBig.push("")
      curBig.push("")
      curBig.push("")
      curBig.push("")
        return(
          <Drawer
          sidebar={sidebar}
          position="left"
          open={false}
          drawerRef={el => (this.drawer = el)}
          onOpenChange={this.onOpenChange}
          drawerBackgroundColor="#ccc"
        >
            <View style={StyleConfig.container}>
         
        
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
  
              <FlatList 
                          ref={(flatList)=>this._flatList = flatList}
                          useFlatList={true}
                          //1数据的获取和渲染
                          //data={undefined != content[this.state.keyindex]?content[this.state.keyindex]:""}
                          data={curBig}
                          keyExtractor={(item, index) => index.toString()}
                          renderItem={(data) => (
                          <View>
                            <Text style={{fontSize:15,paddingLeft:15,paddingRight:15}}>{data.item}</Text>
                            <WhiteSpace size="xl" />
                          </View>)}
                          >
              </FlatList>
          
          <Text></Text>
  
            
            <TabNavigator tabBarStyle={{ height: ScreenConfig.getTabBarHeight() , backgroundColor: '#ffffff',}}>
            <TabNavigator.Item
                          title={"上一页"} 
                          renderIcon={() => RouteConfig["IconLast"].icon}
  
                          //renderSelectedIcon={() => IconConfig.IconDvinationSel}
                          onPress={() => this.setState({keyindex:this.state.keyindex-1},this._flatList.scrollToOffset({animated: true, viewPosition: 0, index: 0}))}  
                          titleStyle={StyleConfig.menufont}>  
              </TabNavigator.Item>  
              <TabNavigator.Item
                          title={"目录"} 
                          renderIcon={() => RouteConfig["IconMore"].icon}
                          //renderSelectedIcon={() => IconConfig.IconDvinationSel}
                          onPress={() => this.drawer && this.drawer.openDrawer()}
                          titleStyle={StyleConfig.menufont}>  
              </TabNavigator.Item>  
              <TabNavigator.Item
                          title={"下一页"} 
                          //renderIcon={() => BaseCourseConfig["CourseToolsPage"].icon}
  
                          renderIcon={() => RouteConfig["IconNext"].icon}
                          onPress={() => this.setState({keyindex:this.state.keyindex+1},this._flatList.scrollToOffset({animated: true, viewPosition: 0, index: 0}) )}  
                          titleStyle={StyleConfig.menufont}>  
              </TabNavigator.Item>  
            </TabNavigator >
        
                </View>  
                </Drawer>
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
module.exports=BigBookPage;  