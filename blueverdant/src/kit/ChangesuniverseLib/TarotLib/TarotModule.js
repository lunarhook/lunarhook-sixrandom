

import React, {Component} from 'react';

var cards = new Array();
cards[0] = {
  name:"愚者",
  card:"The fool",
  kind:"big",
  key:"自由旅行的各种可能，占卜意义--明显的危险·无知·放纵的愚行·无限的可能",
  position:"开始·体验",
  negative:"感受·放下规则和限制",
  element:"",
  description:"",
  img:require('../../../../img/tarot/00.jpg'),
}
cards[1] = {
  name:"魔术师",
  card:"The Magician",
  kind:"big",
  key:"将天上的旨意带到人间，占卜意义--新开始·自信·创造·主动·条件完备",
  position:"创造",   
  negative:"放弃·反省",
  element:"",
  description:"",
  img:require('../../../../img/tarot/01.jpg'),
}
cards[2] = {
  name:"女祭司",
  card:"The High Priestess",
  kind:"big",
  key:"隐而未现的神秘智慧，占卜意义--静默·尚未完全现实·平衡二元对·智慧",
 position:"智慧·耐心·探索和思考",   
 negative:"依靠引导·寻找自我",
  element:"",
  description:"",
  img:require('../../../../img/tarot/02.jpg'),
}
cards[3] = {
  name:"皇后",
  card:"The Empress",
  kind:"big",
  key:"孕育万物的大地之母，占卜含义：未开发的·肥沃多产·享乐·爱与美",
 position:"温暖·照顾，积极的感受爱与美",
    negative:"感受力量·进入智慧·停止·等待",
  element:"",
  description:"",
  img:require('../../../../img/tarot/03.jpg'),
}
cards[4] = {
  name:"皇帝",
  card:"The Emperor",
  kind:"big",
  key:"世俗权利与父权同志，占卜意义--权利·慈爱·保护·执行力·意志力",
 position:"理性面对·渴望·权利",   negative:"能力不足·意志力·失控",
  element:"",
  description:"",
  img:require('../../../../img/tarot/04.jpg'),
}
cards[5] = {
  name:"教皇",
  card:"The Hierophant",
  kind:"big",
  key:"宗教与灵性的引导者，占卜意义--灵性成长·慈悲·组织的秩序·贵人相助",
 position:"遵循·灵性·成长",   negative:"盲从·思考·启发",
  element:"",
  description:"",
  img:require('../../../../img/tarot/05.jpg'),
}
cards[6] = {
  name:"恋人",
  card:"The Lovers",
  kind:"big",
  key:"神所祝福的纯洁之爱，占卜意义--纯真·两情相悦·引诱·选择",
 position:"选择·纯洁·生命·开始",   negative:"责任·承担",
  element:"",
  description:"",
  img:require('../../../../img/tarot/06.jpg'),
}
cards[7] = {
  name:"战车",
  card:"The Chariot",
  kind:"big",
  key:"征服者的战争与胜利，占卜意义--战争行为·不断努力·征服·以智取胜",
 position:"强烈意志·不计代价",   negative:"对抗·希望·更高的原理与目标",
  element:"",
  description:"",
  img:require('../../../../img/tarot/07.jpg'),
}
cards[8] = {
  name:"力量",
  card:"Strength",
  kind:"big",
  key:"成功驯服强大的力量，占卜意义--权利·勇气·相互配合·以柔克刚",
  position:"能量·智慧·克服困难·理性·实际行动",   
  negative:"适当的权利·不必要的威胁和伤害·肯定·爱与付出",
  element:"",
  description:"",
  img:require('../../../../img/tarot/08.jpg'),
}
cards[9] = {
  name:"隐士",
  card:"The Hermit",
  kind:"big",
  key:"沉思者的追寻与引导，占卜意义--离群索居·老朽·谨慎·引导与教育",
  position:"审思·探索内心真正的想法·断绝外部联系",   
  negative:"真理和道路都在心中·追寻的道路必须是孤独的",
  element:"",
  description:"",
  img:require('../../../../img/tarot/09.jpg'),
}
cards[10] = {
  name:"命运之轮",
  card:"The Wheel of Fate",
  kind:"big",
  key:"宇宙人生的无常变化，占卜意义--命中注定·幸运·无可选择的改变·处变不惊",
 position:"改变·秩序·心智和情绪都要突破的成长",   negative:"开放心胸去容纳·突破难关",
  element:"",
  description:"",
  img:require('../../../../img/tarot/10.jpg'),
}
cards[11] = {
  name:"正义",
  card:"Justice",
  kind:"big",
  key:"符合公平正义的判断，占卜意义--公平正义·平衡·重要的决定·以法律解决",
 position:"衡量·追求正义和公平·不要被表面所懵逼",   negative:"思考不见得能得到答案·或许是直觉·答案在心中",
  element:"",
  description:"",
  img:require('../../../../img/tarot/11.jpg'),
}
cards[12] = {
  name:"倒吊人",
  card:"The Hanged Man",
  kind:"big",
  key:"暂停中体悟到的洞见，占卜意义--悬而未决·考验·洞悉的能力·牺牲",
 position:"忍从·强烈的洞见和直觉·在现实中接受残酷和美好",   negative:"放下恐惧和混乱·回到真实的自我·发现平静和安详",
  element:"",
  description:"",
  img:require('../../../../img/tarot/12.jpg'),
}
cards[13] = {
  name:"死神",
  card:"Death",
  kind:"big",
  key:"必然结束与重新开始，占卜意义--必死的命运·重大的转变·结束与开始·解脱",
 position:"结束·除旧迎新·解脱痛苦·放下过去才有未来",   negative:"恐惧改变·结束才有开始·面对转变才有提升",
  element:"",
  description:"",
  img:require('../../../../img/tarot/13.jpg'),
}
cards[14] = {
  name:"节欲",
  card:"Temperance",
  kind:"big",
  key:"不同意见的交流融合，占卜意义--相互融合·转化与净化·中庸之道·管理与调控",
  position:"和谐·面向跟高的需求·放下包袱·寻找奥秘和智慧",   negative:"彼此合作更佳·评估自己·步步为营",
  element:"",
  description:"",
  img:require('../../../../img/tarot/14.jpg'),
}
cards[15] = {
  name:"恶鬼",
  card:"The Devil",
  kind:"big",
  key:"感官享受与强烈的欲望，占卜意义--毁坏·暴力相向·被欲望懵逼·短暂的享乐",
  position:"迷惑·过度重视物质·空虚·迷茫·缺少人生目标",   negative:"心灵空虚·寻找自我治愈的力量·超脱物质的诱惑",
  element:"",
  description:"",
  img:require('../../../../img/tarot/15.jpg'),
}
cards[16] = {
  name:"塔",
  card:"The Tower",
  kind:"big",
  key:"神意之外的必备毁灭，占卜意义--被毁灭·突来的意外·自作自受·执迷不悟",
  position:"降临·执着错误·偏离真理·不归路",   negative:"恐惧让你停止·无法了解真相·启发潜在智慧和勇气",
  element:"",
  description:"",
  img:require('../../../../img/tarot/16.jpg'),
}
cards[17] = {
  name:"星辰",
  card:"The Star",
  kind:"big",
  key:"上天的启示与光明的希望，占卜意义--目标与希望·想的美·分享与回馈·渴望自由",
 position:"希望·渴望被启迪·放空自己才能寻找智慧",   negative:"直觉和灵感相悖·接受不完美的自己·寻找事实",
  element:"",
  description:"",
  img:require('../../../../img/tarot/17.jpg'),
}
cards[18] = {
  name:"月亮",
  card:"The Moon",
  kind:"big",
  key:"照亮未知不安的光明，占卜意义--不安与恐惧·欺骗和幻觉·隐藏的危机·难以琢磨的变化",
 position:"迷茫·需要寻找坚实的基础·参考梦境指引·寻找答案",   negative:"欺骗和困顿中走不出来·如果自我欺骗和自我沉睡·永远不能得救",
  element:"",
  description:"",
  img:require('../../../../img/tarot/18.jpg'),
}
cards[19] = {
  name:"太阳",
  card:"The Sun",
  kind:"big",
  key:"光明与生命力的来源，占卜意义--圆满成功·快乐与满足·一视同仁·朝向光明",
 position:"明朗·心灵与智慧的提升·乐观面对光明",   negative:"健康是一切的根本·建立自信·建立自知",
  element:"",
  description:"",
  img:require('../../../../img/tarot/19.jpg'),
}
cards[20] = {
  name:"审判",
  card:"Judgement",
  kind:"big",
  key:"由内心回应上天的召唤，占卜意义--复活与重生·判断·觉醒·结算成果",
 position:"判断·觉醒·强烈的欲望·倾听自己",   negative:"开悟·修持·回到真实",
  element:"",
  description:"",
  img:require('../../../../img/tarot/20.jpg'),
}
cards[21] = {
  name:"世界",
  card:"The World",
  kind:"big",
  key:"宇宙尽头的最后结局，占卜意义--自然的规律·到此未知·完美的结局·统合",
 position:"幸福·了解自然法则·肩负责任与承担",   negative:"敬畏担忧·进一步学习理解·真理有多种层次·你了解的并非唯一",
  element:"",
  description:"",
  img:require('../../../../img/tarot/21.jpg'),
}
cards[22] = {
  name:"权杖1",
  card:"sceptre",
  kind:"small",
  key:"占卜意义--新行动·主动·信心·无限的潜能",
 position:"能量·充满自信·自然发生·把我时机",   negative:"保持精神活泼·不要被观念限制·要充满积极行动力",
  element:"",
  description:"",
  img:require('../../../../img/tarot/wand1.jpg'),
}
cards[23] = {
  name:"权杖2",
  card:"sceptre",
  kind:"small",
  key:"占卜意义--思考与计划·犹豫不决·受限制的行动·延迟",
 position:"决定·优秀的领导能指出方向和愿景·如果不够专心本业再多幻想都无法实现",   negative:"行动是成功的不二法门·空谈无法实现·理念需要落实下去",
  element:"",
  description:"",
  img:require('../../../../img/tarot/wand2.jpg'),
}
cards[24] = {
  name:"权杖3",
  card:"sceptre",
  kind:"small",
  key:"占卜意义--初步的成果·合作及领导·积极进取·未知的旅程",
 position:"实行·事情是要彼此互惠的·同时照顾彼此才能长久·不劳而获是不可取的",   negative:"认清自己是谁·什么是自己的核心价值·什么是你的资本",
  element:"",
  description:"",
  img:require('../../../../img/tarot/wand3.jpg'),
}
cards[25] = {
  name:"权杖4",
  card:"sceptre",
  kind:"small",
  key:"占卜意义--成功及维持现状·庆祝及享受·平和相处·固定及安全",
 position:"安定·事情到一个阶段就要休息·复盘·判断自己当下的成果·回到平静",   negative:"传统和习惯是有道理的·但是要创意的运用它·赋予新含义·创造新价值",
  element:"",
  description:"",
  img:require('../../../../img/tarot/wand4.jpg'),
}
cards[26] = {
  name:"权杖5",
  card:"sceptre",
  kind:"small",
  key:"占卜意义--努力进取·立场观点不同·摩擦或冲突·模仿",
 position:"冲突·实际的努力才是重要的·才能真实理解·不要妄下结论",   negative:"内心批判会损耗自己的心智·也无法正确理解·要调整自己的心态·化解问题",
  element:"",
  description:"",
  img:require('../../../../img/tarot/wand5.jpg'),
}
cards[27] = {
  name:"权杖6",
  card:"sceptre",
  kind:"small",
  key:"占卜意义--胜利者凯旋·自信心·荣誉·赞美与支持",
 position:"自信·通过自信和诚实换来胜利·才值得荣耀·偷懒和快捷都无法长久",   negative:"外在敌人并不可怕·放下内心的恐惧·发现真正的智慧和价值",
  element:"",
  description:"",
  img:require('../../../../img/tarot/wand6.jpg'),
}
cards[28] = {
  name:"权杖7",
  card:"sceptre",
  kind:"small",
  key:"占卜意义--优势地位·不同的挑战·坚持下去·积极抵抗",
 position:"拼搏·真正的勇气来自与内心的坚定·非为武力冲突·了解自己才能知道自己的立场",   negative:"人在逆境要保持理智与冷静·让真实的内在重新连接·避免不理解不适合的决定",
  element:"",
  description:"",
  img:require('../../../../img/tarot/wand7.jpg'),
}
cards[29] = {
  name:"权杖8",
  card:"sceptre",
  kind:"small",
  key:"占卜意义--快速的行动·共同的目标·自由的空间·忙碌",
 position:"耐心和恒心才是实现的方法·精通和掌握不能三分钟热度",   negative:"速度有时并非决胜关键·计划可能是目前更需要的·作恶会引来更多冲突",
  element:"",
  description:"",
  img:require('../../../../img/tarot/wand8.jpg'),
}
cards[30] = {
  name:"权杖9",
  card:"sceptre",
  kind:"small",
  key:"占卜意义--受伤准备反击·防守策略·延迟与等待",
 position:"谨慎与信任·强大的时候也需要小心·不要引发无谓的争夺和冲突",   negative:"反省可以帮你找到力量·了解自己的定位·与环境和谐相处",
  element:"",
  description:"",
  img:require('../../../../img/tarot/wand9.jpg'),
}
cards[31] = {
  name:"权杖10",
  card:"sceptre",
  kind:"small",
  key:"占卜意义--压力与劳累·责任感·得到·抓紧不放",
  position:"负担与责任·如果自私的抓住所有东西·必然遭到无法承担的失败",   negative:"做好自己份内的事·权责区分可以创造更好的空间·也可以建立自信",
  element:"",
  description:"",
  img:require('../../../../img/tarot/wand10.jpg'),
}
cards[32] = {
  name:"权杖侍从",
  card:"sceptre",
  kind:"palace",
  key:"占卜意义--天真纯洁·恶作剧·行动的信息·尝试错误",
  position:"灵感与精神·人生中总要面对一些事情，只有经历过后才知道并了解这些深刻的东西，这就是你最真实最可贵的财富",   negative:"能面对自己内心的恐惧，才能处理外面世界的变化，对于所有感受，都要冷静处理和面对",
  element:"",
  description:"",
  img:require('../../../../img/tarot/wand11.jpg'),
}
cards[33] = {
  name:"权杖骑士",
  card:"sceptre",
  kind:"palace",
  key:"占卜意义--勇于面对挑战·行动力·乐观·质朴率真",
  position:"激情与热情·不要害怕面对挑战·变化也是不可避免的事情·克服恐惧就可以顺利出发了",   negative:"除了精神胜利和成长，也要把力量运用在实际生活中，这样处理问题才能无往而不利",
  element:"",
  description:"",
  img:require('../../../../img/tarot/wand12.jpg'),
}
cards[34] = {
  name:"权杖王后",
  card:"sceptre",
  kind:"palace",
  key:"占卜意义--光明而愉快·亲切·善用直觉·财运的提升",
  position:"独立和自信·接受生命给你的各种经验·超光明去看待问题·发现生活的丰富·带给自己新的想法和观点",   negative:"别面的交谈会限制自己的发展·诚心才能让你扩展全新真实的经验·看见生命的另一种可能",
  element:"",
  description:"",
  img:require('../../../../img/tarot/wand13.jpg'),
}
cards[35] = {
  name:"权杖国王",
  card:"sceptre",
  kind:"palace",
  key:"占卜意义--经验丰富·谋定而后动·创造力·固执己见",
  position:"成功与愿景·反省自己的各种经验·寻找自己的核心价值·找回自信·发现新的灵感和方向",   negative:"太多的经验就导致无法探索·随着你放下的越多·你会看的越远",
  element:"",
  description:"",
  img:require('../../../../img/tarot/wand14.jpg'),
}

