import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, ScrollView, Alert, Text, FlatList, Animated } from 'react-native';
import RouteConfig from '../config/RouteConfig'
import IconConfig from '../config/IconConfig'
import { Card, Button, WingBlank, WhiteSpace, List, Icon, Checkbox ,Accordion} from '@ant-design/react-native';
import Search from 'react-native-search-box';
import QIndexPage from './QDateBase/QIndexPage'
import Highlighter from 'react-native-highlight-words';

const AgreeItem = Checkbox.AgreeItem;
const CheckboxItem = Checkbox.CheckboxItem;
const { width, height } = Dimensions.get('window');
let CourseSearchPagethis = null
class CourseSearchPage extends React.Component {
  constructor(props) {
    super(props);
    var arr = []
    arr["说文"] = true
    arr["尔雅"] = true
    arr["解惑"] = true
    arr["声律启蒙"] = true
    arr["易经"] = true
    arr["老子"] = true
    arr["庄子"] = true
    arr["论语"] = true
    arr["孟子"] = true
    arr["中庸"] = true
    arr["大学"] = true
    this.state = {
      dataSource: [],
      searchText: "",
      keyindex: 0,
      filter :arr,
      activeSections: [2],
    };
    CourseSearchPagethis = this
    this.onChange = activeSections => {
      this.setState({ activeSections });
    };
  };


  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      headerRight: () => (<Icon name="bars" style={{ paddingRight: 30 }} onPress={() =>
        CourseSearchPagethis.drawer && CourseSearchPagethis.drawer.openDrawer()
      } />),

      title: RouteConfig["CourseSearchPage"].name,
    }
  };


  onSearch = (searchText) => {

    searchText = undefined == searchText ? "" : searchText
    if ("" != searchText) {
      this.state.searchText = searchText
    }
    else if ("" == searchText) {
      searchText = this.state.searchText
    }
    if ("" == searchText && "" == this.state.searchText) {
      this.onSearchCancel()
      return
    }

    var ret = new Array()
    var splitsubsearchText = searchText
    splitsubsearchText = splitsubsearchText.split("")
    splitsubsearchText.push(searchText)
    splitsubsearchText.forEach(element => {
      ret = ret.concat(QIndexPage.serachText(element))
    })
    ret = Array.from(new Set(ret));
    ret.push({"index":"","content":""})
    ret.push({"index":"","content":""})
    ret.push({"index":"","content":""})
    ret.push({"index":"","content":""})
    this.setState({ dataSource: ret })
  }
  onSearchCancel = () => {
    return new Promise((resolve, reject) => {
      this.setState({ dataSource: [] })
      resolve();
    });
  }

  showTips() {
    if ("" == this.state.searchText) {
      return (
        <View>
          <Text style={{ fontSize: 18, color: "#AAAAAA", textAlign: "center" }}>请输入查询</Text>
        </View>
      )
    }
  }
  addfilter(text,ret)
  {
    var arr = this.state.filter 
    if (""!=text)
    {
      arr[text] = ret
    }
    else
    {
      for(var key in arr)
      {
        arr[key] = ret
      }
    }
   
    this.setState({filter:arr})
  }
  render() {

    if(undefined!=this.props.navigation.state.params && ""!=this.props.navigation.state.params.text)
    {
      var searchtext = this.props.navigation.state.params.text
      this.props.navigation.state.params.text = ""
      this.setState({searchText:searchtext})
      this.onSearch(searchtext)
      //return (<View></View>)
    }
    const { navigate } = this.props.navigation;
    var subsearchText = this.state.searchText.split("")
    subsearchText.push(this.state.searchText)

    var arr = this.state.filter
    var allfilter  = true
    var allitem = new Array()
    var i = 0
    for(var key in arr){
      allfilter =  allfilter && arr[key]
      let keyname = key
      allitem.push(
        <CheckboxItem key={i++} checked={this.state.filter[key]} onChange={event => {
          this.addfilter( keyname,event.target.checked );
        }}>{key}</CheckboxItem>
      )
    }
    return (


      <View>


        <Search
          ref="search_box"
          onSearch={this.onSearch}
          onCancel={this.onSearchCancel}
          placeholder="搜索测评"
          cancelTitle="取消"
          keyboardDismissOnSubmit={true}
          backgroundColor="#ffffff"
          titleCancelColor="#000000"
        />
        <Accordion
          onChange={this.onChange}
          activeSections={this.state.activeSections}
        >
          <Accordion.Panel header="搜索条件">
          <List style={{ marginTop: 12 }}>
          {allitem}
           <CheckboxItem checked={allfilter} onChange={event => {
              this.addfilter( "",event.target.checked );
            }}>全选</CheckboxItem>

          </List>        
        </Accordion.Panel>
        </Accordion>
        <FlatList
          //1数据的获取和渲染
          data={this.state.dataSource}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(data) =>{
            var arr = this.state.filter
            let ret = false
            for(var key in arr)
            {
              if(arr[key]==true && -1!=data.item.index.indexOf(key))
               {
                ret = true
               }
            }
            if(ret==false)
            {
              return
            }
          return (<View><WhiteSpace size="xl" />
              <Highlighter highlightStyle={{ backgroundColor: 'yellow' }}
                style={{ fontSize: 15, paddingLeft: 15, paddingRight: 15 }}
                searchWords={subsearchText}
                textToHighlight={data.item.content} />
              <WhiteSpace size="xl" />
              <Text style={{ fontSize: 15, paddingLeft: 15, paddingRight: 15, textAlign: "right" }}>{data.item.index}</Text>
              <WhiteSpace size="xl" />
            </View>)
          } }/>
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        {this.showTips()}
        <WhiteSpace size="xl" />
        <Text style={{ fontSize: 11, color: "#DDDDDD", textAlign: "center" }}>--end--</Text>

      </View>
    )
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    height: 45,
    //borderWidth:1,
    marginLeft: 10,
    paddingLeft: 10,
    //borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    //textAlign:'center', 
    //textDecorationLine:'underline'
  },

  delete: {
    color: "#d8fffa",
    marginLeft: 30,
    alignItems: 'flex-start',//水平靠右
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: 'black',
    borderBottomWidth: 0,
    justifyContent: 'center',
    height: 120,
  },
  rowBack: {
    alignItems: 'center',
    //backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75
  },
  backLeftBtnLeft: {
    //backgroundColor: 'blue',
    left: 0
  },
  backRightBtnLeft: {
    //backgroundColor: 'blue',
    right: 75
  },
  backRightBtnRight: {
    //backgroundColor: 'red',
    right: 0
  },
  controls: {
    alignItems: 'center',
    marginBottom: 30
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5

  }
});

module.exports = CourseSearchPage;  