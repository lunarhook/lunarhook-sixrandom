
import React, {Component} from 'react';
import {AppRegistry,View,Text, NativeModules} from 'react-native';


var sloganshowArray = new Array()

class sloganshow extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };

    };
    build()
    {
        sloganshowArray = []
        sloganshowArray.push({contect:"\t“靡不有初，鲜克有终”",name:"《诗经·荡》"})


        sloganshowArray.push({contect:"\t“三十辐，共一毂，当其无，有车之用。埏埴以为器，当其无，有器之用。凿户牖以为室，当其无，有室之用。”\t“故有之以为利，无之以为用。”",name:"《道德经》·第十一章"})
        sloganshowArray.push({contect:"\t“天之道，损有余而补不足。人之道，则不然，损不足以奉有余。”",name:"《道德经》·第七十七章"})
        sloganshowArray.push({contect:"\t“圣人自知不自见；自爱不自贵。”",name:"《道德经》·第七十二章"})
        sloganshowArray.push({contect:"\t“大道废，有仁义；智慧出，有大伪；六亲不和，有孝慈；国家昏乱，有忠臣。”",name:"《道德经》·第十八章"})
        sloganshowArray.push({contect:"\t“天地不仁，以万物为刍狗；圣人不仁，以百姓为刍狗。”",name:"《道德经》·第五章"})
        sloganshowArray.push({contect:"\t“希言自然”",name:"《道德经》·第二十三章"})
        sloganshowArray.push({contect:"\t“天道无亲，常与善人。”",name:"《道德经》"})
        sloganshowArray.push({contect:"\t“曲则全，枉则直，洼则盈，敝则新，少则多，多则惑。”",name:"《道德经》"})
        sloganshowArray.push({contect:"\t“人法地，地法天，天法道，道法自然。”",name:"《道德经》"})

        sloganshowArray.push({contect:"\t“君子使物，不为物使。”",name:"《管子·任法》"})
        sloganshowArray.push({contect:"\t“仓廪实，则知礼节，衣食足，则知荣辱。”",name:"《管子·牧民》"})
        sloganshowArray.push({contect:"\t“形不正者，德不来；中不精者，心不冶。正形饰德，万物毕得。”",name:"《管子·心术下》"})
        sloganshowArray.push({contect:"\t“先易者后难。”",name:"《管子·任法》"})
        sloganshowArray.push({contect:"\t“天之所助，虽小必大；天之所违，虽成必败。顺天者有其功，逆天者怀其凶，不可复振也。”",name:"《管子·形势》"})
        sloganshowArray.push({contect:"\t“故法者，天下之至道也。”",name:"《管子·任法》"})
        sloganshowArray.push({contect:"\t“国多财则远者来，地辟举则民留处。”",name:"《管子·牧民》"})
        sloganshowArray.push({contect:"\t“礼义廉耻，国之四维，四维不张，国乃灭亡。”",name:"《管子·牧民》"})
        sloganshowArray.push({contect:"\t“欲王天下，而失天之道，天下不可得而王也。”",name:"《管子·形势》"})
        sloganshowArray.push({contect:"\t“能予而无取者，天地之配也”",name:"《管子·形势》"})
        sloganshowArray.push({contect:"\t“闻一言以贯万物，谓之知道。”",name:"《管子·戒》"})
        sloganshowArray.push({contect:"\t“道在天地之间也，其大无外，其小无内。”",name:"《管子·心术上》"})
        sloganshowArray.push({contect:"\t“虚而无形谓之道。”",name:"《管子·心术上》"})
        sloganshowArray.push({contect:"\t“无德无怨，无好无恶，万物崇以，阴阳同度，曰道。”",name:"《管子·正》"})
        sloganshowArray.push({contect:"\t“凡人之生也，天出其精，地出其形，合此以为人。”",name:"《管子·内业》"})
        sloganshowArray.push({contect:"\t“人情不二，故民情可得而御也。”",name:"《管子·权修》"})
        sloganshowArray.push({contect:"\t“得众而不得其心，则与独行者同实。”",name:"《管子·参患》"})
        sloganshowArray.push({contect:"\t“君不君，则臣不臣；父不父，则子不子；上失其位，则下逾其节。”",name:"《管子·形势》"})
        sloganshowArray.push({contect:"\t“海不辞水，故能成其大；山不辞土石，故能成其高；明主不厌人，故能成其众。”",name:"《管子·形势》"})
        sloganshowArray.push({contect:"\t“事者生于虑，成于务，失于傲。不虑则不生，不务则不成，不傲则不失。”",name:"《管子·乘马》"})
        sloganshowArray.push({contect:"\t“千里之路，不可扶以绳。万家之都，不可平以准。”",name:"《管子·宙合》"})
        sloganshowArray.push({contect:"\t“景不为曲物直，响不为恶声美。是以圣人明乎物之性者必以其类来也，故君子绳绳乎慎其所先。”",name:"《管子·宙合》"})
        sloganshowArray.push({contect:"\t“夫兵，虽非备道至德也，然而所以辅王成霸。”",name:"《管子·兵法》"})
        sloganshowArray.push({contect:"\t“观国者观君，观军者观将，观备者观野。”",name:"《管子·霸言》"})
        sloganshowArray.push({contect:"\t“无土而欲富者忧，无德而欲王者危，施薄而求厚者孤。”",name:"《管子·霸言》"})
        sloganshowArray.push({contect:"\t“仁从中出，义从外作”",name:"《管子·戒》"})
        sloganshowArray.push({contect:"\t“不务天时，则财不生，不务地利，则仓廪不盈。”",name:"《管子》"})
        sloganshowArray.push({contect:"\t“不作无补之功，不为无益之事。”",name:"《管子》"})
        sloganshowArray.push({contect:"\t“圣人畏微，而愚者畏明。”",name:"《管子》"})
        sloganshowArray.push({contect:"\t“天下不患无财，患无人以分之。”",name:"《管子》"})
        sloganshowArray.push({contect:"\t“信不足，安有信。”",name:"《管子》"})

        sloganshowArray.push({contect:"\t“大道之行也，天下为公，选贤与能，讲信修睦”",name:"《礼记·大同篇》"})

        sloganshowArray.push({contect:"\t“老吾老以及人之老，幼吾幼以及人之幼。”",name:"《孟子·梁惠王下》"})
        sloganshowArray.push({contect:"\t“人无廉耻，王法难治”",name:"《孟子·梁惠王下》"})
        sloganshowArray.push({contect:"\t“得道者多助，失道者寡助。寡助之至，亲戚畔之；多助之至，天下顺之。”",name:"《孟子·公孙丑上》"})
        sloganshowArray.push({contect:"\t“天时不如地利，地利不如人和。”",name:"《孟子·公孙丑上》"})
        sloganshowArray.push({contect:"\t“富贵不能淫，贫贱不能移，威武不能屈。此之谓大丈夫。”",name:"《孟子·公孙丑上》"})
        sloganshowArray.push({contect:"\t“人有不为也，而后可以有为。”",name:"《孟子·离娄上》"})
        sloganshowArray.push({contect:"\t“君子以仁存心，以礼存心。仁者爱人，有礼者敬人。爱人者人恒爱之，敬人者人恒敬之。”",name:"《孟子·离娄上》"})
        sloganshowArray.push({contect:"\t“所以动心忍性，曾益其所不能。”",name:"《孟子·告子上》"})
        sloganshowArray.push({contect:"\t“生，亦我所欲也。义，亦我所欲也；二者不可得兼，舍生而取义者也。”",name:"《孟子·告子上》"})
        sloganshowArray.push({contect:"\t“民为贵，社稷次之，君为轻。”",name:"《孟子·告子上》"})
        sloganshowArray.push({contect:"\t“生于忧患，死于安乐。”",name:"《孟子·告子上》"})
        sloganshowArray.push({contect:"\t“得道多助，失道寡助”",name:"《孟子·告子上》"})
        sloganshowArray.push({contect:"\t“穷则独善其身，达则兼善天下。”",name:"《孟子·尽心上》"})
        sloganshowArray.push({contect:"\t“尽信书，不如无书。”",name:"《孟子·尽心上》"})
        sloganshowArray.push({contect:"\t“一叶蔽目，不见泰山。”",name:"《孟子·尽心上》"})

        sloganshowArray.push({contect:"\t“德不孤，必有邻。”",name:"《论语·里仁》"})
        sloganshowArray.push({contect:"\t“过而不改，是谓过已。”",name:"《论语·卫灵公》"})
        sloganshowArray.push({contect:"\t“巧言令色，鲜矣仁。”",name:"《论语·学而》"})
        sloganshowArray.push({contect:"\t“见贤思齐焉，见不贤而内自省也。”",name:"《论语·里仁》"})
        sloganshowArray.push({contect:"\t“自古皆有死，民无信不立。”",name:"《论语·颜渊》"})
        sloganshowArray.push({contect:"\t“君子不以言举人，不以人废言。”",name:"《论语·卫灵公》"})
        sloganshowArray.push({contect:"\t“君子喻于义，小人喻于利。”",name:"《论语·里仁》"})
        sloganshowArray.push({contect:"\t“君子不器。”",name:"《论语·为政》"})
        sloganshowArray.push({contect:"\t“子曰：“《诗》三百，一言以蔽之，曰：‘思无邪’。”",name:"《论语·为政》"})

        sloganshowArray.push({contect:"\t“温故而知新，可以为师矣。”",name:"《论语·为政》"})
        sloganshowArray.push({contect:"\t“朝闻道，夕死可矣。”",name:"《论语·里仁》"})
        sloganshowArray.push({contect:"\t“名不正，则言不顺；言不顺，则事不成。”",name:"《论语·子路》"})
        sloganshowArray.push({contect:"\t“人而无信，不知其可也。”",name:"《论语·为政》"})
        sloganshowArray.push({contect:"\t“过也，人皆见之；更也，人皆仰之。”",name:"《论语·子张》"})
        sloganshowArray.push({contect:"\t“其身正，不令而行；其身不正，虽令不从。”",name:"《论语·子路》"})
        sloganshowArray.push({contect:"\t“不患寡而患不均，不患贫而患不安。”",name:"《论语·季氏》"})
        sloganshowArray.push({contect:"\t“工欲善其事，必先利其器。”",name:"《论语·卫灵公》"})
        sloganshowArray.push({contect:"\t“君子成人之美，不成人之恶。”",name:"《论语·颜渊》"})
        sloganshowArray.push({contect:"\t“士不可以不弘毅，任重而道远。”",name:"《论语·泰伯》"})
        sloganshowArray.push({contect:"\t“己欲立而立人，己欲达而达人。”",name:"《论语·雍也》"})
        sloganshowArray.push({contect:"\t“往者不可谏，来者犹可追。”",name:"《论语·微子》"})
        sloganshowArray.push({contect:"\t“工欲善其事，必先利其器。”",name:"《论语·卫灵公》"})

        sloganshowArray.push({contect:"\t“非淡泊无以明志，非宁静无以致远”",name:"诸葛亮《诫子书》"})

        sloganshowArray.push({contect:"\t“千磨万击还坚劲，任尔东南西北风”",name:"郑燮《竹石》"})

        sloganshowArray.push({contect:"\t“有志者、事竟成，破釜沉舟，百二秦关终属楚”\t“苦心人、天不负，卧薪尝胆，三千越甲可吞吴”",name:"胡寄恒"})

        sloganshowArray.push({contect:"\t“多行不义必自毙。”",name:"《左传·隐公元年》"})
        sloganshowArray.push({contect:"\t“人谁无过?过而能改，善莫大焉。”",name:"《左传·宣公二年》"})
        sloganshowArray.push({contect:"\t“居安思危。思则有备，有备无患。”",name:"《左传·襄公十一年》"})
        sloganshowArray.push({contect:"\t“太上有立德，其次有立功，其次有立言。虽久不废，此之谓不朽。”",name:"《左传·襄公二十四年》"})
        sloganshowArray.push({contect:"\t“我闻忠善以损怨，不闻作威以防怨。”",name:"《左传·襄公三十一年》"})
        sloganshowArray.push({contect:"\t“无德而禄，殃也。”",name:"《左传·闵公二年》"})
        sloganshowArray.push({contect:"\t“宴安鸩毒，不可怀也。”",name:"《左传·闵公元年》"})
        sloganshowArray.push({contect:"\t“弈者举棋不定，不胜其耦。”",name:"《左传·襄公二十五年》"})
        sloganshowArray.push({contect:"\t“众怒难犯，专欲难成。”",name:"《左传·襄公十年》"})
        sloganshowArray.push({contect:"\t“过而不悛，亡之本也。”",name:"《左传·襄公七年》"})
        sloganshowArray.push({contect:"\t“骄奢淫逸，所自邪也。”",name:"《左传·隐公三年》"})
        sloganshowArray.push({contect:"\t“祸福无门，唯人所召。”",name:"《左传·襄公二十三年》"})
        sloganshowArray.push({contect:"\t“辅车相依，唇亡齿寒。”",name:"《左传·僖公五年》"})
        sloganshowArray.push({contect:"\t“从善如流。”",name:"《左传·成公八年》"})
        sloganshowArray.push({contect:"\t“国之兴也，视民如伤，是其福也；其亡也，以民为土芥，是其祸也。”",name:"《左传·哀公元年》"})

        sloganshowArray.push({contect:"\t“礼尚往来。往而不来，非礼也；来而不往，亦非礼也。”",name:"《礼记·曲礼上》"})
        sloganshowArray.push({contect:"\t“爱而知其恶，憎而知其善。”",name:"《礼记·曲礼上》"})
        sloganshowArray.push({contect:"\t“玉不琢，不成器；人不学，不知道。”",name:"《礼记·学记》"})
        sloganshowArray.push({contect:"\t“恶言不出于口，忿言不反于身。”",name:"《礼记·祭义》"})
        sloganshowArray.push({contect:"\t“君子戒慎乎其所不睹，恐惧乎其所不闻。莫见乎隐，莫显乎微，故君子慎其独也。”",name:"《礼记·中庸》"})
        sloganshowArray.push({contect:"\t“敖不可长，欲不可从，志不可满，乐不可极。”",name:"《礼记·曲礼上》"})
        sloganshowArray.push({contect:"\t“大道之行也，天下为公。”",name:"《礼记·礼运》"})
        sloganshowArray.push({contect:"\t“孝有三：大孝尊亲，其次弗辱，其下能养。”",name:"《礼记·祭义》"})
        sloganshowArray.push({contect:"\t“学然后知不足，教然后知困。”",name:"《礼记·学记》"})
        sloganshowArray.push({contect:"\t“有其言，无其行，君子耻之”",name:"《礼记·杂记下》"})
        sloganshowArray.push({contect:"\t“儒有博学而不穷，笃行而不倦”",name:"《礼记·儒行》"})
        sloganshowArray.push({contect:"\t“瑕不掩瑜、瑜不掩瑕”",name:"《礼记·聘义》"})
        sloganshowArray.push({contect:"\t“君子不自大其事，不自尚其功”",name:"《礼记·表记》"})
        sloganshowArray.push({contect:"\t“听于无声，视于无形。”",name:"《礼记·曲礼上》"})
        sloganshowArray.push({contect:"\t“教也者，长善而救其失者也。”",name:"《礼记·学记》"})
        sloganshowArray.push({contect:"\t“量入以为出”",name:"《礼记·王制》"})
        sloganshowArray.push({contect:"\t“物格而后知至，知至而后意诚，意诚而后心正，心正而后身修，身修而后家齐，家齐而后国治，国治而后天下平。”",name:"《礼记·大学》"})
        sloganshowArray.push({contect:"\t“张而不弛，文武弗能也；弛而不张，文武弗为也。一张一弛，文武之道也。”",name:"《礼记·杂记下》"})
        sloganshowArray.push({contect:"\t“善学者，师逸而功倍，又从而庸之；不善学者，师勤而功半，又从而怨之。”",name:"《礼记·学记》"})
        sloganshowArray.push({contect:"\t“记问之学，不足以为人师。”",name:"《礼记·学记》"})
        sloganshowArray.push({contect:"\t“君子有三患：未之闻，患弗得闻也；既闻之，患弗得学也；既学之，患弗能行也。”",name:"《礼记·杂记下》"})
        sloganshowArray.push({contect:"\t“孝子之有深爱者，必有和气；有和气者，必有愉色；有愉色者，必有婉容。”",name:"《礼记·祭义》"})
        sloganshowArray.push({contect:"\t“大德不官，大道不器，大信不约，大时不齐。”",name:"《礼记·学记》"})
        sloganshowArray.push({contect:"\t“莫见乎隐，莫显乎微，故君子慎其独也。”",name:"《礼记·中庸》"})
        sloganshowArray.push({contect:"\t“一张一弛，文武之道”",name:"《礼记·杂记下》"})
        sloganshowArray.push({contect:"\t“不兴其艺，不能乐学。”",name:"《礼记·学记》"})
        sloganshowArray.push({contect:"\t“举大事，必慎其终始”",name:"《礼记·文王世子》"})
        sloganshowArray.push({contect:"\t“众生必死，死必归土：此之谓鬼。”",name:"《礼记·祭义》"})
        sloganshowArray.push({contect:"\t“富润屋，德润身，心广体胖”",name:"《礼记·大学》"})
        sloganshowArray.push({contect:"\t“生财有大道。生之者众，食之者寡，为之者疾，用之者舒，则财恒足矣。”",name:"《礼记·大学》"})
        sloganshowArray.push({contect:"\t“不宝金玉，而忠信以为宝”",name:"《礼记·儒行》"})
        sloganshowArray.push({contect:"\t“凡学之道，严师为难。”",name:"《礼记·学记》"})
        sloganshowArray.push({contect:"\t“口惠而实不至，怨菑及其身。”",name:"《礼记·表记》"})
        sloganshowArray.push({contect:"\t“善歌者，使人继其声；善教者，使人继其志。”",name:"《礼记·学记》"})
        sloganshowArray.push({contect:"\t“古之为政，爱人为大”",name:"《礼记·哀公问》"})
        sloganshowArray.push({contect:"\t“人生十年曰幼，学。二十曰弱，冠。三十曰壮，有室。四十曰强，而仕。五十曰艾，服官政。”",name:"《礼记·曲礼上》"})
        sloganshowArray.push({contect:"\t“戒慎乎其所不睹，恐惧乎其所不闻。”",name:"《礼记·中庸》"})
        sloganshowArray.push({contect:"\t“师也者，教之以事而喻诸德者也”",name:"《礼记·文王世子》"})
        sloganshowArray.push({contect:"\t“上不臣天子，下不事诸侯；慎静而尚宽，强毅以与人，博学以知服；近文章砥厉廉隅；虽分国如锱铢，不臣不仕。”",name:"《礼记·儒行》"})
        sloganshowArray.push({contect:"\t“夫礼之初，始诸饮食”",name:"《礼记·礼运》"})
        sloganshowArray.push({contect:"\t“闻善以相告也，见善以相示也”",name:"《礼记·儒行》"})
        sloganshowArray.push({contect:"\t“世治不轻，世乱不沮；同弗与，异弗非也。”",name:"《礼记·儒行》"})
        sloganshowArray.push({contect:"\t“父之雠，弗与共戴天。兄弟之雠不反兵。交游之雠不同国。”",name:"《礼记·曲礼上》"})
        sloganshowArray.push({contect:"\t“国无九年之蓄曰不足，无六年之蓄曰急，无三年之蓄曰国非其国也。”",name:"《礼记·王制》"})
        sloganshowArray.push({contect:"\t“良冶之子，必学为裘；良弓之子，必学为箕”",name:"《礼记·学记》"})
        sloganshowArray.push({contect:"\t“师严然后道尊，道尊然后民知敬学。”",name:"《礼记·学记》"})
        sloganshowArray.push({contect:"\t“三年耕，必有一年之食；九年耕，必有三年之食。”",name:"《礼记·王制》"})
        sloganshowArray.push({contect:"\t“政者正也。君为正，则百姓从政矣。”",name:"《礼记·哀公问》"})

    }

    getitem(num)
    {
        this.build()
        var ret = ""
        num = num % sloganshowArray.length
        ret = sloganshowArray[num]
        sloganshowArray = []
        return ret
    }
}
module.exports= new sloganshow