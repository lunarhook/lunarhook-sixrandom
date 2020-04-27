

import React, {Component} from 'react';
//import DatePicker from 'react-native-datepicker'
//import DateTimePicker from 'react-native-modal-datetime-picker';
/*
夫妻宮：(日支)
一、為用神，不受沖合
以命格分析此生在夫妻間契合度有80分，也代表配偶有助力。
二、為用神，被閒神沖
以命格分析此生在夫妻間的契合度約有60分~70分，配偶有時候不是很甘心的幫忙。
三、為用神：被忌神沖
以命格分析此生在夫妻間是(聚少離多，或晚婚)，助力將減弱為60分。
沖忌神(如子用神沖午忌神)
以命格分析此生在夫妻間助力仍大，可得90分，可以早婚。
四、為用神：(一)被合為忌神：以命格分析此生在夫妻間助力減少，僅得60分。(二)被合為用神：以命格分析此生在夫妻間助力增加，可得90分。
五、為閒神：夫妻間相處狀況時好時壞，但以目前社會現象，依您的八字診斷結果還算可以，如果要更好，必須兩人一起努力經營婚姻才是。
六、為忌神，不受沖合
以命格分析此生在夫妻間較無助力，請平凡過一生吧。
七、為忌神、受閒神沖
以命格分析此生，顯然夫妻間的契合度只有10分，並沒有太大的助力。
八、為忌神：(一)被用神沖：以命格分析此生在夫妻間較無助力，但可得20分的助力。(二)沖用神：以命格分析此生配偶無助力，會各自發展事業，夫妻間互動為負80分。
九、為忌神：(一)合為用神：以命格分析此生夫妻間相害力減少，夫妻間仍有助力得50分。(二)合為忌神：以命格分析此生夫妻間相阻力增加，夫妻間互動為負80分。
十、夫妻宮得位(男日支正財、女日支正官)，為用神。
以先天命盤分析您的夫妻宮得到正位，以夫妻間的助力會有100分。
十一、夫妻宮得位(男日支正財、女日支正官)，雖為忌神。
以先天命盤分析您夫妻宮因得位，故配偶雖無大助力，卻可安守本份，兼顧家庭，故有50分。
十二、夫妻宮不喜被爭合如巳日受申月酉時
以先天命盤分析您的婚姻會三心二意，也易有感情糾紛產生。
六神論婚姻
(1)忌官殺多2個以上，日主無氣(以女命為主)→茲因命中注定此生婚姻緣薄，同時容易受夫欺負。
(2)忌印多3個以上，官殺無氣(以女命為主)→一生為女強人，較不得夫緣，丈夫成就平平，若有財生，不在此限。
夫妻間應多多溝通，互相激勵共同打拼才對。
(3)忌比劫多，官殺無氣(以女命為主)→一生為女強人，較不得夫緣，若有財生官，不在此限。
(4)忌食傷多，無財生官(以女命為主)→一生為女強人，較不得夫緣，茲因命中注定，此生難有好婚姻，您難道不能稍微放手嗎?
(5)忌財殺官多，日主無氣(以女命為主)→為夫辛勞，夫不感激，若日主有氣(有祿刃)，不在此限。
(6)神煞：若八字中有以下三個神煞以上(男、女命同論)
【桃花、華蓋、孤辰、寡宿】
茲因命中注定此生難有好婚姻，夫妻間唯有多說好話，多做好事才能改變此一婚姻不美狀況。
(1)女命忌庚子日、壬子日、乙卯日、辛酉日
男命忌庚申日
茲因命中注定此生難有好婚姻，有可能會走向離婚的路。
(2)女命忌三透比劫。(天干)
因天生個性使然，不易屈服，算是命中注定此生難有好婚姻。
(3)男女命忌丑戌未三刑於日支
茲因命中注定此生難有好婚姻，因雙方都蠻恃勢，太自信，欠考慮而種下敗因。
(4)男女命忌亡神，劫煞沖於日支
茲因命中注定此生難有好婚姻，因有外力介入，應提防。
(5)男女命忌坐華蓋於日支
茲因命中注定此生婚姻因信念不同，而造成婚姻不美。
(6)男女命忌坐孤辰或寡宿於日支
茲因命中注定此生難有好婚姻，是因欠缺溝通而造成，請加強溝通。
(7)女命忌本主同宮。(庚子年、庚子日或甲午年、甲午日)
茲因命中注定此生難有好婚姻，此乃有強出頭的情況，需忍耐。
(8)女命忌多合(三合以上)
茲因命中注定此生難有好婚姻，有太多的事絆住了，無自由可言，當然不好。
(9)女命忌月支沖日支
表婚姻不美，在日常生活中，可能無法有瓊瑤小說式的浪漫，唯有相互體諒，才能有好的結局。
*/
/*
大格局就学四种
一、格局——只学四种
1、正格身旺：八字命局中生助日主的力量大。印枭、比劫旺。
2、正格身弱：八字命局中克泄日主的力量大。伤食、才财、官杀旺。
3、专旺格：八字命局中全是生助日主的力量。除日主外，其他七个字都是印枭、比劫。
4、从弱格：八字命局中全是克泄日主的力量》。除日主外，其他七个字都是伤食、才财、官杀。
二、用神
1、正格身旺：以伤食、才财、官杀为喜用。（喜神和用神不用区分啦！这种区分留到你成为大师的时候再看吧）
2、正格身弱：以印枭、比劫为喜用。
3、专旺格：以印枭、比劫为喜用。
4、从弱格：以伤食、才财、官杀为喜用。
三、合化
天干五合：甲己合土 乙庚合金 丙辛合水 丁壬合木 戊癸合火
1、天干五合必须是相邻的。比如年干有甲，月干为己则算合。如果年干为甲，时干为己。隔太远，不算合。遥合有合之情，无合之意。
2、五合有成化与不成化之分。只有月支有引化的权利。月支为引化之神。比如天干甲己能合，月支为辰主气为戊，那么甲己合化成功。天干甲和己被辰引化为两个戊。不成化，如果月支无引化神，就不能成化。
3、月令余气亦可引化。
4、相合成化不能与月提主气相违。
5、争合如能成化，都能成化。
四、地支合会冲害
地支六合：子丑合土 寅亥合木 卯戌合火 辰酉合金 申巳合水 午未合火
地支三合：申子辰合水 亥卯未合木 寅午戌合火 巳酉丑合金
地支三会：寅卯辰会木 巳午未会火 申酉戌会金 亥子丑会水
1、地支六合，只有相邻才论合，隔位不合
2、三合与三会，隔位也能合会，三合还能成半合局，申子、亥卯、寅午、巳酉相合称生地半合。子辰、卯未、午戌、酉丑相合称墓地半合。也是隔位也能合。
3、天干有化神引化，化神为阴则化为阴，化神为阳则化为阳。
4、化神不能与月提主气相违逆
5、地支合会从力量上来讲：会局力量最强，其次是三合，其次是生地半合，其次是墓地半合，力量最弱的是六合。
6、地支相冲，相邻才论冲
7、地支三刑隔位也能相刑
8、子卯刑，午午、酉酉、辰辰、亥亥自刑，一般需要相邻才论
*/
/*
日元天干看性格，详细的看性格，必须是以十神来论定
十神性格（细看性格）
官杀为喜：具自律性、能约束鞭策自己、责任心强、光明磊落、权力欲重、威望高。
官杀为忌：自由放任、逃避责任能力差、不拘小节、明哲保身、软弱怕事、受欺负。
印枭为喜：注重名誉、气质高雅性温和、具同情心、仁慈端正、乐于奉献、人缘好。
印枭为忌：虚荣粉饰、糊涂计较喜幻想、感情用事、缺乏进取、过分依赖、嫉妒人。
劫比为喜：独立自主、事业心强喜竞争、好学上进、自尊自立、崇尚友善、朋友多。
劫比为忌：顽愚固执、主观刚烈性格暴、孤僻高傲、六亲无缘、被人利诱、无知己。
伤食为喜：表现欲强、学识才华技艺高、知书达理、重情重义、聪明美貌、有名誉。
伤食为忌：冷漠寡情、不正思维多傲慢、孤芳自赏、任性愚昧、刚愎自用、多叛逆。
财才为喜：占有欲强、唯金钱衡量标准、慷慨大方、待人诚实、谋财有道、肯拼搏。
财才为忌：好逸恶劳、蛮横专制重利益、媚上轻下、忘恩负义、风流多情、桃花劫。
五行特点 
甲：甲为阳木，为参天大树，栋梁之才，性格仁德温厚，外表平静内心极强，喜静恶动，自律自重，大成则兴邦治国，小成则养家立业。仁义礼智信中，木主仁。
　　为喜神旺相时，为人主观不屈服，喜恭维恶批评。
　　为忌神旺相时，其性必恶，固执己见，麻木不仁。
　　甲木为弱时，失去挺拔个性，徒有其表，外强中干，性格懦弱，没有立场，随风摆动，没主见没胆识，难挑重担。
　　
乙：乙为阴木，似藤萝花草，柔中带刚，外表仁厚，内心刚强，有极强的容忍力和变通力，坚韧不拔不惧险阻，乙木好似花卉，喜争奇斗艳，天生爱美，注重外表仪容，自尊心强，也容易自卑。
　　为喜神旺相时，亦如甲木具仁寿之德，激流勇进，越挫越勇，比甲木能屈能伸。
　　为忌神旺相时，过分坚持，过分执着，积怨越深，爆发越大，只图自己安乐，不顾千夫所指。乙木太弱时，毫无生气，人穷志短，性格忧郁，悲观内向。
　　
丙：丙为阳火，比喻为太阳，光照大地，万物赖以为生。丙火人性格，温暖和煦，热情豪放，光明磊落，大公无私，上进心强，仁义礼智信中，火主礼。
　　为喜神旺相时，乐天知命，不惧逆境，心有骄阳，不惧寒冬，充满活力，永远灿烂，相信春天总会到来。
　　为忌神旺相时，过分火爆，易起争执，个性偏激，到处惹事。狂妄自大，不可一世。
　　丙火为弱时，委曲求全，黯淡无光。
　　
丁：丁为阴火，比喻为灯烛之火，不刚不烈，不弱不衰，性虽阴柔，昭然不绝。
　　为喜神旺相时，待人有仪，温文尔雅，心地善良，忠孝两全，体恤他人，助人为乐。
　　为忌神旺相时，内敛狠毒，不喜张扬，默默策划，性格阴森，表面一套，背后一套，防不胜防，祸患深藏，不露痕迹。
　　丁火太弱时，刚性不足，缺乏坚定，做事优柔寡断，犹豫不决，危急关头，临阵脱逃。
　　
戊：戊为阳土，比喻为山岳城墙，戊土厚重，宽厚包容，仁义礼智信，土主信，戊土个性，稳重守信，固重不移，万物所系，广结人缘。
　　为喜神旺相时，为人稳重，能做实事，不喜浮夸，重视信用，一诺千金，敦厚朴实。
　　为忌神旺相时，保守顽固，死守不变，浑浊不化，不通世情，不受规劝，顽石一般。
　　戊土太弱时，戊土太弱容易失去信心，过分忍让，受辱委屈，糊涂用事，自食其果。
　　
己：己为阴土，比喻为泥沙湿土，己土卑湿，能生万物，己土个性，不卑不亢，不偏不倚，处事中正。
　　为喜神旺相时，谦虚谨慎，富而不骄，穷而不屈，乐而知足。心量广大，志气高昂。
　　为忌神旺相时，过分叛逆，自私自我，包容性差，浊而不清。卑鄙阴险，内心狠毒
　　
庚：庚为阳金，比喻为刀斧剑锋 个性刚健硬朗，仁义礼智信，金主义，庚金人，义气为重。
　　为喜神旺相时，沉着坚韧，是非分明，意志坚定，自强不息，两肋插刀，在所不辞，
　　为忌神旺相时，倔强易怒，冲动好斗，不受约束，铁石心肠，见利忘义，失去正义。
　　庚金太弱时，意志不坚，精明过头，两两计较，剑走偏锋，逃之夭夭。
　　
辛：辛为阴金，比喻为金钗首饰，不及庚金刚锐，其毅性内在，辛金的确很辛苦，善纠缠。
　　为喜神旺相时，大仁大义，性格冷静，心思缜密，临危不乱，处变不惊，不甘趋炎附势。
　　为忌神旺相时，不仁不义，言多必失，得罪众人，自恃华丽，孤芳自赏。
　　辛金为弱时，刚阳不足，胆小怕事，逆来顺受，唯唯诺诺。
　　
壬：壬为阳水，刚阳奔放，比喻为江河湖海，仁义礼智信中，水主智。形虽柔而质实刚，刚柔相济，似水柔情。壬水性格，机灵聪敏，有智有谋。
　　为喜神旺相时，壬水主动，处事积极，待人热情，甘为服务，思维活跃，善于钻营。
　　为忌神旺相时，性情善变，容易激动，喜怒无常，爱则欲其生，恨则欲其死。
　　壬水为弱时，迁徙不止，聪明过分，聪明反被聪明误，缺乏责任，粗枝大叶，乐少忧多。
　　
癸：癸为阴水，比喻为雨露之水，又好比天之津液，至阴至柔。水亦主智，内心缜密，办事周详，面面俱到。
　　为喜神旺相时，心慈性善，助人之乐，犹如春雨，滋生万物，实惠布福，不分贵贱，一视同仁。
　　为忌神旺相时，性柔情弱，悲观失控，过分自我，淫溺无耻
　　癸水为弱时，个性内向，阳刚不足，气魄不够，处事优柔，瞻前顾后，一事无成。
*/

