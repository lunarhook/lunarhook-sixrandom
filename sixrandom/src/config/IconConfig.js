
import React, { Component } from 'react';
import {StyleSheet,View,Dimensions,Alert,Button, Text,RefreshControl,ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import Foundation from 'react-native-vector-icons/Foundation'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const buttonsize = 28
const midsize = 28
const size = 25
const fire = "#FF0000"
const Coral = "#FF7F50"
const gold = "#FFCE00"
const orange = "#ED7F06"
const red = "#DE4F1F"
const blue = "#1FA7DE"
const startblue = "#00C0FF"
const green = "#13BD7A"
const claygreen = "#3dd1e0"
const darkgold = "#AC633D"
const gray = "#848484"
const LightPink = "#FFB6C1"
const black = "#000000"
const white = "#FFFFFF"

class IconConfig extends React.Component {
  static IconLunarConfide = (<Ionicons name="ios-bonfire" size={size} color={fire} />)
  static IconExploration = (<Ionicons name="ios-bonfire" size={size} color={fire} />)
  static IconUniversechanges = (<Ionicons name="md-apps" size={size} color="#06F" />)
  static IconDvinationSel = (<Ionicons name="md-apps" size={size} color="#06F" />)
  static IconPagelines = (<FontAwesome name="pagelines" size={size} color="#06F" />)
  static Iconchat = (<FontAwesome5 name="canadian-maple-leaf" size={midsize} color={gold} />)
  static IconChangesuniverse = (<Ionicons name="md-planet" size={buttonsize} color="#06F" />)
  static IconChangesuniverseSel = (<View style={{borderRadius:15, backgroundColor:'#F0F9FF',borderColor:'#00C0FF',borderWidth:1}}><MaterialCommunityIcons name="zodiac-scorpio" size={size} color={'#00C0FF'} /></View>)
  static IconQuiz = (<Ionicons name="ios-pulse" size={size} color={fire} />)
  static IconQuizSel = (<Ionicons name="ios-pulse" size={size} color={fire} />)
  static IconLunarExplain = (<Ionicons name="ios-people" size={size} color="#06F" />)
  static IconNightFm = (<Foundation name="social-treehouse" size={size} color={green} />)
  static IconNightFmSel = (<Foundation name="social-treehouse" size={size} color="#06F" />)
  static Eightrandom = (<Ionicons name="md-finger-print" size={buttonsize} color={red} />)
  static EightrandomSel = (<Ionicons name="md-finger-print" size={buttonsize} color={red} />)
  static Sixrandom = (<FontAwesome name="moon-o" size={buttonsize} color={blue} />)
  static SixrandomSel = (<MaterialCommunityIcons name="yin-yang" size={buttonsize} color={blue} />)
  static IconSixradomline =  (<FontAwesome name="minus" size={buttonsize-9} color={black} />)
  static IconSixradomlblock =  (<FontAwesome name="minus" size={buttonsize-9} color={white} />)
  static numlucky = (<FontAwesome name="signal" size={buttonsize} color={green} />)
  static numluckySel = (<FontAwesome name="signal" size={buttonsize} color={green} />)
  static Marry =(<Fontisto name="venus-mars" size={buttonsize} color={LightPink} />)
  static IconSelf = (<Ionicons name="ios-time" size={size} color={orange} />)
  static IconMBTI = (<Ionicons name="ios-happy" size={buttonsize} color={orange} />)
  static IconEnneagram = (<Foundation name="social-myspace" size={buttonsize} color={gold} />)
  static IconHolland = (<MaterialCommunityIcons name="decagram" size={buttonsize} color={blue} />)
  static IconBIGFIVE = (<MaterialCommunityIcons name="numeric-5-circle-outline" size={buttonsize} color={fire} />)
  static IconDISC = (<FontAwesome5 name="compact-disc" size={buttonsize} color={green} />)
  static IconAMS = (<MaterialCommunityIcons name="target" size={buttonsize} color={fire} />)
  static IconSCL90 = (<MaterialCommunityIcons name="emoticon-sad-outline" size={buttonsize} color={green} />)
  static IconSDS = (<AntDesign name="meh" size={size - 2} color={gold} />)
  static IconSES = (<Entypo name="emoji-neutral" size={size - 2} color={fire} />)
  static IconPLCC = (<FontAwesome5 name="heart-broken" size={buttonsize} color={fire} />)
  static IconSAS = (<Fontisto name="nervous" size={size - 2} color={claygreen} />)
  static IconLAS = (<Ionicons name="ios-heart" size={buttonsize} color={Coral} />)
  static IconOlson = (<Fontisto name="venus-mars" size={buttonsize} color={LightPink} />)
  static IconFES = (<MaterialCommunityIcons name="home-circle" size={buttonsize} color={claygreen} />)
  static IconSAD = (<FontAwesome name="street-view" size={size} color={gold} />)
  static IconECR = (<FontAwesome name="intersex" size={size} color={LightPink} />)
  static IconPANAX = (<MaterialCommunityIcons name="heart-multiple-outline" size={size} color={fire} />)
  static IconMORALS = (<MaterialCommunityIcons name="key-outline" size={size} color={gold} />)
  static IconITS = (<FontAwesome5 name="user-friends" size={size} color={green} />)
  static IconIAS = (<Ionicons name="ios-sad" size={size + 4} color={gray} />)
  static IconFAD = (<MaterialCommunityIcons name="home-lock-open" size={size + 4} color={gold} />)
  static IconEPQ = (<Ionicons name="ios-people" size={size} color={green} />)
  static IconPDP = (<Ionicons name="ios-color-palette" size={size + 4} color={claygreen} />)
  static IconFemale = (<MaterialCommunityIcons name="human-female" size={size} color={fire} />)
  static IconMale = (<MaterialCommunityIcons name="human-male" size={size} color={blue} />)
  static IconCARS = (<FontAwesome name="child" size={size} color={gold} />)
  static IconGATB = (<FontAwesome name="graduation-cap" size={size} color={green} />)
  static IconMHT = (<FontAwesome5 name="school" size={size} color={blue} />)
  static IconMHRSP = (<FontAwesome name="child" size={size} color={orange} />)
  static IconCalendar = (<MaterialIcons name="timelapse" size={midsize} color={Coral} />)
  static IconFirstUserFace = (<FontAwesome name="fire" size={size} color={fire} />)

  static IconPROF = (<FontAwesome name="university" size={size} color={fire} />)
  static IconScreen = (<Ionicons name="ios-images" size={size} color={blue} />)
  static IconDetail = (<Ionicons name="ios-menu" size={size} color={orange} />)
  static IconLunarCourse = (<MaterialIcons name="widgets" size={midsize} color={green} />)
  static IconZhiyin = (<FontAwesome name="eercast" size={size} color={green} />)
  static IconLunarCourseIntro = (<EvilIcons name="spinner-3" size={midsize} color={green} />)
  static IconLunarCourseIntroRed = (<EvilIcons name="spinner-3" size={midsize} color={fire} />)
  static IconLunarCourseIntroBlue = (<EvilIcons name="spinner-3" size={midsize} color={green} />)
  static IconLunarCourseIntroOrange = (<EvilIcons name="spinner-3" size={midsize} color={blue} />)
  static IconLunarCourseIntroGold = (<EvilIcons name="spinner-3" size={midsize} color={gold} />)
  static IconLunarCourseIntroClaygreen = (<EvilIcons name="spinner-3" size={midsize} color={claygreen} />)
  static IconJiBook = (<EvilIcons name="spinner-3" size={size} color={LightPink} />)

  static IconLunarCourseBlue = (<MaterialCommunityIcons name="lightbulb-on-outline" size={size} color={blue} />)
  static IconLunarCourseRed = (<MaterialCommunityIcons name="lightbulb-on-outline" size={size} color={fire} />)
  static IconLunarCourseRedO = (<MaterialCommunityIcons name="lightbulb-on-outline" size={size} color={orange} />)
  static IconLunarCourseGold = (<MaterialCommunityIcons name="lightbulb-on-outline" size={size} color={gold} />)
  static IconLunarCourseGreen = (<MaterialCommunityIcons name="lightbulb-on-outline" size={midsize} color={green} />)
  static IconLunarCourseclaygreen = (<MaterialCommunityIcons name="lightbulb-on-outline" size={buttonsize} color={claygreen} />)
  static IconLunarCourseLightPink = (<MaterialCommunityIcons name="lightbulb-on-outline" size={buttonsize} color={LightPink} />)

  static IconKit = (<FontAwesome name="wpexplorer" size={size} color={startblue} />)
  static IconThreechanges = (<MaterialCommunityIcons name="google-circles-communities" size={buttonsize} color="#06F" />)
  static IconSixCourse = (<Foundation name="die-six" size={buttonsize} color={blue} />)
  static Iconqimen = (<MaterialCommunityIcons name="blur" size={buttonsize} color={gold} />)
  static Icontaiyi = (<MaterialCommunityIcons name="atom" size={buttonsize} color={fire} />)
  static IconGamble = (<FontAwesome name="low-vision" size={buttonsize} color={fire} />)
  static IconGambleButton = (<FontAwesome name="eye" size={buttonsize} color={fire}/>)
  static AstroPage = (<FontAwesome name="first-order" size={buttonsize} color={startblue} />)
  static PrivateChat = (<FontAwesome name="microphone" size={size} color="#06F" />)
  static IconStarInfo = (<Ionicons name="ios-information-circle-outline" size={buttonsize} color={green} />)
  static CalendarIcon = (<Ionicons name="ios-calendar" size={size} color={orange} />)
  static ConfigIcon = (<Ionicons name="ios-options" size={size} color="#06F" />)
  static MyConfigIcon = (<Ionicons name="ios-menu" size={size} color={claygreen} />)
  static IconCyclefresh = (<FontAwesome name="refresh" size={size} color={green} />)
  static IconPerson = (<MaterialCommunityIcons name="account" size={midsize} color={gold} />)
  static IconLunarchanges = (<Ionicons name="md-aperture" size={size} color={claygreen} />)
  static IconLunaranswer = (<Ionicons name="ios-bonfire" size={size} color="#06F" />)
  static IconLunask = (<FontAwesome5 name="fort-awesome" size={size} color={startblue} />)
  static IconSubmit = (<MaterialCommunityIcons name="text-long" size={size} color={orange} />)
  static IconAudioPlay = (<Entypo name="controller-play" size={size} color={green} />)
  static IconAudioRecord = (<Entypo name="controller-record" size={size} color={fire} />)
  static IconAudioStop = (<Entypo name="controller-stop" size={size} color={darkgold} />)
  static IconAudioPause = (<Entypo name="controller-paus" size={size} color={blue} />)
  static IconQQLogin = (<Entypo name="qq" size={size} color="#06F" />)
  static IconQuestList = (<MaterialCommunityIcons name="attachment" size={size} color="#06F" />)
  static IconAddTip = (<FontAwesome name="sticky-note-o" size={midsize} color={green} />)
  static IconDelete = (<AntDesign name="delete" size={size} color={fire} />)
  static IconAddStar = (<AntDesign name="staro" size={midsize} color={gold} />)
  static IconStar = (<AntDesign name="star" size={16} color={gold} key="" />)
  static IconUStar = (<AntDesign name="staro" size={16} color={gray} />)
  static Iconmale = (<Foundation name="torso" size={midsize} color={blue} />)
  static Iconfemale = (<Foundation name="torso-female" size={midsize} color={fire} />)
  static Iconbusiness = (<Foundation name="torso-business" size={midsize} color={claygreen} />)
  static Iconemail = (<MaterialCommunityIcons name="email" size={midsize} color={claygreen} />)
  static Iconqrcode = (<AntDesign name="qrcode" size={midsize} color={claygreen} />)
  static Iconqwechat = (<AntDesign name="wechat" size={midsize} color={green} />)
  static IconMore = (<Ionicons name="ios-menu" size={size} color={green} />)
  static IconNext = (<AntDesign name="rightcircleo" size={22} color={green} />)
  static IconLast = (<AntDesign name="leftcircleo" size={22} color={green} />)
  static IconSloganShare = (<MaterialIcons name="screen-share" size={buttonsize} color={orange} />)
  static IconNamePage = (<FontAwesome5 name="medapps" size={buttonsize} color={gold} />)
  static IconNameSearchPage = (<FontAwesome5 name="hat-wizard" size={buttonsize} color={claygreen} />)
  static IconSearch = (<MaterialCommunityIcons name="cloud-search-outline" size={buttonsize} color={blue} />)
  static Service = (<AntDesign name="contacts" size={midsize} color={green} />)
  static Passshow = (<FontAwesome name="eye" size={size} color={blue} />)
  static Passclose = (<FontAwesome name="eye-slash" size={size} color={gray} />)
  static CheckOk = (<FontAwesome name="check-circle-o" size={size} color={green} />)
  static Checkfalse = (<FontAwesome name="close" size={size} color={fire} />)
  static MenuIosClose = (<AntDesign name="closecircleo" size={size - 9} color={fire} />)
  static MenuIosAdd = (<AntDesign name="pluscircleo" size={size - 9} color={green} />)
  static ReCover = (<MaterialCommunityIcons name="undo-variant" size={size - 7} color={blue} />)
  static IconUp = (<Entypo name="arrow-with-circle-up" size={size - 7} color={blue} />)
  static IconFlyStar = (<MaterialCommunityIcons name="graphql" size={buttonsize} color={green} />)

  static IconShuoWenIntro = (<Feather name="message-circle" size={buttonsize} color={blue} />)
  static IconThreeIntro = (<FontAwesome name="universal-access" size={buttonsize} color={Coral} />)
  static IconAnswerIntro = (<Entypo name="google-hangouts" size={buttonsize} color={red} />)
  static IconMaster = (<FontAwesome name="language" size={buttonsize} color={blue} />)
  static IconEnvira = (<FontAwesome5 name="glass-cheers" size={size-2} color={red} />)
  //static IconLunarCourse = (<FontAwesome name="language" size={buttonsize} color={orange} />)
  static IconShuoWen = (<MaterialCommunityIcons name="lightbulb-on-outline" size={buttonsize} color={claygreen} />)
  static IconErYa = (<MaterialCommunityIcons name="lightbulb-on-outline" size={buttonsize} color={blue} />)
  static IconShengYun = (<MaterialCommunityIcons name="lightbulb-on-outline" size={buttonsize} color={LightPink} />)
  static IconZiWei = (<FontAwesome5 name="connectdevelop" size={buttonsize} color={orange} />)
  //static IconUniversBook= (<MaterialCommunityIcons name="comment-arrow-left" size={buttonsize} color={LightPink}/>)
  //static IconUniversBook= (<FontAwesome5 name="schlix" size={buttonsize} color={black}/>)
  static IconUniversBook = (<FontAwesome name="language" size={buttonsize} color={gold} />)
  static IconOldBook = (<FontAwesome name="language" size={buttonsize} color={red} />)
  static IconZhuangBook = (<FontAwesome name="language" size={buttonsize} color={blue} />)
  static IconYN = (<Foundation name="list-number" size={buttonsize} color={green} />)
  static IconLunYuBook = (<FontAwesome name="language" size={buttonsize} color={green} />)
  static IconMengZiBook = (<FontAwesome name="language" size={buttonsize} color={blue} />)
  static IconShangShuBook = (<FontAwesome name="language" size={buttonsize} color={Coral} />)
  static IconLijiBook = (<FontAwesome name="language" size={buttonsize} color={fire} />)
  static IconZhongYongBook = (<FontAwesome name="language" size={buttonsize} color={Coral} />)
  static IconBigBook = (<FontAwesome name="language" size={buttonsize} color={fire} />)

  static IconBooks = (<MaterialCommunityIcons name="bookshelf" size={size} color={claygreen} />)


  static IconBookMedicRed = (<FontAwesome5 name="medrt" size={buttonsize} color={red} />)
  static IconBookMedicBlue = (<FontAwesome5 name="medrt" size={buttonsize} color={blue} />)
  static IconBookMedicGreen = (<FontAwesome5 name="medrt" size={buttonsize} color={green} />)



  static IconPhone = (<MaterialCommunityIcons name="cellphone-screenshot" size={size} color={green} />)
  static IconPhonePassword = (<MaterialCommunityIcons name="cellphone-lock" size={size} color={green} />)
  static IconPhoneCode= (<MaterialCommunityIcons name="cellphone-text" size={size} color={green} />)
  
  static IconFontSmall = (<EvilIcons name="minus" size={buttonsize} color={green} />)
  static IconFontLarge = (<EvilIcons name="plus" size={buttonsize} color={green} />)
  static IconFontDefault = (<EvilIcons name="refresh" size={size} color={green} />)
  static IconFontResize = (<MaterialCommunityIcons name="undo-variant" size={size - 7} color={blue} />)
  static IconTipFire = (<Ionicons name="bonfire-outline" size={size - 8} color={fire} />)
  static IconMarryCheck = (<Ionicons name="heart" size={size-8 } color={fire} />)
  static IconMarryCheckhalf = (<Ionicons name="heart-half" size={size-8 } color={fire} />)
  static IconMarryCheckfault = (<Ionicons name="heart-dislike-outline" size={size-8 } color={fire} />)
  static IconMarryDiamond = (<FontAwesome name="diamond" size={size-8 } color={startblue} />)
  static IconPartnershipCheckDiamond =   <FontAwesome name="diamond" size={size-8 } color={startblue} />
  static IconPartnershipCheck =  (<Ionicons name="heart" size={size-8 } color={fire} />)
  static IconPartnershipCheckhalf = (<Ionicons name="heart-half" size={size-8 } color={fire} />)
  static IconPartnershipCheckLeft = (<Ionicons name="heart-half" size={size-8 } color={fire} />)
  static IconPartnershipCheckRight =(<Ionicons name="heart-half" size={size-8 } color={fire} />)
  static IconPartnershipCheckfault = (<Ionicons name="heart-dislike-outline" size={size-8 } color={fire} />)
  static IconPartnership = <FontAwesome name="handshake-o" size={size } color={fire} />
  static colorgreen = green
  static colorclaygreen = claygreen
  static colorred = red
  static colorfire = fire
  static colorgold = gold
  static colorblue = blue
  static colorstartblue = startblue
  static colororange = orange
  static colorblack = black
  static colorCoral = Coral
}
module.exports = IconConfig;  