cards[36] = {
  name:"圣杯1",
  card:"grail",
  kind:"small",
  key:"占卜意义--感情的开始·丰富与满足·上天的祝福·纯洁无暇",
  position:"心灵与情感·放下小我·接受大爱·自由的帮助更多的人",   negative:"相信灵感与直觉·不要被外在限制·探索自己的内心·实现自己的理想",
  element:"",
  description:"",
  img:require('../../../../img/tarot/cup1.jpg'),
}
cards[37] = {
  name:"圣杯2",
  card:"grail",
  kind:"small",
  key:"占卜意义--平等的关系·主动的付出·强烈的吸引力·良好的沟通",
  position:"契合与沟通·内心的爱需要表达·分享喜悦可以获得信任",   negative:"检讨自己爱的表达方式·寻找新方向·处理的更加圆融",
  element:"",
  description:"",
  img:require('../../../../img/tarot/cup2.jpg'),
}
cards[38] = {
  name:"圣杯3",
  card:"grail",
  kind:"small",
  key:"占卜意义--庆祝·欢乐的气氛·平等的合作·应得的报应",
 position:"分享与庆祝·诚心接受结果·享受快乐·不断的努力",   negative:"确定目标才能到达·没有目标则失去方向·清除杂念寻找自己的方向",
  element:"",
  description:"",
  img:require('../../../../img/tarot/cup3.jpg'),
}
cards[39] = {
  name:"圣杯4",
  card:"grail",
  kind:"small",
  key:"占卜意义--暂时的休息·沉思·不满意·自己的想象",
 position:"机会·反思才是进步的动力·发现自己的智慧·发现自己的天分和能力",   negative:"把理智放空·发现更多内在·探索直觉和想法",
  element:"",
  description:"",
  img:require('../../../../img/tarot/cup4.jpg'),
}
cards[40] = {
  name:"圣杯5",
  card:"grail",
  kind:"small",
  key:"占卜意义--伤心难过·失去·之看到的部分的一面·仍保有部分",
 position:"悲伤与失落·不要总关注自己的缺点·发现自己的优势·发挥自己的优势",   negative:"能够接受失去才能珍惜·得失只是观念的不同·不必要为了无法掌握的问题担心",
  element:"",
  description:"",
  img:require('../../../../img/tarot/cup5.jpg'),
}
cards[41] = {
  name:"圣杯6",
  card:"grail",
  kind:"small",
  key:"占卜意义--不平等的关系·深度的承诺·回忆·真诚的爱",
 position:"熟悉和安全·如果只付出不回报则会打破平衡·在爱中不仅要学习爱·被爱也是需要学习的事",   negative:"与其向外界索取快乐不如倾听自己的内心·真正的快乐源自自我的充分了解·接受自我的状态",
  element:"",
  description:"",
  img:require('../../../../img/tarot/cup6.jpg'),
}
cards[42] = {
  name:"圣杯7",
  card:"grail",
  kind:"small",
  key:"占卜意义--梦境·自己的想象·各种的欲望·不了解自己",
 position:"思考和认识·不了解自己的需求而去拥有都是虚幻的想法·真正的成功都是根植于内心的理念",   negative:"放下过去才能开始·放空双手才能抓住机会",
  element:"",
  description:"",
  img:require('../../../../img/tarot/cup7.jpg'),
}
cards[43] = {
  name:"圣杯8",
  card:"grail",
  kind:"small",
  key:"占卜意义--缺乏·离开去寻找·实质的行动力·改变现状",
 position:"超越和追求·把想法实现才是创造·空想只会被现实打败",   negative:"华而不实的空洞不如努力寻找自己内心的奇迹",
  element:"",
  description:"",
  img:require('../../../../img/tarot/cup8.jpg'),
}
cards[44] = {
  name:"圣杯9",
  card:"grail",
  kind:"small",
  key:"占卜意义--丰富的成就·满意·炫耀·不肯分享",
 position:"满足和喜悦·懂得享受生活才是智慧·把物质视为堕落会迷失心智",   negative:"懂得分享才是拥有·独占只会陷入失败境地",
  element:"",
  description:"",
  img:require('../../../../img/tarot/cup9.jpg'),
}
cards[45] = {
  name:"圣杯10",
  card:"grail",
  kind:"small",
  key:"占卜意义--感情的完美·希望·和乐的气氛·和家人的相处模式·归属",
 position:"归属和幸福·完美归属于内心平静·诚心的快乐",   negative:"进入平静才能领悟上天的讯息·解决问题才能获得真正的平静",
  element:"",
  description:"",
  img:require('../../../../img/tarot/cup10.jpg'),
}
cards[46] = {
  name:"圣杯侍从",
  card:"grail",
  kind:"palace",
  key:"占卜意义--好奇心·好学不倦·想象力·人际关系的新信息",
 position:"亲密和朋友·经常的反省和思考会让自己了解自己·真实的背后是内在的力量",   negative:"美丽的词藻之后往往都是缺乏自信和内涵·朴实之中往往才是真诚坚定的信念",
  element:"水",
  description:"",
  img:require('../../../../img/tarot/cup11.jpg'),
}
cards[47] = {
  name:"圣杯骑士",
  card:"grail",
  kind:"palace",
  key:"占卜意义--温柔浪漫·传播理念·朋友来访·提出建议",
 position:"浪漫和展望·自己的新感悟应该分享出来才能检验·帮助别人才能发现自己的不足",   negative:"谎言或诡计只能遮盖一时的错误·勇于承担才能避免更大的代价",
  element:"水",
  description:"",
  img:require('../../../../img/tarot/cup12.jpg'),
}
cards[48] = {
  name:"圣杯王后",
  card:"grail",
  kind:"palace",
  key:"占卜意义--慈爱关怀·同理心·灵性上的成长·保持专注",
 position:"忠诚和温柔·关注自己也需要关注他人·才能平衡潜意识和现实",   negative:"把真实与想象分清·才能在想想中飞翔又不影响日常生活",
  element:"水",
  description:"",
  img:require('../../../../img/tarot/cup13.jpg'),
}
cards[49] = {
  name:"圣杯国王",
  card:"grail",
  kind:"palace",
  key:"占卜意义--处变不惊·宽容慈悲·学识丰富·重视婚姻家庭",
 position:"感受和情绪·帮助别人是令自己快乐的过程·虽然付出很多但内心也得到令滋润",   negative:"把知识用在正当的事上才能发挥才能也对别人产生贡献·不要被利益诱惑",
  element:"水",
  description:"一个老实、善意的男子但轻易草率的作出决定，所以不是一个可以依靠的人，也不要指望从他那里得到有益的忠告。同时， 圣杯国王也代表着冷静，明智和圆滑。",
  img:require('../../../../img/tarot/cup14.jpg'),
}


