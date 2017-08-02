
import React, {Component} from 'react';
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';


var 	ValueTypeModule =  [
			
	{key:"emotion",text: "感情"},
	{key:"bussiness",text: "事业"},
	{key:"lucky",text: "运气"},
	{key:"sued",text: "官司"},
	{key:"health",text: "健康"},
	{key:"finance",text: "求财"},
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
	sync : {
		// we'll talk about the details later.
	},




	gettype(_type)
	{
		return _valuetype[_type];
	},
	getkindtype()
	{
		return _valuetype;
	}
})	

module.exports=StorageModule,ValueTypeModule;  