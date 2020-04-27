import React, {Component} from 'react';
import {StyleSheet,View,TouchableOpacity,Alert, Text,RefreshControl,ScrollView,AppState} from 'react-native';
import {NetApi,NetInfoCode,DevTimeManager} from './NetApi'
import NetStorage from './NetStorage'
import {HistoryArrayGroup} from '../config/StorageModule'
import ScreenConfig from '../config/ScreenConfig'


class NetModule extends React.Component {
    NetModulethis
    constructor(props) {
    super(props);
    this.state = {
        devicews: null,
        devicereconnectcount :0,
        UserId:"",
        SocketId:undefined,
        token:"",
        mobile:"",
        refreshtoken:"",
        refreshtokentimestamp:undefined,
    }
    //console.log("NetModule load")
        NetModulethis = this
        this.nettick()
        this.syncTick()

    }
    BCcount = 0
    _handlelist = new Map()
    Netdefaultreconnect=false
    NetActive=false
    NetTickState= NetInfoCode["tickstateidle_204"]
    _restore_storage = false
    synctickhandle = undefined


    componentWillUnmount() {
        this.timer && clearInterval(this.timer); 
    }
    /*
    nettick操作是不会停止的，除非系统退出，否则一直心跳
    */
    nettick()
    {
        NetModulethis.timer = setInterval(async() => {
            NetModulethis.NetTickState = await NetModulethis.Tokentick(false)
        }, DevTimeManager["nettick"]);
    }
    /*
    数据同步一共有三个情况
    1、系统初始化
    2、网络断开以后，检车恢复
    3、用户注销以后
    请检查syncTick的信息，不要漏掉
    */
    syncTick()
    {
        NetModulethis._restore_storage = false
        clearInterval(NetModulethis.synctickhandle)
        console.log("syncTick reinit:",DevTimeManager["syncTick"])
        NetModulethis.synctickhandle = setInterval(async() => 
        {
            console.log("syncTick setInterval:",DevTimeManager["syncTick"])
            //数据同步应该先检查网络,只有网络接通才可以同步数据，因此idle的等待状态不能使用不能同等用网络正常状态
            if(NetModulethis.NetTickState == NetInfoCode["success_200"])
            {
                o = await NetModulethis.restoretokeninfo()
                //只有检测到登陆状态才可以同步，restoretokeninfo中的idle204状态，已经在检查网络的时候剔除
                console.log("syncTick begin:",o)
                if(o.network==true && ""!=o.mobile)
                {
                    await NetModulethis.SyncAllHistory()
                    if(NetModulethis._restore_storage)
                    {
                        clearInterval(NetModulethis.synctickhandle)
                        NetModulethis.synctickhandle = undefined
                    }
                }
            }
        }, DevTimeManager["syncTick"]);
    }

