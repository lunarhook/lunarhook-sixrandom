

import React, {Component} from 'react';

class qimenMudule extends React.Component {

	constructor(porp) {
			super(porp);
	}
  /**
   * 內部參照用
   */
  jq = new Array("春分", "清明", "穀雨", "立夏", "小滿", "芒種", "夏至", "小暑", "大暑", "立秋", "處暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪",   "冬至", "小寒", "大寒", "立春", "雨水", "驚蟄");
  /**
   * 輸出用
   */
jq0 = new Array("立春", "雨水", "驚蟄","春分", "清明", "穀雨", "立夏", "小滿", "芒種", "夏至", "小暑", "大暑", "立秋", "處暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪",   "冬至", "小寒", "大寒" );
  /***
  this.ptsa = new Array(485, 203, 199, 182, 156, 136, 77, 74, 70, 58, 52, 50, 45, 44, 29, 18, 17, 16, 14, 12, 12, 12, 9, 8);
  this.ptsb = new Array(324.96, 337.23, 342.08, 27.85, 73.14, 171.52, 222.54, 296.72, 243.58, 119.81, 297.17, 21.02, 247.54, 325.15, 60.93, 155.12, 288.79, 198.04, 199.76, 95.39, 287.11, 320.81, 227.73, 15.45);
  this.ptsc = new Array(1934.136, 32964.467, 20.186, 445267.112, 45036.886, 22518.443, 65928.934, 3034.906, 9037.513, 33718.147, 150.678, 2281.226, 29929.562, 31555.956, 4443.417, 67555.328, 4562.452, 62894.029, 31436.921, 14577.848, 31931.756, 34777.259, 1222.114, 16859.074);
  ***/
  jdez = new Array(30);
  jdjq=new Array(26);
  /**
   * 由格里曆轉換為儒略曆
   */
  
  //_e.jiqi = new Object();
  
  synmonth = 29.530588853;     //synodic month (new Moon to new Moon)
  ptsa = new Array(485, 203, 199, 182, 156, 136, 77, 74, 70, 58, 52, 50, 45, 44, 29, 18, 17, 16, 14, 12, 12, 12, 9, 8)
  ptsb = new Array(324.96, 337.23, 342.08, 27.85, 73.14, 171.52, 222.54, 296.72, 243.58, 119.81, 297.17, 21.02, 247.54, 325.15, 60.93, 155.12, 288.79, 198.04, 199.76, 95.39, 287.11, 320.81, 227.73, 15.45)
  ptsc = new Array(1934.136, 32964.467, 20.186, 445267.112, 45036.886, 22518.443, 65928.934, 3034.906, 9037.513, 33718.147, 150.678, 2281.226, 29929.562, 31555.956, 4443.417, 67555.328, 4562.452, 62894.029, 31436.921, 14577.848, 31931.756, 34777.259, 1222.114, 16859.074)
  jdez=new Array;


  //

   _GAN = "　甲乙丙丁戊己庚辛壬癸";  
   _CHI = "　子丑寅卯辰巳午未申酉戌亥";
   _QIYI = " 戊己庚辛壬癸丁丙乙";
   _CHUN = "　戊丑癸卯壬巳辛未庚酉己亥";

	//qimenCalc = calc;
	//calc_kok  = calc_kok;
	timezone = 8/24;

	minQimen(h,i,s)
	{
	   var _dun = h < 12 ? 1 : 0;
	   var kooks = "174285396852963174396417528417528639936825714258147936714693582693582471";
	   var _yuen  = kooks.substr(h*3,3);
	   var sec = i * 60 + s;
	   var kook = 0;
	   if(sec > 2399) kook = _yuen[2];
	   else if (sec> 1199) kook = _yuen[1];
	   else kook = _yuen[0];
	   var fa_kap = sec % 1200;
	   fa_kap = (fa_kap - fa_kap % 20)/20;//console.log(fa_kap);
	   var tin_gan = "甲乙丙丁戊己庚辛壬癸".charAt(fa_kap % 10);
	   var dei_zhi = "子丑寅卯辰巳午未申酉戌亥".charAt(fa_kap % 12);
	   //console.log('時間',h,i,s,'天地', tin_gan, dei_zhi,'遁',_dun,'局',kook);
	   return this.qimenCalc(_dun, kook, tin_gan+dei_zhi);
	}
	
