

import React, {Component} from 'react';


var circle = 360; // 周
var epoch = 60; // 纪
var station = 72; // 局	
var yuan = 72; // 元

class taiyiModule extends React.Component {

  constructor(porp) {
        super(porp);
  }

  
  // 由干支序取干支
  GetGanZhi(order)
  {
	  var gan = new Array("癸","甲","乙","丙","丁","戊","己","庚","辛","壬");
	  var zhi = new Array("亥","子","丑","寅","卯","辰","巳","午","未","申","酉","戌");
	  return gan[order%10] + zhi[order%12];
  }
  
  // 由地支取地支序
  getZhiOrder(zhi)
  {
	  var zhiNameOrder = new Array("","子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥");
	  
	  for (var i = 1; i < zhiNameOrder.length; i++)
	  {			
		  if (zhiNameOrder[i] == zhi)
			  return i;
	  }
  }
  
  // 由天干取天干序
  getGanOrder(gan)
  {
	  var ganNameOrder = new Array("","甲","乙","丙","丁","戊","己","庚","辛","壬","癸");
	  
	  for (var i = 1; i < ganNameOrder.length; i++)
	  {			
		  if (ganNameOrder[i] == gan)
			  return i;
	  }
  }
  
  // 取得干支所属旬空
  getNothing(ganZhi)
  {
	  var gan = ganZhi.substr(0,1);
	  var zhi = ganZhi.substr(1,1);
	  
	  var ganOrder = this.getGanOrder(gan);
	  var zhiOrder = this.getZhiOrder(zhi);
	  
	  var days10 = ["甲子","甲戌","甲申","甲午","甲辰","甲寅"];
	  var nothing = ["戌亥","申酉","午未","辰巳","寅卯","子丑"];
	  
	  var subtract = zhiOrder - ganOrder;
	  if(subtract < 0 )
		  subtract = zhiOrder + 12 - ganOrder;
	  
	  if (subtract == 0)
		  return nothing[0];
	  else if (subtract == 10)
		  return nothing[1];
	  else if (subtract == 8)
		  return nothing[2];	
	  else if (subtract == 6)
		  return nothing[3];
	  else if (subtract == 4)
		  return nothing[4];
	  else if (subtract == 2)
		  return nothing[5];	
	  else
		  return "无法处理的干支";			
  }
  
  // 三才数计算
  // 10 = 天数﹔5 = 地数﹔1 = 人数 
  part3(num)
  {		
	  if (num < 5)
		  return "无天地数";
	  if (num < 9 )
		  return "无天数";
	  if (num % 10 == 0 )
		  return "无人数";			
	  if ( num % 10 < 5)
		  return "无地数";
	  return "三才数";
  }
  
  // 长短数计算
  shortLong(num)
  {
	  if (num >= 16)
		  return "长数";
	  if (num <= 11)	
		  return "短数";
	  return "中转数";	
  }


  // 取得冬至日期
  GetWinterSolstice(year)
  {		
	  year -= 1882;
	  if (year < 0 || year > 149)
		  return 22; // 若冬至日不在时间范围内使用预定值(22)
	  
	  // 由西元1882-2031的冬至日
	  var winterSolstice = [
	  22,22,21,21,22,22,21,21,22, // 1882-1890
	  22,21,21,22,22,21,21,22,22,22, // 1891-1900
	  23,23,22,22,23,23,22,22,22,23, // 1901-1910
	  23,22,22,23,23,22,22,22,23,22, // 1911-1920
	  22,22,23,22,22,22,23,22,22,22, // 1921-1930
	  23,22,22,22,23,22,22,22,23,22, // 1931-1940
	  22,22,23,22,22,22,23,22,22,22, // 1941-1950
	  23,22,22,22,22,22,22,22,22,22, // 1951-1960
	  22,22,22,22,22,22,22,22,22,22, // 1961-1970
	  22,22,22,22,22,22,22,22,22,22, // 1971-1980
	  22,22,22,22,22,22,22,21,22,22, // 1981-1990
	  22,21,22,22,22,21,22,22,22,21, // 1991-2000
	  22,22,22,21,22,22,22,21,22,22, // 2001-2010
	  22,21,22,22,22,21,22,22,22,21, // 2011-2020
	  22,22,22,21,22,22,22,21,21,22,22  //2021-2031
	  ];
	  return winterSolstice[year];
  }
  
