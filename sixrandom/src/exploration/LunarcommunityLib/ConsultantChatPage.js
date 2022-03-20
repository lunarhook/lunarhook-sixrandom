
import React, {Component} from 'react';
import {StyleSheet,TextInput,Button, View,Platform, Text,FlatList,KeyboardAvoidingView,Image,ScrollView,RefreshControl,Dimensions} from 'react-native';
import { WingBlank,WhiteSpace} from '@ant-design/react-native';
import RouteConfig from '../../config/RouteConfig';
import ScreenConfig from '../../config/ScreenConfig';
import StyleConfig from '../../config/StyleConfig';
import UiConfig from '../../config/UiConfig';
import WechatShare from '../../config/WechatShare'
import NetModule from '../../net/NetModule'
import NetStorage from '../../net/NetStorage'
import {NetApi} from '../../net/NetApi'
import UserModule from '../../config/UserModule'
class MessageCell extends Component {
  render() {
      let { currentUser, info } = this.props;
      let differentStyle = {};
      if (info.From === currentUser) {differentStyle = {flexDirection: 'row-reverse',backgroundColor: '#92E649'};
      } else {differentStyle = {flexDirection: 'row',backgroundColor: '#FFFFFF'};
      }
      //这个主要用来显示tag的
      if(info.From===null)
      {
          return(
            <View style={[styles.messageCell, {alignItems: 'center'}]}>
              <View style={[styles.contentView, {backgroundColor: '#8f8f8f',fontSize:7}]}>
                  <Text style={[styles.messageCellText,{color:'white'}]}>{info.Tag}</Text>
              </View>
            <View style={styles.endBlankBlock} />
        </View>
          )
      }

      return (
          <View style={[styles.messageCell, {flexDirection: differentStyle.flexDirection}]}>
              <Image
                  source={{uri: info.avatar}}
                  style={styles.avatar}/>
                <View style={[styles.contentView, {backgroundColor: differentStyle.backgroundColor}]}>
                    <Text style={styles.messageCellText}>{info.Msg}</Text>
                </View>
              <View style={styles.endBlankBlock} />
          </View>
      );
  }
}

class ConsultantChatPage extends React.Component {
    _ScrollView
    ConsultantChatPagethis
    historypage = 0
    changelastnew = 0
    constructor(props) {
        super(props);
        this.state = {
        isRefresh : false,
        textInputHeight: 40,
        inputValue: '',
        data:new Array(),
        targetuser:0,
        self:0,
        ChatChanId:"",
    };
    ConsultantChatPagethis = this
    }

    static navigationOptions = ({navigation})=>{
        const { navigate } = navigation;
        return{
            
        title: RouteConfig["ConsultantChatPage"].name,
        }
    };


    componentDidMount () {
        this._handleWebSocketSetup()
        console.log("componentDidMount")
        NetModule.add(this.Broadcast,RouteConfig["ConsultantChatPage"].name)
        
        
    }
    
    componentWillUnmount () {
        NetModule.remove(RouteConfig["ConsultantChatPage"].name)
        console.log("componentWillUnmount")
    }