var manlocation = ["坎","坤","震","巽","坤","乾","兑","艮","离"]
var womanlocation = ["坎","坤","震","巽","艮","乾","兑","艮","离"]
var locationself = new Array()
locationself[0] = new Array()//男
locationself[1] = new Array()//女
for(i=1900;i<2100;i++)
{
    locationself[0][i] = manlocation[(2107-i)%9]
    locationself[1][i] = womanlocation[(i+3)%9]
    //console.log(locationself[0][i])
    //console.log(locationself[1][i])
}

//这个家宅应该是到2044年的排表
/*
八运二十四个山向飞星局 旺山旺向 (旺财旺丁) 
坐未向丑，坐丑向未，坐亥向巳，坐巳向亥，坐巽向干，坐干向巽。 
上山下水 (捐财伤丁) 
坐戌向辰，坐辰向戌，坐申向寅，坐寅向申，坐坤向艮，坐艮向坤。 
双星到山 (旺丁不旺财) 
坐壬向丙，坐甲向庚，坐丁向癸，坐酉向卯，坐午向子，坐辛向乙。 
双星到向 (旺财不旺丁) 
坐丙向壬，坐庚向甲，坐癸向丁，坐乙向辛，坐卯向酉，坐子向午。 
*/

var houselocation = new Array()
houselocation["坎"] = "东四命，坐北向南纳气，正北伏位，正东天医，东南生气，正南延年为吉"
houselocation["离"] = "东四命，坐南向北纳气，正北延年，正东生气，东南天医，正南伏位为吉"
houselocation["震"] = "东四命，坐东向西纳气，正北天医，正东伏位，东南延年，正南生气为吉"
houselocation["巽"] = "东四命，坐东北向西南纳气，正北生气，正东延年，东南伏位，正南天医为吉"
houselocation["乾"] = "西四命，坐西北向东南纳气，东北天医，西北伏位，正西生气，西南延年为吉"
houselocation["坤"] = "西四命，坐西南向东北纳气，东北生气，西北延年，正西天医，西南伏位为吉"
houselocation["艮"] = "西四命，坐东北向西南纳气，东北延年，西北生气，正西伏位，西南天医为吉"
houselocation["兑"] = "西四命，坐西向东纳气，东北伏位，西北天医，正西延年，西南生气为吉"



var dayself = new Array();
dayself["甲子"]="上等日柱，得到配偶助益，配偶漂亮，但恐婚姻不利。甲木为栋梁之木，木主仁，坐下正印，为身高体健，慈祥恺悌，相貌俊秀。印为文书，身坐文书，主才学超群，有权柄。印又有生身助学之功，故主人记忆力强，学习成绩优秀。"
dayself["戊辰"]="上等日柱，通根身旺，坐财官比肩，但支中比肩财星化火为印，变成官印相生，故主高贵。支内戊癸化火生土，而辰本为湿土，内中有火，温暖中和，能生万物，必然根深叶茂，秀气有成。"
dayself["庚午"]="上等日柱，配偶英俊漂亮，利于配偶。身坐正官正印，气质清纯，必主官贵，但金坐火地，须经火炼，千锤百炼，所以仕途坎坷，有大起，也有大落。"
dayself["丙子"]="上等日柱，阴阳杀。阴阳差错，配偶英俊漂亮，但婚姻不顺利。为六秀，主人聪明秀气。丙火坐子无根，主人身矮。丙为太阳主光明，而子鼠狡猾，子中癸水阴湿，故主人性格双重。身坐正官，一权在握，往往自以为是，独裁固执。"
dayself["庚辰"]="上等日柱，魁罡，身坐正财、伤官、偏印，主人有财禄，聪明有学识，支中伤官带偏印有贵气，而戊癸化火为官杀，变成日坐财官，可做官，但隐含伤官，可能喜开杀戒。"
dayself["辛巳"]="上等日柱，十恶大败。利于婚姻。身坐正印正官劫财，辛金柔弱，有正印生身，劫财帮助，由弱转旺，而正官丙火制衡，使干支中和，必主官贵，富于成功。大多有志难伸。"
dayself["壬午"]="上等日柱，九鬼妨害，但恐夫妻不睦。坐下财官，无杂气，多主官贵，丁壬合财，主得妻财或因妻制富。但壬午不如癸巳，癸巳财官双美无杂气，又为日贵。另外，壬水盖头有掩火之嫌，故虽有官贵，也难免大起大落。"
dayself["丁亥"]="上等日柱，十恶大败，坐下正印官星，官印相生，主聪明超群，丁壬合化印星，坐贵，主官贵，与大贵人有缘。女命丁亥，可嫁贵夫。"
dayself["戊子"]="上等日柱，九鬼妨害，又为六秀日，主人聪明秀气，坐正财，得贤妻，因妻制富，干支戊癸化火生身，主高贵。"
dayself["癸巳"]="上等日柱，孤鸾煞，阴阳差错，不利婚姻。身坐正官正印正财，财官印连生，循环清正，主高贵富贵或清贵，且身康体健有钱，生活富裕，女名癸巳，可嫁贵夫。"
dayself["丁酉"]="上等日柱，日贵。配偶风流。坐长生偏财、夜贵、文昌，主人高贵聪明，见识超群，受人钦敬，另有叛逆创新性格。"
dayself["己亥"]="上等日柱，配偶长寿。坐正财正官，为财官双美，主贵。女命己亥，也可嫁贵夫。"
dayself["癸卯"]="上等日柱，日贵。配偶风流。坐长生、日贵，食神吐秀，主人聪明有文才。女命癸卯，生子读书有成。"
dayself["乙巳"]="上等日柱，孤鸾煞，但恐有些人不利婚姻。乙木向阳，英华外发，主人聪明，但泄气，只利他人，不利己。坐下伤官正财，正官顺生，有钱，富裕，男命乙巳，多晚婚，可得贤妻，但支中伤官见官，过于刚强，不守纪律，武将者，喜开杀戒。"
dayself["己酉"]="上等日柱，坐长生、文昌，主人好文学，聪明有文才，且土金相生，主人身体好，但干生支，毕竟泄气，故得失都有。"
dayself["甲寅"]="上等日柱，孤鸾煞，不利婚姻。坐禄通根身旺，坐下有伤官生财，主富贵，但比肩夺财，文才差一些。女命甲寅，身强克夫。"
dayself["乙卯"]="上等日柱，坐禄通根身旺，坐比肩，无财，清贵不富贵，上下乙木，秀气透出，文才好，人秀气，手脚纤细。"
dayself["丙辰"]="上等日柱，日德。身坐魁地，支藏正印、食神、七杀，主人聪明、伶俐，辰为湿土，丙为太阳，阳光普照，万物有成，人命丙辰聪明好动。"
dayself["庚申"]="上等日柱，不利婚姻。坐禄通根，身体好，主富贵。丑月庚申，为天月两德，主人一生身健少疾病。女命庚申带天月两德，必生贵子，聪明大器。"
dayself["辛酉"]="上等日柱，九鬼妨害，阴阳差错，但恐夫妻不睦。坐禄通根，得助，立于不败之地，聪明有文才，有能力。"
dayself["壬戌"]="上等日柱，日德。阴阳差错，但恐夫妻不睦。坐下财生杀，杀生印，杀印相生，主大贵，或武贵，但丁壬化木逢燥土，往往变成小人或坏人。"
dayself["乙丑"]="中等日柱，配偶相貌不扬。六秀日，主人秀气漂亮，身坐金库，无根，坐下七杀无制，自信心太过，往往一意孤行。女名乙丑，具有男性风格。"
dayself["丙寅"]="中等日柱，丙为太阳，身坐长生，有光彩之象，主人聪明，但坐下枭神夺食，不吉。生于冬至后夏至前，戊土长生于寅，食神旺，主人聪明，吉；生于夏至后冬至前，戊土长生在申，食神弱，稍差。"
dayself["丁卯"]="中等日柱，九鬼妨害，但恐夫妻不睦。坐印通根，主人聪明有学问。若四柱出现亥卯未三合局或寅卯辰三会局，为大贵人，但身坐偏印，只能为副职，辅佐他人。"
dayself["己巳"]="中等日柱，金神，主人刚毅、聪明，有火则贵，却火则不吉。坐下正印、劫财、伤官，伤官佩印，贵不可言，但伤官遇劫，易遭小人陷害。"
dayself["辛未"]="中等日柱，得库通根，身旺，坐下偏财、偏印、七杀，一片顺生，主小贵，吉。女命辛未爱情专一，夺夫权，守家，独裁。"
dayself["甲戌"]="中等日柱，婚姻不顺。得库通根身旺，坐下偏财正官、伤官，主人刚强正直，光明正大，为官清廉，但性格过于直爽得罪人，难免受到打击、排挤。"
dayself["乙亥"]="中等日柱，十灵日，人聪明。虽处死地，却坐下为正印劫财帮身，故有枯木逢春之象。男命乙亥主得贤妻；女命乙亥主得贵夫，而且对夫忠诚。另外，女命乙亥非常漂亮。"
dayself["丁丑"]="中等日柱，阴阳差错，但恐夫妻不睦。丁火坐丑无根，身弱，但丁为星光，无妨。坐下偏财、七杀、食神，食神生偏财，偏财生杀，也一片顺生，吉利。"
dayself["戊寅"]="中等日柱，阴阳差错，但恐夫妻不睦。坐长生，身旺。生于春，则坐下七杀太重，一生劳苦，多为人造福。"
dayself["癸未"]="中等日柱，十灵日，人聪明。坐下有食神生财、财生杀，因坐偏财、七杀，故男女命逢癸未，重婚较多，但男女均漂亮，爱情专一。"
dayself["丙戌"]="中等日柱，坐火库，身旺，火光熠熠，聪明漂亮。"
dayself["己丑"]="中等日柱，六秀日，貌美多才。通根，比丁丑好，生于得令时为强，比肩夺财争斗，生于失令时则有兄弟帮忙。"
dayself["庚寅"]="中等日柱，十灵日，阴阳差错，但恐夫妻不睦。坐绝地，无根，盖头（干克支），女命克夫再嫁，做偏房可以，男命庚寅不善终，但坐杀印有开拓精神，为官多清廉，支藏偏印宜做副手。"
dayself["壬辰"]="中等日柱，阴阳差错，但恐夫妻不睦。坐水库通根身旺，坐下有劫财生食，食神制杀，身旺用杀，主贵。壬辰日为壬骑龙背，亥时生，为龙归大海，主大贵，午时龙死为下等。"
dayself["甲午"]="中等日柱，不利婚姻，身坐死地，一生劳苦奔波，干生支，对妻子好，伤官生财，对上辈孝顺。日主泄出丁火，主利他人，故对别人照顾有加，可自己到老，却一无所有。"
dayself["乙未"]="中等日柱，坐库通根，财星入库，主富，但爱财小气，再逢命局或大运流年冲库主发财。"
dayself["丙申"]="中等日柱，配偶性强主家。身弱无根，妙在丙火太阳，坐下食神生财，财生杀，壬水杀旺，映照太阳光辉，主人聪明灵气。但杀旺攻身，老来孤独，一辈子辛苦，不能坐享其成。"
dayself["戊戌"]="中等日柱，大败日。坐库通根，土太燥，吉带凶。魁罡主人心直口快，临事果断，也主聪明，文章振发，但不会用阴谋，常得罪人。"
dayself["辛丑"]="中等日柱，通根，坐下有印比食神，主人灵秀，女命辛丑身材好，秀气，守家。"
dayself["壬寅"]="中等日柱，坐下食神生偏财再生杀，又为壬骑虎背，主富贵双全，干支相生，家庭圆满。"
dayself["甲辰"]="中等日柱，不利婚姻，夫妻不睦。得气通根，坐下有偏财破印，缺少贵气，前半生不太好，后半生平安，财禄丰足。"
dayself["丁未"]="中等日柱，阴阳差错，但恐夫妻不睦。得库通根，坐下食神旺，主人漂亮，但好吃，女命贤惠。"
dayself["庚戌"]="中等日柱，坐库通根身强，魁罡，聪明刚毅，有文才，忠义双全。"
dayself["辛亥"]="中等日柱，孤鸾煞，不利婚姻。干支相生，金水相连，文才好（女命稍差），坐沐浴，女命不贞，坐下伤官旺不利夫。男命可得妻财，或漂亮之妻。"
dayself["癸丑"]="中等日柱，坐库通根，人秀气，坐下杀印生比肩，利兄弟，吃力不讨好，劳累奔波。"
dayself["己未"]="中等日柱，六秀日，貌美多才。坐库通根，身旺，坐下有杀印，主人自我意识强。女命己未身材好。"
dayself["壬申"]="下等日柱，十恶大败。配偶风流。身坐长生，太旺，主人好动不拘。纳音剑锋金，男命敢于拼打争斗，不善终。女命重武好斗，具男性风格。"
dayself["癸酉"]="下等日柱，坐偏印，金神，外表柔和，内心阴毒。富于心计，会挣钱，但也会花钱。"
dayself["己卯"]="下等日柱，九鬼妨害，配偶性暴。坐杀截脚，为最差之日，人命己卯，易残疾、受伤，一生劳苦。年上己卯，祖上伤残，不善终；月上己卯，父母不团圆；日上己卯，青年时期命危；时上己卯，老年不得善终，子女不好。"
dayself["甲申"]="下等日柱，夫妻不睦，配偶风流。坐绝地，一辈子辛苦，奔波，但死木逢杀克削，也不失可用。"
dayself["乙酉"]="下等日柱，配偶性暴。坐杀截脚，生在春天有救，生在土月助杀攻身，不妙。人命乙酉多不善终或不高寿。女命乙酉漂亮，浪漫，早恋早婚。"
dayself["辛卯"]="下等日柱，阴阳差错，但恐夫妻不睦。坐偏财，桃花，男命喜欢女色，女命稍好，但漂亮难禁风流（因既漂亮，又浪漫，对异性富吸引力）。"
dayself["庚子"]="下等日柱，坐伤官，女命克夫。干支金水相生，人秀丽聪明，但耿直，讲义气。做官宜公检法部门。"
dayself["丙午"]="下等日柱，阴阳差错，孤鸾煞，但恐夫妻不睦。坐羊刃，过刚，人聪明有文才。男命克妻，女命克夫，不论男女生于丙午，容易受伤。"
dayself["戊申"]="下等日柱，阴阳差错，孤鸾煞，但恐夫妻不睦。土猴孤独，女命早婚者易离婚，或孤身，男命稍好。不论年月均漂亮，但爱情不专，作风不正。"
dayself["壬子"]="下等日柱，九鬼妨害，孤鸾煞。坐刃坐劫财，水太旺，漂亮。女命不会持家，有多少花多少，花心；男命好色，若经商发财，发多少失多少。"
dayself["丁巳"]="下等日柱，孤鸾煞，恐夫妻不睦。丁火坐丙火，阳盛阴衰，白日无光。生时丁巳，老年不能高寿。"
dayself["戊午"]="下等日柱，孤鸾煞。与丙午类似，坐刃太旺，女命克夫，男命克妻，易受伤灾。戊土太燥，主人性格浮躁。"
dayself["癸亥"]="下等日柱，阴阳差错，但恐夫妻不睦。玄武日，坐刃，喜欢独断专行，武将不善终。"

