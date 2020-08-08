
import React, { Component } from 'react';
import { AppRegistry,  View, Text, Animated,Image ,Dimensions} from 'react-native';
import RouteConfig from './config/RouteConfig'
import { appinfo, appname } from './config/appinfo'
import { Grid, Card, WhiteSpace, WingBlank, List } from '@ant-design/react-native';
import sloganshow from './config/SloganModule'
import {SixrandomModule} from './kit/UniversechangesLib/SixrandomLib/SixrandomModule'
import {FontStyleConfig} from './config/StyleConfig';
var {height, width} = Dimensions.get('window')





class slogan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeInOpacity: new Animated.Value(0)
    };
    (async()=>{
      await FontStyleConfig.reload()
    })()
    this.imgtime = undefined
  };

  UNSAFE_componentWillMount()
  {
    this.imgtime = new Array()
    this.imgtime["子"] = require('../img/time/1s.jpg')
    this.imgtime["丑"] = require('../img/time/2s.jpg')
    this.imgtime["寅"] = require('../img/time/3s.jpg')
    this.imgtime["卯"] = require('../img/time/4s.jpg')
    this.imgtime["辰"] = require('../img/time/5s.jpg')
    this.imgtime["巳"] = require('../img/time/6s.jpg')
    this.imgtime["午"] = require('../img/time/7s.jpg')
    this.imgtime["未"] = require('../img/time/8s.jpg')
    this.imgtime["申"] = require('../img/time/9s.jpg')
    this.imgtime["酉"] = require('../img/time/10s.jpg')
    this.imgtime["戌"] = require('../img/time/11s.jpg')
    this.imgtime["亥"] = require('../img/time/12s.jpg')
  }
  componentDidMount() {
    var keys = AppRegistry.getAppKeys();
    if (true == __DEV__) {
      //this.props.navigation.navigate(keys[0])
    }
    this.timer = setTimeout(() => {
      //console.log("test",keys[0])
      this.props.navigation.navigate(keys[0])
      //this.props.navigation.navigate("kitPage")
    }, 1000 * 4);
  }
  componentWillUnmount() {
    delete this.imgtime 
    // 如果存在this.timer，则使用clearTimeout清空。
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    this.timer && clearInterval(this.timer);
  }
  render() {
    var wanNianLiInfo = SixrandomModule.lunarsix();
    var curtimelucky = wanNianLiInfo.info.gzTime
    var imgindex = this.imgtime[curtimelucky[1]]
    Animated.sequence([Animated.timing(this.state.fadeInOpacity, { toValue: 1, duration: 1000 }), Animated.delay(2000), Animated.timing(this.state.fadeInOpacity, { toValue: 0, duration: 1000 })]).start()
    var cur = Math.floor(Math.random() * 10000)
    var item = sloganshow.getitem(cur)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" ,backgroundColor: "#ffffff"}}>
        <WhiteSpace size="xl" />
        <WingBlank size="lg">
          <Card style={{ width: width - 20, borderColor: "#ffffff" }}>
            <View >
              <Animated.View style={{ opacity: this.state.fadeInOpacity }}>
                <Image
                  style={{ width: width - 20, height: height - 200, borderRadius: 5 }}
                  source={imgindex}
                />
                <Text style={{ marginLeft: 32, marginRight: 32, lineHeight: 24, borderColor: "#ffffff" }}>
                  {item.contect}
                </Text>
                <Text style={{ textAlign: "right", marginRight: 32, lineHeight: 24, borderColor: "#ffffff" }}>
                  {item.name}
                </Text>
              </Animated.View>
            </View>
          </Card>
        </WingBlank>
        <WhiteSpace size="xl" />
      </View>
    );
  }
}

module.exports = slogan;  