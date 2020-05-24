

import React, {Component} from 'react';
import {StyleSheet,View,Dimensions,Alert,Button, Text,RefreshControl,ScrollView} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import { StackNavigator } from 'react-navigation';
import { ListItem ,Card,Icon} from 'react-native-elements';
import ChangesuniverseConfig from './ChangesuniverseConfig';
import RouteConfig from '../../config/RouteConfig'
import ScreenConfig from '../../config/ScreenConfig';
import {StyleConfig,FontStyleConfig} from '../../config/StyleConfig';
import swisseph from 'react-native-swisseph';
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
      message:""
		};
  }

  async julday() {
    var cur = new Date()
    var years = cur.getFullYear()
    var month = cur.getMonth()+1
    var day = cur.getDay()
    var time = cur.getHours()
    let task1 = async () => swisseph.swe_julday(years, month, day, time, swisseph.SE_MOON).then(
        (result) => {
            return result;
        }
    );
    let task2 = async () => swisseph.swe_julday(years, month, day, time,  swisseph.SE_MERCURY).then(
        (result) => {
            return result;
        }
    );
    let task3 = async () => swisseph.swe_julday(years, month, day, time,  swisseph.SE_VENUS).then(
        (result) => {

            return result;
        }
    );
    let task4 = async () => swisseph.swe_julday(years, month, day, time,  swisseph.SE_MARS).then(
      (result) => {
          return result;
      }
  );
  let task5 = async () => swisseph.swe_julday(years, month, day, time,  swisseph.SE_JUPITER).then(
      (result) => {
          return result;
      }
  );
  let task6 = async () => swisseph.swe_julday(years, month, day, time,  swisseph.SE_SATURN).then(
      (result) => {

          return result;
      }
  );
  let task7 = async () => swisseph.swe_julday(years, month, day, time,  swisseph.SE_URANUS).then(
    (result) => {
        return result;
    }
);
let task8 = async () => swisseph.swe_julday(years, month, day, time,  swisseph.SE_NEPTUNE).then(
    (result) => {
        return result;
    }
);
let task9 = async () => swisseph.swe_julday(years, month, day, time,  swisseph.SE_PLUTO).then(
    (result) => {

        return result;
    }
);
let task0 = async () => swisseph.swe_julday(years, month, day, time,  swisseph.SE_EARTH).then(
  (result) => {

      return result;
  }
);


    let [result1, result2, result3,result4, result5, result6,result7, result8, result9, result0] = await Promise.all([
        task1(), task2(), task3(), task4(), task5(), task6(), task7(), task8(), task9(), task0()
    ]);
    let message = [
        ...this.state.message,
        "julday():" +JSON.stringify({
            'SE_MOON' : result1,
            'SE_MERCURY' : result2,
            'SE_VENUS' : result3,
            'SE_MARS' : result4,
            'SE_JUPITER' : result5,
            'SE_SATURN' : result6,
            'SE_URANUS' : result7,
            'SE_NEPTUNE' : result8,
            'SE_PLUTO' : result9,
            'SE_EARTH' : result0,
        })

    ];


    this.setState({
        message: message
    });

}

async swe_calc_ut() {
  let flag = swisseph.SEFLG_SPEED | swisseph.SEFLG_MOSEPH;
  var cur = new Date()
  var years = cur.getFullYear()
  var month = cur.getMonth()+1
  var day = cur.getDay()
  var time = cur.getHours()

  swisseph.swe_julday(years, month, day,time, swisseph.SE_GREG_CAL).then(
      async(jul_ut) => {
        let task0 = async () =>  swisseph.swe_calc_ut (jul_ut, swisseph.SE_SUN, flag).then(
          (result) => {
              return result;
          }
        );
        let task1 = async () => swisseph.swe_calc_ut (jul_ut, swisseph.SE_MOON, flag).then(
          (result) => {
              return result;
          }
      );
      let task2 = async () => swisseph.swe_calc_ut (jul_ut,  swisseph.SE_MERCURY, flag).then(
          (result) => {
              return result;
          }
      );
      let task3 = async () => swisseph.swe_calc_ut (jul_ut,  swisseph.SE_VENUS, flag).then(
          (result) => {
  
              return result;
          }
      );
      let task4 = async () =>swisseph.swe_calc_ut (jul_ut,  swisseph.SE_MARS, flag).then(
        (result) => {
            return result;
        }
    );
    let task5 = async () => swisseph.swe_calc_ut (jul_ut,  swisseph.SE_JUPITER, flag).then(
        (result) => {
            return result;
        }
    );
    let task6 = async () =>swisseph.swe_calc_ut (jul_ut,  swisseph.SE_SATURN, flag).then(
        (result) => {
  
            return result;
        }
    );
    let task7 = async () => swisseph.swe_calc_ut (jul_ut,  swisseph.SE_URANUS, flag).then(
      (result) => {
          return result;
      })
  
  let task8 = async () => swisseph.swe_calc_ut (jul_ut,  swisseph.SE_NEPTUNE, flag).then(
      (result) => {
          return result;
      })
  let task9 = async () => swisseph.swe_calc_ut (jul_ut,  swisseph.SE_PLUTO, flag).then(
      (result) => {
  
          return result;
      })
  let task10 = async () => swisseph.swe_calc_ut (jul_ut,  swisseph.SE_EARTH, flag).then(
    (result) => {
  
        return result;
    })
        let [result0,result1, result2, result3,result4, result5, result6,result7, result8, result9, result10] = await Promise.all([
          task0(),task1(), task2(), task3(), task4(), task5(), task6(), task7(), task8(), task9(), task10()
      ]);
      let message = [
          ...this.state.message,
          "julday():" +JSON.stringify({
            'SE_SUN':result0,
              'SE_MOON' : result1,
              'SE_MERCURY' : result2,
              'SE_VENUS' : result3,
              'SE_MARS' : result4,
              'SE_JUPITER' : result5,
              'SE_SATURN' : result6,
              'SE_URANUS' : result7,
              'SE_NEPTUNE' : result8,
              'SE_PLUTO' : result9,
              'SE_EARTH' : result10,
          })
  
      ];
  
  
      this.setState({
          message: message
      });


      }
  );

}


  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    return{
    title: RouteConfig["ChangesuniversePage"].name,
    }
  };

  async componentDidMount(){
    //await this.julday()
    ScreenConfig.DeviceToast("资料未开放")
    this.props.navigation.goBack()
    await this.swe_calc_ut()
  }

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
                height={width}
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
              <Text>{this.state.message}</Text>
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