    async SyncAllHistory(){
        if(""==NetModulethis.state.mobile)
        {
            console.log("SyncAllHistory need login first")
            return
        }
        if(NetModulethis._restore_storage == false){
            //先问服务器数据，同步到本地
            var para = { "Mobile": NetModulethis.state.mobile}
            await NetModulethis.fetchRequest(NetApi["FileInfo"].url, NetApi["FileInfo"].method, para).then(T => {
                if (undefined!=T && 2000 == T.code) {
                    var ret_SyncFileClient = true
                    if (null!=T.data) {//服务器有可能完全没有用户信息
                        T.data.forEach(async(element) => {
                            var para = { "Mobile":  NetModulethis.state.mobile,"Filename":element.File}
                            let R = await NetModulethis.fetchRequest(NetApi["SyncFileClient"].url, NetApi["SyncFileClient"].method, para)
                            if (undefined!=R && 2000 == R.code) {
                                ret_SyncFileClient = ret_SyncFileClient && true
                                console.log("SyncFileClient",element.File,R.data)
                                await HistoryArrayGroup.SyncFileClient(R.data,element.File)
                            }
                            else{
                                ret_SyncFileClient =false
                            }
                        });

                            if(ret_SyncFileClient)
                            {
                                console.log("SyncAllHistory SyncFileClient finish")
                            }else{
                                console.log("SyncAllHistory SyncFileClient error")
                            }

                    }else{
                        console.log("SyncAllHistory SyncFileClient none")
                    }
                    
                    
                    NetModulethis._restore_storage = true
                    HistoryArrayGroup.SyncAllHistory()
                }else
                {
                    console.log("SyncAllHistory SyncFileClient network error",T)
                }

            }).catch((err)=>{
                console.log("SyncAllHistory SyncFileClient data error")
            })
            
        }
        //在同步本地到服务器，确认成功后，添加sync，但是提交数据的格式完全是客户端自己保证，这里服务器并未做验证，只是同步
        var ret_SyncFileGroupServer =true
        list = await HistoryArrayGroup.SyncFileGroupServer()
        list.forEach(async(element) => {
            obj = element
            var Jstr =JSON.stringify(obj)
            var para = { "Kind": String(obj.kind),"Filename":String(obj.id),"Content":Jstr,"Mobile":NetModulethis.state.mobile}
            let T = await NetModulethis.fetchRequest(NetApi["SyncFileServer"].url, NetApi["SyncFileServer"].method, para)
                if (undefined!=T && 2000==T.code) {
                    ret_SyncFileGroupServer = ret_SyncFileGroupServer && true
                    Jstr = HistoryArrayGroup.MakeJsonSync(Jstr)
                    //await HistoryArrayGroup.remove(obj.kind ,obj.id)
                    await HistoryArrayGroup.remove("name" ,obj.id)
                    await HistoryArrayGroup.saveid(obj.kind ,obj.id,Jstr)
                }else{
                    ret_SyncFileGroupServer = ret_SyncFileGroupServer && false
                }
            });
        if(list.length>0)
        {
            if(ret_SyncFileGroupServer){
                console.log("SyncAllHistory SyncFileGroupServer finish")
            }else{
                console.log("SyncAllHistory SyncFileGroupServer error")
            }
        }else
        {
            console.log("SyncAllHistory SyncFileGroupServer none")
        }
    }

    Tokentick= async (rsync) =>
    {
        o = await NetModulethis.restoretokeninfo()
        var NetLoginTokenTick = NetModulethis.NetTickState;
        console.log("Tokentick recycle:",NetModulethis.state.token,NetModulethis.state.mobile)
        if (NetModulethis.state.token !="" && NetModulethis.state.mobile!="")
        {
            var para = { "Mobile": NetModulethis.state.mobile, "Token": NetModulethis.state.token,"RefreshToken":NetModulethis.state.refreshtoken}
            try{
                let T = await this.fetchRequest(NetApi["Token"].url, NetApi["Token"].method, para).catch((err)=>{
                    /*
                    通常非强制检测状态，否则fetch异常的时候回记录之前tokentick的状态，比如登陆还是登陆，其他状态还是其他状态，但是如果
                    要rsync强制检测，则有下面的函数，回状态处于非法连接状态，通常是用户在登陆页面操作了强制同步
                    */
                    if(rsync==true)
                    {
                        NetLoginTokenTick =  NetInfoCode["connectfetcherror_205"]; //这里是因为要立刻同步的需求，网络无法立刻同步则提返回错
                    }
                    /*
                    fetch异常的错误，必须立刻重新同步，除非之前一直是成功状态断开可以不强制同步，这意味着这时用户的登陆状态一直保持
                    如果之前的状态并非成功等待状态，比如idle，异常之类的，则恢复网络需要做同步请求处理同步数据
                    */
                    if(true  == NetModulethis._restore_storage)
                    {
                        console.log("Tokentick connectfetcherror:re_syncTick")
                        setTimeout(()=>{NetModulethis.syncTick()},DevTimeManager["syncTick"])
                    }        
                    NetLoginTokenTick = NetInfoCode["tickstateidle_204"]   
                })
                if(undefined!=T)
                {
                    if (200 == T.code) {

                        if(rsync==true)
                        {
                            NetModulethis.SyncAllHistory()
                        }
                        if(NetModulethis.state.token !=T.data.Token)
                        {
                            NetModulethis.updatetokeninfo(T.data.UserId,T.data.Token,T.data.RefreshToken,NetModulethis.state.mobile)
                        }
                        NetLoginTokenTick = NetInfoCode["success_200"];
                        ScreenConfig.DeviceToastClear()
                    }
                    /*
                    如果tokentick网络正常返回，且状态不是200，则需要登出网络，再次登陆意味着要同步数据
                    同步数据操作通常会在updatetokeninfo中清理掉用户信息操作
                    */
                    else 
                    {
                        NetModulethis.updatetokeninfo(0,"","","")
                        NetLoginTokenTick = NetInfoCode["tickfetchfailed_202"];
                    }
                }
            }catch(error)
            {
                NetLoginTokenTick = NetInfoCode["tickerror_203"];
                console.log("Tokentick error",error.message)
                if(rsync==true)
                {
                    NetLoginTokenTick =  NetInfoCode["connecterror_201"]; //这里是因为要立刻同步的需求，网络无法立刻同步则提返回错
                }
            }
        }
        //网络状态写回
        console.log("Tokentick last:",NetModulethis.NetTickState," cur:",NetLoginTokenTick)
        NetModulethis.NetTickState = NetLoginTokenTick
        return NetModulethis.NetTickState
    }

