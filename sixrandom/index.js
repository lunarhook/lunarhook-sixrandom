import 'react-native-gesture-handler'
import { AppRegistry, TouchableOpacity, Text } from 'react-native';
import React, { Component } from 'react';
import { Provider, Icon } from '@ant-design/react-native';
import { StyleSheet, View, Alert, NativeModules } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { setJSExceptionHandler, getJSExceptionHandler } from './src/config/ExceptionModule';
import { MenuProvider } from 'react-native-popup-menu';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import IconConfig from './src/config/IconConfig'
import slogan from './src/slogan'
import CalendarPage from './src/CalendarPage';
import SearchPage from './src/tools/SearchPage'

import SixrandomNewPage from './src/kit/UniversechangesLib/SixrandomLib/SixrandomNewPage';
import SixrandomFullInfoPage from './src/kit/UniversechangesLib/SixrandomLib/SixrandomFullInfoPage'
import SixrandomHistoryPage from './src/kit/UniversechangesLib/SixrandomLib/SixrandomHistoryPage';
import EightrandomNewPage from './src/kit/UniversechangesLib/EightrandomLib/EightrandomNewPage';
import EightrandomMainPage from './src/kit/UniversechangesLib/EightrandomLib/EightrandomMainPage'
import EightrandomHistoryPage from './src/kit/UniversechangesLib/EightrandomLib/EightrandomHistoryPage'
import NumberMainPage from './src/kit/UniversechangesLib/NumberLib/NumberMainPage'
import NumberMotionNewPage from './src/kit/NumberMotionsLib/NumberMotionNewPage'
import kitPage from './src/kit/kitPage'
//import kitExplorationPage from './src/kit/kitExplorationPage'
import kitConfigPage from './src/kit/kitConfigPage';
import PsychTestPage from './src/kit/LunarMotionsLib/PsychTestPage'
import MBTIModule from './src/kit/LunarMotionsLib/PsychLib/MBTIModule'
import EnneagramModule from './src/kit/LunarMotionsLib/PsychLib/EnneagramModule'
import HollandModule from './src/kit/LunarMotionsLib/PsychLib/HollandModule'
import BIGFIVEModule from './src/kit/LunarMotionsLib/PsychLib/BIGFIVEModule'
import DISCModule from './src/kit/LunarMotionsLib/PsychLib/DISCModule'
import AMSModule from './src/kit/LunarMotionsLib/PsychLib/AMSModule'
import SCL90Module from './src/kit/LunarMotionsLib/PsychLib/SCL90Module'
import SDSModule from './src/kit/LunarMotionsLib/PsychLib/SDSModule'
import SESModule from './src/kit/LunarMotionsLib/PsychLib/SESModule'
import SASModule from './src/kit/LunarMotionsLib/PsychLib/SASModule'
import PLCCModule from './src/kit/LunarMotionsLib/PsychLib/PLCCModule'
import LASModule from './src/kit/LunarMotionsLib/PsychLib/LASModule'
import OlsonModule from './src/kit/LunarMotionsLib/PsychLib/OlsonModule'
import FESModule from './src/kit/LunarMotionsLib/PsychLib/FESModule'
import SADModule from './src/kit/LunarMotionsLib/PsychLib/SADModule'
import ECRModule from './src/kit/LunarMotionsLib/PsychLib/ECRModule'
import PANASModule from './src/kit/LunarMotionsLib/PsychLib/PANASModule'
import MORALSModule from './src/kit/LunarMotionsLib/PsychLib/MORALSModule'
import ITSModule from './src/kit/LunarMotionsLib/PsychLib/ITSModule'
import IASModule from './src/kit/LunarMotionsLib/PsychLib/IASModule'
import FADModule from './src/kit/LunarMotionsLib/PsychLib/FADModule'
import EPQModule from './src/kit/LunarMotionsLib/PsychLib/EPQModule'
import PDPModule from './src/kit/LunarMotionsLib/PsychLib/PDPModule'
import EMBUFemaleModule from './src/kit/LunarMotionsLib/PsychLib/EMBUFemaleModule'
import EMBUMaleModule from './src/kit/LunarMotionsLib/PsychLib/EMBUMaleModule'
import CARSModule from './src/kit/LunarMotionsLib/PsychLib/CARSModule'
import GATBModule from './src/kit/LunarMotionsLib/PsychLib/GATBModule'
import PROFModule from './src/kit/LunarMotionsLib/PsychLib/PROFModule'
import MHTModule from './src/kit/LunarMotionsLib/PsychLib/MHTModule'
import MHRSPModule from './src/kit/LunarMotionsLib/PsychLib/MHRSPModule'


