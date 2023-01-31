
import React, {Component} from 'react';
import { NativeModules } from 'react-native';
var NativePlumber = NativeModules.NativePlumber;

// 方法调用

var host = "undefined";
var sockhost = "undefined";

(function(){  
	if(__DEV__){
	//const ret = await NativePlumber.GetDevIp().then(r=>{
		//console.log("ip:",r.ip)
		var ip = "localhost"
		//ip = "10.2.24.131"
		host = "http://"+ip+":8088"
		sockhost = ip+":8088"
		host = "https://www.lunarhook.com"
		sockhost = "www.lunarhook.com"
	//})
	}else{
		host = "https://www.lunarhook.com"
		sockhost = "www.lunarhook.com"
	}
})()

var 	NetApi =  {
	

	"DeviceSocket":{url:"ws://"+sockhost+"/IM/ws/socket",method:""},
			
	"ConsultantList":{url: host+"/Consultant/ConsultantList",method:"GET"},
	"ConsultantDetail":{url: host+"/Consultant/ConsultantDetail",method:"GET"},
	"QuestList":{url: host+"/Quest/QuestList",method:"GET"},
	"QuestDetail":{url: host+"/Quest/QuestDetail",method:"GET"},


	"FMList":{url: host+"/FM/FMList",method:"GET"},				//围炉夜话 先听君言
	"FMDetail":{url: host+"/FM/FMDetail",method:"GET"},
	"SMSList":{url: host+"/SMS/SMSList",method:"GET"},			//海棠依旧

	"QuoraList":{url: host+"/Quora/QuoraList",method:"GET"},		//树洞寄语
	"QuoraDetail":{url: host+"/Quora/QuoraDetail",method:"GET"},
	"MyQuoraList":{url: host+"/Quora/MyQuoraList",method:"POST"},
	"UpdateQuora":{url: host+"/Quora/UpdateQuora",method:"POST"},
	"NewQuora":{url: host+"/Quora/NewQuora",method:"POST"},


	//"NewUser":{url: host+"/User/NewUser",method:"POST"},
	//"UpdateUser":{url: host+"/User/UpdateUser",method:"POST"},
	//"UpdateAvatar":{url: host+"/User/UpdateAvatar",method:"POST"},

	"Login":{url: host+"/User/Login",method:"POST"},
	"Logout":{url: host+"/User/Logout",method:"POST"},
	"RegCheck":{url: host+"/User/RegCheck",method:"POST"},
	"Reg":{url: host+"/User/Reg",method:"POST"},
	"Token":{url: host+"/User/Token",method:"POST"},
	"UpdateReg":{url: host+"/User/UpdateReg",method:"POST"},

	
	"FileInfo":{url: host+"/User/FileInfo",method:"POST"},
	"SyncFileServer":{url: host+"/User/SyncFileServer",method:"POST"},
	"SyncFileClient":{url: host+"/User/SyncFileClient",method:"POST"},

}
        /*
        1 正常返回
        2 网络异常
        3 异常失败
        4 其他注销
        */
var NetInfoCode={
	"success_200":200,
	"connecterror_201":201,//网络连接过程中非网络连接异常
	"tickfetchfailed_202":202,//toke tick中密码，用户状态异常，会清除用户登陆
	"tickerror_203":203,//默认状态错误
	"tickstateidle_204":204,//token idle状态，默认初始化状态
	"connectfetcherror_205":205,//网络连接异常
}

var DevTimeManager={
	"timeoutfetch":__DEV__?30000:10000,//fetchtimeout时间修改成30秒
	"nettick":__DEV__?6*1000:60*1000,
	"syncTick":__DEV__?6*1000:60*1000,
	"MyPageTick":__DEV__?30*1000:60*1000,
}

module.exports={NetApi:NetApi,NetInfoCode:NetInfoCode,DevTimeManager:DevTimeManager};