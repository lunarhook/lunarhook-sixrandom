

import React, {Component} from 'react';
import {TextInput,StyleSheet,Keyboard,View, ScrollView, Button,Text,FlatList,Vibration} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import { TextareaItem,PickerView ,Toast} from '@ant-design/react-native';
import RNShake from 'react-native-shake';

import {HistoryArrayGroup} from '../../../config/StorageModule'
import ValueTypeModule from '../../../config/ValueTypeModule'
import {SixrandomModule} from '../SixrandomLib/SixrandomModule'
import ScreenConfig from '../../../config/ScreenConfig';
import StyleConfig from '../../../config/StyleConfig';
import UserModule from '../../../config/UserModule'

var randArray = []

const dataitem = [
  [
    {label: ValueTypeModule["emotion"],value: 0,},
    {label: ValueTypeModule["bussiness"],value: 1},
    {label: ValueTypeModule["lucky"],value: 2,},
    {label: ValueTypeModule["sued"],value: 3,},
    {label:ValueTypeModule["health"],value: 4},
    {label: ValueTypeModule["finance"],value: 5,},
    {label: ValueTypeModule["find"],value: 6,},
  ],
];

class SixrandomNewPage extends React.Component {

  constructor(porp) {
    
        super(porp);
        this.state= {
           data: [],
            selectedValue: 'emotion',
            selvalue:0,
            Step: 7,
            Tip: ""
    }
  }

  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    return{
      
    title:  RouteConfig["SixrandomNewPage"].name,
    }
    
  };

  UNSAFE_componentWillMount() {
    RNShake.addEventListener('ShakeEvent', () => {
      
      this.random()
    });
  }

  componentWillUnmount() {
    RNShake.removeEventListener('ShakeEvent');
  }
  keyExtractor = (item,index) => index.toString()
  renderItem(item) {
    return (
      <View style={styles.list}>
        <Text style={styles.rowhigth}>{item.item}</Text>
      </View>
    );
  }
  render()
  {
    console.log(this.state.data)
    const { navigate } = this.props.navigation;
    //alert(ValueTypeModule["emotion"])
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text></Text>
          <TextareaItem style={styles.input} placeholder="简单记录您的问题，摇晃或者点击即可出爻，六次成卦" rows={2} count={140} onChangeText={(text) => this.setState({ Tip: text })} />
          <Text></Text>
          <PickerView
            data={dataitem}
            value={this.state.selvalue}
            onChange={(value) => this.picker(value)}
            cascade={false}
          >
          </PickerView>
          <View style={styles.inputbutton}>
            <Button title="出爻" onPress={() => this.random()} />
          </View>
          <FlatList
            data={this.state.data}
            extraData={this.state}
            keyExtractor={this.keyExtractor}
            //enableEmptySections = {true}
            renderItem={this.renderItem}
          />
        </ScrollView>
        <TabNavigator tabBarStyle={{ height: ScreenConfig.getTabBarHeight() , backgroundColor: '#ffffff',}}>
          <TabNavigator.Item
            title={RouteConfig["SixrandomHistoryPage"].name}
            renderIcon={() => RouteConfig["SixrandomHistoryPage"].icon}
            onPress={() => navigate(RouteConfig["SixrandomHistoryPage"].route)}
            titleStyle={StyleConfig.menufont}>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    )
    }
  async random() {
    Vibration.vibrate();
    if (this.state.Step > 1) {
      var t = t0 = t1 = t2 = 0
      t0 = Math.random(1) >= 0.5 ? 1 : 0
      t1 = Math.random(1) >= 0.5 ? 1 : 0
      t2 = Math.random(1) >= 0.5 ? 1 : 0
      t = t0 + t1 + t2 + 6
      //alert(t)

      var x = ""
      if (t == 8) {
        x = SixrandomModule.getnegativedraw()
      }
      else if (t == 6) {
        x = SixrandomModule.getnegativedraw()
      }
      else if (t == 7) {
        x = SixrandomModule.getpositivedraw()
      }
      else if (t == 9) {
        x = SixrandomModule.getpositivedraw()
      }
      randArray[(this.state.Step - 1)] = t
      //dataArray[(this.state.Step-1)] = x
      var dataArray = this.state.data;
      dataArray.reverse(dataArray);
      dataArray.push(x)
      this.setState({ Step: this.state.Step - 1 })

      dataArray.reverse(dataArray);
      this.setState({ data: dataArray })

    }
    if(this.state.Step==1)
    {
      randArray[0] = this.state.selectedValue;
      var index = (new Date()).valueOf().toString();
      randArray[7] = index;
      randArray[8] = this.state.Tip
      //StorageModule.save({key:"last",data:randArray})
      //StorageModule.save({key:"user",id:index,data:randArray})
      this.props.navigation.state.params = randArray
      //alert(this.props.navigation.state.params)
      var date = new Date(Number(randArray[7]))
      var lunar = ""
      for (i =1;i<7;i++)
      {
        lunar = lunar+(randArray[i]).toString()
      }
      var question = randArray[0]
      
      var obj = {}
      obj.id = randArray[7]
      obj.tip = randArray[8]
      obj.star = false
      obj.date = randArray[7]
      obj.lunar = lunar
      obj.question = ValueTypeModule[question]
      obj.kind ="sixrandom"
      var parameter = "?date="+(new Date(Number(randArray[7])))+"&lunar="+lunar+"&question="+ obj.question
      var Jstr = JSON.stringify(obj)
      console.log("convertJsonSave",Jstr);
      
      let T = await UserModule.SyncFileServer(obj.kind,obj.id,Jstr)
      if(undefined!=T && 2000==T.code ){
          Jstr = HistoryArrayGroup.MakeJsonSync(Jstr)
      }
      await HistoryArrayGroup.saveid(obj.kind ,obj.id,Jstr)
      HistoryArrayGroup.save("sixrandomlast",Jstr)
      HistoryArrayGroup.GetSixrandomHistory()
      RNShake.removeEventListener('ShakeEvent');//强制卸载监听
      this.props.navigation.navigate('SixrandomFullInfoPage',parameter)
      this.picker(0)
    }

  }
  picker(value)
  {
    var pickkind = new Array();
    pickkind=["emotion","bussiness","lucky","sued","health","finance","find"]
    randArray = []
    this.setState({selvalue:value})
    this.setState({selectedValue: pickkind[value]})
    this.setState({Step: 7})
    this.setState({data: []})
   // this.flatlist.refresh()
  }
}

var styles = StyleSheet.create ({
  containerlist:{
     textAlign:'center',     
   justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
   alignItems: 'center',
   lineHeight:45,     //行高  
    
  },
  inputbutton: {
    //justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    alignItems:'center',
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
    //justifyContent:'space-between',
    flexDirection: 'row',
    marginLeft: 30, 
    marginRight: 30, 
    marginTop: 50,
  },
  rowhigth:{
    textAlign:'center',     
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
    alignItems: 'center',
    lineHeight:25,
  },
  input:{
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    textAlign:'center', 
    textDecorationLine:'underline',
    fontSize:11,
  },
  container: {
    flex:1,
  },
  textline:{
    textAlign:'center',     
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
    alignItems: 'center',
    fontSize:18
  },
  list:{
    textAlign:'center',     
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
    alignItems: 'center',
  },
});
module.exports=SixrandomNewPage;  