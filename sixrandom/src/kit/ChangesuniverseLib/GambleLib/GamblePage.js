

import React, {Component} from 'react';
import {StyleSheet,View,TouchableHighlight,Platform, Text,Vibration,ScrollView,FlatList,Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import { Button} from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import { captureRef } from "react-native-view-shot";
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleConfig,FontStyleConfig} from '../../../config/StyleConfig';
import FontTypeModule from '../../../config/FontTypeModule';
import ScreenConfig from '../../../config/ScreenConfig';
import WechatShare from '../../../config/WechatShare'
import { Grid, Accordion, WhiteSpace, WingBlank ,List} from '@ant-design/react-native';
import RNShake from 'react-native-shake';
/*
      庙     旺     落      陷
太阳 庙：狮子 旺：白羊 落：水瓶 陷：天平
月亮 庙：巨蟹 旺：金牛 落：摩羯 陷：天蝎
水星 庙：双子处女 旺：处女 落：射手双鱼 陷：双鱼
金星 庙：金牛天平 旺：双鱼 落：天蝎白羊 陷：处女
火星 庙：白羊天蝎 旺：摩羯 落：天平金牛 陷：巨蟹
木星 庙：射手双鱼 旺：巨蟹 落：双子处女 陷：摩羯
土星 庙：摩羯水瓶 旺：天平 落：巨蟹狮子 陷：白羊
    
1 4 7 10 角宫 最快，有力 
2 5 8 11 续宫 最稳，中速
3 6 9 12 果宫 最慢，无力

飞星

*/

var planet = new Array()
planet[0]="太阳"
planet[1]="月亮"
planet[2]="水星"
planet[3]="金星"
planet[4]="木星"
planet[5]="火星"
planet[6]="土星"
planet[7]="天王"
planet[8]="海王"
planet[9]="冥王"
planet[10]="北交"
planet[11]="南交"

