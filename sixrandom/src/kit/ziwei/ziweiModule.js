

import React, { Component } from 'react';
import { SixrandomModule } from '../UniversechangesLib/SixrandomLib/SixrandomModule';
class ziweiModule extends React.Component {

	constructor(porp) {
		super(porp);
		this.sGan = "甲乙丙丁戊己庚辛壬癸";
		this.sZhi = "子丑寅卯辰巳午未申酉戌亥";
		this.s4hua = "甲廉破武阳，乙机梁紫阴，丙同机昌廉，丁阴同机巨，戊贪阴弼机，己武贪梁曲，庚阳武阴同，辛巨阳曲昌，壬梁紫左武，癸破巨阴贪，";
		this.sJian = "廉破武阳机梁紫阴同昌巨贪弼曲左";
		this.sFull = "廉贞破军武曲太阳天机天梁紫微太阴天同文昌巨门贪狼右弼文曲左辅";

		this.init()
	}
	init()
	{
		this.niangz = undefined
		this.yuegz = undefined
		this.sShi = undefined
		this.imonth = 0;//1开始
		this.iday = 0;  //1开始
		this.ziwei = 0
		this.minggong = undefined//命宫
		this.shengong = undefined;//身宫
		this.tianfu = undefined;;  //天府
		this.mgzs = undefined;;    //12月干支
		this.wenchang = undefined;;//文昌
		this.wenqu = undefined;;   //文曲
		this.enguang = undefined;; //恩光
		this.tiangui = undefined;; //天贵
		this.doushao = undefined;; //斗杓
		this.zuofu = undefined;;   //左辅
		this.youbi = undefined;;   //右弼
		this._4hua = undefined
		this.ju = undefined
		this.sex = undefined
		this.geju = ""
		this.gejudetail = ""
	}
	gan2i(gan) {

		return this.sGan.indexOf(gan);
	}
	zhi2i(zhi) {

		return this.sZhi.indexOf(zhi);
	}
	i2zhi(i) {


		return this.sZhi.charAt(i);
	}

