


import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, TouchableHighlight, Alert, Text, FlatList ,Animated} from 'react-native';
import RouteConfig from '../config/RouteConfig'
import IconConfig from '../config/IconConfig'
import { Card, Button, Modal, WingBlank, WhiteSpace, List, SwipeAction, Icon } from '@ant-design/react-native';
import { HistoryArrayGroup } from '../config/StorageModule'
import Search from 'react-native-search-box';
import UserModule from '../config/UserModule'
import {StyleConfig,FontStyleConfig} from '../config/StyleConfig';
import { string } from 'prop-types';
const { width, height } = Dimensions.get('window');

var listsearch = new Array()
var groupsearch = new Array()
class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      searchText:""
    };
    listsearch['EightrandomMainPage'] = "eightrandom"
    listsearch['SixrandomFullInfoPage'] =  "sixrandom"
    listsearch['qimenMainPage'] =  "qimen"
    listsearch['taiyiMainPage'] = "taiyi"
    listsearch['SixCourseMainPage'] = "sixcourse"
  };


  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      title: RouteConfig["SearchPage"].name,
    }
  };
  rowTranslateAnimatedValues = {};
  animationIsRunning=false
  componentDidMount() {
  }
  componentWillUnmount() {
  }

  onSearch = (searchText) => {

      searchText = undefined==searchText?"":searchText
      if(""!=searchText)
      {
        this.state.searchText = searchText
      }
      else if(""==searchText)
      {
        searchText=this.state.searchText
      }
      if(""==searchText && ""==this.state.searchText)
      {
        this.onSearchCancel()
        return
      }
    return new Promise(async(resolve, reject) => {
      await HistoryArrayGroup.SyncAllHistory()
      groupsearch['EightrandomMainPage'] =  HistoryArrayGroup.GetEightRandomHistory()
      groupsearch['SixrandomFullInfoPage'] =  HistoryArrayGroup.GetSixrandomHistory()
      groupsearch['qimenMainPage'] =  HistoryArrayGroup.GetQimenHistory()
      groupsearch['taiyiMainPage'] =  HistoryArrayGroup.GetTaiyiHistory()
      groupsearch['SixCourseMainPage'] =  HistoryArrayGroup.GetSixCourseHistory()
      var filterArray = []
      for(let li in groupsearch){
        //console.log("group",li,groupsearch[li])
        var g = groupsearch[li];
        g.then(ids=>{
          if (ids.length > 0) {
            for (var i = 0, len = ids.length; i < len; i++) {
              //console.log(searchText, ids[i].tip);
              if (ids[i].tip.match(searchText)) {
                ids[i].urlto = li
                ids[i].kind = listsearch[li]
                filterArray.push(ids[i])
              }
            }
          }
          //console.log("onSearch",filterArray);
          this.setState({ dataSource: filterArray })
        })
    
      }
      resolve();
    });
  }
  onSearchCancel = () => {
    return new Promise((resolve, reject) => {
      this.setState({ dataSource: [] })
      resolve();
    });
  }
  _starRow(rowData){
    var kind = listsearch[rowData.urlto]
    HistoryArrayGroup.loadid( kind,rowData.id ).then(async(ret) => {
      var Jobj = JSON.parse(ret);
      Jobj.star = true == Jobj.star ? false : true
      Jobj.sync = false
      ret = JSON.stringify(Jobj)
      let T = await UserModule.SyncFileServer(kind,rowData.id,ret)
      if(undefined!=T && 2000==T.code)
      {
        ret = HistoryArrayGroup.MakeJsonSync(ret)
      }
      await HistoryArrayGroup.saveid(kind,rowData.id, ret )
      this.onSearch()
    })
    
  }
  _updateRow(rowData) {
    console.log(rowData)
    Modal.prompt(
      '八字提示',
      '',
      (newtips: any) => this._updateStorage(rowData, newtips),
      'default',
      '',
      [rowData.tip],
    );
  };
  _updateStorage(rowData, newtips) {
    var kind = listsearch[rowData.urlto]
    HistoryArrayGroup.loadid(kind,rowData.id ).then(async(ret) => {
      var Jobj = JSON.parse(ret);
      Jobj.sync = false
      Jobj.tip = newtips;
      ret = JSON.stringify(Jobj)
      let T = await UserModule.SyncFileServer(kind,rowData.id,ret)
      if(undefined!=T && 2000==T.code)
        {
            ret = HistoryArrayGroup.MakeJsonSync(ret)
        }
      await HistoryArrayGroup.saveid(kind, rowData.id, ret )
      this.onSearch()
    })
    
  }

  _deleteRow(rowData) {
    Alert.alert(
      '提示',
      '删除: ' + rowData.name,
      [
        { text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: '删除', onPress: () => this._deletehistory(rowData) },
      ],
      { cancelable: false }
    )

  }
  async _deletehistory(rowData) {
    var kind = listsearch[rowData.urlto]
    HistoryArrayGroup.loadid(kind,  rowData.id ).then(async(ret)=>{
      var Jobj = JSON.parse(ret);
      let T = await UserModule.SyncFileServer(kind,Jobj.id,"")
        if (undefined !=T && 2000 == T.code) {
          T.data.forEach(async(element) => {
              filename = element.File
              if(-1!=filename.indexOf(String(rowData.id)))
              {
                await HistoryArrayGroup.remove( kind, rowData.id );
              }
          }); 
        }
        else
        {
          await HistoryArrayGroup.remove( kind, rowData.id );
          await HistoryArrayGroup.remove( "name", rowData.id );

        }
        this.Animaterefreshlist(rowData)
      })
      
  }
  Animaterefreshlist(rowData)
  {
    if (!this.animationIsRunning) {
      this.animationIsRunning = true;
      Animated.timing(this.rowTranslateAnimatedValues[rowData.id], { toValue: 0, duration: 500 }).start(() => {
        Animated.timing(this.rowTranslateAnimatedValues[rowData.id], { toValue: 1, duration: 10 }).start(()=>{
          this.animationIsRunning = false;
          this.onSearch()
        })
      });
    }
  }
  showTips()
  {
    if (""==this.state.searchText)
    {
      return(
        <View>
          <Text style={{fontSize:FontStyleConfig.getFontApplySize()+18,color:"#AAAAAA",textAlign:"center"}}>历史关键字</Text>
        </View>
      )
    }
  }
  render() {

    this.animationIsRunning=false
    this.rowTranslateAnimatedValues = {};
    rowlist = this.state.dataSource
    rowlist.forEach((element, i) => {
        this.rowTranslateAnimatedValues[`${element.id}`] = new Animated.Value(1);
    });
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Search
          ref="search_box"
          onSearch={this.onSearch}
          onCancel={this.onSearchCancel}
          placeholder="搜索测评"
          cancelTitle="取消"
          keyboardDismissOnSubmit={true}
          backgroundColor="#ffffff"
          titleCancelColor="#000000"
        />
        <FlatList
          //1数据的获取和渲染
          data={this.state.dataSource}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(data) => (
          <SwipeAction
              
                autoClose
                style={{ backgroundColor: 'transparent' }}
                right={[
                  {
                    text: IconConfig.IconAddTip,
                    onPress: () => this._updateRow(data.item),
                  },
                  {
                    text: IconConfig.IconDelete,
                    onPress: () => this._deleteRow(data.item),
                  },
                ]}
                left={[{
                  onPress: () => this._starRow(data.item),
                  text: IconConfig.IconAddStar,
                }]}
                onOpen={() => console.log('open')}
                onClose={() => console.log('close')}
              >
                <WingBlank size="md" >

      <View>
      <Animated.View style={
                    {
                      height: this.rowTranslateAnimatedValues[data.item.id].interpolate({
                            inputRange: [0, 1],
                            outputRange: [0,120 + (RouteConfig[data.item.urlto].name.length+data.item.tip.length)/30 * 13],
                        })
                    }} 
                    ref={ref => { this.refs[data.item.id] = ref }}
                     >
                               <TouchableHighlight
      onPress={() => navigate(data.item.urlto, data.item.url)}>
        <Card style={{ width: width - 20 ,paddingLeft:10,fontSize:FontStyleConfig.getFontApplySize()+14 }}>

          <Card.Header
            title={<Text style={{fontSize:FontStyleConfig.getFontApplySize()+14}}>{data.item.ret}</Text>}
            //thumbStyle={{ width: 30, height: 30 }}
            thumb={true == data.item.star ? IconConfig.IconStar : IconConfig.IconUStar}
            extra={data.item.time}
          />
          <Card.Body>
            <View >
              <Text style={{ marginLeft: 16,marginRight: 16 }}>{RouteConfig[data.item.urlto].name}：{data.item.tip}</Text>
            </View>
          </Card.Body>
          <Card.Footer content="" extra={data.item.name} />
          
        </Card>
        </TouchableHighlight>
        </Animated.View>
      </View>

    </WingBlank>
    </SwipeAction>)}/>  
    <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        {this.showTips()}
        <WhiteSpace size="xl" />
        <Text style={{fontSize:FontStyleConfig.getFontApplySize()+11,color:"#DDDDDD",textAlign:"center"}}>--end--</Text>
    </View>)}

}

