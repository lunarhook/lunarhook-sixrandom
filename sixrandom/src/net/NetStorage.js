import React, {Component} from 'react';
import {Platform,AppState} from 'react-native';
import { observable, computed, toJS } from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';
class NetStorage  extends React.Component {
		NetStoragethis
		sessionListMap = observable.map();

		constructor(props) {
		super(props);
		this.state = {
		}
		console.log("NetStorage load")
		NetStoragethis = this

		//启动网络的时候恢复所有的历史本地存储
		this._restoreDataFromLocalStore();
	}
  	pushLocaleDataMsg(DataMsg: Object) {
        // sessionItem
        var key = this._getDataMsgKey(DataMsg);
        this.sessionListMap.set(String(key), DataMsg);
        // history
        this._saveMessageToLocalStore(key, DataMsg);
    }

    clearUnReadMessageCount(key: String) {
        let DataMsg = this.sessionListMap.get(key);
        if (DataMsg) {
            DataMsg = Object.assign({
            }, DataMsg, {
                unReadMessageCount: 0
            });
            this.sessionListMap.set(key, DataMsg);
        }
    }

    // 聊天室相关方法
    fillCurrentChatRoomHistory = async (currentChatKey,page = 0, pageSize = 12) => {
            let results;
            if (typeof page === 'number' && page === 0) {
                // 异步更新
                
                results = await this._restoreMessageFromLocalStore(currentChatKey, page, pageSize);
                console.log("fillCurrentChatRoomHistory",results)
            } else {
                results = await this._restoreMessageFromLocalStore(currentChatKey, page, pageSize);
                console.log("fillCurrentChatRoomHistory",results)
            }
            
			return results
    }

    // 删除会话记录
    deleteSession(key: String) {
        this.sessionListMap.delete(key);
    }

    clear = async () => {
        await AsyncStorage.clear();
        this.sessionListMap.clear();
    }

	/*
    // 会话记录
    @computed get sessionList(): Array<Object> {
        return [...this.sessionListMap.values()].sort(function(a, b) {
            return b.timestamp - a.timestamp;
        }).map(function (item) {
            item.latestTime = moment(item.timestamp).startOf('minute').fromNow();
            return item;
        });
    }

    @computed get unReadMessageCountTotal(): number {
        let unReadMessageCountTotal = 0;
        [...this.sessionListMap.values()].forEach(function (item) {
            unReadMessageCountTotal += item.unReadMessageCount;
        });
        return unReadMessageCountTotal;
	}
	*/



    _getDataMsgKey (DataMsg) {
        if (DataMsg.Users && DataMsg.Users.To>DataMsg.Users.From) {
            return `${DataMsg.Users.From}-${DataMsg.Users.To}`;
        } else {
            return `${DataMsg.Users.To}-${DataMsg.Users.From}`;
        }
    }
    /**
     * 历史消息存储结构
     * message:history:${key} 存储用户的消息 id 集合
     * message:item:${uuid} 消息 uuid 集合
     */
    _saveMessageToLocalStore = async (key, DataMsg) => {
        let historyKey = `message:history:${key}`;
        let history = await AsyncStorage.getItem(historyKey);

        // 聊天记录索引
        let uuid = DataMsg.uuid;
        let keyvalue = `${history ? history : '' }${uuid + (',')}`
        console.log("_saveMessageToLocalStore",historyKey,keyvalue)
        await AsyncStorage.setItem(historyKey,keyvalue );

        AsyncStorage.setItem(`message:item:${DataMsg.uuid}`, JSON.stringify(DataMsg));
        
    }

    /**
     * 从历史恢复消息
     * 每次取的数目还不能超过 13 条，不然由于 listView 懒加载，无法滚动到底部
     */
    _restoreMessageFromLocalStore = async (key, page = 0, pageSize) => {
        let history = await AsyncStorage.getItem(`message:history:${key}`);
        console.log("_restoreMessageFromLocalStore",key,history)
        if (history) {
            let historyUUIDs = history.split(',').slice(-(pageSize * (page + 1)), -(pageSize * page) || undefined ).map( uuid => `message:item:${uuid}`);
            console.log("historyUUIDs",historyUUIDs)
            let messageArray = await AsyncStorage.multiGet(historyUUIDs);
            return messageArray.map((item) => {
                return JSON.parse(item[1]);
            });
        } else {
            console.log("historyUUIDs null",[])
            return [];
        }
    }

    /**
     * Session 存储结构如下
     * session:list:map:keys 存放 map key 值列表
     * session:list:key 存储最新一条消息信息
     */
    _saveDataToLocalStore = async () => {
        // 处理 sessionListMap
        AsyncStorage.setItem('session:list:map:keys', [...this.sessionListMap.keys()].join(','));
        for (let [key, value] of this.sessionListMap.entries()) {
            AsyncStorage.setItem(`session:list:${key}`, JSON.stringify(toJS(value)));
        }
    }

    _restoreDataFromLocalStore = async () => {
        // 恢复 sessionListMap
        let keys = await AsyncStorage.getItem('session:list:map:keys');
        if (keys) {
            let initArray = [];
            for (let key of keys.split(',')) {
                let value = JSON.parse((await AsyncStorage.getItem(`session:list:${key}`)));
                initArray.push([key, value]);
            }
            console.log("_restoreDataFromLocalStore",initArray)
            this.sessionListMap.merge(initArray);
        }
    }
}
var netStorage = new NetStorage()
module.exports=netStorage;  