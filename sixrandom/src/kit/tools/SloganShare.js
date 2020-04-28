
import React, { Component } from 'react';
import { Animated,  View, Text,StyleSheet ,ScrollView,Dimensions,Image} from 'react-native';
import RouteConfig from './../../config/RouteConfig'
import { appinfo, appname } from './../../config/appinfo'
import { Grid, Card, WhiteSpace, WingBlank, List } from '@ant-design/react-native';
import TabNavigator from 'react-native-tab-navigator';  
import sloganshow from './../../config/SloganModule'
import ScreenConfig from './../../config/ScreenConfig';
import {StyleConfig,FontStyleConfig} from './../../config/StyleConfig';
import WechatShare from './../../config/WechatShare'
let thiscontrollor = null
const { width, height } = Dimensions.get('window');

var shareimg = new Array()

class SloganShare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cur: Math.floor(Math.random() * 10000),
      shareimg: false,
      fadeInOpacity: new Animated.Value(0),
      imgindex:Math.floor(Math.random() * shareimg.length)
    };
    this.random()
    thiscontrollor = this
  };

  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      title: RouteConfig["SloganShare"].titlename,
    }
  };
  UNSAFE_componentWillMount() {
    shareimg[0] = require('../../../img/time/slogan/1.jpg')
    shareimg[1] = require('../../../img/time/slogan/2.jpg')
    shareimg[2] = require('../../../img/time/slogan/3.jpg')
    shareimg[3] = require('../../../img/time/slogan/4.jpg')
    shareimg[4] = require('../../../img/time/slogan/5.jpg')
    shareimg[5] = require('../../../img/time/slogan/6.jpg')
    shareimg[6] = require('../../../img/time/slogan/7.jpg')
    shareimg[7] = require('../../../img/time/slogan/8.jpg')
    shareimg[8] = require('../../../img/time/slogan/9.jpg')
    shareimg[9] = require('../../../img/time/slogan/10.jpg')
    shareimg[10] = require('../../../img/time/slogan/11.jpg')
    shareimg[11] = require('../../../img/time/slogan/12.jpg')
    shareimg[12] = require('../../../img/time/slogan/13.jpg')
    shareimg[13] = require('../../../img/time/slogan/14.jpg')
    shareimg[14] = require('../../../img/time/slogan/15.jpg')
    shareimg[15] = require('../../../img/time/slogan/16.jpg')
  }
  random() {
    this.timer = setInterval(() => {
      var cur = Math.floor(Math.random() * 10000)
      this.setState({ cur: cur, fadeInOpacity: new Animated.Value(0) ,imgindex:Math.floor(Math.random() * shareimg.length)})
    }, 1000 * 6);
  }
  componentWillUnmount() {
    shareimg = []
    this.timer && clearInterval(this.timer);
  }

  pause(any) {
    thiscontrollor.setState({fadeInOpacity: new Animated.Value(1) })
  }
  render() {
    let anim = Animated.sequence([ Animated.timing(this.state.fadeInOpacity, { toValue: 1, duration: 1000, }),  Animated.delay(3000), Animated.timing(this.state.fadeInOpacity, { toValue: 0, duration: 2000 }) ])
      
    if (false == this.state.shareimg) {
      this.timer && clearInterval(this.timer);
      this.random();
      anim.start()
    }
    var imgindex = shareimg[this.state.imgindex]
    var item = sloganshow.getitem(this.state.cur)
    return (

      <View style={styles.container}>
        <ScrollView ref="location" style={{ backgroundColor: '#ffffff' }}>
        <View style={styles.container} >
          <WingBlank size="lg">
            <Text></Text>
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
            <Card style={{ width: width - 20, borderColor: "#ffffff"  }}>
              <View >
                <Animated.View style={{ opacity: this.state.fadeInOpacity }}>
                <View style={{ alignItems:"center"}}>
                <Image
                  style={{ width: width - 80, height: height - 400, borderRadius: 5}}
                  source={imgindex}
                />
                </View>
                  <Text style={{ marginLeft: 32, marginRight: 32,lineHeight:40, borderColor: "#ffffff" }}>
                    {item.contect}
                  </Text>
                  <Text></Text>
                  <Text style={{ textAlign: "right", marginRight: 32,lineHeight:40, borderColor: "#ffffff" }}>
                    {item.name}
                  </Text>
                </Animated.View>
              </View>
            </Card>
          </WingBlank>
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />

          {(WechatShare.shareimg(this.state.shareimg))}
          <WhiteSpace size="xl" />
          </View>
        </ScrollView>
        <TabNavigator tabBarStyle={{ height: ScreenConfig.getTabBarHeight() , backgroundColor: '#ffffff',}}>
          <TabNavigator.Item
            title={RouteConfig["ScreenImage"].name}
            renderIcon={() => RouteConfig["ScreenImage"].icon}
            onPress={() => {  this.setState({ shareimg: true }), 
                              this.timer && clearInterval(this.timer), 
                              this.state.fadeInOpacity.stopAnimation(this.pause),
                              WechatShare.snapshot(this.refs['location'], "乾坤爻", this) }}
            titleStyle={StyleConfig.menufont}>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
});
module.exports = SloganShare;  