var styles = StyleSheet.create ({
  container: {
    flex:1
  },
  list:{
    height:45,
    //borderWidth:1,
    marginLeft: 10,
    paddingLeft:10,
    //borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    //textAlign:'center', 
    //textDecorationLine:'underline'
  },
    
  delete:{
    color:"#d8fffa",
    marginLeft:30,
    alignItems:'flex-start',//水平靠右
},
rowFront: {
  alignItems: 'center',
  backgroundColor: 'white',
  borderBottomColor: 'black',
  borderBottomWidth: 0,
  justifyContent: 'center',
  height: 120,
},
rowBack: {
  alignItems: 'center',
  //backgroundColor: '#DDD',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingLeft: 15,
},
backRightBtn: {
  alignItems: 'center',
  bottom: 0,
  justifyContent: 'center',
  position: 'absolute',
  top: 0,
  width: 75
},
backLeftBtnLeft: {
  //backgroundColor: 'blue',
  left:0 
},
backRightBtnLeft: {
  //backgroundColor: 'blue',
  right: 75
},
backRightBtnRight: {
  //backgroundColor: 'red',
  right: 0
},
controls: {
  alignItems: 'center',
  marginBottom: 30
},
switchContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  marginBottom: 5

}
});

module.exports = SearchPage;  