    _handleWebSocketSetup = () => {
        const { navigate } = this.props.navigation;
        var parameter = this.props.navigation.state.params
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
            UserInfo = UserModule.getqqLogininfo()
            this.state.targetuser = info.ConsultantId
            this.state.self = UserInfo.UserId 
            

            this.state.ChatChanId = UserInfo.UserId < this.state.targetuser ? UserInfo.UserId+"-"+this.state.targetuser:this.state.targetuser+"-"+UserInfo.UserId
            const ret = NetModule.GetChatHistoryByKey(this.state.ChatChanId,this.historypage);
            ret.then(datas=>{
                //console.log("historymsg:",datas)
                datas.forEach((data) => {
                    if(null!=data)
                    {
                        this.Broadcast(data)
                    }
                })
                
            }).catch(any=>{
                //console.log("_handleWebSocketSetup")
            })
            
            
            
        }
	}

    keyExtractor = (item,index) => index.toString()

    renderItem(item) {
        //console.log("renderItem",item)
        return (
            <MessageCell
                key={`cell-${item.index}`}
                currentUser={ConsultantChatPagethis.state.self}
                info={item.item}
            />
        );
    }
    _onSubmitEditing = () => {
        var Datainfo = {}
        userinfo = UserModule.getqqLogininfo()
        if(undefined != userinfo && null!=userinfo)
        {
            Datainfo.To = Number(this.state.targetuser)
            Datainfo.From = userinfo.UserId
            Datainfo.SessKey = userinfo.SessKey
            Datainfo.ChatChanId =0
            ConsultantChatPagethis.state.self = userinfo.UserId
        }
        

        // 远程发送
        var JsonInfo = {}
        JsonInfo.Msg=this.state.inputValue
        JsonInfo.Type=5
        JsonInfo.Users=Datainfo
        //转换数据类型

        this.setState({ inputValue: '' });
        NetModule.send(JsonInfo);
        
    }
    Broadcast(data)
    {
        var info =new Array()
        info["Msg"] = data.Msg
        info["avatar"]="http://www.lunarhook.com/static/icon/avatar.jpeg"
        info["From"] = data.Users.From
        info["Timestamp"] = Number(data.Timestamp)
        var newdata = new Array()
        newdata.push( info)
        newdata = newdata.concat(ConsultantChatPagethis.state.data)
        newdata.sort(function(a, b) {
            return a["Timestamp"] - b["Timestamp"];
        })
        ConsultantChatPagethis.setState({data:newdata})
        ConsultantChatPagethis.forceUpdate()
    }
    _Broadtag(tag,position='last')
    {
        var info =new Array()
        info["Tag"] = tag
        info["From"] = null
        info["Timestamp"] = 0
        if("last"==position)
        {
            info["Timestamp"] = Number(new Date())
        }
        else{
            var newdata = ConsultantChatPagethis.state.data
            if (undefined!=newdata[0] && null!=newdata[0])
            {
                newdata = newdata[0]
                if(null==newdata["From"])
                {
                    return//不重复插入最顶部数据
                }
                info["Timestamp"] = newdata["Timestamp"]-1
            }
        }
        var newdata = new Array()
        newdata.push( info)
        newdata = newdata.concat(ConsultantChatPagethis.state.data)
        newdata.sort(function(a, b) {
            return a["Timestamp"] - b["Timestamp"];
        })
        ConsultantChatPagethis.setState({data:newdata})
        ConsultantChatPagethis.forceUpdate()
    }
    _HasDataNew()
    {
        var ret = false
        var newdatas = new Array()
        newdatas = ConsultantChatPagethis.state.data;
        newdatas.forEach((newdata) => {
            if(null!=newdata)
            {
                //console.log("_HasDataNew",newdata["Timestamp"],this.changelastnew)
                if(newdata["Timestamp"]>this.changelastnew)
                {
                    this.changelastnew=newdata["Timestamp"],ret=true
                }
            }
        });
        return ret
    }

    _onPullMessage = async () => {

        this.setState({
            refreshing: true
        });
        this.historypage++
        // 历史消息推入
        const ret = NetModule.GetChatHistoryByKey(this.state.ChatChanId,this.historypage);
        ret.then(datas=>{
            console.log("_onPullMessage:",datas.length , [])
            datas.forEach((data) => {
                if(null!=data)
                {this.Broadcast(data)}
            });
            if(datas.length === 0)
            {
                NetModule.DeviceToast("没有更多数据了")
                this._Broadtag("没有更多数据了","top")
            }
        })

        this.setState({
            refreshing: false
        });
    }

  render()
  {

    const { navigate } = this.props.navigation;
      let content = (
      <View style={styles.container}>
           <ScrollView ref={(ScrollView)=>(this._ScrollView = ScrollView)}
           refreshControl={
            <RefreshControl
                refreshing={this.state.isRefresh}
                onRefresh={() => {
                    this._onPullMessage();
                }}
          />
          }>     
      <WingBlank size="lg">
      <WhiteSpace size="lg"/>
      <FlatList  
              extraData={this.state}
              data={this.state.data}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              onContentSizeChange={()=>{
                if(true == this._HasDataNew())
                {
                    this._ScrollView.scrollToEnd({animated: false})
                }
              }}
              />
      </WingBlank>
      </ScrollView>     
      <View style={[styles.bottomToolBar,{height:ScreenConfig.getTabBarHeight()}]}>
      <TextInput
                        style={[styles.input, {
                            height: Math.max(40, this.state.textInputHeight < 180 ? this.state.textInputHeight : 180 )
                        }]}
                        multiline={true}
                        controlled={true}
                        underlineColorAndroid="transparent"
                        returnKeyType="default"
                        value={this.state.inputValue}
                        placeholder="Type here to send message"
                        // ios only
                        enablesReturnKeyAutomatically={true}
                        onContentSizeChange={
                            (event) => {
                              if (event.nativeEvent.contentSize.height != this.state.textInputHeight){
                                this.setState({textInputHeight: event.nativeEvent.contentSize.height});
                              }
                            }
                        }
                        onChangeText={ (text) => {
                            this.setState({ inputValue: text });
                        }}
                    />

                    <Button
                        style={styles.sendButton}
                        textStyle={styles.sendButtonText}
                        disabled={!this.state.inputValue}
                        onPress={this._onSubmitEditing}
                        title={"发送"}
                    >
                        发送
                    </Button>
                    </View>
            </View>
          )
          if (Platform.OS === 'ios') {
            return (
                <KeyboardAvoidingView
                    behavior="padding"
                    style={styles.KeyboardAvoidingView}
                    keyboardVerticalOffset={this.props.keyboardVerticalOffset || 64}
                >
                    {content}
                </KeyboardAvoidingView>
            );
        } else {
            return content;
        }
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
  KeyboardAvoidingView: {
    flex: 1
},
bottomToolBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: UiConfig.Color.LittleGrey
},
sendButton: {
    marginHorizontal: 10,
    backgroundColor: UiConfig.Color.WechatGreen,
    borderColor: UiConfig.Color.WechatGreen
},
sendButtonText: {
    color: UiConfig.Color.White
},
input: {
    flex: 1,
    color: UiConfig.Color.Black,
    fontSize: UiConfig.FontSize.Main,
    padding: 10
},
messageCell: {
    marginTop: 5,
    marginBottom: 5,
},
messageCellText: {
    fontSize: UiConfig.FontSize.Content
},
avatar: {
    borderRadius: 4,
    margin: 5,
    width: 40,
    height: 40
},
contentView: {
    borderRadius: 4,
    padding: 4,
    paddingHorizontal: 8,
    overflow: 'hidden',
    flex: 1,
    margin: 5,
    justifyContent: 'center'
},
endBlankBlock: {
    margin: 5,
    width: 50,
    height: 40
}
});
module.exports=ConsultantChatPage;  