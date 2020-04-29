
import React, {Component} from 'react';
import {StyleSheet,View,RefreshControl,Alert,Text,FlatList,ScrollView} from 'react-native';
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import { CheckBox,Button } from 'react-native-elements'
import TabNavigator from 'react-native-tab-navigator';  
import { captureRef } from "react-native-view-shot";
import ScreenConfig from '../../../config/ScreenConfig';
import IconConfig from '../../../config/IconConfig'
import {StyleConfig,FontStyleConfig} from '../../../config/StyleConfig';
import WechatShare from '../../../config/WechatShare'

var MORALS=Array();

MORALS[1]={
  "key":"1",
  "q":"你和家人四口一起出去游玩，选了一家店吃早饭，每个人买了粥和油饼，还有鸡蛋和一笼包子，老板娘结账的时候说是39块，你便给了。游玩到中午，回想起来早饭，你突然发现老板娘少算了10块，应该一共是49块，今晚还要住原来的地方，明天一早会驾车离开。请问你可能会怎么办",
  "a":"就10块钱，算了",
  "b":"如果还去，回头想起来就给她好了",
  "c":"老板娘自己的失误",
  "d":"我可能玩着玩着就忘记了",
  "e":"这都不是我的答案",
  "ret_a":5,
  "ret_b":3,
  "ret_c":2,
  "ret_d":4,
  "ret_e":1,
  "sel":"",
  "Moralret":"人性不可考量，请看结尾的故事"
}

MORALS[2]={
  "key":"2",
  "q":"《国富论》里讲，人都是自私的，现在我们也都承认人的本性其实是自私的，也可以说大部分人都是利己的，你认为自私，利己这些都是不好的么？",
  "a":"自私是不好的",
  "b":"自私和利己都是不对的",
  "c":"利己是正常的",
  "d":"我不知道，也不关心，但是我的东西我要自己拿到",
  "e":"自私是一种伤害",
  "ret_a":5,
  "ret_b":4,
  "ret_c":3,
  "ret_d":2,
  "ret_e":1,
  "sel":"",
  "Moralret":"只有懂得利己的人才可能真正的利他，所以自私是无私的必经之路，虽然利己和利他是矛盾的，但是真正的利他必然是包含利己的，要理解问题的复杂性，才能懂得它的简单性"
}

MORALS[3]={
  "key":"3",
  "q":"都说珍惜是一个美德，能说说为什么要珍惜",
  "a":"能满足自己的就拿着，多余的就丢掉，不用珍惜",
  "b":"拿自己该拿的，因为要保证自己的利益，所以要珍惜",
  "c":"现在物质很宽泛，用不着珍惜",
  "d":"并不关心，没有就赚钱去买，太贵就放弃",
  "e":"珍惜是一个美好的品德，所以要珍惜",
  "ret_a":5,
  "ret_b":4,
  "ret_c":3,
  "ret_d":2,
  "ret_e":1,
  "sel":"",
  "Moralret":"古代所谓吉凶，泛指得失，很容易得到的一般都不重视，就可以轻易丢掉，所以一直不懂得自己最需求什么，这种得到又失去的过程，就是吉凶不断的过程，塞翁失马，焉知非福。得失不断的过程，就是吉凶不断的过程，所以趋吉避凶，是需要珍惜的，不失去不犯错才是重要的"
}

MORALS[4]={
  "key":"4",
  "q":"对老子的评价，有所谓的天人合一的说法，你觉得下面那些是有道理的",
  "a":"做不到，妄想",
  "b":"董仲舒自己发展的，老子没这意思",
  "c":"一种理想吧",
  "d":"老子说：‘人法地，地法天，天法道，道法自然。’",
  "e":"我并不知道",
  "ret_a":5,
  "ret_b":4,
  "ret_c":3,
  "ret_d":2,
  "ret_e":1,
  "sel":"",
  "Moralret":"如果人的思考引发的行为逻辑符合大自然的客观规律，是存在作为合一状态的，但是人有思想，思想通常会以自己为出发中心，而并不是以自然为出发中心，但是不论以何种观点出发，违法自然法则，终将失去的"
}


