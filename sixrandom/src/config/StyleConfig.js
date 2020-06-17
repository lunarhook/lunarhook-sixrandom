import React, { Component } from 'react';
import { StyleSheet ,Platform} from 'react-native';
import ScreenConfig from './ScreenConfig';
import IconConfig from './IconConfig'
import {HistoryArrayGroup} from './StorageModule'

let FontStyleConfigThis = null
class FontStyleConfig extends React.Component {
  constructor(props) {
      super(props);
      this.state = {changesize:5
      };
      FontStyleConfigThis = this;
  }

  async reload()
  {
    try{
      const ret = await  HistoryArrayGroup.load("FontStyleConfig")
      FontStyleConfigThis.state.changesize = undefined != ret?ret:5;
      console.log("FontStyleConfig recover", ret)
    }catch{
      FontStyleConfigThis.state.changesize = 5;
    }
     
  }
  async setfontsize(value)
  {

      FontStyleConfigThis.state.changesize = value
      
      return HistoryArrayGroup.save("FontStyleConfig",value)
    
  }
  getFontChangeSize()
  {
    return FontStyleConfigThis.state.changesize
  }
  getFontApplySize()
  {
    return FontStyleConfigThis.state.changesize - 5 + (Platform.OS === 'android' ? -5 : 0)
  }

  buildstyle()
  {


    StyleConfig= StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#ffffff',
      },
      astrofont:
      {
          fontFamily:(Platform.OS === 'ios')?'xxastro':'xxastro5',
          fontSize:this.getFontApplySize()+ 55,
          lineHeight:60, 
          textAlign:'center',
          height:60,
          width:60
      },
      menufont: {
        fontSize: ScreenConfig.__navigationMenuFontsize(),
        color: '#333333',
        height: ScreenConfig.getFontheight(),
        backgroundColor: '#ffffff',
      },
      hurdle_title: {
        color: '#333',
        fontSize: this.getFontApplySize()+ 16,
        marginLeft: 15
      },
      hurdle_show_text: {
        color: IconConfig.colorblue,
        fontSize: this.getFontApplySize()+ 14
      },
      hurdle_edit: {
        height: 24,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ff6548',
        marginRight: 15,
        borderRadius: 12
      },
      hurdle_edit_text: {
        color: '#ff6548',
        fontSize: this.getFontApplySize()+ 16
      },
      selected_item_text: {
        fontSize: this.getFontApplySize()+ 14,
        color: '#444',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center',
      },
      list: {
        backgroundColor: '#ffffff', 
        fontSize:this.getFontApplySize()+14,
        lineHeight: (this.getFontApplySize()+14)*2,
        justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
        flexWrap: 'wrap',
        alignItems: 'flex-start',
      },
      columehigth: {
        backgroundColor: 'white',
        fontSize:this.getFontApplySize()+14,
        width: 20,
        height: 150,
      },
      columelist: {
        fontSize:this.getFontApplySize()+14,
        justifyContent: 'space-between', //虽然样式中设置了 justifyContent: 'center'，但无效 
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: 'white',
      },
    });
    return StyleConfig
  }
}
var o = new FontStyleConfig()


var StyleConfig = o.buildstyle()

module.exports = {StyleConfig:StyleConfig,FontStyleConfig: o};  