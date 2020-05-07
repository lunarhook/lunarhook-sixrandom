

import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions, Alert, Text, FlatList ,Animated} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Search from 'react-native-search-box';

import { Card, Toast, Modal, WingBlank, WhiteSpace, List, SwipeAction, Icon } from '@ant-design/react-native';
import IconConfig from '../../../config/IconConfig'
import ScreenConfig from '../../../config/ScreenConfig';
import {HistoryArrayGroup} from '../../../config/StorageModule'
import UserModule from '../../../config/UserModule'
import { dateAdd } from '../solar2lunar/chinese-lunar';
import {StyleConfig,FontStyleConfig} from '../../../config/StyleConfig';
//import FingerprintScanner from 'react-native-fingerprint-scanner';
//import Fingerprintstyles from '../../../fingerprint/Application.container.styles';
//import FingerprintPopup from '../../../fingerprint/FingerprintPopup.component';
const { width, height } = Dimensions.get('window');

class EightrandomHistoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      errorMessage: undefined,
      popupShowed: false,
      dataSource:[],
    };
  }
  rowTranslateAnimatedValues = {};
  animationIsRunning=false
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;

    return {
    title:RouteConfig["EightrandomHistoryPage"].name,
  };
}

  /*
  handleFingerprintShowed = () => {
    this.setState({ popupShowed: true });
  };

  handleFingerprintDismissed = (any) => {
    this.setState({ popupShowed: false });
    if(false==any)
    {
      this.props.navigation.goBack()
    }
    else
    {
      this.timer = setTimeout(
        () => {
          this.refreshlist()
        },
        200
      );
    }
    
  };
  */

  componentDidMount() {
    this.refreshlist()
    /*
    FingerprintScanner
    .isSensorAvailable()
    .then(
      this.handleFingerprintShowed()
    )
    .catch(
      error =>{
        if(error.name == "FingerprintScannerNotSupported")
        {this.handleFingerprintDismissed(true)}
      }
    );
    */
  }

  componentWillUnmount() {
    // 如果存在this.timer，则使用clearTimeout清空。
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    //FingerprintScanner.release();
    this.timer && clearInterval(this.timer);
  }
  _starRow(rowData){
    HistoryArrayGroup.loadid( 'eightrandom',rowData.id ).then(async(ret) => {
      var Jobj = JSON.parse(ret);
      Jobj.star = true == Jobj.star ? false : true
      Jobj.sync = false
      ret = JSON.stringify(Jobj)
      let T = await UserModule.SyncFileServer("eightrandom",rowData.id,ret)
      if(undefined!=T && 2000==T.code)
      {
        ret = HistoryArrayGroup.MakeJsonSync(ret)
      }
      await HistoryArrayGroup.saveid('eightrandom',rowData.id, ret )
      this.refreshlist();
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
    HistoryArrayGroup.loadid( 'eightrandom',rowData.id ).then(async(ret) => {
      var Jobj = JSON.parse(ret);
      Jobj.sync = false
      Jobj.tip = newtips;
      ret = JSON.stringify(Jobj)
      let T = await UserModule.SyncFileServer("eightrandom",rowData.id,ret)
      if(undefined!=T && 2000==T.code)
        {
            ret = HistoryArrayGroup.MakeJsonSync(ret)
        }
      await HistoryArrayGroup.saveid('eightrandom', rowData.id, ret )
      this.refreshlist();
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
    HistoryArrayGroup.loadid('eightrandom', rowData.id).then(async (ret) => {
      var Jobj = JSON.parse(ret);
      let T = await UserModule.SyncFileServer("eightrandom", Jobj.id, "")
      if (undefined != T && 2000 == T.code) {
        T.data.forEach(async (element) => {
          filename = element.File
          if (-1 != filename.indexOf(String(rowData.id))) {
            await HistoryArrayGroup.remove("eightrandom", rowData.id);
          }
        });
      }
      else {
        await HistoryArrayGroup.remove("eightrandom", rowData.id);
        await HistoryArrayGroup.remove("name", rowData.id);
      }
      this.Animaterefreshlist(rowData)
    })
  }
  Animaterefreshlist(rowData) {
    if (!this.animationIsRunning) {
      this.animationIsRunning = true;
      Animated.timing(this.rowTranslateAnimatedValues[rowData.id], { toValue: 0, duration: 500 }).start(() => {
        Animated.timing(this.rowTranslateAnimatedValues[rowData.id], { toValue: 1, duration: 10 }).start(() => {
          this.animationIsRunning = false;
          this.refreshlist();
        })
      });
    }
  }

  refreshlist() {
      HistoryArrayGroup.GetEightRandomHistory().then(ids=>{
        if (ids.length == 0) {
          ScreenConfig.DeviceToast("暂无历史数据")
          this.props.navigation.goBack()
          return
        }
        this.setState({dataSource: ids})
      })
  }


  onSearch = (searchText) => {
    return new Promise((resolve, reject) => {
        if(this.state.dataSource.length>0)
        {
          var filterArray = []
          for (var i = 0, len = this.state.dataSource.length; i < len; i++) {
            console.log(searchText,this.state.dataSource[i].name);
            if (this.state.dataSource[i].tip.match(searchText)) {
              filterArray.push(this.state.dataSource[i])
            }
          }
          this.setState({dataSource:filterArray})
        }
        resolve();
    });
}
  onSearchCancel= () => {
    return new Promise((resolve, reject) => {
      HistoryArrayGroup.GetEightRandomHistory().then(ids=>{
          this.setState({dataSource: ids})
          
        })
        resolve();
    });
}
changeViewLayout(e,data) {
  h = e.nativeEvent.layout.height
  /*
  var it = this.refs[data.item.id]
  console.log("changeViewLayout",it)
  
  this.refs[data.item.id].setNativeProps({
      style:{height: this.rowTranslateAnimatedValues[data.item.id].interpolate({
            inputRange: [0, 1],
            outputRange: [0,h],})
    }})
  */  

}

onPress(item){
  const { navigate } = this.props.navigation;
  if(10==item.ret.length)
  {
    navigate('ziweiMainPage', item.url)
  }
  if(8==item.ret.length)
  {
    navigate('EightrandomMainPage', item.url)
  }
}

  render() {
    this.animationIsRunning=false
    this.rowTranslateAnimatedValues = {};
    rowlist = this.state.dataSource
    rowlist.forEach((element, i) => {
        this.rowTranslateAnimatedValues[`${element.id}`] = new Animated.Value(1);
    });
    const { errorMessage, popupShowed } = this.state;
    const { navigate } = this.props.navigation;
    return(
      <View>
        <Search
          ref="search_box"
          onSearch={this.onSearch}
          onCancel={this.onSearchCancel}
          //defaultValue="搜索"
          placeholder="搜索"
          cancelTitle="取消"
          //returnKeyType="搜索"
          keyboardDismissOnSubmit={true}
          backgroundColor="#ffffff"
          titleCancelColor="#000000"
          /**
          * There many props that can customizable
          * Please scroll down to Props section
          */
        />
        <FlatList
          useFlatList={true}
          //1数据的获取和渲染
          data={this.state.dataSource}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(data,index) => (
            <View >
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
                  <View onLayout={(e)=>this.changeViewLayout(e,data)}>
                <Animated.View style={
                    {
                      height: this.rowTranslateAnimatedValues[data.item.id].interpolate({
                            inputRange: [0, 1],
                            outputRange: [0,120 + (data.item.tip.length)/30 * 13],
                        })
                    }} 
                    ref={ref => { this.refs[data.item.id] = ref }}
                     >
                <Card style={{ width: width - 20,paddingLeft:10 } } >
                  <TouchableOpacity onPress={()=>{this.onPress(data.item)}}>
                    <Card.Header
                      title={<Text style={{fontSize:FontStyleConfig.getFontApplySize()+14}}>{data.item.ret}</Text>}
                      //thumbStyle={{ width: 30, height: 30 }}
                      thumb={true == data.item.star ? IconConfig.IconStar : IconConfig.IconUStar}
                      extra={<Text style={{fontSize:FontStyleConfig.getFontApplySize()+14}}>{data.item.time}</Text>} />
                    <Card.Body>
                      <View >
                        <Text style={{fontSize:FontStyleConfig.getFontApplySize()+14, marginLeft: 16,marginRight:16}}>{data.item.name}:{data.item.tip}</Text>
                      </View>
                    </Card.Body>
                    <Card.Footer content="" extra={<Text style={{fontSize:FontStyleConfig.getFontApplySize()+14}}>{data.item.birth}</Text>}/>
                  </TouchableOpacity>
                </Card>
                </Animated.View>
                </View>
                </WingBlank>
              </SwipeAction>
              <WhiteSpace size="xs" />
            </View>
          )}
        />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <Text style={{fontSize:FontStyleConfig.getFontApplySize()+11,color:"#DDDDDD",textAlign:"center"}}>--end--</Text>
        <WhiteSpace size="xl" />
      </View>
 
    )
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    height: 45,
    //borderWidth:1,
    marginLeft: 10,
    paddingLeft: 10,
    //borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    //textAlign:'center', 
    //textDecorationLine:'underline'
  },
  
  delete: {
    color: "#d8fffa",
    marginLeft: 30,
    alignItems: 'flex-start',//水平靠右
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
    left: 0
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
module.exports = EightrandomHistoryPage;  