class MORALSModule extends React.Component {
   constructor(props) {
    super(props);
    this.randominit()
  
  }

  randominit()
  {
    this.state={
      closetest:false,
      checked:[],
      MORALS:[],
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
    }
    
  }
  clear()
  {
    var MORALSrandom = new Array();
    var runtimeMORALS = MORALS.concat()
    while(runtimeMORALS.length>0)
    {
      var p = parseInt(Math.random()*runtimeMORALS.length)
      if(undefined!=runtimeMORALS[p])
      {MORALSrandom.push(runtimeMORALS[p]);}
      runtimeMORALS.splice(p,1)
    }
    //console.log(MORALSrandom)
    var checked = new Array();
    for(i=0;i<MORALSrandom.length;i++)
    {
      //checked[0]=undefined
checked[i]=""
      MORALSrandom[i].index=i
      MORALSrandom[i].key=i
      MORALSrandom[i].sel=""
    }
    //console.log(MORALSrandom)
    this.setState ({
      checked:checked,
      MORALS:MORALSrandom,
      ret:"",
      percent:"",
      extrainfo:"",
      detailinfo:"",
      closetest:false,
    })

  }
  check(){
    //if(__DEV__)
//    {return true}
    for(i=0;i<this.state.MORALS.length;i++)
    {
      if(undefined != this.state.MORALS[i] && this.state.checked[i]==="")
      {
              Alert.alert("","请检查题目："+(i+1), [
          {text: '确定'}
        ])
        return false;
      }
    }
  }
    