var hidetable = new Array();
hidetable['子']=['癸主20','壬余10'];
hidetable['丑']=['己主18','辛中3','癸余9'];
hidetable['寅']=['甲主16','丙中7','戊余7'];
hidetable['卯']=['乙主20','甲余10'];
hidetable['辰']=['戊主18','癸中3','乙余9'];
hidetable['巳']=['丙主16','庚中9','戊余5'];
hidetable['午']=['丁主11','己中9','丙余10'];
hidetable['未']=['己主18','乙中3','丁余9'];
//hidetable['申']=['庚主17','壬中3','己余7','戊余3'];
hidetable['申']=['庚主17','壬中3','戊余10'];
hidetable['酉']=['辛主20','庚余10'];
hidetable['戌']=['戊主18','丁中3','辛余9'];
hidetable['亥']=['壬主18','甲中5','戊余7'];
var daykey = '甲乙丙丁戊己庚辛壬癸'
var earthkey = '子丑寅卯辰巳午未申酉戌亥'
var fivekey = '木火土金水'
var dayrelationship  = new Array();
for(i = 0;i<daykey.length;i++)
{
    var index = daykey[i]
    dayrelationship[index] = new Array();
}
dayrelationship['甲']['己'] = '甲己合化土,为中正之合,主安分守己,淳朴敦厚' 
dayrelationship['己']['甲'] = dayrelationship['甲']['己'] 
dayrelationship['乙']['庚'] = '乙庚合化金,为仁义之合,主刚柔兼备,重信守义' 
dayrelationship['庚']['乙'] = dayrelationship['乙']['庚']
dayrelationship['丙']['辛'] = '丙辛合化水,为威严之合,主仪表威严,表现出众' 
dayrelationship['辛']['丙'] = dayrelationship['丙']['辛']
dayrelationship['丁']['壬'] = '丁壬合化木,为仁寿之合,主心地仁慈,长命多寿' 
dayrelationship['丁']['壬'] = dayrelationship['壬']['丁']
dayrelationship['戊']['癸'] = '戊癸合化火,为无情之合,主妩媚多情,薄情寡义' 
dayrelationship['戊']['癸'] = dayrelationship['癸']['戊'] 
var earthrelationship = new Array()
var earthcombe = new Array
for(i = 0;i<earthkey.length;i++)
{
    var index = earthkey[i]
    earthrelationship[index] = new Array();
    earthcombe[index] = new Array();
}
//六合
earthrelationship['子']['丑']='子丑合土，夫妻容易沟通，有话讲，较顾家，午可冲散未则不行'
earthrelationship['丑']['子'] = earthrelationship['子']['丑']
earthrelationship['寅']['亥']='寅亥合木，先天比较重视伦理道德，申可冲散巳则不行'
earthrelationship['亥']['寅'] = earthrelationship['寅']['亥']
earthrelationship['卯']['戌']='卯戌合火，比较爱面子，注重外表，顾家，外强内柔，辰冲不散酉可冲散（戊戌辰冲可散）'
earthrelationship['戌']['卯'] = earthrelationship['卯']['戌']
earthrelationship['辰']['酉']='辰酉合金，比较重义气，较没有定性，戌冲不散卯冲则散（戊戌辰冲可散）'
earthrelationship['酉']['辰'] = earthrelationship['辰']['酉']
earthrelationship['巳']['申']='巳申合水，很多时候聪明反被聪明误'
earthrelationship['申']['巳'] = earthrelationship['巳']['申']
earthrelationship['午']['未']='午未合火，生性积极，脾气不好，做事凭感觉，有些任性，丑冲不散子可冲散'
earthrelationship['未']['午'] = earthrelationship['午']['午']
//六冲 子午相冲、丑未相冲、寅申相冲、卯酉相冲、辰戌相冲、巳亥相冲
earthrelationship['子']['午']='子午相冲，水火相战，桃花旺象，困惑不解，一身不安，地域之冲'
earthrelationship['午']['子'] = earthrelationship['子']['午']
earthrelationship['丑']['未']='丑未相冲，固执相持，事多逆阻，职业相冲'
earthrelationship['未']['未'] = earthrelationship['丑']['未']
earthrelationship['寅']['申']='寅申相冲，车关有害，多情泛滥，好管闲事，地域职业都冲'
earthrelationship['申']['寅'] = earthrelationship['寅']['申']
earthrelationship['卯']['酉']='卯酉相冲，桃花旺象，背约失信，忧愁多老，色情纠缠，地域之冲'
earthrelationship['酉']['卯'] = earthrelationship['卯']['酉']
earthrelationship['辰']['戌']='辰戌相冲，克亲伤子，寿短害命，天冲地克，地域之冲'
earthrelationship['戌']['辰'] = earthrelationship['辰']['戌']
earthrelationship['巳']['亥']='巳亥相冲，机会多多，烦事繁多，喜欢助人，职业之冲'
earthrelationship['亥']['巳'] = earthrelationship['巳']['亥']
//六害 子未相害、丑午相害、寅巳相害、卯辰相害、申亥相害、酉戌相害
earthrelationship['子']['未']='子未相害，犯小人，早分离'
earthrelationship['未']['子'] = earthrelationship['子']['未']
earthrelationship['丑']['午']='丑午相害，耐性差，脾气差'
earthrelationship['午']['丑'] = earthrelationship['丑']['午']
earthrelationship['寅']['巳']='寅巳相害，无恩刑，难在家'
earthrelationship['巳']['寅'] = earthrelationship['寅']['巳']
earthrelationship['卯']['辰']='卯辰相害，手足相害'
earthrelationship['辰']['卯'] = earthrelationship['卯']['辰']
earthrelationship['申']['亥']='申亥相害，是非多'
earthrelationship['亥']['申'] = earthrelationship['申']['亥']
earthrelationship['酉']['戌']='酉戌相害，鸡犬不宁'
earthrelationship['戌']['酉'] = earthrelationship['酉']['戌']
//自刑 辰午酉亥自相刑
earthrelationship['辰']['辰']='辰辰自刑，达非所愿'
earthrelationship['亥']['亥']='亥亥自刑，无理取闹'
earthrelationship['午']['午']='午午自刑，事与愿违'
earthrelationship['酉']['酉']='酉酉自刑，不的认同'
earthrelationship['子']['卯']=earthrelationship['卯']['子']='子卯之刑，眼光略高，说话较直，易无礼貌'
//地支相互破
earthrelationship['子']['酉']='平生经常面临经济困难'
earthrelationship['酉']['子'] =earthrelationship['子']['酉']
earthrelationship['寅']['亥']='为人优柔寡断、耳根轻、简单被说服，破中有合、败而复成、六反皆成'
earthrelationship['亥']['寅'] = earthrelationship['寅']['亥']
earthrelationship['辰']['丑']='六亲难谐、男女多见不睦'
earthrelationship['丑']['辰'] = earthrelationship['辰']['丑']
earthrelationship['卯']['午']='多见纷争、或情感为害'
earthrelationship['午']['卯'] =earthrelationship['卯']['午']
earthrelationship['巳']['申']='仿照力强、办事拿不定主意'
earthrelationship['申']['巳'] = earthrelationship['巳']['申']
earthrelationship['未']['戌']='为人有城府'
earthrelationship['戌']['未'] = earthrelationship['未']['戌']