    GetChatHistoryByKey(currentChatKey,page = 0, pageSize = 12)
    {
        return NetStorage.fillCurrentChatRoomHistory(currentChatKey,page ,pageSize);
    }
    LeaveChatHistoryByKey(currentChatKey,page = 0, pageSize = 12)
    {
        return NetStorage.clearUnReadMessageCount(currentChatKey,page,pageSize);
    }

    componentWillUnmount()
    {
        this._handleWebSocketExit();
    }
    _handleWebSocketSetup() {
        if(this.NetActive==false)
        {   //console.log("devicesocketsetup")
            this.NetActive=true
            this.Netdefaultreconnect = true
            this.Devicereconnect();  
        }

    }

    send(data)
    {
        data.SocketId = undefined==this.state.SocketId?0:this.state.SocketId
        data.Timestamp = new Date().getTime()
        ////console.log("NetModule send:",data,this.state.devicews.readyState)
        sendjson = JSON.stringify(data)
        if(this.state.devicews.readyState==1){
            this.state.devicews.send(sendjson)
        }
    }

    restoretokeninfo = async (rsync) =>
    {
        var o =  JSON.parse("{}")   
        o.userid = 0
        o.mobile = "" 
        o.token = "" 
        o.refreshtoken = "" 
        o.network = false
        try {
            const ret = await  HistoryArrayGroup.load('tokeninfo')
            if(undefined!=ret)
            {
                ret.network= (NetModulethis.NetTickState==NetInfoCode["success_200"] || NetModulethis.NetTickState==NetInfoCode["tickstateidle_204"])?true:false
                NetModulethis.state.userid=ret.userid
                NetModulethis.state.mobile=ret.mobile
                NetModulethis.state.token=ret.token
                NetModulethis.state.refreshtoken=ret.refreshtoken,
                NetModulethis.state.refreshtokentimestamp=ret.refreshtokentimestamp
                if(true==rsync)
                {
                    /*
                    这里要立刻同步一次网络，如果网络状态检测下来是200，则数据可以正常返回，否则返回之前留存的状态
                    */
                    const retx =await this.Tokentick(rsync)
                    if(NetInfoCode["success_200"]==retx)
                    {
                        ret.network=true
                    }
                }
                return ret
            }
        } catch (error) {
            console.log("restoretokeninfo",error.message)
        }
        NetModulethis.updatetokeninfo(0,"","","")

        return o

    }
    checklogin= async (rsync) =>
    {
        ret = await this.restoretokeninfo(rsync)
        //console.log("checklogin",ret)
        //这里应该是检查完本地token和网络正常才能赋值
        var o =  JSON.parse("{}")    
        o.userid = this.state.userid,
        o.mobile = this.state.mobile,
        o.token = this.state.token,
        o.refreshtoken = this.state.refreshtoken
        o.network = ret.network

        return o
        
    }