  componentDidMount()
  {
    const action = this.props.navigation.getParam('action', 'action');
    if(action=='new')
    {
      //this.props.navigation.setParams({action:''});
      //this.randominit()
      // console.log('refresh',action)
    }
    this.clear()
    //this.props.navigation.setParams({fresh:this.clear})
  }
  

  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    return{
      
    title: RouteConfig["MORALSModule"].titlename,
    }
  };

  updateIndex(key,sel)
  {
    if(false==this.state.closetest)
    {
      //console.log(key,sel)
      if(""!=sel)
      {
        this.state.MORALS[Number(key)].sel=sel     
      }
      this.state.checked[Number(key)]=sel
      this.setState({ checked: this.state.checked });
      for(i=0;i<MORALS.length;i++)
      {
        //console.log(MORALS[i].sel)
      }
    }

  }
  result()
  {
    if(false==this.check())
    {
      return
    }
    var testMORALS = this.state.MORALS
   

    var total = 0
    var bigtotal = 0 
    //console.log(testMORALS)
    for(i=0;i<testMORALS.length;i++)
    {
      var _p = testMORALS[i].sel;
      var _t = testMORALS[i].type
      
      if(''!=_p)
      {
        //console.log(testMORALS[i].sel, testMORALS[i].type)
        total = total + Number(_p); 
      }
      
    }

    var extrainfo = new Array
    extrainfo.push( "        请你慢慢看完下面的文章。" )
    extrainfo.push( "" )
    extrainfo.push( "        富翁的儿子与朋友做生意，被骗了。富翁的儿子很懊恼。他说，我没想到“他”是那种人，我们曾相处那么好。富翁安慰了儿子，并告戒儿子，人都有自己的道德底线呀，当外在的诱惑突破了他的道德底线，他就会颠覆传统的道德准则啦。" )
    extrainfo.push( "        儿子听后，仍一脸迷惑。" )
    extrainfo.push( "        富翁说，我们不妨做个实验吧。儿子点点头。" )
    extrainfo.push( "        富翁领着儿子找到了商人甲。甲的门面房不大，甲正悠闲地喝着茶。富翁取得了甲的初步信任，富翁说，我有一批货想和你合作，你卖不卖？商人甲骨碌碌转了转眼珠子，一脸狐疑。富翁说，你卖了货再给我钱，反正跑了和尚跑不了庙。富翁装作放心的样子，瞥了一眼甲租来的这套门面房。" )  
    extrainfo.push( "        生意谈成了。富翁放了1万元钱的货在甲的店里。" )
    extrainfo.push( "        富翁又领着儿子找到了商人乙。乙的门面房稍大，乙正悠闲地喝着茶。富翁取得了乙的初步信任，富翁说，我有一批货想和你合作，你卖不卖？商人乙骨碌碌转了转眼珠子，一脸狐疑。富翁说，你卖了货再给我钱，反正跑了和尚跑不了庙。富翁装作放心的样子，瞥了一眼乙租来的这套门面房。" )
    extrainfo.push( "        生意谈成了。富翁放了1万元钱的货在乙的店里。" )
    extrainfo.push( "        富翁还领着儿子找到了商人丙。丙的门面房更大……最后富翁还是放了1万元钱的货在丙的店里。" )
    extrainfo.push( "        儿子怀疑，说，连个正式的手续都没有，把货放他们那儿，他们会赖帐。富翁笑笑，没回答儿子。" )
    extrainfo.push( "        一月后，商人丙率先来找富翁，丙的铺子大，周转得快。丙还了货款，并提出要从富翁这儿进更多的货。陆续，商人乙、商人甲都来还了货款，无一例外都要求从富翁这儿进更多的货。富翁不为所动，每人只给了3万元的货。儿子说，他们还是蛮讲信用的，应该多给他们货呢。富翁依然只是笑笑。" )
    extrainfo.push( "        又一个月后，商人丙率先来还钱了。提出要进更多的货。随后，商人乙也来了。也提出要进更多的货。商人甲却没来。" )
    extrainfo.push( "        儿子很惊诧。富翁不慌不忙，领着儿子到了甲的店铺，却已是人去屋空。儿子说，他真不讲信用。富翁没说什么。" )
    extrainfo.push( "        这回，富翁给了商人丙和商人乙各5万元的货。儿子说，他们还是蛮讲信用的，应该多给。富翁笑而不语。再过了一个月，商人丙率先来还钱了。还提出要进更多的货。商人乙却没有来。" )
    extrainfo.push( "        富翁领着儿子到了商人乙的铺子，却已是人去屋空。儿子很惊讶，说，他怎么这么不讲诚信呢？看来，只有商人丙到底是做大买卖的，可靠！" )
    extrainfo.push( "        富翁赊给商人丙8万元的货。一月后，丙按时还钱。富翁赊给商人丙15万元的货。一月后，丙按时还钱。富翁赊给商人丙30万元的货。一月后，丙却没来还钱。" )
    extrainfo.push( "        儿子说，丙一定有特殊原因，他这么讲诚信的人怎会不来呢？富翁不声不响，领着儿子到了商人丙的铺子，却已是人去屋空。儿子更惊讶了，说，人怎么这样呢？" )
    extrainfo.push( "        富翁说，我把人的道德底线都量化成了数字，你该明白了吧？儿子一拍脑袋，大悟：商人甲的道德底线是3万元；商人乙的道德底线是5万元；商人丙相对还是诚信的，但他也有道德底线，是30万元。" )
    extrainfo.push( "        然后儿子感叹，人呀，人呀。" )
    extrainfo.push( "        富翁说，我花了38万元教你认识了人性中的一些东西，我觉得值。况且我也没真正损失什么，我早料到了他们这一手，现在他们正准备受审呢。" )
    extrainfo.push( "        儿子望着富翁，眼睛突然透亮起来。" )
    extrainfo.push( "" )
    extrainfo.push( "" )
    extrainfo.push( "" )
    extrainfo.push( "" )
    extrainfo.push( "        人性是不可考察的，试探底线必然突破，希望你能遵守而不是面临考验，真正的智慧包括懂得世界的客观的残酷。" )
    extrainfo.push( "" )
    extrainfo.push( "        总结的来说：这个测试就是月如钩系列产品的核心目的，所谓道就是本质逻辑，而所谓道德，是包含人和人相处的关系的本质和方法，本质和方法的总和可以归纳在道德中。" )
    extrainfo.push( "" )
    extrainfo.push( "        很多人会觉得自己没有安全感，是因为自己的对外部的客观判断超过了自己道德预期，即落在自己行为关系中的安全的边界之外，而道德也不同于法律是明示公布的，所以更不敢去表达，生怕自己成为群类中的异类。" )
    extrainfo.push( "" )
    extrainfo.push( "        道德也有很多特点，例如：只可身教不可言传，可以探索不能讲授，可以遵守但不能越界等。而离开人和人的相处，道德的意义也很浅薄，比如：《宋襄公》成语典故，宋襄之仁，这是典型的道德迂腐所致。但是在国家法度面前，背后支撑的依然是人和人的伦理问题，再比如：左传中《郑伯克段于鄢》成语典故，黄泉相见，这则是罔顾道德所致。这些都是道德所使用的范围，也是道德在人的意识形态中的矛盾多面性问题。" )
    extrainfo.push( "" )
    extrainfo.push( "        所谓道，就是包括阴阳之道，所以矛盾是需要控制而不能最终解决的，我们也只能通过言传身教使得传递，因为缺少道德，只有法律，这个社会是一个失去信任，充满恐慌的世界。" )
    extrainfo.push( "" )
    extrainfo.push( "        回家家庭，婚恋，道德都在积极的起到对自己和家庭的保护作用，家庭道德的缺失会严重影响下一代人的心态，甚至影响到下一代人的婚恋家庭，而月如钩产品的核心就是为了解决这些问题，通过教育使得人的性格延伸完整，重建道德社会基础，使得家庭成为自己的安全的社会最小基础。" )
    extrainfo.push( "" )
    extrainfo.push( "        家庭的道德建设，应该从我做起，然后影响家庭的每个成员。这个过程是漫长的，困难的，特别是有些人比较顽固不化坚持旧理，个性化的。希望读完这个故事，能明白孔子说的：有教无类，不放弃你关心的每一个人，让我们的精神世界变得更美好。" )
    //console.log(ret,total)
    var detailinfo = new Array
    this.setState({
      ret:"请往下阅读",
      extrainfo:extrainfo,
      closetest:true,
      detailinfo:detailinfo,
    })
  }



  renderItem(item) {
    return (
      <View>
        <Text key={item.item} style={styles.list}>{item.item}</Text>
        </View>
    );
  }

  switchbar()
  {
    const { navigate } = this.props.navigation;
    console.log("swithchbar",this.state.ret)
    if(this.state.ret!="")
    
    {
      return(
        <TabNavigator  tabBarStyle={{ height: ScreenConfig.getTabBarHeight() , backgroundColor: '#ffffff',}}>
             <TabNavigator.Item
                                  title={RouteConfig["RefreshImage"].name}
                                  renderIcon={() => RouteConfig["RefreshImage"].icon}
                                  onPress={()=>this.clear()}  
                                  titleStyle={StyleConfig.menufont}>  
                              </TabNavigator.Item>  
        <TabNavigator.Item
              title={RouteConfig["ScreenImage"].name}
              renderIcon={() => RouteConfig["ScreenImage"].icon} 
              onPress={() => {this.setState({shareimg:true}),WechatShare.snapshot(this.refs['MORALSlocation'], "霍兰德职业性格测试结果",this)}}                
              titleStyle={StyleConfig.menufont}>  
          </TabNavigator.Item>  
      </TabNavigator>   
      )
    }
    else
    {
      return(
        <TabNavigator  tabBarStyle={{ height: ScreenConfig.getTabBarHeight() , backgroundColor: '#ffffff',}}>
        <TabNavigator.Item
              title={RouteConfig["MORALSModule"].titlename}
              renderIcon={() => RouteConfig["PsychTestPage"].icon} 
              onPress={()=>{this.result(),this.refs['MORALSlocation'].scrollTo({ x: 0, y: 0, animated: true })}}  
              titleStyle={StyleConfig.menufont}>  
          </TabNavigator.Item>  
      </TabNavigator>   
      )
    }
  }




  keyExtractor = (item, index) => index.toString();
  render()
  {
    var sqr = 0
    var ret = ""!=this.state.ret

    return (
      <View style={styles.container}>
      <ScrollView style={[styles.ScrollView,{backgroundColor:'#ffffff'}]} ref='MORALSlocation'>
      <WingBlank size="lg">
      <View style={styles.container} >
      <Text style={styles.list}></Text>
      <Text style={styles.list}></Text>
      <Text style={[{textAlign:'center',alignItems: 'center'}]}>{RouteConfig["MORALSModule"].titlename}</Text>
      <FlatList

            data={this.state.MORALS}
            extraData={this.state}
            keyExtractor={this.keyExtractor}
            
            renderItem={({ item }) => 
            (
              <View id={item.id}>
              <Text style={styles.list}></Text>
              <Text style={styles.list}>第{item.index+1}题:{item.q}</Text>
              <View style = {styles.dateContainer}>
              <CheckBox containerStyle={styles.CheckBox} title = {item.a} checked={this.state.checked[Number(item.key)]===item.ret_a}  onPress={()=>this.updateIndex(Number(item.key),item.ret_a)}/>
              <CheckBox containerStyle={styles.CheckBox} title = {item.b} checked={this.state.checked[Number(item.key)]===item.ret_b}  onPress={()=>this.updateIndex(Number(item.key),item.ret_b)}/>
              <CheckBox containerStyle={styles.CheckBox} title = {item.c} checked={this.state.checked[Number(item.key)]===item.ret_c}  onPress={()=>this.updateIndex(Number(item.key),item.ret_c)}/>
              <CheckBox containerStyle={styles.CheckBox} title = {item.d} checked={this.state.checked[Number(item.key)]===item.ret_d}  onPress={()=>this.updateIndex(Number(item.key),item.ret_d)}/>
              <CheckBox containerStyle={styles.CheckBox} title = {item.e} checked={this.state.checked[Number(item.key)]===item.ret_e}  onPress={()=>this.updateIndex(Number(item.key),item.ret_e)}/>
              <Text style={{paddingLeft:35,paddingRight:35,color:IconConfig.colororange}}>{ret?item.Moralret:""}</Text>
              </View>
              <Text></Text>
              </View>
            )}
        />
        
        
        <View>
        <Text style={styles.list}></Text>
        <Text style={styles.list}>{this.state.ret}</Text>
        <Text style={styles.list}></Text>

        <Text style={styles.list}></Text>
        <Text style={styles.list}></Text>
        <Text style={styles.list}>{this.state.percent}</Text>
        <Text style={styles.list}></Text>
        
        <FlatList  
              data={this.state.extrainfo}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              />
              <Text style={styles.list}></Text>
        <Text style={styles.list}></Text>
        <FlatList  
              data={this.state.detailinfo}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              />
              </View>
              <WhiteSpace size="xl" />
            {
             (WechatShare.shareimg(this.state.shareimg))
            }
            
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            </View>
            </WingBlank>
        </ScrollView>
        {this.switchbar()}
        </View>
		)
  }

}  
var styles = StyleSheet.create ({
  container: {
    flex:1,
    backgroundColor:'#ffffff'
  },
  CheckBox:{
    borderColor:'#ffffff',
    backgroundColor:'#ffffff'
  },
  dateContainer: {
    flexWrap: 'wrap',
    justifyContent:'flex-start',
    flexDirection: 'row',
    alignItems:'flex-start'
    
  },
  ScrollView:{
    backgroundColor:'#fafafa'
  },
  list:{
    marginLeft: 15,
    paddingLeft:15,
    borderRadius: 4,
    marginRight: 15,
    paddingRight:15,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center',但无效 
    flexWrap:'wrap',
    alignItems: 'flex-start',
  },

})

module.exports=MORALSModule;  