
import React, { Component } from 'react';
import { Alert } from 'react-native';
//import * as QQAPI from 'react-native-qq';
//import fs from 'react-native-fs';
import NetModule from '../net/NetModule'
import {NetApi} from '../net/NetApi'
import * as WeChat from 'react-native-wechat';
import WechatShare from './WechatShare'

let UserModulethis
class UserModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    UserModulethis = this;

  }
  ticktimecircle = true==__DEV__?10:60
  logout()
  {
    NetModule.updatetokeninfo(0,"","","")
  }
  UpdateRegCheck(mobile, password,Code){
    const rpromise = new Promise(function (resolve, reject) {
      var para = { "Mobile": mobile, "Password": password,"Code":Code}
      //console.log("UpdateRegCheckfetch", para, NetApi["UpdateReg"].url)
      NetModule.fetchRequest(NetApi["UpdateReg"].url, NetApi["UpdateReg"].method, para).then(T => {
        //console.log("login",T)
        if ("Success_200" == T.message) {
          NetModule.updatetokeninfo(T.data.UserId,T.data.Token,T.data.RefreshToken,mobile)
          resolve(T);
        }
        else {
          resolve("regfail");
        }

      }).catch((err) => {
        reject(err)
      })
    })
    return rpromise
  }
  Reg(mobile){
    const rpromise = new Promise(function (resolve, reject) {
      var para = { "Mobile": mobile }
      //console.log("Regfetch", para, NetApi["Reg"].url)
      NetModule.fetchRequest(NetApi["Reg"].url, NetApi["Reg"].method, para).then(T => {
        //console.log("Reg",T)
        if ("Success_200" == T.message) {
          resolve(T);
        }
        else {
          resolve("");
        }
      }).catch((err) => {
        reject(err)
      })
    })
    return rpromise
  }
  RegCheck(mobile, password,Code){
    const rpromise = new Promise(function (resolve, reject) {
      var para = { "Mobile": mobile, "Password": password,"Code":Code}
      //console.log("registerfetch", para, NetApi["Login"].url)
      NetModule.fetchRequest(NetApi["RegCheck"].url, NetApi["RegCheck"].method, para).then(T => {
        //console.log("login",T)
        if ("Success_200" == T.message) {
          NetModule.updatetokeninfo(T.data.UserId,T.data.Token,T.data.RefreshToken,mobile)
          resolve(T);
        }
        else {
          resolve("regfail");
        }

      }).catch((err) => {
        reject(err.message)
      })
    })
    return rpromise
  }

  login(mobile, password) {
    const rpromise = new Promise(function (resolve, reject) {
      var para = { "Mobile": mobile, "Password": password}
      //console.log("loginfetch", para, NetApi["Login"].url)
      NetModule.fetchRequest(NetApi["Login"].url, NetApi["Login"].method, para).then(T => {
        //console.log("login",T)
        if ("Success_200" == T.message) {
          NetModule.updatetokeninfo(T.data.UserId,T.data.Token,T.data.RefreshToken,mobile)
          resolve(T);
        }
        else {
          resolve("loginfail");
        }

      }).catch((err) => {
        reject(err.message)
      })
    })
    return rpromise
  }
  token(mobile, token,refreshtoken) {
    const rpromise = new Promise(function (resolve, reject) {
      var para = { "Mobile": mobile, "token":token,"refreshtoken":refreshtoken}
      //console.log("loginfetch", para, NetApi["Login"].url)
      NetModule.fetchRequest(NetApi["Token"].url, NetApi["Login"].method, para).then(T => {
        if ("success_200" == T.message) {
          NetModule.updatetokeninfo(T.data.UserId,T.data.Token,T.data.RefreshToken,mobile)
          resolve("OK");
        }
        else {
          resolve("tokenfail");
        }

      }).catch((err) => {
        reject(err.message)
      })
    })
    return rpromise
  }
  WCOAuth() {
    
    return WechatShare.WechatLogin()
  }
  SyncFileServer=async(kind,filename,content)=>
  {
    
    const rpromise = new Promise(async function (resolve, reject) {
      o= await UserModulethis.getLoginInfo()
      var para = { "Kind": kind,"Filename":String(filename),"Content":content,"Mobile":o.mobile}

      NetModule.fetchRequest(NetApi["SyncFileServer"].url, NetApi["SyncFileServer"].method, para).then(T => {
        if (2000 == T.code) {
          resolve(T);
        }
        else {
          resolve("SyncFileServerfail");
        }

      }).catch((err) => {
        resolve(err.message)
      })
    })
    return rpromise
  }
  SyncFileClient(mobile,info)
  {
    const rpromise = new Promise(function (resolve, reject) {
      var para = { "Mobile": mobile,"Filename":info}
      NetModule.fetchRequest(NetApi["SyncFileClient"].url, NetApi["SyncFileClient"].method, para).then(T => {
        if (2000 == T.code) {
          resolve(T);
        }
        else {
          resolve("SyncFileClientfail");
        }

      }).catch((err) => {
        reject(err.message)
      })
    })
    return rpromise
  }
  FileInfo(mobile)
  {
    NetModule._restore_storage = false
    const rpromise = new Promise(function (resolve, reject) {
      var para = { "Mobile": mobile}
      //console.log("FileInfo", para, NetApi["FileInfo"].url)
      NetModule.fetchRequest(NetApi["FileInfo"].url, NetApi["FileInfo"].method, para).then(T => {
        if (2000 == T.code) {
          //console.log("FileInfo",T)
          resolve(T);
        }
        else {

          resolve("FileInfofail");
        }

      }).catch((err) => {
        reject(err.message)
      })
    })
    return rpromise
  }

  islogin = async (rsync) =>{
    var o =  JSON.parse("{}")    
    LoginInfo = await NetModule.checklogin(rsync)
    o.ret = false
    o.LoginInfo = LoginInfo
    if (undefined != LoginInfo) {
      if ("" != LoginInfo.token && "" != LoginInfo.refreshtoken && 0!=LoginInfo.userId) {
        o.ret = true
        //console.log("islogin",o)
        return o
      }
    }
    //console.log("islogin",o)
    return o
  }
  getLoginInfo= async ()=>{ return await NetModule.checklogin() }

  str2date = (dateString)=> {
    var d = new Date(Number(dateString)); //就得到普通的时间了 
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; 
    var curr_year = d.getFullYear();
    String(curr_month).length < 2 ? (curr_month = "0" + curr_month): curr_month;
    String(curr_date).length < 2 ? (curr_date = "0" + curr_date): curr_date;
    var yyyyMMdd = curr_year + "/" + curr_month +"/"+ curr_date;
    return yyyyMMdd;
  }

}
var userModule = new UserModule()
module.exports = userModule;  