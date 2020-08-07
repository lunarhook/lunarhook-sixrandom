import React, {Component} from 'react';
import {NativeModules} from 'react-native';
import { element } from 'prop-types';
var NativePlumber = NativeModules.NativePlumber;
var MasterSelectMode = [];
var Masteralllist = [];
var MasterRandom = [];
 class MasterConfig extends React.Component {

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
MasterSelectMode = [
  {title: '训练大师',isSelect: true},
  {title: '故事课',isSelect: true},
  {title: 'MBTI训练',isSelect: true},
  {title: '五行掌握',isSelect: true},
  {title: '道德经',isSelect: true},

  //{title: '数理逻辑',isSelect: true},
  //{title: '人工智能',isSelect: true},
]

Masteralllist['训练大师'] = [
  {title: '故事课',isSelect: true},
  {title: 'MBTI训练',isSelect: true},
  {title: '五行掌握',isSelect: true},
  {title: '道德经',isSelect: true},


]
 Masteralllist['MBTI训练'] = [
  {title: 'MBTI训练',isSelect: true},

]
 Masteralllist['五行掌握'] = [


  {title: '五行掌握',isSelect: true},
]

 Masteralllist['道德经'] = [
  {title: '道德经',isSelect: true},
]
/*
 Masteralllist['数理逻辑'] = [

]
 Masteralllist['人工智能'] = [

]
*/


MasterRandom['全部'] = [
  {title: '全部',isSelect: true},
  {title: 'MBTI训练',isSelect: true},
  {title: '五行掌握',isSelect: true},
  {title: '道德经',isSelect: true},

  //{title: '逻辑思维',isSelect: true},
  //{title: '数理逻辑',isSelect: true},
  //{title: '人工智能',isSelect: true},
]
MasterRandom['MBTI训练'] = [
  {title: '全部',isSelect: true},
  {title: 'MBTI训练',isSelect: true},
  {title: '五行掌握',isSelect: false},
  {title: '道德经',isSelect: true},
  //{title: '逻辑思维',isSelect: false},
  //{title: '数理逻辑',isSelect: false},
 // {title: '人工智能',isSelect: false},
]
MasterRandom['五行掌握'] = [
  {title: '全部',isSelect: true},
  {title: 'MBTI训练',isSelect: false},
  {title: '五行掌握',isSelect: true},
  {title: '道德经',isSelect: true},
 // {title: '逻辑思维',isSelect: false},
 // {title: '数理逻辑',isSelect: false},
  //{title: '人工智能',isSelect: false},
]
/*
MasterRandom['逻辑思维'] = [
  {title: '全部',isSelect: true},
  {title: '小学三玄',isSelect: false},
  {title: '四书五经',isSelect: false},
  {title: '逻辑思维',isSelect: true},
  {title: '数理逻辑',isSelect: false},
  {title: '人工智能',isSelect: false},
]
MasterRandom['数理逻辑'] = [
  {title: '全部',isSelect: true},
  {title: '小学三玄',isSelect: false},
  {title: '四书五经',isSelect: false},
  {title: '逻辑思维',isSelect: false},
  {title: '数理逻辑',isSelect: true},
  {title: '人工智能',isSelect: false},
]
MasterRandom['人工智能'] = [
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
      delete MasterRandom['周易八卦'];
      delete Masteralllist['周易八卦'];
      for(var key in MasterRandom){
        var element = MasterRandom[key]
        var T = new Array()
        for (i=0;i<element.length;i++)
        {
          
          if (false == (element[i].title=="周易八卦" || element[i].title=="塔罗占星" || element[i].title=="大道易德"))
          {
            T.push(element[i])
          }
        }
        MasterRandom[key] = T
      }
      for(var key in Masteralllist){
        var element = Masteralllist[key]
        var T = new Array()
        for (i=0;i<element.length;i++)
        {
          
          if (false == (element[i].title=="周易八卦" || element[i].title=="塔罗占星" || element[i].title=="大道易德"))
          {
            T.push(element[i])
          }
        }
        Masteralllist[key] = T
      }

        var T = new Array()
        for(var i in MasterSelectMode)
        {
          
          if (MasterSelectMode[i].title!="周易八卦" )
          {
            T.push(MasterSelectMode[i])
          }
        }
        MasterSelectMode=T
        */

  }
  getMasterSelectMode()
  {
    return MasterSelectMode
  }
  getMasteralllist()
  {return Masteralllist}
  getMasterRandom()
  {return MasterRandom}

}
o = new MasterConfig()
//module.exports = {MasterSelectMode:MasterSelectMode,Masteralllist:Masteralllist ,MasterRandom:MasterRandom}
module.exports = o