	year1()//年系
	{
		var tg = "未辰巳寅卯酉亥酉戌午";
		this.setgong(this.zhi2i(tg[this.gan2i(this.niangz[0])]), "天官");
		var tf = "酉申子亥卯寅午巳午巳";
		this.setgong(this.zhi2i(tf[this.gan2i(this.niangz[0])]), "天福");
		var tc = "巳午子巳午申寅午酉亥";
		this.setgong(this.zhi2i(tc[this.gan2i(this.niangz[0])]), "天厨");
		var lc = "寅卯巳午巳午申酉亥子";
		this.setgong(this.zhi2i(lc[this.gan2i(this.niangz[0])]), "禄存");
		var qy = "卯辰午未午未酉戌子丑";
		this.setgong(this.zhi2i(qy[this.gan2i(this.niangz[0])]), "擎羊");
		var tl = "丑寅辰巳辰巳未申戌亥";
		this.setgong(this.zhi2i(tl[this.gan2i(this.niangz[0])]), "陀罗");
		var ty = "未申酉酉未申未寅巳巳";
		this.setgong(this.zhi2i(ty[this.gan2i(this.niangz[0])]), "天钺");
		var tk = "丑子亥亥丑子丑午卯卯";
		this.setgong(this.zhi2i(tk[this.gan2i(this.niangz[0])]), "天魁");

		this.setgong(this.zhi2i(this.niangz[1]) - 0 + 4, "龙池");//辰顺
		this.setgong(12 - 0 + 10 - this.zhi2i(this.niangz[1]), "凤阁");//戌逆
		this.setgong(this.zhi2i(this.niangz[1]) - 0, "岁建");//子顺
		this.setgong(this.zhi2i(this.niangz[1]) - 0 + 1, "晦气");//丑顺
		this.setgong(this.zhi2i(this.niangz[1]) - 0 + 2, "丧门");//寅顺
		this.setgong(this.zhi2i(this.niangz[1]) - 0 + 3, "贯索");//卯顺
		this.setgong(this.zhi2i(this.niangz[1]) - 0 + 4, "官符");//辰顺
		this.setgong(this.zhi2i(this.niangz[1]) - 0 + 5, "小耗");//巳顺
		this.setgong(this.zhi2i(this.niangz[1]) - 0 + 6, "大耗");//午顺
		this.setgong(this.zhi2i(this.niangz[1]) - 0 + 7, "龙德");//未顺
		this.setgong(this.zhi2i(this.niangz[1]) - 0 + 8, "白虎");//申顺
		this.setgong(this.zhi2i(this.niangz[1]) - 0 + 9, "天德");//酉顺
		this.setgong(this.zhi2i(this.niangz[1]) - 0 + 10, "吊客");//戌顺
		this.setgong(this.zhi2i(this.niangz[1]) - 0 + 11, "病符");//亥顺
		this.setgong(this.zhi2i(this.niangz[1]) - 0 + 5, "月德");//巳顺
		this.setgong(this.zhi2i(this.niangz[1]) - 0 + this.shengong, "天寿");//身宫顺年支
		this.setgong(this.zhi2i(this.niangz[1]) - 0 + this.minggong, "天才");//命宫顺年支
		var lc = "酉申午巳午巳卯寅子亥";
		this.setgong(this.zhi2i(lc[this.gan2i(this.niangz[0])]) - 0, "流昌");
		var lq = "巳午申酉申酉亥子寅卯";
		this.setgong(this.zhi2i(lq[this.gan2i(this.niangz[0])]) - 0, "流曲");
		//安天官星诀 年干： 甲羊乙龙丙蛇游 庚猪壬犬癸马休 丁虎戊兔己辛酉，天官见煞几多愁
		//安天福星   年干   甲爱金鸡乙爱猴，丁猪丙鼠己寅收 戊寻玉兔庚壬马，辛癸逢蛇爵入楼
		//天厨星  年干      甲丁食蛇口 乙戊辛马走 丙食鼠头上 己食于灵猴 庚食虎背上，壬鸡癸猪头
		//流昌 甲蛇乙马报君知，丙戊申宫丁己鸡 庚猪辛鼠壬逢虎，癸人见兔步云梯
		//流曲 甲鸡乙猴歌一曲，丙戊马陀丁己蛇 庚依玉兔辛有虎，壬鼠癸猪齐高歌
		if ("甲己".indexOf(this.niangz[0]) != -1) {//甲己申酉 
			this.setgong(8, "截路"); this.setgong(9, "空亡");
		}
		if ("乙庚".indexOf(this.niangz[0]) != -1) {//乙庚午未 
			this.setgong(6, "截路"); this.setgong(7, "空亡");
		}
		if ("丙辛".indexOf(this.niangz[0]) != -1) {//丙辛辰巳
			this.setgong(4, "截路"); this.setgong(5, "空亡");
		}
		if ("丁壬".indexOf(this.niangz[0]) != -1) {//丁壬寅卯
			this.setgong(2, "截路"); this.setgong(3, "空亡");
		}
		if ("戊癸".indexOf(this.niangz[0]) != -1) {//戊癸子丑
			this.setgong(0, "截路"); this.setgong(1, "空亡");
		}
		if ("甲戊".indexOf(this.niangz[0]) != -1) {//
			this.setgong(1, "截路"); this.setgong(1, "空亡");
		}

		if ("寅午戌".indexOf(this.niangz[1]) != -1) {//丑卯
			this.setgong(1 - 0 + this.zhi2i(this.sShi[0]), "火星");
			this.setgong(3 - 0 + this.zhi2i(this.sShi[0]), "铃星");
		}
		if ("申子辰".indexOf(this.niangz[1]) != -1) {//寅戌
			this.setgong(2 - 0 + this.zhi2i(this.sShi[0]), "火星");
			this.setgong(10 - 0 + this.zhi2i(this.sShi[0]), "铃星");
		}
		if ("巳酉丑".indexOf(this.niangz[1]) != -1) {//卯戌
			this.setgong(3 - 0 + this.zhi2i(this.sShi[0]), "火星");
			this.setgong(10 - 0 + this.zhi2i(this.sShi[0]), "铃星");
		}
		if ("亥卯未".indexOf(this.niangz[1]) != -1) {//酉戌
			this.setgong(9 - 0 + this.zhi2i(this.sShi[0]), "火星");
			this.setgong(10 - 0 + this.zhi2i(this.sShi[0]), "铃星");
		}
		//
		this.setgong(parseInt(((this.zhi2i(this.niangz[1]) - 0 + 1) % 12) / 3) * 3 + 2, "孤辰");
		this.setgong(parseInt(((this.zhi2i(this.niangz[1]) - 0 + 1) % 12) / 3) * 3 + 10, "寡宿");
		this.setgong(3 - this.zhi2i(this.niangz[1]) + 12, "红鸾");
		this.setgong(3 - this.zhi2i(this.niangz[1]) + 12 + 6, "天喜");
		if ("子午卯酉".indexOf(this.niangz[1]) != -1) { this.setgong(5, "破碎"); }
		if ("寅申巳亥".indexOf(this.niangz[1]) != -1) { this.setgong(9, "破碎"); }
		if ("辰戌丑未".indexOf(this.niangz[1]) != -1) { this.setgong(1, "破碎"); }
		this.setgong(6 - this.zhi2i(this.niangz[1]), "天哭");
		this.setgong(6 - 0 + this.zhi2i(this.niangz[1]), "天虚");
		if ("寅午戌".indexOf(this.niangz[1]) != -1)
			this.setgong(this.zhi2i("申"), "天马");
		if ("申子辰".indexOf(this.niangz[1]) != -1)
			this.setgong(this.zhi2i("寅"), "天马");
		if ("巳酉丑".indexOf(this.niangz[1]) != -1)
			this.setgong(this.zhi2i("亥"), "天马");
		if ("亥卯未".indexOf(this.niangz[1]) != -1)
			this.setgong(this.zhi2i("巳"), "天马");
		if (((this.zhi2i(this.niangz[1]) / 4) % 2) == 0) this.setgong(this.zhi2i(this.niangz[1]) - 0 + 8, "蜚廉");
		else this.setgong(this.zhi2i(this.niangz[1]) - 0 + 2, "蜚廉");
		this.setgong(this.zhi2i(this.niangz[1]) - 0 + 1, "天空");
		if ("寅午戌".indexOf(this.niangz[1]) != -1) {
			this.setgong(this.zhi2i("未"), "攀鞍");
			this.setgong(this.zhi2i("申"), "岁驿");
			this.setgong(this.zhi2i("酉"), "息神");
			this.setgong(this.zhi2i("戌"), "华盖");
			this.setgong(this.zhi2i("亥"), "劫煞");
			this.setgong(this.zhi2i("子"), "灾煞");
			this.setgong(this.zhi2i("丑"), "天煞");
			this.setgong(this.zhi2i("寅"), "指背");
			this.setgong(this.zhi2i("卯"), "咸池");
			this.setgong(this.zhi2i("辰"), "月煞");
			this.setgong(this.zhi2i("巳"), "亡神");
			this.setgong(this.zhi2i("午"), "将星");
		}
		if ("申子辰".indexOf(this.niangz[1]) != -1) {
			this.setgong(this.zhi2i("丑"), "攀鞍");
			this.setgong(this.zhi2i("寅"), "岁驿");
			this.setgong(this.zhi2i("卯"), "息神");
			this.setgong(this.zhi2i("辰"), "华盖");
			this.setgong(this.zhi2i("巳"), "劫煞");
			this.setgong(this.zhi2i("午"), "灾煞");
			this.setgong(this.zhi2i("未"), "天煞");
			this.setgong(this.zhi2i("申"), "指背");
			this.setgong(this.zhi2i("酉"), "咸池");
			this.setgong(this.zhi2i("戌"), "月煞");
			this.setgong(this.zhi2i("亥"), "亡神");
			this.setgong(this.zhi2i("子"), "将星");
		}
		if ("巳酉丑".indexOf(this.niangz[1]) != -1) {
			this.setgong(this.zhi2i("戌"), "攀鞍");
			this.setgong(this.zhi2i("亥"), "岁驿");
			this.setgong(this.zhi2i("子"), "息神");
			this.setgong(this.zhi2i("丑"), "华盖");
			this.setgong(this.zhi2i("寅"), "劫煞");
			this.setgong(this.zhi2i("卯"), "灾煞");
			this.setgong(this.zhi2i("辰"), "天煞");
			this.setgong(this.zhi2i("巳"), "指背");
			this.setgong(this.zhi2i("午"), "咸池");
			this.setgong(this.zhi2i("未"), "月煞");
			this.setgong(this.zhi2i("申"), "亡神");
			this.setgong(this.zhi2i("酉"), "将星");
		}
		if ("亥卯未".indexOf(this.niangz[1]) != -1) {
			this.setgong(this.zhi2i("辰"), "攀鞍");
			this.setgong(this.zhi2i("巳"), "岁驿");
			this.setgong(this.zhi2i("午"), "息神");
			this.setgong(this.zhi2i("未"), "华盖");
			this.setgong(this.zhi2i("申"), "劫煞");
			this.setgong(this.zhi2i("酉"), "灾煞");
			this.setgong(this.zhi2i("戌"), "天煞");
			this.setgong(this.zhi2i("亥"), "指背");
			this.setgong(this.zhi2i("子"), "咸池");
			this.setgong(this.zhi2i("丑"), "月煞");
			this.setgong(this.zhi2i("寅"), "亡神");
			this.setgong(this.zhi2i("卯"), "将星");
		}
	}
	month1()//月系
	{
		var jies = "申申戌戌子子寅寅辰辰午午";
		var ty = "戌巳辰寅未卯亥未寅午戌寅";
		var qs = "子寅戌丑戌寅子丑寅丑寅丑";
		this.doushao = this.zhi2i("辰");
		this.doushao = this.doushao - 0 + this.imonth - 1 + this.zhi2i(this.sShi) - 1;
		this.doushao = this.doushao % 12;
		this.setgong(this.doushao, "斗杓");
		if ("寅午戌".indexOf(this.yuegz[1]) != -1)
			this.setgong(this.zhi2i("巳"), "天巫");
		if ("申子辰".indexOf(this.yuegz[1]) != -1)
			this.setgong(this.zhi2i("寅"), "天巫");
		if ("巳酉丑".indexOf(this.yuegz[1]) != -1)
			this.setgong(this.zhi2i("亥"), "天巫");
		if ("亥卯未".indexOf(this.yuegz[1]) != -1)
			this.setgong(this.zhi2i("申"), "天巫");
		this.setgong(this.zhi2i(jies[this.imonth - 1]), "解神");
		this.setgong(this.zhi2i(ty[this.imonth - 1]), "天月");
		this.setgong(24 + 4 - 2 * this.imonth, "阴煞");
		this.setgong(this.imonth - 0, "天姚");

		this.setgong(this.imonth - 0 + 8, "天刑");
		//贞申杀戌符午
		this.setgong(this.imonth - 0 + 8, "月贞");
		this.setgong(this.imonth - 0 + 10, "月杀");
		this.setgong(this.imonth - 0 + 6, "月符");
	}
	getnayinbygz(gz) {
		var sNaYin = "甲子乙丑海中金丙寅丁卯炉中火戊辰己巳大林木" +
			"庚午辛未路旁土壬申癸酉剑锋金甲戌乙亥山头火" +
			"丙子丁丑涧下水戊寅己卯城头土庚辰辛巳白蜡金" +
			"壬午癸未杨柳木甲申乙酉井泉水丙戌丁亥屋上土" +
			"戊子己丑霹雳火庚寅辛卯松柏木壬辰癸巳长流水" +
			"甲午乙未砂中金丙申丁酉山下火戊戌己亥平地木" +
			"庚子辛丑壁上土壬寅癸卯金箔金甲辰乙巳覆灯火" +
			"丙午丁未天河水戊申己酉大驿土庚戌辛亥钗钏金" +
			"壬子癸丑桑柘木甲寅乙卯大溪水丙辰丁巳砂中土" +
			"戊午己未天上火庚申辛酉石榴木壬戌癸亥大海水";
		var i = sNaYin.indexOf(gz);
		i -= i % 7; i += 4;
		return sNaYin[i] + sNaYin[i + 1] + sNaYin[i + 2];
	}
	day1()//日系
	{
		var i, j;
		var minggonggz;
		i = this.imonth - 0 + 1;//this.zhi2i(this.yuegz[1]);
		i = i - (this.zhi2i(this.sShi[0]));
		this.minggong = (i + 12) % 12;
		i = this.imonth - 0 + 1;//this.zhi2i(this.yuegz[1]);
		i = i + (this.zhi2i(this.sShi[0]));
		this.shengong = (i + 12) % 12;
		this.setgong(this.minggong, "[[命宫]]");
		j = (10 + this.minggong) % 12;
		j = j + ((((this.gan2i(this.niangz[0]) % 5) + 1) * 2) % 10);
		j = (10 + j) % 10;
		minggonggz = this.sGan[j] + this.sZhi[this.minggong];
		i = this.getju(minggonggz);
		this.ju = "木火土金水"["36542".indexOf(i)] + i + "局" + " 年干支纳音:" + this.niangz[0] + this.niangz[1] + this.getnayinbygz(this.niangz[0] + this.niangz[1]) +
			" 命主:" + "贪狼巨门禄存文曲廉贞武曲破军武曲廉贞文曲禄存巨门".substr(this.minggong * 2, 2) +
			" 身主:" + "火星天相天梁天同文昌天机火星天相天梁天同文昌天机".substr(this.zhi2i(this.niangz[1]) * 2, 2) +
			" 斗君:" + this.sZhi[(this.zhi2i(this.niangz[1]) - this.imonth + this.zhi2i(this.sShi) + 13) % 12];
		var n;
		if ((this.iday % i) == 0) this.ziwei = (this.zhi2i("寅") - 0 + parseInt(this.iday / i) - 1 + 12) % 12;
		else {
			this.ziwei = (this.zhi2i("寅") - 0 + parseInt(this.iday / i) + 1 - 1 + 12);
			n = (this.iday - parseInt(this.iday / i) * i);
			if ((n % 2) == 0) this.ziwei = this.ziwei + n;
			else this.ziwei = this.ziwei - n;
			this.ziwei = (this.ziwei + 12) % 12;
			//紫微星 生日/命宫局数 整除 寅上数 +奇数n 整除  退n步 +偶数m 整除  进m步
			//紫薇逆布 天机  隔位 太阳 武曲 天蓬 紫府 隔2 廉贞
			//紫薇 天府 寅申同宫 卯丑互换 辰子互换
			//天府 顺行 太阴 贪狼 巨门 天象 天凉 七杀 隔3 破军
			//命宫逆布  月生时
			//月上起子时，逆数到生时安命宫 子午时身命同宫
			//月上起子时，顺数到生时，安身宫

			//十二长生阳男阴女顺安 阴男阳女逆排
			// 长生 沐浴 冠带 临官 帝旺 衰 病 死 墓 绝 胎 养
			//大运 阳男 父母宫 阴男兄弟宫
			//阳男阴女顺布大限 阴男阳女逆布
		}
		//查表算紫微
		var ziweishui = "丑寅寅卯卯辰辰巳巳午午未未申申酉酉戌戌亥亥子子丑丑寅寅卯卯辰";
		var ziweimu = "辰丑寅巳寅卯午卯辰未辰巳申巳午酉午未戌未申亥申酉子酉戌丑戌亥";
		var ziweijin = "亥辰丑寅子巳寅卯丑午卯辰寅未辰巳卯申巳午辰酉午未巳戌未申午亥";
		var ziweitu = "午亥辰丑寅未子巳寅卯申丑午卯辰酉寅未辰巳戌卯申巳午亥辰酉午未";
		var ziweihuo = "酉午亥辰丑寅戌未子巳寅卯亥申丑午卯辰子酉寅未辰巳丑戌卯申巳午";
		if (i == 2) this.ziwei = this.zhi2i(ziweishui[this.iday - 1]);
		else if (i == 3) this.ziwei = this.zhi2i(ziweimu[this.iday - 1]);
		else if (i == 4) this.ziwei = this.zhi2i(ziweijin[this.iday - 1]);
		else if (i == 5) this.ziwei = this.zhi2i(ziweitu[this.iday - 1]);
		else if (i == 6) this.ziwei = this.zhi2i(ziweihuo[this.iday - 1]);
		this.setgong(this.minggong - 0 + 1, "[父母宫]");
		this.setgong(this.minggong - 0 + 2, "[福德宫]");
		this.setgong(this.minggong - 0 + 3, "[田宅宫]");
		this.setgong(this.minggong - 0 + 4, "[官禄宫]");
		this.setgong(this.minggong - 0 + 5, "[仆役宫]");
		this.setgong(this.minggong - 0 + 6, "[迁移宫]");
		this.setgong(this.minggong - 0 + 7, "[疾厄宫]");
		this.setgong(this.minggong - 0 + 8, "[财帛宫]");
		this.setgong(this.minggong - 0 + 9, "[子女宫]");
		this.setgong(this.minggong - 0 + 10, "[夫妻宫]");
		this.setgong(this.minggong - 0 + 11, "[兄弟宫]");
		this.setgong(this.shengong - 0, "[身宫]");

		if ("乾造" == this.sex && (this.gan2i(this.niangz[0]) % 2) == 0)// 阳男
		{
			for (j = 0; j < 12; j++)
				this.setgong(this.minggong - 0 + j, parseInt(j * 10 + parseInt(i)).toString() + "~" + parseInt(j * 10 + 9 + parseInt(i)).toString());
		}
		else if (("坤造" == this.sex && ((this.gan2i(this.niangz[0]) % 2) == 1)))//阴女
		{
			for (j = 0; j < 12; j++)
				this.setgong(this.minggong - 0 + j, parseInt(j * 10 + parseInt(i)).toString() + "~" + parseInt(j * 10 + 9 + parseInt(i)).toString());
		}
		else {
			for (j = 0; j < 12; j++)
				this.setgong(this.minggong - 0 + 12 - j, parseInt(j * 10 + parseInt(i)).toString() + "~" + parseInt(j * 10 + 9 + parseInt(i)).toString());
		}

		this.setgong(this.minggong - 0 + 7, "天使");
		this.setgong(this.minggong - 0 + 5, "天伤");
		this.wenchang = (22 - this.zhi2i(this.sShi[0])) % 12;//戌逆时
		this.wenqu = (4 + this.zhi2i(this.sShi[0])) % 12;//辰顺时
		this.setgong(this.wenchang - 0, "文昌");
		this.setgong(this.wenqu - 0, "文曲");
		this.enguang = this.wenchang - 0 + 10 + parseInt(this.iday);
		this.enguang = this.enguang % 12;
		this.tiangui = this.wenqu - 0 + 10 + parseInt(this.iday);
		this.tiangui = this.tiangui % 12;
		this.setgong(this.tiangui - 0, "天贵");
		this.setgong(this.enguang - 0, "恩光");
		this.setgong(this.ziwei - 0, "紫微");
		this.setgong(this.ziwei - 1, "天机");
		this.setgong(this.ziwei - 3, "太阳");
		this.setgong(this.ziwei - 4, "武曲");
		this.setgong(this.ziwei - 5, "天同");
		//this.setgong(this.ziwei-6,"紫府");
		this.setgong(this.ziwei - 8, "廉贞");
		this.tianfu = (16 - this.ziwei) % 12;
		this.setgong(this.tianfu - 0, "天府");
		this.setgong(this.tianfu - 0 + 1, "太阴");
		this.setgong(this.tianfu - 0 + 2, "贪狼");
		this.setgong(this.tianfu - 0 + 3, "巨门");
		this.setgong(this.tianfu - 0 + 4, "天相");
		this.setgong(this.tianfu - 0 + 5, "天梁");
		this.setgong(this.tianfu - 0 + 6, "七杀");
		this.setgong(this.tianfu - 0 + 10, "破军");

		this.setgong(this.zhi2i(this.sShi[0]) - 0 + 11, "地劫");
		this.setgong(11 - this.zhi2i(this.sShi[0]), "地空");
		//午台顺，寅封顺
		this.setgong(6 - 0 + this.zhi2i(this.sShi[0]), "台辅");
		this.setgong(2 - 0 + this.zhi2i(this.sShi[0]), "封诰");
		//左顺辰八右逆右逆戌三左顺
		this.zuofu = (4 + this.imonth - 1) % 12;
		this.youbi = (22 - this.imonth + 1) % 12;
		this.setgong(this.zuofu - 0, "左辅");
		this.setgong(this.youbi - 0, "右弼");
		this.setgong(this.youbi - this.iday + 1 + 12, "八座");
		this.setgong(this.zuofu - 0 + parseInt(this.iday) - 1, "三台");
		//斗君 年支逆数月顺数时
		//this.zhi2i(this.niangz[1])-immonth+1+this.zhi2i(this.sShi[0])
	}

