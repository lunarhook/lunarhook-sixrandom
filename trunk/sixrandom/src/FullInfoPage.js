
var Dimensions = require('Dimensions');
import React, {Component} from 'react';
import {StyleSheet,View, Alert,  Text,ListView,RefreshControl,Button} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import { StackNavigator } from 'react-navigation';
import SixrandomModule from './SixrandomModule'
import StorageModule from './StorageModule'
import ShareModule from './ShareModule'

var kWidth = Dimensions.get('window').width;
var kHeight = Dimensions.get('window').height;

var parameter = ""

class FullinfoPage extends React.Component {
    constructor(props) {

  super(props);
  
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: dataSource,
		};
    };

    componentDidMount() {
		this.timer = setTimeout(
			() => {
				this.refreshlist()
			},
			200
		);
	}

  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    return{
    headerRight:(<Button title="分享" onPress={ () => ShareModule.Sharetotimeline() }/>),
    title: '卦象详解',
    }
  };
 
  
  refreshlist()
  {
        const { navigate } = this.props.navigation;

      parameter = this.props.navigation.state.params

      var _ret = SixrandomModule.build(parameter);
      var _build = SixrandomModule.get_random_draw()

    this.setState({  
            dataSource: this.state.dataSource.cloneWithRows(_build) }); 

  }

   _renderRow(rowData) {
    //alert(rowData.name)
    return (
      
      <View style={styles.list}>
        <Text>{rowData}</Text>
      </View>
    );
  }

   _export() {  
        Alert.alert(
        '免费电话咨询',
        '13641392723',
        [
          {text: '取消', onPress: () => console.log('Cancel export'), style: 'cancel'},
          {text: '连接', onPress: () => this._call()},
        ],
        { cancelable: false }
      )
       
    }
    
    _call()
    {}
  
  render(){
      const { navigate } = this.props.navigation;

      jump = false;
      
        return(
    <View style={styles.container}>

        

            <ListView
            enableEmptySections={true}
						dataSource={this.state.dataSource}
						renderRow={this._renderRow.bind(this)}
						initialListSize={1}
						pageSize={8}
						refreshControl={
							<RefreshControl
                refreshing={false}
								onRefresh={this.refreshlist.bind(this)}
								enabled={false}
								colors={['#ff0000', '#00ff00', '#0000ff', '#3ad564']}
							/>}/>    
              <TabNavigator 
       tabBarStyle={{ height: 40 }}
       sceneStyle={{ paddingBottom: 30 }}>  
                  <TabNavigator.Item
                        title="解卦咨询"  
                        onPress={() => this._export()
                        }  
                        titleStyle={styles.menufont}>  
                    </TabNavigator.Item>  
                    <TabNavigator.Item
                        title="微信沟通"  
                        onPress={() => ShareModule.sharetosesshareToSessionWithPara(parameter)
                        }  
                        titleStyle={styles.menufont}>  
                    </TabNavigator.Item>  
                </TabNavigator>  
              </View>  
    )
    }
}
var styles = StyleSheet.create ({
  container: {
    flex:1
  },
    webSize: {
    width:kWidth,
    height:kHeight
  },
  menufont:{
    fontSize:15,
    color: '#333333', 
    height:25
  },
  list:{
    height:25,
    //borderWidth:1,
    marginLeft: 5,
    paddingLeft:5,
     marginRight: 5,
    paddingRight:5,
    //borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    //textAlign:'center', 
    //textDecorationLine:'underline'
    flexWrap:'wrap',
    alignItems: 'flex-start',
    //flexDirection: 'row',
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
   button:{
    height: 40,
    width: 50,
    backgroundColor:'transparent',
   justifyContent:'center',
   borderRadius: 20,
    },
});
module.exports=FullinfoPage;  