	minQimen_info(h,i,s)
	{
	   var _dun = h < 12 ? 1 : 0;
	   var kooks = "174285396852963174396417528417528639936825714258147936714693582693582471";
	   var _yuen  = kooks.substr(h*3,3);
	   var sec = i * 60 + s;
	   var kook = 0;
	   if(sec > 2399) kook = _yuen[2];
	   else if (sec> 1199) kook = _yuen[1];
	   else kook = _yuen[0];
	   var fa_kap = sec % 1200;
	   fa_kap = (fa_kap - fa_kap % 20)/20;//console.log(fa_kap);
	   var tin_gan = "甲乙丙丁戊己庚辛壬癸".charAt(fa_kap % 10);
	   var dei_zhi = "子丑寅卯辰巳午未申酉戌亥".charAt(fa_kap % 12);
	   return {'gz': tin_gan+dei_zhi,'dun':_dun,'kook':kook};
	}
	/***
	 * @param
	 * jiqi: QIMEN_STAR.jiqi.GetJiqiInfo
	 */
	calc_kok(jiqi) 
	{
	   var out = {};
	   var cjiqi = jiqi.currentJiqiIdx - 1; if(cjiqi < 0) cjiqi = 23;
	   var idx1 =  "甲乙丙丁戊己庚辛壬癸".indexOf(jiqi.bazi[4]);
	   var idx2 = "子丑寅卯辰巳午未申酉戌亥".indexOf(jiqi.bazi[5]);
	   idx2 = idx2 - idx1 % 5;
	   if(idx2 < 0) idx2 += 12;
	   idx2 = idx2 % 3;
	   if(idx2 > 0) {
		 idx2 = (idx2 == 1)? 2 : 1;
	   }
	   out['jiqi'] = jiqi.jiqi[cjiqi];
	   out['cjiqi'] = cjiqi;
	   out['yuen'] = "上中下".charAt(idx2);
	   //
	   // 計算當前局數
	   // 計陰陽遁
	   var dun_type = 2; // 0為陰遁, 1為陽遁, 其餘為錯誤
	   var kook = [
		 [8,9,1,3,4,5,4,5,6,9,8,7,2,1,9,7,6,5,6,5,4,1,2,3], // 局數
		 [5,6,7,9,7,2,1,2,3,3,2,1,5,4,3,1,9,8,9,8,7,7,8,9], // 局數
		 [2,3,4,6,1,8,7,8,9,6,5,4,8,7,6,4,3,2,3,2,1,4,5,6], // 局數
		 [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1]  // 陰陽遁
		 ];
	   out['dun'] = kook[3][cjiqi];
	   out['kook'] = kook[idx2][cjiqi];//局數
	   out.toString = function() {
		 return this.jiqi + this.yuen + "元" +","+"陰陽"[this.dun]+'遁'+" 一二三四五六七八九"[this.kook]+'局';
	   };
	   return out;
	}
	qimenCalc(_dun, _kook, gan_chi,_chun_sau,_jik_fu) 
	{
	 "use strict";
	 //var d = new Date(); //當下
	 //
	 var tcol0 = [gan_chi[0]];
	 var dcol0 = [gan_chi[1]]; 
	 // 計算當前局數
	 // 計陰陽遁
	 var dun_type = _dun; // 0為陰遁, 1為陽遁, 其餘為錯誤
	 var using_kook = _kook;  //局數
	 /** 重計時旬首 **/
	 //　時旬首
	 var chun_sau = "子丑寅卯辰巳午未申酉戌亥".indexOf(dcol0[0]) - "甲乙丙丁戊己庚辛壬癸".indexOf(tcol0[0]);
	 var chun_sau_org = chun_sau;
	 //if(_chun_sau) chun_sau = _chun_sau;
	 //console.log(_chun_sau);
	 /*
	 if(_chun_sau && _chun_sau.match(/^[0-9]+$/i)) {
	   if(_chun_sau < 12 && (_chun_sau%2) == 0) chun_sau = parseInt(_chun_sau);
	 }
	 */
	 if(chun_sau < 0) chun_sau += 12;
	 // 建地盤
	 var dei_pan = ""; // 建地盤
	 if(dun_type == 1) { // 陽遁
	   //var dei_pan = " 戊己庚辛壬癸丁丙乙戊己庚辛壬癸丁丙乙".substr(9-using_kook+1,9); // 地盤
	   var dei_pan = "戊己庚辛壬癸丁丙乙戊己庚辛壬癸丁丙乙".substr(9-using_kook+1,9); // 地盤
	 } else { // 陰遁
	   //var dei_pan = " 戊乙丙丁癸壬辛庚己戊乙丙丁癸壬辛庚己".substr(9-using_kook+1,9);
	   var dei_pan = "戊乙丙丁癸壬辛庚己戊乙丙丁癸壬辛庚己".substr(9-using_kook+1,9);
	 }//console.log(dei_pan);
	 // 找值符
	 var chun_sau = " 子戌申午辰寅".indexOf("子寅辰午申戌".charAt(parseInt(chun_sau/2)));
	 if(_chun_sau && _chun_sau.match(/^[0-9]$/i)) {
		 _chun_sau = parseInt(_chun_sau);
		 if(_chun_sau > 0)
			 chun_sau = _chun_sau;
	 }
	 //
	 var chun_sau_org = " 子戌申午辰寅".indexOf("子寅辰午申戌".charAt(parseInt(chun_sau_org/2)));
		 chun_sau_org = " 戊己庚辛壬癸".charAt(chun_sau_org);//console.log(chun_sau_org);
		 chun_sau_org = dei_pan.indexOf(chun_sau_org)+1;//console.log(chun_sau_org);
	 if(chun_sau_org == 5) chun_sau_org = 2;
	 // step 2
	 var jik_fu_idx = 0;
	 var jik_fu_star = 0;
	 var _tmp = tcol0[0];
	 if(dun_type == 1) { // 陽遁
	   var jik_fu_idx = using_kook + chun_sau - 1;
	   while(jik_fu_idx > 9) jik_fu_idx -= 9;
	   while(jik_fu_idx < 1) jik_fu_idx += 9;
	   if(_tmp == '甲') _tmp = " 戊己庚辛壬癸丁丙乙".charAt(chun_sau);
	   jik_fu_star = " 戊己庚辛壬癸丁丙乙".indexOf(_tmp) + using_kook - 1;
	   while(jik_fu_star > 9) jik_fu_star -= 9;
	   while(jik_fu_star < 1) jik_fu_star += 9;      
	 } else {
	   var jik_fu_idx = 1 + using_kook - chun_sau;
	   while(jik_fu_idx > 9) jik_fu_idx -= 9;
	   while(jik_fu_idx < 1) jik_fu_idx += 9;
	   if(_tmp == '甲') _tmp = " 戊己庚辛壬癸丁丙乙".charAt(chun_sau);
	   jik_fu_star = 1 + using_kook - " 戊己庚辛壬癸丁丙乙".indexOf(_tmp);
	   while(jik_fu_star < 1) jik_fu_star += 9;
	   while(jik_fu_star > 9) jik_fu_star -= 9;
	 }
	 if(jik_fu_star == 5) jik_fu_star = 2; // 禽星寄二宮
	 // 計值使, 不分陰陽遁
	 var jik_fu_mun = 0;
	 if(dun_type == 1) {
	   jik_fu_mun = jik_fu_idx + " 甲乙丙丁戊己庚辛壬癸".indexOf(tcol0[0]) - 1;
	   while(jik_fu_mun > 9) jik_fu_mun -= 9;
	 } else {
	   jik_fu_mun = jik_fu_idx - " 甲乙丙丁戊己庚辛壬癸".indexOf(tcol0[0]) + 1;
	   while(jik_fu_mun < 1) jik_fu_mun += 9;
	 }
	 if(jik_fu_mun == 5) jik_fu_mun = 2; // 中宮寄坤二宮
	 // 計算星盤
	 var houses_star_target = "18349276".indexOf(jik_fu_star);
	 if(tcol0[0] == '甲') houses_star_target = "18349276".indexOf(chun_sau_org);
	 var _jfi = (jik_fu_idx == 5 ? 2 : jik_fu_idx);
	 var houses_star_idx = "1834927618349276".substr(
		 (8 +( "18349276".indexOf(_jfi)- houses_star_target))%8,
		 8
	   ) + " ";
	 var star_pan = new Array; //星盤
	 for(var i = 1; i < 10; i++)
	 {
	   if(i == 5) {
		 star_pan.push(5);
	   } else {
		 star_pan.push(houses_star_idx["18349276".indexOf(i)]);
	   }
	 }
	 var houses_star = new Array;
	 for(var i = 0; i < 9; i++) {
	   houses_star.push("，蓬苪衝輔禽心柱任英".charAt(star_pan[i]));
	 }
	 // 計算天盤
	 var tin_pan = new Array;  // 天盤
	 if( dun_type  == 1) { // 陽遁
	   for(var i = 0; i < 9;i++) 
	   {
		 var _tin = star_pan[i] - using_kook + 1;
		 while(_tin < 1) _tin += 9;
		 tin_pan.push(" 戊己庚辛壬癸丁丙乙".charAt(_tin));
	   }
	 } else {
	   for(var i = 0; i < 9; i++) {
		 var _tin = using_kook - star_pan[i] + 1;
		 while(_tin < 1) _tin += 9;
		 tin_pan.push(" 戊己庚辛壬癸丁丙乙".charAt(_tin));
	   }
	 }
	 
	 var houses_door_target = "18349276".indexOf(jik_fu_mun);
	 var _jfi = (jik_fu_idx == 5 ? 2 : jik_fu_idx);
	 var houses_door_idx = "1834927618349276".substr(
		 (8 +( "18349276".indexOf(_jfi)- houses_door_target))%8,
		 8
	   ) + " ";
	 var door_pan = new Array; //門盤(八門)
	 for(var i = 1; i < 10; i++)
	 {
	   if(i == 5) {
		 door_pan.push(5);
	   } else {
		 door_pan.push(houses_door_idx["18349276".indexOf(i)]);
	   }
	 }
	 var house_door = new Array;
	 for(var i = 0; i < 9; i++) {
	   house_door.push("，休死傷杜　開驚生景".charAt(door_pan[i]));
	 }
 
	 // 計算八神
	 var houses_god;
	 if(dun_type == 1) { // 陽遁-順排
	   var houses_god_target = "18349276".indexOf(jik_fu_star);
	   if(tcol0[0] == '甲') houses_god_target = "18349276".indexOf(chun_sau_org);
	   var _jfi = (jik_fu_idx == 5 ? 2 : jik_fu_idx);
	   houses_god = "符蛇陰合白玄地天符蛇陰合白玄地天".substr(
		 (8-houses_god_target)%8,
 
		 8
	   ) + " ";
 
	 } else {
	   var houses_god_target = "18349276".indexOf(jik_fu_star);
	   if(tcol0[0] == '甲') houses_god_target = "18349276".indexOf(chun_sau_org);
	   var _jfi = (jik_fu_idx == 5 ? 2 : jik_fu_idx);
	   houses_god = "符天地玄白合陰蛇符天地玄白合陰蛇".substr(
		 (8-houses_god_target)%8,
		 8
	   ) + " ";
 
	 }
	 var god_pan = new Array; //神盤(八神)
	 for(var i = 1; i < 10; i++)
	 {
	   if(i == 5) {
		 god_pan.push('　');
	   } else {
		 god_pan.push(houses_god["18349276".indexOf(i)]);
	   }
	 }
 
	 houses_star.unshift("");
	 tin_pan.unshift("");
	 dei_pan = " " + dei_pan;
	 house_door.unshift("");
	 god_pan.unshift("");
	 return {
		 'info':{
			 '干支':gan_chi,
			 '遁':_dun?'陽':'陰',
			 '局':_kook,
			 '符':" 蓬苪沖輔禽心柱任英".charAt(jik_fu_idx),
			 '使':" 休死傷杜死開驚生景".charAt(jik_fu_idx) 
		 },
		 '星':houses_star,
		 '天':tin_pan,
		 '地':dei_pan,
		 '門':house_door,
		 '神':god_pan,
	 };
   }


