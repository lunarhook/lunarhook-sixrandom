
import React, {Component} from 'react';
import {StyleSheet,View, Text,ScrollView,TouchableOpacity,RefreshControl,FlatList,Dimensions} from 'react-native';
import RouteConfig from '../../config/RouteConfig'
import AllQPageModule from './AllQPageModule'
import {ErYaBookPageModule,ErYaBookModule} from './ErYaBookPageModule'
import {ShuoWenBookPageModule} from './ShuoWenBookPageModule'
import {OldBookPageModule} from './OldBookPageModule'
import {BigBookPageModule} from './BigBookPageModule'
import {ZhongBookPageModule} from './ZhongBookPageModule'
import {ZhuangBookPageModule} from './ZhuangBookPageModule'
import {ShengYunBookPageModule} from './ShengYunBookPageModule'
import {UniversBookPageModule} from './UniversBookPageModule'
import {LunyuBookPageModule} from './LunyuBookPageModule'
import {MengziBookPageModule} from './MengziBookPageModule'
import {SanZiJingPageModule} from './SanZiJingPageModule'
import {BaiIiaXingPageModule} from './BaiIiaXingPageModule'
import {QianZiWenPageModule} from './QianZiWenPageModule'
import {HuangDiBookPageModule} from './HuangDiBookPageModule'
class QIndexPage extends React.Component {
  constructor(props) {
      super(props);
     
    };
    static navigationOptions = ({navigation})=>{
      const { navigate } = navigation;
      return{
        title: RouteConfig["QIndexPage"].titlename,
      }
    }
    GetBookType(ctype)
    {
      var type = new Array()
      type["三字经"] = SanZiJingPageModule
      type["百家姓"] = BaiIiaXingPageModule
      type["千字文"] = QianZiWenPageModule
      type["易经"] = UniversBookPageModule
      type["老子"] = OldBookPageModule
      type["道德经"] = type["老子"]
      type["庄子"] = ZhuangBookPageModule
      type["说文"] = ShuoWenBookPageModule
      type["尔雅"] = ErYaBookModule
      type["声律启蒙"] = ShengYunBookPageModule
      type["论语"] = LunyuBookPageModule
      type["孟子"] = MengziBookPageModule
      type["大学"] = BigBookPageModule
      type["中庸"] = ZhongBookPageModule
      type["黄帝内经"] = HuangDiBookPageModule

      var booktype = new Array()
      booktype = booktype.concat(type[ctype])
      return booktype
    }
    GetThreeQIndex()
    {}
    GetShuoWenQIndex()
    {}
    
    GetAllQIndex()
    {
      var AllIndex = new Array()
      AllIndex = AllIndex.concat(AllQPageModule)
      return AllIndex
    }
    
    FindArray(text,book)
    {
      var list = new Array()
      book.forEach((value,index)=>{
        if(undefined!=book[index].content)
        {
          var arrinfo = book[index].content
          arrinfo.forEach((valuep,indexp)=>{
            if (arrinfo[indexp].indexOf(text)!=-1)
            {
              var indexinfo = (undefined!=book[index].name)?book[index].name:" "
              var inf = book[index].index
              indexinfo = indexinfo.concat(undefined!=inf?inf:" ")
              list.push({"index":indexinfo,"content":arrinfo[indexp]})
            }
          })
        }
      })
      return list
    }
    FindUniversBook(text)
    {
      return this.FindArray(text,UniversBookPageModule)
    }
    FindBigBook(text)
    {
      return this.FindArray(text,BigBookPageModule)
    }
    FindErYaBook(text)
    {
      return this.FindArray(text,ErYaBookModule)

    }
    FindShuoWen(text)
    {
      return this.FindArray(text,ShuoWenBookPageModule)
    }
    FindOldBook(text)
    {
      return this.FindArray(text,OldBookPageModule)
    }
    FindZhuangBook(text)
    {
      return this.FindArray(text,ZhuangBookPageModule)
    }
    FindZhongBook(text)
    {
      return this.FindArray(text,ZhongBookPageModule)
    }
    FindMengziBook(text)
    {
      return this.FindArray(text,MengziBookPageModule)
    }
    FindLunyuBook(text)
    {
      return this.FindArray(text,LunyuBookPageModule)
    }
    serachText(text)
    {
      var list = new Array()
      list = list.concat(this.FindErYaBook(text))
      list = list.concat(this.FindShuoWen(text))
      list = list.concat(this.FindUniversBook(text))
      list = list.concat(this.FindOldBook(text))
      list = list.concat(this.FindZhuangBook(text))
      list = list.concat(this.FindLunyuBook(text))
      list = list.concat(this.FindMengziBook(text))
      list = list.concat(this.FindBigBook(text))
      list = list.concat(this.FindZhongBook(text))
      return list
    }
    render(){
      return(<View></View>)
    };
  };
module.exports=new QIndexPage();  