var planettip = new Array()
planettip[0]="太阳是所有行星中最强大的星体。如果你在掷骰子时扔出了“太阳”，那么该问题将与你自己、你的自我表现力、你的基本生命力密切相关。问题是相当个人化的，太阳的活力和能力将属于你。太阳是张扬且明媚的，能给任何形势带来温暖和光明。这是象征黄金般生命力的有利符号。在部分情况下，它指的是你的父亲，或类似任何父亲形象的那种有权威、权势且能发号施令的人物。当太阳出现时，象征着你的基本自我以及寻求自我满足的全盛时期。太阳将点亮你扔出的另一个宫位骰子所代表的生活领域。 太阳的其他象征： 周日、钻石、黄金、孔雀（爱炫耀之人）、天鹅、戒指（光环）、皇后、女王、总统、太阳花、橙子、心脏。"
planettip[1]="月亮是夜之女王，象征你的内在本质、你的直觉和感受。如果你扔出月亮骰子，那就是得注意你的反应和情绪。你对事物的天生感受能力和直觉可信且强烈。月亮同样代表你的情绪安全感、以及与你房屋和家庭相关的问题。月亮象征母性，这可能是指你自己的母亲或是你照料他人的能量。它与孩子和童年有关。由于月亮是颗阴性行星，所以泛指你生活中的女性。当扔出月亮骰子时，建议你让直觉引导你自己，而接受直觉引导的领域则参考你扔出的其他骰子（宫位骰子）。 月亮的其他象征： 周一、镜子、海洋、洪水、狼、鼠、群众、摇篮、蛋、牛奶、体液。"
planettip[2]="水星的命名是根据某位反复无常的众神信使而来，象征你的思维和交流能力。如果你扔出了水星骰子，那么问题会与你的交流和逻辑思维能力相关。可以用扔出的其他骰子（星座骰子）所代表的方式来说或写，以此来解决问题或达成目标。水星指的是获取信息并传播，反映敏捷且反复无常。这是种如同变色龙般的能量，其变化速度比思考来得更快。它提供给你多种选择，并鼓励你发扬灵活性，外形保持年轻态。当水星骰子出现时，建议你酝酿些想法，与他人多往来及谈话。至于如何做以及该在哪些生活领域这么做，则参考其他骰子的答案（星座+宫位）。 水星的其他象征： 周三、市场、道路、狂热、狐狸、鸟、骗术师、魔法师、旅行者、身体的呼吸系统。"
planettip[3]="金星以爱神名字命名，因而它与你的爱情生活和个人关系相关。如果你掷出了金星骰子，它告诉你的是你可利用和谐能量，且美好围绕着你。建立关系和在关系中做些什么的欲望十分强烈，还包括表现你艺术化的一面。金星掌管音乐、美术、歌舞、艺术、爱、金钱，和性吸引力。根据占星传统概念，金星被视作是颗吉星，它也是纯粹的阴性能量符号，代表你生活中的女子。当金星骰子出现，建议你保持平衡，用和谐的方式来与他人建立关系（尤其是以其他星座骰子指代的方式）。 金星的其他象征： 周五、花、钱币、吻、缤纷色彩、鸽子、苹果、身体上的女性器官。"
planettip[4]="火星象征勇气、激情、以及原始的火热能量。如果你扔出火星骰子，它建议你可以利用直截了当的方式和动力。关键是自信和阳刚之力。火星火热、强大、好争斗、暴躁、在执行它的计划前绝不会犹豫不决或三思后行。这是颗行动之星。火星象征男性，可指代你生活中的所有男子。如何表现火星无畏的能量、该将此能量投入到哪里，得参考你扔出的其他骰子（星座是表现方式，宫位是投入领域）。 火星的其他象征： 周二、松树、手枪、士兵、运动员、铁、大蒜、精力、肌肉、男性器官。"
planettip[5]="木星是所有行星中最大的一颗，它能带来欢乐，其名字来自于众神之王。它是所有行星能量中最幸运的一颗。如果你掷出了木星骰子，这表示你可利用扩展和成长的能量。木星和幸运相关，因为它能增强自信、幽默感、拓宽眼界甚至扩大你的版图。它暗示你应当以大规模的方式来做事，慷慨、并着眼长远。木星也和旅行、学习、拓展和拓宽思维有关部门，能让你在更大的舞台中发挥作用。当木星骰子出现，意味着非常乐观且具延伸性的能量可供你利用。事态会在宫位骰子所代表的领域中成长起来。 木星的其他象征： 周四、锡、橡树、赌场、导师、大象、鲸、牡鹿、丝绸、紫色、盛宴、肝部"
planettip[6]="土星是个有圆环的行星，与限制、责任、持久有关。土星象征昔日旧时光，表示人必须耐心且做好成长缓慢的准备。土星有着极强大的耐力能量，但它鼓励你通过失败和挑战来成长，并面对现实情况。土星会指出你究竟害怕面对什么。土星是老人所拥有的世俗智慧，因而它泛指你生活中比你年长之人，尤其是类似父亲形象的人。当土星骰子出现时，它建议你理性、谨慎、脚踏实地。你不应期待很快就有结果，但必须做好准备接受相关责任。如果你能做到这点，那么就能缓慢地建立起如磐石般坚实的地位。 土星的其他象征： 周六、领袖人物、紫衫树、隐士、墙、边界、界限、钟、日历、锚、猫头鹰、人体的骨骼、皮肤和牙齿。"
planettip[7]="天王星是颗不同寻常的行星。任何与之相关的事物都会具有革新性且与众不同。如果你扔出天王星骰子，表示事件将发生突如其来且出乎意料的转折。变动很可能发生，尤其是那些形势发展太过保守或太迅速以至于影响未来应有发展的时候。天王星是种古怪的能量，代表任何看起来离经叛道不规范之事。它可能令人震惊或意外，但同样也具有人道主义、独立精神和未来性。它来去匆匆，疾如闪电，所过之处留下的是变动。它就如同牌桌上出现了出人意料的百搭牌，它的突然出现改变了游戏规则。当天王星骰子出现时，建议你觉醒并打破桎梏。 天王星的其他象征： 航空、电子、变革、启示、旋风、未来科学、X射线、占星术。"
planettip[8]="海王星以海神的名字命名，是另一个深不可测世界的守护神。如果你掷出了海王星骰子，那么问题是并不清晰或确定，也不现实。海王星掌管梦和灵感，该能量既理想主义又不可琢磨。海王星很适合艺术或灵性方面的努力，但对于较现实的目标，它意味着你必须得有想象力和同情心。对于具体的结果来说，海王星可能太过梦幻。它也意味着你的情况不切实际或过于朦胧使得这次无法看清楚。当海王星骰子出现时，并非让你务实，而是该进入另一个领域之中，并变得更具艺术灵感。 海王星的其他象征： 酒和麻醉药、毒品、寺院、修道院、云雾、海市蜃楼、电影院、圣徒、慈善机构、烟幕、气体、人体上的松果体部位。"
planettip[9]="冥王星以地府之王的名字命名。它是股深刻、黑暗、具有转变性质的能量。如果你掷出了冥王星骰子，那意味着有些事即将获得新生。一个根本的改变将在已经被夷为平地的旧形势中发生，以便新能量进入并看到光明。冥王星也是威力强大的能量，可能指代的是你当下所困之地。冥王星令你接近强大的能量，尤其是具有转变性的事物。当冥王星骰子出现，将伴随着难以忽略的强度，以及某些事物必须死亡来迎接新生的信号。 冥王星的其他象征： 咖啡、埋在地下的宝藏、地下室、隧道、性、面具、无花果树、蛙、蛇、火山、原子力。"
planettip[10]="月之北交点象征你此生为之努力的业力目标。它代表你的灵魂任务。如果你扔出了北交点骰子，它意味着过往经验与你的灵魂宿命同在，从中你可以让你的灵性得到成长，并在业力之路上更进一步。 当北交点骰子出现时，它代表业力的收获和灵魂成长。"
planettip[11]="月之南交点象征有关你前世的问题，它关乎你已忘却的过去。如果你扔出南交点骰子，那表示其行为模式的根源也许是在前世，并再度活跃，因而你会又重新经历一番并将它们解决。 南交点掌管你一切过往业力。它是你已行过的历程。"

