
import React, { Component } from 'react';
import Storage from 'react-native-storage';
//
import {SixrandomModule} from '../kit/UniversechangesLib/SixrandomLib/SixrandomModule'
import AsyncStorage from '@react-native-community/async-storage';
import { array } from 'prop-types';

/*
系统由于没有采用本地格式化数据库，而是采用json格式保存，因此客户端的数据格式只能由自己保证，需要补充和服务器一致的数据格式
*/

var ValueTypeModule = [

	{ key: "emotion", text: "感情" },
	{ key: "bussiness", text: "事业" },
	{ key: "lucky", text: "运气" },
	{ key: "sued", text: "官司" },
	{ key: "health", text: "健康" },
	{ key: "finance", text: "求财" },
]

var StorageModule = new Storage({
	// maximum capacity, default 1000 
	size: 1000,

	// Use AsyncStorage for RN, or window.localStorage for web.
	// If not set, data would be lost after reload.
	storageBackend: AsyncStorage,

	// expire time, default 1 day(1000 * 3600 * 24 milliseconds).
	// can be null, which means never expire.
	defaultExpires: null,

	// cache data in the memory. default is true.
	enableCache: true,

	// if data was not found in storage or expired,
	// the corresponding sync method will be invoked and return 
	// the latest data.
	sync: {
		// we'll talk about the details later.
	},




	gettype(_type) {
		return _valuetype[_type];
	},
	getkindtype() {
		return _valuetype;
	}
})
var EightRandomHistoryNameArray = []
var SixrandomHistoryNameArray = []
var QimenHistoryNameArray = []
var SixCourseHistoryNameArray = []
var TaiyiHistoryNameArray = []
var KitConfigNameArray=[]
var CourseConfigNameArray=[]
var firsttime = null
class HistoryArrayGroup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	ForceSyncServer = false
	async loadid(key,id)
	{
		console.log("1 loadid: ",key,id)
		let R = undefined
		R = await StorageModule.load({key:key,id:id}).catch(async(e)=>{
			console.log("loadid error",e.message)
		})
		console.log("2 loadid: ",R)
		return R
		
	}
	async load(key)
	{
		console.log("1 load: ",key)
		let R = undefined
		R = await StorageModule.load({key:key}).catch(async(e)=>{
			console.log("load error",e.message)
		})
		console.log("2 load: ",R)
		return R
	}
	async remove(key,id)
	{
		console.log("1 remove: ",key,id)
		let R = await StorageModule.remove({key:key,id:id}).catch(async(e)=>{
			console.log("remove error",e.message)
		})
		console.log("2 remove: ",R)
	}
	async removeall(key)
	{
		console.log("1 removeall: ",key)
		let R = await StorageModule.clearMapForKey(key).catch(async(e)=>{
			console.log("removeall error",e.message)
		})
		console.log("2 removeall: ",R)
	}
	async saveid(key,id,data)
	{
		console.log("1 saveid: ",key,id,data)
		let R = await StorageModule.save({key:key,id:id,data:data}).catch(async(e)=>{
			console.log("saveid error",e.message)
		})
		console.log("2 saveid: ",R)
		
	}
	async save(key,data)
	{
		console.log("1 save: ",key,data)
		let R = await StorageModule.save({key:key,data:data}).catch(async(e)=>{
			console.log("save error",e.message)
		})
		console.log("2 save: ",R)
		
	}
	MakeJsonSync(jstr){
		var Jobj = JSON.parse(jstr);
		Jobj.sync = true
		ret = JSON.stringify(Jobj)
		return ret
	}

	SyncFileClient=async(obj,filename)=>
	{
		kind = filename.split("_")
		let objToStr = JSON.parse(obj)
		objToStr.sync = true
		if("eightrandom"==kind[1])
		{
			await this._restore_eightrandom(objToStr)
			return
		}
		await this._restore_file(objToStr)
		return
	}
	async SyncFileGroupServer(){
		var ret = new Array()
		var list = new Array("sixrandom","eightrandom","taiyi","sixcourse","qimen")
		var ret = new Array()
		console.log("SyncFileGroupServer begin")
		for(var i in list){
			await StorageModule.getAllDataForKey(list[i]).then(ids => {
				for (i = 0; i < ids.length; i++) {
					try {
						//console.log("SyncFileGroupServer",ids[i])
						var Jobj = JSON.parse(ids[i]);
						if ((undefined !=Jobj.sync && false==Jobj.sync) || true == this.ForceSyncServer)
						{
							ret.push(Jobj)
						}
					} catch (error) {
						console.log("SyncFileGroupServer error:"+error.message)
					}
				}
			})
		}
		return ret 
		/*
		ret =(async function(ret){
			var ret = new Array()
			await StorageModule.getAllDataForKey("sixrandom").then(ids => {
				for (i = 0; i < ids.length; i++) {
					try {
						console.log("SyncFileGroupServer",ids[i])
						var Jobj = JSON.parse(ids[i]);
						
						if (undefined !=Jobj.sync && false==Jobj.sync)
						{
							ret.push(Jobj)
						}
					} catch (error) {
						console.log(error.message)
					}
				}
			})
			await StorageModule.getAllDataForKey("eightrandom").then(ids => {
				for (i = 0; i < ids.length; i++) {
					try {
						var Jobj = JSON.parse(ids[i]);
						if (undefined !=Jobj.sync && false==Jobj.sync)
						{
							ret.push(Jobj)
						}
					} catch (error) {
						console.log(error.message)
					}
				}
			})
			return ret
		})()
			
		return ret;
		*/
		
	}
	_restore_file=async(objToStr)=>
	{
		const json = JSON.stringify(objToStr)
		await this.saveid(objToStr.kind,objToStr.id,json)
	}
	_restore_eightrandom=async(objToStr)=>
	{
		const json = JSON.stringify(objToStr)
		var savedate = new Array()
		savedate[0] = objToStr.id;
		savedate[1] = objToStr.ret;
		savedate[2] = objToStr.sex
		savedate[3]= objToStr.tip
		savedate[4]= objToStr.birth
		await this.saveid(objToStr.kind,objToStr.id,json)
		await this.remove("name",objToStr.id)
	}
	init() {
		this.ReloadEightRandomHistory()
		this.ReloadSixrandomHistory()
		this.ReloadQimenHistory()
		this.ReloadSixCourseHistory()
		this.ReloadTaiyiHistory()
		this.ReloadKitConfigHistory()
		//console.log("init HistoryArrayGroup")
	}
	async GetFirstTime()
	{
		return await this.ReloadFirstTime()
	}

	async SaveFirstTime()
	{
		return await this.ReloadFirstTime()
	}


	async GetEightRandomHistory() {
		await this.ReloadEightRandomHistory()
		return EightRandomHistoryNameArray;

	}
	async GetSixrandomHistory() {
		await this.ReloadSixrandomHistory()
		//console.log("GetSixrandomHistory", SixrandomHistoryNameArray[0])
		return SixrandomHistoryNameArray;

	}
	async GetQimenHistory() {
		await this.ReloadQimenHistory()
		//console.log("GetQimenHistory", QimenHistoryNameArray[0])
		return QimenHistoryNameArray;

	}

	async GetSixCourseHistory() {
		await this.ReloadSixCourseHistory()
		//console.log("GetSixCourseHistory", SixCourseHistoryNameArray[0])
		return SixCourseHistoryNameArray;

	}

	async GetTaiyiHistory() {
		await this.ReloadTaiyiHistory()
		//console.log("GetTaiyiHistory", TaiyiHistoryNameArray[0])
		return TaiyiHistoryNameArray;

	}

	async GetKitConfigHistory() {
		await this.ReloadKitConfigHistory()
		//console.log("GetTaiyiHistory", TaiyiHistoryNameArray[0])
		return KitConfigNameArray;

	}
	async GetCourseConfigHistory() {
		await this.ReloadCourseConfigHistory()
		//console.log("GetTaiyiHistory", TaiyiHistoryNameArray[0])
		return CourseConfigNameArray;

	}
	async SyncAllHistory(){
		await this.GetEightRandomHistory()
		await this.GetSixrandomHistory()
		await this.GetQimenHistory() 
		await this.GetSixCourseHistory()
		await this.GetTaiyiHistory()
		await this.GetKitConfigHistory()
	}

	async ReloadFirstTime(){
		ret = await this.load("FirstTime")
		return ret;
	}

	async SaveFirstTime(){
		ret = await this.save("FirstTime",new Date())
		return ret;
	}

	async ReloadTaiyiHistory() {
		TaiyiHistoryNameArray = []
		await StorageModule.getAllDataForKey('taiyi').then(async(ids) => {
			for (i = 0; i < ids.length; i++) {
				try {
					console.log(ids[i])
					if(ids[i].constructor===Array ){
						var savedate = ids[i];
						var date = new Date(Number(savedate[0]))
						var obj = {
							name: date.toLocaleDateString() + " " + savedate[1],
							ret: savedate[1],
							time: date.toLocaleDateString(),
							tip: savedate[2],
							url: "?taiyiDate=" + savedate[1] + "&tip=" + savedate[2] + "&Y=" + savedate[3] + "&M=" + savedate[4] + "&D=" + savedate[5] + "&H=" + savedate[6],
							id: savedate[0],
							star: savedate[7],
						}
						TaiyiHistoryNameArray[i] = obj

						var Jobj = {}
						Jobj.id = savedate[0]
						Jobj.tip = savedate[2]
						Jobj.Y = savedate[3]
						Jobj.M = savedate[4]
						Jobj.D = savedate[5]
						Jobj.H = savedate[6]
						Jobj.star = undefined==savedate[7]?false:true
						Jobj.kind = "taiyi"
						Jobj.sync = undefined==Jobj.sync ? false:Jobj.sync
						Jstr = JSON.stringify(Jobj)
						let T = await this.loadid(Jobj.kind,Jobj.id)
						if (undefined!=T) {
							let TT = await this.saveid(Jobj.kind ,Jobj.id,Jstr)
						}
					}else
					{
						var Jobj = JSON.parse(ids[i]);
						var date = new Date(Number(Jobj.id))
						var taiyiDate = SixrandomModule.lunar_f(Jobj.date)
						var obj = {
							name: date.toLocaleDateString() + " " + taiyiDate.gzYear+taiyiDate.gzMonth +taiyiDate.gzDate +taiyiDate.gzTime,
							ret: taiyiDate.gzYear+taiyiDate.gzMonth +taiyiDate.gzDate +taiyiDate.gzTime,
							tip: Jobj.tip,
							time: Jobj.id,
							url: "?taiyiDate="+taiyiDate.gzYear+taiyiDate.gzMonth +taiyiDate.gzDate +taiyiDate.gzTime+ "&tip=" + Jobj.tip + "&Y=" + Jobj.Y + "&M=" + Jobj.M +"&D=" +  Jobj.D +"&H=" + Jobj.H ,
							id: Jobj.id,
							star: Jobj.star,
						}
						TaiyiHistoryNameArray[i] = obj
					}

				} catch (error) {
					StorageModule.remove({ key: 'sixcourse', id: savedate[0] });
					TaiyiHistoryNameArray[i] = undefined
				}
			}
			TaiyiHistoryNameArray.reverse()
			//去掉存储异常的对象
			for (var i = 0, len = TaiyiHistoryNameArray.length; i < len; i++) {
				if (undefined == TaiyiHistoryNameArray[i]) {
					TaiyiHistoryNameArray.splice(i, 1);
					len--;
					i--;
				}
			}
		});
	}
	async ReloadKitConfigHistory() {
		KitConfigNameArray = []
		await StorageModule.getAllDataForKey('kitConfig').then(async(ids) => {
			for (i = 0; i < ids.length; i++) {
				try {
					if(ids[i].constructor===Array ){
						KitConfigNameArray = ids[i]
					}

				} catch (error) {
					StorageModule.remove({ key: 'kitConfig', id: i});
					KitConfigNameArray = []
				}
			}
			//KitConfigNameArray.reverse()
			//去掉存储异常的对象
		});
	}

	async ReloadCourseConfigHistory() {
		CourseConfigNameArray = []
		await StorageModule.getAllDataForKey('CourseConfig').then(async(ids) => {
			for (i = 0; i < ids.length; i++) {
				try {
					if(ids[i].constructor===Array ){
						CourseConfigNameArray = ids[i]
					}

				} catch (error) {
					StorageModule.remove({ key: 'CourseConfig', id: i});
					CourseConfigNameArray = []
				}
			}
			//KitConfigNameArray.reverse()
			//去掉存储异常的对象
		});
	}

	async ReloadSixCourseHistory() {
		SixCourseHistoryNameArray = []
		await StorageModule.getAllDataForKey('sixcourse').then(async(ids) => {
			for (i = 0; i < ids.length; i++) {
				try {
					console.log(ids[i])
					if(ids[i].constructor===Array ){
						var savedate = ids[i];
						var date = new Date(Number(savedate[0]))
						var obj = {
							name: savedate[4],
							tip: savedate[2],
							ret: savedate[1],
							time: date.toLocaleDateString(),
							url: "?SixCourseDate=" + savedate[1] + "&tip=" + savedate[2] + "&persondata=" + savedate[3] + "&timedata=" + savedate[4] + "&selvalue=" + savedate[5] + "&mydate=" + savedate[6],
							id: savedate[0],
							star: savedate[7],
						}
						SixCourseHistoryNameArray[i] = obj
						var Jobj = {}
						Jobj.id = savedate[0]
						Jobj.tip = savedate[2]
						Jobj.star = (undefined==savedate[7])?false:true
						Jobj.date = savedate[6]
						Jobj.kind ="sixcourse"
						Jobj.sync = false 
						Jobj.persondata = savedate[3]
						Jobj.timedata = savedate[4] 
						Jobj.selvalue = savedate[5]
						var Jstr = JSON.stringify(Jobj)
						Jstr = JSON.stringify(Jobj)
						let T = await this.loadid(Jobj.kind,Jobj.id)
						if (undefined!=T) {
							let TT = await this.saveid(Jobj.kind ,Jobj.id,Jstr)
						}
					}
					else
					{
						var Jobj = JSON.parse(ids[i]);
						var date = new Date(Number(Jobj.id))
						var sixcourseDate = SixrandomModule.lunar_f(Jobj.date)
						var obj = {
							name: date.toLocaleDateString() + " " + sixcourseDate.gzYear+sixcourseDate.gzMonth +sixcourseDate.gzDate +sixcourseDate.gzTime,
							time: Jobj.id,
							ret: sixcourseDate.gzYear+sixcourseDate.gzMonth +sixcourseDate.gzDate +sixcourseDate.gzTime,
							tip: Jobj.tip,
							url: "?SixCourseDate=" + sixcourseDate.gzYear+sixcourseDate.gzMonth +sixcourseDate.gzDate +sixcourseDate.gzTime + "&tip=" + Jobj.tip + "&persondata=" + Jobj.selvalue+ "&timedata=" + Jobj.timedata + "&selvalue=" +Jobj.selvalue + "&mydate=" + Jobj.date ,
							id: Jobj.id,
							star: Jobj.star,
						}
						SixCourseHistoryNameArray[i] = obj
					}
				} catch (error) {
					StorageModule.remove({ key: 'sixcourse', id: savedate[0] });
					SixCourseHistoryNameArray[i] = undefined
				}
			}
			SixCourseHistoryNameArray.reverse()
			for (var i = 0, len = SixCourseHistoryNameArray.length; i < len; i++) {
				if (undefined == SixCourseHistoryNameArray[i]) {
					SixCourseHistoryNameArray.splice(i, 1);
					len--;
					i--;
				}
			}
		});
	}
	async ReloadQimenHistory() {
		QimenHistoryNameArray = []
		await StorageModule.getAllDataForKey('qimen').then(async(ids) => {
			for (i = 0; i < ids.length; i++) {
				try {
					console.log(ids[i])
					if(ids[i].constructor===Array ){
						var savedate = ids[i];
						var date = new Date(Number(savedate[0]))
						var obj = {
							name: date.toLocaleDateString() + " " + savedate[1],
							time: date.toLocaleDateString(),
							ret: savedate[1],
							tip: savedate[2],
							url: "?qimenDate=" + savedate[1] + "&tip=" + savedate[2] + "&Date=" + savedate[3],
							id: savedate[0],
							star: savedate[4],
						}
						QimenHistoryNameArray[i] = obj
												/*
						这里根据数据升级格式，需要和sixrandomnewpage的生产数据做比较，统一格式
						如果格式不统一，则出现重要问题
						*/
						var Jobj = {}
						Jobj.id = savedate[0]
						Jobj.ret = savedate[1]
						Jobj.tip = savedate[2]
						Jobj.star = undefined==savedate[4]?false:true
						Jobj.date = savedate[3]
						Jobj.kind = "qimen"
						Jobj.sync = undefined==Jobj.sync ? false:Jobj.sync
						Jstr = JSON.stringify(Jobj)
						let T = await this.loadid(Jobj.kind,Jobj.id)
						if (undefined!=T) {
							let TT = await this.saveid(Jobj.kind ,Jobj.id,Jstr)
						}
					}
					else{
						var Jobj = JSON.parse(ids[i]);
						var date = new Date(Number(Jobj.id))
						var qimenDate = SixrandomModule.lunar_f(Jobj.date)
						var obj = {
							name: date.toLocaleDateString() + " " + qimenDate.gzYear+qimenDate.gzMonth +qimenDate.gzDate +qimenDate.gzTime,
							time: Jobj.id,
							ret: qimenDate.gzYear+qimenDate.gzMonth +qimenDate.gzDate +qimenDate.gzTime,
							tip: Jobj.tip,
							url: "?qimenDate=" + qimenDate.gzYear+qimenDate.gzMonth +qimenDate.gzDate +qimenDate.gzTime + "&tip=" + Jobj.tip + "&Date=" + Jobj.date,
							id: Jobj.id,
							star: Jobj.star,
						}
						QimenHistoryNameArray[i] = obj
					}



				} catch (error) {
					StorageModule.remove({ key: 'qimen', id: savedate[0] });
					QimenHistoryNameArray[i] = undefined
				}
			}
			QimenHistoryNameArray.reverse()
			for (var i = 0, len = QimenHistoryNameArray.length; i < len; i++) {
				if (undefined == QimenHistoryNameArray[i]) {
					QimenHistoryNameArray.splice(i, 1);
					len--;
					i--;
				}
			}
		});
	}
	async ReloadSixrandomHistory() {
		SixrandomHistoryNameArray = []
		await StorageModule.getAllDataForKey("sixrandom").then(async(ids) => {
			for (i = 0; i < ids.length; i++) {
				try {
					var Jobj = JSON.parse(ids[i]);
					var result = SixrandomModule.get_sixrandom_name(Jobj.lunar)
					var timedate = new Date(Number(Jobj.date))
					var obj = {
						name: "求测：" + Jobj.question,
						ret: SixrandomModule.get_sixrandom_name(Jobj.lunar),
						tip: Jobj.tip,
						title: SixrandomModule.get_sixrandom_name(Jobj.lunar),
						time: Jobj.id,
						star: Jobj.star,
						url: "?date=" + timedate + "&lunar=" + Jobj.lunar + "&question=" + Jobj.question,
						id: Jobj.date,
					}
					SixrandomHistoryNameArray[i] = obj
					/*
					这里根据数据升级格式，需要和sixrandomnewpage的生产数据做比较，统一格式
					如果格式不统一，则出现重要问题
					*/
					Jobj.id = Jobj.date
					Jobj.kind = "sixrandom"
					Jobj.sync = undefined==Jobj.sync ? false:Jobj.sync
					Jstr = JSON.stringify(Jobj)
					let T = await this.loadid(Jobj.kind,Jobj.id)
					if (undefined!=T) {
						let TT = await this.saveid(Jobj.kind ,Jobj.id,Jstr)
					}

				} catch (error) {
					SixrandomHistoryNameArray[i] = undefined
				}
			}
			SixrandomHistoryNameArray.reverse()
			for (var i = 0, len = SixrandomHistoryNameArray.length; i < len; i++) {
				if (undefined == SixrandomHistoryNameArray[i]) {
					SixrandomHistoryNameArray.splice(i, 1);
					len--;
					i--;
				}
			}
			//console.log("ReloadSixrandomHistory", SixrandomHistoryNameArray[0])
		});
	}

	async ReloadOldEightRandomHistory() {
		await StorageModule.getAllDataForKey('name').then(async(ids) => {
			for (i = 0; i < ids.length; i++) {
				try {

						//console.log(ids[i])
						var savedate = ids[i];
						var date = new Date(Number(savedate[0]))
						var retdate = savedate[4].split(" ");
						var birthdate = new Date(retdate[0]);
						birthdate.setHours(retdate[1]);
						//console.log(birthdate)
						Date.prototype.toLocaleString = function () {
							return this.getFullYear() + "年" + (this.getMonth() + 1) + "月" + this.getDate() + "日 " + this.getHours() + "点";
						};
						Date.prototype.tobirth = function (){
							return this.getFullYear() + "/" + (this.getMonth() + 1) + "/" + this.getDate() + " " + this.getHours();
						}
						var obj = {
							name: savedate[2],
							ret: savedate[1],
							tip: savedate[3],
							star: savedate[5],
							birth: birthdate.toLocaleString(),
							time: date.toLocaleDateString(),
							url: "?EightDate=" + savedate[1] + "&sex=" + savedate[2] + "&birth=" + savedate[4] + "&Date=" + savedate[0],
							id: savedate[0]
						}
						EightRandomHistoryNameArray[i] = obj

						/*
						这里根据数据升级格式，需要和eightrandomnewpage的生产数据做比较，
						然后从name库装入eightrandom库统一格式，这里的格式不统一，则导致存储失败，数据丢失
						*/
						var objx = {}
						objx.id = String(savedate[0])
						objx.ret = savedate[1]
						objx.tip = savedate[3]!=null?savedate[3]:""
						objx.sex = savedate[2]
						objx.star = savedate[5]
						objx.star = (undefined==objx.star)?false:true
						objx.date = String(savedate[0])
						objx.birth = date.tobirth()
						objx.kind = "eightrandom"
						objx.sync = false
						var Jstr = JSON.stringify(objx)
						let T = await this.loadid(objx.kind,objx.id)
						//这里逻辑和sixrandom不同，是从name里读数据装入eightrandom然后服务器同步以后，返回删除name
						if (undefined==T) {
							await this.saveid(objx.kind ,objx.id,Jstr)
						}
						
						//StorageModule.save({key:objx.kind ,id:objx.id,data:Jstr})
					
				} catch (error) {
					StorageModule.remove({ key: 'name', id: savedate[0] });
					EightRandomHistoryNameArray[i] = undefined
				}
			}
			EightRandomHistoryNameArray.reverse()
			for (var i = 0, len = EightRandomHistoryNameArray.length; i < len; i++) {
				if (undefined == EightRandomHistoryNameArray[i]) {
					EightRandomHistoryNameArray.splice(i, 1);
					len--;
					i--;
				}
			}
		}).catch(error=>{
			console.log(error.message)
		})
	}

	async ReloadEightRandomHistory() {
		EightRandomHistoryNameArray = []
		await this.ReloadOldEightRandomHistory()
		await StorageModule.getAllDataForKey('eightrandom').then(ids => {
			for (i = 0; i < ids.length; i++) {
				try {

					var Jobj = JSON.parse(ids[i]);
						//console.log(ids[i])
						var savedate = ids[i];
						var date = new Date(Number(savedate[0]))
						var retdate = savedate[4].split(" ");
						var birthdate = new Date(retdate[0]);
						birthdate.setHours(retdate[1]);
						//console.log(birthdate)
						Date.prototype.toLocaleString = function () {
							return this.getFullYear() + "年" + (this.getMonth() + 1) + "月" + this.getDate() + "日 " + this.getHours() + "点";
						};
						var obj = {
							name: Jobj.sex,
							ret: Jobj.ret,
							tip: Jobj.tip,
							star: Jobj.star,
							birth: Jobj.birth,
							time: Jobj.date,
							url: "?EightDate=" + Jobj.ret + "&sex=" + Jobj.sex + "&birth=" + Jobj.birth,
							id: Jobj.id
						}
						EightRandomHistoryNameArray[i] = obj
					
				} catch (error) {
					StorageModule.remove({ key: 'eightrandom', id: savedate[0] });
					EightRandomHistoryNameArray[i] = undefined
				}
			}
			EightRandomHistoryNameArray.reverse()
			for (var i = 0, len = EightRandomHistoryNameArray.length; i < len; i++) {
				if (undefined == EightRandomHistoryNameArray[i]) {
					EightRandomHistoryNameArray.splice(i, 1);
					len--;
					i--;
				}
			}
		}).catch(error=>{
			console.log(error.message)
		})

		
	}
}

var a = new HistoryArrayGroup()
module.exports = { ValueTypeModule: ValueTypeModule, HistoryArrayGroup: a };  