
import React, {Component} from 'react';
import {StyleSheet,View, Text,ScrollView,TouchableOpacity,RefreshControl,FlatList,Dimensions} from 'react-native';
import RouteConfig from '../../config/RouteConfig'
import ThreePageModule from './ThreePageModule'
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
    GetThreeQIndex()
    {}
    GetShuoWenQIndex()
    {}
    GetMengziBookPage()
    {
      var MengziBook = new Array()
      MengziBook = MengziBook.concat(MengziBookPageModule)
      return MengziBook

    }
    GetLunyuBookPage()
    {
      var LunyuBook = new Array()
      LunyuBook = LunyuBook.concat(LunyuBookPageModule)
      return LunyuBook

    }
    GetUniversBook()
    {
      var UniversBook = new Array()
      UniversBook = UniversBook.concat(UniversBookPageModule)
      return UniversBook

    }
    GetAllQIndex()
    {
      var AllIndex = new Array()
      AllIndex = AllIndex.concat(ThreePageModule)
      return AllIndex
    }
    GetZhuangBook(){
      var ZhuangBook = new Array()
      ZhuangBook = ZhuangBook.concat(ZhuangBookPageModule)
      return ZhuangBook;
    }
    GetBigBook()
    {
      var BigBook = new Array()
      BigBook = BigBook.concat(BigBookPageModule)
      return BigBook;
    }
    GetOldBook()
    {
      var OldBook = new Array()
      OldBook = OldBook.concat(OldBookPageModule)
      return OldBook;
    }
    GetErYaBook()
    {
      var ErYaBook = new Array()
      ErYaBook = ErYaBook.concat(ErYaBookModule)
      return ErYaBook;
    }
    GetZhongBook()
    {
      var ZhongBook = new Array()
      ZhongBook = ZhongBook.concat(ZhongBookPageModule)
      return ZhongBook;
    }
    GetShuoWenBook()
    {
      var ShuoWenBook = new Array()
      ShuoWenBook = ShuoWenBook.concat(ShuoWenBookPageModule)
      return ShuoWenBook;
    }
    GetShengYunBook()
    {
      var ShengYunBook = new Array()
      ShengYunBook = ShengYunBook.concat(ShengYunBookPageModule)
      return ShengYunBook;
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