var planetstar = new Array()
planetstar[0]="白羊"
planetstar[1]="金牛"
planetstar[2]="双子"
planetstar[3]="巨蟹"
planetstar[4]="狮子"
planetstar[5]="处女"
planetstar[6]="天平"
planetstar[7]="天蝎"
planetstar[8]="射手"
planetstar[9]="摩羯"
planetstar[10]="水瓶"
planetstar[11]="双鱼"

var planetstartip = new Array()
planetstartip[0]="白羊座表示直截了当、一马当先、固执的方式。它起到领导他人的作用。它冲动、好争、自信；充满男性动力和阳刚之力。白羊座总是在前进且充满热情，认为先到先得。它是强壮、火热的能量。如果掷出白羊座骰子，它也可能指一年中3月21日至4月21日太阳在白羊座内的那段时间——或是指出生在那段时间的人。 白羊座代表的人体部位：头部。 白羊座象征的地点：比利时、加拿大、丹麦、英格兰、德国、日本。"
planetstartip[1]="金牛代表一种缓慢但可靠的方式。它平静而稳固，喜欢安全保障和按惯例行事。它传统、现实、持久，且是黄道12星座中最物质化的能量。金牛朴实、理性、占有欲强、欣赏天然且美好的事物。它稳固、不变、坚定不移。如果扔出金牛座骰子，它也可能指一年中4月21日至5月21日太阳在金牛座内的那段时间——或是指出生在那段时间的人。 金牛座代表的人体部位：颈和喉。 金牛座象征的地点：古巴、伊朗、爱尔兰、以色列、美国路易斯安那州、马里兰州、明尼苏达州。"
planetstartip[2]="双子座代表轻快和交流的方式。它象征多功能、多变、不停息、甚至寻求多样化和多动性。它思维敏捷、灵敏、满是新点子。它是双生子的象征。 双子座能同时做多个任务。该股能量适应性强且能向多方向发展。如果掷出双子座骰子，它也可能指一年中5月22日至6月21日太阳在双子座内的那段时间——或是指出生在那段时间的人。 双子座代表的人体部位：手和手臂 双子座象征的地点：美国阿肯色州、肯塔基州、罗得岛州、南卡罗莱纳州、田纳西州、西弗吉尼亚州、威斯康辛州。"
planetstartip[3]="巨蟹代表一种敏感和防卫性的方式。它通过感受、直觉、想象来发挥作用。它恋家、怀旧。巨蟹是种母性、养育、照料的能量，且和月亮的周期同步。如果掷出巨蟹座骰子，它也可能指一年中6月22日至7月22日太阳在巨蟹座内的那段时间——或是指出生在那段时间的人。 巨蟹座代表的人体部位：胃 巨蟹座象征的地点：阿根廷、荷兰、爱达荷州、新罕布什尔州、欣悦城、苏格兰。"
planetstartip[4]="狮子座代表公开且戏剧化的方式。它尊贵、骄傲、自信、且勇敢。奢侈、慷慨、戏剧化且令人印象深刻。狮子会把事情放在舞台中央和阳光之下。它适合表演艺术。如果掷出狮子座骰子，它也可能指一年中7月23日至8月23日太阳在狮子座内的那段时间——或是指出生在那段时间的人。 狮子座代表的人体部位：心和脊柱 狮子座象征的地点：美国的科罗拉多州、密苏里州、纽约州。法国、夏威夷、意大利的罗马。"
planetstartip[5]="处女座代表谦虚但完美主义的方式。它聪明、善交流、擅长研究和分析。它头脑冷静、有辨别力、精益求精。处女座也和健康及卫生保健、药材、收获相关。如果掷出处女座骰子，它也可能指一年中8月24日至9月23日太阳在处女座内的那段时间——或是指出生在那段时间的人。 处女座代表的人体部位：肠 处女座象征的地点：美国的加里弗尼亚州、希腊、法国巴黎、瑞士、西印度岛及其群岛。"
planetstartip[6]="天秤座代表外交手腕、寻求和谐的方式。它是合作、施受公平的能量。它喜欢与他人一起公平共事、且能看到问题的两面。天秤是个社交性的星座，待人圆滑、有礼。它和人际关系有关，且具有判断能力、喜欢公平竞争。如果掷出天秤座骰子，它也可能指一年中9月24日至10月23日太阳在天秤座内的那段时间——或是指出生在那段时间的人。 天秤座代表的人体部位：肾脏 天秤座象征的地点：中国、塞浦路斯、中国西藏"
planetstartip[7]="天蝎座代表一种强烈且感性的方式。它深刻、黑暗、秘密、能看穿事物表面。它能容忍他人的黑暗面，但感情上占有欲强、易被权力游戏吸引。天蝎座通过欲望和激情实现蜕变。如果掷出天蝎座骰子，它也可能指一年中10月24日至11月22日太阳在天蝎座内的那段时间——或是指出生在那段时间的人。 天蝎座代表的人体部位：性器官 天蝎座象征的地点：非洲、巴西、冰岛、意大利西西里岛。美国的蒙大拿州、内华达州、北卡罗莱纳州、北达科他州、俄克拉荷马州、南达科他州、华盛顿州。"
planetstartip[8]="射手座代表喜欢自由、有幽默的方式。它幸运、思维开阔、不够圆滑得体、总是在思维中和以行动去探索新领域。它既是出色的老师又是爱持续学习的学生。射手座乐观、独立、随心所欲，它是12星座中的旅行家。如果掷出射手座骰子，它也可能指一年中11月23日至12月21日太阳在射手座内的那段时间——或是指出生在那段时间的人。 射手座代表的人体部位：臀部、大腿 射手座象征的地点：澳大利亚、摩纳哥、西班牙。美国的亚拉巴马州、特拉华州、伊利诺伊州、印第安纳州、密西西比河、新泽西州、宾夕法尼亚州。"
planetstartip[9]="摩羯座代表具有责任感、有秩序的方式。它辛勤工作、承担职责。它本质是中向上攀登的能量。凭借理性和耐心攀登顶峰。它不爱冒风向，也不抱侥幸心理，然而有组织、善管理且世俗。 摩羯随着年龄增长而越发强大。如果掷出摩羯座骰子，它也可能指一年中12月22日至1月20日太阳在摩羯座内的那段时间——或是指出生在那段时间的人。 摩羯座代表的人体部位：膝盖 摩羯座象征的地点：印度、墨西哥。美国的阿拉斯加州、康涅狄格州、佐治亚州、爱荷华州、新墨西哥州、德克萨斯州、犹他州。"
planetstartip[10]="水瓶座代表科学且人道主义的方式。它是种超然、善思考的能量，异乎寻常且超越了自己所处的时代。它的想法更具未来性和革新性。水瓶是12星座中最不带偏见的星座。它友好且将所有人视作平等的兄弟姐妹。它在团队中如鱼得水。如果掷出水瓶座骰子，它也可能指一年中1月21日至2月18日太阳在水瓶座内的那段时间——或是指出生在那段时间的人。 水瓶座代表的人体部位：踝关节 水瓶座象征的地点：俄罗斯、瑞典。美国的亚利桑那州、堪萨斯州、马萨诸塞州、密歇根州、俄勒冈州。"
planetstartip[11]="双鱼座代表充满想象、如诗般的方式。它感性、具有灵性且无私。它温柔、具同情心、通灵。双鱼座沉浸在自己的梦境和艺术世界之中，那儿界限模糊不明。它随自己内心潮汐的变化起伏而动。如果掷出双鱼座骰子，它也可能指一年中2月19日至3月20日太阳在双鱼座内的那段时间——或是指出生在那段时间的人。 双鱼座代表的人体部位：脚 双鱼座象征的地点：哥伦比亚、新西兰、巴拿马、葡萄牙。美国的佛罗里达州、缅因州、内布拉斯加州、俄亥俄、佛蒙特州、华盛顿。"