  // 取得夏至日期
  GetSummerSolstice(year)
  {		
	  year -= 1882;
	  if (year < 0 || year > 149)
		  return 22; // 若夏至日不在时间范围内使用预定值(22)
	  
	  // 由西元1882-2031的夏至日
	  var summerSolstice = [
	  21,22,21,21,21,22,21,21,21, // 1882-1890
	  22,21,21,21,22,21,21,21,22,22, // 1891-1900
	  22,22,22,22,22,22,22,22,22,22, // 1901-1910
	  22,22,22,22,22,22,22,22,22,22, // 1911-1920
	  22,22,22,22,22,22,22,22,22,22, // 1921-1930
	  22,21,22,22,22,21,22,22,22,21, // 1931-1940
	  22,22,22,21,22,22,22,21,21,22, // 1941-1950
	  22,21,22,22,22,21,22,22,22,21, // 1951-1960
	  21,22,22,21,21,22,22,21,21,22, // 1961-1970
	  22,21,21,22,22,21,21,22,22,21, // 1971-1980
	  21,22,22,21,21,22,22,21,21,22, // 1981-1990
	  22,21,21,21,22,21,21,21,22,21, // 1991-2000
	  21,21,22,21,21,21,22,21,21,21, // 2001-2010
	  22,21,21,21,22,21,21,21,22,21, // 2011-2020
	  21,21,21,21,21,21,21,21,21,21,21 // 2021-2031
	  ];
	  return  summerSolstice[year];
  }
  
  // 使用阴遁或阳遁
  GetHideType(year, month, date)
  {
	  if (month > 6 && month < 12) return "阴遁";
	  if (month < 6) return "阳遁";
	  
	  if (month == 12)
	  {
		  if(this.GetWinterSolstice(year) >= date)
			  return "阳遁";
		  else
			  return "阴遁";	
	  }
	  
	  if (month == 6)
	  {
		  if (this.GetSummerSolstice(year) >= date)
			  return "阴遁";
		  else
			  return "阳遁";
	  }
  }
  
  // 取得第几元
  getYuan(accNum)
  {
	  var yuanNum = Math.floor( accNum %360 / yuan);
	  // alert(yuanNum);
	  var yuan5 = ["甲","丙","戊","庚","壬"];
	  return yuan5[yuanNum] + "子元";
  }
  
  // 取得第几纪
  getEpoch(accNum)
  {
	  var epochNum = Math.floor( accNum %360 / epoch);
	  var epoch6 = ["一","二","三","四","五","六"];
	  return "第" + epoch6[epochNum] + "纪";
  }
  
  // 求此西元年是否为闰年, 返回 0 为平年, 1 为闰年
  isLeap( year )
   {
	 if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
	   return 1;	   
	 else
	   return 0;
   }

  // 求算与冬至日相距天数
  GetDistance(year, month, date)
  {	
	  // 平年与闰年每月之累积日数
	   var SolarDays = [
	  0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365, 396,
	  0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366, 397 ];	
	  
	  var leap = this.isLeap(year);
	  var sm = parseInt(month) - 1;
	  // 本年累积日 + 前一年冬至后累积日
	  var accDate = SolarDays[ leap*14 + sm ] + date + (31 - this.GetWinterSolstice(year - 1));

	  return accDate;
  }	
  
  // 计算四计入纪元局数
  main_FourCalc(year, month, date, hour)
  {	
	  var title = new Array()
	  // 年份检查
	  if (isNaN(year))
	  {
		   alert("请输入西元年份");
		   return;
	   }
			  
	  // 月份对日期的检查
	  var days = [0,31,29,31,30,31,30,31,31,30,31,30,31];
	  if (month == 2)
		  days[2] += this.isLeap(year);
	  if( date > days[month])
	  {
		  alert(month + "月并无" + date + "日。");
		  return;
	  }
	  
	   var nYear = parseInt(year);
	   var nMonth = parseInt(month);
	   var nDate = parseInt(date);
	   var nHour = parseInt(hour);
	   
	   if (nYear && nMonth != -1 && nDate != -1 && nHour != -1)
	   		this.HourCalc(nYear, nMonth, nDate, nHour,title);		 
	   else if (nYear && nMonth != -1 && nDate != -1)
	   		this.DateCalc(nYear, nMonth, nDate,title);
	   else if  (nYear && nMonth != -1)
	   		this.MonthCalc(nYear, nMonth,title);
	   else if  (nYear)
	   		this.YearCalc(nYear,title);
	   else
		   alert("请输入资料，以计算四计。");
		
	return title;
  }

  // 计算年计入纪元局数	
  YearCalc(year,title)
  {
	  var accYear  = 10153917 +  year; // 太乙积年10153917		
	  var inCircle = accYear %circle;
	  inCircle = (inCircle == 0) ? circle : inCircle;		
	  var inEpoch = accYear % epoch;
	  var ganZhi = this.GetGanZhi(inEpoch);
	  var inStation = accYear % station;		
	  inStation = (inStation == 0) ? station : inStation;
	  var hideType = "阳遁";
			  
	  title.push("西元：" + year + "年");
	  title.push("干支：" + ganZhi + "（" +  this.getNothing(ganZhi)+ "空）");
	  //document.writeln("<p>旬空：" + getNothing(ganZhi) + "</p>");
	  title.push("入纪元局数：" + this.getYuan(accYear) +  this.getEpoch(accYear) + "　" + hideType + inStation + "局");
	  
	  this.dispose(accYear, ganZhi.substr(1,1), hideType,title);
  }
  
