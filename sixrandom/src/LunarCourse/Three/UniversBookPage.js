
import React, {Component} from 'react';
import {StyleSheet,View, Text,ScrollView,TouchableOpacity,RefreshControl,FlatList,Dimensions} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import { Grid ,Accordion,WhiteSpace} from '@ant-design/react-native';
import { Button, Drawer, List } from '@ant-design/react-native';
import {six_random_NaJia} from '../../kit/UniversechangesLib/SixrandomLib/SixrandomModule'
import ScreenConfig from '../../config/ScreenConfig';
import StyleConfig from '../../config/StyleConfig';
import QindexPage from '../QDateBase/QIndexPage'
import IconConfig from '../../config/IconConfig'
var constlist = new Array()
constlist.push("乾、坤、震、艮、离、坎、兑、巽")
constlist.push("☰、☷、☳、☶、☲、☵、☱、☴")

constlist.push("乾三连，坤六断；震仰盂，艮覆碗。")
constlist.push("离中虚，坎中满；兑上缺，巽下断。")

class UniversBookPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        date:"",
        datahistory:[],
        activeSections: [0, 1,2,3,4],
        keyindex: 1
      };
    
    };
  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;

    return{
      
      title: RouteConfig["UniversBookPage"].name,
    }
  };

  keyExtractor = (item,index) => item.id

  
  render(){
      if(this.state.keyindex==0)
      {
        this.setState({keyindex:70})
        return(<View/>)
      }
      if(this.state.keyindex>70)
      {
        this.setState({keyindex:1})
        return(<View/>)
      }
      const { navigate } = this.props.navigation;
      var constNajia = new Array()
      constNajia = QindexPage.GetUniversBook()
      itemArr = constNajia.map(function(_, i,arr) { 
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

                  <Text style={{fontSize:22}}>{constNajia[index].icon}{constNajia[index].p +":"+ constNajia[index].name}</Text>

                
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
                   <Text style={{fontSize:18}}>{constNajia[index].icon}{constNajia[index].p +":"+ constNajia[index].name}{index==this.state.keyindex?IconConfig.IconStar:""}</Text>
                </Button>
          </List.Item>
        );
      });
    // Todo: https://github.com/DefinitelyTyped/DefinitelyTyped
    const sidebar = (
      <ScrollView style={[styles.container]}>
        <List>{itemArr}</List>
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
      </ScrollView>
    );
    
    
      
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
                        data={constNajia[this.state.keyindex].content}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={(data) => (<View><Text style={{fontSize:15,paddingLeft:15,paddingRight:15}}>{data.item}</Text><WhiteSpace size="xl" /></View>)}
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
module.exports=UniversBookPage;  