//申子、亥卯、寅午、巳酉相合称生地半合。子辰、卯未、午戌、酉丑相合称墓地半合
earthcombe['申']['子']='申子生地半合水，思想多变，聪明伶俐，冷漠寡淡，生地旺合，弱于三合，强于半合'
earthcombe['子']['申'] = earthcombe['申']['子']
earthcombe['亥']['卯']='亥卯生地半合木，较不切实际，生地旺合，弱于三合，强于半合'
earthcombe['卯']['亥'] = earthcombe['亥']['卯']
earthcombe['寅']['午']='寅午生地半合火，看来做事效率高，执行力好，热情有礼貌，生地旺合，弱于三合，强于半合'
earthcombe['午']['寅'] = earthcombe['寅']['午']
earthcombe['巳']['酉']='巳酉生地半合金,比较爱出头，容易有血光之灾，较会包装自己，生地旺合，弱于三合，强于半合'
earthcombe['酉']['巳'] = earthcombe['巳']['酉']
earthcombe['辰']['子']='子辰墓地半合水，思想多变，聪明伶俐，冷漠寡淡，墓地半合，弱于半合，强于拱合'
earthcombe['子']['辰'] = earthcombe['辰']['子']
earthcombe['卯']['未']='卯未墓地半合木，比较不切实际，墓地半合，弱于半合，强于拱合'
earthcombe['未']['卯'] = earthcombe['卯']['未']
earthcombe['午']['戌']='午戌墓地半合火，看来做事效率高，执行力好，热情有礼貌，墓地半合，弱于半合，强于拱合'
earthcombe['戌']['午'] = earthcombe['午']['戌']
earthcombe['酉']['丑']='酉丑墓地半合金,比较爱出头，容易有血光之灾，较会包装自己，墓地半合，弱于半合，强于拱合'
earthcombe['丑']['酉'] = earthcombe['酉']['丑']
earthcombe['辰']['申']='申辰拱合水，思想多变，聪明伶俐，冷漠寡淡，拱合弱于半合'
earthcombe['申']['辰'] = earthcombe['辰']['申']
earthcombe['亥']['未']='亥未拱合木，比较不切实际，拱合弱于半合'
earthcombe['未']['亥'] = earthcombe['亥']['未']
earthcombe['寅']['戌']='寅戌拱合火，看来做事效率高，执行力好，热情有礼貌，拱合弱于半合'
earthcombe['戌']['寅'] = earthcombe['寅']['戌']
earthcombe['巳']['丑']='巳丑拱合金,比较爱出头，容易有血光之灾，较会包装自己，拱合弱于半合'
earthcombe['丑']['巳'] = earthcombe['巳']['丑']

var twelfth = new Array();
twelfth["甲子"]=twelfth["乙丑"]="海中金"
twelfth["丙寅"]=twelfth["丁卯"]="炉中火"
twelfth["戊辰"]=twelfth["己巳"]="大林木"
twelfth["庚午"]=twelfth["辛未"]="路旁土"
twelfth["壬申"]=twelfth["癸酉"]="剑锋金"
twelfth["甲戌"]=twelfth["乙亥"]="山头火"
twelfth["丙子"]=twelfth["丁丑"]="涧下水"
twelfth["戊寅"]=twelfth["己卯"]="城头土"
twelfth["庚辰"]=twelfth["辛巳"]="白蜡金"
twelfth["壬午"]=twelfth["癸未"]="杨柳木"
twelfth["甲申"]=twelfth["乙酉"]="井泉水"
twelfth["丙戌"]=twelfth["丁亥"]="屋上土"
twelfth["戊子"]=twelfth["己丑"]="霹雳火"
twelfth["庚寅"]=twelfth["辛卯"]="松柏木"
twelfth["壬辰"]=twelfth["癸巳"]="长流水"
twelfth["甲午"]=twelfth["乙未"]="砂中金"
twelfth["丙申"]=twelfth["丁酉"]="山下火"
twelfth["戊戌"]=twelfth["己亥"]="平地木"
twelfth["庚子"]=twelfth["辛丑"]="璧上土"
twelfth["壬寅"]=twelfth["癸卯"]="金箔金"
twelfth["甲辰"]=twelfth["乙巳"]="覆灯火"
twelfth["丙午"]=twelfth["丁未"]="天河水"
twelfth["戊申"]=twelfth["己酉"]="大驿土"
twelfth["庚戌"]=twelfth["辛亥"]="钗钏金"
twelfth["壬子"]=twelfth["癸丑"]="桑柘木"
twelfth["甲寅"]=twelfth["乙卯"]="大溪水"
twelfth["丙辰"]=twelfth["丁巳"]="砂中土"
twelfth["戊午"]=twelfth["己未"]="天上火"
twelfth["庚申"]=twelfth["辛酉"]="石榴木"
twelfth["壬戌"]=twelfth["癸亥"]="大海水"

var twelfthposition = new Array();
twelfthposition["甲亥"]=twelfthposition["乙午"]=twelfthposition["丙寅"]=twelfthposition["丁酉"]=twelfthposition["戊寅"]="长生"
twelfthposition["己酉"]=twelfthposition["庚巳"]=twelfthposition["辛子"]=twelfthposition["壬申"]=twelfthposition["癸卯"]="长生"
twelfthposition["甲子"]=twelfthposition["乙巳"]=twelfthposition["丙卯"]=twelfthposition["丁申"]=twelfthposition["戊卯"]="沐浴"
twelfthposition["己申"]=twelfthposition["庚午"]=twelfthposition["辛亥"]=twelfthposition["壬酉"]=twelfthposition["癸寅"]="沐浴"
twelfthposition["甲丑"]=twelfthposition["乙辰"]=twelfthposition["丙辰"]=twelfthposition["丁未"]=twelfthposition["戊辰"]="冠带"
twelfthposition["己未"]=twelfthposition["庚未"]=twelfthposition["辛戌"]=twelfthposition["壬戌"]=twelfthposition["癸丑"]="冠带"
twelfthposition["甲寅"]=twelfthposition["乙卯"]=twelfthposition["丙巳"]=twelfthposition["丁午"]=twelfthposition["戊巳"]="建禄"
twelfthposition["己午"]=twelfthposition["庚申"]=twelfthposition["辛酉"]=twelfthposition["壬亥"]=twelfthposition["癸子"]="建禄"
twelfthposition["甲卯"]=twelfthposition["乙寅"]=twelfthposition["丙午"]=twelfthposition["丁巳"]=twelfthposition["戊午"]="帝旺"
twelfthposition["己巳"]=twelfthposition["庚酉"]=twelfthposition["辛申"]=twelfthposition["壬子"]=twelfthposition["癸亥"]="帝旺"
twelfthposition["甲辰"]=twelfthposition["乙丑"]=twelfthposition["丙未"]=twelfthposition["丁辰"]=twelfthposition["戊未"]="衰地"
twelfthposition["己辰"]=twelfthposition["庚戌"]=twelfthposition["辛未"]=twelfthposition["壬丑"]=twelfthposition["癸戌"]="衰地"
twelfthposition["甲巳"]=twelfthposition["乙子"]=twelfthposition["丙申"]=twelfthposition["丁卯"]=twelfthposition["戊申"]="病地"
twelfthposition["己卯"]=twelfthposition["庚亥"]=twelfthposition["辛午"]=twelfthposition["壬寅"]=twelfthposition["癸酉"]="病地"
twelfthposition["甲午"]=twelfthposition["乙亥"]=twelfthposition["丙酉"]=twelfthposition["丁寅"]=twelfthposition["戊酉"]="死地"
twelfthposition["己寅"]=twelfthposition["庚子"]=twelfthposition["辛巳"]=twelfthposition["壬卯"]=twelfthposition["癸申"]="死地"
twelfthposition["甲未"]=twelfthposition["乙戌"]=twelfthposition["丙戌"]=twelfthposition["丁丑"]=twelfthposition["戊戌"]="墓地"
twelfthposition["己丑"]=twelfthposition["庚丑"]=twelfthposition["辛辰"]=twelfthposition["壬辰"]=twelfthposition["癸未"]="墓地"
twelfthposition["甲申"]=twelfthposition["乙酉"]=twelfthposition["丙亥"]=twelfthposition["丁子"]=twelfthposition["戊亥"]="绝地"
twelfthposition["己子"]=twelfthposition["庚寅"]=twelfthposition["辛卯"]=twelfthposition["壬巳"]=twelfthposition["癸午"]="绝地"
twelfthposition["甲酉"]=twelfthposition["乙申"]=twelfthposition["丙子"]=twelfthposition["丁亥"]=twelfthposition["戊子"]="胎地"
twelfthposition["己亥"]=twelfthposition["庚卯"]=twelfthposition["辛寅"]=twelfthposition["壬午"]=twelfthposition["癸巳"]="胎地"
twelfthposition["甲戌"]=twelfthposition["乙未"]=twelfthposition["丙丑"]=twelfthposition["丁戌"]=twelfthposition["戊丑"]="养地"
twelfthposition["己戌"]=twelfthposition["庚辰"]=twelfthposition["辛丑"]=twelfthposition["壬未"]=twelfthposition["癸辰"]="养地"


