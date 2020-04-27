

import React, { Component } from 'react';
import { TextInput, StyleSheet, Keyboard, View, ScrollView, Button, Text, Vibration } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { Grid, DatePicker, List, Switch, WhiteSpace, Provider, PickerView } from '@ant-design/react-native';

import { HistoryArrayGroup } from '../../config/StorageModule'
import ScreenConfig from '../../config/ScreenConfig';
import StyleConfig from '../../config/StyleConfig';
import UserModule from '../../config/UserModule'
import WechatShare from '../../config/WechatShare'

class NumberMotionNewPage extends React.Component {

  constructor(porp) {

    super(porp);
    this.state = {
      data: [],
      value: new Date(1950, 1, 1),
    }
  }
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {

      title: RouteConfig["NumberMotionNewPage"].name,
    }
  };
  getinfo(num)
  {
    var info = new Array()
    info[1]="1号（孤独的领路人）：\n\n正面：领导力、创造、自信、果断、专注、独立。\n\n负面：自我、孤独、高傲自大、强势、自我中心。\n\n生命数字为1的人，具备领导才能、创造能力、独立自主、自信决断的人。同时，其负面行为则是武断、孤独和自我沉湎。他们过于相信自己的能力，对自己信心十足，反感其他人对他的干扰。因此1号人特别在意自己的隐秘空间，不喜欢别人离他们太近，即使是他们最亲密的家人朋友。"
    info[2]="2号（遇见另一个你）：\正面：温和、有耐心、善解人意、善于合作、读心术、分析能力强。\负面：依赖、比较、易受影响、犹豫不决、优柔寡断。\n\n生命数字为2的人，具备较好的沟通能力和分析能力，他们会通过和别人的交谈来获得更多信息。生命数字2更多的是一个属于女性性别的数字，拥有这个数字的人，多半会表现得温和并富有耐心、以及细腻的感知力。而同时，2号性格的人也会比别人表现出更多的犹豫不决和优柔寡断。"
    info[3]="3号（冒险家）：\n\n正面：积极、执行力强、激情、激励、行动、表达、威信。\负负面：冲动、没耐心、怀脾气、不专情、任性。\n\n生命数字学中3的含义就是快速和行动，拥有这个生命数字的人，通常拥有极强的行动力，且对速度有高要求，但也显得过于急躁，显露出情绪化和坏脾气。3号性格的人表现得容易冲动、任性、不专情。他们对朋友很讲义气，为人也很豪爽仗义，不拘小节，但由于3号的急躁性格，在人际交往中现得过于直接坦率，有些话往往不经过大脑就脱口而出，另外心里有什么不满也会表达出来，这容易得罪别人。其实3号性格的人心地善良，对交心的朋友相当信任，对家人更是爱护有加。"
    info[4]="4号（无处安放的灵活）：\n\n正面：学习力强、组织能力强、有条理、踏实稳重、善于策划、聪明、务实。\n\n负面：心直口快、缺乏安全感、单刀直入、犹疑不定、悲观、保守。\n\n主性格是4号的人善于策划、擅长组织、求职欲望强烈、做事有条理。他们极容易在物质世界中获得安全感，正因为对安全感看得过重，使得4号人常常对自己无法控制的事情产生恐惧、悲观。4号性格的人喜欢一个稳固的有组织的工作环境，他们更喜欢一个安全可靠的家庭，很多人还会把家庭视为最重要。4号人也非常注重一个人为人是否实在。"
    info[5]="5号（自由）：\n\n正面：目标感强、方向感强、坚持、幽默感、自由自在、豪爽。\n\n负面：固执、猜疑、冲动、面子、随心所欲。\n\n主性格是5号的人喜欢无拘无束、自由自在，同时方向感很强。他们一旦制定了自己的目标，就会坚持不懈，甚至过分地执著。5号性格的人有着绝对的权利欲望，他们对自身的权益看得较重，保护自己的意识很强，但也会因此过于追求自由、过于自我保护、过于追求完美。5号性格的人富有幽默感、他们生活中处处充满趣味，显得朝气蓬勃、丰富多彩。5号人需要改善的问题是，他们比较冲动，很容易被激怒，也很情绪化。"
    info[6]="6号（肩膀上的人生使命）：\n\n正面：忠诚、远见、财富、洞察力、完美、发现问题、领悟力、无私奉献。\n\n负面：浪费、挑剔、自负、易陷入细节。\n\n主性格是6号的人对于解决问题很有特长，能很快知道问题的症结在哪里，制定出解决问题的步骤。6号性格的人想象力很丰富，他们往往具备创意的天赋。6号性格的人第6感很强，女性在情感方面的预知尤其敏感。能发现问题更要解决问题。6号性格的人喜欢追求完美，对自己和别人都很挑剔，总是会留意到其他人还没有察觉的缺点，不管是自己的，还是别人的。同时，也很有责任感，具有大爱和无私精神，不懂拒绝他人，且他们在帮助别人的同时，还很乐意为别人做决定。"
    info[7]="7号（天生的”质疑家“）：\n\n正面：人缘好、博学、遇贵人、好奇心、好研究、乐于助人。\n\n负面：不体贴、迟缓、冷淡、多疑。\n\n主性格是7号的人喜欢分析问题、探讨问题、挖掘真相，喜欢凡事都问个为什么。7号性格的人很容易专心致志，因为专注，所以他们更容易表现得出类拔萃，更容易取得成功。7号性格的人很有人缘，运气好，贵人多；他们有时候很世故，善于交际处事圆滑，是属于交际圈子广、朋友一大堆的那类型。7号的人在做事上比较迟缓冷淡，时常行动都慢人一拍，行动力弱，且天生有点害羞。"
    info[8]="8号（企业家潜质）：\n\n正面：责任、权威、格局、抗压力、理想抱负、权力、亲善。\n\n负面：压力、消极、野心、纠结、压力。\n\n主性格是8号的人具有一定的责任感。他们一旦承诺了，就会遵守诺言。8号性格的人很可能成为大慈善家，也可能成为野心家、独裁专制者。8号性格的人很具有开拓的天赋，注重金钱和权力，一旦他们发现某个项目是可以挖掘的，他们就会从根底开始探查，也最擅长将一个意念具体化。当有一个不错的想法时，他们会很快行动起来，付诸实施，并且锲而不舍，一直到获得成功为止。所以在经营事业方面，8号性格的人有着得天独厚的优势，比如做生意，8号性格的人更容易取得成功，会让人跟随。8号人性格刚强，内心像火山一样，一触即发，一旦发起脾气来，让人大吃一惊。"
    info[9]="9号（给梦想一个落脚的根）：\n\n正面：机会、正值、智慧、爱冒险、洞察力、察言观色、使命感。\n\n负面：寂寞、无原则、贪心、不专精、脱离现实。\n\n主性格是9号的人会有全面的、正直的、智慧和洞察的性格特征，是天生的梦想家。但同时，也正因为9这个数字的至高无上，使得身在高处的人有点寂寞，也有点没有原则和贪得无厌。但总体来说，9号似乎包含了所有人的优点和所有人的缺憾。他们拥有1到8号所有性格的特质，情感丰富、洞察力强、容易受感动，他们说话和做事都会收到别人的认同，会有很好的机遇，这反而助长了9号人的贪欲。所以9号人的一定要注意的是，要培养自己专一、专注的思考和行为习惯、落实固定的目标。要修的功课是舍得、感恩、低调、做有价值的事，给梦想一个落脚的根。"
    if(num>0 && num<10)
    {
      return info[num]
    }
    return ""
  }


  onChange = (value: any) => {
    console.log(value);
    this.setState({ value });
    var selecttime = new Date(value)
    this.setState({ datepicker: selecttime })
  }
  cycledivid(num) {
    num = num >= 10 ? (num % 10 + Math.floor(num / 10)) : (num % 10)
    if (num >= 10) {
      num = this.cycledivid(num)
    }
    return num
  }
  render() {
    const { navigate } = this.props.navigation;
    var curDate = new Date(this.state.value)
    var time = curDate.toLocaleDateString().split('/').join('-');
    var year = curDate.getFullYear().toString();
    var day = curDate.getDate()
    var yearb = Number(year.substring(0, 2))
    var yeare = Number(year.substring(2, 4))
    var month = curDate.getMonth() + 1
    var fatherb = this.cycledivid(day)
    var fathere = this.cycledivid(month)
    var motherb = this.cycledivid(yearb)
    var mothere = this.cycledivid(yeare)
    var father = this.cycledivid(fathere + fatherb)
    var mother = this.cycledivid(motherb + mothere)

    var left2 = this.cycledivid(fatherb + father)
    var left3 = this.cycledivid(fathere + father)
    var left1 = this.cycledivid(left2 + left3)
    var mid = this.cycledivid(father + month)
    var right2 = this.cycledivid(motherb + mother)
    var right3 = this.cycledivid(mothere + mother)
    var right1 = this.cycledivid(right2 + right3)
    var lefttop = this.cycledivid(mother + mid)
    var righttop = this.cycledivid(father + mid)
    var top = this.cycledivid(lefttop + righttop)
    var potential = this.cycledivid(fatherb + mothere + mid)
    var heart = this.cycledivid(left1 + right3 + top)

    const base = [
      { text: "" },
      { text: "潜意识\n" + potential },
      { text: "" },
      { text: "外心格\n" + heart },
      { text: "" },

      { text: "" },
      { text: "" },
      { text: "下属、儿女\n中年阶段\n" + top },
      { text: "" },
      { text: "" },

      { text: "" },
      { text: lefttop },
      { text: "" },
      { text: righttop },
      { text: "" },

      { text: "工作、朋友\n青年阶段\n" },
      { text: left1 + "=" + left2 + " " + left3 },
      { text: "主性格\n" + mid },
      { text: right1 + "=" + right2 + " " + right3 },
      { text: "晚年、家庭\n老年阶段\n" },

      { text: "父亲基因" },
      { text: father },
      { text: "" },
      { text: mother },
      { text: "母亲基因" },

      { text: fatherb },
      { text: fathere },
      { text: "" },
      { text: motherb },
      { text: mothere },

      { text: "日\n" + day },
      { text: "月\n" + month },
      { text: "" },
      { text: "年\n" + yearb },
      { text: "份\n" + yeare },
    ]


    return (
      <View style={styles.container}>
        <ScrollView ref="location" style={{ backgroundColor: '#ffffff' }}>
          <View >
            <List style={styles.inputpicker}>
              <WhiteSpace size="xl" />
              <DatePicker
                backgroundColor='#ff00ff'
                value={this.state.value}
                mode="datetime"
                minDate={new Date(1950, 1, 1)}
                //maxDate={new Date(2026, 11, 3)}
                onChange={this.onChange}
                format="YYYY-MM-DD-HH">
                <List.Item arrow="horizontal">生辰:</List.Item>
              </DatePicker>
              <WhiteSpace size="xl" />
            </List>
          </View>
          <WhiteSpace size="xl" />
          <View>
            <View style={[{ padding: 10 }]}>
              <Grid
                data={base}
                columnNum={5}
                itemStyle={{ height: 60 }}
                isCarousel={false}
                hasLine={false}
                renderItem={(el, index) => {
                  return (<View style={{ alignItems: "center", flex: 1, justifyContent: 'center', height: 20 }}>
                    <Text style={{ textAlign: "center", fontSize: 12 }}>{el.text}</Text>
                  </View>)
                }} />
            </View>
            <WhiteSpace size="xl" />
              <Text style={{paddingLeft:25,paddingRight:25}}>{this.getinfo(mid)}</Text>
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            {(WechatShare.shareimg(this.state.shareimg))}
            <WhiteSpace size="xl" />
          </View>
        </ScrollView>
        {WechatShare.shareRetBar(WechatShare, this, "数字心理学")}
      </View>
    )
  }
}

var styles = StyleSheet.create({

  input: {
    width: 240,
    height: 35,
    borderWidth: 1,
    //marginLeft: 5,
    //paddingLeft:5,
    borderColor: '#ccc',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputname: {
    //justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    alignItems: 'center',
    justifyContent: 'space-between', //虽然样式中设置了 justifyContent: 'center'，但无效  
    //justifyContent:'space-between',
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 50,
  },
  inputbutton: {
    //justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    alignItems: 'center',
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
    //justifyContent:'space-between',
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 50,
  },
  inputpicker: {

    marginLeft: 15,
    marginRight: 15,
    marginTop: 50,
  },
  buttonstyle: {
    justifyContent: 'space-between', //虽然样式中设置了 justifyContent: 'center'，但无效  
    alignItems: 'baseline',
  },
});
module.exports = NumberMotionNewPage;  