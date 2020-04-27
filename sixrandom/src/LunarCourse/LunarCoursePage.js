
import React, {Component} from 'react';
import {StyleSheet,View, Text,ScrollView,TouchableOpacity,NativeModules,FlatList,Dimensions} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import {Tabs, Grid ,Accordion,WhiteSpace} from '@ant-design/react-native';
import RouteConfig from '../config/RouteConfig'
import ScreenConfig from '../config/ScreenConfig';
import StyleConfig from '../config/StyleConfig';
import {HistoryArrayGroup} from '../config/StorageModule'
import CourseConfig from '../config/CourseConfig'

const intro = [
  {icon: RouteConfig['IntroAncientPage'].icon,text: RouteConfig['IntroAncientPage'].name,url:RouteConfig['IntroAncientPage'].route},
  {icon: RouteConfig['IntroThreePage'].icon,text: RouteConfig['IntroThreePage'].name,url:RouteConfig['IntroThreePage'].route},
  {icon: RouteConfig['LunarCourseAnswerPage'].icon,text: RouteConfig['LunarCourseAnswerPage'].name,url:RouteConfig['LunarCourseAnswerPage'].route},
]
const base = [
  {icon: RouteConfig['ShuoWenBookPage'].icon,text: RouteConfig['ShuoWenBookPage'].name,url:RouteConfig['ShuoWenBookPage'].route},
  {icon: RouteConfig['ErYaBookPage'].icon,text: RouteConfig['ErYaBookPage'].name,url:RouteConfig['ErYaBookPage'].route},

  {icon: RouteConfig['ShengYunBookPage'].icon,text: RouteConfig['ShengYunBookPage'].name,url:RouteConfig['ShengYunBookPage'].route},
  //{icon: RouteConfig['yinyunPage'].icon,text: RouteConfig['yinyunPage'].name,url:RouteConfig['yinyunPage'].route},
]

const three = [
  {icon: RouteConfig['UniversBookPage'].icon,text: RouteConfig['UniversBookPage'].name,url:RouteConfig['UniversBookPage'].route},
  {icon: RouteConfig['OldBookPage'].icon,text: RouteConfig['OldBookPage'].name,url:RouteConfig['OldBookPage'].route},
  {icon: RouteConfig['ZhuangBookPage'].icon,text: RouteConfig['ZhuangBookPage'].name,url:RouteConfig['ZhuangBookPage'].route},
]

const four = [
  {icon: RouteConfig['LunyuBookPage'].icon,text: RouteConfig['LunyuBookPage'].name,url:RouteConfig['LunyuBookPage'].route},
  {icon: RouteConfig['MengziBookPage'].icon,text: RouteConfig['MengziBookPage'].name,url:RouteConfig['MengziBookPage'].route},
  {icon: RouteConfig['ZhongBookPage'].icon,text: RouteConfig['ZhongBookPage'].name,url:RouteConfig['ZhongBookPage'].route},
  {icon: RouteConfig['BigBookPage'].icon,text: RouteConfig['BigBookPage'].name,url:RouteConfig['BigBookPage'].route},
]

const five = [
  {icon: RouteConfig['UniversBookPage'].icon,text: RouteConfig['UniversBookPage'].name,url:RouteConfig['UniversBookPage'].route},
  {icon: RouteConfig['ShijingBookPage'].icon,text: RouteConfig['ShijingBookPage'].name,url:RouteConfig['ShijingBookPage'].route},
  {icon: RouteConfig['ShangshuBookPage'].icon,text: RouteConfig['ShangshuBookPage'].name,url:RouteConfig['ShangshuBookPage'].route},
  {icon: RouteConfig['LijiBookPage'].icon,text: RouteConfig['LijiBookPage'].name,url:RouteConfig['LijiBookPage'].route},
  {icon: RouteConfig['ChunqiuBookPage'].icon,text: RouteConfig['ChunqiuBookPage'].name,url:RouteConfig['ChunqiuBookPage'].route},
]
const Meng = [
  {icon: RouteConfig['AncientSanZiJingPage'].icon,text: RouteConfig['AncientSanZiJingPage'].name,url:RouteConfig['AncientSanZiJingPage'].route},
  {icon: RouteConfig['AncientBaiJiaXingPage'].icon,text: RouteConfig['AncientBaiJiaXingPage'].name,url:RouteConfig['AncientBaiJiaXingPage'].route},
  {icon: RouteConfig['AncientQianZiWenPage'].icon,text: RouteConfig['AncientQianZiWenPage'].name,url:RouteConfig['AncientQianZiWenPage'].route},
]