class EightrandomModule extends React.Component {

  constructor(porp) {
        super(porp);
        this.state= {
          isDatePickerVisible: false,
          isTimePickerVisible: false,
            switchstate:true,
            selectedValue: '男',
            datepicker:"",
            datepickershow:"",
            timepicker:"",
            Tip: ""
    }
  }

    in_array(stringToSearch, arrayToSearch)
     {
    for (s = 0; s < arrayToSearch.length; s++) {
     thisEntry = arrayToSearch[s].toString();
     if (thisEntry == stringToSearch) {
      return true;
     }
    }
    return false;
   }

   getlocationself(year,sex)
   {
       return locationself[sex][year];
   }

   gethouselocation(gua)
   {
       return houselocation[gua]
   }

  parentday(other,self)
  {
    var map = new Array()
    
    var num = daykey.indexOf(other);
    //console.log("parentday",num,self,other)
    map['甲'] =['比', '劫', '食', '伤', '财', '才', '杀', '官', '枭', '印']
    map['乙'] =['劫', '比', '伤', '食', '才', '财', '官', '杀', '印', '枭']
    map['丙'] =['枭', '印', '比', '劫', '食', '伤', '财', '才', '杀', '官']
    map['丁'] =['印', '枭', '劫', '比', '伤', '食', '才', '财', '官', '杀']
    map['戊'] =['杀', '官', '枭', '印', '比', '劫', '食', '伤', '财', '才']
    map['己'] =['官', '杀', '印', '枭', '劫', '比', '伤', '食', '才', '财']
    map['庚'] =['财', '才', '杀', '官', '枭', '印', '比', '劫', '食', '伤']
    map['辛'] =['才', '财', '官', '杀', '印', '枭', '劫', '比', '伤', '食']
    map['壬'] =['食', '伤', '财', '才', '杀', '官', '枭', '印', '比', '劫']
    map['癸'] =['伤', '食', '才', '财', '官', '杀', '印', '枭', '劫', '比']
   // console.log(map[self][num])
    return map[self][num];
  
  }

  parentearth(other,self)
  {
    var map = new Array()
    var num = daykey.indexOf(self);
    //console.log(num,self,other)
    map['子'] =['枭', '印', '杀', '官', '财', '才', '食', '伤', '比', '劫']
    map['丑'] =['才', '财', '伤', '食', '劫', '比', '印', '枭', '官', '杀']
    map['寅'] =['比', '劫', '枭', '印', '杀', '官', '财', '才', '食', '伤']
    map['卯'] =['劫', '比', '印', '枭', '官', '杀', '才', '财', '伤', '食']
    map['辰'] =['财', '才', '食', '伤', '比', '劫', '枭', '印', '杀', '官']
    map['巳'] =['伤', '食', '劫', '比', '印', '枭', '官', '杀', '才', '财']
    map['午'] =['食', '伤', '比', '劫', '枭', '印', '杀', '官', '财', '才']
    map['未'] =['才', '财', '伤', '食', '劫', '比', '印', '枭', '官', '杀']
    map['申'] =['杀', '官', '财', '才', '食', '伤', '比', '劫', '枭', '印']
    map['酉'] =['官', '杀', '才', '财', '伤', '食', '劫', '比', '印', '枭']
    map['戌'] =['财', '才', '食', '伤', '比', '劫', '枭', '印', '杀', '官']
    map['亥'] =['印', '枭', '官', '杀', '才', '财', '伤', '食', '劫', '比']
    //console.log(map[other][num])
    return map[other][num];
  
  }

  gethide(key)
  {
        //console.log("gethide",key)

      var r = "";
      var i = 0;
      //console.log(key)
      while(undefined!=hidetable[key][i])
      {
          r = r + hidetable[key][i][0]
          i++
      }
      return r

  }
  gethideshishen(other,self)
  {
    var r = ""
    var i=0
    //console.log("gethideshishen",other,self)
    while(undefined!=other[i])
    {
        r = r + this.parentday(other[i],self)
        i++
    }
    return r;
  }

  getfive(key)
  {
      //console.log(key)
      var p = new Array()
      var q = new Array()
      var i = 0;
      for(i=0;i<10;i++)
      {
          var m = daykey[i]
            p[m] = 0;
            q[i] = 0;
      }
      
      for(i=0;i<8;i=i+2)
      {
            var m = key[i]
            p[m] = p[m] + 36
      }
      //console.log(p);
      for(i=1;i<8;i=i+2)
      {
        var n = 0
        var m = key[i]
        while(undefined!=hidetable[m][n])
        {
            var t = hidetable[m][n][0]
            var v = Number(hidetable[m][n].slice(2))
            p[t] = p[t] + v;
            n++
        }
      }
      for(i=1;i<=5;i++)
      {
        var m = daykey[i*2-1]
        var n = daykey[i*2-2]
        q[i-1] = Number(p[m]) + Number(p[n]);
        q[i+4] = Math.floor(q[i-1]/264*1000)/10
      }
      //console.log(q)
      //console.log(p);
      return {p,q}

  }
  getrelationshipcombe(arr)
  {
      
      var e = new Array()
      e = e.concat(arr)
      console.log("getrelationshipcombe",e,arr)
      var er = ""
        //三会局
        if(true == this.in_array('寅',e) && true == this.in_array('卯',e) && true == this.in_array('辰',e) )
        {
            er = er +"寅卯辰三会东方木"+  " "
        }
        if(true == this.in_array('巳',e) && true == this.in_array('午',e) && true == this.in_array('未',e) )
        {
            er = er +"巳午未三会南方火"+  " "
        }
        if(true == this.in_array('申',e) && true == this.in_array('酉',e) && true == this.in_array('戌',e) )
        {
            er = er +"申酉戌三会西方金"+  " "
        }
        if(true == this.in_array('亥',e) && true == this.in_array('子',e) && true == this.in_array('丑',e) )
        {
            er = er +"亥子丑三会北方水"+  " "
        }

        //三合局 申子辰合水 亥卯未合木 寅午戌合火 巳酉丑合金
        if(true == this.in_array('申',e) && true == this.in_array('子',e) && true == this.in_array('辰',e) )
        {
            er = er +"申子辰三合水"+  " "
        }
        if(true == this.in_array('亥',e) && true == this.in_array('卯',e) && true == this.in_array('未',e) )
        {
            er = er +"亥卯未三合木"+  " "
        }
        if(true == this.in_array('寅',e) && true == this.in_array('午',e) && true == this.in_array('戌',e) )
        {
            er = er +"寅午戌三合火"+  " "
        }
        if(true == this.in_array('巳',e) && true == this.in_array('酉',e) && true == this.in_array('丑',e) )
        {
            er = er +"巳酉丑三合金"+  " "
        }

        //三刑
        if(true == this.in_array('寅',e) && true == this.in_array('巳',e) && true == this.in_array('申',e) )
        {
            er = er +"地支无恩之刑，无人赏识，被嫌弃，替人做事任劳任怨不得回报"+  " "
        }
        if( (true == this.in_array('寅',e) && true == this.in_array('巳',e)) || (true == this.in_array('申',e) && true == this.in_array('寅',e))  || (true == this.in_array('申',e) && true == this.in_array('巳',e))  )
        {
            er = er +"地支无恩之隐刑，无人赏识，被嫌弃，替人做事任劳任怨不得回报"+  " "
        }
        if(true == this.in_array('丑',e) && true == this.in_array('未',e) && true == this.in_array('戌',e) )
        {
            er = er +"地支恃势之刑，太自信，固执，自负，欠考虑凭感觉"+  " "
        }
        if( (true == this.in_array('丑',e) && true == this.in_array('未',e)) || (true == this.in_array('丑',e) && true == this.in_array('戌',e))  || (true == this.in_array('未',e) && true == this.in_array('戌',e))  )
        {
            er = er +"地支恃势之隐刑，太自信，固执，自负，欠考虑凭感觉"+  " "
        }
        return er
  }
  getrelationship(key,year,bigyears)
  {
      //console.log("getrelationship",bigyears)
    var dr = ''
    var er = ''
    var lr = ''
    var br = ''
    var d = new Array();
    var e = new Array();
    var bdyear = bigyears[0]
    var bzyear = bigyears[1]
    for(i=0;i<4;i++)
    {
        d[i] = key[i*2]
        e[i] = key[i*2+1]
    }

        var yy,mm,dd,tt;
        yy = d[0],
        mm = d[1],
        dd = d[2],
        tt = d[3]
        if(undefined!=dayrelationship[yy][mm])
        {
            dr = dr +"年月"+ dayrelationship[yy][mm] + " "
        }
        
        if(undefined!=dayrelationship[yy][dd])
        {
            dr = dr +"年日"+ dayrelationship[yy][dd] + " "
        }
        if(undefined!=dayrelationship[yy][tt])
        {
            dr = dr +"年时"+ dayrelationship[yy][tt] + " "
        }
        
        if(undefined!=dayrelationship[mm][dd])
        {
            dr = dr +"月日"+ dayrelationship[mm][dd] + " "
        }
        
        if(undefined!=dayrelationship[mm][tt])
        {
            dr = dr +"月时"+ dayrelationship[mm][tt] + " "
        }
        
        if(undefined!=dayrelationship[dd][tt])
        {
            dr = dr +"时日"+ dayrelationship[dd][tt] + " "
        }
        

        if(undefined!=dayrelationship[bdyear][yy])
        {
            dr = dr +"大运年年"+ dayrelationship[bdyear][yy] + " "
        }
        if(undefined!=dayrelationship[bdyear][mm])
        {
            dr = dr +"大运年月"+ dayrelationship[bdyear][mm] + " "
        }
        
        if(undefined!=dayrelationship[bdyear][dd])
        {
            dr = dr +"大运年日"+ dayrelationship[bdyear][dd] + " "
        }
        if(undefined!=dayrelationship[bdyear][tt])
        {
            dr = dr +"大运年时"+ dayrelationship[bdyear][tt] + " "
        }
        if(""==dr)
        {
            dr = "八字天干无合"
        }

        yy = e[0],
        mm = e[1],
        dd = e[2],
        tt = e[3]

        //六合，六冲，六害，自刑
        if(undefined!=earthrelationship[yy][mm])
        {
            er = er +"年月"+ earthrelationship[yy][mm] + " "
            if(-1!=earthrelationship[yy][mm].indexOf("冲"))
            {
                er = er + "年月相冲，离祖别乡" + " "
            }
        }
        
        if(undefined!=earthrelationship[yy][dd])
        {
            er = er +"年日"+ earthrelationship[yy][dd] + " "
            if(-1!=earthrelationship[yy][dd].indexOf("冲"))
            {
                er = er + "年日相冲, 与亲不和" + " "
            }
        }
        if(undefined!=earthrelationship[yy][tt])
        {
            er = er +"年时"+ earthrelationship[yy][tt] + " "
            if(-1!=earthrelationship[yy][tt].indexOf("冲"))
            {
                er = er + "年时相冲, 与子不和" + " "
            }
        }
        
        if(undefined!=earthrelationship[mm][dd])
        {
            er = er +"月日"+ earthrelationship[mm][dd] + " "
            if(-1!=earthrelationship[mm][dd].indexOf("冲"))
            {
                er = er + "日冲月支, 犯父母兄弟" + " "
            }
        }
        
        if(undefined!=earthrelationship[mm][tt])
        {
            er = er +"月时"+ earthrelationship[mm][tt] + " "
            if(-1!=earthrelationship[mm][tt].indexOf("冲"))
            {
                er = er + "四柱逢冲, 多不居父母家，隔冲冲力减弱" + " "
            }
        }
        
        if(undefined!=earthrelationship[dd][tt])
        {
            er = er +"时日"+ earthrelationship[dd][tt] + " "
            if(-1!=earthrelationship[dd][tt].indexOf("冲"))
            {
                er = er + "四柱逢冲, 多不居父母家，隔冲冲力减弱" + " "
            }
        }

        

        //三合三会半合

        if(undefined!=earthcombe[yy][mm])
        {
            er = er +"年月半合"+ earthcombe[yy][mm] + " "
        }
        
        if(undefined!=earthcombe[yy][dd])
        {
            er = er +"年日半合"+ earthcombe[yy][dd] + " "
        }
        if(undefined!=earthcombe[yy][tt])
        {
            er = er +"年时半合"+ earthcombe[yy][tt] + " "
        }
        
        if(undefined!=earthcombe[mm][dd])
        {
            er = er +"日月半合"+ earthcombe[mm][dd] + " "
        }
        if(undefined!=earthcombe[mm][tt])
        {
            er = er +"月时半合"+ earthcombe[mm][tt] + " "
        }
        if(undefined!=earthcombe[dd][tt])
        {
            er = er +"日时半合"+ earthcombe[dd][tt] + " "
        }
        
        er = er + this.getrelationshipcombe(e)


        if(undefined!=earthrelationship[yy][year])
        {
            lr = lr +"流年"+ earthrelationship[yy][year] + " "
        }
        
        if(undefined!=earthrelationship[dd][year])
        {
            lr = lr +"流年日"+ earthrelationship[dd][year] + " "
            if(-1!=earthrelationship[dd][year].indexOf("冲"))
            {
                lr = lr + "年日相冲, 与亲不和" + " "
            }
        }
        if(undefined!=earthrelationship[tt][year])
        {
            lr = lr +"流年时"+ earthrelationship[tt][year] + " "
            if(-1!=earthrelationship[tt][year].indexOf("冲"))
            {
                lr = lr + "年时相冲, 与子不和" + " "
            }
        }
        
        if(undefined!=earthrelationship[mm][year])
        {
            lr = lr +"流年月"+ earthrelationship[mm][year] + " "
            if(-1!=earthrelationship[mm][year].indexOf("冲"))
            {
                lr = lr + "年月相冲，离祖别乡" + " "
            }
        }

        e[4]=year
        var lr_ret = this.getrelationshipcombe(e)
        lr = lr + (""!=lr_ret?"流年：":"") + lr_ret
        if(""==lr)
        {
            lr = "流年八字地支无刑冲克害"
        }


        if(undefined!=earthrelationship[yy][bzyear])
        {
            br = br +"大运年年"+ earthrelationship[yy][bzyear] + " "
        }
        if(undefined!=earthrelationship[mm][bzyear])
        {
            br = br +"大运年月"+ earthrelationship[mm][bzyear] + " "
            if(-1!=earthrelationship[mm][bzyear].indexOf("冲"))
            {
                br = br + "年月相冲，离祖别乡" + " "
            }
        }
        if(undefined!=earthrelationship[dd][bzyear])
        {
            br = br +"大运年日"+ earthrelationship[dd][bzyear] + " "
            if(-1!=earthrelationship[dd][bzyear].indexOf("冲"))
            {
                br = br + "年日相冲, 与亲不和" + " "
            }
        }
        if(undefined!=earthrelationship[tt][bzyear])
        {
            br = br +"大运年时"+ earthrelationship[tt][bzyear] + " "
            if(-1!=earthrelationship[tt][bzyear].indexOf("冲"))
            {
                br = br + "年时相冲, 与子不和" + " "
            }
        }
        e[5]=bigyears[1]
        var br_ret = this.getrelationshipcombe(e)
        br = br + (""!=br_ret?"大运：":"") + br_ret
        
        if(""==br)
        {
            br = "大运八字地支无刑冲克害"
        }
        
       

        if(""==er)
        {
            er = "八字地支无刑冲克害"
        }



        return {dr,er,lr,br};

        
  }