import SixCourseNewPage from './src/kit/ThreechangesLib/sixcourse/SixCourseNewPage'
import SixCourseMainPage from './src/kit/ThreechangesLib/sixcourse/SixCourseMainPage'
import SixCourseHistoryPage from './src/kit/ThreechangesLib/sixcourse/SixCourseHistoryPage'
import qimenNewPage from './src/kit/ThreechangesLib/qimen/qimenNewPage'
import qimenMainPage from './src/kit/ThreechangesLib/qimen/qimenMainPage'
import qimenHistoryPage from './src/kit/ThreechangesLib/qimen/qimenHistoryPage'
import taiyiNewPage from './src/kit/ThreechangesLib/taiyi/taiyiNewPage'
import taiyiMainPage from './src/kit/ThreechangesLib/taiyi/taiyiMainPage'
import taiyiHistoryPage from './src/kit/ThreechangesLib/taiyi/taiyiHistoryPage'
import ChangesuniversePage from './src/kit/ChangesuniverseLib/ChangesuniversePage'
import GamblePage from './src/kit/ChangesuniverseLib/GambleLib/GamblePage'
import StarInfoPage from './src/kit/ChangesuniverseLib/GambleLib/StarInfoPage'
import TarotPage from './src/kit/ChangesuniverseLib/TarotLib/TarotPage'
import TarotVenusPage from './src/kit/ChangesuniverseLib/TarotLib/TarotVenusPage'
import TarotStarofDavidPage from './src/kit/ChangesuniverseLib/TarotLib/TarotStarofDavidPage'
import TarotCeltsPage from './src/kit/ChangesuniverseLib/TarotLib/TarotCeltsPage'
import ziweiHistoryPage from './src/kit/ziwei/ziweiHistoryPage'
import ziweiMainPage from './src/kit/ziwei/ziweiMainPage'
import ziweiNewPage from './src/kit/ziwei/ziweiNewPage'

import LunarCoursePage from './src/LunarCourse/LunarCoursePage';
import LunarMasterPage from './src/LunarCourse/LunarMasterPage'
import LunarCourseConfigPage from './src/LunarCourse/LunarCourseConfigPage'
import LunarCourseAnswerPage from './src/LunarCourse/LunarCourseAnswerPage'
import CourseSearchPage from './src/LunarCourse/CourseSearchPage'
import IntroBooksPage from './src/LunarCourse/Intro/IntroBooksPage'

import IntroAncientPage from './src/LunarCourse/Intro/IntroAncientPage'
import IntroThreePage from './src/LunarCourse/Intro/IntroThreePage'
import DetailBookPage from './src/LunarCourse/DetailBookPage'
import CourseBookPage from './src/LunarCourse/CourseBookPage'


import SloganShare from './src/kit/tools/SloganShare'
import NamePage from './src/kit/tools/NamePage'
import NameModule from './src/kit/tools/NameModule'
import TrackStarPage from './src/kit/tools/TrackStarPage'
import MyPage from './src/Myconfig/MyPage'
import AgreePage from './src/Myconfig/AgreePage'
import PrivacyPage from './src/Myconfig/PrivacyPage'
import MyRegister from './src/Myconfig/MyRegister'
import MyUpdateRegister from './src/Myconfig/MyUpdateRegister'
import MyFontConfigPage from './src/Myconfig/MyFontConfigPage'