const yi = [
  {icon: RouteConfig['HuangDiNeiJingPage'].icon,text: RouteConfig['HuangDiNeiJingPage'].name,url:RouteConfig['HuangDiNeiJingPage'].route},
  {icon: RouteConfig['BenCaoGangMuPage'].icon,text: RouteConfig['BenCaoGangMuPage'].name,url:RouteConfig['BenCaoGangMuPage'].route},
  {icon: RouteConfig['LunShangHanPage'].icon,text: RouteConfig['LunShangHanPage'].name,url:RouteConfig['LunShangHanPage'].route},
  
  
]

var w = ScreenConfig.__screenW()
var coln=4
if(w>320 &&    Platform.OS === 'ios')
{
  coln=5
}
var NativePlumber = NativeModules.NativePlumber;
let LunarCoursePagethis = null
class LunarCoursePage extends React.Component {
  constructor(props) {
      super(props);
      var CourseSelectMode = CourseConfig.getCourseRandom()
      this.state = {
        tabs: CourseSelectMode['全部'] ,
        selectmode:"国学经典",
        date:"",
        datahistory:[],
        activeSections: [0, 1, 2, 3, 4, 5, 6, 7,8],
        historyactiveSections: [0],
        Channel:""
      };
      LunarCoursePagethis = this
      this.onChange = (activeSections: number[]) => {
        var re = this.state.activeSections
        if (activeSections.length > 1) {
          this.setState({ activeSections: activeSections })
        }
        else {
          re.push(activeSections[0])
          this.setState({ activeSections: re })
        }
      };
      this.historyonChange = (historyactiveSections: number[]) => {
        var re = this.state.historyactiveSections
        if (historyactiveSections.length > 1) {
          this.setState({ historyactiveSections: historyactiveSections })
        }
        else {
          re.push(historyactiveSections[0])
          this.setState({ historyactiveSections: re })
        }
      };
    };
  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;

