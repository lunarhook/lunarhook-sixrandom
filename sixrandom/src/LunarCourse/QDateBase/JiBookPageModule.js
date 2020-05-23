
import React, {Component} from 'react';
import {AppRegistry,View,Text} from 'react-native';


var JiBookPageModule = new Array()



JiBookPageModule[0] = {"index":"三十六计","name":"三十六计",
"content":["《三十六计》或称“三十六策”，是指中国古代三十六个兵法策略，语源于南北朝，成书于明清。它是根据我国古代卓越的军事思想和丰富的斗争经验总结而成的兵书，是中华民族悠久文化遗产之一。"
],
}

JiBookPageModule[1]={
"index":"三十六计",
"name":"胜战计·瞒天过海",
"content":["　　备周则意怠，常见则不疑。阴在阳之内，不在阳之对。太阳，太阴。"],
}
JiBookPageModule[2]={
"index":"三十六计",
"name":"胜战计·围魏救赵",
"content":["　　共敌不如分敌，敌阳不如敌阴。"],
}
JiBookPageModule[3]={
"index":"三十六计",
"name":"胜战计·借刀杀人",
"content":["　　敌已明，友未定，引友杀敌。不自出力，以《损》推演。"],
}
JiBookPageModule[4]={
"index":"三十六计",
"name":"胜战计·以逸待劳",
"content":["　　困敌之势，不以战。损刚益柔。"],
}
JiBookPageModule[5]={
"index":"三十六计",
"name":"胜战计·趁火打劫",
"content":["　　敌之害大，就势取利，刚决柔也。"],
}
JiBookPageModule[6]={
"index":"三十六计",
"name":"胜战计·声东击西",
"content":["　　敌志乱萃，不虞。坤下兑上之象，利其不自主而取之。"],
}
JiBookPageModule[7]={
"index":"三十六计",
"name":"敌战计·无中生有",
"content":["　　诳也，非诳也，实其所诳也。少阴、太阴、太阳。"],
}
JiBookPageModule[8]={
"index":"三十六计",
"name":"敌战计·暗渡陈仓",
"content":["　　示之以动，利其静而有主，“益动而巽”。"],
}
JiBookPageModule[9]={
"index":"三十六计",
"name":"敌战计·隔岸观火",
"content":["　　阳乖序乱，阴以待逆。暴戾恣睢，其势自毙。顺以动豫，豫顺以动。"],
}
JiBookPageModule[10]={
"index":"三十六计",
"name":"敌战计·笑里藏刀",
"content":["　　信而安之，阴以图之。备而后动，勿使有变。刚中柔外也。"],
}
JiBookPageModule[11]={
"index":"三十六计",
"name":"敌战计·李代桃僵",
"content":["　　势必有损，损阴以益阳。"],
}
JiBookPageModule[12]={
"index":"三十六计",
"name":"敌战计·顺手牵羊",
"content":["　　微隙在所必乘，微利在所必得。少阴，少阳。"],
}
JiBookPageModule[13]={
"index":"三十六计",
"name":"攻战计·打草惊蛇",
"content":["　　疑以叩实，察而后动。复者，阴之媒也。"],
}
JiBookPageModule[14]={
"index":"三十六计",
"name":"攻战计·借尸还魂",
"content":["　　有用者，不可借；不能用者，求借。借不能用者而用之。匪我求童蒙，童蒙求我。"],
}
JiBookPageModule[15]={
"index":"三十六计",
"name":"攻战计·调虎离山",
"content":["　　待天以困之，用人以诱之，往蹇来连。"],
}
JiBookPageModule[16]={
"index":"三十六计",
"name":"攻战计·欲擒故纵",
"content":["　　逼则反兵，走则减势。紧随勿迫，累其气力，消其斗志，散而后擒，兵不血刃。需，有孚，光。"],
}
JiBookPageModule[17]={
"index":"三十六计",
"name":"攻战计·抛砖引玉",
"content":["　　类以诱之，击蒙也。"],
}
JiBookPageModule[18]={
"index":"三十六计",
"name":"攻战计·擒贼擒王",
"content":["　　摧其坚，夺其魁，以解其体。龙战于野，其道穷也。"],
}
JiBookPageModule[19]={
"index":"三十六计",
"name":"混战计·釜底抽薪",
"content":["　　不敌其力，而消其势，兑下乾上之象。"],
}
JiBookPageModule[20]={
"index":"三十六计",
"name":"混战计·混水摸鱼",
"content":["　　乘其阴乱，利其弱而无主，随，以向晦入宴息。"],
}
JiBookPageModule[21]={
"index":"三十六计",
"name":"混战计·金蝉脱壳",
"content":["　　存其形，完其势；友不疑，敌不动。巽而止蛊。"],
}
JiBookPageModule[22]={
"index":"三十六计",
"name":"混战计·关门捉贼",
"content":["　　小敌困之。剥，不利有攸往。"],
}
JiBookPageModule[23]={
"index":"三十六计",
"name":"混战计·远交近攻",
"content":["　　形禁势格，利从近取，害以远隔。上火下泽。"],
}
JiBookPageModule[24]={
"index":"三十六计",
"name":"混战计·假道伐虢",
"content":["　　两大之间，敌胁以从，我假以势。困，有言不信。"],
}
JiBookPageModule[25]={
"index":"三十六计",
"name":"并战计·偷梁换柱",
"content":["　　频更其阵，抽其劲旅，待其自败，而后乘之。曳其轮也。"],
}
JiBookPageModule[26]={
"index":"三十六计",
"name":"并战计·指桑骂槐",
"content":["　　大凌小者，警以诱之。刚中而应，行险而顺。"],
}
JiBookPageModule[27]={
"index":"三十六计",
"name":"并战计·假痴不癫",
"content":["　　宁伪作不知不为，不伪作假知妄为。静不露机，云雷屯也。"],
}
JiBookPageModule[28]={
"index":"三十六计",
"name":"并战计·上屋抽梯",
"content":["　　假之以便，唆之使前，断其援应，陷之死地。遇毒，位不当也。"],
}
JiBookPageModule[29]={
"index":"三十六计",
"name":"并战计·树上开花",
"content":["　　借局布势，力小势大。鸿渐于陆，其羽可以为仪也。"],
}
JiBookPageModule[30]={
"index":"三十六计",
"name":"并战计·反客为主",
"content":["　　乘隙插足，扼其主机，渐之进也。"],
}
JiBookPageModule[31]={
"index":"三十六计",
"name":"败战计·美人计",
"content":["　　兵强者，攻其将；将智者，伐其情。将弱兵颓，其势自萎。利用御寇，顺相保也。"],
}
JiBookPageModule[32]={
"index":"三十六计",
"name":"败战计·空城计",
"content":["　　虚者虚之，疑中生疑。刚柔之际，奇而复奇。"],
}
JiBookPageModule[33]={
"index":"三十六计",
"name":"败战计·反间计",
"content":["　　疑中之疑。比之自内，不自失也。"],
}
JiBookPageModule[34]={
"index":"三十六计",
"name":"败战计·苦肉计",
"content":["　　人不自害，受害必真。假真真假，间以得行。童蒙之吉，顺以巽也。"],
}
JiBookPageModule[35]={
"index":"三十六计",
"name":"败战计·连环计",
"content":["　　将多兵众，不可以敌，使其自累，以杀其势。在师中吉，承天宠也。"],
}
JiBookPageModule[36]={
    "index":"三十六计",
    "name":"败战计·走为上计",
    "content":["　　全师避敌。左次无咎，未失常也。"],
}

module.exports={JiBookPageModule:JiBookPageModule}