var NativePlumber = NativeModules.NativePlumber;
/*
global.channel = "default";

  (async function (){
    await NativePlumber.PlumberGetChannel((error,events) => {
    console.log('error', error);
    console.log('events', events);
    global.channel = events;
  })})()
  */
const previousErrorHandler = getJSExceptionHandler();
const exceptionhandler = async (e, isFatal) => {
  if (isFatal && false == __DEV__) {
    Alert.alert(
      '警告',
      `回传错误信息后系统即将退出`,
      [{
        text: 'OK',
      }]
    );
  } else {
    //console.log(e); // So that we can see it in the ADB logs in case of Android if needed
  }
  await NativePlumber.SetHandlerException(e.message, __DEV__)
};
if (__DEV__) {

} else {
  setJSExceptionHandler(exceptionhandler, true);
}

const MainPage = createBottomTabNavigator({

  CalendarPage: { screen: CalendarPage },
  kitPage: { screen: kitPage },
  LunarMasterPage: { screen: LunarMasterPage },
  MyPageFake: createStackNavigator(
    { "MyPageFake": "我的" },
    {
      navigationOptions: ({ navigation }) => ({
        title: RouteConfig["MyPage"].name,
      })
    }),
},
  {
    initialRouteName: 'kitPage',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        //console.log("routeName",routeName)
        return RouteConfig[routeName].icon;
      },
      tabBarOnPress: (nv) => {
        const { routeName } = navigation.state;

        if ("MyPageFake" == routeName) {
          navigation.navigate("MyPage")
        }
        else if ("ExplorationTabFake" == routeName) {
          navigation.navigate("ExplorationTab")
        }
        else {
          console.log("tabBarOnPress", routeName)
          nv.defaultHandler();
        }
      },
      headerRight: <View/>,
      headerLeft: <View/> 
    }),
    navigationOptions: ({ navigation }) => ({
      title: RouteConfig[(navigation.state.routes[navigation.state.index]).routeName].titlename,
      headerLeft: () => (<></>),
      headerRight: () => {
        if (undefined != navigation.state) {
          var curpage = navigation.state.routes[navigation.state.index].routeName
          if ("kitPage" == curpage) {
            return (<Menu style={{ paddingRight: 20, alignContent: "center", alignItems: "baseline" }}>
              <MenuTrigger>{RouteConfig['kitConfigPage'].icon}</MenuTrigger>
              <MenuOptions style={{ width: 175, flex: 1 }}>
                <MenuOption style={{ flexDirection: "row", alignItems: "center", flex: 1 }} onSelect={() => navigation.navigate(RouteConfig['kitConfigPage'].route)}><Text style={{ includeFontPadding: false,alignContent:"center", alignItems: "center", height: 30, width: 30 }}>{RouteConfig['kitConfigPage'].icon}</Text><Text style={{ paddingLeft: 20 }}>{RouteConfig['kitConfigPage'].name}</Text></MenuOption>
                <MenuOption style={{ flexDirection: "row", alignItems: "center", flex: 1 }} onSelect={() => navigation.navigate(RouteConfig["SearchPage"].route)}><Text style={{ includeFontPadding: false,alignContent:"center", alignItems: "center", textAlignVertical: "center", height: 30, width: 30 }}>{RouteConfig["SearchPage"].icon}</Text><Text style={{ paddingLeft: 20 }}>{RouteConfig["SearchPage"].name + "支持"}</Text></MenuOption>
                <MenuOption style={{ flexDirection: "row", alignItems: "center", flex: 1 }} onSelect={() => kitPage.ShareInstance().onBussion("service", navigation.navigate)}><Text style={{includeFontPadding: false, alignContent:"center", alignItems: "center", textAlignVertical: "center", height: 30, width: 30 }}>{RouteConfig["service"].icon}</Text><Text style={{ paddingLeft: 20 }}>{RouteConfig["service"].name}</Text></MenuOption>
                <MenuOption style={{ flexDirection: "row", alignItems: "center", flex: 1 }} onSelect={() => kitPage.ShareInstance().setState({ less: !kitPage.ShareInstance().state.less })}><Text style={{ includeFontPadding: false,alignContent:"center", alignItems: "center", textAlignVertical: "center", height: 30, width: 30 }}>{IconConfig.IconFirstUserFace}</Text><Text style={{ paddingLeft: 20 }}>{"引导页面"}</Text></MenuOption>
              </MenuOptions>
            </Menu>)
          } else if ("CalendarPage" == curpage) {
            recover = (navigation.state.routes[navigation.state.index]).params
            if(undefined!=recover)
            {
              recover = recover.otherParam
            }
            else{
              recover = false
            }
            return (
              <TouchableOpacity
                style={{ paddingRight: 20, alignContent: "center", alignItems: "baseline" }}
                //onPress={() => navigate('Search')}
                onPress={() => CalendarPage.ShareInstance().today()}>
                {(false == recover) ? (null) : IconConfig.ReCover}
              </TouchableOpacity>)
          } else if ("LunarMasterPage" == curpage) {
            return (
              <TouchableOpacity
                style={{ paddingRight: 20, alignContent: "center", alignItems: "baseline" }}
                //onPress={() => navigate('Search')}
                onPress={() => navigation.navigate(RouteConfig["LunarCoursePage"].route)}>{IconConfig.IconBooks}
              </TouchableOpacity>)
          } else if ("MyPage" == curpage) {
            return (<Icon name="bars" style={{ paddingRight: 30 }} onPress={() => MyPage.ShareInstance().compontupdate()} />)
          }
        }
        return (<></>)
      }
    }),
  }

)