	zihua() {
		var i, j, h, ind;
		var _4hua;
		j = ((((this.gan2i(this.niangz[0]) % 5) - 0 + 1) * 2) % 10);
		this.zhihua = ""
		for (i = 2; i < 14; i++) {
			//mgzs=mgzs+this.sGan[(j+i-2)%10]+this.sZhi[i%12];
			//this.setgong(i,this.sGan[(j+i-2)%10]+this.sZhi[i%12]);
			_4hua = this.s4hua.substring(((j - 2 + i) % 10) * 6 + 1, ((j - 2 + i) % 10) * 6 + 5);
			for (h = 0; h < 4; h++) {
				ind = this.sJian.indexOf(_4hua[h]);
				var cur = this._4hua[i % 12]
				if (cur.indexOf(this.sFull.substring(ind * 2, ind * 2 + 2)) != -1) {
					this.zhihua = this.zhihua + this.sGan[(j - 2 + i) % 10] + this.sZhi[i % 12] + "宫" +
						this.sFull.substring(ind * 2, ind * 2 + 2) + "自化" + "禄权科忌"[h] + ",";
				}
				cur = this._4hua[(i - 0 + 6) % 12]
				if (cur.indexOf(this.sFull.substring(ind * 2, ind * 2 + 2)) != -1) {
					this.zhihua = this.zhihua + this.sGan[(j - 2 + i) % 10] + this.sZhi[i % 12] + "宫" +
						this.sFull.substring(ind * 2, ind * 2 + 2) + "化" + "禄权科忌"[h] + ",";
				}
			}
		}
	}
	CountStrings(Src, list) {
		var i, c;
		c = 0;
		//alert(Src);
		for (i = 0; i < list.length; i++)
			if (Src.indexOf(list[i]) != -1) c++;
		return c;
	}
	goodstr(str)//吉利
	{
		return  str 
	}
	badstr(str)//凶险
	{
		return  str 
	}
	setgoodgeju(geju, des) {
		this.geju = this.geju + geju + " "
		this.gejudetail = this.gejudetail + " "+ des + " ";
		//alert(des);
	}
	setbadgeju(geju, des) {
		this.geju = this.geju + this.badstr(geju) + " ";
		this.gejudetail = this.gejudetail+ " "+ des + " ";
		//alert(des);
	}
	isEmpty(obj) {
		if (typeof obj == "undefined" || obj == null || obj == "") return true;
		else return false;
	}
	funcinchour() {
		var shichen = $("#hour").val();
		if (isEmpty(shichen)) $("#hour").val("子");
		else $("#hour").val(this.sZhi[(this.sZhi.indexOf(shichen) - 0 + 1) % 12]);
		func1();
	}
	funcdechour() {
		var shichen = $("#hour").val();
		if (isEmpty(shichen)) $("#hour").val("子");
		else $("#hour").val(this.sZhi[(this.sZhi.indexOf(shichen) - 0 + 11) % 12]);
		func1();
	}