	Jdays(op,yr,mh,dy,hr){//將年月日時，轉??儒略日
		if(yr<-400000 || yr>400000) return false;
		var yp=yr+Math.floor((mh-3)/10);
		if(((yr>1582) || (yr==1582 && mh>10) || (yr==1582 && mh==10 && dy>=15)) || op){
		  var init=1721119.5;
		  var jdy=Math.floor(yp*365.25)-Math.floor(yp/100)+Math.floor(yp/400);
		}
		else{
		  if((yr<1582) || (yr==1582 && mh<10) || (yr==1582 && mh==10 && dy<=4)){
			var init=1721117.5;
			var jdy=Math.floor(yp*365.25);
		  }
		  else {return false;}
		}
		var mp=Math.floor(mh+9)%12; 
		var jdm=mp*30+Math.floor((mp+1)*34/57);
		var jdd=dy-1;
		var jdh=hr/24;
		var jd=jdy+jdm+jdd+jdh+init;
		return jd;
	  }
	
		//副程式功能：對Perturbaton作調整後的自春分點開始的24節氣,可只取部份
	  GetAdjustedJQ(yy, ini, num, jdjq){
		var veb=this.VE(yy);
		var ty=this.VE(yy+1)-veb;     //求指定年的春分點及回歸年長
	
		if(this.MeanJQJD(yy,veb,ty,ini,num)==true){	//輸入指定年,JD,回歸年長,求該回歸年各節氣之長
			for(var i=ini+1;i<=(ini+num);i++){
			  var ptb=this.Perturbation(this.jdez[i]);	//取得受perturbation影響所需微調
			  var dt=this.DeltaT(yy,Math.floor(i/2)+3);	//修正dynamical time to Universal time
			  jdjq[i]=this.jdez[i]+ptb-dt/60/24;	//加上攝動調整值ptb，減去對應的Delta T值(分鐘轉換為日)
			  jdjq[i]=this.jdjq[i]+1/3;	//因中國時間比格林威治時間先行8小時，即1/3日
			}
		  }
	
	  }
	
