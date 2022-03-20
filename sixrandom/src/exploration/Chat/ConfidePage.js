
import React, {Component} from 'react';
import {StyleSheet,View,Button, TouchableOpacity,Alert, Text,Dimensions,ScrollView} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import { TextareaItem ,Picker,List,Switch,WhiteSpace} from '@ant-design/react-native';
import RouteConfig from '../../config/RouteConfig';
import ScreenConfig from '../../config/ScreenConfig';
import StyleConfig from '../../config/StyleConfig';
import IconConfig from '../../config/IconConfig'


class ConfidePage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    return{
    
    title: RouteConfig["ConfidePage"].name,
    }
  };

  render()
  {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <ScrollView>
        
        </ScrollView>
        {
          /*
        }
        <TabNavigator  tabBarStyle={[{height:ScreenConfig.getTabBarHeight()}]}>
            <TabNavigator.Item
                        title={RouteConfig["LunaranswerPage"].name} 
                        renderIcon={() => RouteConfig["LunaranswerPage"].icon}
                        onPress={() => navigate(RouteConfig["LunaranswerPage"].route) }  
                        titleStyle={StyleConfig.menufont}>  
            </TabNavigator.Item>  

          </TabNavigator >
           {
          */
        }
        </View>
					)
  }

}

var styles = StyleSheet.create ({
  container: {
    flex:1,
  },
  index:
  {
    lineHeight:24,
    textAlign:'center', 
    fontSize:15,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
    alignItems: 'center',
  },
  list:{
    height:45,
    marginLeft: 10,
    paddingLeft:10,
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
  },
    vb_text: {  
    color: '#333333',  
    fontFamily: 'Times',  
    margin: 10,  
    fontSize: 12,         
    textAlign: 'auto',  
    lineHeight: 22,     //行高  
    fontStyle: 'italic',    //设置文字：normal：正常体；italic：斜体  
    fontWeight: 'bold', //设置粗体字，'normal' /*default*/, 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900'  
    textDecorationLine: 'underline line-through',//下划线和删除线的样式：['none' /*default*/, 'underline', 'line-through', 'underline line-through'  
  },
});
module.exports=ConfidePage;  