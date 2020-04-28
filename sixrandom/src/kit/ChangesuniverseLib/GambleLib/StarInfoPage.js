

import React, {Component} from 'react';
import {StyleSheet,View,TouchableOpacity,Alert,Button, Text,RefreshControl,ScrollView,FlatList} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import { StackNavigator } from 'react-navigation';
import { ListItem ,Card,Icon} from 'react-native-elements';

import {StyleConfig,FontStyleConfig} from '../../../config/StyleConfig';
import RouteConfig from '../../../config/RouteConfig'
import ScreenConfig from '../../../config/ScreenConfig';
import WechatShare from '../../../config/WechatShare'

var GambleInfo= new Array()
var AstroInfo= new Array()
var TarotInfo= new Array()

let StarInfoPage_controller;

class StarInfoPage extends React.Component {
   constructor(props) {
    super(props);
    this.init();
		this.state = {
      tips:GambleInfo,
      title:"占星骰子规则"
    };
    StarInfoPage_controller = this
  }

  init()
  {
    var newInfo= new Array()
    GambleInfo = JSON.parse(JSON.stringify(newInfo));
    GambleInfo.push("");
    GambleInfo.push("行星：行星代表你拥有的基本能量");
    GambleInfo.push("星座：星座代表行星释放能量的方式");
    GambleInfo.push("宫位：宫位代表行星释放能量的领域");
    GambleInfo.push("");
    GambleInfo.push("十大行星与两个虚点");
    GambleInfo.push("太阳：权力，生命力，价值，人生目标，创造力与才华，地位，尊贵，政府机构，政治，焦点，舞台，名利，赌博，投机，股票证券，玩乐。");
    GambleInfo.push("月亮：心情，直觉，安全感，保护与照顾，无常，变动，情绪，家庭，环境，饮食，女性，日常生活，液体，历史。");
    GambleInfo.push("水星：思考，知识，学习，演讲，语言，网络，信息，文件，商业活动，交通，钥匙，问题。");
    GambleInfo.push("金星：爱情，情感，关系，绯闻，金钱，享受，财富，社交，艺术，珠宝，奢侈品，礼物，女性。");
    GambleInfo.push("火星：野心，积极，行动，破坏，冲突，危险，竞争，欲望，金属，犯罪。");
    GambleInfo.push("木星：道德，信仰，宗教，智慧，法律，幸运，远方，扩张，财富，赌博，成功，旅行，异国，教育。");
    GambleInfo.push("土星：责任，耐性，认真，拖延，保守，忧郁，困难，阻碍，损失，限制，严肃，稳定，破旧。");
    GambleInfo.push("天王：叛逆，创造，分离，意外，独立，突发，任性，革命，科技，社会意识，新思潮。");
    GambleInfo.push("海王：理想，幻想，催眠，自欺，骗局，迷糊，不负责任，混乱，假象，神秘，梦境，艺术，酒精，药物，水，慈善。");
    GambleInfo.push("冥王：阴谋，疑心，洞察，潜意识，侦查，秘密，欲望，生死，毁灭与重生，保险，权力，黑社会。");
    GambleInfo.push("北交点：前世业报，顺势而为，难以抵达。");
    GambleInfo.push("南交点：前世业障，逆势而为，执着虚妄。");
    GambleInfo.push("");
    GambleInfo.push("十二星座");
    GambleInfo.push("白羊座：勇气，斗志，领袖，霸道，主动，激情，活力，本能。");
    GambleInfo.push("金牛座：沉着，耐心，贪婪，肉体，物质，固执，大自然，惰性，沉默。");
    GambleInfo.push("双子座：心智，孩子气，好奇，适应，商业，活跃，三心二意，思考。");
    GambleInfo.push("巨蟹座：母性，顾家，念旧，情绪化，温顺，敏感，直觉，保护，滋养。");
    GambleInfo.push("狮子座：王者，意志，追求，雄心，专横，真诚，大度，虚荣心，热情。");
    GambleInfo.push("处女座：分析，谨慎，秩序，方法，实际，琐碎，批评，纠结。");
    GambleInfo.push("天秤座：艺术，公正，社交性，美学，优柔寡断，懒散，浪漫。");
    GambleInfo.push("天蝎座：顽强，意志，好斗，毁灭，重生，神秘，欲望，性爱。");
    GambleInfo.push("射手座：坦率，哲学，高傲，自负，热情，旅行，冒险，教育。");
    GambleInfo.push("魔羯座：内向，专心，严谨，责任，耐性，节俭，忧郁，功利，冷漠。");
    GambleInfo.push("水瓶座：利他，独创，群体，独立，思想，叛逆，革命，怪诞。");
    GambleInfo.push("双鱼座：神秘，牺牲，敏感，做梦，同情，浪漫，成瘾，堕落。");
    GambleInfo.push("");
    GambleInfo.push("十二宫位");
    GambleInfo.push("第一宫：自我意识，表达方式，外貌，人格及童年的成长环境。");
    GambleInfo.push("第二宫：个人资产，获得财富的方式，赚钱的能力，价值观。");
    GambleInfo.push("第三宫：个人心智，与兄弟姊妹相处的状况，适应环境的能力，语言及沟通能力。");
    GambleInfo.push("第四宫：家居生活，安全感，房地产。");
    GambleInfo.push("第五宫：创造力，娱乐，恋爱，子女。");
    GambleInfo.push("第六宫：个人的责任，健康，社会服务。");
    GambleInfo.push("第七宫：婚姻，合伙关系。");
    GambleInfo.push("第八宫：夫妻共同财产或资源，性，死亡与再生。");
    GambleInfo.push("第九宫：高等教育，哲学，宗教，法律，旅行，世界观，心灵智慧。");
    GambleInfo.push("第十宫：名誉地位，事业成就，社会责任。");
    GambleInfo.push("第十一宫：团体，友谊，个人精神与文化层次的活动。");
    GambleInfo.push("第十二宫：潜意识，个人隐私，内省，心灵净化。");
    GambleInfo.push("");
    GambleInfo.push("庙旺");
    GambleInfo.push("太阳 庙：狮子 旺：白羊 落：水瓶 陷：天平");
    GambleInfo.push("月亮 庙：巨蟹 旺：金牛 落：摩羯 陷：天蝎");
    GambleInfo.push("水星 庙：双子处女 旺：处女 落：射手双鱼 陷：双鱼");
    GambleInfo.push("金星 庙：金牛天平 旺：双鱼 落：天蝎白羊 陷：处女");
    GambleInfo.push("火星 庙：白羊天蝎 旺：摩羯 落：天平金牛 陷：巨蟹");
    GambleInfo.push("木星 庙：射手双鱼 旺：巨蟹 落：双子处女 陷：摩羯");
    GambleInfo.push("土星 庙：摩羯水瓶 旺：天平 落：巨蟹狮子 陷：白羊");

    GambleInfo.push("");
    GambleInfo.push("宫位");

    GambleInfo.push("1 4 7 10 角宫 最快，有力 ");
    GambleInfo.push("2 5 8 11 续宫 最稳，中速");
    GambleInfo.push("3 6 9 12 果宫 最慢，无力");

    var newTarotInfo= new Array()
    TarotInfo = JSON.parse(JSON.stringify(newTarotInfo));
    TarotInfo.push("塔罗牌")

    var newAstroInfo= new Array()
    AstroInfo = JSON.parse(JSON.stringify(newAstroInfo));
    AstroInfo.push("星盘")
  }

