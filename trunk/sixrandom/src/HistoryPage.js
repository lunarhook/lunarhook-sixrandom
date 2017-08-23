
var Dimensions = require('Dimensions');
import React, {Component} from 'react';
import {StyleSheet,View,TouchableOpacity,Alert,  Text,RefreshControl,ListView} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import { StackNavigator } from 'react-navigation';

import StorageModule from './StorageModule'
import ValueTypeModule from './ValueTypeModule'
import SixrandomModule from './SixrandomModule'

var HistoryNameArray = []

class HistoryPage extends React.Component {
   constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			isLoading: false,
			dataSource: dataSource,
		};
  }
    static navigationOptions = {
    title: '六爻历史',
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

  _renderRow(rowData) {
    const { navigate } = this.props.navigation;
    //alert(rowData.name)
    return (
      
      <View style={styles.list}>
      <TouchableOpacity style={styles.button} onLongPress={()=>this._deleteRow(rowData)}onPress={ () => navigate('SixrandomMainPage',rowData.url) }>
        <Text>{rowData.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
   _deleteRow(rowData) {  
        Alert.alert(
        '提示',
        '删除: '+rowData.name,
        [
          {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: '删除', onPress: () => this._deletehistory(rowData)},
        ],
        { cancelable: false }
      )
       
    }
  _deletehistory(rowData)
  {
      StorageModule.remove({key:'user',id:rowData.id});
      this.refreshlist();
  }
  
  refreshlist()
  {
    //this.setState({isLoading: true});
    const { navigate } = this.props.navigation;
    HistoryNameArray = []
    //StorageModule.remove({key:"last"})
    StorageModule.getAllDataForKey('user').then(ids => {

        
            //alert(ids)
            for (i = 0;i<ids.length;i++)
              {
                try {
                  var randArray = ids[i];
                  var date = new Date(Number(randArray[7]))
                  var lunar = ""
                  for (index =1;index<7;index++)
                  {
                    lunar = lunar+(randArray[index]).toString()
                  }
                  var result = SixrandomModule.get_sixrandom_name(lunar)
                  var question = randArray[0]
                  var obj = {
                    name:date.toLocaleDateString() + "  求测：" + ValueTypeModule[question] +" "+result+" "+ (""!=randArray[8]?("   提示：" + randArray[8]):""),
                    url:"?date="+date+"&lunar="+lunar+"&question="+question,
                    id:randArray[7],
                  }
                  HistoryNameArray[i] = obj
                  
                } catch (error) {
                  StorageModule.remove({key:'user',id:randArray[7]});
                  HistoryNameArray[i] = undefined
                }
                
                  //alert(HistoryNameArray[i])
              }     
              HistoryNameArray.reverse()
              //去掉存储异常的对象
              for(var i=0,len=HistoryNameArray.length;i<len;i++)
              { 
                if(undefined == HistoryNameArray[i]){ 
                  HistoryNameArray.splice(i,1); 
                  len--; 
                  i--; 
                } 
              } 
              this.setState({  
              isLoading: false,  
              dataSource: this.state.dataSource.cloneWithRows(HistoryNameArray) }); 
              if(ids.length==0)
                {
                  this.props.navigation.goBack()
                } 
              //alert(HistoryNameArray)
              return
          
        

          
    });

    
    this.setState({  
            isLoading: false,  
            dataSource: this.state.dataSource.cloneWithRows(HistoryNameArray) });  
            return
  }
  render()
  {
    const { navigate } = this.props.navigation;
    return (
            <ListView
            enableEmptySections={true}
						dataSource={this.state.dataSource}
						renderRow={this._renderRow.bind(this)}
						initialListSize={1}
						pageSize={8}
						refreshControl={
							<RefreshControl
								refreshing={this.state.isLoading}
								onRefresh={this.refreshlist.bind(this)}
								enabled={true}
								colors={['#ff0000', '#00ff00', '#0000ff', '#3ad564']}
							/>
						}
					/>)
  }

}

var styles = StyleSheet.create ({
  container: {
    flex:1
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
module.exports=HistoryPage;  