  gettwelfthposition(key)
  {
      return twelfthposition[key];
  }

  gettwelfth(key)
  {
    return twelfth[key];
  }
  getbigluckyear(key,sex)
  {
      //console.log(key,sex)
    var luckyear = new Array();
    luckyear.push("甲子");
    luckyear.push("乙丑");
    luckyear.push("丙寅")
    luckyear.push("丁卯")
    luckyear.push("戊辰")
    luckyear.push("己巳")
    luckyear.push("庚午")
    luckyear.push("辛未")
    luckyear.push("壬申")
    luckyear.push("癸酉")
    luckyear.push("甲戌")
    luckyear.push("乙亥")
    luckyear.push("丙子")
    luckyear.push("丁丑")
    luckyear.push("戊寅")
    luckyear.push("己卯")
    luckyear.push("庚辰")
    luckyear.push("辛巳")
    luckyear.push("壬午")
    luckyear.push("癸未")
    luckyear.push("甲申")
    luckyear.push("乙酉")
    luckyear.push("丙戌")
    luckyear.push("丁亥")
    luckyear.push("戊子")
    luckyear.push("己丑")
    luckyear.push("庚寅")
    luckyear.push("辛卯")
    luckyear.push("壬辰")
    luckyear.push("癸巳")
    luckyear.push("甲午")
    luckyear.push("乙未")
    luckyear.push("丙申")
    luckyear.push("丁酉")
    luckyear.push("戊戌")
    luckyear.push("己亥")
    luckyear.push("庚子")
    luckyear.push("辛丑")
    luckyear.push("壬寅")
    luckyear.push("癸卯")
    luckyear.push("甲辰")
    luckyear.push("乙巳")
    luckyear.push("丙午")
    luckyear.push("丁未")
    luckyear.push("戊申")
    luckyear.push("己酉")
    luckyear.push("庚戌")
    luckyear.push("辛亥")
    luckyear.push("壬子")
    luckyear.push("癸丑")
    luckyear.push("甲寅")
    luckyear.push("乙卯")
    luckyear.push("丙辰")
    luckyear.push("丁巳")
    luckyear.push("戊午")
    luckyear.push("己未")
    luckyear.push("庚申")
    luckyear.push("辛酉");
    luckyear.push("壬戌");
    luckyear.push("癸亥");
    
    var pos="甲丙戊庚壬"
    var neg="乙丁己辛癸"
    var ord = key[2]+key[3];
    if(pos.indexOf(key[0])>0)
    {
        //key为年干男顺女逆
        if(sex=="乾造")
        {
            for(var i=0;i<60;i++)
            {
                if(ord == luckyear[i])
                {
                    
                    var ret = new Array()
                    for(var x = i+1;x<i+9;x++)
                    {
                        ret.push(luckyear[(x%60)]);
                    }
                    return ret;
                }
            }

        }
        else{
            for(var i=0;i<60;i++)
            {
                if(ord == luckyear[i])
                {
                    
                    var ret = new Array()
                    for(var x = i-1+60;x>i-9+60;x--)
                    {
                        ret.push(luckyear[(x%60)]);
                    }
                    return ret;
                }
            }

        }

    }
    else(neg.indexOf(key[0])>0)
    {
        //key为年干女顺男逆
        if(sex=="乾造")
        {
            for(var i=0;i<60;i++)
            {
                if(ord == luckyear[i])
                {
                    var ret = new Array()
                    for(var x = i-1+60;x>i-9+60;x--)
                    {
                        ret.push(luckyear[(x%60)]);
                    }
                    return ret;
                }
            }
        }
        else{
            for(var i=0;i<60;i++)
            {
                if(ord == luckyear[i])
                {
                    var ret = new Array()
                    for(var x = i+1;x<i+9;x++)
                    {
                        ret.push(luckyear[(x%60)]);
                    }
                    return ret;
                }
            }

        }
    }
  }
  getselfinfo(key)
  {
    var self = dayself[key];
      var tip = ""
      if(-1!=key.indexOf("甲"))
      {
        tip = "甲木喜庚，喜断为用"
      }
      if(-1!=key.indexOf("乙"))
      {
        tip = "乙木喜金，庚辛喜用"
      }
      if(-1!=key.indexOf("丙")||-1!=key.indexOf("丁"))
      {
        tip = "火需附燃，以木为用"
      }
      if(-1!=key.indexOf("庚")||-1!=key.indexOf("辛"))
      {
        tip = "金需明耀，需火强锻"
      }
      if(-1!=key.indexOf("壬")||-1!=key.indexOf("癸"))
      {
        tip = "水需寻源，需金生水"
      }
      if(-1!=key.indexOf("戊"))
      {
        tip = "戊需含金，蕴含仓储"
      }
      if(-1!=key.indexOf("己"))
      {
        tip = "己喜水养，孕育生长"
      }
      tip = "喜用:"+tip
      
      //console.log("tip",tip)
      return {self,tip}
  }
  getminlucky(key,sex,year)
  {
    console.log("getminlucky",key,sex,year)
    var luckyear = new Array();
    luckyear.push("甲子");
    luckyear.push("乙丑");
    luckyear.push("丙寅")
    luckyear.push("丁卯")
    luckyear.push("戊辰")
    luckyear.push("己巳")
    luckyear.push("庚午")
    luckyear.push("辛未")
    luckyear.push("壬申")
    luckyear.push("癸酉")
    luckyear.push("甲戌")
    luckyear.push("乙亥")
    luckyear.push("丙子")
    luckyear.push("丁丑")
    luckyear.push("戊寅")
    luckyear.push("己卯")
    luckyear.push("庚辰")
    luckyear.push("辛巳")
    luckyear.push("壬午")
    luckyear.push("癸未")
    luckyear.push("甲申")
    luckyear.push("乙酉")
    luckyear.push("丙戌")
    luckyear.push("丁亥")
    luckyear.push("戊子")
    luckyear.push("己丑")
    luckyear.push("庚寅")
    luckyear.push("辛卯")
    luckyear.push("壬辰")
    luckyear.push("癸巳")
    luckyear.push("甲午")
    luckyear.push("乙未")
    luckyear.push("丙申")
    luckyear.push("丁酉")
    luckyear.push("戊戌")
    luckyear.push("己亥")
    luckyear.push("庚子")
    luckyear.push("辛丑")
    luckyear.push("壬寅")
    luckyear.push("癸卯")
    luckyear.push("甲辰")
    luckyear.push("乙巳")
    luckyear.push("丙午")
    luckyear.push("丁未")
    luckyear.push("戊申")
    luckyear.push("己酉")
    luckyear.push("庚戌")
    luckyear.push("辛亥")
    luckyear.push("壬子")
    luckyear.push("癸丑")
    luckyear.push("甲寅")
    luckyear.push("乙卯")
    luckyear.push("丙辰")
    luckyear.push("丁巳")
    luckyear.push("戊午")
    luckyear.push("己未")
    luckyear.push("庚申")
    luckyear.push("辛酉");
    luckyear.push("壬戌");
    luckyear.push("癸亥");
    var ord = key[0]+key[1];
    //console.log("getminlucky",year,ord)
    var curyear= Number(year)


    for(var i=0;i<60;i++)
    {
        if(ord == luckyear[i])
        {
            var ret = new Array()
            for(var x = i;x<i+72;x++)
            {
                ret.push(luckyear[(x%60)]+" "+(curyear++));
            }
            return ret;
        }
    }

       
  }
  shensha_dayg2earthz(dayg,earthz)
  {//日干见其他干支
    console.log("shensha_dayg2earthz",dayg,earthz)
    var o = dayg+earthz;
    var map = new Array()
    /* map['甲寅'] = */ map['乙丑'] = map['丙子']  /* = map['丁酉'] */ /* = map['戊申'] */ /* = map['己未'] */ = map['庚午'] = map['辛巳'] = map['壬辰'] /* = map['癸卯'] */ = '福星 '
    map['甲丑'] = map['乙子'] = map['丙亥'] = map['丁亥'] = map['戊丑'] = map['己申'] = map['庚丑'] = map['辛午'] = map['壬卯'] = map['癸卯'] = '天乙贵人 '
    map['甲未'] = map['乙申'] = map['丙酉'] /* = map['丁酉'] */ = map['戊未'] = map['己子'] = map['庚未'] = map['辛寅'] = map['壬巳'] = map['癸巳'] = '天乙贵人 '
    map['甲巳'] = map['乙午'] = map['丙申'] = map['丁酉'] = map['戊申'] = map['己酉'] = map['庚亥'] = map['辛子'] = map['壬寅'] /* = map['癸卯'] */ = '文昌 '
    map['甲亥'] /* =map['乙午'] */ = map['丙未'] /* =map['丁酉'] */ = map['戊寅'] /* =map['己酉'] */ = map['庚巳'] = map['辛子'] = map['壬申'] /* =map['癸卯'] */ = '学堂 '
    map['甲卯'] = map['乙辰'] = map['丙午'] = map['丁未'] = map['戊午'] = map['己未'] = map['庚酉'] = map['辛戌'] = map['壬子'] = map['癸丑'] = '羊刃 '
    map['甲寅'] = map['乙卯'] = map['丙巳'] = map['丁午'] = map['戊巳'] = map['己午'] = map['庚申'] = map['辛酉'] = map['壬亥'] = map['癸子'] = '干禄 '
    map['甲午'] /* =map['乙午'] */ = map['丙寅'] /* = map['丁未'] */ = map['戊辰'] = map['己辰'] /* = map['庚戌']  =map['辛酉'] */ = map['壬子'] = map['申子'] = '红艳 '
    map['甲申'] /* =map['乙申'] */ = '红艳 '
    map['甲辰'] = map['乙巳'] = map['丙未'] = map['丁申']/*  = map['戊未'] = map['己申'] */ = map['庚戌'] = map['辛亥'] = map['壬丑'] = map['癸寅'] = '金舆 '
    map['甲酉'] = map['乙戌'] /* = map['丙未'] */ = map['丁申'] = map['戊巳'] = map['己午'] = map['庚辰'] = map['辛卯'] = map['壬亥'] /* =map['癸寅'] */ = '流霞 '
    /* map['丙子'] =  */map['丁丑'] = map['戊子'] = map['巳丑'] = map['庚卯'] = map['辛辰'] = map['壬午'] = map['癸未'] = '飞刃 '
    return undefined!=map[o]?map[o]:""
  }
  shensha_moon_day(moonz,other){
    var o = moonz+other;
    var map = new Array()
    map['戌丙'] = map['亥乙'] = map['子巳'] = map['丑庚'] = map['寅丁'] = map['卯申'] = map['辰壬'] = map['巳辛'] = map['午亥'] = map['未甲'] = map['申癸'] = map['酉寅'] = '天德贵人 '
    return undefined!=map[o]?map[o]:""
  }
  shensha_moon_moon(moonz,other){
    var o = moonz+other;
    var map = new Array()
    map['寅丙'] = map['午丙'] = map['戌丙'] = map['申壬'] = map['子壬'] = map['辰壬'] = map['亥甲'] = map['卯甲'] = map['未甲'] = map['巳庚'] = map['酉庚'] = map['丑庚'] = '月德贵人 '
    return undefined!=map[o]?map[o]:""
  }