  Gambletip()
  {
    var newInfo= new Array()
    newInfo = JSON.parse(JSON.stringify(GambleInfo));
    console.log(newInfo)
    this.setState({ tips:newInfo,title:"占星骰子规则"})
  }
  Astrotip()
  {
    var newInfo= new Array()
    newInfo = JSON.parse(JSON.stringify(AstroInfo));
    console.log(newInfo)
    this.setState({ tips:newInfo,title: "占星星盘规则"})
  }
  Tarottip()
  {
    var newInfo= new Array()
    newInfo = JSON.parse(JSON.stringify(TarotInfo));
    console.log(newInfo)
    this.setState({ tips:newInfo,title: "占星塔罗规则"})
  }


  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    return{
      //title:StarInfoPage_controller.state.title
      
    title: RouteConfig["ChangesuniversePage"].name,
    }
  };

  keyExtractor = (item,index) => index.toString()

  renderItem(item) {
    return (

        <Text key={item.item} style={styles.list} >{item.item}</Text>

    );
  }

  render()
  {
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>
      <ScrollView>
      <Text ></Text>
              <Text ></Text>
              <Text style={styles.list}>{StarInfoPage_controller.state.title}</Text>
              <Text ></Text>
      <FlatList  
              data={this.state.tips}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              />
              <Text ></Text>
              <Text ></Text>
              <Text ></Text>
              <Text ></Text>
      </ScrollView>
    </View>
					)
  }

}

var styles = StyleSheet.create ({
  container: {
    flex:1,
  },
  subtitleView:{
    flexDirection:'row',
    paddingLeft:10,
    //paddingTop:5
  },
  ratingText:{
    paddingLeft:10,
    color:'blue'
  },


  list:{
    marginLeft: 10,
    paddingLeft:10,
    marginRight: 10,
    paddingRight:10,
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
  },

});
module.exports=StarInfoPage;  