cards[50] = {
  name:"宝剑1",
  card:"sword",
  kind:"small",
  key:"占卜意义--挑战·主动出击·荣耀与胜利·过度",
 position:"计划与准备·巨大的宝剑即可以帮人也可以害人·中庸之道才能把力量用在正确的地方",   negative:"强迫的东西不会长久·不要让诱惑蒙蔽了智慧",
  element:"",
  description:"",
  img:require('../../../../img/tarot/sword1.jpg'),
}
cards[51] = {
  name:"宝剑2",
  card:"sword",
  kind:"small",
  key:"占卜意义--逃避·没有行动·自我防御·僵持",
  position:"不安与现实·要在现实与争吵中保持平衡就不能逃避·放下无谓的坚持就会看到道路",   negative:"不论对立有多严重·都又放下恢复和平的一天·只有知道真相才能找到最佳平衡",
  element:"",
  description:"",
  img:require('../../../../img/tarot/sword2.jpg'),
}
cards[52] = {
  name:"宝剑3",
  card:"sword",
  kind:"small",
  key:"占卜意义--心碎和忧郁·净化和成长的眼泪·缺乏及不完备·延迟",
  position:"悲伤与困顿·悲伤和泪水都是必须经历的过程·更重要是体会净化和成长·打击后重新站立",   negative:"生命中的风风雨雨都是一时·不要陷入情绪当中·从真心出发才不会误用了智慧",
  element:"",
  description:"",
  img:require('../../../../img/tarot/sword3.jpg'),
}
cards[53] = {
  name:"宝剑4",
  card:"sword",
  kind:"small",
  key:"占卜意义--避难与休息·沉思·外来的威胁·未来的战争",
  position:"反思与退让·休息才能看清自己·正好反思达到更高境界",   negative:"不要被环境迷惑·放松·内在的平静才能作出正确的判断和解决问题",
  element:"",
  description:"",
  img:require('../../../../img/tarot/sword4.jpg'),
}
cards[54] = {
  name:"宝剑5",
  card:"sword",
  kind:"small",
  key:"占卜意义--得意·争执·只有一方获胜·一时争胜并无收获",
  position:"纷争与冲突·确定自己的立场和位置而不是一味的怪罪别人·正常只会暴露自己的缺点",   negative:"保持理性和平静才是解决冲突的有效方法",
  element:"",
  description:"",
  img:require('../../../../img/tarot/sword5.jpg'),
}
cards[55] = {
  name:"宝剑6",
  card:"sword",
  kind:"small",
  key:"占卜意义--治疗的行动·低调·内心的伤痛·行动上的帮助",
 position:"回归与平静·所有的情绪和伤痛都可以治疗或平复·认证自己的软弱才能采取实际行动解决",   negative:"创意会让你思考世界的另一面·进步需要时间·并不需要太多的批判",
  element:"",
  description:"",
  img:require('../../../../img/tarot/sword6.jpg'),
}
cards[56] = {
  name:"宝剑7",
  card:"sword",
  kind:"small",
  key:"占卜意义--趁虚而入·信心·欺骗或偷窃·不可能的任务",
 position:"变通与灵活·过度的自信会迷失真相·谦卑的反省才能靠智慧找到正确的方向",   negative:"没有基础·繁荣都是昙花一现·经过考验·努力务实才是长远的成功",
  element:"",
  description:"",
  img:require('../../../../img/tarot/sword7.jpg'),
}
cards[57] = {
  name:"宝剑8",
  card:"sword",
  kind:"small",
  key:"占卜意义--捆绑·看不到真相·被敌意包围·坏消息",
  position:"限制和束缚·暂时的困顿能让你找到更好的相处方式·敌意也许是在自己心中",   negative:"放弃旧模式·限制会减少·专心致志·可以找到一条自己的路",
  element:"",
  description:"",
  img:require('../../../../img/tarot/sword8.jpg'),
}
cards[58] = {
  name:"宝剑9",
  card:"sword",
  kind:"small",
  key:"占卜意义--焦虑及害怕·噩梦一场·逃避现实·无能为力",
  position:"噩梦和忧愁·不利的状态下保持冷静才能找到解决方案·逃避就无法知道真相",   negative:"烦恼可能是自己造成的·保持理性才能分别那些是事实和情绪",
  element:"",
  description:"",
  img:require('../../../../img/tarot/sword9.jpg'),
}
cards[59] = {
  name:"宝剑10",
  card:"sword",
  kind:"small",
  key:"占卜意义--孤独寂寞·极大的痛苦·死亡与结束·即将有重大转变",
 position:"牺牲和终结·爱可能需要奉献也可能需要牺牲·只有放下才能得到回报",   negative:"肉体的痛苦不只是身体的问题·常常还有心灵和灵魂的不平衡",
  element:"",
  description:"",
  img:require('../../../../img/tarot/sword10.jpg'),
}
cards[60] = {
  name:"宝剑侍从",
  card:"sword",
  kind:"palace",
  key:"占卜意义--轻率·装模作样·刺探别人的隐私·挑战的新信息",
 position:"积极和改变·不断反省才有新的认识·要不断尝试新经验·时时察觉自己",   negative:"看似意外的境遇·其实都是自己造成的·穿透经验才能创造新的机会和状态",
  element:"",
  description:"",
  img:require('../../../../img/tarot/sword11.jpg'),
}
cards[61] = {
  name:"宝剑骑士",
  card:"sword",
  kind:"palace",
  key:"占卜意义--豪爽·急躁易怒·强制手段·战利品",
 position:"勇敢和放纵·找到自己的方向就能发挥·欲速则不达·踏实的积累才有效果",   negative:"外在的愤怒是自己内心的投射·要想世界和谐就需要打开心胸去接受",
  element:"",
  description:"",
  img:require('../../../../img/tarot/sword12.jpg'),
}
cards[62] = {
  name:"宝剑王后",
  card:"sword",
  kind:"palace",
  key:"占卜意义--沉着冷静·一击必杀·异缘不佳·思考情感问题",
  position:"真相和本质·封闭内心就无法接受爱·要保持对自己的爱",   negative:"真正的爱是没有条件的·与其思考爱·不如去真正的爱",
  element:"",
  description:"",
  img:require('../../../../img/tarot/sword13.jpg'),
}
cards[63] = {
  name:"宝剑国王",
  card:"sword",
  kind:"palace",
  key:"占卜意义--清晰的判断力·公正客观·领导统御·向专家求助",
  position:"权威与意识·重视理性思辨·只有经过体会和思考·再次反省·才能变成知识",   negative:"没有正确的目标·再努力也是徒劳·只有正确的道路·才充满喜悦",
  element:"",
  description:"他拥有一把剑在他的右手,手中的意识,理性的思想。这象征着国王的果断，也象征着他在所有事情上的灵活性;虽然他的决策主要基于他自己的智慧，但他对自己的意见保持开放的态度。",
  img:require('../../../../img/tarot/sword14.jpg'),
}
cards[64] = {
  name:"金币1",
  card:"coin",
  kind:"small",
  key:"占卜意义--具体的成果·物质的享受·目前的方向·未来的方向",
 position:"基础和本质·物质是生存的必要条件·无论精神如何都不能忽视物质基础",   negative:"物质世界有其深刻的道理·心灵和物质是一体的两面·不要厚此薄彼",
  element:"",
  description:"",
  img:require('../../../../img/tarot/coin1.jpg'),
}
cards[65] = {
  name:"金币2",
  card:"coin",
  kind:"small",
  key:"占卜意义--进与出的流动·不同选择的衡量·波动的起伏·有赚有赔",
  position:"权衡与选择·改变充满了机会，但是也应看清自己的价值",   negative:"要看清真相·再幻境中体会真相",
  element:"",
  description:"",
  img:require('../../../../img/tarot/coin2.jpg'),
}
cards[66] = {
  name:"金币3",
  card:"coin",
  kind:"small",
  key:"占卜意义--专业上的共同协力·坚固各种需要·长久保值·稳固的基础",
 position:"进行和完善·超越自我才能收到尊敬·信念远比技术重要",   negative:"经验是成长的动力·但是要再经验中吸取教训·去寻找智慧超越经验",
  element:"",
  description:"",
  img:require('../../../../img/tarot/coin3.jpg'),
}
cards[67] = {
  name:"金币4",
  card:"coin",
  kind:"small",
  key:"占卜意义--不安全感·极度重视金钱·控制的欲望·累积及增值",
 position:"巩固与节制·珍惜才能体现意义·拥有就该好好把握",   negative:"抓住的东西不见得真正拥有·世界有自己的逻辑规则和秩序·放下不属于自己的",
  element:"",
  description:"",
  img:require('../../../../img/tarot/coin4.jpg'),
}
cards[68] = {
  name:"金币5",
  card:"coin",
  kind:"small",
  key:"占卜意义--表面的华丽·财务上的穷困·受伤·失去能力",
 position:"疏远和空虚·物质的空虚能反应相对的精神丰富·但是这不能改变现实的困顿",   negative:"不论问题多么黑暗·耐心找到秩序才是走出幽谷的最佳方案",
  element:"",
  description:"",
  img:require('../../../../img/tarot/coin5.jpg'),
}
cards[69] = {
  name:"金币6",
  card:"coin",
  kind:"small",
  key:"占卜意义--地位上的不平等·计算与衡量·慈悲心·以金钱控制对方",
 position:"公平与控制·越是成功越是懂得谦卑·即便帮助别人也会反思是否适合",   negative:"认清自己的状况·该付出要勇于付出·该接受要勇于接受",
  element:"",
  description:"",
  img:require('../../../../img/tarot/coin6.jpg'),
}
cards[70] = {
  name:"金币7",
  card:"coin",
  kind:"small",
  key:"占卜意义--努力的初步成果·收成及交易·思考下一步·新的创意",
 position:"推测和思考·创意并非天马星空·探索不同的道路·解答前人的问题",   negative:"放下担心才能承担责任·焦虑只会让你的判断失准",
  element:"",
  description:"",
  img:require('../../../../img/tarot/coin7.jpg'),
}
cards[71] = {
  name:"金币8",
  card:"coin",
  kind:"small",
  key:"占卜意义--专注·成熟的技术·工作才有成果·持续努力",
 position:"实现与信念·小心和努力才是成功的不二法门·一步登天不论是在灵修和现实都不可能",   negative:"太重视细节·会丧失重点·放眼世界·会看到价值和美好",
  element:"",
  description:"",
  img:require('../../../../img/tarot/coin8.jpg'),
}
cards[72] = {
  name:"金币9",
  card:"coin",
  kind:"small",
  key:"占卜意义--悠闲·富裕·谨慎·小心保有理想",
 position:"充裕和拥有·真正懂得享受的人不会盲从物质的刺激·只有平静才是真正的喜悦",   negative:"小心坚持自己的理想·不要被迷惑·保持思考·才能成功",
  element:"",
  description:"",
  img:require('../../../../img/tarot/coin9.jpg'),
}
cards[73] = {
  name:"金币10",
  card:"coin",
  kind:"small",
  key:"占卜意义--各种角色·集体的富裕·用钱得当·实践与完成",
 position:"收获与满足·该付出付出·该享受享受·实践和完成就应得到应有的成果",   negative:"扮演好自己的角色·努力实现理想·不要把波折归结于命运",
  element:"",
  description:"",
  img:require('../../../../img/tarot/coin10.jpg'),
}
cards[74] = {
  name:"金币侍从",
  card:"coin",
  kind:"palace",
  key:"占卜意义--务实的观察·学以致用·财务上的信息·少年老成",
 position:"贪婪和机会·谦卑的学习才是修行的基础",   negative:"空想将一无所有·务实自己生命的责任·完成自己的使命",
  element:"",
  description:"",
  img:require('../../../../img/tarot/coin11.jpg'),
}
cards[75] = {
  name:"金币骑士",
  card:"coin",
  kind:"palace",
  key:"占卜意义--努力工作赚钱·负责任·实用主义·不解风情或者没有情调",
 position:"勤奋与保守·天生我材必有用·全身心的投入才能寻找自己的意义",   negative:"再小的问题也会有影响·观察入微才能看清整体和真相",
  element:"",
  description:"",
  img:require('../../../../img/tarot/coin12.jpg'),
}
cards[76] = {
  name:"金币王后",
  card:"coin",
  kind:"palace",
  key:"占卜意义--精打细算·照顾·服务他人·长期利益",
 position:"支持和培养·发自内心的支持和照顾才能让自己成长·付出与奉献的美好需要在循环中放大",   negative:"要克服怀疑和疑虑·先要了解自己",
  element:"",
  description:"",
  img:require('../../../../img/tarot/coin13.jpg'),
}
cards[77] = {
  name:"金币国王",
  card:"coin",
  kind:"palace",
  key:"占卜意义--有效率的用钱·良好的财务基础·常识丰富·重视生活享受",
 position:"统治和潜能·不论精神修持如何都要脚踏实地·如何掌握和运用物质的规律是人生的重要课题",   negative:"真正了解自己的所需·不过度的贪婪和索取·才能实现自己的自由",
  element:"",
  description:"",
  img:require('../../../../img/tarot/coin14.jpg'),
}