  shensha_moon(moonz,other)
  {//月支见其他干支
    console.log("shensha_moon",moonz,other)
    if(moonz==other)
    {
        return ""
    }
    return this.shensha_moon_day(moonz,other)+this.shensha_moon_moon(moonz,other)
  }
  shensha_dayz2earthz(dayz,earthz)
  {//日支见其他地支
    console.log("shensha_dayz2earthz",dayz,earthz)
    var o = dayz+earthz;
    var map = new Array()
    map['子寅'] = map['丑亥'] = map['寅申'] = map['卯巳'] = map['辰寅'] = map['巳亥'] = map['午申'] = map['未巳'] = map['申寅'] = map['酉亥'] = map['戌申'] = map['亥巳'] = '驿马 '
    map['子辰'] = map['丑丑'] = map['寅戌'] = map['卯未'] = map['辰辰'] = map['巳丑'] = map['午戌'] = map['未未'] = map['申辰'] = map['酉丑'] = map['戌戌'] = map['亥未'] = '华盖 '
    map['子酉'] = map['丑午'] = map['寅卯'] = map['卯子'] = map['辰酉'] = map['巳午'] = map['午卯'] = map['未子'] = map['申酉'] = map['酉午'] = map['戌卯'] = map['亥子'] = '桃花 '
    map['子子'] = map['丑酉'] = map['寅午'] = map['卯卯'] = map['辰子'] = map['巳酉'] = map['午午'] = map['未卯'] = map['申子'] = map['酉酉'] = map['戌午'] = map['亥卯'] = '将星 '
    
    return undefined!=map[o]?map[o]:""
  }
  shansha_gousha(yearz,earthz)
  {
      console.log("shansha_gousha",yearz,earthz)
    var o = yearz+earthz;
    var map = new Array()
    map['子卯'] = map['丑辰'] = map['寅巳'] = map['卯午'] = map['辰未'] = map['巳申'] = map['午酉'] = map['未戌'] = map['申亥'] = map['酉子'] = map['戌丑'] = map['亥寅'] = '勾煞 '
    map['子酉'] = map['丑戌'] = map['寅亥'] = map['卯子'] = map['辰丑'] = map['巳寅'] = map['午卯'] = map['未辰'] = map['申巳'] = map['酉午'] = map['戌未'] = map['亥申'] = '绞煞 '
    return undefined!=map[o]?map[o]:""
  }
  shensha_yearz2earthz(yearz,earthz)
  {//年支见其他地支
    console.log("shensha_yearz2earthz",yearz,earthz)
    var o = yearz+earthz;
    var map = new Array()
    map['子子'] = map['丑酉'] = map['寅午'] = map['卯卯'] = map['辰子'] = map['巳酉'] = map['午午'] = map['未卯'] = map['申子'] = map['酉酉'] = map['戌午'] = map['亥卯'] = '将星 '
    map['子酉'] = map['丑午'] = map['寅卯'] = map['卯子'] = map['辰酉'] = map['巳午'] = map['午卯'] = map['未子'] = map['申酉'] = map['酉午'] = map['戌卯'] = map['亥子'] = '桃花 '
    map['子寅'] = map['丑寅'] = map['寅巳'] = map['卯巳'] = map['辰巳'] = map['巳申'] = map['午申'] = map['未申'] = map['申亥'] = map['酉亥'] = map['戌亥'] = map['亥寅'] = '孤辰 '
    map['子戌'] = map['丑戌'] = map['寅丑'] = map['卯丑'] = map['辰丑'] = map['巳辰'] = map['午辰'] = map['未辰'] = map['申未'] = map['酉未'] = map['戌未'] = map['亥戌'] = '寡宿 '
    map['子辰'] = map['丑丑'] = map['寅戌'] = map['卯未'] = map['辰辰'] = map['巳丑'] = map['午戌'] = map['未未'] = map['申辰'] = map['酉丑'] = map['戌戌'] = map['亥未'] = '华盖 '
  
    map['子卯'] /* = map['丑寅']  = map['寅丑'] = map['卯子']*/ = map['辰亥'] = map['巳戌'] = map['午酉'] /* = map['未申'] = map['申未']  = map['酉午'] = map['戌卯']*/ = map['亥辰'] = '红鸾 '
  
    map['子酉'] = map['丑申'] = map['寅未'] = map['卯午'] = map['辰巳'] /* = map['巳辰']  = map['午卯']*/ = map['未寅'] = map['申丑'] = map['酉子'] = map['戌辰'] = map['亥巳'] = '天喜 '
    
    return (undefined!=map[o]?map[o]:"" )+ this.shansha_gousha(yearz,earthz)
  }
  shensha_tianluo(year,earthz){
    console.log("shensha_tianluo",year,earthz)
    var map = new Array()
    map['戊子']=map['己丑']=map['丙寅']=map['丁卯']=map['甲辰']=map['乙巳']=map['戊午']=map['己未']=map['丙申']=map['丁酉']=map['甲戌']=map['乙亥']=""
    if(undefined!=map[year] && (earthz == '戌' || earthz == '亥'))
    {
        return '天罗'
    }
    return ""
  }
  shensha_diwang(year,earthz){
    console.log("shensha_diwang",year,earthz)
    var map = new Array()
    map['丙子']=map['丁丑']=map['甲寅']=map['乙卯']=map['壬辰']=map['癸巳']=map['丙午']=map['丁未']=map['甲申']=map['乙酉']=map['壬戌']=map['癸亥']=map['庚子']=map['辛丑']=map['戊寅']=map['己卯']=map['丙辰']=map['丁巳']=map['庚午']=map['辛未']=map['戊申']=map['己酉']=map['丙戌']=map['丁亥']=""

        if(undefined!=map[year] && (earthz == '辰' || earthz == '巳'))
        {
            return '地网 '
        }
        return ""
    }
    /**
	 * 某年的第n个节气为几日
	 * 31556925974.7为地球公转周期，是毫秒
	 * 1890年的正小寒点：01-05 16:02:31，1890年为基准点
	 * @param {Number} y 公历年
	 * @param {Number} n 第几个节气，从0小寒起算
	 * 由于农历24节气交节时刻采用近似算法，可能存在少量误差(30分钟内)
	 */
    getTerm(y,n) {
        var termInfo = [0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758]; 
        var offDate = new Date( ( 31556925974.7*(y-1890) + termInfo[n]*60000  ) + Date.UTC(1890,0,5,16,2,31) );
        return(offDate.getUTCDate());
    }
    isLeapYear(year) {  return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0);  }
    formateDayD4(month,day,year){
        var monthdays = [31,28,31,30,31,30,31,31,30,31,30,31];
        if(this.isLeapYear(year))
        {
            monthdays[1]= 29
        }
        var ret = 0
        for(i=1;i<=month;i++)
        {
            ret = ret+monthdays[i]
        }
		return Number(ret+day);
    };
    getYearTerm(year){
        var solarTerm= ['小寒', '大寒', '立春', '雨水', '惊蛰', '春分', '清明', '谷雨', '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑', '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪','冬至'] //二十四节气
        var res = []
        for(i=0;i<400;i++)
        {
            res[i] = 0;
        }
        var month = 0;
		for(var i=0;i<24;i++){
            var day = this.getTerm(year,i);
            if(i%2==0)month++
            var key = Number(this.formateDayD4(month-1,day,year))
            
            if(i%2==0) res[key] = solarTerm[i];
            console.log("getYearTermday",key,res[key] ,month,day,year)
        }

        var nextterm = this.getTerm(year+1,0)
        var nextyearkey = this.formateDayD4(0,nextterm)
 
        if(this.isLeapYear(year)) {
            res[Number(366+nextyearkey)] =  solarTerm[0]
        }
        else
        {
            res[Number(365+nextyearkey)] =  solarTerm[0]
        } 
        
		return res;
    };
    getbigluckyearbegin(term,birth,key,sex)
    {
        var mybirth = new Date(birth)
        var pos="甲丙戊庚壬"
        var neg="乙丁己辛癸"
        var last=0
        var next=0
        var mytime = this.formateDayD4(mybirth.getMonth(),mybirth.getDate(),mybirth.getFullYear())
        while(0==term[mytime+next])
        {
            next++;
            console.log("next",term[mytime+next],mybirth.getDate())
        }

        if(0==term[mytime])
        {
            
            while(0==term[mytime-last])
            {
                last++;
                if(mytime-last<=0)
                {//回到上一年了
                    var lastyear = mybirth.getFullYear()-1
                    
                    var lastterm = this.getTerm(lastyear,23)
                    last = last + 31 - lastterm;
                    console.log("getbigluckyearbegintolastyear",lastterm,last)
                    break;
                }
            }
        }
        else{
            last = 0
        }
        console.log("getbigluckyearbegin",mytime,next,last,key,next%3)
        if(pos.indexOf(key[0])>0)
        {
            //key为年干男顺女逆
            if(sex=="乾造")
            {
                return Number(mybirth.getFullYear() + next/3 + mybirth.getMonth()/12 )
            }
            else{
                return Number(mybirth.getFullYear() + last/3 + mybirth.getMonth()/12)
            }
        }
        else(neg.indexOf(key[0])>0)
        {
            //key为年干女顺男逆
            if(sex=="乾造")
            {
                return Number(mybirth.getFullYear() + last/3 + mybirth.getMonth()/12)
            }
            else{
                return Number( mybirth.getFullYear() + next/3 + mybirth.getMonth()/12 )
            }
        }
    }
    geikeypower(keymonthz)
    {
        var map= new Array()
        map['寅'] =['旺', '相', '死', '囚', '休']
        map['卯'] =['旺', '相', '死', '囚', '休']
        map['辰'] =['囚', '休', '旺', '相', '死']
        map['巳'] =['休', '旺', '相', '死', '囚']
        map['午'] =['休', '旺', '相', '死', '囚']
        map['未'] =['囚', '休', '旺', '相', '死']
        map['申'] =['死', '囚', '休', '旺', '相']
        map['酉'] =['死', '囚', '休', '旺', '相']
        map['戌'] =['囚', '休', '旺', '相', '死']
        map['亥'] =['相', '死', '囚', '休', '旺']
        map['子'] =['相', '死', '囚', '休', '旺']
        map['丑'] =['囚', '休', '旺', '相', '死']
        return undefined!=map[keymonthz]?map[keymonthz]:[];
    }
    getmarryinfo(eightkey,sex,combe,shishen)
    {
        console.log(combe)
        var info=""
        if("乾造"==sex)
        {
            if((eightkey[4]=="甲" || eightkey[4]=="乙") && (eightkey[3] == "寅" || eightkey[3] == "卯")) info=info+"官星过旺，财星入墓"
            else if((eightkey[4]=="丙" || eightkey[4]=="丁") && (eightkey[3] == "巳" || eightkey[3] == "午")) info=info+"官星过旺，财星入墓"
            else if((eightkey[4]=="戊" || eightkey[4]=="己") && (eightkey[3] == "丑" || eightkey[3] == "未" || eightkey[3] == "辰" || eightkey[3] == "戌")) info=info+"官星过旺，财星入墓"
            else if((eightkey[4]=="庚" || eightkey[4]=="辛") && (eightkey[3] == "申" || eightkey[3] == "酉")) info=info+"官星过旺，财星入墓"
            else if((eightkey[4]=="壬" || eightkey[4]=="癸") && (eightkey[3] == "亥" || eightkey[3] == "子")) info=info+"官星过旺，财星入墓"
            var count = 0
            for(i=0;i<shishen.length;i++)
            {
                if("财"==shishen[i] || "才"==shishen[i]) count++
            }
            if (0==count) info = info + (""==info?"":"，")+"命无财星，婚姻难成"
            if (3<=count) info = info + (""==info?"":"，")+"财星过多，多姻之象"
        }
        else if("坤造"==sex)
        {
            if((eightkey[4]=="甲" || eightkey[4]=="乙") && (eightkey[3] == "丙" || eightkey[3] == "丁")) info=info+"木火伤官，官星入墓（易木火通明）"
            else if((eightkey[4]=="丙" || eightkey[4]=="丁") && (eightkey[3] == "丑" || eightkey[3] == "未" || eightkey[3] == "辰" || eightkey[3] == "戌")) info=info+"火土伤官，官星入墓"
            else if((eightkey[4]=="戊" || eightkey[4]=="己") && (eightkey[3] == "申" || eightkey[3] == "酉")) info=info+"金土伤官，官星入墓"
            else if((eightkey[4]=="庚" || eightkey[4]=="辛") && (eightkey[3] == "亥" || eightkey[3] == "子")) info=info+"金水伤官，官星入墓（易金白水清）"
            else if((eightkey[4]=="壬" || eightkey[4]=="癸") && (eightkey[3] == "寅" || eightkey[3] == "卯")) info=info+"水木伤官，官星入墓"
            var count = 0
            for(i=0;i<shishen.length;i++)
            {
                if("官"==shishen[i] || "杀"==shishen[i]) count++
            }
            if (0==count) info = info + (""==info?"":"，")+"命无官星，婚姻难成"
            if (3<=count) info = info + (""==info?"":"，")+"官星过多，多姻之象"
        }
        if(-1!=info.indexOf("伤官"))
        {
            
            if(-1!=combe.dr.indexOf("日冲月支") || -1!=combe.er.indexOf("日冲月支") || -1!=combe.lr.indexOf("日冲月支") || -1!=combe.br.indexOf("日冲月支") ) info = info +(""==info?"":"，")+ "入墓逢冲，易分离"
            if(-1!=combe.dr.indexOf("日相冲") || -1!=combe.er.indexOf("日相冲") || -1!=combe.lr.indexOf("日相冲") || -1!=combe.br.indexOf("日相冲") ) info = info +(""==info?"":"，")+ "入墓逢冲，易分离"
            if(-1!=combe.dr.indexOf("年日半合") || -1!=combe.er.indexOf("日月半合") || -1!=combe.lr.indexOf("日时半合") ) info = info + (""==info?"":"，")+"入墓逢合，易分离"
        }
        else
        {
            if(-1!=combe.dr.indexOf("日辰戌") || -1!=combe.er.indexOf("日辰戌") || -1!=combe.lr.indexOf("日辰戌") || -1!=combe.br.indexOf("日辰戌") ) info = info +(""==info?"":"，")+ "辰戌冲克婚姻宫，易分离"
        }   
        if(-1!=combe.dr.indexOf("隐刑") || -1!=combe.er.indexOf("隐刑") || -1!=combe.lr.indexOf("隐刑") || -1!=combe.br.indexOf("隐刑") ) info = info + (""==info?"":"，")+"三刑可解，易分离"
        if(-1!=combe.dr.indexOf("之刑") || -1!=combe.er.indexOf("之刑") || -1!=combe.lr.indexOf("之刑") || -1!=combe.br.indexOf("之刑") ) info = info + (""==info?"":"，")+"三刑难解，易分离"
        if(-1!=combe.dr.indexOf("三会") || -1!=combe.er.indexOf("三会") || -1!=combe.lr.indexOf("三会") || -1!=combe.br.indexOf("三会") ) info = info + (""==info?"":"，")+"三会成局，易分离"
        if(-1!=combe.dr.indexOf("三合") || -1!=combe.er.indexOf("三合") || -1!=combe.lr.indexOf("三合") || -1!=combe.br.indexOf("三合") ) info = info + (""==info?"":"，")+"三合成局，易分离"
        if(-1!=combe.dr.indexOf("辰戌") || -1!=combe.er.indexOf("辰戌") || -1!=combe.lr.indexOf("辰戌") || -1!=combe.br.indexOf("辰戌") ) 
        {
            if("辰"==eightkey[5] || "戌"==eightkey[5])
            {
                info = info + (""==info?"":"，")+"辰戌有冲，若冲日支，易分离"  
            }
            
        }
        if(-1!=combe.dr.indexOf("酉戌") || -1!=combe.er.indexOf("酉戌") || -1!=combe.lr.indexOf("酉戌") || -1!=combe.br.indexOf("酉戌") ) 
        {
            if("酉"==eightkey[5] || "戌"==eightkey[5])
            {
                info = info + (""==info?"":"，")+"酉戌有害，若害日支，需要好好控制情绪"  
            }
            
        }
        var chonglist = new Array()
        chonglist.push("丑未");
        chonglist.push("子午");
        chonglist.push("寅申");
        chonglist.push("卯酉");
        chonglist.push("巳亥");
        

        chonglist.forEach(element => {
            console.log("foreach",element)
            var first = element[0];
            var last = element[1];
            if(-1!=combe.dr.indexOf(element) || -1!=combe.er.indexOf(element) || -1!=combe.lr.indexOf(element) || -1!=combe.br.indexOf(element) ) 
            {
                if(first==eightkey[5] || last==eightkey[5])
                {
                    info = info + (""==info?"":"，")+element+"相冲，若冲日支，需要好好控制情绪"  
                }
                
            }
        });

        


        if(-1!=combe.dr.indexOf("自刑") || -1!=combe.er.indexOf("自刑") || -1!=combe.lr.indexOf("自刑") || -1!=combe.br.indexOf("自刑") ) 
        {
            if("亥"==eightkey[5] || "午"==eightkey[5] || "辰"==eightkey[5] || "酉"==eightkey[5])
            {
                info = info + (""==info?"":"，")+"若日支自刑，易分离"  
            }
            
        }

        if(""==info)
        {
            info = "八字婚姻无大影响（更新版本会更加详细）"
        }
        return info

    }

    selfgua(year)
    {
        var stryear = year.toString()
        var str = stryear.split('');
        for(i=str.length-1;i>-1;i--)
        {
            total = total + parseInt(str[i])
        }
        return total
    }
    //getlocationself有表代替
    getselfgua(year,sex)
    {
        var gua = ["坎（东四命）","坤（西四命）","震（东四命）","巽（东四命）","坤（西四命）","乾（西四命）","兑（西四命）","艮（西四命）","离（东四命）"]
        if(sex=="乾")
        {
            var x =  11-this.selfgua(this.selfgua(this.selfgua(year)))
            return gua[x]
        }
        if(sex=="乾")
        {
            var x =  4+this.selfgua(this.selfgua(this.selfgua(year)))
            return gua[x]
        }
        return ""
    }
        
}
var e = new EightrandomModule()
module.exports=e;  