    return{
      
      title: RouteConfig["LunarCoursePage"].titlename,
      headerRight: ()=>(
        <TouchableOpacity
          style={{ padding: 10 ,alignContent:"center",alignItems:"baseline"}}
          //onPress={() => navigate('Search')}
          onPress={() => navigate(RouteConfig['LunarCourseConfigPage'].route)}
        >
          {RouteConfig['LunarCourseConfigPage'].icon}
        </TouchableOpacity>),
    }
  };
  componentDidMount() {
    NativePlumber.PlumberGetChannel((error,events) => {
      this.setState({Channel:events})
      this.refreshlist()
      })

  }

  refreshlist() {
    var CourseSelectMode = CourseConfig.getCourseRandom()
    //var itemsrandom = KitConfig.getitemsrandom()
    this.setState({tabs: CourseSelectMode['全部'] })
    HistoryArrayGroup.GetCourseConfigHistory().then(ids=>{

        HistoryArrayGroup.load("CourseConfigselectmode").then(T=>{
          try{
          console.log("CourseConfigselectmode",T)
          if (ids.length != 0) {
       
            let selectedItems = ids.filter((ids,index)=>ids.isSelect)
            let tabs = new Array()
            selectedItems.forEach(element => {
              obj={}
              obj.title = element.title
              if(undefined==obj.title)
              {
                HistoryArrayGroup.removeall("CourseConfig")
                throw new Error("CourseConfig")
              }
              tabs.push(obj)
            });
            if (this.state.datahistory.length>0 )
            {
              if(tabs[1].title==="关注"){}else
              {tabs.splice(1,0,{ title: '关注' })}
    
            }
            console.log("refreshlist",ids,tabs)
            this.setState({tabs:tabs,selectmode:T})
          }else if(undefined!=T){
            //从来没有选择过现实模式的人，只能使用系统默认的职业性格或者心理学初始化
            this.setState({selectmode:T})
          }
        }catch{
          this.setState({selectmode:"国学经典"})
          return
        }
        })
    })
    this.render()
}

  keyExtractor = (item,index) => item.id
  onPress(el, navigate) {
    var datahistory = this.state.datahistory
    while (datahistory.length > 5) {
      datahistory.pop()
    }
    datahistory.reverse()
    datahistory.push({ icon: el.icon, text: el.text, url: el.url })
    datahistory.reverse()
    tabs = this.state.tabs
    if (datahistory.length>0 )
    {
      if(tabs[1].title==="关注"){}else
      {tabs.splice(1,0,{ title: '关注' })}

    }
    this.setState({ datahistory: datahistory,tabs:tabs })
    this.props.navigation.setParams({text:"refresh"})
    navigate(el.url)
  }
  onclick(el, navigate)
  {
    
    var datahistory = this.state.datahistory
    
    while(datahistory.length>5)
    {
        datahistory.pop()
    }
    datahistory.reverse()
    datahistory.push( {icon: el.icon,text: el.text,url:el.route})
    datahistory.reverse()
    console.log(el)
    this.setState({datahistory:datahistory})
    //console.log("ReadPage",el.text,el.url)
    navigate( el.url)
  }
  
  switchhistory()
  {
    if(this.state.datahistory.length>0)
    {
      return(
          <Accordion.Panel header="历史浏览记录">
          <Grid
          data={this.state.datahistory}
          columnNum={5}
          onPress={(_el: any, index: any) => {/*alert(_el.url),*/navigate(_el.url)}}
        /></Accordion.Panel >
      )
    }
  }
  renderContent = (tab, index) => {
    console.log("renderContentfunc", tab, index)
    const { navigate } = this.props.navigation;
    var contentlist = new Array()
    contentlist["关注"] = (
      <Accordion.Panel header="关注" key={"关注"}>
        <Grid
          data={this.state.datahistory}
          columnNum={coln}
          renderItem={(el, index) => {
            return (<View style={{ alignItems: "center", flex: 1, justifyContent: 'center', }}>
              {el.icon}
              <Text style={{ textAlign: "center", fontSize: 12 }}>{el.text}</Text>
            </View>)
          }}
          onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
        /></Accordion.Panel >
    )
    contentlist["导读"] = (
      <Accordion.Panel header={"导读"} key={"导读"}>
        <Grid
          data={intro}
          columnNum={coln}
          isCarousel={false}
          hasLine={true}
          renderItem={(el, index) => {
            return (<View style={{ alignItems: "center", flex: 1, justifyContent: 'center', }}>
              {el.icon}
              <Text style={{ textAlign: "center", fontSize: 12 }}>{el.text}</Text>
            </View>)
          }}
          onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
        /></Accordion.Panel >)
    contentlist["小学"] = (
      <Accordion.Panel header={RouteConfig['AncientChineseLiteraturePage'].name} key={RouteConfig['AncientChineseLiteraturePage'].name}>
        <Grid
          data={base}
          columnNum={coln}
          isCarousel={false}
          hasLine={true}
          renderItem={(el, index) => {
            return (<View style={{ alignItems: "center", flex: 1, justifyContent: 'center', }}>
              {el.icon}
              <Text style={{ textAlign: "center", fontSize: 12 }}>{el.text}</Text>
            </View>)
          }}
          onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
        /></Accordion.Panel > )
    contentlist["三玄"] = (
      <Accordion.Panel header={RouteConfig['ThreeExtPage'].name}  key={RouteConfig['ThreeExtPage'].name}>
        <Grid
          data={three}
          columnNum={coln}
          isCarousel={false}
          hasLine={true}
          renderItem={(el, index) => {
            return (<View style={{ alignItems: "center", flex: 1, justifyContent: 'center', }}>
              {el.icon}
              <Text style={{ textAlign: "center", fontSize: 12 }}>{el.text}</Text>
            </View>)
          }}
          onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
        /></Accordion.Panel >)
   
    contentlist["四书"] = (
      <Accordion.Panel header={RouteConfig['FourExtPage'].name}  key={RouteConfig['FourExtPage'].name}>
        <Grid
          data={four}
          columnNum={coln}
          isCarousel={false}
          hasLine={true}
          onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
        /></Accordion.Panel >)
        /*
    contentlist["五经"] = (
      <Accordion.Panel header={RouteConfig['FiveExtPage'].name} key={RouteConfig['FiveExtPage'].name}>
        <Grid
          data={five}
          columnNum={coln}
         isCarousel={false}
          hasLine={true}
          renderItem={(el, index) => {
            return (<View style={{ alignItems: "center", flex: 1, justifyContent: 'center', }}>
              {el.icon}
              <Text style={{ textAlign: "center", fontSize: 12 }}>{el.text}</Text>
            </View>)
          }}
          onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
        /></Accordion.Panel >)
        */
       contentlist["蒙学"] = (
        <Accordion.Panel header={RouteConfig['AncientMengPage'].name}  key={RouteConfig['AncientMengPage'].name}>
          <Grid
            data={Meng}
            columnNum={coln}
            isCarousel={false}
            hasLine={true}
            onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
          /></Accordion.Panel >)
          contentlist["中医"] = (
            <Accordion.Panel header={RouteConfig['AncientMengPage'].name}  key={RouteConfig['AncientMengPage'].name}>
              <Grid
                data={yi}
                columnNum={coln}
                isCarousel={false}
                hasLine={true}
                onPress={(_el: any, index: any) => { this.onPress(_el, navigate) }}
              /></Accordion.Panel >)
    if ("关注" == tab.title) {
        return (
          <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
            {contentlist["关注"]}
          </Accordion>
        )
    } else if ("全部" == tab.title) {
      return (
        <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
          {(function (handler) {
            try{
              var alllist = CourseConfig.getCoursealllist()
              var sel = alllist[handler.state.selectmode]
              var curalllist = JSON.parse(JSON.stringify(sel))
              var content = new Array()
              if("Huawei"==LunarCoursePagethis.state.Channel){
                delete contentlist["大道易德"]
                delete contentlist["周易八卦"]
                delete contentlist["塔罗占星"]
              }
              curalllist.forEach(element=>{
                if(undefined!=contentlist[element.title])
                {
                  content.push(contentlist[element.title])
                }
                
              })
            }catch{
              return []
            }

              return content
            })(this)    
          }

        </Accordion>
      )
    } else if ("小学三玄" == tab.title) {
      return (
        <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
          { contentlist["小学"]}
          {contentlist["三玄"]}
        </Accordion>
      )
    } else if ("四书五经" == tab.title) {
      return (
        <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
          {contentlist["四书"]}
          {/*contentlist["五经"]*/}
        </Accordion>
      )
    } 
    else if ("蒙童幼学" == tab.title) {
      return (
        <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
          {contentlist["蒙学"]}
        </Accordion>
      )
    } 
    else if ("医药经典" == tab.title) {
      return (
        <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
          { contentlist["中医"]}
        </Accordion>
      )
    } 
    else if ("人工智能" == tab.title) {
      return (
        <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
          {contentlist["关注"]}
        </Accordion>
      )
    } 
  };
  
  render(){
      const { navigate } = this.props.navigation;
      if(""==this.state.Channel)
    {
      return(<View></View>)
    }
    if(undefined!=this.props.navigation.state.params && "refresh"===this.props.navigation.state.params.text)
    {
      this.props.navigation.state.params.text = ""
      LunarCoursePagethis.refreshlist()
      //return (<View></View>)
    }
      
      return(
          <View style={StyleConfig.container}>
          
          <ScrollView>
          <View style={{ flex: 2 }} ref="tabs">
            <Tabs tabs={this.state.tabs} page={"全部"}  tabBarPosition="top" >
              {this.renderContent}
            </Tabs>
          </View>

        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />

        <Text></Text>
          </ScrollView>
          {/*}
          <TabNavigator tabBarStyle={[{height:ScreenConfig.getTabBarHeight()}]}>
          <TabNavigator.Item
                        title={RouteConfig["LanguagesCoursePage"].name} 
                        renderIcon={() => RouteConfig["LanguagesCoursePage"].icon}
                        //renderSelectedIcon={() => IconConfig.IconDvinationSel}
                        onPress={() => navigate(RouteConfig["LanguagesCoursePage"].route) }  
                        titleStyle={StyleConfig.menufont}>  
            </TabNavigator.Item>  
            <TabNavigator.Item
                        title={RouteConfig["AncientChineseLiteraturePage"].name} 
                        renderIcon={() => RouteConfig["AncientChineseLiteraturePage"].icon}
                        //renderSelectedIcon={() => IconConfig.IconDvinationSel}
                        onPress={() => {navigate(RouteConfig["AncientChineseLiteraturePage"].route) }}  
                        titleStyle={StyleConfig.menufont}>  
            </TabNavigator.Item>  
            <TabNavigator.Item
                        title={RouteConfig["CourseToolsPage"].name} 
                        renderIcon={() => RouteConfig["CourseToolsPage"].icon}
                        //renderSelectedIcon={() => IconConfig.IconDvinationSel}
                        onPress={() => {navigate(RouteConfig["CourseToolsPage"].route) }}  
                        titleStyle={StyleConfig.menufont}>  
            </TabNavigator.Item>  
            <TabNavigator.Item
                        title={RouteConfig["ArtCoursePage"].name} 
                        renderIcon={() => RouteConfig["ArtCoursePage"].icon}
                        //renderSelectedIcon={() => IconConfig.IconDvinationSel}
                        onPress={() => navigate(RouteConfig["ArtCoursePage"].route) }  
                        titleStyle={StyleConfig.menufont}>  
            </TabNavigator.Item>  




          </TabNavigator >
      {*/}
              </View>  
              )
    }
  };
var styles = StyleSheet.create ({

   button:{
    height: 50,
    backgroundColor:'transparent',
   justifyContent:'center',
   borderRadius: 4,
    },
  dateContainer: {
    justifyContent:'space-between',
    flexDirection: 'row',
  },
});
module.exports=LunarCoursePage;  