class TarotModule
{

  holy()
  {
    var newcard  = JSON.parse(JSON.stringify(cards));
    var ret = new Array();
    for(var i=0 ;i<3;i++)
    {
      var x = Math.random(100)*100
      x = parseInt(x)%newcard.length
      ret[i]=JSON.parse(JSON.stringify(newcard[x]));
      newcard.splice(x, 1);
      
      
      var y = parseInt(Math.random(100)*100)%2 
      ret[i]["align"] = y==1?"正位":"逆位"
    }
    return ret;
  }

  starofdavid()
  {
    var newcard  = JSON.parse(JSON.stringify(cards));
    var ret = new Array();
    for(var i=0 ;i<6;i++)
    {
      var x = Math.random(100)*100
      x = parseInt(x)%newcard.length
      ret[i]=JSON.parse(JSON.stringify(newcard[x]));
      newcard.splice(x, 1);
      
      
      var y = parseInt(Math.random(100)*100)%2 
      ret[i]["align"] = y==1?"正位":"逆位"
    }
    return ret;
  }
  Celts()
  {
    var newcard  = JSON.parse(JSON.stringify(cards));
    var ret = new Array();
    for(var i=0 ;i<10;i++)
    {
      var x = Math.random(100)*100
      x = parseInt(x)%newcard.length
      ret[i]=JSON.parse(JSON.stringify(newcard[x]));
      newcard.splice(x, 1);
      
      
      var y = parseInt(Math.random(100)*100)%2 
      ret[i]["align"] = y==1?"正位":"逆位"
    }
    return ret;
  }
  Venus()
  {
    var newcard  = JSON.parse(JSON.stringify(cards));
    var ret = new Array();
    for(var i=0 ;i<8;i++)
    {
      var x = Math.random(100)*100
      x = parseInt(x)%newcard.length
      ret[i]=JSON.parse(JSON.stringify(newcard[x]));
      newcard.splice(x, 1);
      
      
      var y = parseInt(Math.random(100)*100)%2 
      ret[i]["align"] = y==1?"正位":"逆位"
    }
    return ret;
  }



}
var tarotModule = new TarotModule()
module.exports=tarotModule;  