  // 计算月计入纪元局数
  MonthCalc(year, month,title)
  {	
	  var accYear  = 10153917 +  year;
	  // 月积 + 预测月与天正月之前一个月之差
	  var accMonth = accYear * 12 - 10 + month;
	  
	  var inCircle = accMonth % circle;
	  var inEpoch = accMonth % epoch;
	  var ganZhi =  this.GetGanZhi(inEpoch);
	  var inStation = accMonth  % station;
	  inStation = (inStation == 0) ? station : inStation;		
	  var hideType = "阳遁";

	  title.push("西元：" + year + "年" + month + "月");
	  title.push("干支：" + ganZhi + "（" +  this.getNothing(ganZhi)+ "空）");
	  title.push("入纪元局数：" +  this.getYuan(accMonth) +  this.getEpoch(accMonth) + "　" + hideType + inStation + "局");
	  
	  this.dispose(accMonth, ganZhi.substr(1,1), hideType,title);
  }

  // 计算日计入纪元局数
  DateCalc(year, month, date,title)
  {		
	  var accepochYear  = 29277 +  year - 1; //历元积年 甲子岁积年 29277		
	  var accDate = Math.round( accepochYear * 365.2425 ) + GetDistance(year, month, date) + 1;		
	  
	  // alert (GetDistance(year, month, date));
	  var inCircle = accDate % circle;
	  var inEpoch =  accDate % epoch;
	  var ganZhi = this.GetGanZhi(inEpoch);		
	  var inStation = accDate % station;
	  inStation = (inStation == 0) ? station : inStation;
	  var hideType = "阳遁";

	  title.push("西元：" + year + "年" + month + "月" + date + "日");
	  title.push("干支：" + ganZhi + "（" + this.getNothing(ganZhi)+ "空）");
	  title.push("入纪元局数：" + this.getYuan(accDate) + this.getEpoch(accDate) + "　" + hideType + inStation + "局");
	  
	  this.dispose(accDate, ganZhi.substr(1,1), hideType,title);
  }
  
  // 计算时计入纪元局数
  HourCalc(year, month, date, hour,title)
  {		
	  var accepochYear  = 29277 +  year - 1; //历元积年 甲子岁积年 29277		
	  var accDate = Math.round( accepochYear * 365.2425 ) + this.GetDistance(year, month, date);
	  var accHour = accDate * 12 + Math.ceil(hour / 2) + 1;
	  
	  var inCircle = accHour % circle;
	  var inEpoch =  accHour % epoch;
	  var ganZhi = this.GetGanZhi(inEpoch);
	  var inStation = accHour  % station;
	  inStation = (inStation == 0) ? station : inStation;
	  var hideType = this.GetHideType(year, month, date);
	  
	  title.push("西元：" + year + "年" + month + "月" + date + "日" + hour + "时");
	  title.push("干支：" + ganZhi + "（" + this.getNothing(ganZhi)+ "空)");
	  title.push("入纪元局数：" + this.getYuan(accHour) + this.getEpoch(accHour) + "　" + hideType + inStation + "局");
	  
	  this.dispose(accHour, ganZhi.substr(1,1), hideType,title);
  }

  // 运算各星神
  dispose(accNum, taiSui, dun,title)
  {
	  var taiyi =  this.taiYiLoc(accNum);
	  //document.writeln("太乙︰" + taiyi + "<br>");
	  
	  var wenchang = this.wenChangLoc(accNum, dun);
	  //document.writeln("文昌︰" + wenchang + "<br>");
	  
	  var maincalc = this.calc3(taiyi[0], wenchang);
	  title.push("主算：" + maincalc + "（"+ this.shortLong(maincalc) +"、" + this.part3(maincalc) +"）　");
	  //document.writeln("主大将︰" + getDaJiang(maincalc) + "<br>");
	  //document.writeln("主参将︰" + getCanJiang(getDaJiang(maincalc)) + "<br>");
			  
	  var jishen = this.getJiShen(taiSui, dun);
	  //document.writeln("计神：" +jishen + "<br>");
	  
	  var shiji = this.getShiJi(jishen, wenchang);
	  //document.writeln("始击︰" + shiji + "<br>");
	  var guestcalc = this.calc3(taiyi[0], shiji);
	  title.push("客算：" + guestcalc + "（"+ this.shortLong(guestcalc) +"、"  + this.part3(guestcalc) + "）　");
	  //document.writeln("客大将︰" + getDaJiang(guestcalc) + "<br>");
	  //document.writeln("客参将︰" + getCanJiang(getDaJiang(guestcalc)) + "<br>");		
	  
	  var heshen = this.getHeShen(taiSui, 1);
	  //document.writeln("合神︰" + heshen + "<br>");
	  var dingmu = this.getDingMu(taiSui, heshen, wenchang);
	  //document.writeln("定目︰" + dingmu + "<br>");
	  var decidecalc = this.calc3(taiyi[0], dingmu);
	  title.push("定算：" + decidecalc + "（"+ this.shortLong(decidecalc) +"、"  + this.part3(decidecalc) + "");
	  //document.writeln("定大将︰" + getDaJiang(decidecalc) + "<br>");
	  //document.writeln("定参将︰" + getCanJiang(getDaJiang(decidecalc)) + "<br>");
	  
	  // document.writeln("君基︰" + getJunJi(accNum) + "　");
	  // document.writeln("臣基︰" + getChenJi(accNum) + "　");
	  // document.writeln("民基︰" +getMinJi(accNum) + "　");
	  // document.writeln("五福︰" +getWuFu(accNum) + "　");
	  // document.writeln("大游︰" +getDaYou(accNum) + "　");
	  // document.writeln("小游︰" +getXiaoYu(accNum) + "　");
	  // document.writeln("四神︰" +getSiShen(accNum) + "　");
	  // document.writeln("天乙︰" +getTianYi(accNum) + "　");
	  // document.writeln("地乙︰" +getDiYi(accNum) + "　");
	  // document.writeln("直符︰" +getZhiFu(accNum) + "　");
	  // document.writeln("飞符︰" +getFeiFu(accNum) + "<p>");
	  
	  // 阵列对应—0子1丑2艮3寅4卯5辰6巽7巳8午9未10坤11申12酉13戌14干15亥16中
	  var location = new Array([],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]);
	  
