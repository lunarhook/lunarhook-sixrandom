
import React, {Component} from "react";
import {Text, View, Image, Dimensions} from "react-native";
import CompassHeading from 'react-native-compass-heading';
import { element } from "prop-types";
const {height, width} = Dimensions.get("window");
var montain = new Array()
//午山
montain.push({d1:172.5,d2:175.5,jian:"午子兼向",jin:"甲午"})
montain.push({d1:175.5,d2:178.5,jian:"午山子向",jin:"丙午"})
montain.push({d1:178.5,d2:181.5,jian:"午山子向",jin:"戊午"})
montain.push({d1:181.5,d2:184.5,jian:"午山子向",jin:"庚午"})
montain.push({d1:184.5,d2:187.5,jian:"午子兼向",jin:"壬午"})
//丁山
montain.push({d1:185.5,d2:190.5,jian:"丁癸兼向",jin:"甲午"})
montain.push({d1:190.5,d2:193.5,jian:"丁山癸向",jin:"丙午"})
montain.push({d1:193.5,d2:196.5,jian:"丁山癸向",jin:"戊午"})
montain.push({d1:196.5,d2:199.5,jian:"丁山癸向",jin:"庚午"})
montain.push({d1:199.5,d2:202.5,jian:"丁癸兼向",jin:"壬午"})
//未山
montain.push({d1:202.5,d2:205.5,jian:"未丑兼向",jin:"乙未"})
montain.push({d1:205.5,d2:208.5,jian:"未山丑向",jin:"丁未"})
montain.push({d1:208.5,d2:211.5,jian:"未山丑向",jin:"己未"})
montain.push({d1:211.5,d2:214.5,jian:"未山丑向",jin:"辛未"})
montain.push({d1:214.5,d2:217.5,jian:"未丑兼向",jin:"癸未"})
//坤山
montain.push({d1:217.5,d2:220.5,jian:"坤艮兼向",jin:"乙未"})
montain.push({d1:220.5,d2:223.5,jian:"坤山艮向",jin:"丁未"})
montain.push({d1:223.5,d2:226.5,jian:"坤山艮向",jin:"己未"})
montain.push({d1:226.5,d2:229.5,jian:"坤山艮向",jin:"辛未"})
montain.push({d1:229.5,d2:232.5,jian:"坤艮兼向",jin:"癸未"})
//申山
montain.push({d1:232.5,d2:235.5,jian:"申寅兼向",jin:"甲申"})
montain.push({d1:235.5,d2:238.5,jian:"申山寅向",jin:"丙申"})
montain.push({d1:238.5,d2:241.5,jian:"申山寅向",jin:"戊申"})
montain.push({d1:241.5,d2:244.5,jian:"申山寅向",jin:"庚申"})
montain.push({d1:244.5,d2:247.5,jian:"申寅兼向",jin:"壬申"})
//庚山
montain.push({d1:247.5,d2:250.5,jian:"庚甲兼向",jin:"甲申"})
montain.push({d1:250.5,d2:253.5,jian:"庚山甲向",jin:"丙申"})
montain.push({d1:253.5,d2:256.5,jian:"庚山甲向",jin:"戊申"})
montain.push({d1:256.5,d2:259.5,jian:"庚山甲向",jin:"庚申"})
montain.push({d1:259.5,d2:262.5,jian:"庚甲兼向",jin:"壬申"})
//酉山
montain.push({d1:262.5,d2:265.5,jian:"酉卯兼向",jin:"乙酉"})
montain.push({d1:265.5,d2:268.5,jian:"酉山卯向",jin:"丁酉"})
montain.push({d1:268.5,d2:271.5,jian:"酉山卯向",jin:"己酉"})
montain.push({d1:271.5,d2:274.5,jian:"酉山卯向",jin:"辛酉"})
montain.push({d1:274.5,d2:277.5,jian:"酉卯兼向",jin:"癸酉"})
//辛山
montain.push({d1:277.5,d2:280.5,jian:"辛乙兼向",jin:"乙酉"})
montain.push({d1:280.5,d2:283.5,jian:"辛山乙向",jin:"丁酉"})
montain.push({d1:283.5,d2:286.5,jian:"辛山乙向",jin:"己酉"})
montain.push({d1:286.5,d2:289.5,jian:"辛山乙向",jin:"辛酉"})
montain.push({d1:289.5,d2:292.5,jian:"辛乙兼向",jin:"癸酉"})
//戌山
montain.push({d1:292.5,d2:295.5,jian:"戌辰兼向",jin:"甲戌"})
montain.push({d1:295.5,d2:298.5,jian:"戌山辰向",jin:"丙戌"})
montain.push({d1:298.5,d2:301.5,jian:"戌山辰向",jin:"戊戌"})
montain.push({d1:301.5,d2:304.5,jian:"戌山辰向",jin:"庚戌"})
montain.push({d1:304.5,d2:307.5,jian:"戌辰兼向",jin:"壬戌"})
//乾山
montain.push({d1:307.5,d2:310.5,jian:"乾巽兼向",jin:"甲戌"})
montain.push({d1:310.5,d2:313.5,jian:"乾山巽向",jin:"丙戌"})
montain.push({d1:313.5,d2:316.5,jian:"乾山巽向",jin:"戊戌"})
montain.push({d1:316.5,d2:319.5,jian:"乾山巽向",jin:"庚戌"})
montain.push({d1:319.5,d2:322.5,jian:"乾巽兼向",jin:"壬戌"})
//亥山
montain.push({d1:322.5,d2:325.5,jian:"亥巳兼向",jin:"乙亥"})
montain.push({d1:325.5,d2:328.5,jian:"亥山巳向",jin:"丁亥"})
montain.push({d1:328.5,d2:331.5,jian:"亥山巳向",jin:"己亥"})
montain.push({d1:331.5,d2:334.5,jian:"亥山巳向",jin:"辛亥"})
montain.push({d1:334.5,d2:337.5,jian:"亥巳兼向",jin:"癸亥"})
//壬山
montain.push({d1:337.5,d2:340.5,jian:"壬丙兼向",jin:"乙亥"})
montain.push({d1:340.5,d2:343.5,jian:"壬山丙向",jin:"丁亥"})
montain.push({d1:343.5,d2:346.5,jian:"壬山丙向",jin:"己亥"})
montain.push({d1:346.5,d2:349.5,jian:"壬山丙向",jin:"辛亥"})
montain.push({d1:349.5,d2:352.5,jian:"壬丙兼向",jin:"癸亥"})
//子山
montain.push({d1:352.5,d2:355.5,jian:"子午兼向",jin:"甲子"})
montain.push({d1:355.5,d2:358.5,jian:"子山午向",jin:"丙子"})
montain.push({d1:358.5,d2:360,jian:"子山午向",jin:"戊子"})
montain.push({d1:0,d2:1.5,jian:"子山午向",jin:"戊子"})
montain.push({d1:1.5,d2:4.5,jian:"子山午向",jin:"庚子"})
montain.push({d1:4.5,d2:7.5,jian:"子午兼向",jin:"壬子"})
//癸山
montain.push({d1:7.5,d2:10.5,jian:"癸丁兼向",jin:"甲子"})
montain.push({d1:10.5,d2:13.5,jian:"癸山丁向",jin:"丙子"})
montain.push({d1:13.5,d2:16.5,jian:"癸山丁向",jin:"戊子"})
montain.push({d1:16.5,d2:19.5,jian:"癸山丁向",jin:"庚子"})
montain.push({d1:19.5,d2:22.5,jian:"癸丁兼向",jin:"壬子"})
//丑山
montain.push({d1:22.5,d2:25.5,jian:"丑未兼向",jin:"乙丑"})
montain.push({d1:25.5,d2:28.5,jian:"丑山未向",jin:"丁丑"})
montain.push({d1:28.5,d2:31.5,jian:"丑山未向",jin:"己丑"})
montain.push({d1:31.5,d2:34.5,jian:"丑山未向",jin:"辛丑"})
montain.push({d1:34.5,d2:37.5,jian:"丑未兼向",jin:"癸丑"})
//艮山
montain.push({d1:37.5,d2:40.5,jian:"艮坤兼向",jin:"乙丑"})
montain.push({d1:40.5,d2:43.5,jian:"艮山坤向",jin:"丁丑"})
montain.push({d1:43.5,d2:46.5,jian:"艮山坤向",jin:"己丑"})
montain.push({d1:46.5,d2:49.5,jian:"艮山坤向",jin:"辛丑"})
montain.push({d1:49.5,d2:52.5,jian:"艮坤兼向",jin:"癸丑"})
//寅山
montain.push({d1:52.5,d2:55.5,jian:"寅申兼向",jin:"甲寅"})
montain.push({d1:55.5,d2:58.5,jian:"寅山申向",jin:"丙寅"})
montain.push({d1:58.5,d2:61.5,jian:"寅山申向",jin:"戊寅"})
montain.push({d1:61.5,d2:64.5,jian:"寅山申向",jin:"庚寅"})
montain.push({d1:64.5,d2:67.5,jian:"寅申兼向",jin:"壬寅"})
//甲山
montain.push({d1:67.5,d2:70.5,jian:"甲庚兼向",jin:"甲寅"})
montain.push({d1:70.5,d2:73.5,jian:"甲山庚向",jin:"丙寅"})
montain.push({d1:73.5,d2:76.5,jian:"甲山庚向",jin:"戊寅"})
montain.push({d1:76.5,d2:79.5,jian:"甲山庚向",jin:"庚寅"})
montain.push({d1:79.5,d2:82.5,jian:"甲庚兼向",jin:"壬寅"})
//卯山
montain.push({d1:82.5,d2:85.5,jian:"卯酉兼向",jin:"乙卯"})
montain.push({d1:85.5,d2:88.5,jian:"卯山酉向",jin:"丁卯"})
montain.push({d1:88.5,d2:91.5,jian:"卯山酉向",jin:"己卯"})
montain.push({d1:91.5,d2:94.5,jian:"卯山酉向",jin:"辛卯"})
montain.push({d1:94.5,d2:97.5,jian:"卯酉兼向",jin:"癸卯"})
//乙山
montain.push({d1:97.5,d2:100.5,jian:"乙辛兼向",jin:"乙卯"})
montain.push({d1:100.5,d2:103.5,jian:"乙山辛向",jin:"丁卯"})
montain.push({d1:103.5,d2:106.5,jian:"乙山辛向",jin:"己卯"})
montain.push({d1:106.5,d2:109.5,jian:"乙山辛向",jin:"辛卯"})
montain.push({d1:109.5,d2:112.5,jian:"乙辛兼向",jin:"癸卯"})
//辰山
montain.push({d1:112.5,d2:115.5,jian:"辰戌兼向",jin:"甲辰"})
montain.push({d1:115.5,d2:118.5,jian:"辰山戌向",jin:"丙辰"})
montain.push({d1:118.5,d2:121.5,jian:"辰山戌向",jin:"戊辰"})
montain.push({d1:121.5,d2:124.5,jian:"辰山戌向",jin:"庚辰"})
montain.push({d1:124.5,d2:127.5,jian:"辰戌兼向",jin:"壬辰"})
//巽山
montain.push({d1:127.5,d2:130.5,jian:"巽乾兼向",jin:"甲辰"})
montain.push({d1:130.5,d2:133.5,jian:"巽山乾向",jin:"丙辰"})
montain.push({d1:133.5,d2:136.5,jian:"巽山乾向",jin:"戊辰"})
montain.push({d1:136.5,d2:139.5,jian:"巽山乾向",jin:"庚辰"})
montain.push({d1:139.5,d2:142.5,jian:"巽乾兼向",jin:"壬辰"})
//巳山
montain.push({d1:142.5,d2:145.5,jian:"巳亥兼向",jin:"乙巳"})
montain.push({d1:145.5,d2:148.5,jian:"巳山亥向",jin:"丁巳"})
montain.push({d1:148.5,d2:151.5,jian:"巳山亥向",jin:"巳巳"})
montain.push({d1:151.5,d2:154.5,jian:"巳山亥向",jin:"辛巳"})
montain.push({d1:154.5,d2:157.5,jian:"巳亥兼向",jin:"癸巳"})
//丙山
montain.push({d1:157.5,d2:160.5,jian:"丙壬兼向",jin:"乙巳"})
montain.push({d1:160.5,d2:163.5,jian:"丙山壬向",jin:"丁巳"})
montain.push({d1:163.5,d2:166.5,jian:"丙山壬向",jin:"巳巳"})
montain.push({d1:166.5,d2:169.5,jian:"丙山壬向",jin:"辛巳"})
montain.push({d1:169.5,d2:172.5,jian:"丙壬兼向",jin:"癸巳"})
export default class TrackMagnetometer extends Component {
  constructor() {
    super();
    this.state = {
      degree: "0",
    };
    this.useEffect()
  }
  useEffect(){
    const degree_update_rate = 1;
    
    CompassHeading.start(degree_update_rate, degree => {
      //console.log(degree)
      this.setState({degree:degree});
    });
    
    return () => {
      CompassHeading.stop();
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    CompassHeading.stop();
  }

  _degree = magnetometer => {
    return Math.floor(magnetometer * 100) / 100 
  };


  _angle = magnetometer => {
    let angle = 0;
    if (magnetometer) {
      let {x, y} = magnetometer;
      if (Math.atan2(y, x) >= 0) {
        angle = Math.atan2(y, x) * (180 / Math.PI);
      } else {
        angle = (Math.atan2(y, x) + 2 * Math.PI) * (180 / Math.PI);
      }
    }
    return Math.round(angle);
  };

  _directionMountain= degree => {
    degree = (parseFloat(degree) + 180)%360
    var ret = ""
    montain.forEach(element=>{
      if (degree >= element.d1 && degree < element.d2) {
        ret= element.jian +" "+ element.jin + "分金"
      }
    })
    return ret
  };
  _direction  = degree => {
    if (degree >= 22.5 && degree < 67.5) {
      return ["NE","东北",];
    } else if (degree >= 67.5 && degree < 112.5) {
      return ["E","正东",]
    } else if (degree >= 112.5 && degree < 157.5) {
      return ["SE","东南",]
    } else if (degree >= 157.5 && degree < 202.5) {
      return ["S","正南",]
    } else if (degree >= 202.5 && degree < 247.5) {
      return ["SW","西南",]
    } else if (degree >= 247.5 && degree < 292.5) {
      return ["W","正西",]
    } else if (degree >= 292.5 && degree < 337.5) {
      return ["NW","西北",]
    } else {
      return ["N","正北",]
    }
  };
  updateMeter(M)
  {
      this.props.updateMeter(M)
  }
  render() {
    var D = this._direction(this._degree(this.state.degree))
    var M = this._directionMountain(this._degree(this.state.degree))
    this.updateMeter(M)
    return (
          <View style={{backgroundColor:"#AAAAAA",alignContent:"center"}}>
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {D[1]}
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {M}
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {D[0]}
            </Text>


            <View style={{width: width, alignItems: "center", bottom: 0}}>
              <Image
                source={require("../../../img/Magnetometer/compass_pointer.png")}
                style={{
                  height: 18,
                  resizeMode: "contain",
                }}
              />
            </View>
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              width: width,
              position: "absolute",
              textAlign: "center",
            }}
          >
            {this._degree(this.state.degree)}°
          </Text>
          <View style={{width: width, alignItems: "center", bottom: 0}}>
            <Image
              source={require("../../../img/Magnetometer/compass_bg.png")}
              style={{
                height: 150,
                justifyContent: "center",
                alignItems: "center",
                resizeMode: "contain",
                transform: [
                  {rotate: 0-this.state.degree-90 + "deg"},
                ],
              }}
            />
            </View>
        </View>

    );
  }
}