
var Dimensions = require('Dimensions');
import React, {Component} from 'react';
import ValueTypeModule from './ValueTypeModule'
import SixrandomModule from './SixrandomModule'
//import DatePicker from 'react-native-datepicker'
//import DateTimePicker from 'react-native-modal-datetime-picker';

var hidetable = new Array();
hidetable['子']=['癸主20','壬余10'];
hidetable['丑']=['己主18','辛中3','癸余9'];
hidetable['寅']=['甲主16','丙中7','戊余7'];
hidetable['卯']=['乙主20','甲余10'];
hidetable['辰']=['戊主18','癸中3','乙余9'];
hidetable['巳']=['丙主16','庚中9','戊余5'];
hidetable['午']=['丁主11','己中9','丙余10'];
hidetable['未']=['己主18','乙中3','丁余9'];
hidetable['申']=['庚主17','壬中3','己余7','戊余3'];
hidetable['酉']=['辛主20','庚余10'];
hidetable['戌']=['戊主18','丁中3','辛余9'];
hidetable['亥']=['壬主18','甲中5','戊余7'];
var daykey = '甲乙丙丁戊己庚辛壬癸'
var fivekey = '木火土金水'


class EightrandomModule extends React.Component {

  constructor(porp) {
    
        super(porp);
        this.state= {
          isDatePickerVisible: false,
          isTimePickerVisible: false,
            switchstate:true,
            selectedValue: '男',
            datepicker:"",
            datepickershow:"",
            timepicker:"",
            Tip: ""
    }
   
  }

  parentday(other,self)
  {
    var map = new Array()
    
    var num = daykey.indexOf(other);
    console.log(num,self,other)
    map['甲'] =['比', '劫', '食', '伤', '财', '才', '杀', '官', '枭', '印']
    map['乙'] =['劫', '比', '伤', '食', '才', '财', '官', '杀', '印', '枭']
    map['丙'] =['枭', '印', '比', '劫', '食', '伤', '财', '才', '杀', '官']
    map['丁'] =['印', '枭', '劫', '比', '伤', '食', '才', '财', '官', '杀']
    map['戊'] =['杀', '官', '枭', '印', '比', '劫', '食', '伤', '财', '才']
    map['己'] =['官', '杀', '印', '枭', '劫', '比', '伤', '食', '才', '财']
    map['庚'] =['财', '才', '杀', '官', '枭', '印', '比', '劫', '食', '伤']
    map['辛'] =['才', '财', '官', '杀', '印', '枭', '劫', '比', '伤', '食']
    map['壬'] =['食', '伤', '财', '才', '杀', '官', '枭', '印', '比', '劫']
    map['癸'] =['伤', '食', '才', '财', '官', '杀', '印', '枭', '劫', '比']
    console.log(map[self][num])
    return map[self][num];
  
  }

  parentearth(other,self)
  {
    var map = new Array()
    var num = daykey.indexOf(self);
    console.log(num,self,other)
    map['子'] =['枭', '印', '杀', '官', '财', '才', '食', '伤', '比', '比劫']
    map['丑'] =['才', '财', '伤', '食', '比劫', '比', '印', '枭', '官', '杀']
    map['寅'] =['比', '劫', '枭', '印', '杀', '官', '财', '才', '食', '伤']
    map['卯'] =['劫', '比', '印', '枭', '官', '杀', '才', '财', '伤', '食']
    map['辰'] =['财', '才', '食', '伤', '比', '劫', '枭', '印', '杀', '官']
    map['巳'] =['伤', '食', '比劫', '比', '印', '枭', '官', '杀', '才', '财']
    map['午'] =['食', '伤', '比', '比劫', '枭', '印', '杀', '官', '财', '才']
    map['未'] =['才', '财', '伤', '食', '比劫', '比', '印', '枭', '官', '杀']
    map['申'] =['杀', '官', '财', '才', '食', '伤', '比', '劫', '枭', '印']
    map['酉'] =['官', '杀', '才', '财', '伤', '食', '比劫', '比', '印', '枭']
    map['戌'] =['财', '才', '食', '伤', '比', '劫', '枭', '印', '杀', '官']
    map['亥'] =['印', '枭', '官', '杀', '才', '财', '伤', '食', '劫', '比']
    console.log(map[other][num])
    return map[other][num];
  
  }

  gethide(key)
  {


      var r = "";
      var i = 0;
      console.log(key)
      while(undefined!=hidetable[key][i])
      {
          r = r + hidetable[key][i][0]
          i++
      }
      return r

  }
  gethideshishen(other,self)
  {
    var r = ""
    var i=0
    console.log(other)
    while(undefined!=other[i])
    {
        r = r + this.parentday(other[i],self)
        i++
    }
    return r;
  }

  getfive(key)
  {
      //console.log(key)
      var p = new Array()
      var q = new Array()
      var i = 0;
      for(i=0;i<10;i++)
      {
          var m = daykey[i]
            p[m] = 0;
            q[i] = 0;
      }
      
      for(i=0;i<8;i=i+2)
      {
            var m = key[i]
            p[m] = p[m] + 36
      }
      //console.log(p);
      for(i=1;i<8;i=i+2)
      {
        var n = 0
        var m = key[i]
        while(undefined!=hidetable[m][n])
        {
            var t = hidetable[m][n][0]
            var v = Number(hidetable[m][n].slice(2))
            p[t] = p[t] + v;
            n++
        }
      }
      for(i=1;i<=5;i++)
      {
        var m = daykey[i*2-1]
        var n = daykey[i*2-2]
        q[i-1] = Number(p[m]) + Number(p[n]);
        q[i+4] = Math.floor(q[i-1]/264*1000)/10
      }
      console.log(q)
      console.log(p);
      return {p,q}

  }
}
var e = new EightrandomModule()
module.exports=e;  