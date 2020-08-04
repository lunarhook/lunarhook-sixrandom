
import React, {Component} from 'react';
import {StyleSheet,View, Text,ScrollView,TouchableOpacity,RefreshControl,FlatList,Dimensions} from 'react-native';
import RouteConfig from '../../config/RouteConfig'

import {fivelevel1Module} from './fiveLevel1/fivelevel1'

class CourseIndexPage extends React.Component {
  constructor(props) {
      super(props);
     
    };
    static navigationOptions = ({navigation})=>{
      const { navigate } = navigation;
      return{
        title: RouteConfig["CourseIndexPage"].titlename,
      }
    }
    GetBookType(ctype)
    {
      var type = new Array()
      type["五行掌握"] = fivelevel1Module
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
    /*
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
    */
    render(){
      return(<View></View>)
    };
  };
module.exports=new CourseIndexPage();  