	setgong(g, s) {
		var mzw = "平庙庙旺地旺庙庙旺旺地旺";//紫微
		var mtj = "庙陷地旺利平庙陷地旺利平";//天机
		var mya = "陷不旺庙旺旺庙地地平陷陷";//太阳
		var mwu = "旺庙地利庙平旺庙地利庙平";//武曲
		var mtt = "旺不利庙平庙陷不旺平平庙";//天同
		var mlz = "平利庙平利庙平利庙平利庙";//廉贞
		var mtf = "庙庙庙地旺地旺庙地旺旺地";//天府
		var myi = "庙庙不陷陷陷陷平利旺旺庙";//太阴
		var mla = "旺庙平地庙陷旺庙平地庙陷";//贪狼
		var mju = "旺不庙庙平平旺平庙庙平旺";//巨门
		var mtx = "庙庙庙陷平地地地庙陷地地";//天相
		var mtl = "庙旺庙旺庙陷庙旺陷地庙陷";//天梁
		var mqs = "旺庙庙旺地平旺庙庙旺庙平";//七杀
		var mpj = "庙旺地陷旺平庙旺地陷旺平";//破军
		var mhx = "陷地庙利陷地庙利陷地庙利";//火星
		var mlx = "陷地庙利陷地庙利陷地庙利";//铃星
		var mqy = "旺庙空陷庙空陷庙空旺庙空";//擎羊
		var mlo = "空庙陷空庙陷空庙陷空庙陷";//陀罗
		var mwc = "地庙陷旺地庙陷利地庙陷利";//文昌
		var mwq = "地庙平旺地庙陷旺地庙陷旺";//文曲
		if (g > 40) alert(g + ' ' + s);
		g = (g - 0 + 12) % 12;
		if (s == "文曲") { s = s + ' ' + mwq[g] + ',' }
		else if (s == "文昌") { s = s + ' ' + mwc[g] + ',' }
		else if (s == "紫微") { s = s + ' ' + mzw[g] + ',' }
		else if (s == "天机") { s = s + ' ' + mtj[g] + ',' }
		else if (s == "太阳") { s = s + ' ' + mya[g] + ',' }
		else if (s == "武曲") { s = s + ' ' + mwu[g] + ',' }
		else if (s == "天同") { s = s + ' ' + mtt[g] + ',' }
		else if (s == "廉贞") { s = s + ' ' + mlz[g] + ',' }
		else if (s == "天府") { s = s + ' ' + mtf[g] + ',' }
		else if (s == "太阴") { s = s + ' ' + myi[g] + ',' }
		else if (s == "贪狼") { s = s + ' ' + mla[g] + ',' }
		else if (s == "巨门") { s = s + ' ' + mju[g] + ',' }
		else if (s == "天相") { s = s + ' ' + mtx[g] + ',' }
		else if (s == "天梁") { s = s + ' ' + mtl[g] + ',' }
		else if (s == "七杀") { s = s + ' ' + mqs[g] + ',' }
		else if (s == "破军") { s = s + ' ' + mpj[g] + ',' }
		else if (s == "火星") { s = s + ' ' + mhx[g] + ',' }
		else if (s == "铃星") { s = s + ' ' + mlx[g] + ',' }
		else if (s == "擎羊") { s = s + ' ' + mqy[g] + ',' }
		else if (s == "陀罗") { s = s + ' ' + mlo[g] + ',' }
		else if (s == "文昌") { s = s + ' ' + mwc[g] + ',' }
		else if (s == "文曲") { s = s + ' ' + mwq[g] + ',' }
		else if (s == "地空") { s = s + ',' }
		else if (s == "地劫") { s = s + ',' }
		var _4hua = this.s4hua.substring(this.gan2i(this.niangz[0]) * 6 + 1, this.gan2i(this.niangz[0]) * 6 + 5);
		//$(g).text($(g).text() + s + " ");    
		if (s.indexOf("[") != -1) {
			this._4hua[g] = this._4hua[g] + ',' + s
		}
		else if ((_4hua.indexOf(s[0]) == -1) && (_4hua.indexOf(s[1]) == -1)) {
			this._4hua[g] = this._4hua[g] + ',' + s
		}
		else//四化标注，背景红色
		{
			var ind = _4hua.indexOf(s[0]) + _4hua.indexOf(s[1]) + 1;//己干武曲都有
			if (s[0] + s[1] == "武曲") ind = _4hua.indexOf(s[0]);
			var ind2 = this.sJian.indexOf(_4hua[ind]);//简称索引 
			if (s.indexOf(this.sFull.substring(ind2 * 2, ind2 * 2 + 2)) == -1)//用全称判断
			{
				this._4hua[g] = this._4hua[g] + ',' + s
			}
			else {
				this._4hua[g] = this._4hua[g] + ',' + s.substr(0,s.length-1) +" "+ "禄权科忌"[ind]
			}
		}

	}
	funcfill() {
		var s;
		s = document.getElementById("fill").value;
		//处理性别
		if (s.indexOf("乾造") >= 0) { document.getElementById("sex1").checked = "true"; s = s.substr(s.indexOf("乾造") + 2); }
		else if (s.indexOf("坤造") >= 0) { document.getElementById("sex2").checked = "true"; s = s.substr(s.indexOf("坤造") + 2); }
		if (s[0] == " ") s = s.substr(1);
		document.getElementById("year").value = s[0] + s[1] + s[3] + s[4];
		s = s.substring(6);
		//alert(s);
		document.getElementById("month").value = s.substring(0, s.indexOf("月"));
		s = s.substring(s.indexOf("月") + 1);
		document.getElementById("day").value = s.substring(0, s.indexOf("日"));
		s = s.substring(s.indexOf("日") + 1);
		document.getElementById("hour").value = s[0];
	}
	testnayin() {
		var g, z;
		g = 0; z = 0;
		$("#c2").html("");
		while (1) {
			$("#c2").html($("#c2").html() + this.sGan[g] + this.sZhi[z] + "木火土金水"["36542".indexOf(this.getju(this.sGan[g] + this.sZhi[z]))] + ",");
			g++; z++;
			if (g > 9) g = 0;
			if (z > 11) z = 0;
			if (g == 0 && z == 0) break;
		}
	}
	getju(ngz) {
		var i;
		//20190525
		i = (parseInt(this.zhi2i(ngz[1]) / 2) % 3) + 1 + (parseInt(this.gan2i(ngz[0]) / 2) + 1);
		if (i > 5) i -= 5;
		//alert("空木金水火土"[i]);
		return "034265"[i];
	}
	ziweigeju() {
		var i, j, h, ind;
		var txt;
		j = ((((this.gan2i(this.niangz[0]) % 5) + 1) * 2) % 10);
		//$("#c3").html("");
		//$("#gejudes").html("");
		//1、
		var zifutonggong = this.goodstr("紫府同宫格") +
			"安命在寅申，值紫微天府同宫，与禄存、科权禄、左右、昌曲、魁钺加会，方合此格，不见吉星并吉化，不合此格。此格生人，必主大富大贵，福寿隆昌。" +
			"甲年生人化吉极美，丁己庚癸年生人亦吉。诗曰： " +
			"同宫紫府贵生人，天在清明万象新。喜逢寅申同得地，声名磊落动乾坤。" +
			"经云：“紫府同宫，终身福厚”、“紫微天府，全依辅弼之功”。";
		txt = this._4hua[this.minggong]
		if (this.minggong == 2 || this.minggong == 8) {
			if (txt.indexOf("紫微") * txt.indexOf("天府") > 3)//同宫
				this.setgoodgeju("紫府同宫格", zifutonggong);
		}
		//2、
		var zifuchaohuan = this.goodstr("紫府朝垣格") +
			"紫微、天府于庙旺之地合照命垣，命宫三方四正有禄存、科权禄、左右、昌曲、魁钺诸吉星，方合此格。" +
			"此格有四，①如武曲天相在寅申坐命，三合紫府天府。②廉贞在寅申坐命，三合紫微天府。③廉贞天相在子午坐命，三合紫微天府。" +
			"④天相在丑未坐命，三合天府及对宫有紫微。入此格者，不大贵即当大富。诗曰：" +
			"一斗尊星命内临，清高祸患永无侵。更加吉曜重相会，食禄皇朝冠古今。" +
			"经云：“紫府朝垣，食禄万钟”。";
		txt = this._4hua[(this.minggong - 0 + 4) % 12]
		if (txt.indexOf("紫微") * txt.indexOf("天府") < 0)//三合有一个
		{
			txt = this._4hua[(this.minggong - 0 + 8) % 12]
			if (txt.indexOf("紫微") * txt.indexOf("天府") < 0)//三合有一个
				this.setgoodgeju("紫府朝垣格", zifuchaohuan);
		}
		//3、
		var tianfuchaohuan = this.goodstr("天府朝垣格") +
			"天府、廉贞二星在戌宫坐命会禄存、科权禄、左右、昌曲、魁钺诸吉星，无煞方合此格，有左辅或右弼在命宫方好，" +
			"甲己年生人最佳，丁年生人次之。戌宫为乾卦位，为君，天府作臣，人命得此，主大富大贵。诗曰：" +
			"乾为君象府为臣，得地来朝福自新。辅弼忠臣身报国，腰金衣紫拜重晖。" +
			"经云：“天府临戌有星扶，腰金衣紫”、“辅府同宫，尊居万乘”。";
		if (this.minggong == 10) {
			txt = this._4hua[this.minggong];
			if (txt.indexOf("廉贞") * txt.indexOf("天府") > 3)//同宫
				this.setgoodgeju("天府朝垣格", tianfuchaohuan);
		}
		//4、
		var junchenqinghui = this.goodstr("君臣庆会格") +
			"命宫有紫微星，得天府、天相、左辅、右弼、文昌、文曲、三台、八座、龙池、凤阁、恩光、天贵等吉星在三方四正会合，" +
			"无煞方合此格，加禄存并吉化更佳。见四煞空劫忌诸恶同宫或加会谓之奴欺主，臣蔽君，反为祸乱，不合此格。" +
			"紫微为君，府相、左右、昌曲诸星作臣，故为君臣庆会。人命得此格，不大贵即当大富。" +
			"经云：“君臣庆会，才学经邦”。";

		txt = this._4hua[this.minggong];
		if (txt.indexOf("紫微") != -1) {
			txt = txt + this._4hua[((this.minggong + 4) % 12)] + this._4hua[((this.minggong + 8) % 12)];
			if (this.CountStrings(txt, ["天府", "天相", "左辅", "右弼", "文昌", "文曲", "三台", "八座"]) > 3)
				this.setgoodgeju("君臣庆会格", junchenqinghui);
		}
		txt = this._4hua[this.minggong];
		//5、
		var fuxiangchaohuan = this.goodstr("府相朝垣格") +
			"天府、天相二星一居财帛宫，一居官禄宫，来合照命宫，命宫三方四正有禄存、科权禄、左右、昌曲、魁钺加会方合此格，有四煞劫空化忌加会则破格。此格尚主与与亲人朋友感情深，人情味浓。此格有四： " +
			"①丑宫安命无正曜，巳宫天府、酉宫天相来朝；未宫安命无正曜，亥宫天府，卯宫天相来朝；卯宫安命无正曜，亥宫天相、未宫天府来朝；酉宫安命无正曜，巳宫天相，丑宫天府来朝。" +
			"②天府在丑（未）安命，天相在巳（或亥）来朝；天府在卯（酉）安命，天相在未（丑）来朝；天府在巳（亥）安命，天相在酉（卯）来朝。" +
			"③廉贞在寅（申）安命，天府、天相在午、戌（子辰）来朝，此例见前紫府朝垣格。诗曰：" +
			"命宫府相得俱逢，无煞身当待圣君。富贵双全人景仰，巍巍德业满乾坤。" +
			"经云：“天府、天相乃为衣禄之神，入仕为官，定主亨通之兆”、“府相同来会命宫，全家食禄”、“府相朝垣格最良，出仕为官大吉昌”（无四煞诸恶冲破为准）、“寅逢府相，位登一品之荣”、“府相之星女命躔，必当子贵与夫贤”。";
		var txt1 = this._4hua[((this.minggong + 4) % 12)];
		var txt2 = this._4hua[((this.minggong + 8) % 12)];

		if ((txt1.indexOf("天府") * txt2.indexOf("天相") > 3) ||
			(txt2.indexOf("天府") * txt1.indexOf("天相") > 3)) {
			this.setgoodgeju("府相朝垣格", fuxiangchaohuan);
		}
		//6、
		var jiyuetongliang = this.goodstr("机月同梁格") +
			"此指天同天梁在寅申坐命，天机太阴在寅申坐命而言，三方四正必是天机、太阴、天同、天梁四星交会，再与禄存、科权禄、左右、昌曲、魁钺加会方为本格，" +
			"或身宫、命宫逢此四星会吉亦为本格，务必三合有文昌或文曲方是。" +
			"入此格者，多在公家机构、大规模企业中任职，从事管理工作、外务工作、案牍工作、文秘工作、设计策划工作等，一般事业稳定少风险。" +
			"格局佳者，富贵不小。见煞星则破格。亦有从事自由职业者，但仍以其专长技艺而成名。于他宫守命会齐四星亦算此格。诗曰： " +
			"寅申四曜命加临，祖宗根源定有成。刀笔之中宜作力，荣华发旺在公门。 " +
			"经云：“机、月、同、梁作吏人”、“机月同梁福临”、“寅申最喜同梁会”、“巳亥会同梁机月，多主作吏人”（加身宫会齐四星方是）、“太阴与天机昌曲同宫于寅，男为奴仆女为*”。";
		if (this.minggong == 2 || this.minggong == 8) {
			if (this.CountStrings(txt + txt1 + txt2, ["天机", "太阴", "天同", "天梁"]) == 4)
				this.setgoodgeju("机月同梁格", jiyuetongliang);
		}
		var jiliangjiahui = this.goodstr("机梁加会格") +
			"天机、天梁二星在辰戌宫守命，与禄存、科权禄、左右、昌曲、魁钺加会为本格，多主学有专长，博学过人，关心政治，妙算神策，掌兵权，会吉星多，主大富大贵。吉星少，从事的工作的军警、司法等有关，又见煞者，多为宗教教主、邪教创始人、神学家、哲学家、思想家、气功师。无吉而见煞星则破格，主人思想邪异，舌辩之辈，宜江湖术士、九流、僧道、技艺。诗曰： " +
			"机梁入庙最堪言，得地教君福寿全。妙算神策应盖世，威风凛凛掌兵权。 " +
			"经云：（天机）“更逢天梁，必有高艺随身”、“（天梁）与天机同行，居翰苑，善谈兵”、“（天机、天梁）会左右、昌曲，文为清显，武为忠良”。";
		if (this.minggong == 4 || this.minggong == 10)
			if (this.CountStrings(txt, ["天机", "天梁"]) == 2)
				this.setgoodgeju("机梁加会格", jiliangjiahui);
		var wenliangzhenji = this.goodstr("文梁振纪格") +
			"文曲（或文昌）与天梁旺地守命，三方有禄存、科权禄、左右、魁钺加会为本格。宜从政，遇吉星多者，主大贵。诗曰： " +
			"文星耿直遇天梁，位列黄门鸟府行。纲纪朝中功业见，逼人清气满乾坤。" +
			"经云：“天梁文昌居庙旺，位至台纲”、“天梁庙旺，左右昌曲加会，出将入相”。 ";

		if (this.CountStrings(txt, ["文", "天梁"]) == 2)
			this.setgoodgeju("文梁振纪格", wenliangzhenji);
		var juritonggong = this.goodstr("巨日同宫格") +
			"巨门太阳在寅宫，三方四正加会禄存、科权禄、左右、昌曲、魁钺等吉星为本格。本格生人，主大贵，宜从政，或为社会知名人士。其人一生总是名大于利。庚辛癸年生人，无四煞劫空加会为上格。申宫次之，纵三方无煞亦不全美。诗曰： " +
			"巨日拱照对三台，值此应为盖世才。若是凶星无战克，紫袍玉带边功来。 " +
			"经云：“巨日同宫，官封三代”、“巨日寅宫守命，无劫空四煞，食禄驰名”。";
		if (this.minggong == 2)
			if (this.CountStrings(txt, ["巨门", "太阳"]) == 2)
				this.setgoodgeju("巨日同宫格", juritonggong);

		var jincanguanghui = this.goodstr("金灿光辉格") +
			"太阳守命入午宫，与禄存、科权禄、左右、昌曲、魁钺加会方合此格。人命得此，主一生不但大贵，而且大富，无昌曲辅弼或见空劫则美景大减。庚辛年生者富贵全美，甲癸丁己年次之。 " +
			"经云：“太阳居午，谓之日丽中天，有专权之贵，敌国之富”、“巨日拱照为奇格”。";
		if (this.minggong == 6)
			if (this.CountStrings(txt, ["太阳"]) == 1)
				this.setgoodgeju("金灿光辉格", jincanguanghui);

		var rizhaoleimen = this.goodstr("日照雷门格") +
			"又名“日出扶桑格”，即白天生人，太阳天梁在卯宫坐命，与禄存、科权禄、左右、昌曲加会为本格。惟乙、辛、壬年生人合格，乙辛年生人最佳。他年生者亦主吉利，以三方四正无煞冲为限。加煞破格，终必遭肖小暗算。诗曰： " +
			"太阳卯位贵堪夸，必主平生富贵家。纯粹少年登甲第，征战声势动夷华。 " +
			"经云：“日照雷门，富贵荣华”。 ";
		if (this.minggong == 3)
			if (this.CountStrings(txt, ["天梁", "太阳"]) == 2)
				this.setgoodgeju("日照雷门格", rizhaoleimen);

		var yangliangchanglu = this.goodstr("阳梁昌禄格") +
			"即“日照雷门格”，太阳天梁在卯宫坐命，须乙年生人，命宫有禄存，再有文昌同守方是。人命得此，学业超群，考运极佳，为国家重臣，政界闻人，大贵。 " +
			"经云：“天梁太阳昌禄会，胪传第一名”。";
		if (this.minggong == 3)
			if (this.CountStrings(txt, ["天梁", "太阳", "文昌", "禄存"]) == 4)
				this.setgoodgeju("阳梁昌禄格", yangliangchanglu);

		var mingzhuchuhai = this.goodstr("明珠出海格") +
			"安命在未无正曜，卯宫太阳天梁、亥宫太阴入庙旺合照命宫，三方四正见禄存、科权禄、左右、昌曲、魁钺加会为本格。命身宫众吉守照无四煞空劫冲破，主名标金榜，大贵，必为政界要员，一生财官双美，福寿双全，乙丙辛壬年生人上格。 " +
			"经云：“三合明珠生旺地，稳步蟾宫”、“日卯月亥，安命未，蟾宫折桂之荣”。";
		if (this.minggong == 7) {
			if (txt1.indexOf("太阴") != -1 && txt2.indexOf("太阳") != -1)
				this.setgoodgeju("明珠出海格", mingzhuchuhai);
		}

		var yuelangtianmen = this.goodstr("月朗天门格") +
			"又名“月落亥宫格”，即夜晚生人，得太阴在亥宫守命，与禄存、科权禄、左右、昌曲、魁钺加会为本格。此格生人，不大贵则当大富。太阴与昌曲同宫则最美，乙丙戊年生人最佳，丁辛庚年生人次之。命宫有煞星则破格。诗曰： " +
			"正遇风云际会期，海门高处一龙飞，文章间出英雄汉，万里功名得者稀。 " +
			"太阴入庙有光辉，财入财乡分外奇。破耗凶星皆不犯，堆金积玉富豪儿。 " +
			"经云：“月朗天门，晋爵封侯”。";

		if (this.minggong == 11) {
			if (txt.indexOf("太阴") != -1)// &&this.CountStrings(txt+txt1+txt2, ["文昌","文曲","科","禄","权"]) > 2)
				this.setgoodgeju("月朗天门格", yuelangtianmen);
		}
		var riyuebingming = this.goodstr("日月并明格") +
			"此格有二，①天梁在丑宫坐命，太阳在巳，太阴在酉，二星庙旺合照命宫。乙丙丁庚辛年生人合格。②安命在午无正曜，寅宫巨门太阳，子宫天同太阴，日月入庙旺朝照命宫。以上皆要与禄存、科权禄、左右、昌曲、魁钺加会方为本格。诗曰：" +
			"二曜常明气象新，少年学问播声名。几番升转功名盛，定作朝中燮里人。" +
			"经云：“日月并明，佐九重于尧殿”。";
		if (this.minggong == 1) {
			if (this.CountStrings(txt, ["天梁"]) == 1 && txt1.indexOf("太阳") != -1 && txt2.indexOf("太阴") != -1)
				this.setgoodgeju("日月并明格", riyuebingming);
		}
		if (this.minggong == 6) {
			if (this.CountStrings(txt2, ["太阳", "巨门"]) == 2 && this.CountStrings(this._4hua[0], ["太阴", "天同"]) == 2)
				this.setgoodgeju("日月并明格", riyuebingming);
		}
		var yueshengcanghai = this.goodstr("月生沧海格") +
			"①天同．太阴星在子宫坐命，与禄存、科权禄、左右、昌曲、魁钺加会为本格。②或者太阴天同在子守田宅宫，与吉星会合并吉化亦是，此须命宫和三方有吉方论。命这同阴在子会吉星，清秀、优雅、学问过人，主得财富与名声。格局佳者，大富大贵。" +
			"经云：“太阴居子，号曰水澄桂萼，得忠谏之职，清要之才”、“太阴居子，丙丁生人，富贵忠良”。";
		if (this.minggong == 0)
			if (this.CountStrings(txt, ["天同", "太阴"]) == 2)
				this.setgoodgeju("月生沧海格", yueshengcanghai);

		var shouxingrumiao = this.goodstr("寿星入庙格") +
			"天梁守命，入午宫，与禄存、科权禄、左右、昌曲、魁钺加会者，为本格。天梁属土司寿，居午宫入庙。此格生人，主正直无私、学识优秀、性格稳健，具有处理难题、统御众人之才，且其人健康佳，寿命长，一生名大于利，会吉星众，主大贵。丁年生人上格，己年生人次之，癸年生人主富。余年生人非也，不见凶星，主有寿而已。诗曰：" +
			"命遇离明拱寿星，一生荣华沐深恩。飞腾鸿鸪青霄近，气象堂堂侍帝廷。" +
			"经云：“梁居午位，官资清显”。";
		if (this.minggong == 6)
			if (this.CountStrings(txt, ["天梁=庙"]) == 1)
				this.setgoodgeju("寿星入庙格", shouxingrumiao);

		var yingxingrumiao = this.goodstr("英星入庙格") +
			"破军守命居子、午宫，与禄存、科权禄、左右、魁钺加会者为本格。离乡背井可获吉运，宜武职或经商，富贵双全，横发。甲癸年生人上格，主大富或大贵，丁己年生人次之。丙戊年生人主困，不入此格。诗曰：" +
			"北斗英星最有权，坎离之上福绵绵。黄金建节趋廊庙，统摄英雄镇四边。" +
			"经云：“子午破军，加官进爵”、“破军子午宫，无煞，甲癸生人，官资清显，位至三公”。";
		if (this.minggong == 0 || this.minggong == 6)
			if (this.CountStrings(txt, ["破军"]) == 1)
				this.setgoodgeju("英星入庙格", yingxingrumiao);

		var shizhongyinyu = this.goodstr("石中隐玉格") +
			"巨门入子午宫坐命，与禄存、科权禄、左右、昌曲、魁钺加会为本格，此格唯有辛、癸年生人方入格。本格生人，理想高远，才华特异，脑力过人，其人当经商大富，或从政而高官厚禄，或握兵权，不然亦是学术界、科技界之权威人士。必须历尽风霜、艰苦奋斗后方有大成，故称为“石中隐玉”。辛癸年生人上格，己年生人亦吉，立命在子，庚年生人亦主吉利。诗曰：" +
			"巨门子午喜相逢，更值生人辛癸中。早岁定为攀桂客，老来滋润富家翁。" +
			"经云：“子午巨门，石中隐玉”、“巨门子午科禄权，石中隐玉福兴隆”、“巨日拱照为奇格”。";
		if (this.minggong == 0 || this.minggong == 6)
			if (this.CountStrings(txt, ["巨门"]) == 1)
				this.setgoodgeju("石中隐玉格", shizhongyinyu);

		var qishachaodou = this.goodstr("七杀朝斗格") +
			"七杀守命，入子午寅申宫，与禄存、科权禄、左右、昌曲、魁钺加会为本格。七杀在寅申宫入庙，在子午宫旺地。七杀在申、午坐命为“朝斗”，在寅、子坐命为“仰斗”。此格带有杀气，自己发达而必有另一部份人一遭殃，或因此而有不少人死在他的手下。入此格者，多主武职显贵，统领百万雄师，不然也是公司创始人，商界英才，大富无疑。有吉星加会，又有凶星加会则属破格，主大起大落，暴发暴败，纵然一时发达也难长久保持，并且结局大多不佳。不会吉星，则减为平常之格，不见吉星而见凶曜同宫加会，则为劣等命式，主凶恶、残疾、奔波、犯罪、牢狱，又恐寿难长永。诗曰：" +
			"格名朝斗贵无疑，入庙须教寿福齐。烈烈重重身显耀，平生安稳好根基。" +
			"七杀寅申子午宫，四夷拱手服英雄。魁钺左右文昌会，科禄名高食万钟。" +
			"经云：“七杀朝斗，爵禄荣昌”、“七杀寅申子午，一生爵禄荣昌”、“朝斗仰斗，爵禄荣昌”、“七杀守命，庙旺，有谋略，见紫微加见诸吉，必为大将”、“七杀守命，得左右昌曲拱照，掌生杀之权，富贵出众”、“七杀入命身宫，见吉，亦必历受艰辛”。";
		if (this.minggong == 0 || this.minggong == 6 || this.minggong == 2 || this.minggong == 8)
			if (this.CountStrings(txt, ["七杀=庙", "七杀=旺"]) >= 1)
				this.setgoodgeju("七杀朝斗格", qishachaodou);

		var matoudaijian = this.goodstr("马头带箭格") +
			"①天同、太阴在午宫坐命，丙戊年生人，有擎羊在命宫，再会吉星，为马头带箭格。其余年生人不入此格②贪狼在午宫坐命，丙戊年生人有擎羊同在命宫，为马头带箭格，有火铃、辅弼同宫加会更吉。盖午为马，擎羊为箭，故名此格。" +
			"入此格者，主武职贵显，统兵边关。今人则宜经商，创办实业。但要远走他方，奔波外出方能开运，早年多辛苦劳碌而无所成，中晚年能有意外好运，克服困难，而有大富贵。此格女命不宜见之，不一定能有富贵，反属刑克之命。" +
			"经云：“马头带箭，镇御边疆”、“贪狼擎羊居午位，丙戊生人镇边疆”（富而且贵）、“擎羊贪狼同在午宫守命，威镇边疆（只是不耐久）”。";
		if (this.minggong == 6)
			if (this.CountStrings(txt, ["天同", "太阴", "擎羊"]) == 3)
				this.setgoodgeju("马头带箭格", matoudaijian);

		var jujitonglin = this.goodstr("巨机同临格") +
			"又叫“巨机同宫格”，乃指巨门、天机二星在卯宫坐命，与禄存、科权禄、左右、昌曲同宫加会，为此格。合此格者，有一流的学问，宜从政，主大富大贵，名扬世界。格局稍次者，经商可成为富翁。巨机在酉宫守命不是此格。女命，不论在卯在酉，风骚。诗曰：" +
			"巨门庙旺遇天机，高节清风世罕稀。学就一朝腾达去，巍巍德业震华夷。" +
			"经云：“巨机同宫，公卿之位”、“巨机居卯，乙辛丙生人位至公卿”、“女命，巨门天机为破荡（卯酉同论）”。";
		if (this.minggong == 3)
			if (this.CountStrings(txt, ["天机", "巨门"]) == 2)
				this.setgoodgeju("巨机同临格", jujitonglin);

		var tianyigongming = this.goodstr("天乙拱命格（坐贵向贵）") +
			"①天魁、天钺一在命宫，一在身宫，②或天魁、天钺一在命宫，一在迁移宫，身宫守迁移更佳。须命宫主星庙旺，三方四正有吉星加会，方入此格。本格生人，有学识，能取得高学历，为人端庄，一生多助人，亦多得众人相助，尤其逢凶化吉，遇难呈祥，富贵。若命再无吉星，纵有魁钺，虽能得人助，仍属普通之人。诗曰：" +
			"天贵相随命里来，定应名占少年魁。文章盖世追班马，异时当为宰相才。" +
			"经云：“天魁天钺，盖世文章”、“魁钺同行，位居台辅”、“魁星临命，位列三台”、“魁钺命身多折桂”、“贵人贵乡，逢之富贵”。";
		if (this.minggong == this.shengong) {
			if (this.CountStrings(txt, ["天魁", "天钺"]) == 2)
				this.setgoodgeju("天乙拱命格（坐贵向贵）", tianyigongming);
		}
		else if (this.CountStrings(txt, ["天魁", "天钺"]) == 1 && this.CountStrings(this._4hua[this.shengong], ["天魁", "天钺"]) == 1)
			this.setgoodgeju("天乙拱命格（坐贵向贵）", tianyigongming);
		else if (this.CountStrings(txt, ["天魁", "天钺"]) == 1 && this.CountStrings(this._4hua[((this.minggong + 6) % 12)], ["天魁", "天钺"]) == 1)
			this.setgoodgeju("天乙拱命格（坐贵向贵）", tianyigongming);

		var sanqijiahui = this.goodstr("三奇加会格") +
			"化禄化权化科三化曜为三奇，此三化曜会于命宫三方四正，便为三奇加会格。入本格者，志向远大，运气极佳，有侥幸之惠，多意外好运及贵人之助，一生能成就大事大业。三合正星入庙旺及三化曜亦庙旺得地，则为闻名世界之格，巨富大贵。若命宫星辰庙旺，且三方会有凶星，仍有富贵声名，只是比前者不及尔。若命宫星辰落陷且三方会有四煞劫空，或命重犯空亡者，虽有才华亦怀才不遇，难有大成，反减为平常之格。若宫中本无吉星调配得宜，纵有科权禄三奇，亦难有大器可能，反之若吉星配值得宜，即有化忌，地劫、天空也只是减些福尔，亦无大碍，运用之法端在一心，非文字所可尽言。大凡命有三奇者，绝非等闲之辈，观其人其事必有异于常人之处。";
		if (this.CountStrings(txt + txt1 + txt2 + this._4hua[((this.minggong + 6) % 12)], ["禄 ", "科", "权"]) == 3)
			this.setgoodgeju("三奇加会格", sanqijiahui);

		var quanluxunfeng = this.goodstr("权禄巡逢格") +
			"①化禄和化权守命宫，为此格。②化禄化权在命宫三方四正加会。";
		if (this.CountStrings(txt, ["权", "禄 "]) == 2)
			this.setgoodgeju("权禄巡逢格", quanluxunfeng);
		else if (this.CountStrings(txt + txt1 + txt2 + this._4hua[((this.minggong + 6) % 12)], ["禄 ", "权"]) == 2)
			this.setgoodgeju("权禄巡逢格", quanluxunfeng);

		var kequanlujia = this.goodstr("科权禄夹格") +
			"化禄、化权、化科这三化曜有二居命宫两侧，即在邻宫来夹命，为此格。";
		if (this.CountStrings(this._4hua[((this.minggong + 1) % 12)], ["禄 ", "科", "权"]) >= 1 &&
			this.CountStrings(this._4hua[((this.minggong + 11) % 12)], ["禄 ", "科", "权"]) >= 1)
			this.setgoodgeju("科权禄夹格", kequanlujia);

		var shuanglujiaming = this.goodstr("双禄夹命格") +
			"禄存和化禄在邻宫来夹命宫是也。";
		if (this.CountStrings(this._4hua[((this.minggong + 1) % 12)], ["禄"]) == 1 &&
			this.CountStrings(this._4hua[((this.minggong + 11) % 12)], ["禄"]) == 1)
			this.setgoodgeju("双禄夹命格", shuanglujiaming);

		var zuoyoutonggong = this.goodstr("左右同宫格") +
			"命身宫入丑未，左辅右弼同宫，更与吉星同宫和加会者，为本格。入此格者，其人必为端庄高士，性喜助人，富计划、企划能力，凡事可解凶，圆满达成，加会众吉，主富贵，但多是居于辅佐他人的位置。若三方四正多凶少吉，仍属普通之人。诗曰：" +
			"命宫辅弼有根源，天地清明万象鲜。德业巍然人敬重，名宣金殿玉阶前。" +
			"经云：“左辅右弼，秉性克宽克厚”、“左辅右弼，终身福厚”、“墓逢左右，尊居八座之贵”、“左右同宫，披罗衣紫”。";
		if (this.minggong == 1 || this.minggong == 7)
			if (this.CountStrings(txt, ["左辅", "右弼"]) == 2)
				this.setgoodgeju("左右同宫格", zuoyoutonggong);

		var wenguiwenhua = this.goodstr("文桂文华格") +
			"命身宫入丑未，文昌文曲同宫，更加会吉星者，为本格。安命在丑，昌曲在未，安命在未，昌曲在丑照命亦是。入此格者，其人必举止优雅，性情温和，聪明勤学，多才多艺。命及三方会吉星，在文艺、学术上必有较大成就，亦有政治上之发展，主富贵。若与凶煞同宫加会则破格，主其人会以巧艺为生，于偏业、特殊行业上有发展。诗曰：" +
			"丹书一道自天来，唤起人间经济才。命内荣华真可羡，等闲平步上蓬莱。" +
			"经云：“文桂文华，佐九重于尧殿”、“文昌文曲，为人多学多能”、“昌曲临于丑未，时逢卯酉，近天颜”、“女人昌曲，聪明富贵只多淫”。";
		if (this.minggong == 1 || this.minggong == 7)
			if (this.CountStrings(txt, ["文昌", "文曲"]) == 2)
				this.setgoodgeju("文桂文华格", wenguiwenhua);

		var tanwutonghang = this.goodstr("贪武同行格") +
			"即贪狼、武曲在四墓守照命身宫。此格有二，命身宫在丑未，武曲贪狼二星坐守；贪狼、武曲在辰戌一守命宫，一守身宫。";
		if (this.minggong == 1 || this.minggong == 7)
			if (this.CountStrings(txt + this._4hua[((this.minggong + 6) % 12)], ["身宫", "贪狼", "武曲"]) == 3)
				this.setgoodgeju("贪武同行格", tanwutonghang);
		if (this.minggong == 4 || this.minggong == 10)
			if (this.CountStrings(txt + this._4hua[((this.minggong + 6) % 12)], ["身宫", "贪狼", "武曲"]) == 3)
				this.setgoodgeju("贪武同行格", tanwutonghang);

		var sanhehuotan = this.goodstr("三合火贪格（贪火相逢）") +
			"贪狼守命，遇火星在命或三方拱照为此格。火星与贪狼同守命垣为佳，三合次之，若贪狼居于辰戌丑未，与禄存、科权禄、左右、魁钺加会，则为极美之格，主大富大贵。其人或以武职立功，掌握国家军警大权，或经商暴发，财运亨通。喜与铃星加会。诗曰：" +
			"贪狼遇火必英雄，指日边庭立大功。更得福元临庙旺，帐呼千万虎贲门。" +
			"四墓宫中福气浓，提兵指日立边功。火星拱会诚为贵，名震诸夷定有封。";
		if (this.CountStrings(txt, ["贪狼"]) == 1 && this.CountStrings(txt + txt1 + txt2, ["火星"]) == 1)
			this.setgoodgeju("三合火贪格（贪火相逢）", sanhehuotan);

		var tanlingchaoyuan = this.goodstr("贪铃朝垣格（贪铃相逢）") +
			"贪狼守命，遇铃星在命或三方拱照为此格。铃星与贪狼同守命垣为佳，三合次之。";
		if (this.CountStrings(txt, ["贪狼"]) == 1 && this.CountStrings(txt + txt1 + txt2, ["铃星"]) == 1)
			this.setgoodgeju("贪铃朝垣格（贪铃相逢）", tanlingchaoyuan);

		var zifujiaming = this.goodstr("紫府夹命格") +
			"命宫在寅申，遇紫微与天府来夹，命宫三方有吉方作富贵，无吉平常；";
		if (this.minggong == 2 || this.minggong == 8)
			if (this.CountStrings(this._4hua[((this.minggong + 1) % 12)], ["紫微", "天府"]) == 1 &&
				this.CountStrings(this._4hua[((this.minggong + 11) % 12)], ["紫微", "天府"]) == 1)
				this.setgoodgeju("紫府夹命格", zifujiaming);

		var riyuejiaming = this.goodstr("日月夹命格") +
			"命宫在丑未，有太阳与太阴来夹，又为“日月夹财格”，缘日月夹命者，唯天府在命，或武曲贪狼在命，天府与武曲同属财星，故为“夹财”，守财帛宫亦为“日月夹财格”。命宫三方有吉方作富贵论，无吉加仍属平常；";
		if (this.minggong == 1 || this.minggong == 7)
			if (this.CountStrings(this._4hua[((this.minggong + 1) % 12)], ["太阴", "太阳"]) == 1 &&
				this.CountStrings(this._4hua[((this.minggong + 11) % 12)], ["太阴", "太阳"]) == 1)
				this.setgoodgeju("日月夹命格", riyuejiaming);

		var zuoyoujiaming = this.goodstr("左右夹命格") +
			"命宫在丑未，左辅与右弼来夹，命宫三方有吉星方作吉论，无吉平常，仅得人缘而已；";
		if (this.minggong == 1 || this.minggong == 7)
			if (this.CountStrings(this._4hua[((this.minggong + 1) % 12)], ["左辅", "右弼"]) == 1 &&
				this.CountStrings(this._4hua[((this.minggong + 11) % 12)], ["左辅", "右弼"]) == 1)
				this.setgoodgeju("左右夹命格", zuoyoujiaming);

		var changqujiaming = this.goodstr("昌曲夹命格") +
			"命宫在丑未，文昌与文曲来夹，又为“文星暗拱格”。凡昌曲夹命者多主贵，宜从政治、学术、管理等职，必可成功。";
		if (this.minggong == 1 || this.minggong == 7)
			if (this.CountStrings(this._4hua[((this.minggong + 1) % 12)], ["文昌", "文曲"]) == 1 &&
				this.CountStrings(this._4hua[((this.minggong + 11) % 12)], ["文昌", "文曲"]) == 1)
				this.setgoodgeju("昌曲夹命格", changqujiaming);

		var lianzhenwenwu = this.goodstr("廉贞文武格") +
			"廉贞在寅申入庙，与文昌、武曲拱照为此格。诗曰：" +
			"命中文武喜朝垣，入庙平生福气全。纯粹文能高折桂，征战武定镇三边。" +
			"经云：“廉贞遇文昌，好礼乐”。";
		if (this.minggong == 2 || this.minggong == 8)
			if (this.CountStrings(txt, ["廉贞=庙"]) == 1 &&
				this.CountStrings(txt + txt1 + txt2, ["文昌", "武曲"]) == 2)
				this.setgoodgeju("廉贞文武格", lianzhenwenwu);

		var quanshahualu = this.goodstr("权煞化禄格") +
			"即羊陀火铃坐命入庙是也，须命宫三方四正有吉星加会方是此格。";
		if (this.CountStrings(txt, ["擎羊", "陀罗", "火星", "铃星", "禄 "]) == 5)
			this.setgoodgeju("权煞化禄格", quanshahualu);

		var luheyuanyang = this.goodstr("禄合鸳鸯格") +
			"禄存与化禄同守命宫。人命得此，一生财运亨通，无不大富，多为私营企业老板、公司董事、房地产商人等。不然也会是政府高级官员，而且因从政而发财。诗曰：" +
			"禄合鸳鸯福气高，斯人文武必英豪。堆金积玉身荣贵，爵位高迁衣紫袍。" +
			"经云：“双禄重逢，终身富贵”。";
		if (this.CountStrings(txt, ["禄 ", "禄存"]) == 2)
			this.setgoodgeju("禄合鸳鸯格", luheyuanyang);

		var shuangluchaoyuan = this.goodstr("双禄朝垣格") +
			"命宫三方四正有禄存和化禄加会。诗曰：" +
			"财官二处与迁移，双禄逢之最有益。德合乾坤人敬重，滔滔富贵世稀奇。" +
			"经云：“双禄重逢，终身富贵”。";
		if (this.CountStrings(txt + txt1 + txt2 + this._4hua[((this.minggong + 6) % 12)], ["禄 ", "禄存"]) == 2)
			this.setgoodgeju("双禄朝垣格", shuangluchaoyuan);

		var lumapeiyin = this.goodstr("禄马佩印格") +
			"禄存或化禄与天马、天相同宫庙旺守命。";
		if (this.CountStrings(txt, ["天马", "天相"]) == 2 && this.CountStrings(txt, ["禄存", "禄 "]) > 0)
			this.setgoodgeju("禄马佩印格", lumapeiyin);

		var lumajiaochi = this.goodstr("禄马交驰格") +
			"命宫三方四正有禄存（或化禄），更有天马加会者，为此格。此格生人，多发财异乡或获取远方之财，环境变化大，多外出、旅行，事业上主奔波劳碌而招财。会吉星众，必为大富之人。" +
			"经云：“禄马最喜交驰”、“天禄天马，惊人甲第”。";
		if (this.CountStrings(txt + txt1 + txt2 + this._4hua[((this.minggong + 6) % 12)], ["天马", "禄存"]) == 2 || this.CountStrings(txt + txt1 + txt2 + this._4hua[((this.minggong + 6) % 12)], ["天马", "禄 "]) == 2) {
			this.setgoodgeju("禄马交驰格", lumajiaochi);
		}

		var eryaotonglin = this.goodstr("二曜同临格") +
			"安命丑宫，日月在未宫；安命未宫，日月在丑宫，三方与禄存、科权禄、左右、昌曲加会为此格。诗曰：" +
			"命宫日月喜相逢，更遇科权在化中。此命武官须建节，文官定主位三公。" +
			"经云：“丑宫立命日月朝，丙戊生人福禄饶。正宫平常中局论，对照富贵祸皆消”、“日月守命，不如照合并明”、“日月同未，安命丑，侯伯之材（吉化方佳，丙戊辛生人吉）”、“日月同丑，安命未，侯伯之材（吉化方佳，丙辛生人吉）”、“日月科禄丑未中，定是方伯公”。";
		if (this.minggong == 1 || this.minggong == 7)
			if (this.CountStrings(this._4hua[((this.minggong + 6) % 12)], ["太阴", "太阳"]) == 2)
				this.setgoodgeju("二曜同临格", eryaotonglin);

		var danchiguichi = this.goodstr("丹墀桂墀格") +
			"太阳在辰宫或巳宫坐命，太阴在酉宫或戌宫坐命，二星皆临旺地，太阳为丹墀，太阴为桂墀，故为此格。命入此格，皆主少年得志。如考上大学，继承财产，出国读书，在非常好的公司工作，年纪轻轻被重用，作为未来接班人，或经商发财，等等。三方四正会吉星，主今后还有其锦绣前程。诗曰：" +
			"二曜常明正得中，才华声势定其雄。少年际得风云会，一跃天池便化龙。" +
			"经去：“丹墀桂墀，早遂青云之志”。";
		if (this.minggong == 4 || this.minggong == 5)
			if (this.CountStrings(txt, ["太阳"]) == 1)
				this.setgoodgeju("丹墀桂墀格", danchiguichi);
		if (this.minggong == 9 || this.minggong == 10)
			if (this.CountStrings(txt, ["太阴"]) == 1)
				this.setgoodgeju("丹墀桂墀格", danchiguichi);

		var jiadidengyong = this.goodstr("甲第登庸格") +
			"化科在命宫，化权在三方朝是。此格聪明过人，必考入高等学府，且主其人文章冠世，或在学术、科技上有创新和发明。又宜从任管理之职，或在政治上作投机。诗曰：" +
			"禹门一跃便腾空，头角峥嵘大浪中。三汲飞翻合变化，风云平地起蛟龙。" +
			"经云：“科命权朝，登庸甲第”、“科权对拱，跃三汲于禹门”。";
		if (this.CountStrings(txt, ["科"]) == 1 && this.CountStrings(txt1 + txt2, ["权"]) == 1)
			this.setgoodgeju("甲第登庸格", jiadidengyong);

		var keminghuilu = this.goodstr("科名会禄格") +
			"化科在命宫，化禄在三方来朝。诗曰：" +
			"科名在命数中躔，卓越才华远近传。一跃过登三汲浪，衣冠济楚侍君前。" +
			"经云：“科禄命逢兼合吉，威权压众相王朝”。";
		if (this.CountStrings(txt, ["科"]) == 1 && this.CountStrings(txt1 + txt2, ["禄 "]) == 1)
			this.setgoodgeju("科名会禄格", keminghuilu);

		var jixiangliming = this.goodstr("极向离明格") +
			"紫微在午宫坐命，三方四正无煞凑，合此格。紫微为北极，午宫属离卦位，故名。按此格，乃紫微在午入庙，若不加煞星，纵无吉辅，亦主富贵不小。若会吉星，得此格者，不是朝中显宦，也是商界巨富，格局之佳，远胜其它。紫微在子坐命，远远不及在午宫之威势。诗曰：" +
			"乘骢司谏肃威风，气象堂堂立殿中。几转王庭分内事，终身富贵位三公。" +
			"经云：“紫微居午无煞凑，位至公卿”、“紫微居午，无羊陀，甲丁己年生人，位至公卿”。";
		if (this.minggong == 6)
			if (this.CountStrings(txt, ["紫微"]) == 1)
				this.setgoodgeju("极向离明格", jixiangliming);

		var huaxingfangui = this.goodstr("化星返贵格") +
			"天同在戌宫坐命，丁年生人遇之；巨门在辰宫坐命，辛年生人遇之，此为化星遇贵格。缘天同在戌，为平宫，本为不利，但丁年生人，寅宫有太阴化禄、天机化科，命宫天同化权，对宫巨门化忌来冲，反为大富大贵之格。巨门在辰，为平宫，本为不利，辛年生人巨门化禄，与酉宫禄存暗合，财帛宫有太阳化权，必主富贵，若有文昌化忌在命或迁移，不作凶论，亦主富贵。若加火铃空劫，则破格。诗曰：" +
			"三星变化最无穷，同戌相逢巨遇龙。生值丁辛须富贵，青年公正庙堂中。" +
			"经去：“天同戌宫为反背，丁人化吉主大贵”、“巨门辰戌为陷地，辛人化吉禄化吉禄峥嵘”、“辰戌应嫌陷巨门，辛人命遇反为奇格”、“巨日拱照为奇格”。";
		if (this.minggong == 10)
			if (this.CountStrings(txt, ["天同"]) == 1 && this.niangz[0] == "丁")
				this.setgoodgeju("化星返贵格", huaxingfangui);
		if (this.minggong == 4)
			if (this.CountStrings(txt, ["巨门"]) == 1 && this.niangz[0] == "辛")
				this.setgoodgeju("化星返贵格", huaxingfangui);

		var jiangxingdedi = this.goodstr("将星得地格（武曲守垣）") +
			"武曲庙旺守命，与禄存、科权禄、左右、昌曲、魁钺加会为本格。诗曰：" +
			"将星入庙实为祥，位正官高到处强。掠地攻城多妙筹，威风凛凛镇边疆。" +
			"经云：“武曲庙垣，威名赫奕”、“武曲入庙，与昌曲同宫，出将入相”、“武曲魁钺居庙旺，财赋之官”、“武曲禄马同宫，发财远乡”。";
		if (this.CountStrings(txt, ["武曲=庙", "武曲=旺"]) == 1)
			this.setgoodgeju("将星得地格（武曲守垣）", jiangxingdedi);

		var riyuezhaobi = this.goodstr("日月照壁格") +
			"太阳太阴在丑未，坐田宅宫（此必为破军在辰戌宫坐命），与禄存、科权禄、左右、昌曲、魁钺同宫加会。命入日月照壁格，主大富，尤多不动产，如楼宇、田土、山林、豪宅，或能继承祖业。本格生人，仍须命宫三方四正有吉星并吉化，方为真格，若命宫三方会凶煞多，仍属贫*之命，田宅宫之吉并无大用。";
		if (this.minggong == 4 || this.minggong == 10)
			if (this.CountStrings(this._4hua[1] + this._4hua[7], ["太阴", "太阳"]) == 2)
				this.setgoodgeju("日月照壁格", riyuezhaobi);

		var kemingluan = this.goodstr("科明禄暗格（明珠暗禄）") +
			"即化科守命宫，命宫之暗合宫有禄存是也。" +
			"甲年生人武曲在亥化科守命，而寅宫有禄存暗合。" +
			"乙年生人紫微在戌化科守命，而卯宫有禄存（又为权禄夹命格）；" +
			"丙年生人文昌在申化科守命，而巳宫有禄存暗合；" +
			"丁年生人天机在未化科守命，而午宫有禄存暗合；" +
			"戊年生人右弼在申化科守命，而巳宫有禄存暗合；" +
			"己年生人天梁在未化科守命，而午宫有禄存暗合；" +
			"庚年生人天同在巳化科守命，而申宫有禄存暗合；" +
			"辛年生人文曲在辰化科守命，而酉宫有禄存暗合；" +
			"壬年生人左辅在寅化科守命，而亥宫有禄存暗合；" +
			"癸年生人太阴在丑化科守命，而子宫有禄存暗合。" +
			"经云：“科明禄暗，位列三台”。";
		if (this.CountStrings(txt, ["科"]) == 1 && this.CountStrings(this._4hua[((13 - this.minggong) % 12)], ["禄存"]) == 1)
			this.setgoodgeju("科明禄暗格（明珠暗禄）", kemingluan);

		var mingwuzhengyao = this.badstr("命无正曜格") +
			"命宫无紫微天府星系十四正曜，不论命宫是否有禄存、羊陀、火铃、左右、昌曲、魁钺等甲级星，只要无紫府十四正曜，均为命无正曜格。";
		if (this.CountStrings(txt, ["紫微", "武曲", "天机", "贪狼", "太阳", "天同", "廉贞", "天府", "巨门", "太阴", "天相", "天梁", "七杀", "破军"]) == 0)
			this.setbadgeju("命无正曜格", mingwuzhengyao);

		var jijumaoyou = this.badstr("极居卯酉格") +
			"紫微贪狼在卯酉坐命，又遇煞星。紫贪卯酉，并非个个都是贫*之命或僧人道士。若遇紫微化权、化科，贪狼化禄、化权，或禄存在命宫，或加会火星、铃星、左辅、右弼、文昌、文曲等以上情形，均不能以贫*定之，反主富贵有成（女命不宜见昌曲）。" +
			"若无上述任何一个星曜会合，而命宫三方见擎羊、地劫、天空、旬空、截空、化忌、天哭、天虚、孤辰、寡宿等星宿，必一生无成，贫穷孤单，名利俱无，宜出家为僧道，空亡若是在命宫，其人与宗教之缘份愈强，故古诗云：" +
			"极居卯酉遇劫空，十人之命九为僧。" +
			"又云：" +
			"借问此身何处去，衲衣削发居空门。";
		if (this.minggong == 3 || this.minggong == 9)
			if (this.CountStrings(txt, ["紫微", "贪狼"]) == 2 &&
				this.CountStrings(txt1 + txt2 + txt, ["擎羊", "地劫", "天空", "旬空", "截空", "化忌", "天哭", "天虚", "孤辰", "寡宿", "贪狼"]) >= 2)
				this.setbadgeju("极居卯酉格", jijumaoyou);


		var shagonglianzhen = this.badstr("杀拱廉贞格") +
			"①廉贞、七杀二星分守身宫和命宫；②廉贞七杀在丑未宫守命；③七杀在卯酉守命，三合有廉贞。以上诸等，命宫三方四正无吉星加会，反而加会羊陀火铃天刑化忌劫空等诸多恶曜，便为杀拱廉贞之格。古诗云：" +
			"贞逢七杀实堪伤，十载淹留有祸殃。运至经求多不遂，钱财胜似雪流汤。" +
			"此格生人，不但贫穷多灾，而且破败不堪。须注意者，要三方四正不见吉星方作此断，如不详审，则容易判断错误。因此有云：“廉贞、七杀，反为积富之人”、“廉贞遇七杀，显武职”。" +
			"经去：“廉贞主下*之孤寒”、“七杀廉贞同宫，主残废，又主痨病”、“七杀廉贞同位，路上埋尸”。";
		if (this.CountStrings(txt, ["廉贞", "七杀"]) == 1 && this.CountStrings(this._4hua[this.shengong], ["廉贞", "七杀"]) == 1)
			this.setbadgeju("杀拱廉贞格", shagonglianzhen);
		else if (this.CountStrings(txt, ["廉贞", "七杀"]) == 2)
			this.setbadgeju("杀拱廉贞格", shagonglianzhen);
		else if (this.CountStrings(txt, ["七杀"]) == 1 && (this.minggong == 3 || this.minggong == 9)) {
			if (this.CountStrings(txt1 + txt2, ["廉贞"]) == 1)
				this.setbadgeju("杀拱廉贞格", shagonglianzhen);
		}

		var jufengsisha = this.badstr("巨逢四煞格") +
			"①巨门与火铃羊陀守命宫，居陷地；②巨门守命，四煞守身或巨门守身，四煞守命，居陷地。古诗云：" +
			"巨门落陷在身宫，四煞偏遇命里逢。若是吉星无救解，必然流配远方中。" +
			"此格生人，贫穷多灾，多是非，并具犯罪倾向，恶者恐至残废、坐牢、凶死。女命，心性狠毒，淫*无耻，极克夫。" +
			"经云：“巨火擎羊，防遭缢死”、“巨门四煞于身命、疾厄，羸黄困弱”、“巨门火铃，逢恶限，死于外道”、“巨门火铃，无紫微禄存压制，决配千里，遭凶”、“巨门火铃，三合煞凑，必遭火厄”、“巨门守命，见羊陀，男女邪淫”、“巨门四煞陷而凶”。";
		if (this.CountStrings(txt, ["火星", "擎羊", "陀罗", "铃星", "巨门"]) == 5 ||
			(this.CountStrings(txt, ["火星", "擎羊", "陀罗", "铃星"]) == 4 && this.CountStrings(this._4hua[this.shengong], ["巨门"]) == 1) ||
			(this.CountStrings(this._4hua[this.shengong], ["火星", "擎羊", "陀罗", "铃星"]) == 4 && this.CountStrings(txt, ["巨门"]) == 1))
			this.setbadgeju("巨逢四煞格", jufengsisha);

		var matoudaijian = this.badstr("马头带剑格") +
			"命在宫午，擎羊单守。擎羊在午本为陷地，此格主大凶。命宫在卯、酉、子，遇擎羊单守，亦主大凶。三方遇火铃劫空忌星天刑，必煞夭折。命入此格，其人外表豪迈大度，其实狠毒*狡，残暴凶恶，不但品性不端，且主一生招凶，刑妻克子，身患恶疾，具犯罪倾向，中年夭亡。命有吉星入庙，其人亦颇有豪气，干脆利落。行限遇擎羊单在午或卯，亦主有灾。故古诗云：" +
			"羊刃切忌午之方，若来陷内最为殃。刑妻克子生闲事，残病中年要早亡。" +
			"经云：“擎羊居子午卯酉陷地，作祸兴殃，刑克极重，甲戊庚壬生人必有凶祸”、“擎羊在子午卯酉守命，非夭折则主刑伤”、“擎羊火星在陷地守命，下格”。";
		if (this.minggong == 6)
			if (this.CountStrings(txt, ["擎羊"]) == 1)
				this.setbadgeju("马头带剑格", matoudaijian);

		var minglifengkong = this.badstr("命里逢空格") +
			"①命宫在巳亥，无正曜，地劫天空二星同在命宫；②地劫、天空单守命宫。以上二者，三合方及对宫无吉解救，便为命里逢空之格。命有此格，不聚财，漂泊异地，一世贫穷不遇，万事成空，乃下*之格也。再逢煞星，多主夭折。故古诗云：" +
			"空劫来临吉曜无，求名求利总成虚。清闲孤独方延寿，富贵荣华过隙驹。" +
			"劫空为愁最害人，才智英雄误一生。只好为僧并学术，堆金积玉也须贫。" +
			"经云：“生逢天空，犹如半天折翅；命中遇劫，恰如浪里行船”、“命里逢空，不飘流即主疾苦”、“劫空二星守命，遇吉祸轻，遇凶则凶”、“地劫守于身命，主人作事疏狂，不行正道，好为邪癖之事；天空守于身命，主人作事虚空，不行正道，成败多端，不聚财”。";
		if (this.minggong == 5 || this.minggong == 11)
			if (this.CountStrings(txt, ["天空", "地劫"]) == 2)
				this.setbadgeju("命里逢空格", minglifengkong);

		var tianlianggongyue = this.badstr("天梁拱月格") +
			"天梁在巳、亥、申为陷地，太阴在卯、辰、巳、午、未为陷地。①天梁在陷地守命与太阴加会；②太阴在陷地守命与天梁加会。以上二者，命宫及三方无禄存、科权禄、左右、昌曲、魁钺等吉星同宫和加会，反而会有羊陀火铃劫空刑姚化忌大耗等凶星，为天梁拱月格。人命逢此，穷困而事业无成，不聚财，飘流在外，不务正业，成事不足，败事有余。男命浪荡，好酒色嫖赌，女命多淫，私通内乱，故古诗云：" +
			"月梁落陷最堪伤，必定飘篷在外乡。唱舞酣歌终日醉，风流荡尽祖田庄。" +
			"逢吉星则不作此论。" +
			"经云：“梁酉、月巳，却作飘篷之客”、“天梁、太阴，却作飘篷之客”、“天梁天马陷，飘荡无疑”、“天梁陷地，遇火羊破局，下*、孤寒、夭折”、“梁同对居巳亥，男浪荡、又多淫”、“月曜、天梁，女淫贫”、“太阴守命，落陷，与羊陀火铃同宫，肢体伤残”。";
		if (this.minggong == 5 || this.minggong == 8 || this.minggong == 11)
			if (this.CountStrings(txt, ["天梁"]) == 1 && this.CountStrings(txt1 + txt2, ["太阴"]) == 1)
				this.setbadgeju("天梁拱月格", tianlianggongyue);

		var wenxingyujia = this.badstr("文星遇夹格") +
			"文昌或文曲守命，遇空劫二星来夹。命无吉星，三方不加吉而会凶，作贫*论之，纵有才华，终身不遇，凡事易半途而废，抑或学非所用，从事自己并不喜爱的职业，抱恨终身，昌曲守身宫二星来夹亦然。若命宫正星庙旺化吉，三方又会吉星者，不作此论。故古诗云：" +
			"夹地文星遇守身，一生劳碌败无成。逢财得禄世间好，数尽还教夭且贫。";

		if (this.CountStrings(txt, ["文曲", "文昌"]) == 1)
			if (this.CountStrings(this._4hua[((this.minggong + 1) % 12)], ["天空", "地劫"]) == 1 &&
				this.CountStrings(this._4hua[((this.minggong + 11) % 12)], ["天空", "地劫"]) == 1)
				this.setbadgeju("文星遇夹格", wenxingyujia);

		var wenxingshiwei = this.badstr("文星失位格") +
			"即乃文昌文曲落陷坐命，又遇煞侵（如与四煞、劫空、天刑、化忌同宫和加会），即为文星失位，纵有文章亦难科第。用现代的话来说，就是空有才华，也是怀才不遇。或平时学习成绩优良，关键时刻离分数线就差那么几分（其实正考考不上，可以读自费嘛，而且现在的大学可以缴钱去读）。其人之学说、理论、人生观必有其怪异之处，难为世人所接受，甚或研习旁门左道之术，以及宗教、玄学、法术等。故古诗云：" +
			"文星入命本为奇，冲陷还应事阻疑。任是灯窗勤着力，功名常于白头时。" +
			"经云：“昌曲陷宫凶煞破，虚誉之隆（凶煞即羊陀火铃空劫）”、“文昌陷地加羊、火，巧艺之人，带疾亦能延寿，有斑痕”、“文曲单居身命，更逢恶煞凑合，无名，便佞之人”。";

		if (this.CountStrings(txt, ["文曲=陷", "文昌=陷"]) == 1 && this.CountStrings(txt + txt1 + txt2, ["陀罗", "火星", "铃星", "擎羊", "忌"]) >= 1)
			this.setbadgeju("文星失位格", wenxingshiwei);

		var kexingshacou = this.badstr("科星煞凑格") +
			"化科星守命身宫，而凶煞冲凑太甚。命逢此格，虽然学问不错，有文章秀气，但为贫寒的读书人。现在讲来，多是平时学习优秀，而高考运气欠佳的人，终难升学。化科与煞曜会合，多主恶名在外，遭人毁谤的时候多，又主有牢狱之厄。古人实在是把读书中举看得太重要了，在现代社会自然要对此作某些修正，可作出某些相似性的解释。故古诗云：" +
			"命里科曜正为清，凶煞多为林下人。纵然吉守亦失局，读书至老无功名。" +
			"经云：“苗而不秀，科名陷于凶神”、“化科嫌逢截空、旬空、劫空”、“化科守身命，逢恶曜，亦为文章秀士”、“科星居于陷地，灯火辛勤”。";

		if (this.CountStrings(txt, ["科"]) == 1 && this.CountStrings(txt, ["旬空", "天空", "地劫", "截劫"]) > 1)
			this.setbadgeju("科星煞凑格", kexingshacou);

		var kexingfengpo = this.badstr("科星逢破格") +
			"化科星在命宫，遇羊陀火铃劫空冲凑，难科第。故古诗云：" +
			"细把科名仔细详，若逢恶煞贵名难。连年居在孙山外，只着高明一士看。" +
			"经云：“苗而不秀，科名陷于凶神”。";
		if (this.CountStrings(txt, ["科"]) == 1 && this.CountStrings(txt, ["擎羊", "陀罗", "火星", "铃星"]) > 1)
			this.setbadgeju("科星逢破格", kexingfengpo);

		var kuiyuexiongchong = this.badstr("魁钺凶冲格") +
			"魁钺入命身宫，而逢众多凶煞同宫、加会，而又无解救。则魁钺之吉兆则不显矣。故古诗云：“魁钺文星守贵荣，何愁金榜不题名。若煞凶众无星救，痼疾缠身总无情”。" +
			"经云：“魁钺重逢羊陀空劫凑，痼疾尤多”。";
		if (this.CountStrings(txt, ["天魁", "天钺"]) == 2 && this.CountStrings(txt, ["擎羊", "陀罗", "天空", "地劫"]) > 1)
			this.setbadgeju("魁钺凶冲格", kuiyuexiongchong);

		var wutanshoushen = this.badstr("武贪守身格") +
			"命无正曜，武曲贪狼二星守身宫。此格必是卯酉时生人，身宫在迁移，武曲贪狼居于迁移宫。若命宫三方四正凶煞多会，少年夭折，不然一生贫*。若命宫三方四正会有吉星，武曲贪狼又得吉化，主先贫后富，晚年获福。此格生者，多是技艺、艺术之人。故古诗云：" +
			"命无正曜值纵星，少年定是作孤贫。武贪狼得位终须吉，晚景方为富庶人。" +
			"经云：“贪狼武曲同守身，无吉，命反不长”、“武曲贪狼加煞忌，技艺之人”、“贪狼武曲同宫，先贫而后富”、“贪狼武曲同宫，为人谄佞*贪，自私自利，无公德心”。";
		if (this.CountStrings(this._4hua[this.shengong], ["武曲", "贪狼"]) == 2 && this.CountStrings(txt, ["紫微", "武曲", "天机", "贪狼", "太阳", "天同", "廉贞", "天府", "巨门", "太阴", "天相", "天梁", "七杀", "破军"]) == 0)
			this.setbadgeju("武贪守身格", wutanshoushen);

		var jujihuayou = this.badstr("巨机化酉格") +
			"巨门天机在酉宫坐命，有化忌同宫，为此格。";
		if (this.minggong == 9)
			if (this.CountStrings(txt, ["天机", "巨门", "忌"]) == 3)
				this.setbadgeju("巨机化酉格", jujihuayou);

		var xingqiujiayin = this.badstr("刑囚夹印格") +
			"①盖天相为印，廉贞有囚，擎羊化气为刑，若论“夹”，则天相不可能被廉贞和擎羊二星所夹。实为廉贞天相在子午宫坐命，有擎羊同宫，故得此名，以丙年生人廉贞在午化忌最凶。此格生人，必为罪犯，有牢狱之灾，遭法律之制裁，并易遭凶死。女命，会有流产、开刀、血光之事，且夫妻宫见陀罗贪狼，多主丈夫死得早。②廉贞天相与天刑同宫，亦为“刑囚夹印”主为勇武之人，加吉星可望富贵，居于命宫三方，多为军队、警察局或其它司法部门工作。" +
			"经云：“刑囚夹印，刑仗唯司”、“天相守命，廉贞擎羊夹，刑仗难逃”。";
		if (this.minggong == 0 || this.minggong == 6)
			if (this.CountStrings(txt, ["天相", "廉贞", "擎羊"]) == 3)
				this.setbadgeju("刑囚夹印格", xingqiujiayin);

		var yuetongyusha = this.badstr("月同遇煞格") +
			"（不是马头带箭）太阴天同在午宫坐命，本属落陷，又有火星、铃星、地劫、天空、天刑等恶星同宫，三方又加会凶星，为此格。人必生性怯弱，身体多病，一生贫*愁苦。女命克夫，受感情打击，是被人抛弃的对象，多作人情妇，或为**。命逢此格，不但贫，而且*，终身不能发达。同阴在午遇四煞冲会，多主心狠手毒，无情无义，与父母成仇，并且容易从事犯罪活动，刑伤短命。故古诗云：" +
			"骨瘦体微不足言，把薪燃火几回焦。人间好事难明处，枝叶荣是总是凋。" +
			"经云：“天同太阴同在午宫守命，加煞重，肢体羸黄”。“女命，虽美而淫，偏房侍妾”。";
		if (this.minggong == 6)
			if (this.CountStrings(txt, ["天同", "太阴"]) == 2 && this.CountStrings(txt, ["火星", "天空", "天刑", "地劫", "铃星"]) > 1)
				this.setbadgeju("月同遇煞格", yuetongyusha);

		var maluokongwang = this.badstr("马落空亡格") +
			"命宫天马，与劫空同宫，对宫有禄存，或禄坐空亡，又逢空劫煞星。生逢此格，一生总是变来变去，东奔西走，辛苦劳碌一场空，为空虚之兆，贫*之命。" +
			"经云：“马遇空亡，终身奔走”。";
		if (this.CountStrings(txt, ["天马"]) == 1 && this.CountStrings(txt, ["天空", "地劫"]) > 0)
			this.setbadgeju("马落空亡格", maluokongwang);

		var liangmapiaodang = this.badstr("梁马飘荡格") +
			"天梁在巳亥宫坐命，与四煞空劫忌星同宫加会，不见吉星，命和迁移有天马，即为此格。为社会底层人物，一生飘荡，身在异乡，并常为他人之事而奔波，无事闲忙，名利皆虚，贫*之命。" +
			"天梁在巳亥，乙丙戊壬辛年生人加吉星，亦主富贵，但仍不免飘荡，宜异地发达，只是富贵不能耐久，一生多风浪，终必有破败。" +
			"经云：“天梁天马陷，飘荡无疑”、“天梁陷地，见羊陀，伤风败俗之流”、“天梁陷地，遇火羊破局，下*孤寒夭折”、“女命，主淫贫，或偏房侍妾”。";
		if (this.minggong == 5 || this.minggong == 11)
			if (this.CountStrings(txt, ["天梁"]) == 1 && this.CountStrings(txt + this._4hua[((this.minggong + 6) % 12)], ["天马"]) == 1)
				this.setbadgeju("梁马飘荡格", liangmapiaodang);

		var lufengliangsha = this.badstr("禄逢两煞格") +
			"禄存守命宫，或化禄守命宫，但命宫亦有旬空、截空、天空、地劫，同是三方会有羊陀火铃大耗诸恶，即为禄逢两煞之格。主其人虚有其表，好看而已，终究不能有所作为，纵有一时之财利也很快陷于困穷。";
		if (this.CountStrings(txt, ["禄 ", "禄存"]) > 0 && this.CountStrings(txt, ["旬空", "截空", "天空", "地劫"]) > 0 &&
			this.CountStrings(txt, ["火星", "铃星", "擎羊", "陀罗", "大耗"]) > 0)
			this.setbadgeju("禄逢两煞格", lufengliangsha);

		var riyuecanghui = this.badstr("日月藏辉格（日月反背）") +
			"太阳在酉戌亥子宫坐命，夜晚生人；或太阴在卯辰巳午宫坐命，白天生人。日月皆处陷失之地，命宫三方四正无吉星同宫并吉化，并且同时加会有四煞空劫化忌等恶，即为“日月反背”之格，主一生贫*。只要命有吉星而无煞，巨富大贵者亦有之。";
		if ([0, 11, 10, 9].indexOf(this.minggong) != -1)
			if (this.CountStrings(txt, ["太阳"]) == 1)
				this.setbadgeju("日月藏辉格（日月反背）", riyuecanghui);
		if ([3, 4, 5, 6].indexOf(this.minggong) != -1)
			if (this.CountStrings(txt, ["太阴"]) == 1)
				this.setbadgeju("日月藏辉格（日月反背）", riyuecanghui);

		var caiyuqiuchou = this.badstr("财与囚仇格") +
			"武曲为财星属金，廉贞为囚星属火。二星一守命宫，一守身宫，乃火金相克，如仇人相见，分外眼红，必凶祸百出，终身不得安宁，二星有一化忌加煞，定遭暴病、险厄。若是命宫三方四正临庙旺，加会星并得吉化，则不作此论。";

		if (this.CountStrings(txt, ["武曲", "廉贞"]) == 1 && this.CountStrings(this._4hua[this.shengong], ["武曲", "廉贞"]) == 1)
			this.setbadgeju("财与囚仇格", caiyuqiuchou);

		var yishenggupin = this.badstr("一生孤贫格") +
			"破军陷地守命（卯酉宫、巳亥宫），命宫、对宫、三合宫没有任何一颗吉星加会，即为一生孤贫之格。";

		if (this.CountStrings(txt, ["破军=陷"]) == 1 && this.CountStrings(txt + txt1 + txt2 + this._4hua[((this.minggong + 6) % 12)], ["文昌", "文曲", "天魁", "天钺", "左辅", "右弼"]) == 0)
			this.setbadgeju("一生孤贫格", yishenggupin);

		var liangzhonghuagai = this.badstr("两重华盖格") +
			"禄存与化禄坐命宫，遇空亡劫耗火铃陷地同宫，又会凶星，其人虽身在财乡，亦必穷困潦倒。";

		if (this.CountStrings(txt, ["禄 ", "禄存"]) == 2 && this.CountStrings(txt, ["天空", "地劫", "火星", "铃星", "截路"]) > 1)
			this.setbadgeju("两重华盖格", liangzhonghuagai);

		var yangtuojiaji = this.badstr("羊陀夹忌格") +
			"禄存在命宫，则必为羊陀所夹。若有化忌星同宫，或对宫有化忌星冲破，即羊陀夹忌之格，化忌星之凶性得羊陀之夹而得以充分发挥，其凶可知，或因一时之吉而招长远之凶。虽有禄存在命，反不为美。例如安命在申，又逢忌星，擎羊在酉，陀罗在未夹之，其余仿此为例。太岁二限行到此地亦凶，主孤贫刑克。若禄存单守命宫，无吉星同宫，为看财奴，亦有余殃之凶。" +
			"经云：“禄逢冲破，吉也成凶”、“羊陀夹忌为败局”。";

		if (this.CountStrings(txt, ["禄存"]) == 1 && this.CountStrings(txt + this._4hua[((this.minggong + 6) % 12)], ["忌"]) == 1)
			this.setbadgeju("羊陀夹忌格", yangtuojiaji);

		var huolingjiaming = this.badstr("火铃夹命格") +
			"火星铃星在邻宫来夹命宫，即为此格，唯寅午戌年生人有这种情形出现。人命逢此，其人胆大，有潜在的反抗心理，具破坏性。或者个性冲动，暴躁，易遇凶灾。若命宫有化忌星，则为大凶之兆，必遭奇祸，或因一时冲动而招致重灾。" +
			"若是贪狼守命宫，得火铃夹命反为大吉之格，要是贪狼化禄的话，则是大富大贵之命。" +
			"经云：“火铃夹命为败局（如安命在寅，火星在丑，铃星在卯。吉多尚可，惟夹忌辰凶。岁限巡至此地亦凶）”。";

		if (this.CountStrings(this._4hua[((this.minggong + 1) % 12)], ["火星", "铃星"]) == 1 && this.CountStrings(this._4hua[((this.minggong + 11) % 12)], ["火星", "铃星"]) == 1)
			this.setbadgeju("火铃夹命格", huolingjiaming);

		var jiekongjiaming = this.badstr("劫空夹命格") +
			"地劫天空二星在邻宫夹命。此格唯有安命子宫和巳宫，遇劫空来夹。如同父母兄弟无助，其性质与劫空同在命宫相似。若是命宫无正曜，或星辰落陷，遇劫空夹，主凶兆。" +
			"如果命宫有吉星入庙又得吉化，三方又加会吉星，则劫空夹命之凶力骤减，并不值得畏惧，可以弃之不论。";
		if (this.CountStrings(this._4hua[((this.minggong + 1) % 12)], ["地劫", "地空"]) == 1 && this.CountStrings(this._4hua[((this.minggong + 11) % 12)], ["地劫", "地空"]) == 1)
			this.setbadgeju("劫空夹命格", jiekongjiaming);

		var wenxinggongming = this.goodstr("文星拱命格") +
			"文昌、文曲在命宫三方四正，阴阳会昌曲，出世荣华，经国济世之天才，从事文学、" +
			"医学、经济学工作，皆可显荣耀，乃上流社会人士也";
		if (this.CountStrings(txt + txt1 + txt2 + this._4hua[((this.minggong + 6) % 12)], ["文曲", "文昌"]) == 2)
			this.setgoodgeju("文星拱命格", wenxinggongming);

	}
	calc(myDate, sex) {
		this.init()
		var i, j;
		var EightDate = SixrandomModule.lunar_f(myDate)
		this.iday = EightDate.lunarDate
		this.imonth = EightDate.lunarMonth
		this.niangz = EightDate.lunargzYear
		this.yuegz = EightDate.lunargzMonth
		this.sShi = EightDate.gzTime[1]
		this.sex = sex


		this.mgzs = "";
		this._4hua = new Array()
		for (i = 0; i <= 11; i++) {
			this._4hua[i] = ""
		}

		j = ((((this.gan2i(this.niangz[0]) % 5) + 1) * 2) % 10);
		for (i = 2; i < 14; i++) {
			this.mgzs = this.mgzs + this.sGan[(j + i - 2) % 10] + this.sZhi[i % 12];
			this.setgong(i, this.sGan[(j + i - 2) % 10] + this.sZhi[i % 12]);
		}
		this.day1();
		this.month1();
		this.year1();
		// testnayin();
		this.ziweigeju();
		this.zihua();
		return {
			zhihua:this.zhihua,
			gong:this._4hua,
			ju:this.ju,
			geju:this.geju,
			gejudetail:this.gejudetail

		}
	}

}

var e = new ziweiModule()
module.exports = e;  