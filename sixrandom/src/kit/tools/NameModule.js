


import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, TouchableHighlight, ScrollView, Text, FlatList, Animated } from 'react-native';
import RouteConfig from './../../config/RouteConfig'
import IconConfig from './../../config/IconConfig'
import { Card, Button, Modal, WingBlank, WhiteSpace, List, InputItem, Icon } from '@ant-design/react-native';
import TabNavigator from '@lunarhook/react-native-tab-navigator';  
import ScreenConfig from './../../config/ScreenConfig';
import NameToolsModule from './NameToolsModule'
import { StyleConfig, FontStyleConfig } from './../../config/StyleConfig';
import WechatShare from './../../config/WechatShare'
const { width, height } = Dimensions.get('window');


class NameModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      nameinfo: "",
    };
  };

  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      title: RouteConfig["NameModule"].titlename,
    }
  };

  componentDidMount() {
  }
  componentWillUnmount() {
  }
  renderItem = ({ item }) => {

    item = JSON.parse(item)
    const elements = [];

    try {
      item.fx.forEach(element => {
        obj = JSON.parse(element)
        if ("木"==obj.feature) {
          color='green'
        }
        if ("火"==obj.feature) {
          color='red'
        }
        if ("土"==obj.feature) {
          color='#8B4513'
        }
        if ("金"==obj.feature) {
          color='#DAA520'
        }
        if ("水"==obj.feature) {
          color='#1E90FF'
        }
        elements.push(<Text style={{ marginLeft: 16, fontSize: FontStyleConfig.getFontApplySize() + 14, color: color}}>{obj.text + " " + obj.feature + "属性,笔画:" + obj.step + ",五行补" + obj.feature}</Text>)
      })
    } catch (e) {
      elements.pop()
      console.log(e)
    }

    return (<View>
      <Card>
        <Card.Header
          title={<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14 }}>{item.name + " " + item.py}</Text>}

        />
        <Card.Body>
          <View >
            {elements}
            <Text></Text>
          </View>
        </Card.Body>
        <Card.Footer
          content={<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14 }}>{"繁体: " + item.tname}</Text>}
          extra="" />
      </Card><Text></Text>

    </View>)
  }
  updatename(value) {
    const html = [];
    var nameObj = NameToolsModule.genName(value);
    if (null != nameObj) { html.push(JSON.stringify(nameObj)) }
    this.setState({ dataSource: html })
    return value
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView ref="location" style={{ backgroundColor: '#ffffff' }}>
          <WhiteSpace size="xl" />
          <Text style={styles.textbutton}>动态分析名字五行</Text>
          <WhiteSpace size="xl" />
          <InputItem
            clear
            type="text"
            maxLength={12}
            value={this.state.nameinfo}
            onChange={(value: any) => {
              this.setState({ nameinfo: this.updatename(value) })
            }}
          >
            名字:
          </InputItem>

          <WingBlank>
            <FlatList
              //1数据的获取和渲染
              data={this.state.dataSource}
              extraData={this.state}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this.renderItem} />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            {(WechatShare.shareimg(this.state.shareimg))}
            <WhiteSpace size="xl" />
          </WingBlank>
        </ScrollView>
        <TabNavigator tabBarStyle={{ height: ScreenConfig.getTabBarHeight(), backgroundColor: '#ffffff', }}>
          <TabNavigator.Item
            title={RouteConfig["ScreenImage"].name}
            renderIcon={() => RouteConfig["ScreenImage"].icon}
            onPress={() => {
              this.setState({ shareimg: true }),
              WechatShare.snapshot(this.refs['location'], "乾坤爻", this)
            }}
            titleStyle={StyleConfig.menufont}>
          </TabNavigator.Item>
        </TabNavigator>
      </View>)
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textbutton: {
    textAlign: 'center',
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
  inputpicker: {

    marginLeft: 15,
    marginRight: 15,
    marginTop: 50,
  },
});

module.exports = NameModule;  