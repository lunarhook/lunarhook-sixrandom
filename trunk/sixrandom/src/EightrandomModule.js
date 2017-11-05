
var Dimensions = require('Dimensions');
import React, {Component} from 'react';
import ValueTypeModule from './ValueTypeModule'
import SixrandomModule from './SixrandomModule'
//import DatePicker from 'react-native-datepicker'
//import DateTimePicker from 'react-native-modal-datetime-picker';


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
    var key = '甲乙丙丁戊己庚辛壬癸'
    var num = key.indexOf(other);
    console.log(num,self,other)
    map['甲'] =['比肩', '劫财', '食神', '伤官', '偏财', '正财', '七杀', '正官', '偏印', '正印']
    map['乙'] =['劫财', '比肩', '伤官', '食神', '正财', '偏财', '正官', '七杀', '正印', '偏印']
    map['丙'] =['偏印', '正印', '比肩', '劫财', '食神', '伤官', '偏财', '正财', '七杀', '正官']
    map['丁'] =['正印', '偏印', '劫财', '比肩', '伤官', '食神', '正财', '偏财', '正官', '七杀']
    map['戊'] =['七杀', '正官', '偏印', '正印', '比肩', '劫财', '食神', '伤官', '偏财', '正财']
    map['己'] =['正官', '七杀', '正印', '偏印', '劫财', '比肩', '伤官', '食神', '正财', '偏财']
    map['庚'] =['偏财', '正财', '七杀', '正官', '偏印', '正印', '比肩', '劫财', '食神', '伤官']
    map['辛'] =['正财', '偏财', '正官', '七杀', '正印', '偏印', '劫财', '比肩', '伤官', '食神']
    map['壬'] =['食神', '伤官', '偏财', '正财', '七杀', '正官', '偏印', '正印', '比肩', '劫财']
    map['癸'] =['伤官', '食神', '正财', '偏财', '正官', '七杀', '正印', '偏印', '劫财', '比肩']
    console.log(map[self][num])
    return map[self][num];
  
  }

  parentearth(other,self)
  {
    var map = new Array()
    var key = '甲乙丙丁戊己庚辛壬癸'
    var num = key.indexOf(self);
    console.log(num,self,other)
    map['子'] =['偏印', '正印', '七杀', '正官', '偏财', '正财', '食神', '伤官', '比肩', '比劫']
    map['丑'] =['正财', '偏财', '伤官', '食神', '比劫', '比肩', '正印', '偏印', '正官', '七杀']
    map['寅'] =['比肩', '劫财', '偏印', '正印', '七杀', '正官', '偏财', '正财', '食神', '伤官']
    map['卯'] =['劫财', '比肩', '正印', '偏印', '正官', '七杀', '正财', '偏财', '伤官', '食神']
    map['辰'] =['偏财', '正财', '食神', '伤官', '比肩', '劫财', '偏印', '正印', '七杀', '正官']
    map['巳'] =['伤官', '食神', '比劫', '比肩', '正印', '偏印', '正官', '七杀', '正财', '偏财']
    map['午'] =['食神', '伤官', '比肩', '比劫', '偏印', '正印', '七杀', '正官', '偏财', '正财']
    map['未'] =['正财', '偏财', '伤官', '食神', '比劫', '比肩', '正印', '偏印', '正官', '七杀']
    map['申'] =['七杀', '正官', '偏财', '正财', '食神', '伤官', '比肩', '劫财', '偏印', '正印']
    map['酉'] =['正官', '七杀', '正财', '偏财', '伤官', '食神', '比劫', '比肩', '正印', '偏印']
    map['戌'] =['偏财', '正财', '食神', '伤官', '比肩', '劫财', '偏印', '正印', '七杀', '正官']
    map['亥'] =['正印', '偏印', '正官', '七杀', '正财', '偏财', '伤官', '食神', '劫财', '比肩']
    console.log(map[other][num])
    return map[other][num];
  
  }

  gethide(key)
  {
      var t = new Array();
      t['子']=['癸主20','壬余10'];
      t['丑']=['己主18','辛中3','癸余9'];
      t['寅']=['甲主16','丙中7','戊余7'];
      t['卯']=['乙主20','甲余10'];
      t['辰']=['戊主18','癸中3','乙余9'];
      t['巳']=['丙主16','庚中9','戊余5'];
      t['午']=['丁主11','己中9','丙余10'];
      t['未']=['己主18','乙中3','丁余9'];
      t['申']=['庚主17','壬中3','己余7','戊余3'];
      t['酉']=['辛主20','庚余10'];
      t['戌']=['戊主18','丁中3','辛余9'];
      t['亥']=['壬主18','甲中5','戊余7'];

      var r = "";
      var i = 0;
      console.log(key)
      while(undefined!=t[key][i])
      {
          r = r + t[key][i][0]
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
}
var e = new EightrandomModule()
module.exports=e;  