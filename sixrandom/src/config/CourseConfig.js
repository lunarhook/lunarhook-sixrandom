import React, {Component} from 'react';
import {NativeModules} from 'react-native';
import { element } from 'prop-types';
var NativePlumber = NativeModules.NativePlumber;
var CourseSelectMode = [];
var Coursealllist = [];
var CourseRandom = [];
 class CourseConfig extends React.Component {

  constructor(props) {
    super(props);
    NativePlumber.PlumberGetChannel((error,events) => {
      if("Huawei"==events)
      {
        this.channel()
      }
      
    })
    this.init()
    
  }

  init(){
CourseSelectMode = [
  {title: '国学经典',isSelect: true},
  {title: '经史子集',isSelect: true},
  {title: '蒙童幼学',isSelect: true},
  {title: '医药经典',isSelect: true}
  //{title: '逻辑思维',isSelect: true},
  //{title: '数理逻辑',isSelect: true},
  //{title: '人工智能',isSelect: true},
]

 Coursealllist['国学经典'] = [
  {title: '导读',isSelect: true},
  {title: '蒙学',isSelect: false},
  {title: '小学',isSelect: false},
  {title: '三玄',isSelect: true},
  {title: '四书',isSelect: true},
  {title: '五经',isSelect: true},
  {title: '医药经典',isSelect: false},

]
Coursealllist['医药经典'] = [
  {title: '导读',isSelect: false},
  {title: '蒙学',isSelect: false},
  {title: '小学',isSelect: false},
  {title: '三玄',isSelect: true},
  {title: '四书',isSelect: false},
  {title: '五经',isSelect: false},
  {title: '中医',isSelect: true},
]
 Coursealllist['经史子集'] = [

  {title: '四书',isSelect: true},
  {title: '五经',isSelect: true},
]

 Coursealllist['蒙童幼学'] = [
  {title: '蒙学',isSelect: true},
  {title: '小学',isSelect: true},
]
/*
 Coursealllist['数理逻辑'] = [

]
 Coursealllist['人工智能'] = [

]
*/


CourseRandom['全部'] = [
  {title: '全部',isSelect: true},
  {title: '蒙童幼学',isSelect: true},
  {title: '小学三玄',isSelect: true},
  {title: '四书五经',isSelect: true},
  {title: '医药经典',isSelect: true},
  //{title: '数理逻辑',isSelect: true},
  //{title: '人工智能',isSelect: true},
]
CourseRandom['国学经典'] = [
  {title: '全部',isSelect: false},
  {title: '蒙童幼学',isSelect: false},
  {title: '小学三玄',isSelect: true},
  {title: '四书五经',isSelect: true},
  {title: '医药经典',isSelect: false},
  //{title: '逻辑思维',isSelect: false},
  //{title: '数理逻辑',isSelect: false},
 // {title: '人工智能',isSelect: false},
]
CourseRandom['经史子集'] = [
  {title: '全部',isSelect: false},
  {title: '蒙童幼学',isSelect: false},
  {title: '小学三玄',isSelect: false},
  {title: '四书五经',isSelect: true},
  {title: '医药经典',isSelect: false},
 // {title: '逻辑思维',isSelect: false},
 // {title: '数理逻辑',isSelect: false},
  //{title: '人工智能',isSelect: false},
]

CourseRandom['蒙童幼学'] = [
  {title: '全部',isSelect: false},
  {title: '蒙童幼学',isSelect: true},
  {title: '小学三玄',isSelect: false},
  {title: '四书五经',isSelect: false},
  {title: '医药经典',isSelect: false},
  //{title: '小学三玄',isSelect: false},
  //{title: '四书五经',isSelect: false},
  //{title: '逻辑思维',isSelect: true},
  //{title: '数理逻辑',isSelect: false},
  //{title: '人工智能',isSelect: false},
]

CourseRandom['医药经典'] = [
  {title: '全部',isSelect: false},
  {title: '蒙童幼学',isSelect: false},
  {title: '小学三玄',isSelect: false},
  {title: '四书五经',isSelect: false},
  {title: '医药经典',isSelect: true},
]
/*
CourseRandom['人工智能'] = [
  {title: '全部',isSelect: true},
  {title: '小学三玄',isSelect: false},
  {title: '四书五经',isSelect: false},
  {title: '逻辑思维',isSelect: false},
  {title: '数理逻辑',isSelect: false},
  {title: '人工智能',isSelect: true},
]
*/
  }

  channel(){
      /*
      delete CourseRandom['周易八卦'];
      delete Coursealllist['周易八卦'];
      for(var key in CourseRandom){
        var element = CourseRandom[key]
        var T = new Array()
        for (i=0;i<element.length;i++)
        {
          
          if (false == (element[i].title=="周易八卦" || element[i].title=="塔罗占星" || element[i].title=="大道易德"))
          {
            T.push(element[i])
          }
        }
        CourseRandom[key] = T
      }
      for(var key in Coursealllist){
        var element = Coursealllist[key]
        var T = new Array()
        for (i=0;i<element.length;i++)
        {
          
          if (false == (element[i].title=="周易八卦" || element[i].title=="塔罗占星" || element[i].title=="大道易德"))
          {
            T.push(element[i])
          }
        }
        Coursealllist[key] = T
      }

        var T = new Array()
        for(var i in CourseSelectMode)
        {
          
          if (CourseSelectMode[i].title!="周易八卦" )
          {
            T.push(CourseSelectMode[i])
          }
        }
        CourseSelectMode=T
        */

  }
  getCourseSelectMode()
  {
    return CourseSelectMode
  }
  getCoursealllist()
  {return Coursealllist}
  getCourseRandom()
  {return CourseRandom}

}
o = new CourseConfig()
//module.exports = {CourseSelectMode:CourseSelectMode,Coursealllist:Coursealllist ,CourseRandom:CourseRandom}
module.exports = o



