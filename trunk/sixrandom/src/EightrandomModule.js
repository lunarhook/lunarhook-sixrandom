
var Dimensions = require('Dimensions');
import React, {Component} from 'react';
import ValueTypeModule from './ValueTypeModule'
import SixrandomModule from './SixrandomModule'
//import DatePicker from 'react-native-datepicker'
//import DateTimePicker from 'react-native-modal-datetime-picker';

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

var hidetable = new Array();
hidetable['子']=['癸主20','壬余10'];
hidetable['丑']=['己主18','辛中3','癸余9'];
hidetable['寅']=['甲主16','丙中7','戊余7'];
hidetable['卯']=['乙主20','甲余10'];
hidetable['辰']=['戊主18','癸中3','乙余9'];
hidetable['巳']=['丙主16','庚中9','戊余5'];
hidetable['午']=['丁主11','己中9','丙余10'];
hidetable['未']=['己主18','乙中3','丁余9'];
hidetable['申']=['庚主17','壬中3','己余7','戊余3'];
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
earthrelationship['子']['丑']='子丑合土'
earthrelationship['丑']['子'] = earthrelationship['子']['丑']
earthrelationship['寅']['亥']='寅亥合木'
earthrelationship['亥']['寅'] = earthrelationship['寅']['亥']
earthrelationship['卯']['戌']='卯戌合火'
earthrelationship['戌']['卯'] = earthrelationship['卯']['戌']
earthrelationship['辰']['酉']='辰酉合金'
earthrelationship['酉']['辰'] = earthrelationship['辰']['酉']
earthrelationship['巳']['申']='巳申合水'
earthrelationship['申']['巳'] = earthrelationship['巳']['申']
earthrelationship['午']['未']='午未合火'
earthrelationship['未']['午'] = earthrelationship['午']['午']
//六冲 子午相冲、丑未相冲、寅申相冲、卯酉相冲、辰戌相冲、巳亥相冲
earthrelationship['子']['午']='子午相冲'
earthrelationship['午']['子'] = earthrelationship['子']['午']
earthrelationship['丑']['未']='丑未相冲'
earthrelationship['未']['未'] = earthrelationship['丑']['未']
earthrelationship['寅']['申']='寅申相冲'
earthrelationship['申']['寅'] = earthrelationship['寅']['申']
earthrelationship['卯']['酉']='卯酉相冲'
earthrelationship['酉']['卯'] = earthrelationship['卯']['酉']
earthrelationship['辰']['戌']='辰戌相冲'
earthrelationship['戌']['辰'] = earthrelationship['辰']['戌']
earthrelationship['巳']['亥']='巳亥相冲'
earthrelationship['亥']['巳'] = earthrelationship['巳']['亥']
//六害 子未相害、丑午相害、寅巳相害、卯辰相害、申亥相害、酉戌相害
earthrelationship['子']['未']='子未相害'
earthrelationship['未']['子'] = earthrelationship['子']['未']
earthrelationship['丑']['午']='丑午相害'
earthrelationship['午']['丑'] = earthrelationship['丑']['午']
earthrelationship['寅']['巳']='寅巳相害'
earthrelationship['巳']['寅'] = earthrelationship['寅']['巳']
earthrelationship['卯']['辰']='卯辰相害'
earthrelationship['辰']['卯'] = earthrelationship['卯']['辰']
earthrelationship['申']['亥']='申亥相害'
earthrelationship['亥']['申'] = earthrelationship['申']['亥']
earthrelationship['酉']['戌']='酉戌相害'
earthrelationship['戌']['酉'] = earthrelationship['酉']['戌']
//自刑 辰午酉亥自相刑
earthrelationship['辰']['辰']='辰辰自刑'
earthrelationship['亥']['亥']='亥亥自刑'
earthrelationship['午']['午']='午午自刑'
earthrelationship['酉']['酉']='酉酉自刑'
earthrelationship['子']['卯']='子卯刑'
earthrelationship['卯']['子']='子卯刑'