    updatetokeninfo(userid,token,refreshtoken,mobile)
    {
        NetModulethis.state.UserId=userid
        NetModulethis.state.token=token
        NetModulethis.state.mobile=mobile
        NetModulethis.state.refreshtoken=refreshtoken
        NetModulethis.state.refreshtokentimestamp=Date.parse(new Date());

        var o =  JSON.parse("{}")    
        o.userid = NetModulethis.state.UserId,
        o.mobile = NetModulethis.state.mobile,
        o.token = NetModulethis.state.token,
        o.refreshtoken = NetModulethis.state.refreshtoken
        o.refreshtokentimestamp =  NetModulethis.state.refreshtokentimestamp
        if(0==userid)
        {
            console.log("updatetokeninfo","logout",DevTimeManager["syncTick"])
            /*
            注销以后，sync同步需要开启，在任何用户登陆以后同步后结束
            */
            setTimeout(()=>{NetModulethis.syncTick()},DevTimeManager["syncTick"])
        }
        HistoryArrayGroup.save("tokeninfo",o)

    }

    add(_handle,key) {
        if(undefined != _handle || null !=_handle)
        {
            this._handlelist[key]=_handle
            return
        }
    }
    remove(key)
    {
        if(undefined != this._handlelist[key])
        {
            delete this._handlelist[key]
            return
        }
    }

    _handleWebSocketExit () {
        this.Netdefaultreconnect=false
        this.NetActive=false
        this.state.devicews.close()  
        this.devicesettimeouthandle && clearTimeout(this.devicesettimeouthandle)
        this.devicetimer && clearInterval(this.devicetimer);
    }

    timeoutfetch(fetch_promise,timeout =DevTimeManager["timeoutfetch"]) {
        let timeout_fn = null; 

        //这是一个可以被reject的promise
        let timeout_promise = new Promise(function(resolve, reject) {
            timeout_fn = function() {
                reject('timeout promise');
            };
        });

        //这里使用Promise.race，以最快 resolve 或 reject 的结果来传入后续绑定的回调
        let abortable_promise = Promise.race([
            fetch_promise,
            timeout_promise
        ]);

        setTimeout(function() {
            timeout_fn();
        }, timeout);

        return abortable_promise
    }

