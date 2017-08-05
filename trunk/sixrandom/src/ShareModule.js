
import React, {Component} from 'react';
import *as wechat from 'react-native-wechat'

var WeChat=require('react-native-wechat');

class ShareModule extends React.Component {

	constructor(props) {

	super(props);

	//WeChat.registerApp('wx893f885b12066487');
	WeChat.registerApp('wx8cebf51c52f78bb3');
	

	}
	// maximum capacity, default 1000 
	Sharetotimeline() {
			WeChat.isWXAppInstalled().then((isInstalled) => {
			if(isInstalled) {

				WeChat.shareToTimeline({
					type: 'news',
					title: 'web image',
					description: 'share web image to time line',
					webpageUrl:'http://www.sina.com'
				});


			}else{

				ToastShort('没有安装微信软件，请您安装微信之后再试');

			}

			});

		}

		sharetosesshareToSession() {
			WeChat.isWXAppInstalled().then((isInstalled) => {
			if(isInstalled) {

				WeChat.shareToSession({
					title:'微信公众号',
					description:'微信解挂分析',
					//thumbImage:'http://mta.zttit.com:8080/images/ZTT_1404756641470_image.jpg',
					type:'news',
					webpageUrl:'http://www.lcode.org'
				})
			}else{
				ToastShort('没有安装微信软件，请您安装微信之后再试');
			}
			});

		}

		sharetosesshareToSessionWithPara(para) {
			WeChat.isWXAppInstalled().then((isInstalled) => {
			if(isInstalled) {

				WeChat.shareToSession({
					title:'微信公众号',
					description:'微信沟通',
					//thumbImage:'http://mta.zttit.com:8080/images/ZTT_1404756641470_image.jpg',
					type:'news',
					webpageUrl:'http://www.99future.com/sixrandom.html' + para
				})
			}else{
				ToastShort('没有安装微信软件，请您安装微信之后再试');
			}
			});

		}
}


var sharemodule = new ShareModule()
module.exports=sharemodule;  