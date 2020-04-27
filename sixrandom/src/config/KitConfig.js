import React, {Component} from 'react';
import {NativeModules} from 'react-native';
import { element } from 'prop-types';
var NativePlumber = NativeModules.NativePlumber;
var selectmode = [];
var alllist = [];
var itemsrandom = [];
 class KitConfig extends React.Component {

  constructor(props) {
    super(props);
    NativePlumber.PlumberGetChannel((error,events) => {
      console.log('error', error);
      console.log('events', events);
      if("Huawei"==events)
      {
        this.channel()
      }
      
    })
    this.init()
    
  }

  init(){
selectmode = [
  {title: '周易八卦',isSelect: true},
  {title: '心理测试',isSelect: true},
  {title: '焦虑抑郁',isSelect: true},
  {title: '儿童少年',isSelect: true},
  {title: '职业性格',isSelect: true},
]

 alllist['心理测试'] = [
  {title: '心理测评',isSelect: true},
  {title: '性格测评',isSelect: true},
  {title: '情感家庭',isSelect: true},
  {title: '儿童少年',isSelect: true},
  {title: '周易八卦',isSelect: true},
  {title: '塔罗占星',isSelect: true},
  {title: '工具助手',isSelect: true},
  {title: '大道易德',isSelect: true},
]
 alllist['周易八卦'] = [
  {title: '周易八卦',isSelect: true},
  {title: '大道易德',isSelect: true},
  {title: '性格测评',isSelect: true},
  {title: '心理测评',isSelect: true},
  {title: '情感家庭',isSelect: true},
  {title: '儿童少年',isSelect: true},
  {title: '塔罗占星',isSelect: true},
  {title: '工具助手',isSelect: true},

]
 alllist['焦虑抑郁'] = [
  {title: '心理测评',isSelect: true},
  {title: '周易八卦',isSelect: true},
  {title: '大道易德',isSelect: true},
  {title: '性格测评',isSelect: true},

  {title: '情感家庭',isSelect: true},
  {title: '儿童少年',isSelect: true},
  {title: '塔罗占星',isSelect: true},
  {title: '工具助手',isSelect: true},
]
 alllist['儿童少年'] = [
  {title: '儿童少年',isSelect: true},
  {title: '情感家庭',isSelect: true},
  {title: '性格测评',isSelect: true},
  {title: '心理测评',isSelect: true},
  {title: '周易八卦',isSelect: true},
  {title: '塔罗占星',isSelect: true},
  {title: '工具助手',isSelect: true},
  {title: '大道易德',isSelect: true},
]
 alllist['职业性格'] = [
  {title: '性格测评',isSelect: true},
  {title: '心理测评',isSelect: true},
  {title: '情感家庭',isSelect: true},
  {title: '儿童少年',isSelect: true},
  {title: '周易八卦',isSelect: true},
  {title: '塔罗占星',isSelect: true},
  {title: '工具助手',isSelect: true},
  {title: '大道易德',isSelect: true},

]


itemsrandom['全部'] = [
  {title: '全部',isSelect: true},
  {title: '心理学',isSelect: true},
  {title: '性格测评',isSelect: true},
  {title: '儿童少年',isSelect: true},
  {title: '情感家庭',isSelect: true},
  {title: '抑郁焦虑',isSelect: true},
  {title: '周易八卦',isSelect: true},
  {title: '塔罗占星',isSelect: true},
  {title: '大道易德',isSelect: true},
  {title: '工具助手',isSelect: true},
]
itemsrandom['周易八卦'] = [
    {title: '全部',isSelect: true},
    {title: '周易八卦',isSelect: true},
    {title: '大道易德',isSelect: true},
    {title: '儿童少年',isSelect: true},
    {title: '情感家庭',isSelect: true},
    {title: '心理学',isSelect: true},
    {title: '性格测评',isSelect: true},
    {title: '抑郁焦虑',isSelect: true},
    {title: '塔罗占星',isSelect: true},
    {title: '工具助手',isSelect: true},
]
itemsrandom['心理测试'] = [
    {title: '全部',isSelect: true},
    {title: '心理学',isSelect: true},
    {title: '性格测评',isSelect: true},
    {title: '儿童少年',isSelect: false},
    {title: '情感家庭',isSelect: false},
    {title: '抑郁焦虑',isSelect: false},
    {title: '周易八卦',isSelect: true},
    {title: '塔罗占星',isSelect: true},
    {title: '大道易德',isSelect: true},
    {title: '工具助手',isSelect: false},
]
itemsrandom['焦虑抑郁'] = [
    {title: '全部',isSelect: true},
    {title: '心理学',isSelect: true},
    {title: '性格测评',isSelect: false},
    {title: '儿童少年',isSelect: false},
    {title: '情感家庭',isSelect: false},
    {title: '抑郁焦虑',isSelect: true},
    {title: '周易八卦',isSelect: false},
    {title: '塔罗占星',isSelect: false},
    {title: '大道易德',isSelect: true},
    {title: '工具助手',isSelect: false},
]
itemsrandom['儿童少年'] = [
    {title: '全部',isSelect: true},
    {title: '儿童少年',isSelect: true},
    {title: '情感家庭',isSelect: true},
    {title: '心理学',isSelect: true},
    {title: '性格测评',isSelect: false},
    {title: '抑郁焦虑',isSelect: false},
    {title: '周易八卦',isSelect: false},
    {title: '塔罗占星',isSelect: false},
    {title: '大道易德',isSelect: true},
    {title: '工具助手',isSelect: false},
]
itemsrandom['职业性格'] = [
    {title: '全部',isSelect: true},
    {title: '儿童少年',isSelect: false},
    {title: '情感家庭',isSelect: false},
    {title: '性格测评',isSelect: true},
    {title: '心理学',isSelect: true},
    {title: '抑郁焦虑',isSelect: false},
    {title: '周易八卦',isSelect: false},
    {title: '塔罗占星',isSelect: false},
    {title: '大道易德',isSelect: true},
    {title: '工具助手',isSelect: false},
]
  }

  channel(){

      delete itemsrandom['周易八卦'];
      delete alllist['周易八卦'];
      for(var key in itemsrandom){
        var element = itemsrandom[key]
        var T = new Array()
        for (i=0;i<element.length;i++)
        {
          
          if (false == (element[i].title=="周易八卦" || element[i].title=="塔罗占星" || element[i].title=="大道易德"))
          {
            T.push(element[i])
          }
        }
        itemsrandom[key] = T
      }
      for(var key in alllist){
        var element = alllist[key]
        var T = new Array()
        for (i=0;i<element.length;i++)
        {
          
          if (false == (element[i].title=="周易八卦" || element[i].title=="塔罗占星" || element[i].title=="大道易德"))
          {
            T.push(element[i])
          }
        }
        alllist[key] = T
      }

        var T = new Array()
        for(var i in selectmode)
        {
          
          if (selectmode[i].title!="周易八卦" )
          {
            T.push(selectmode[i])
          }
        }
        selectmode=T

  }
  getselectmode()
  {
    return selectmode
  }
  getalllist()
  {return alllist}
  getitemsrandom()
  {return itemsrandom}

}
o = new KitConfig()
//module.exports = {selectmode:selectmode,alllist:alllist ,itemsrandom:itemsrandom}
module.exports = o



