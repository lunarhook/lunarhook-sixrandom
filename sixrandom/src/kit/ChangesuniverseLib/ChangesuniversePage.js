

import React, {Component} from 'react';
import {StyleSheet,View,Dimensions,Alert,Button, Text,RefreshControl,ScrollView} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import { StackNavigator } from 'react-navigation';
import { ListItem ,Card,Icon} from 'react-native-elements';
import ChangesuniverseConfig from './ChangesuniverseConfig';
import RouteConfig from '../../config/RouteConfig'
import ScreenConfig from '../../config/ScreenConfig';
import {StyleConfig,FontStyleConfig} from '../../config/StyleConfig';
import Svg,{
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Use,
  Defs,
  Stop
} from 'react-native-svg';

var {height, width} = Dimensions.get('window')

class ChangesuniversePage extends React.Component {
   constructor(props) {
    super(props);
		this.state = {
		};
  }


  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    return{
    title: RouteConfig["ChangesuniversePage"].name,
    }
  };

  render()
  {
    console.log(height, width)
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>
      <ScrollView>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <View style={styles.clock}>
        </View>
      <Svg
                height={height}
                width={width}
            >
            <Defs> 
            <RadialGradient id="grad" x1="0" y1="0" x2="170" y2="0">
            <Stop offset="0" stopColor="#2e99f3" stopOpacity="0.2" />
            <Stop offset="1" stopColor="#0d80dd" stopOpacity="1" />
            </RadialGradient>
            <RadialGradient id="gradround" x1="0" y1="0" x2="170" y2="0">
            <Stop offset="0" stopColor="#69b8fb" stopOpacity="0.2" />
            <Stop offset="1" stopColor="#47b2f8" stopOpacity="1" />
            </RadialGradient>
            <RadialGradient id="gradinn" x1="0" y1="0" x2="170" y2="0">
            <Stop offset="0" stopColor="#ffffff" stopOpacity="0.2" />
            <Stop offset="1" stopColor="#057ad4" stopOpacity="1" />
            </RadialGradient>
            </Defs>
                {
                  //天盘
                }
                <Circle 
                    style={styles.star}
                    cx={width*0.5}
                    cy={width*0.5}
                    r={width*0.5-5}
                    stroke="black"
                    strokeWidth="0.5"
                    fill="url(#gradround)"
                />
                {
                  //天盘内盘
                }
                 <Circle
                 style={styles.star}
                    cx={width*0.5}
                    cy={width*0.5}
                    r={width*0.5-15}
                    stroke="black"
                    strokeWidth="0.5"
                    fill="url(#grad)"
                />
                {
                  //刻度内盘
                }
                <Circle
                 style={styles.star}
                    cx={width*0.5}
                    cy={width*0.5}
                    r={width*0.5-50}
                    stroke="black"
                    strokeWidth="0.5"
                    fill="#0538a5"
                />
                {
                  //宫位内盘
                }
                <Circle
                 style={styles.star}
                    cx={width*0.5}
                    cy={width*0.5}
                    r={width*0.5-60}
                    stroke="black"
                    strokeWidth="0.5"
                    fill="#4eceff"
                />
                {
                  //苍穹内盘
                }
                <Circle
                 style={styles.star}
                    cx={width*0.5}
                    cy={width*0.5}
                    r={width*0.5-100}
                    stroke="black"
                    strokeWidth="0.5"
                    fill="url(#gradinn)"
                />


                <Path fill="none" stroke="#ffffff" d="M93.329721188,214.545817042L47.9956654256,193.454980451" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></Path>
                <Path fill="none" stroke="#a6a4b2" d="M160,320L80,320" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></Path>
                </Svg>
      </ScrollView>
    </View>
					)
  }

}

var styles = StyleSheet.create ({
  container: {
    flex:1,

  },
  clock:{
    flex:1,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  subtitleView:{
    flexDirection:'row',
    paddingLeft:10,
    //paddingTop:5
  },
  ratingText:{
    paddingLeft:10,
    color:'blue'
  },

  star:{
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
  },
  list:{
    height:45,
    marginLeft: 10,
    paddingLeft:10,
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
  },
  
});
module.exports=ChangesuniversePage;  