   fetchRequest(url, method, params = ''){
        let header = {
            "Content-Type": "application/json;charset=UTF-8",
            "Connection": "close",// ios的毛病
            "accesstoken":NetModulethis.state.token,  //用户登陆后返回的token，某些涉及用户数据的接口需要在header中加上token
            "refreshtoken":NetModulethis.state.refreshtoken
        };
        var T =  JSON.parse("{}")  
        if(params == ''){   //如果网络请求中带有参数
            return new Promise(function (resolve, reject) {
                const rPromise = fetch( url, {
                    method: method,
                    headers: header
                })
                //fetch的异常必须抛出在tick中处理
                var responsehandle = null
                NetModulethis.timeoutfetch(rPromise).then((response) => {
                    if(undefined==response)
                    {
                        T.message = "response undefined"
                        reject(T)
                    }
                    else if (undefined!=response && !response.ok) {
                        T.message = response.statusText
                        reject(T)
                    }
                    else {
                        responsehandle = response
                        response.json().then((responseData) => {
                            responseData.accesstoken = undefined!=responsehandle.headers.map.accesstoken?responsehandle.headers.map.accesstoken:""
                            resolve(responseData);
                        })
                        .catch(err => {
                            reject(err.message+' timeoutfetchjson()_error_is')
                        })
                    }
                }).catch(err=> {
                    reject(err.message+' timeout fetch_rPromise_error')
                })
            });
        }else{   //如果网络请求中没有参数
            return new Promise(function (resolve, reject) {
                const rPromise = fetch( url, {
                    method: method,
                    headers: header,
                    body:JSON.stringify(params) //body参数，通常需要转换成字符串后服务器才能解析
                })
                //fetch的异常必须抛出在tick中处理
                var responsehandle = null
                NetModulethis.timeoutfetch(rPromise).then((response) => {
                    if(undefined==response)
                    {
                        T.message = "response undefined"
                        reject(T)
                    }
                    else if (undefined!=response && !response.ok) {
                        T.message = response.statusText
                        reject(T)
                    }
                    else{
                        responsehandle = response
                        response.json().then((responseData) => {
                            responseData.accesstoken = undefined!=responsehandle.headers.map.accesstoken?responsehandle.headers.map.accesstoken:""
                            resolve(responseData);
                        })
                        .catch(err => {
                            reject(err.message+' timeout fetchjson()_withpara_error_is')
                        })
                    }
                }).catch(err=> {
                    console.log(err.message,' timeout fetch_withpara_rPromise_error:'+JSON.stringify(params))
                    reject(err.message+' timeout fetch_withpara_rPromise_error:'+JSON.stringify(params))
                })
            });
        }
    }
    Deviceheartbeat()
    {
        this.devicetimer = setInterval(() => {
            var  heart =  {"Msg":"","Type":6}
            if(undefined != this.state.UserId)
            {
                heart.User={"To":0,"From":this.state.UserId,"ChatChinId":0}
            }
            this.send(heart)
        }, 1000*60);
    }

    Devicereconnect()
    {
        this.state.devicereconnectcount++
        if( this.state.devicereconnectcount>10)
        {
            ScreenConfig.DeviceToast("网络长连接断开")
            this.state.devicereconnectcount=0
        }
        if(this.Netdefaultreconnect)
        {   
            const devicews = new WebSocket(NetApi["DeviceSocket"].url+"?");
            this.Deviceconfigwebsocket(devicews)
        }
        else
        {
            this.devicesettimeouthandle && clearTimeout(this.devicesettimeouthandle)
            this.devicetimer && clearInterval(this.devicetimer);
        }
    }
    Deviceconfigwebsocket(devicews)
    {
        devicews.onmessage = (event) =>{
          var data = JSON.parse(event.data);
          switch (data.Type) {
            case 0: // JOIN
                this.state.SocketId = data.SocketId
                //console.log("Json updateSocket",this.state.SocketId )
            case 1: // BCJOIN  
                
                //console.log("devicejoin",data,this.state.SocketId)
                break;
            case 2: // LEAVE
            case 3: // BCLEAVE
                //console.log("deviceleave",data)
                break;
            case 4: // MESSAGE
            case 5: // BCMESSAGE
                this.DeviceBroadcast(data)
                ////console.log("devicmessage",data)
                break;
            case 6: // heart
            case 7: // BCheart
                ////console.log("deviceheart",data)
                break;
            }
        }
        devicews.onopen = () => {
            this.state.devicereconnectcount=0
        };

        devicews.onerror = (e) => {
          console.log("Deviceconfigwebsocket_error",e.message);
        };

        devicews.onclose = (e) => {
          this.devicesettimeouthandle = setTimeout(()=>{this.Devicereconnect()}, this.state.devicereconnectcount*10000);
          clearInterval(this.devicetimer)
        };
        this.state.devicews = devicews
        this.Deviceheartbeat()
    }
    DeviceBroadcast(data)
    {
        this.BCcount++
        const sendcenter = this._handlelist
        Object.keys(sendcenter).forEach(async function(key){
            this.BCcount++
            sendcenter[key](data)
       });
       data.uuid = (new Date()).valueOf().toString() + "-" + this.BCcount 
       NetStorage.pushLocaleDataMsg(data)
    }
}
var netmodule= new NetModule
module.exports=netmodule;  