	  //副程式功能：求出自冬至點為起點的連續16個中氣
	  GetZQsinceWinterSolstice(yy, jdzq){
		//求出以冬至為起點之連續16個中氣（多取四個以備用）
		var dj=new Array(26);
		this.GetAdjustedJQ(yy - 1, 18, 5, dj);	//求出指定年冬至開始之節氣JD值,以前一年的值代入
		//轉移春分前之節氣至jdzq變數中，以重整index
		jdzq[0] = dj[19];                    //此為冬至中氣
		jdzq[1] = dj[21];                    //此為大寒中氣
		jdzq[2] = dj[23];                    //此為雨水中氣
		this.GetAdjustedJQ(yy, 0, 26, dj); //求出指定年節氣之JD值
		for(var i=1;i<=13;i++){
			jdzq[i + 2] = dj[2 * i - 1];     //轉移冬至後之節氣至jdzq變數中，以重整index
		}
	  }
	  //副程式功能：對於指定日期時刻所屬的朔望月，求出其均值新月點的月序數
	  MeanNewMoon(jd){
		var t, thejd, jdt;
		//k為從2000年1月6日14時20分36秒起至指定年月日之陰曆月數,以synodic month為單位
		var k = Math.floor((jd - 2451550.09765) / this.synmonth); //2451550.09765為2000年1月6日14時20分36秒之JD值。
		jdt = 2451550.09765 + k * this.synmonth;
		//Time in Julian centuries from 2000 January 0.5.
		t = (jdt - 2451545) / 36525;  //以100年為單位,以2000年1月1日12時為0點
		thejd = jdt + 0.0001337*t*t - 0.00000015*t*t*t + 0.00000000073*t*t*t*t;
				//2451550.09765為2000年1月6日14時20分36秒，此為2000年後的第一個均值新月
		return k;
	  }
	  //函式功能:求出實際新月點
	  //以2000年初的第一個均值新月點為0點求出的均值新月點和其朔望月之序數k
	  //代入此副程式來求算實際新月點
	  TrueNewMoon(k){
		var t, t2, t3, t4;
		var m, mprime, f , omega , es;
		var pt, apt1, apt2, jdt;
		jdt = 2451550.09765 + k * this.synmonth;
		t = (jdt - 2451545) / 36525;	//2451545為2000年1月1日正午12時的JD
		t2 = t * t;      //square for frequent use
		t3 = t2 * t;     //cube for frequent use
		t4 = t3 * t;     //to the fourth
		//mean time of phase
		pt = jdt + 0.0001337 * t2 - 0.00000015 * t3 + 0.00000000073 * t4;
		//Sun's mean anomaly(地球繞太陽運行均值近點角)(從太陽觀察)
		m = 2.5534 + 29.10535669 * k - 0.0000218 * t2 - 0.00000011 * t3;
		//Moon's mean anomaly(月球繞地球運行均值近點角)(從地球觀察)
		mprime = 201.5643 + 385.81693528 * k + 0.0107438 * t2 + 0.00001239 * t3 - 0.000000058 * t4;
		//Moon's argument of latitude(月球的緯度參數)
		f = 160.7108 + 390.67050274 * k - 0.0016341 * t2 - 0.00000227 * t3 + 0.000000011 * t4;
		//Longitude of the ascending node of the lunar orbit(月球繞日運行軌道升交點之經度)
		omega = 124.7746 - 1.5637558 * k + 0.0020691 * t2 + 0.00000215 * t3;
		//乘式因子
		es = 1 - 0.002516 * t - 0.0000074 * t2;
		//因perturbation造成的偏移：
		apt1 = -0.4072 * Math.sin((Math.PI / 180) * mprime);
			apt1+= 0.17241 * es * Math.sin((Math.PI / 180) * m);
			apt1+= 0.01608 * Math.sin((Math.PI / 180) * 2 * mprime);
			apt1+= 0.01039 * Math.sin((Math.PI / 180) * 2 * f);
			apt1+= 0.00739 * es * Math.sin((Math.PI / 180) * (mprime - m));
			apt1-= 0.00514 * es * Math.sin((Math.PI / 180) * (mprime + m));
			apt1+= 0.00208 * es * es * Math.sin((Math.PI / 180) * (2 * m));
			apt1-= 0.00111 * Math.sin((Math.PI / 180) * (mprime - 2 * f));
			apt1-= 0.00057 * Math.sin((Math.PI / 180) * (mprime + 2 * f));
			apt1+= 0.00056 * es * Math.sin((Math.PI / 180) * (2 * mprime + m));
			apt1-= 0.00042 * Math.sin((Math.PI / 180) * 3 * mprime);
			apt1+= 0.00042 * es * Math.sin((Math.PI / 180) * (m + 2 * f));
			apt1+= 0.00038 * es * Math.sin((Math.PI / 180) * (m - 2 * f));
			apt1-= 0.00024 * es * Math.sin((Math.PI / 180) * (2 * mprime - m));
			apt1-= 0.00017 * Math.sin((Math.PI / 180) * omega);
			apt1-= 0.00007 * Math.sin((Math.PI / 180) * (mprime + 2 * m));
			apt1+= 0.00004 * Math.sin((Math.PI / 180) * (2 * mprime - 2 * f));
			apt1+= 0.00004 * Math.sin((Math.PI / 180) * (3 * m));
			apt1+= 0.00003 * Math.sin((Math.PI / 180) * (mprime + m - 2 * f));
			apt1+= 0.00003 * Math.sin((Math.PI / 180) * (2 * mprime + 2 * f));
			apt1-= 0.00003 * Math.sin((Math.PI / 180) * (mprime + m + 2 * f));
			apt1+= 0.00003 * Math.sin((Math.PI / 180) * (mprime - m + 2 * f));
			apt1-= 0.00002 * Math.sin((Math.PI / 180) * (mprime - m - 2 * f));
			apt1-= 0.00002 * Math.sin((Math.PI / 180) * (3 * mprime + m));
			apt1+= 0.00002 * Math.sin((Math.PI / 180) * (4 * mprime));
					
		apt2 = 0.000325 * Math.sin((Math.PI / 180) * (299.77 + 0.107408 * k - 0.009173 * t2));
			apt2+= 0.000165 * Math.sin((Math.PI / 180) * (251.88 + 0.016321 * k));
			apt2+= 0.000164 * Math.sin((Math.PI / 180) * (251.83 + 26.651886 * k));
			apt2+= 0.000126 * Math.sin((Math.PI / 180) * (349.42 + 36.412478 * k));
			apt2+= 0.00011 * Math.sin((Math.PI / 180) * (84.66 + 18.206239 * k));
			apt2+= 0.000062 * Math.sin((Math.PI / 180) * (141.74 + 53.303771 * k));
			apt2+= 0.00006 * Math.sin((Math.PI / 180) * (207.14 + 2.453732 * k));
			apt2+= 0.000056 * Math.sin((Math.PI / 180) * (154.84 + 7.30686 * k));
			apt2+= 0.000047 * Math.sin((Math.PI / 180) * (34.52 + 27.261239 * k));
			apt2+= 0.000042 * Math.sin((Math.PI / 180) * (207.19 + 0.121824 * k));
			apt2+= 0.00004 * Math.sin((Math.PI / 180) * (291.34 + 1.844379 * k));
			apt2+= 0.000037 * Math.sin((Math.PI / 180) * (161.72 + 24.198154 * k));
			apt2+= 0.000035 * Math.sin((Math.PI / 180) * (239.56 + 25.513099 * k));
			apt2+= 0.000023 * Math.sin((Math.PI / 180) * (331.55 + 3.592518 * k));
		var tnm = pt + apt1 + apt2;
		return tnm;
	  }
	  //副程式功能：求算以含冬至中氣為陰曆11月開始的連續16個朔望月
	  GetSMsinceWinterSolstice(op, yy, jdws, jdnm){
		var kn, tjd=new Array, i, k, mjd, thejd;
		var spcjd, phase, kn;
		spcjd = this.Jdays(op, yy-1, 11, 0, 0);        //求年初前兩個月附近的新月點(即前一年的11月初)
		kn=this.MeanNewMoon(spcjd);   //求得自2000年1月起第kn個平均朔望日及其JD值
		for(var i=0;i<=19;i++){                         //求出連續20個朔望月
			k = kn + i;
			mjd = thejd + this.synmonth * i;
			tjd[i] = this.TrueNewMoon(k) + 1 / 3;      //以k值代入求瞬時朔望日,因中國比格林威治先行8小時，加1/3天
			//下式為修正dynamical time to Universal time
			tjd[i] = tjd[i] - this.DeltaT(yy, i - 1) / 1440;   //1為1月，0為前一年12月，-1為前一年11月(當i=0時，i-1=-1，代表前一年11月)
		}
		for(var j=0;j<=18;j++){
			if(Math.floor(tjd[j] + 0.5) > Math.floor(jdws + 0.5)) {break;}	//已超過冬至中氣(比較日期法)
		}
		var jj = j;                                  //取此時的索引值
		for(var k=0;k<=15;k++){
			jdnm[k] = tjd[jj - 1 + k];            //重排索引，使含冬至朔望月的索引為0
		}
	  }
	  
