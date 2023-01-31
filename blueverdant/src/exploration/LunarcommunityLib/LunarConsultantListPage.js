
import React, {Component} from 'react';
import {StyleSheet,View,Image,Alert, Text,RefreshControl,Dimensions,FlatList} from 'react-native';
import { Card,WingBlank,WhiteSpace,Button} from '@ant-design/react-native';
import RouteConfig from '../../config/RouteConfig';
import ScreenConfig from '../../config/ScreenConfig';
import StyleConfig from '../../config/StyleConfig';
import NetModule from '../../net/NetModule'
import {NetApi} from '../../net/NetApi'
let LunarConsultantListPagehis;
class LunarConsultantListPage extends React.Component {
   constructor(props) {
    super(props);
    var inittemp = new Array()
		this.state = {
      tips:inittemp,
      isRefresh : false,
      isLoadMore:false
    };
    LunarConsultantListPagethis = this
  }


  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    return{
      
      title: RouteConfig["LunarConsultantListPage"].name,
    }
  };
  componentDidMount() {
    this.refreshlist(-1)

	}
	
	componentWillUnmount() {
		this.timer && clearInterval(this.timer);
	}

  onLoadMore()
  {
    console.log("onLoadMore")
    if (!this.state.isLoadMore && this.state.tips.length > 0){
      
      var seq = this.state.tips.length - 1
      seq = this.state.tips[seq].Indexid - 1
      //console.log("onLoadMore offset:",seq)
      //没有到最底可以继续下拉
      if(seq>0)
      {this.refreshlist(seq)}
      
    }
  }

  refreshlist(offset)
  {
    //console.log("refreshlist",offset)
    if(!this.state.isRefresh){
      //console.log("fetchRequest",offset)
        NetModule.fetchRequest(NetApi["ConsultantList"].url+"?offset="+Number(offset),NetApi["ConsultantList"].method).then(T=>
        {
          //console.log(T)
          var temp = this.state.tips
            if(0==offset)
            {
              temp = new Array()
              this.setState({ isLoadMore : false, })
            }
            var cur = temp.length;
            for(var x=0;x<T.data.length;x++)
            {
              //返回结果的数据若无效则不进入队列，Indexid就是数据是否到底的标记，go会反馈indexid为0的空数据集，懒得服务器裁剪了
              if(T.data[x].Indexid>0)
              {temp[cur + x]=T.data[x]}
              
            }
            this.setState({  tips:temp })
        })
    }
    return
  }



  keyExtractor = (item,index) => index.toString()

  renderItem(item) {
    //console.log(item)
    if(undefined == item.item)
    {
      return
    }
    const { navigate } = LunarConsultantListPagethis.props.navigation;
    var parameter = "?Indexid="+item.item.Indexid;
    return (
      <View>
        
      <WingBlank size="lg">
      <WhiteSpace size="lg"/>
      <Card>
      
      <Card.Header
        key={item.id}
        title={item.item.username + " " + item.item.Indexid}
        thumbStyle={{ width: 30, height: 30 }}
        thumb={item.item.avatar}
        //extra="this is extra"
      />
      <Card.Body>
          <View style={styles.columelist}>
          <Text  style={{marginLeft: 16}}>{"经验："}+{item.item.Experience}</Text>
          <Text  style={{marginLeft: 16}}>{"价格："}+{item.item.Price}</Text>
          
          </View>
          <View style={styles.columelist}>
          <Text  style={{marginLeft: 16}}>{"语音："}+{item.item.Talkprice}</Text>
          <Text  style={{marginLeft: 16}}>{"视频："}+{item.item.Videoprice}</Text>
          <Button onPress={() => navigate(RouteConfig["ConsultantDetailPage"].route,parameter) } >咨询预约</Button>
          </View>

      </Card.Body>
      </Card>

      </WingBlank>
    
      </View>

    );
  }

  render()
  {
    
    
    const { navigate } = this.props.navigation;
    var barheight = ScreenConfig.getTabBarHeight();
    barheight = 0;
    return (
      <View style={styles.container}>

        <FlatList  
              data={this.state.tips}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              onEndReached={() => this.onLoadMore()}
              onEndReachedThreshold={2}
              refreshControl={
                <RefreshControl
                    refreshing={this.state.isRefresh}
                    onRefresh={() => {
                        this.refreshlist(-1);
                    }}
              />}
          />
          {/*}
          <TabNavigator  tabBarStyle={[{height:ScreenConfig.getTabBarHeight()}]}>

            <TabNavigator.Item
                        title={RouteConfig["LunaranswerPage"].name} 
                        renderIcon={() => RouteConfig["LunaranswerPage"].icon}
                        //renderSelectedIcon={() => IconConfig.IconDvinationSel}
                        onPress={() => navigate(RouteConfig["LunaranswerPage"].route) }  
                        titleStyle={StyleConfig.menufont}>  
            </TabNavigator.Item> 

          </TabNavigator >
                  {*/}
        </View>
					)
  }

}

var styles = StyleSheet.create ({
  container: {
    flex:1,
    //textAlign:'center',     
    //justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
    //alignItems: 'center',
    //lineHeight:45,     //行高  
    //fontSize:15
  },
  columelist:{
    height:30,
    paddingLeft:15,
    paddingRight:15,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    flexWrap:'wrap',
    alignItems: 'flex-start',
  },
  index:
  {
    lineHeight:24,
    //marginLeft: 10,
    //paddingLeft:10,
    textAlign:'center', 
    fontSize:15,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
    alignItems: 'center',
  },

  list:{
    height:45,
    //borderWidth:1,
    marginLeft: 10,
    paddingLeft:10,
    //borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    //textAlign:'center', 
    //textDecorationLine:'underline'
  },
  menufont:{
    fontSize:15,
    color: '#333333', 
    height:ScreenConfig.getFontheight()
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
module.exports=LunarConsultantListPage;  