var planetpositon = new Array()
planetpositon[0]="一宫"
planetpositon[1]="二宫"
planetpositon[2]="三宫"
planetpositon[3]="四宫"
planetpositon[4]="五宫"
planetpositon[5]="六宫"
planetpositon[6]="七宫"
planetpositon[7]="八宫"
planetpositon[8]="九宫"
planetpositon[9]="十宫"
planetpositon[10]="十一"
planetpositon[11]="十二"

var planetpositontip = new Array()
planetpositontip[0]="一宫:角宫，自我意识，表达方式，外貌，人格及童年成长环境，1宫代表影响你个人的人生和生活。 它描述了你的生理外观和个人行事模式。它是你迎合周遭密切环境、以及对其发挥影响的方式。1宫描述了你给他人的第一眼印象，以及他人看到的你那部分性格。 扔出1宫骰子代表着问题和你自身密切相关，远胜于同他人他物的关系。它直接就指你本人和自我表现。"
planetpositontip[1]="二宫:续宫，个人资产，获得财富方式，赚钱能力，价值观，第2宫代表你拥有的资源。 它主要掌管金钱、所有物。它描述了你赚得的收入和财政前景。 扔出2宫骰子代表着你对世俗资源的态度、你的自我价值观。虽然2宫也可以指内涵，但通常它是和实际的金钱和物质财富有关。"
planetpositontip[2]="三宫:果宫，个人心智，与兄弟姐妹相处状态，适应环境能力，语言沟通能力，第3宫代表你的交流。 它和写作、讲话、学习、教育、以及所有形式的交换相关。它也包括短途的运输和移动行为。 3宫也代表你的兄弟姐妹、堂表兄弟姐妹、左邻右舍。"
planetpositontip[3]="四宫:角宫，家居生活，安全感，房地产，第4宫代表你的房屋、家庭。 它描述了你祖先的遗产、你和过去的关系、以及你组建的家庭。 第4宫也代表广义上的房屋和土地，尤其是你所居住的地方。"
planetpositontip[4]="五宫:续宫，创造力，娱乐，恋爱，子女，第5宫代表你的创意。 它代表娱乐活动、爱好、表演、运动会、聚会、假期、以及所有形式的寻欢作乐。它还和赌博、浪漫、爱情有关。 第5宫也掌管通过你的创造力而来的产品，包括你的子女。"
planetpositontip[5]="六宫:果宫，个人责任，健康，社会服务，第6宫代表你的日常工作和生活。 它包括工作、服务、习惯、仪式和神圣的典礼。 第6宫还和健康、卫生、饮食相关。"
planetpositontip[6]="七宫:角宫，婚姻，合伙关系，第7宫代表你最亲密的一对一关系。 扔出7宫骰子代表着你的商业合作人或情感伴侣，有时也表示你自己的“另外一面”，第7宫涵盖所有密切的个人互动，和泛指与他人间的关系。"
planetpositontip[7]="八宫:续宫，夫妻共同财产或者资源，性，死亡重生，第8宫代表人生深层且神秘的一面。它与重要的人生经验相关，如诞生、性、死亡，以及隐藏在玄学后的秘密和来世。就世俗层面而言，第8宫象征共享资源、遗产继承、以及他人的钱财和所有物。"
planetpositontip[8]="九宫:果宫，高等教育，哲学，宗教，法律，旅行，世界观，心灵，第9宫代表远距离。 它象征全球范围内的长途旅行、追寻与思想和高等教育相关的意义。 第9宫也可指异国人士、异国他乡、以及大学、高等学府。还可用来表示哲学、宗教、崇拜神明。"
planetpositontip[9]="十宫:角宫，名誉地位，事业成就，社会责任，第10宫代表你的事业和声望。 它和你公众形象、地位、声望相关。它描述你的世俗目标、野心，以及如何达成目标，尤其是事业方面。 扔出10宫骰子代表事态会暴露在公众目光之下。"
planetpositontip[10]="十一:续宫，团体，友谊，个人精神与文化层次活动，第11宫象征你的朋友和熟人。它和团队协作、团体活动和社交组织相关。第11宫还代表社会公德良知、人类未来，因而也被称作为希望与未来愿景之宫。"
planetpositontip[11]="十二:果宫，潜意识，个人隐私，内省，心灵净化，第12宫和潜意识及生活中的暗流相关。 第12宫存放着我们最私密的想法和隐藏起来的感受。它象征远离世俗隐居起来，以便和不易觉察的潜藏内心世界接触。 第12宫还包含脱离外界的地方，例如宗教隐居地、医院、监狱、精神病院、庇护所。"