	  location[this.getLocNum(taiSui)].push("太岁");
	  location[this.getLocNum(taiyi[0])].push("太乙");		
	  location[this.getLocNum(wenchang)].push("文昌");
	  location[this.getLocNum(this.getDaJiang(maincalc))].push("主大");
	  location[this.getLocNum(this.getCanJiang(this.getDaJiang(maincalc)))].push("主参");
	  location[this.getLocNum(jishen)].push("计神");
	  location[this.getLocNum(shiji)].push("始击");
	  location[this.getLocNum(this.getDaJiang(guestcalc))].push("客大");
	  location[this.getLocNum(this.getCanJiang(this.getDaJiang(guestcalc)))].push("客参");
	  location[this.getLocNum(heshen)].push("合神");
	  location[this.getLocNum(dingmu)].push("定目");
	  location[this.getLocNum(this.getDaJiang(decidecalc))].push("定大");
	  location[this.getLocNum(this.getCanJiang(this.getDaJiang(decidecalc)))].push("定参");
	  location[this.getLocNum(this.getJunJi(accNum)[0])].push("君基");
	  location[this.getLocNum(this.getChenJi(accNum)[0])].push("臣基");
	  location[this.getLocNum(this.getMinJi(accNum))].push("民基");
	  location[this.getLocNum(this.getWuFu(accNum)[0])].push("五福");
	  location[this.getLocNum(this.getDaYou(accNum)[0])].push("大游");
	  location[this.getLocNum(this.getXiaoYu(accNum)[0])].push("小游");
	  location[this.getLocNum(this.getSiShen(accNum)[0])].push("四神");
	  location[this.getLocNum(this.getTianYi(accNum)[0])].push("天乙");
	  location[this.getLocNum(this.getDiYi(accNum)[0])].push("地乙");
	  location[this.getLocNum(this.getZhiFu(accNum)[0])].push("直符");
	  
	  
	  this.output(location);
	  title.push(location)
  }
  
  // 取得位置编号
  getLocNum(name)
  {
	  var locOrder = new Array("子","丑","艮","寅","卯","辰","巽","巳","午","未","坤","申","酉","戌","干","亥","中");
	  
	  for (var i = 0; i < locOrder.length; i++)
	  {
		  if (name == locOrder[i])
			  return i;
	  }
  }
  
  
  // 式盘输出
  output(loc)
  {
	  console.log(loc)
	  var state = "";
	  for (var i = 0; i < loc.length; i++)
	  {	
		  var serial;
		  if (loc[i].length == 0)
			  serial = "";
		  else
			  serial = loc[i][0];
		   
		  for (var j = 1; j < 8; j++) // 每个<td></td>放8单位
		  {
			  if (j < loc[i].length)
			  {
				  if (j % 2 == 0)
					  serial +=  loc[i][j];
				  else
					  serial +=  state+ loc[i][j];
			  }
			  else
			  {
				  if (j % 2 == 0)
					  serial += "";
				  else	
					  serial += state;
			  }
		  }
		  loc[i][0] = serial;
	  }		
	  /*
	  document.writeln("<meta http-equiv='Content-Type' content='text/html; charset=gb2312'>");

	  document.write('<body><style type="text/css"> \
	  .left-top {border-bottom:none;border-right:none;font-size:x-small} \
	  .right-top {border-bottom:none; text-align=right} \
	  .left-bottom {border-right:none} \
	  .right-bottom {align=right;font-size:x-small} \
	  </style> \
	  <table width=500 border=1 cellpadding=0 cellspacing=0 bordercolordark=#ffffff bordercolorlight=#606060> \
	  <tr  valign=top> \
	  <td width=20% class=left-top>' + loc[6][0] + '</td><td width=16 class=right-top>&nbsp;</td> \
	  <td width=20%  class=left-top>' + loc[7][0] + '</td><td width=16 class=right-top>&nbsp;</td> \
	  <td width=20%  class=left-top>' + loc[8][0] + '</td><td width=16 class=right-top>&nbsp;</td> \
	  <td width=20%  class=left-top>' + loc[9][0] + '</td><td width=16 class=right-top>&nbsp;</td> \
	  <td width=20%  class=left-top>' + loc[10][0] + '</td><td width=16 class=right-top>&nbsp;</td> \
	  </tr> \
	  <tr> \
	  <td class=left-bottom>&nbsp;</td><td class=right-bottom>巽</td> \
	  <td class=left-bottom>&nbsp;</td><td class=right-bottom>巳</td> \
	  <td class=left-bottom>&nbsp;</td><td class=right-bottom>午</td> \
	  <td class=left-bottom>&nbsp;</td><td class=right-bottom>未</td> \
	  <td class=left-bottom>&nbsp;</td><td class=right-bottom>坤</td> \
	  </tr> \
	  <tr  valign=top> \
	  <td class=left-top>' + loc[5][0] + '</td><td width=20 class=right-top>&nbsp;</td> \
	  <td class=left-top>&nbsp;</td><td width=20 class=right-top>&nbsp;</td> \
	  <td class=left-top>&nbsp;</td><td width=20 class=right-top>&nbsp;</td> \
	  <td class=left-top>&nbsp;</td><td width=20 class=right-top>&nbsp;</td> \
	  <td class=left-top>' + loc[11][0] + '</td><td width=20 class=right-top>&nbsp;</td> \
	  </tr> \
	  <tr> \
	  <td class=left-bottom>&nbsp;</td><td class=right-bottom>辰</td> \
	  <td class=left-bottom>&nbsp;</td><td class=right-bottom>九</td> \
	  <td class=left-bottom>&nbsp;</td><td class=right-bottom>二</td> \
	  <td class=left-bottom>&nbsp;</td><td class=right-bottom>七</td> \
	  <td class=left-bottom>&nbsp;</td><td class=right-bottom>申</td> \
	  </tr> \
	  <tr valign=top> \
	  <td class=left-top>' + loc[4][0] + '</td><td width=20 class=right-top>&nbsp;</td> \
	  <td class=left-top>&nbsp;</td><td width=20 class=right-top>&nbsp;</td> \
	  <td class=left-top>' + loc[16][0] + '</td><td width=20 class=right-top>&nbsp;</td> \
	  <td class=left-top>&nbsp;</td><td width=20 class=right-top>&nbsp;</td> \
	  <td class=left-top>' + loc[12][0] + '</td><td width=20 class=right-top>&nbsp;</td> \
	  </tr> \
	  <tr> \
	  <td class=left-bottom>&nbsp;</td><td class=right-bottom>卯</td> \
	  <td class=left-bottom>&nbsp;</td><td class=right-bottom>四</td> \
	  <td class=left-bottom>&nbsp;</td><td class=right-bottom>五</td> \
	  <td class=left-bottom>&nbsp;</td><td class=right-bottom>六</td> \
	  <td class=left-bottom>&nbsp;</td><td class=right-bottom>酉</td> \
	  </tr> \
	  <tr valign=top> \
	  <td class=left-top>' + loc[3][0] + '</td><td width=20 class=right-top>&nbsp;</td> \
	  <td class=left-top>&nbsp;</td><td width=20 class=right-top>&nbsp;</td> \
	  <td class=left-top>&nbsp;</td><td width=20 class=right-top>&nbsp;</td> \
	  <td class=left-top>&nbsp;</td><td width=20 class=right-top>&nbsp;</td> \
	  <td class=left-top>' + loc[13][0] + '</td><td width=20 class=right-top>&nbsp;</td> \
	  </tr> \
	  <tr> \
	  <td class=left-bottom>&nbsp;</td><td class=right-bottom>寅</td> \
	  <td class=left-bottom>&nbsp;</td><td class=right-bottom>三</td> \
	  <td class=left-bottom>&nbsp;</td><td class=right-bottom>八</td> \
	  <td class=left-bottom>&nbsp;</td><td class=right-bottom>一</td> \
	  <td class=left-bottom>&nbsp;</td><td class=right-bottom>戌</td> \
	  </tr> \
	  <tr valign=top> \
	  <td class=left-top>' + loc[2][0] + '</td><td width=20 class=right-top>&nbsp;</td> \
	  <td class=left-top>' + loc[1][0] + '</td><td width=20 class=right-top>&nbsp;</td> \
	  <td class=left-top>' + loc[0][0] + '</td><td width=20 class=right-top>&nbsp;</td> \
	  <td class=left-top>' + loc[15][0] + '</td><td width=20 class=right-top>&nbsp;</td> \
	  <td class=left-top>' + loc[14][0] + '</td><td width=20 class=right-top>&nbsp;</td> \
	  </tr> \
	  <tr> \
	  <td class=left-bottom>&nbsp;</td><td class=right-bottom>艮</td> \
	  <td class=left-bottom>&nbsp;</td><td class=right-bottom>丑</td> \
	  <td class=left-bottom>&nbsp;</td><td class=right-bottom>子</td> \
	  <td class=left-bottom>&nbsp;</td><td class=right-bottom>亥</td> \
	  <td class=left-bottom>&nbsp;</td><td class=right-bottom>干</td> \
	  </tr> \
	  </table> \
	  <p><input type=button value=返回太乙神数在线排盘 onclick=window.location=\"http://www.sheup.com/taiyishenshu.php\" style=cursor:hand></p>');
	    */
  }

  
  // 太乙运算规则
  taiYiLoc(accNum)
  {
	  var mansion8 = new Array("干","午","艮","卯","酉","坤","子","巽");		
	  var manage = new Array("理人","理天","理地");		
	  
	  // 阵列从0起算，故减1以合原义。
	  var mansion = Math.floor((accNum-1) % 24 / 3); // 所在宫数		
	  var inMansionYear = (accNum-1) % 24 % 3;   // 入宫年数
	  //alert(inMansionYear);
	  
	  return [mansion8[mansion], manage[inMansionYear]];
  }
  
  // 文昌计算规则
  wenChangLoc(accNum, dun)
  {	
	  var yangJu = new Array("申","酉","戌","干","干","亥","子","丑","艮","寅","卯","辰","巽","巳","午","未","坤","坤"); // 阳局
	  var yinJu = new Array("寅","卯","辰","巽","巳","午","未","坤","坤","申","酉","戌","干","干","亥","子","丑","艮"); // 阴局
  
	  var mansion =  (accNum-1) % 18; // 文昌所落宫		
			  
	  if (dun == "阳遁")
		  return [yangJu[mansion]];
	  else
		  return [yinJu[mansion]];
  }

  // 由九宫位取得九宫数
  getMansionNum(loc)
  {
	  var mansion = new Array("","干","午","艮","卯","中","酉","坤","子","巽");
	  
	  for (var i = 1; i <= 9 ; i++)
	  {
		  if (loc == mansion[i])
			  return i;
	  }
	  return -1;		
  }
  
  // 由九宫数取得九宫位
  getMansionName(num)
  {
	  var mansion = new Array("","干","午","艮","卯","中","酉","坤","子","巽");
	  return mansion[num];
  }
  
  // 是否是间辰，是则传回间辰下一宫名
  isMediZhi(loc)
  {		
	  var god16 = new Array("干","亥","子","丑","艮","寅","卯","辰","巽","巳","午","未","坤","申","酉","戌","干");
	  
	  for (var i = 0; i <= 16 ; i++)
	  {
		  if (i % 2 == 1 && loc == god16[i])
		  {
			  return [1,god16[++i]];
		  }			
	  }
	  return [0,""];
  }
  
  // 由目前宫取得下一宫，type = "飞"（有入中五宫） 或 "转"
  getNextMansion(mansion, type)
  {		
	  if (type == "飞")
	  {
		  var flyMansion = new Array("干","午","艮","卯","中","酉","坤","子","巽","干");
		  for (var i = 0; i < flyMansion.length; i++ )
		  {
			  if (flyMansion[i] == mansion)
				  return flyMansion[++i];
		  }
	  }
	  else if (type == "转")
	  {
		  var rotateMansion = new Array("干","子","艮","卯","巽","午","坤","酉","干");
		  for (var i = 0; i < rotateMansion.length; i++)
		  {
			  if (rotateMansion[i] == mansion)
				  return rotateMansion[++i];
		  }
	  }
	  else
	  {
		  return "参数错误";
	  }
  }
  
  // 由目前宫取得前一宫，type = "飞"（有入中五宫） 或 "转"
  getPrevMansion(mansion, type)
  {
	  if (type == "飞")
	  {
		  var flyMansion = new Array("干","午","艮","卯","中","酉","坤","子","巽","干");
		  for (var i = 1; i < flyMansion.length; i++ )
		  {
			  if (flyMansion[i] == mansion)				
				  return flyMansion[--i];				
		  }
	  }
	  else if (type == "转")
	  {
		  var rotateMansion = new Array("干","子","艮","卯","巽","午","坤","酉","干");
		  //alert("getPrevMansion::mansion = " + mansion);
		  for (var i = 1; i < rotateMansion.length; i++)
		  {
			  if (rotateMansion[i] == mansion)
				  return rotateMansion[--i];
		  }
	  }
	  else
	  {
		  return "参数错误";
	  }

  }

  // 主算、客算、定算计算规则	
  // WCZJDM - 文昌或始击或定目
  // 注解以文昌为例说明
  calc3(taiYi, WCZJDM)
  {		
	  var main;
	  var start; // 文昌所在宫，若文昌在间辰，则为间辰下一宫		
	  var end = taiYi;
	  
	  // alert (isMediZhi(WCZJDM))
	  if(this.isMediZhi(WCZJDM)[0])
	  {
		  main = 1;
		  start =  this.isMediZhi(WCZJDM)[1];
	  }
	  else
	  {
		  main = 0;
		  start = WCZJDM;
	  }	
	  
	   var end = this.getPrevMansion(taiYi,"转"); // 太乙前一宫
	   // alert ("end = " + end);
	  
	  // 若太乙文昌同宫，直接取宫数（如阳38局-2009）
	  if (taiYi == WCZJDM)
		  return this.getMansionNum(taiYi);
	  
	  // 若文昌间辰下一宫与太乙同宫，直接传回1（如阳37局-2008）
	  if (start == taiYi)
		  return main;		
	  
	  // alert ("start = " + start + "<br>" + "end = " + end);
	  for (main += this.getMansionNum(start); start != end; )
	  {
		  //alert("main = " + main);
		  // alert ("start = " + start + "<br>" + "end = " + end);
		  start = this.getNextMansion(start, "转");
		  main += this.getMansionNum(start);
	  }
	  return main;
  }

  // 主大将、客大将、定大将计算规则
  getDaJiang(calc)
  {
	  if (calc % 10 == 0)		
		  return this.getMansionName(calc % 9);		
	  else		
		  return this.getMansionName(calc % 10);
  }
  
  // 主参将、客参将、定参将计算规则
  getCanJiang(mansionName)
  {		
	  var num = this.getMansionNum(mansionName) * 3 % 10
	  return this.getMansionName(num);
  }
	  
  
  // 计神计算规则
  getJiShen(zhi, dun)
  {		
	  var yangJu = new Array("","寅","丑","子","亥","戌","酉","申","未","午","巳","辰","卯");
	  var yinJu = new Array("","申","未","午","巳","辰","卯","寅","丑","子","亥","戌","酉");		
	  
	  var zhiOrder = this.getZhiOrder(zhi);
	  //alert("zhiOrder = " + zhiOrder);
	  
	  if (dun == "阳遁")
		  return yangJu[zhiOrder];
	  else
		  return yinJu[zhiOrder];
  }

  // 取16神的下一个位置
  getNextLoc(loc)
  {
	  var god16 = new Array("干","亥","子","丑","艮","寅","卯","辰","巽","巳","午","未","坤","申","酉","戌","干");
	  
	  for (var i = 0;  i < 16 ; i++)
	  {
		  if (loc == god16[i])
			  return god16[++i];
	  }
  }

  // 取16神的前一个位置
  getPrevLoc(loc)
  {
	  var god16 = new Array("干","亥","子","丑","艮","寅","卯","辰","巽","巳","午","未","坤","申","酉","戌","干");
	  
	  for (var i = 1;  i <= 16 ; i++)
	  {
		  if (loc == god16[i])
			  return god16[--i];
	  }
  }

  // 计算16神间的距离
  getInterval(loc1, loc2)
  {
	  var god16 = new Array("干","亥","子","丑","艮","寅","卯","辰","巽","巳","午","未","坤","申","酉","戌");
	  
	  var i, j;
	  
	  for (i = 0; i < god16.length; i++)
	  {
		  if (god16[i] == loc1)
			  break;
	  }
	  
	  for (j = 0; j < god16.length; j++)
	  {
		  if (god16[j] == loc2)
			  break;
	  }
	  
	  if (i > j)
		  return 16-(i-j);
	  else
		  return j-i;	
  }

  // 始击计算规则	
  getShiJi(jishen, wenChang)
  {	
	  var distance = this.getInterval(jishen, "艮");
	  var loc = wenChang;
	  
	  for (var i = 0; i < distance; i++)
	  {
		  // alert ("loc = " + loc);
		  loc = this.getNextLoc(loc);
	  }
	  
	  return loc;
  }

  // 合神计算规则
  getHeShen(zhi)
  {
	  var zhiOrder =  this.getZhiOrder(zhi);
	  
	  var consort = new Array("","丑","子","亥","戌","酉","申","未","午","巳","辰","卯","寅");	
	  return consort[zhiOrder];
  }


  // 定目计算规则	
  getDingMu(zhi, heshen, wenChang)
  {	
	  var distance = this.getInterval(heshen, zhi);
	  var loc = wenChang;
	  
	  for (var i = 0; i < distance; i++)
	  {
		  // alert ("loc = " + loc);
		  loc = this.getNextLoc(loc);
	  }
	  
	  return loc;
  }

  // 君基计算规则（ok）
  // 自上元甲子岁入第一纪起算，加减年盈差1（（10153917 + 244） % 360）	
  getJunJi(accNum)
  {
	  var path = new Array("午","未","申","酉","戌","亥","子","丑","寅","卯","辰","巳");
	  var inMansion = Math.floor(( accNum -1)  % 360 /30); // 所走宫数
	  var inMansionYear = (accNum -1) % 30 + 1; // 入宫年数		
	  
	  //alert("君基所走宫数︰" + inMansion + "\n入宫年数︰" + inMansionYear);
	  
	  return [path[inMansion], inMansionYear];
  }
  
  // 臣基计算规则（ok）
  // 自上元甲子岁入第一纪起算，加减年盈差1（（10153917 + 244） % 360）
  getChenJi(accNum)
  {
	  var path = new Array("午","未","申","酉","戌","亥","子","丑","寅","卯","辰","巳");
	  var inMansion = Math.floor(( accNum -1)  % 36 /3); // 所走宫数
	  var inMansionYear = (accNum -1) % 3 + 1; // 入宫年数	
	  
	  //alert("臣基所走宫数︰" + inMansion + "\n入宫年数︰" + inMansionYear);
	  
	  return [path[inMansion], inMansionYear];
  }
  
  // 民基计算规则（ok）
  // 自上元甲子岁入第一纪起算，加减年盈差1（（10153917 + 244） % 360）
  getMinJi(accNum)
  {
	  var path = new Array("戌","亥","子","丑","寅","卯","辰","巳","午","未","申","酉");
	  var inMansion = Math.floor((accNum-1) % 360 % 12); // 所走宫数
	  
	  //alert("民基所走宫数︰" + inMansion);
	  return path[inMansion];
  }
  
  // 五福计算规则（ok）
  // 自上元甲子岁入第一纪起算，加减年盈差136（（10153917+244）% 225）
  getWuFu(accNum)
  {
	  var path = new Array("干","艮","巽","坤","中");
	  
	  var inMansion = Math.floor((accNum - 136) % 225 /45);
	  var inMansionYear = (accNum - 136) % 45 + 1;
		  
	  //alert("五福所走宫数︰" + inMansion + "\n入宫年数︰" + inMansionYear);
	  
	  return [path[inMansion], inMansionYear];
  }
  
  // 大游计算规则（ok）
  // 自上元甲子岁入第一纪起算，加减年盈差145（（10153917+244）% 288）
  getDaYou(accNum)
  {
	  var path = new Array("坤","酉","卯","艮","午","干","巽","子");
	  
	  var inMansion = Math.floor((accNum -145) % 288 /36);
	  var inMansionYear = (accNum -145) % 288 % 36 + 1;
		  
	  //alert("大游所走宫数︰" + inMansion + "\n入宫年数︰" + inMansionYear);
	  
	  return [path[inMansion], inMansionYear];
  }
  
  // 小游计算规则（ok）
  // 自上元甲子岁入第一纪起算，加减年盈差1（（10153917 + 244） % 360）
  getXiaoYu(accNum)
  {
	  var path = new Array("酉","坤","子","巽","干","午","艮","卯");
	  
	  var inMansion = Math.floor((accNum-1)  % 24 / 3);
	  var inMansionYear = (accNum-1) % 24 %3 + 1;		
	  
	  //alert("小游所走宫数︰" + inMansion + "\n入宫年数︰" + inMansionYear);
	  
	  return [path[inMansion], inMansionYear];		
  }
  
  // 四神计算规则（ok）
  // 自上元甲子岁入第一纪起算，加减年盈差1（（10153917 + 244） % 360）
  getSiShen(accNum)
  {		
	  var path = new Array("干","午","艮","卯","中","酉","坤","子","巽","午","坤","艮");
			  
	  var inMansion = Math.floor((accNum-1)  % 36 / 3);
	  var inMansionYear = (accNum-1) % 36 %3 + 1;		
	  
	  //alert("四神所走宫数︰" + inMansion + "\n入宫年数︰" + inMansionYear);
	  
	  return [path[inMansion], inMansionYear];
  }
  
  // 天乙计算规则（ok）
  // 自上元甲子岁入第一纪起算，加减年盈差1（（10153917 + 244） % 360）
  getTianYi(accNum)
  {
	  var path = new Array("酉","坤","子","巽","午","坤","艮","干","午","艮","卯","中");
	  
	  var inMansion = Math.floor((accNum - 1)  % 36 / 3);
	  var inMansionYear = (accNum-1) % 36 %3 + 1;		
	  
	  //alert("天乙所走宫数︰" + inMansion + "\n入宫年数︰" + inMansionYear);
	  
	  return [path[inMansion], inMansionYear];
  }
  
  // 地乙计算规则（ok）
  // 自上元甲子岁入第一纪起算，加减年盈差1（（10153917 + 244） % 360）
  getDiYi(accNum)
  {
	  var path = new Array("巽","午","坤","艮","干","午","艮","卯","中","酉","坤","子");
	  
	  var inMansion = Math.floor((accNum-1)  % 36 / 3);
	  var inMansionYear = (accNum-1) % 36 %3 + 1;		
	  
	  //alert("地乙所走宫数︰" + inMansion + "\n入宫年数︰" + inMansionYear);
	  
	  return [path[inMansion], inMansionYear];
  }
  
  // 直符计算规则（ok）
  // 自上元甲子岁入第一纪起算，加减年盈差1（（10153917 + 244） % 360）
  getZhiFu(accNum)
  {
	  var path = new Array("中","酉","坤","子","巽","午","坤","艮","干","午","艮","卯");
	  
	  var inMansion = Math.floor((accNum-1)  % 36 / 3);
	  var inMansionYear = (accNum-1) % 36 %3 + 1;		
	  
	  //alert("直符所走宫数︰" + inMansion + "\n入宫年数︰" + inMansionYear);
	  
	  return [path[inMansion], inMansionYear];
  }
}
var e = new taiyiModule()
module.exports=e;  