//申子、亥卯、寅午、巳酉相合称生地半合。子辰、卯未、午戌、酉丑相合称墓地半合
earthcombe['申']['子']='申子生地半合水'
earthcombe['子']['申'] = earthcombe['申']['子']
earthcombe['亥']['卯']='亥卯生地半合木'
earthcombe['卯']['亥'] = earthcombe['亥']['卯']
earthcombe['寅']['午']='寅午生地半合火'
earthcombe['午']['寅'] = earthcombe['寅']['午']
earthcombe['巳']['酉']='巳酉生地半合金'
earthcombe['酉']['巳'] = earthcombe['巳']['酉']
earthcombe['申']['子']='子辰墓地半合水'
earthcombe['子']['申'] = earthcombe['申']['子']
earthcombe['卯']['未']='卯未墓地半合木'
earthcombe['未']['卯'] = earthcombe['卯']['未']
earthcombe['午']['戌']='午戌墓地半合火'
earthcombe['戌']['午'] = earthcombe['午']['戌']
earthcombe['酉']['丑']='酉丑墓地半合金'
earthcombe['丑']['酉'] = earthcombe['酉']['丑']



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

  parentday(other,self)
  {
    var map = new Array()
    
    var num = daykey.indexOf(other);
    console.log(num,self,other)
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
    console.log(map[self][num])
    return map[self][num];
  
  }

  parentearth(other,self)
  {
    var map = new Array()
    var num = daykey.indexOf(self);
    console.log(num,self,other)
    map['子'] =['枭', '印', '杀', '官', '财', '才', '食', '伤', '比', '比劫']
    map['丑'] =['才', '财', '伤', '食', '比劫', '比', '印', '枭', '官', '杀']
    map['寅'] =['比', '劫', '枭', '印', '杀', '官', '财', '才', '食', '伤']
    map['卯'] =['劫', '比', '印', '枭', '官', '杀', '才', '财', '伤', '食']
    map['辰'] =['财', '才', '食', '伤', '比', '劫', '枭', '印', '杀', '官']
    map['巳'] =['伤', '食', '比劫', '比', '印', '枭', '官', '杀', '才', '财']
    map['午'] =['食', '伤', '比', '比劫', '枭', '印', '杀', '官', '财', '才']
    map['未'] =['才', '财', '伤', '食', '比劫', '比', '印', '枭', '官', '杀']
    map['申'] =['杀', '官', '财', '才', '食', '伤', '比', '劫', '枭', '印']
    map['酉'] =['官', '杀', '才', '财', '伤', '食', '比劫', '比', '印', '枭']
    map['戌'] =['财', '才', '食', '伤', '比', '劫', '枭', '印', '杀', '官']
    map['亥'] =['印', '枭', '官', '杀', '才', '财', '伤', '食', '劫', '比']
    console.log(map[other][num])
    return map[other][num];
  
  }

  gethide(key)
  {


      var r = "";
      var i = 0;
      console.log(key)
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
    console.log(other)
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
      console.log(q)
      console.log(p);
      return {p,q}

  }
  getrelationship(key)
  {
    var dr = ''
    var er = ''
    var d = new Array();
    var e = new Array();
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
        /*
        if(undefined!=dayrelationship[yy][dd])
        {
            dr = dr +"年日"+ dayrelationship[yy][dd] + " "
        }
        if(undefined!=dayrelationship[yy][tt])
        {
            dr = dr +"年时"+ dayrelationship[yy][tt] + " "
        }
        */
        if(undefined!=dayrelationship[mm][dd])
        {
            dr = dr +"日月"+ dayrelationship[mm][tt] + " "
        }
        /*
        if(undefined!=dayrelationship[mm][tt])
        {
            dr = dr +"月时"+ dayrelationship[mm][tt] + " "
        }
        */
        if(undefined!=dayrelationship[dd][tt])
        {
            dr = dr +"日时"+ dayrelationship[dd][tt] + " "
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
        }
        /*
        if(undefined!=earthrelationship[yy][dd])
        {
            er = er +"年日"+ earthrelationship[yy][dd] + " "
        }
        if(undefined!=earthrelationship[yy][tt])
        {
            er = er +"年时"+ earthrelationship[yy][tt] + " "
        }
        */
        if(undefined!=earthrelationship[mm][dd])
        {
            er = er +"日月"+ earthrelationship[mm][dd] + " "
        }
        /*
        if(undefined!=earthrelationship[mm][tt])
        {
            er = er +"月时"+ earthrelationship[mm][tt] + " "
        }
        */
        if(undefined!=earthrelationship[dd][tt])
        {
            er = er +"日时"+ earthrelationship[dd][tt] + " "
        }

        

        //三合三会半合

        if(undefined!=earthcombe[yy][mm])
        {
            er = er +"年月"+ earthcombe[yy][mm] + " "
        }
        
        if(undefined!=earthcombe[yy][dd])
        {
            er = er +"年日"+ earthcombe[yy][dd] + " "
        }
        if(undefined!=earthcombe[yy][tt])
        {
            er = er +"年时"+ earthcombe[yy][tt] + " "
        }
        
        if(undefined!=earthcombe[mm][dd])
        {
            er = er +"日月"+ earthcombe[mm][dd] + " "
        }
        if(undefined!=earthcombe[mm][tt])
        {
            er = er +"月时"+ earthcombe[mm][tt] + " "
        }
        if(undefined!=earthcombe[dd][tt])
        {
            er = er +"日时"+ earthcombe[dd][tt] + " "
        }
        
        //三会局
        if(true == this.in_array('寅',e) && true == this.in_array('卯',e) && true == this.in_array('辰',e) )
        {
            er = er +"寅卯辰会东方木"+  " "
        }
        if(true == this.in_array('巳',e) && true == this.in_array('午',e) && true == this.in_array('未',e) )
        {
            er = er +"巳午未会南方火"+  " "
        }
        if(true == this.in_array('申',e) && true == this.in_array('酉',e) && true == this.in_array('戌',e) )
        {
            er = er +"申酉戌会西方金"+  " "
        }
        if(true == this.in_array('亥',e) && true == this.in_array('子',e) && true == this.in_array('丑',e) )
        {
            er = er +"亥子丑会北方水"+  " "
        }

        //三合局 申子辰合水 亥卯未合木 寅午戌合火 巳酉丑合金
        if(true == this.in_array('申',e) && true == this.in_array('子',e) && true == this.in_array('辰',e) )
        {
            er = er +"申子辰合水"+  " "
        }
        if(true == this.in_array('亥',e) && true == this.in_array('卯',e) && true == this.in_array('未',e) )
        {
            er = er +"亥卯未合木"+  " "
        }
        if(true == this.in_array('寅',e) && true == this.in_array('午',e) && true == this.in_array('戌',e) )
        {
            er = er +"寅午戌合火"+  " "
        }
        if(true == this.in_array('巳',e) && true == this.in_array('酉',e) && true == this.in_array('丑',e) )
        {
            er = er +"巳酉丑合金"+  " "
        }

        //三刑
        if(true == this.in_array('寅',e) && true == this.in_array('巳',e) && true == this.in_array('申',e) )
        {
            er = er +"地支无恩之刑"+  " "
        }
        if(true == this.in_array('丑',e) && true == this.in_array('未',e) && true == this.in_array('戌',e) )
        {
            er = er +"地支恃势之刑"+  " "
        }

        if(""==er)
        {
            er = "八字地支无刑冲克害"
        }



        return {dr,er};

        
  }
}
var e = new EightrandomModule()
module.exports=e;  