var lucky = new Array()
lucky["太阳"] = "太阳,庙：狮子 旺：白羊 落：水瓶 陷：天平" 
lucky["月亮"] = "月亮,庙：巨蟹 旺：金牛 落：摩羯 陷：天蝎"
lucky["水星"] = "水星,庙：双子处女 旺：处女 落：射手双鱼 陷：双鱼"
lucky["金星"] = "金星,庙：金牛天平 旺：双鱼 落：天蝎白羊 陷：处女"
lucky["火星"] = "火星,庙：白羊天蝎 旺：摩羯 落：天平金牛 陷：巨蟹"
lucky["木星"] = "木星,庙：射手双鱼 旺：巨蟹 落：双子处女 陷：摩羯"
lucky["土星"] = "土星,庙：摩羯水瓶 旺：天平 落：巨蟹狮子 陷：白羊"

let GamblePage_controllor;
let Gamblesubscription = null
class GamblePage extends React.Component {
   constructor(props) {
    super(props);
    var res = new Array()
    res[0]=res[1]=res[2]="未知"
    var tip = new Array()
    tip[0]=tip[1]=tip[2]=""
    this.state = {
      pick:0,
      res:res,
      tip:tip,
      seq:"",
      newseq:""
    }
    GamblePage_controllor = this
  }