	date_to_julian_day(y,m,d) 
	{
		"use strict";
		var a = parseInt((14 - m) / 12);
		var y = y + 4800 - a;
		var m = m + 12*a - 3;
		return d + parseInt((153*m + 2)/5) + 365*y + parseInt(y/4) - parseInt(y/100) + parseInt(y/400) - 32045;
	  }
	 date_to_julian_day2(yr,mh,dy) 
	 {
		"use strict";
		var hr = 0;
		var op = false;
		if(yr<-400000 || yr>400000) return false;
		var yp=yr+Math.floor((mh-3)/10);
		if(((yr>1582) || (yr==1582 && mh>10) || (yr==1582 && mh==10 && dy>=15)) || op){
		  var init=1721119.5;
		  var jdy=Math.floor(yp*365.25)-Math.floor(yp/100)+Math.floor(yp/400);
		}
		else{
		  if((yr<1582) || (yr==1582 && mh<10) || (yr==1582 && mh==10 && dy<=4)){
			var init=1721117.5;
			var jdy=Math.floor(yp*365.25);
		  }
		  else {return false;}
		}
		var mp=Math.floor(mh+9)%12; 
		var jdm=mp*30+Math.floor((mp+1)*34/57);
		var jdd=dy-1;
		var jdh=hr/24;
		var jd=jdy+jdm+jdd+jdh+init;
		return jd;
	  }
	  date_to_julian_time(h,i,s) 
	  {
		/*****
		 * h: hour
		 * i: minutes
		 * s: second
		 */
		return ((h * 3600) + (i * 60) + s) /86400;
	  }
	  /*****
	   * 計算指定年份之春分點
	   */
	  VE(yy) 
	  {
		var yx=yy;
		var jdve = 0;
		if(yx>=1000 && yx<=8001){
		  var m=(yx-2000)/1000;
		  jdve=2451623.80984+365242.37404*m+0.05169*m*m-0.00411*m*m*m-0.00057*m*m*m*m;
		}
		else{
		  if(yx>=-8000 && yx<1000){
			m=yx/1000;
			jdve=1721139.29189+365242.1374*m+0.06134*m*m+0.00111*m*m*m-0.00071*m*m*m*m;
		  }
		  else{ 
			// 超出計算能力範圍 
			return false;
		  }
		}
		return jdve;
	  };
	  /*****
	   * 計算及修正其他星球之影響而產生攝動
	   * 取得受perturbation影響所需微調
	   */
	  Perturbation(jdez)
	  {
		var t=(jdez-2451545)/36525;
		var s=0;
		var ptsa = new Array(485, 203, 199, 182, 156, 136, 77, 74, 70, 58, 52, 50, 45, 44, 29, 18, 17, 16, 14, 12, 12, 12, 9, 8);
		var ptsb = new Array(324.96, 337.23, 342.08, 27.85, 73.14, 171.52, 222.54, 296.72, 243.58, 119.81, 297.17, 21.02, 247.54, 325.15, 60.93, 155.12, 288.79, 198.04, 199.76, 95.39, 287.11, 320.81, 227.73, 15.45);
		var ptsc = new Array(1934.136, 32964.467, 20.186, 445267.112, 45036.886, 22518.443, 65928.934, 3034.906, 9037.513, 33718.147, 150.678, 2281.226, 29929.562, 31555.956, 4443.417, 67555.328, 4562.452, 62894.029, 31436.921, 14577.848, 31931.756, 34777.259, 1222.114, 16859.074);
		for(var k=0;k<=23;k++){
		  //s=s+this.ptsa[k]*Math.cos(this.ptsb[k]*2*Math.PI/360+this.ptsc[k]*2*Math.PI/360*t);
		  s=s+ptsa[k]*Math.cos(ptsb[k]*2*Math.PI/360+ptsc[k]*2*Math.PI/360*t);
		}
		var w=35999.373*t-2.47;
		var l=1+0.0334*Math.cos(w*2*Math.PI/360)+0.0007*Math.cos(2*w*2*Math.PI/360);
		var ptb=0.00001*s/l;
		return ptb;
	  };
	  /*****
	   * 計算地球運行速度偏差修正值
	   * 
	   */
	  DeltaT(yy , mm )
	  {
		var u, t, dt, y;
		y = yy + (mm - 0.5) / 12;
	
		if(y<=-500){	
		  u = (y - 1820) / 100;
		  dt = (-20 + 32*u*u);}
		else{if(y< 500){
		  u = y / 100;
		  dt=(10583.6-1014.41*u+33.78311*u*u-5.952053*u*u*u-0.1798452*u*u*u*u+0.022174192*u*u*u*u*u+0.0090316521*u*u*u*u*u*u);}
		else{if(y<1600){
		  u = (y - 1000) / 100;
		  dt = (1574.2-556.01*u+71.23472*u*u+0.319781*u*u*u-0.8503463*u*u*u*u-0.005050998*u*u*u*u*u+ 0.0083572073*u*u*u*u*u*u);}
		else{if(y<1700){
		  t = y - 1600;
		  dt = (120 - 0.9808 * t - 0.01532 * t*t + t*t*t / 7129);}
		else{if(y<1800){
		  t = y - 1700;
		  dt = (8.83 + 0.1603 * t - 0.0059285 * t*t + 0.00013336 * t*t*t - t*t*t*t / 1174000);}
		else{if(y<1860){
		  t = y - 1800;
		  dt=(13.72-0.332447*t+0.0068612*t*t+0.0041116*t*t*t-0.00037436*t*t*t*t+0.0000121272*t*t*t*t*t-0.0000001699*t*t*t*t*t*t+ 0.000000000875*t*t*t*t*t*t*t);}
		else{if(y<1900){
		  t = y - 1860;
		  dt = (7.62 + 0.5737 * t - 0.251754 * t*t + 0.01680668 * t*t*t - 0.0004473624 * t*t*t*t + t*t*t*t*t / 233174);}
		else{if(y<1920){
		  t = y - 1900;
		  dt = (-2.79 + 1.494119 * t - 0.0598939 * t*t + 0.0061966 * t*t*t - 0.000197 * t*t*t*t);}
		else{if(y<1941){
		  t = y - 1920;
		  dt = (21.2 + 0.84493 * t - 0.0761 * t*t + 0.0020936 * t*t*t);}
		else{if(y<1961){
		  t = y - 1950;
		  dt = (29.07 + 0.407 * t - t*t / 233 + t*t*t / 2547);}
		else{if(y<1986){
		  t = y - 1975;
		  dt = (45.45 + 1.067 * t - t*t / 260 - t*t*t / 718);}
		else{if(y<2005){
		  t = y - 2000;
		  dt = (63.86 + 0.3345 * t - 0.060374 * t*t + 0.0017275 * t*t*t + 0.000651814 * t*t*t*t + 0.00002373599 * t*t*t*t*t);}
		else{if(y<2050){
		  t = y - 2000;
		  dt = (62.92 + 0.32217 * t + 0.005589 * t*t);}
		else{if(y<2150){
		  u = (y - 1820) / 100;
		  dt = (-20 + 32*u*u-0.5628*(2150 - y));}
		else{
		  u = (y - 1820) / 100;
		  dt = (-20 + 32*u*u);}}}}}}}}}}}}}}
	
		if(y<1955 || y>=2005) dt=dt-(0.000012932*(y-1955)*(y-1955));
		var DeltaT = dt / 60;    //將秒轉換為分
		return DeltaT;
	  }
	  /*****
	   * 
	   */
	  MeanJQJD(yy,jdve,ty,ini,num)
	  {
		var ath=2*Math.PI/24;
		var tx=(jdve-2451545)/365250;
		var e=0.0167086342-0.0004203654*tx-0.0000126734*tx*tx+0.0000001444*tx*tx*tx-0.0000000002*tx*tx*tx*tx+0.0000000003*tx*tx*tx*tx*tx;
		var tt=yy/1000;
		var vp=111.25586939-17.0119934518333*tt-0.044091890166673*tt*tt-4.37356166661345E-04*tt*tt*tt+8.16716666602386E-06*tt*tt*tt*tt;
		var rvp=vp*2*Math.PI/360;
		var peri = new Array(30);
		var i;
		for(i=1;i<=(ini+num);i++){
		  var flag=0;
		  var th=ath*(i-1)+rvp;
		  if(th>Math.PI && th<=3*Math.PI){
			th=2*Math.PI-th;
			flag=1;
		  }
		  if(th>3*Math.PI){
			th=4*Math.PI-th;
			flag=2;
		  }
		  var f1=2*Math.atan((Math.sqrt((1-e)/(1+e))*Math.tan(th/2)));
		  var f2=(e*Math.sqrt(1-e*e)*Math.sin(th))/(1+e*Math.cos(th));
		  var f=(f1-f2)*ty/2/Math.PI;
		  if(flag==1) f=ty-f;
		  if(flag==2) f=2*ty-f;
		  peri[i]=f;
		}
		for(i=ini;i<=(ini+num);i++){
			this.jdez[i]=jdve+peri[i]-peri[1];
		}
		return true;
	  };
	  //副程式功能：對Perturbaton作調整後的自春分點開始的24節氣,可只取部份
	  GetAdjustedJQ(yy, ini, num, jdjq)
	  {
		var veb= this.VE(yy);
		var ty= this.VE(yy+1)-veb;     //求指定年的春分點及回歸年長
		if(this.MeanJQJD(yy,veb,ty,ini,num)==true){	//輸入指定年,JD,回歸年長,求該回歸年各節氣之長
		  for(var i=ini+1;i<=(ini+num);i++){
			var ptb= this.Perturbation(this.jdez[i]);	//取得受perturbation影響所需微調
			var dt= this.DeltaT(yy,Math.floor(i/2)+3);	//修正dynamical time to Universal time
			jdjq[i]= this.jdez[i]+ptb-dt/60/24;	//加上攝動調整值ptb，減去對應的Delta T值(分鐘轉換為日)
			//jdjq[i]=jdjq[i]+1/3;	//因中國時間比格林威治時間先行8小時，即1/3日
			jdjq[i]=jdjq[i]+(8/24);	//因中國時間比格林威治時間先行8小時，即1/3日
		  }
		}
	  }
	  /*****
	   * 副程式功能：求出以立春點開始的含中氣之12節氣
	   */
	  GetPureJQsinceSpring2(yy, ptsa,ptsb,ptsc, jdpjq)
	  {
		var sjdjq=new Array;
		var yea = yy - 1;
		this.GetAdjustedJQ(yea, 21, 3, sjdjq);   //求出含指定年立春開始之3個節氣JD值,以前一年的年值代入
		//轉移春分前之立春至驚蟄之節氣至jdpjq變數中，以重整index
		jdpjq[0] =sjdjq[22];                     //此為立春
		jdpjq[1] =sjdjq[23];                     //此為雨水
		jdpjq[2] =sjdjq[24];                     //此為驚蟄
		yea = yy;
		//GetAdjustedJQ(yea, 0, 26, sjdjq);       //求出指定年節氣之JD值,從驚蟄開始，到雨水
		this.GetAdjustedJQ(yea, 0, 26, sjdjq);       //求出指定年節氣之JD值,從驚蟄開始，到雨水
		//jdpjq[3] =sjdjq[25];                     //此為當年春分
		//轉移春分至小寒之節氣至jdpjq變數中，以重整index
		//jdpjq[3] =sjdjq[0]; 
		for(var i=2;i<=24;i++){
		  //jdpjq[i+1] = sjdjq[2 * i];
		  jdpjq[i+1] = sjdjq[i-1];
		}
	  };
	  /*****
	   * 將儒略日換成年月日時分秒
	   */
	  Jtime (op,jd)
	  {
		if(jd>=2299160.5 || op){
		  var y4h=146097;
		  var init=1721119.5;
		}
		else{
		  var y4h=146100;
		  var init=1721117.5;
		}
		var jdr=Math.floor(jd-init);
		var yh=y4h/4;
		var cen=Math.floor((jdr+0.75)/yh);
		var d=Math.floor(jdr+0.75-cen*yh);
		var ywl=1461/4;
		var jy=Math.floor((d+0.75)/ywl);
		d=Math.floor(d+0.75-ywl*jy+1);
		var ml=153/5;
		var mp=Math.floor((d-0.5)/ml);
		d=Math.floor((d-0.5)-30.6*mp+1);
		var y=(100*cen)+jy;
		var m=(mp+2)%12+1;
		if(m<3) y=y+1;
		var sd=Math.floor((jd+0.5-Math.floor(jd+0.5))*24*60*60+0.00005);
		var mt=Math.floor(sd/60);
		var ss=sd%60;
		var hh=Math.floor(mt/60);
		var mmt=mt%60;
		var yy=Math.floor(y);
		var mm=Math.floor(m);
		var dd=Math.floor(d);
		var yc="     "+yy;
		yc=yc.substr(yc.length-5,5);
		var dytm=yc;dytm+="年";
		dytm+= ((mm < 10) ? "0" : "") + mm+"月";
		dytm+= ((dd < 10) ? "0" : "") + dd+"日";
		dytm+= ((hh < 10) ? "0" : "") + hh+"時";
		dytm+= ((mmt < 10) ? "0" : "") + mmt+"分";
		dytm+= ((ss < 10) ? "0" : "") + ss+"秒";
		return dytm.trim();
	  };
	  /*****
	   * 將儒略日換成Date object(年月日時分秒)
	   */
	  Jtime2 (op,jd)
	  {
		if(jd>=2299160.5 || op){
		  var y4h=146097;
		  var init=1721119.5;
		}
		else{
		  var y4h=146100;
		  var init=1721117.5;
		}
		var jdr=Math.floor(jd-init);
		var yh=y4h/4;
		var cen=Math.floor((jdr+0.75)/yh);
		var d=Math.floor(jdr+0.75-cen*yh);
		var ywl=1461/4;
		var jy=Math.floor((d+0.75)/ywl);
		d=Math.floor(d+0.75-ywl*jy+1);
		var ml=153/5;
		var mp=Math.floor((d-0.5)/ml);
		d=Math.floor((d-0.5)-30.6*mp+1);
		var y=(100*cen)+jy;
		var m=(mp+2)%12+1;
		if(m<3) y=y+1;
		var sd=Math.floor((jd+0.5-Math.floor(jd+0.5))*24*60*60+0.00005);
		var mt=Math.floor(sd/60);
		var ss=sd%60;
		var hh=Math.floor(mt/60);
		var mmt=mt%60;
		var yy=Math.floor(y);
		var mm=Math.floor(m);
		var dd=Math.floor(d);
		/**
		var yc="     "+yy;
		yc=yc.substr(yc.length-5,5);
		var dytm=yc;dytm+="年";
		dytm+= ((mm < 10) ? "0" : "") + mm+"月";
		dytm+= ((dd < 10) ? "0" : "") + dd+"日";
		dytm+= ((hh < 10) ? "0" : "") + hh+"時";
		dytm+= ((mmt < 10) ? "0" : "") + mmt+"分";
		dytm+= ((ss < 10) ? "0" : "") + ss+"秒";
		return dytm.trim();
		**/
		//console.log(yy,mm,dd,hh,mmt,ss);
		return new Date(yy,mm-1,dd,hh,mmt,ss);
	  };
	  /**
	   * 計算當年節氣
	   */
	  CalJiqiByYear(y,m,d,h,i,s,_array) 
	  {
		var jtoday = this.date_to_julian_day2(y,m,d) + this.date_to_julian_time(h,i,s);
		this.GetPureJQsinceSpring2(y,0,0,0,_array);  // 計算當年節氣(以立春日為新一年)
		/**
		if(jtoday < _array[0]) {
		  y = y - 1;
		  GetPureJQsinceSpring2(y,0,0,0,_array);  // 計算上一年節氣(以立春日為新一年)
		}
		**/
		if(jtoday < _array[0]) {
		  var jt1 = Math.ceil((jtoday - Math.floor(jtoday))*86400);
		  var jq1 = Math.ceil((_array[0] - Math.floor(_array[0]))*86400);
		  if(Math.floor(jtoday) == Math.floor(_array[0]) && jt1 >= jq1) {
			  // nothing to change by same second(針對同秒不同年)
		  }else{
			y = y - 1;
			this.GetPureJQsinceSpring2(y,0,0,0,_array);  // 計算上一年節氣(以立春日為新一年)
		  }
		}
	  }
	  /**
	   * 計算當前節氣
	   */
	  _CalCurrentJiqi(y,m,d,h,i,s) 
	  {
		var jtoday = this.date_to_julian_day2(y,m,d) + this.date_to_julian_time(h,i,s);
		var jqTime=new Array;
		this.GetPureJQsinceSpring2(y,0,0,0,jqTime);  // 計算當年節氣(以立春日為新一年)
		if(jtoday < jqTime[0]) {
		  var jt1 = Math.ceil((jtoday - Math.floor(jtoday))*86400);
		  var jq1 = Math.ceil((jqTime[0] - Math.floor(jqTime[0]))*86400);
		  if(Math.floor(jtoday) == Math.floor(jqTime[0]) && jt1 >= jq1) {
		  }else{
			y = y - 1;
			this.GetPureJQsinceSpring2(y,0,0,0,jqTime);  // 計算上一年節氣(以立春日為新一年)
		  }
		}
		var dgz = -1;
		var jt2 = Math.ceil((jtoday - Math.floor(jtoday))*86400);
		for(var ii = 24; ii > 0; ii--) {
		  if(jtoday > jqTime[ii-1]) {
			dgz = ii;
			break;
		  }
		  if(Math.floor(jtoday) == Math.floor(jqTime[ii-1])) {
			if( Math.ceil((jqTime[ii-1] - Math.floor(jqTime[ii-1]))*86400) <= jt2) {
				dgz = ii;
				break;
			}
		  }
		}
		
		//return jq0[dgz];
		return dgz;
	  }
	  
