

import React, {Component} from 'react';
import {StyleSheet,View,Alert, Text,DeviceEventEmitter, FlatList} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import { InputItem,WhiteSpace, List ,Icon,WingBlank,Button,Stepper} from '@ant-design/react-native';
import IconConfig from '../config/IconConfig'
import ScreenConfig from '../config/ScreenConfig';
import StyleConfig from '../config/StyleConfig';
import UserModule from '../config/UserModule'
import {HistoryArrayGroup} from '../config/StorageModule'
import {DevTimeManager} from '../net/NetApi'

var Agreement= new Array()
Agreement.push("")
Agreement.push("乾坤爻")
Agreement.push("乾坤爻字体大小测试")
Agreement.push("")
Agreement.push("")
let MyFontConfigPagethis = undefined

class MyFontConfigPage extends React.Component {
   constructor(props) {
    super(props);
		this.state = {
     fontSizechange:5
    };MyFontConfigPagethis = this

  }
  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    
    return{
      title: RouteConfig["MyFontConfigPage"].name,
    }
  };

  onFontChange(value) {
    MyFontConfigPagethis.setState({
      fontSizechange:Number(value)
    })
  }
  render()
  {

    return(  <View style={StyleConfig.container}>
      <FlatList 
                        ref={(flatList)=>this._flatList = flatList}
                        useFlatList={true}
                        //1数据的获取和渲染
                        //data={undefined != content[this.state.keyindex]?content[this.state.keyindex]:""}
                        data={Agreement}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={(data) => (<View><Text style={{fontSize:15+this.state.fontSizechange - 5,paddingLeft:15,paddingRight:15}}>{data.item}</Text><WhiteSpace size="xl" /></View>)}
                        >
            </FlatList>
            <View style={{ marginBottom: 50,paddingBottom:20 }}>
            <List.Item
            extra={
              <Stepper
                key="0"
                max={10}
                min={1}
                defaultValue={5}
                onChange={this.onFontChange}
              />
            }
          >
            字体大小
          </List.Item></View>
           </View>)

  }

}
module.exports=MyFontConfigPage;  