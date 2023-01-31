


import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, TouchableHighlight, ScrollView, Text, FlatList } from 'react-native';
import RouteConfig from './../../config/RouteConfig'
import IconConfig from './../../config/IconConfig'
import ScreenConfig from './../../config/ScreenConfig'
import { StyleConfig, FontStyleConfig } from './../../config/StyleConfig';
import TabNavigator from '@lunarhook/react-native-tab-navigator';
import { Card, Button, Checkbox, WingBlank, WhiteSpace, List, InputItem, Icon } from '@ant-design/react-native';
const { width, height } = Dimensions.get('window');
import WechatShare from './../../config/WechatShare'
import NameToolsModule from './NameToolsModule'


class NamePage extends React.Component {
  constructor(props) {
    super(props);
    var filter = new Array()
    filter.push(true),
      filter.push(true),
      filter.push(true),
      filter.push(true),
      filter.push(true),
      this.state = {
        dataSource: [],
        nameinfo: "",
        searchText: "",
        selectfilter: filter,
      };
  };

  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;

    return {
      title: RouteConfig["NamePage"].titlename,
    }
  };

  rowTranslateAnimatedValues = {};
  animationIsRunning = false
  componentDidMount() {
    this.buildname()
  }
  componentWillUnmount() {
  }




  buildname() {
    const n = 3;
    const html = [];
    const filter = "木火土金水"
    var check = ""
    this.state.selectfilter.forEach((it, index) => {
      if (it) {
        check = check.concat(filter[index])
      }
    })
    var count = 0
    while (html.length < 3 && count < 30) {
      count++
      const nameObj = NameToolsModule.genName();

      if (null != nameObj) {
        try {
          var test1 = JSON.parse(nameObj.fx[0])
          var test2 = JSON.parse(nameObj.fx[1])
          if (-1 != check.indexOf(test1.feature) || -1 != check.indexOf(test2.feature)) { html.push(JSON.stringify(nameObj)) }
        } catch (e) {
        }
      }
    }
    this.setState({ dataSource: html,nameinfo:"" })
  }
  renderItem = ({ item }) => {

    item = JSON.parse(item)
    const elements = [];

    try {
      item.fx.forEach(element => {
        var obj = JSON.parse(element)
        var color = 'black'
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
        elements.push(<Text style={{ marginLeft: 16, fontSize: FontStyleConfig.getFontApplySize() + 14 , color: color}}>{obj.text + " " + obj.feature + "属性,笔画:" + obj.step + ",五行补" + obj.feature}</Text>)
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
            <Text style={{ marginLeft: 16, fontSize: FontStyleConfig.getFontApplySize() + 14 }}>{"《" + item.title + "》"}</Text>
            <Text></Text>
            <Text style={{ marginLeft: 16, fontSize: FontStyleConfig.getFontApplySize() + 14 }}>{item.sentence}</Text>

          </View>
        </Card.Body>
        <Card.Footer
          content={<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 14 }}>{"繁体: " + item.tname}</Text>}
          extra={item.book + (item.author != null ? "·" + item.author : "")} />
      </Card><Text></Text>

    </View>)
  }
  onselect(i) {
    i = Number(i)
    var selectfilter = [...this.state.selectfilter]
    selectfilter[i] = !selectfilter[i]
    var test = false
    selectfilter.forEach(element => {
      test = element || test
    });

    if (true == test) {
      console.log(i, selectfilter)
      this.setState({ selectfilter: selectfilter })
    }

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
          <WingBlank>
          <WhiteSpace size="xl" />
          <Text style={styles.textbutton}>动态分析名字五行</Text>
          <WhiteSpace size="xl" />
          <InputItem
            clear
            type="text"
            maxLength={12}
            value={this.state.nameinfo}
            style={{fontSize:14}}
            onChange={(value: any) => {
              this.setState({ nameinfo: this.updatename(value) })
            }}
          >
            <Text style={styles.textbutton}>名字:</Text>
          </InputItem>

            <WhiteSpace size="xl" />
            <View style={{ flexDirection: 'row' }}>
              <Checkbox onChange={() => this.onselect(0)} checked={this.state.selectfilter[0]}>木</Checkbox >
              <Checkbox onChange={() => this.onselect(1)} checked={this.state.selectfilter[1]}>火</Checkbox>
              <Checkbox onChange={() => this.onselect(2)} checked={this.state.selectfilter[2]}>土</Checkbox>
              <Checkbox onChange={() => this.onselect(3)} checked={this.state.selectfilter[3]}>金</Checkbox>
              <Checkbox onChange={() => this.onselect(4)} checked={this.state.selectfilter[4]}>水</Checkbox>

            </View>
            <WhiteSpace size="xl" />
            <FlatList
              //1数据的获取和渲染
              data={this.state.dataSource}
              extraData={this.state}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this.renderItem} />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            {
              (WechatShare.shareimg(this.state.shareimg))
            }
            <WhiteSpace size="xl" />
          </WingBlank>
        </ScrollView>
        <TabNavigator tabBarStyle={{ height: ScreenConfig.getTabBarHeight(), backgroundColor: '#ffffff', }}>
          <TabNavigator.Item
            title={RouteConfig["RefreshImage"].name}
            renderIcon={() => RouteConfig["RefreshImage"].icon}
            //renderSelectedIcon={() => IconConfig.IconDvinationSel}
            onPress={() => this.buildname()}
            titleStyle={StyleConfig.menufont}>
          </TabNavigator.Item>
          <TabNavigator.Item
            title={RouteConfig["ScreenImage"].name}
            renderIcon={() => RouteConfig["ScreenImage"].icon}
            onPress={() => {
              this.setState({ shareimg: true }),
              WechatShare.snapshot(this.refs['location'], "乾坤爻", this)
            }}
            titleStyle={StyleConfig.menufont}>
          </TabNavigator.Item>

        </TabNavigator >
      </View>)
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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

module.exports = NamePage;  