const sixrandom = createStackNavigator({
  //CalendarPage: { screen: CalendarPage },
  MainPage,
  NumberMainPage: { screen: NumberMainPage },
  SixrandomHistoryPage: { screen: SixrandomHistoryPage },
  SixrandomNewPage: { screen: SixrandomNewPage },
  SixrandomFullInfoPage: { screen: SixrandomFullInfoPage },
  EightrandomMainPage: { screen: EightrandomMainPage },
  EightrandomNewPage: { screen: EightrandomNewPage },
  EightrandomHistoryPage: { screen: EightrandomHistoryPage },
  NumberMotionNewPage: { screen: NumberMotionNewPage },
  SearchPage: { screen: SearchPage },
  NamePage: { screen: NamePage },
  NameModule: { screen: NameModule },
  TrackStarPage: { screen: TrackStarPage },
  //kitPage:{screen:kitPage},
  //kitExplorationPage:{screen:kitExplorationPage},
  kitConfigPage: { screen: kitConfigPage },
  SixCourseNewPage: { screen: SixCourseNewPage },
  SixCourseMainPage: { screen: SixCourseMainPage },
  SixCourseHistoryPage: { screen: SixCourseHistoryPage },
  qimenNewPage: { screen: qimenNewPage },
  qimenHistoryPage: { screen: qimenHistoryPage },
  qimenMainPage: { screen: qimenMainPage },
  taiyiNewPage: { screen: taiyiNewPage },
  taiyiHistoryPage: { screen: taiyiHistoryPage },
  taiyiMainPage: { screen: taiyiMainPage },
  ziweiHistoryPage: { screen: ziweiHistoryPage },
  ziweiMainPage: { screen: ziweiMainPage },
  ziweiNewPage: { screen: ziweiNewPage },
  ChangesuniversePage: { screen: ChangesuniversePage },
  StarInfoPage: { screen: StarInfoPage },
  GamblePage: { screen: GamblePage },
  TarotPage: { screen: TarotPage },
  TarotVenusPage: { screen: TarotVenusPage },
  TarotStarofDavidPage: { screen: TarotStarofDavidPage },
  TarotCeltsPage: { screen: TarotCeltsPage },
  PsychTestPage: { screen: PsychTestPage },
  EnneagramModule: { screen: EnneagramModule },
  MBTIModule: { screen: MBTIModule },
  HollandModule: { screen: HollandModule },
  BIGFIVEModule: { screen: BIGFIVEModule },
  DISCModule: { screen: DISCModule },
  AMSModule: { screen: AMSModule },
  SCL90Module: { screen: SCL90Module },
  SDSModule: { screen: SDSModule },
  PLCCModule: { screen: PLCCModule },
  SESModule: { screen: SESModule },
  SASModule: { screen: SASModule },
  LASModule: { screen: LASModule },
  OlsonModule: { screen: OlsonModule },
  FESModule: { screen: FESModule },
  SADModule: { screen: SADModule },
  ECRModule: { screen: ECRModule },
  PANASModule: { screen: PANASModule },
  MORALSModule: { screen: MORALSModule },
  ITSModule: { screen: ITSModule },
  IASModule: { screen: IASModule },
  FADModule: { screen: FADModule },
  EPQModule: { screen: EPQModule },
  PDPModule: { screen: PDPModule },
  EMBUFemaleModule: { screen: EMBUFemaleModule },
  EMBUMaleModule: { screen: EMBUMaleModule },
  CARSModule: { screen: CARSModule },
  GATBModule: { screen: GATBModule },
  PROFModule: { screen: PROFModule },
  MHTModule: { screen: MHTModule },
  MHRSPModule: { screen: MHRSPModule },
  SloganShare: { screen: SloganShare },

  //LunarCoursePageTab:LunarCoursePageTab,    
  LunarCoursePage: { screen: LunarCoursePage },
  LunarCourseConfigPage: { screen: LunarCourseConfigPage },
  CourseSearchPage: { screen: CourseSearchPage },
  //LunarMasterPage:{screen:LunarMasterPage},
  IntroAncientPage: { screen: IntroAncientPage },
  IntroThreePage: { screen: IntroThreePage },
  IntroBooksPage: { screen: IntroBooksPage },
  LunarCourseAnswerPage: { screen: LunarCourseAnswerPage },
  DetailBookPage: { screen: DetailBookPage },
  CourseBookPage: { screen: CourseBookPage },

  MyPage: { screen: MyPage },
  MyFontConfigPage: { screen: MyFontConfigPage },
  PrivacyPage: { screen: PrivacyPage },
  AgreePage: { screen: AgreePage },
  MyRegister: { screen: MyRegister },
  MyUpdateRegister: { screen: MyUpdateRegister },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      const width = layout.initWidth;
      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [width, 0, 0],
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      });

      return { opacity, transform: [{ translateX }] };
    },
  }),
});


const RootStack = createStackNavigator(
  {
    slogan: {
      screen: slogan,
    },
    sixrandom: {
      screen: sixrandom,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);



function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}

const AppContainer = createAppContainer(RootStack);

const SixrandomApp = () =>
  <Provider >
    <MenuProvider>
      <AppContainer
        onNavigationStateChange={(prevState, currentState) => {
          const currentScreen = getActiveRouteName(currentState);
          const prevScreen = getActiveRouteName(prevState);

          if (prevScreen !== currentScreen) {
            // the line below uses the Google Analytics tracker
            // change the tracker here to use other Mobile analytics SDK.
            //console.log("onNavigationStateChange"," cur:",currentScreen," prev:",prevScreen);
            var eventfilter = ""
            if (currentScreen == "SixrandomNewPage") {
              //eventfilter = "SixrandomNewPage"
            }

            NativePlumber.PlumberRouting(currentScreen, "", "", eventfilter)

          }
        }}
      />
    </MenuProvider>
  </Provider>

AppRegistry.registerComponent('sixrandom', () => SixrandomApp);
//console.log("getAppKeys",AppRegistry.getAppKeys())