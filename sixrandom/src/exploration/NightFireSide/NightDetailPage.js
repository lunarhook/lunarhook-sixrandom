
import React, {Component} from 'react';
import {StyleSheet,View, Dimensions,Alert, Text,RefreshControl,ScrollView} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import { Card,WingBlank,WhiteSpace} from '@ant-design/react-native';
import RouteConfig from '../../config/RouteConfig';
import ScreenConfig from '../../config/ScreenConfig';
import StyleConfig from '../../config/StyleConfig';
import NetModule from '../../net/NetModule'
import {NetApi} from '../../net/NetApi'

class NightDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Token: "",
      tips:""
    };
  }

  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    return{
      
    title: RouteConfig["NightDetailPage"].name,
    }
  };

  componentDidMount() {
    
		this.timer = setTimeout(
			() => {
        this.refreshlist()
        
			},
			200
    );
     
  }

  componentWillUnmount() {
		// 如果存在this.timer，则使用clearTimeout清空。
		// 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
		this.timer && clearInterval(this.timer);
  }
  refreshlist()
  {
      const { navigate } = this.props.navigation;
      
      var parameter = this.props.navigation.state.params

      console.log("fmdetail",parameter)
      if(undefined!=parameter)
      {
         
        var info = null;
        var args = {};
        var match = null;
        var search = decodeURIComponent(parameter.substring(1));
        var reg = /(?:([^&]+)=([^&]+))/g;
        while((match = reg.exec(search))!==null){
            args[match[1]] = match[2];
        }
        info = args
        console.log(info)
        NetModule.fetchRequest(NetApi["QuestDetail"].url+"?Indexid="+info.Indexid,NetApi["QuestDetail"].method).then(T=>
          {
            console.log(T)
              this.setState({  tips:T.data ,Token: info.Token})
          })
      }
      else
      {
        this.begin(RouteConfig["Exploration"].route)
      }
  }

  render()
  {
    const { navigate } = this.props.navigation;
    var info = this.state.tips
    return (
      <View style={styles.container}>
      <ScrollView>
      <WingBlank size="lg">
      <WhiteSpace size="lg"/>
      <Card>
      
      <Card.Header
        title={info.QuestTitle}
        thumbStyle={{ width: 30, height: 30 }}
        thumb={info.avatar}
        //extra="this is extra"
      />
      <Card.Body>
          <View style={styles.columelist}>
          <Text  style={{marginLeft: 16}}>{"序号："}+{info.Indexid}</Text>
          <Text  style={{marginLeft: 16}}>{"内容："}+{info.QuestContent}</Text>
          <Text  style={{marginLeft: 16}}>{"编码："}+{info.QuestId}</Text>
          
          </View>
          

      </Card.Body>
      <Card.Footer  extra={info.Questagree} />
      </Card>

      </WingBlank>
        </ScrollView>
      
        </View>
					)
  }

}

var styles = StyleSheet.create ({
  container: {
    flex:1,
  },
  index:
  {
    lineHeight:24,
    textAlign:'center', 
    fontSize:15,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
    alignItems: 'center',
  },
  list:{
    height:45,
    marginLeft: 10,
    paddingLeft:10,
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
  },
    vb_text: {  
    color: '#333333',  
    fontFamily: 'Times',  
    margin: 10,  
    fontSize: 12,         
    textAlign: 'auto',  
    lineHeight: 22,     //行高  
    fontStyle: 'italic',    //设置文字：normal：正常体；italic：斜体  
    fontWeight: 'bold', //设置粗体字，'normal' /*default*/, 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900'  
    textDecorationLine: 'underline line-through',//下划线和删除线的样式：['none' /*default*/, 'underline', 'line-through', 'underline line-through'  
  },
});
module.exports=NightDetailPage;  