	  /**
	   * 四柱計算, 子初換日
	   */
	  
	 GetGZ(y,m,d,h,i,s,ms) 
	 {
		var jtoday = this.date_to_julian_day2(y,m,d) + this.date_to_julian_time(h,i,s);
		  
		var jqTime=new Array;
		//var y = this.Jtime(jtoday);
		this.GetPureJQsinceSpring2(y,0,0,0,jqTime);  // 計算當年節氣(以立春日為新一年)
		if(jtoday < jqTime[0]) {
		  //console.log(jtoday,jqTime[0]);
		  var jt1 = Math.ceil((jtoday - Math.floor(jtoday))*86400);
		  var jq1 = Math.ceil((jqTime[0] - Math.floor(jqTime[0]))*86400);
		  //console.log("jt1",jt1,"jq1",jq1);
		  if(Math.floor(jtoday) == Math.floor(jqTime[0]) && jt1 >= jq1) {
		  }else{
			y = y - 1;
			this.GetPureJQsinceSpring2(y,0,0,0,jqTime);  // 計算上一年節氣(以立春日為新一年)
			//console.log("計算上一年節氣(以立春日為新一年)");
		  }
		  
		}
		// 四柱回傳
		var tin = "甲乙丙丁戊己庚辛壬癸甲乙丙丁戊己庚辛壬癸甲乙";
		var di  = "子丑寅卯辰巳午未申酉戌亥";
		
		var rtn_gz = new Array;    
		// 計年柱
		var ygz = ((y + 4712 + 24) % 60 + 60) % 60;
		rtn_gz.push(tin[ygz % 10]);
		rtn_gz.push(di[ygz % 12]);
		// 計月柱
		var dgz = -1;
		/*
		for(var ii = 24; ii > 0; ii--) {
		  if(jtoday > jqTime[ii-1]) {
			dgz = ii;
			break;
		  }
		}
		*/
		var jt2 = Math.ceil((jtoday - Math.floor(jtoday))*86400);
		for(var ii = 24; ii > 0; ii--) {
		  if(jtoday > jqTime[ii-1]) {
			dgz = ii;
			break;
		  }
		  if(Math.floor(jtoday) == Math.floor(jqTime[ii-1])) {
			if( Math.ceil((jqTime[ii-1] - Math.floor(jqTime[ii-1]))*86400) <= jt2) {
				dgz = ii;
				break;
			}
		  }
		}
		if(dgz < 0) dgz = 1;if(dgz%2 == 0) dgz--;
		dgz = Math.floor(dgz / 2);if(dgz == 12) dgz = 11;
		rtn_gz.push(tin.substr(Math.floor((ygz%10)%5*2+2),12)[dgz]);  // 月干
		rtn_gz.push("寅卯辰巳午未申酉戌亥子丑".charAt(dgz));            // 月支
		// 計日柱
		var jda = jtoday + 0.5;
		var thes = ((jda - Math.floor(jda)) * 86400) + 3600;
		var dayjd = Math.floor(jda) + thes / 86400;
		dgz = (Math.floor(dayjd + 49) % 60 + 60) % 60;
		// if(h >= 23) dgz--; // 子正換日處理, 測試用
		rtn_gz.push(tin[dgz % 10]); // 日干
		rtn_gz.push(di[dgz % 12]);  // 日支
		// 計時柱
		var dh = dayjd * 12;
		//var hgz = (Math.floor(dh + 48) % 60 + 60) % 60;console.log('hgz',(Math.floor(dh + 48) % 60));
		var hgz = (Math.floor(dh + 48) % 60 + 60) % 60;
		//console.log(h,Math.ceil(h/2)%12,di[(h/2)%12],di[hgz % 12]);
		//if((h%2) == 1 && i == 0) hgz += 1;
		if((Math.ceil(h/2)%12) != (hgz%12)) hgz++;
		rtn_gz.push(tin[hgz % 10]); // 時干
		rtn_gz.push(di[hgz % 12]);  // 時支
		
		// 計分柱
		var minhz = i; if(h%2 == 0) minhz += 60; minhz = Math.floor(minhz * 60 / 600);
		var gan_idx = [0,2,4,6,8,0,2,4,6,8];
		rtn_gz.push(tin.substr(gan_idx[tin.indexOf(rtn_gz[6])],12).charAt(minhz)); // 分干
		rtn_gz.push(di[minhz % 12]);  // 分支
		// 計秒柱
		var minhz = i; if(h%2 == 0) minhz += 60; minhz = Math.floor((minhz * 60 % 600+s) / 50);
		var gan_idx = [0,2,4,6,8,0,2,4,6,8];
		rtn_gz.push(tin.substr(gan_idx[tin.indexOf(rtn_gz[8])],12).charAt(minhz)); // 秒干
		rtn_gz.push(di[minhz % 12]);  // 秒支
		
		
		/**
		 * 如有毫秒輸入, 計算毫秒柱, 無極, 混元, 究竟
		 */
		if(1) {
		  var minhz = i; if(h%2 == 0) minhz += 60; minhz = minhz * 60 + s; minhz = minhz * 1000 + ms;
		  var minhz1 = Math.floor(minhz/600000); //分柱
		  var minhz2 = Math.floor(minhz%600000/50000); //秒柱
		  var minhz3 = Math.floor(minhz%50000/(50000/12.0)); //毫秒柱
		  var minhz4 = Math.floor(minhz%(50000/12.0)/(50000/12.0/12.0)); //無極柱
		  var minhz5 = Math.floor(minhz%(50000/12.0/12.0)/(50000/12.0/12.0/12.0)); //究竟柱
		  var minhz6 = Math.floor(minhz%(50000/12.0/12.0/12.0)/(50000/12.0/12.0/12.0/12.0)); //破限柱
		  //
		  //console.log(minhz1,minhz2,minhz3,minhz4,minhz5,minhz6);
		  var gan_idx = [0,2,4,6,8,0,2,4,6,8];
		  rtn_gz.push(tin.substr(gan_idx[tin.indexOf(rtn_gz[10])],12).charAt(minhz3)); // 毫秒柱
		  rtn_gz.push(di[minhz3 % 12]);  // 
		  rtn_gz.push(tin.substr(gan_idx[tin.indexOf(rtn_gz[12])],12).charAt(minhz4)); // 混元柱
		  rtn_gz.push(di[minhz4 % 12]);  // 
		  rtn_gz.push(tin.substr(gan_idx[tin.indexOf(rtn_gz[14])],12).charAt(minhz5)); // 無極柱
		  rtn_gz.push(di[minhz5 % 12]);  // 
		  rtn_gz.push(tin.substr(gan_idx[tin.indexOf(rtn_gz[16])],12).charAt(minhz6)); // 究竟柱
		  rtn_gz.push(di[minhz6 % 12]);  // 
		};
		return rtn_gz.join("");
	  };
	  /**
	   * 計算刻分
	   */
	calc_hak_fun(gz,h,i) 
	{
		var tin = "甲乙丙丁戊己庚辛壬癸甲乙丙丁戊己庚辛壬癸甲乙";
		var di  = "子丑寅卯辰巳午未申酉戌亥子丑寅卯辰巳午未申酉戌亥";
		var g = tin.indexOf(gz[0]);
		var z = di.indexOf(gz[1]);
		var c = di[(z - g + 12)%12];
		var c2 = "子戌申午辰寅".indexOf(c) * 10 + g;
		//var c3 = c2 * 8 + (h%2 == 1 ? 4:0) + (Math.floor(i/15);
		var c3 = c2 * 8 + (h%2 == 0 ? 4:0) + Math.floor(i/15);
	   // console.log(gz, c, c2, c3,c3%10, c3%12, tin[c3%10]+di[c3%12]);
		return tin[c3%10]+di[c3%12];
	  }
	GetBazi(y,m,d,h,i,s,ms) {
		if(!ms) ms = 0;
		return this.GetGZ(y,m,d,h,i,s,ms);
	};
	GetBazi2(jtoday) {
	var d = this.Jtime2(false,jtoday);
	return this.GetGZ(d.getFullYear(),
		d.getMonth()+1,
		d.getDate(),
		d.getHours(),
		d.getMinutes(),
		d.getSeconds(),
		d.getMilliseconds()
		);
	};
	CalCurrentJiqi(y,m,d,h,i,s) {
	return this.jq0[this._CalCurrentJiqi(y,m,d,h,i,s)];
	};
	CalCurrentJiqiIdx(y,m,d,h,i,s) {
	return this._CalCurrentJiqi(y,m,d,h,i,s);
	};
	GetJulianToday(y,m,d,h,i,s) {
	return this.date_to_julian_day2(y,m,d) + this.date_to_julian_time(h,i,s);
	};
	JTime(jtoday) {
	return this.Jtime(false,jtoday);
	};
	JTime2(jtoday) {
	return this.Jtime2(false,jtoday);
	};
	GetJiqiInfo = function(y,m,d,h,i,s,ms) {
		var _out = new Array();
		_out.jd = this.date_to_julian_day2(y,m,d);
		_out.julian = _out.jd + this.date_to_julian_time(h,i,s);
		_out.jiqi = this.jq0.slice();
		_out.currentJiqiIdx = this.CalCurrentJiqiIdx(y,m,d,h,i,s);
		_out.bazi = this.GetGZ(y,m,d,h,i,s,ms);
		_out.bazi_hak_fun = this.calc_hak_fun(_out.bazi.substr(6,2), h, i);
		_out.wholeYear = new Array();
		_out.year=y;
		this.CalJiqiByYear(y,m,d,h,i,s,_out.wholeYear);
		return _out;
	};
	Solar2Lunar(yea,mx,dx)
	{
		//陽曆的各變數
		var yea, zr=new Array, op=false;
		//陰曆的各變數
		var mx, dx;
		var sjd=new Array, mc=new Array, lsjd, mis;
		//取得輸入之陽曆年月日值
		//var yea=in1.value-0;	//取得年之輸入值
		//var mx=in2.value-0;	//取得月之輸入值
		//var dx=in3.value-0;	//取得日之輸入值
		var flag=0;
		var out="";
		//限定範圍
		if(yea<-7000 || yea>7000){
		  //alert("超出計算能力");
		  return false;
		}
		if(yea<-1000 || yea>3000){
		  //alert("适用于西元-1000年至西元3000年，超出此范??差?大");
		  return false;
		}
	
		//驗證輸入日期的正確性,若不正確則跳離
		if(this.ValidDate(op, yea, mx, dx) == false){ return false; }
		this.GetZQandSMandLunarMonthCode(op, yea, zr, sjd, mc);
	
		var jdx = this.Jdays(op, yea, mx, dx, 12);    //求出指定年月日之JD值
		if(Math.floor(jdx) < Math.floor(sjd[0] + 0.5)){ flag = 1; this.GetZQandSMandLunarMonthCode(op, yea-1,zr,sjd,mc); }
		for(var i=0;i<=14;i++){
			//下面的指令中加0.5是為了改為從0時算起而不從正午算起
			if(Math.floor(jdx) >= Math.floor(sjd[i]+0.5) && Math.floor(jdx) < Math.floor(sjd[i+1]+0.5)){ var mi=i; break; } 
		}
		var dz=Math.floor(jdx)-Math.floor(sjd[mi]+0.5)+1;       //此處加1是因為每月初一從1開始而非從0開始
		if(mc[mi]<2 || flag==1){ var yi=yea-1 }else{ var yi=yea; } //因mc(mi)=0對應到前一年陰曆11月，mc(mi)=1對應到前一年陰曆12月
		  //mc(mi)=2對應到本年1月，依此類推
		if((mc[mi]-Math.floor(mc[mi]))*2+1==1){ var ry=""; }else{ var ry="閏"; }
		mis=(Math.floor(mc[mi]+10)%12)+1;        //對應到月份
		out+="陰曆 "+yi+"年 "+ry+mis+"月 "+dz+"日";
		return out;
	  }
	  ValidDate(op,yy,mm,dd)
	  {//驗證日期是否有效
		var vd=true;
		if(mm<=0 || mm>12){
		  //alert("月份超出範圍");
		  vd=false;
		}
		else{
		  var ndf1=-(yy%4==0);	//可被四整除
		  var ndf2=((yy%400==0)-(yy%100==0)) && (((yy>1582) && (!op)) || op);
		  var ndf=ndf1+ndf2;
		  var dom=30+((Math.abs(mm-7.5)+0.5)%2)-(mm==2)*(2+ndf);
		  if(dd<=0 || dd>dom){
			if(ndf==0 && mm==2 && dd==29){
			  //alert("此年無閏月");
			}
			else{
			  //alert("日期超出範圍");
			}
			vd=false;
		  }
		}
		if((yy==1582 && mm==10 && dd>=5 &&dd<15) && !op){
		  //alert("此日期不存在");
		  vd=false;
		}
		return vd;
	  }
	  //副程式功能：以比較日期法求算冬月及其餘各月名稱代碼，包含閏月，冬月為0，臘月為1，正月為2，餘類推。閏月多加0.5
  GetZQandSMandLunarMonthCode(op, yy, jdzq, jdnm, mc)
  {
    var yz;
    this.GetZQsinceWinterSolstice(yy, jdzq);        //取得以前一年冬至為起點之連續17個中氣
    this.GetSMsinceWinterSolstice(op, yy, jdzq[0], jdnm);	//求出以含冬至中氣為陰曆11月(冬月)開始的連續16個朔望月的新月點
    yz = 0;      //設定旗標，0表示未遇到閏月，1表示已遇到閏月
    if( Math.floor(jdzq[12] + 0.5) >= Math.floor(jdnm[13] + 0.5)){      //若第13個中氣jdzq(12)大於或等於第14個新月jdnm(13)
      for(i=1;i<=14;i++){ //表示此兩個冬至之間的11個中氣要放到12個朔望月中，
                          //至少有一個朔望月不含中氣，第一個不含中氣的月即為閏月
                          //若陰曆臘月起始日大於冬至中氣日，且陰曆正月起始日小於或等於大寒中氣日，則此月為閏月，其餘同理
        if(Math.floor((jdnm[i] + 0.5) > Math.floor(jdzq[i - 1 - yz] + 0.5) && Math.floor(jdnm[i + 1] + 0.5) <= Math.floor(jdzq[i - yz] + 0.5))){
          mc[i] = i - 0.5;
          yz = 1;      //標示遇到閏月
        }else{
          mc[i] = i - yz;	//遇到閏月開始，每個月號要減1
        }
      }
    }else{  //否則表示兩個連續冬至之間只有11個整月，故無閏月
      for(var i=0;i<=12;i++){     //直接賦予這12個月月代碼
        mc[i] = i;
      }
      for(var i=13;i<=14;i++){  //處理次一置月年的11月與12月，亦有可能含閏月
                            //若次一陰曆臘月起始日大於附近的冬至中氣日，且陰曆正月起始日小於或等於大寒中氣日，則此月為閏月，次一正月同理。
        if(Math.floor((jdnm[i] + 0.5) > Math.floor(jdzq[i - 1 - yz] + 0.5) && Math.floor(jdnm[i + 1] + 0.5) <= Math.floor(jdzq[i - yz] + 0.5))){
          mc[i] = i - 0.5;
          yz = 1;      //標示遇到閏月
        }else{
          mc[i] = i - yz;  //遇到閏月開始，每個月號要減1
        }
      }
    }
  }
}

var e = new qimenMudule()
module.exports=e;  