  UNSAFE_componentWillMount() {
    this.init();
    
  }


  componentWillUnmount() {
    if(null!=Gamblesubscription){
      Gamblesubscription.remove()
    }
    Gamblesubscription=null;
  }
  init()
  {
    var res = new Array()
    res[0]=res[1]=res[2]="未知"
    var tip = new Array()
    tip[0]=tip[1]=tip[2]=""
    
    this.setState({
      pick:0,
      res:res,
      tip:tip,
      seq:"",
      newseq:""
    })
  }

  clear()
  {
    this.init();
    this.props.navigation.setParams({ GambleState: 'off' })
  }

  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    return{
      
    title: RouteConfig["GamblePage"].name,
    }
  };
  result()
  {
    Vibration.vibrate();
    var pick = this.state.pick;
    
    var res = this.state.res
    var retip = this.state.tip;
    var x = Math.random(100)*100
    x = parseInt(x)%12
    if(pick==0)
    {
      res[0] = planet[x];
      retip[0] = planettip[x];
    }
    if(pick==1)
    {
      res[1] = planetstar[x];
      retip[1] = planetstartip[x];
      this.setState({seq:x})//星座排位
    }
    if(pick==2)
    {
      res[2] = planetpositon[x];
      retip[2] = planetpositontip[x];
      var luckyinfo = lucky[res[0]]
      if(undefined!=luckyinfo)
      {
        retip.push(luckyinfo)
        var seqstar = this.state.seq 
        var position = x
        var seq = new Array();
        for(var i = 0;i<12;i++)
        {
          seq.push("飞星"+ planetpositontip[i].slice(0,2) + ":" + planetstar[(seqstar+i)%12])
          seq.push("（原"+planetpositontip[(position+i)%12]+")")
        }
        this.setState({newseq:seq})
      }
      
    }

    pick++;
    var rt  = JSON.parse(JSON.stringify(res));
    var tip  = JSON.parse(JSON.stringify(retip));
    this.props.navigation.setParams({ GambleState: 'on' })
    this.setState({pick:pick,res:rt,tip:tip})
  }
  GambleButtonShow()
  {
    if(this.state.pick>0)
    {
      return(
        <View>
        <Text style={styles.list}>星座骰子解释</Text>
        </View>
      )
    }
  }
  keyExtractor = (item,index) => index.toString()

  renderItem(item) {
    var text = FontTypeModule[item.item]
    var col = ""
    var bg = ""
    var bd = 0
    if(undefined!=FontTypeModule[item.item])
    {
      text = (FontTypeModule[item.item])[0]
      col = (FontTypeModule[item.item])[1]
      bg = (FontTypeModule[item.item])[2]
      bd = 1
    }
    else
    {
      text = ""
      col = '#00C0FF'
      bg = '#F0F9FF'
      bd = 1
    }
    return (
        <View style={[styles.container,{alignItems:'center'}]}>
        <TouchableHighlight style = {[{backgroundColor:bg,borderColor:col,borderStyle:'solid',borderWidth:bd,borderRadius:30}]}>
        <Text style = {[StyleConfig.astrofont,{color:col}]}>{text}</Text>
        </TouchableHighlight>
        <Text></Text>
        <Text key={item.item} style ={[{color:col}]}>{item.item}</Text>
        <WhiteSpace size="xl" />
        
        </View>
    );
  }

  renderItemTip(item) {
    return (
        <View style={styles.container}>
        <Text key={item.item} style = {styles.list}>{item.item}</Text>
        <WhiteSpace size="xl" />
        </View>

    );
  }

  switchbar()
  {
    const { navigate } = this.props.navigation;
    if (this.state.pick > 2) {
      return (
        <TabNavigator tabBarStyle={{ height: ScreenConfig.getTabBarHeight() , backgroundColor: '#ffffff',}}>
          <TabNavigator.Item
            title={RouteConfig["RefreshImage"].name}
            renderIcon={() => RouteConfig["RefreshImage"].icon}
            onPress={() => this.clear()}
            titleStyle={StyleConfig.menufont}>
          </TabNavigator.Item>
          <TabNavigator.Item
            title={RouteConfig["ScreenImage"].name}
            renderIcon={() => RouteConfig["ScreenImage"].icon}
            onPress={() => { this.setState({ shareimg: true }), WechatShare.snapshot(this.refs['location'], "星座骰子", this) }}
            titleStyle={StyleConfig.menufont}>
          </TabNavigator.Item>
        </TabNavigator>
      )
    }
    else {
      return (
        <TabNavigator tabBarStyle={{ height: ScreenConfig.getTabBarHeight() , backgroundColor: '#ffffff',}}>
          <TabNavigator.Item
            title={RouteConfig["GamblePageButton"].name}
            renderIcon={() => RouteConfig["GamblePageButton"].icon}
            //renderSelectedIcon={() => IconConfig.IconDvinationSel}
            onPress={() => this.result()}
            titleStyle={StyleConfig.menufont}>
          </TabNavigator.Item>
        </TabNavigator>
      )
    }
  }
  render()
  {
    const { navigate } = this.props.navigation;
    if(null==Gamblesubscription){
      Gamblesubscription = RNShake.addListener(() => {
        if("GameblePage"== RouteConfig["ActiveCurPage"]){
          this.result()
        }
      })
    }
    return (
    <View style={styles.container}>
      <ScrollView ref="location" style={{backgroundColor:'#ffffff'}}>
      <View style={styles.container} >
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
            <FlatList  
              data={this.state.res}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              numColumns ={3}
              columnWrapperStyle={{justifyContent: 'space-around',alignItems:'stretch'}}

              />
              <Text></Text>
              <Text></Text>
              {this.GambleButtonShow()}
              <Text></Text>
              <FlatList  
              data={this.state.tip}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItemTip}

              />
              <Text></Text>
              <Text></Text>
              <Text style={styles.list}>{""!=this.state.newseq?"飞星宫位":""}</Text>
              <Text></Text>
              <Text></Text>
              <FlatList  
              data={this.state.newseq}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItemTip}

              />

              <WhiteSpace size="xl" />
            {
             (WechatShare.shareimg(this.state.shareimg))
            }
            
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            </View>
            </ScrollView>
            {this.switchbar()}
      
    </View>
					)
  }
  
}

var styles = StyleSheet.create ({
  container: {
    flex:1,
    backgroundColor:'#ffffff'
  },
  subtitleView:{
    flexDirection:'row',
    paddingLeft:10,
    //paddingTop:5
  },
  ratingText:{
    paddingLeft:10,
    color:'blue'
  },


  list:{
    //height:45,
    marginLeft: 10,
    paddingLeft:10,
    marginRight: 10,
    paddingRight:10,
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
  },


});
module.exports=GamblePage;  