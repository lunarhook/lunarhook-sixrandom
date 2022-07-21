

import React, { Component } from 'react';
import { WhiteSpace, View, FlatList, Text, DeviceEventEmitter, TouchableOpacity } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import { StyleConfig, FontStyleConfig } from '../config/StyleConfig';
import { WebView } from 'react-native-webview';


class PrivacyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected:false
    };
  }
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;

    return {
      title: RouteConfig["PrivacyPage"].name,
      headerLeft: () => (
        <TouchableOpacity onPress={() => { navigate(RouteConfig['kitPage'].route, { text: "refresh" }) }}>
          <Text>    {"     返回"}</Text>
        </TouchableOpacity>)
    }
  };
  componentWillUnmount() {
    DeviceEventEmitter.emit('privacycheck', '')
  }

  render() {

    var Privacyment = new Array()
    Privacyment.push("")
    Privacyment.push("1. 北京月昱科技有限公司尊重并保护所有使用服务用户的个人隐私权。为了给您提供服务，北京月昱科技有限公司会按照本隐私权政策的规定使用和披露您的个人信息。但北京月昱科技有限公司将以高度的勤勉、审慎义务对待这些信息。除本隐私权政策另有规定外，在未征得您事先许可的情况下 ，北京月昱科技有限公司不会将这些信息对外披露或向第三方提供。北京月昱科技有限公司会不时更新本隐私权政策 。 您在同意北京月昱科技有限公司服务使用协议之时，即视为您已经同意本隐私权政策全部内容。本隐私 权政策属于北京月昱科技有限公司服务使用协议不可分割的一部分。")
    Privacyment.push("a) 在您注册北京月昱科技有限公司帐号时，您根据北京月昱科技有限公司要求提供的个人注册信息；")
    Privacyment.push("b) 在您使用北京月昱科技有限公司网络服务，或访问北京月昱科技有限公司平台网页时，北京月昱科技有限公司自动接收并记录的您的浏览器和所在设备的信息，包括但不限于您的IP地址、浏览器的类型、使用的语言、访问日期和时间、软硬件特征信息及您需求的网页记录等数据；")
    Privacyment.push("c) 北京月昱科技有限公司通过合法途径从商业伙伴处取得的用户个人数据。")
    Privacyment.push("d) 北京月昱科技有限公司通过软件内测试工具获取的信息采集归属北京月昱科技有限公司所有，同时也属于用户的隐私数据，受到相关隐私政策保护")
    Privacyment.push("您了解并同意，以下信息不适用本隐私权政策：")
    Privacyment.push("a) 您在使用北京月昱科技有限公司平台提供的搜索服务时输入的关键字信息；")
    Privacyment.push("b) 北京月昱科技有限公司收集到的您在北京月昱科技有限公司使用时收集到的相关信息数据，包括但不限于参与活动、成交 信息及评价详情；")
    Privacyment.push("c) 违反法律规定或违反北京月昱科技有限公司规则行为及北京月昱科技有限公司已对您采取的措施。")
    Privacyment.push("2. 信息使用")
    Privacyment.push("a) 北京月昱科技有限公司不会向任何无关第三方提供、出售、出租、交易您的个人信息，除非事先得到您的许可，或该第三方和北京月昱科技有限公司（含北京月昱科技有限公司关联公司）单独或共同为您提供服务 ，且在该服务结束后，其将被禁止访问包括其以前能够访问的所有这些资料。")
    Privacyment.push("b) 北京月昱科技有限公司亦不允许任何第三方以任何手段收集、编辑、出售或者无偿传播您的个人信息。 任何北京月昱科技有限公司平台用户如从事上述活动，一经发现，北京月昱科技有限公司有权立即终止与该用户的服务协议。")
    Privacyment.push("c) 为服务用户的目的，在获得用户授权许可以后，可以使用授权的数据信息发送给第三方机构或者提供服务的第三方个人，授权后的第三方持有信息不在受到本隐私权政策的保护")
    Privacyment.push("3. 信息披露 在如下情况下，北京月昱科技有限公司将依据您的个人意愿或法律的规定全部或部分的披露您的个人信息 ：")
    Privacyment.push("a) 经您事先同意，向第三方披露；")
    Privacyment.push("b) 为提供您所要求的产品和服务，经过授权后必须和第三方分享的您的个人信息；")
    Privacyment.push("c) 根据法律的有关规定，或者行政或司法机构的要求，向第三方或者行政、司法机构披露；")
    Privacyment.push("d) 如您出现违反中国有关法律、法规或者北京月昱科技有限公司服务协议或相关规则的情况，需要向第三方披露；")
    Privacyment.push("e) 其它北京月昱科技有限公司根据法律、法规或者网站政策认为合适的披露。")
    Privacyment.push("4. 信息存储和交换，北京月昱科技有限公司收集的有关您的信息和资料将保存在北京月昱科技有限公司及（或）其关联公司的服务器上，这些信息和资料可能传送至您所在国家、地区或北京月昱科技有限公司收集信息和资料所在地的境外并在境外被访问、存储和展示(目前并不支持中国以外的地区用户注册)。")
    Privacyment.push("5. 信息安全")
    Privacyment.push("a) 北京月昱科技有限公司帐号均有安全保护功能，请妥善保管您的用户名及密码信息。北京月昱科技有限公司将通过对用户密码进行加密等安全措施确保您的信息不丢失，不被滥用和变造。尽管有前述安全措施 ，但同时也请您注意在信息网络上不存在“完善的安全措施”。")
    Privacyment.push("b) 在使用北京月昱科技有限公司网络服务进行网上服务时，您不可避免的要向提供服务对或潜在的服务提供方方披露自己的个人信息，如联络方式或者邮政地址。请您妥善保护自己的个人信息，仅在必要的情形下向他人提供。如您发现自己的个人信息泄密，尤其是北京月昱科技有限公司用户名及密码发生泄露，请您立即联络北京月昱科技有限公司客服，以便北京月昱科技有限公司采取相应措施。")
    Privacyment.push("6. 开发者信息")
    Privacyment.push("a) 乾坤爻版本归属北京月昱科技有限公司")
    Privacyment.push("b) 业务邮件developer@lunarhook.com")
    Privacyment.push("7. 隐私申请权限说明")
    Privacyment.push("a) 允许应用自动拨打电话。")
    Privacyment.push("b) 显示弹框、全屏界面到其他应用上面")
    Privacyment.push("c) 允许应用修改或删除存储卡上的照片、媒体内容和文件。该项目是提供服务必需支持的权限。")
    Privacyment.push("d) 允许应用基于基站、 Wi-Fi 等网络源获取位置信息。")
    Privacyment.push("e) 允许应用拍摄照片和视频以支持截图功能。该项目是提供服务必需支持的权限。")
    Privacyment.push("f) 允许应用读取存储卡上的照片、媒体内容和文件。")
    Privacyment.push("g) 允许应用获取本机号码、通话状态以及拨打的号码。")

      if(true==this.state.isConnected)
      {
        return (<WebView
          source={{uri: 'https://www.lunarhook.com/privacy'}}
          //style={{marginTop: 20}}
        />)
      }else
      {
        NetInfo.fetch().then(state=>{
          this.setState({isConnected:state.isConnected})
        })
        return(<FlatList
          ref={(flatList) => this._flatList = flatList}
          useFlatList={true}
          //1数据的获取和渲染
          //data={undefined != content[this.state.keyindex]?content[this.state.keyindex]:""}
          data={Privacyment}
          renderItem={({ item, index }) => (<Text style={{ fontSize: FontStyleConfig.getFontApplySize() + 15, paddingLeft: 15, paddingRight: 15 }}>{item}</Text>)}
        >
        </FlatList>)
      }
  }
}

module.exports = PrivacyPage;  