
import React, {Component} from 'react';
import IconConfig from './IconConfig'
/*
系统的设计主要从探索这个步骤开始，我们碰到问题：首先是需要探索的，我们是通过测试（扩散社交行为）来完成的
当探索到问题的本质以后，需要去理解这个问题，以及背后的逻辑，那些是安全的，那些是不确定的，那些是有利的，那些是不利的，因此需要内容来进行识别，因此需要内容来解答自己的问题
当掌握内容以后，或者需要进一步了解内容的时候，则需要学习，甚至进一步学习，然后又回到探索的过程，检测自己的知识和判断
总结：
1、碰到已知问题（主动/被动过程）-》使用高效工具执行（工具的效率即收益）（我们需要提供工具）
2、碰到未知问题（主动/被动过程）-》咨询认识 -》变成已知问题 -》使用高效工具执行（学习过程需求最低成本）（我们需要提供提咨询，再工具，）
3、碰到未知问题（主动/被动过程）-》咨询认识 -》变成复杂问题 -》最低成本高效学习 -》变成已知问题 -》使用高效工具执行（学习过程需求最低成本）（我们提供教育培训，其次提供咨询，最后提供工具）
4、探索复杂问题（主动过程）-》 高成本学习过程（高投入低产出）（我们提供研究资源，基本无法商业化）
所以人生就是寻找问题并解决问题的过程，如果想扩大收益即解决成功，需要解决更大的问题，因此需要社交来扩大组织规模以提高安全和效率，所以需要一个足够良好的组织，因为探索问题以后需要分享所有成功到组织内，让组织效率更高，同时扩大组织规模
*/
RouteConfig={
    "MainPage":{"name":"月如钩","titlename":"知否","route":"MainPage","icon":IconConfig.IconLunarConfide},
    //社区是所有流量和需求的大入口，社区对沟通的需求是巨大的，必须免费获得流量
    "ExplorationTab":{"name":"知否","titlename":"知否","route":"ExplorationTab","icon":IconConfig.IconLunarConfide},
    "ExplorationTabFake":{"name":"知否","titlename":"知否","route":"ExplorationTab","icon":IconConfig.IconLunarConfide},
        "NightPage":{"name":"夜话","titlename":"知否","route":"NightPage","icon":IconConfig.IconLunarConfide},
            "NightDetailPage":{"name":"夜话","titlename":"知否","route":"NightDetailPage","icon":IconConfig.IconNightFm},
        "ExplorationPage":{"name":"树洞","titlename":"知否","route":"ExplorationPage","icon":IconConfig.IconNightFm},   
            "ExplorationDetailPage":{"name":"寄语","titlename":"寄语","route":"ExplorationDetailPage","icon":IconConfig.IconDetail},
            "ExplorationAnswerPage":{"name":"话题","titlename":"话题","route":"ExplorationAnswerPage","icon":IconConfig.IconLunarExplain},
            "ExplorationAskPage":{"name":"提个话题","titlename":"提个话题","route":"ExplorationAskPage","icon":IconConfig.IconDetail},
        //生活咨询服务包括所有咨询服务，可以给课程导流，其中简单的生活类咨询免费，心理咨询是需要收费的，因为必须立刻请人来协助解决，收费解决
        "ChatPage":{"name":"拾音","titlename":"知否","route":"ChatPaged","icon":IconConfig.Iconchat},   
        "ConfidePage":{"name":"私信列表","route":"ConfidePage","icon":IconConfig.IconPagelines}, 
        "MyExplorationPage":{"name":"我的话题","titlename":"我的话题","route":"MyExplorationPage","icon":IconConfig.IconUniversechanges},
            "LunaranswerPage":{"name":"话题","route":"LunaranswerPage","icon":IconConfig.IconLunask},
            "LunaranswerPageFake":{"name":"话题","route":"LunaranswerPageFake","icon":IconConfig.IconLunask},
            "LunarConsultantListPage":{"name":"咨询师","route":"LunarConsultantListPage","icon":IconConfig.IconLunarchanges},
            "ConsultantDetailPage":{"name":"咨询师介绍","route":"ConsultantDetailPage","icon":IconConfig.IconLunask},
            "ConsultantChatPage":{"name":"咨询沟通","route":"ConsultantChatPage","icon":IconConfig.IconLunask}, 
       
        
    //工具是优先解决需求的工具，尽量免费
    "kitPage":{"name":"探索","route":"kitPage","titlename":"心理探索","icon":IconConfig.IconKit},
        "kitExplorationPage":{"name":"呦呦鹿鸣","route":"kitExplorationPage","titlename":"呦呦鹿鸣","icon":IconConfig.IconKit},
        //周易工具
        "UniversechangesPage":{"name":"周易测评","route":"UniversechangesPage","icon":IconConfig.IconUniversechanges},
            "CalendarPage":{"name":"乾坤","route":"CalendarPage","titlename":"乾坤爻","icon":IconConfig.IconCalendar},
                "SixrandomNewPage":{"name":"六爻问卦","route":"SixrandomNewPage","icon":IconConfig.SixrandomSel},
                "SixrandomFullInfoPage":{"name":"卦象详解","route":"SixrandomFullInfoPage","icon":IconConfig.SixrandomSel},
                "SixrandomHistoryPage":{"name":"六爻历史","route":"SixrandomHistoryPage","icon":IconConfig.IconDetail},
                "EightrandomNewPage":{"name":"八字格局","route":"EightrandomNewPage","icon":IconConfig.EightrandomSel},
                "EightrandomMainPage":{"name":"八字格局","route":"EightrandomMainPage","icon":IconConfig.EightrandomSel},
                "NumberMainPage":{"name":"数字八星","route":"NumberMainPage","icon":IconConfig.numluckySel},
                "EightrandomHistoryPage":{"name":"八字历史","route":"EightrandomHistoryPage","icon":IconConfig.IconDetail},
                "TrackStarPage":{"name":"玄空飞星","titlename":"玄空飞星","route":"TrackStarPage","icon":IconConfig.IconFlyStar},
        //乾坤三式
        "ThreechangesPage":{"name":"乾坤三式","route":"ThreechangesPage","icon":IconConfig.IconThreechanges},
                "SixCourseNewPage":{"name":"六壬四课","route":"SixCourseNewPage","icon":IconConfig.IconSixCourse},
                "SixCourseMainPage":{"name":"六壬四课","route":"SixCourseMainPage","icon":IconConfig.IconSixCourse},
                "SixCourseHistoryPage":{"name":"六壬历史","route":"SixCourseHistoryPage","icon":IconConfig.IconDetail},
                "qimenNewPage":{"name":"奇门遁甲","route":"qimenNewPage","icon":IconConfig.Iconqimen},
                "qimenMainPage":{"name":"奇门遁甲","route":"qimenMainPage","icon":IconConfig.Iconqimen},
                "qimenHistoryPage":{"name":"奇门遁甲历史","route":"qimenHistoryPage","icon":IconConfig.IconDetail},
                "taiyiNewPage":{"name":"太乙神数","route":"taiyiNewPage","icon":IconConfig.Icontaiyi},
                "taiyiMainPage":{"name":"太乙神数","route":"taiyiMainPage","icon":IconConfig.Icontaiyi},
                "taiyiHistoryPage":{"name":"太乙神数历史","route":"taiyiHistoryPage","icon":IconConfig.IconDetail},
        "ziweiNewPage":{"name":"紫微斗数","route":"ziweiNewPage","icon":IconConfig.IconZiWei},
        "ziweiMainPage":{"name":"紫微斗数","route":"ziweiMainPage","icon":IconConfig.IconZiWei},
        "ziweiHistoryPage":{"name":"紫薇历史","route":"ziweiHistoryPage","icon":IconConfig.IconDetail},
        //星座星盘
        "ChangesuniversePage":{"name":"古典星盘","route":"ChangesuniversePage","icon":IconConfig.IconChangesuniverseSel},
            "StarInfoPage":{"name":"星座知识","route":"StarInfoPage","icon":IconConfig.IconStarInfo},
                "GamblePage":{"name":"星座骰子","route":"GamblePage","icon":IconConfig.IconGamble},       
                "AstroPage":{"name":"星盘人格","route":"AstroPage","icon":IconConfig.AstroPage},
        "TarotTab":{"name":"塔罗牌阵","route":"TarotTab","icon":IconConfig.TarotTab},
            "TarotPage":{"name":"圣三角占卜","route":"TarotPage","icon":IconConfig.TarotPage},
            "TarotVenusPage":{"name":"爱情维纳斯","route":"TarotVenusPage","icon":IconConfig.TarotVenus},
            "TarotStarofDavidPage":{"name":"决策六芒星","route":"TarotStarofDavidPage","icon":IconConfig.TarotStarofDavid},
            "TarotCeltsPage":{"name":"凯尔特十字","route":"TarotCeltsPage","icon":IconConfig.TarotCelts},
        //心理学辅助测试
        "NumberMotionNewPage":{"name":"Y&N\n数字心理学","titlename":"数字心理学","route":"NumberMotionNewPage","icon":IconConfig.IconYN},
        "PsychTestPage":{"name":"性格思维测评","route":"PsychTestPage","icon":IconConfig.IconQuiz},     
            "MBTIModule":{"name":"MBTI\n职业性格测评","route":"MBTIModule","titlename":"MBTI职业性格测评","icon":IconConfig.IconMBTI},
            "EnneagramModule":{"name":"Enneagram\n九型人格测评","route":"EnneagramModule","titlename":"九型人格测评","icon":IconConfig.IconEnneagram},
            "HollandModule":{"name":"SDS\n霍兰德职业兴趣","route":"HollandModule","titlename":"SDS霍兰德职业兴趣","icon":IconConfig.IconHolland},
            "BIGFIVEModule":{"name":"BIG5\n大五人格量化","route":"BIGFIVEModule","titlename":"BIG5大五人格量化","icon":IconConfig.IconBIGFIVE},
            "DISCModule":{"name":"Disc\n性格测试","route":"DISCModule","titlename":"Disc性格测试","icon":IconConfig.IconDISC},
            
            "AMSModule":{"name":"AMS\n成就动机量化表","route":"AMSModule","titlename":"AMS成就动机量化表","icon":IconConfig.IconAMS},
            "SCL90Module":{"name":"SCL90\n抑郁自评","route":"SCL90Module","titlename":"SCL90抑郁自评","icon":IconConfig.IconSCL90},
            "SDSModule":{"name":"SDS\n抑郁自评","route":"SDSModule","titlename":"SDS抑郁自评","icon":IconConfig.IconSDS},
            "SESModule":{"name":"SES\n自尊自评","route":"SESModule","titlename":"SES自尊自评","icon":IconConfig.IconSES},
            "SASModule":{"name":"SAS\n焦虑自评","route":"SASModule","titlename":"SAS焦虑自评","icon":IconConfig.IconSAS},
            "PLCCModule":{"name":"PLC-C\n创伤压力自评","route":"PLCCModule","titlename":"PLC-C创伤压力自评","icon":IconConfig.IconPLCC},
            "LASModule":{"name":"LAS\n爱情观自评","route":"LASModule","titlename":"LAS爱情观自评","icon":IconConfig.IconLAS},
            "OlsonModule":{"name":"Olson\n婚姻质量问卷","route":"OlsonModule","titlename":"Olson婚姻质量问卷","icon":IconConfig.IconOlson},
            "FESModule":{"name":"FES\n家庭环境问卷","route":"FESModule","titlename":"FES家庭环境问卷","icon":IconConfig.IconFES},
            "SADModule":{"name":"SAD\n社交回避自评","route":"SADModule","titlename":"SAD社交回避自评","icon":IconConfig.IconSAD},
            "ECRModule":{"name":"ECR\n亲密关系自评","route":"ECRModule","titlename":"ECR亲密关系自评","icon":IconConfig.IconECR},
            "PANASModule":{"name":"PANAS\n正负情绪量化表","route":"PANASModule","titlename":"PANAS正负情绪量化表","icon":IconConfig.IconPANAX},
            "MORALSModule":{"name":"MORALS\n道德小测试","route":"MORALSModule","titlename":"MORALS道德小测试","icon":IconConfig.IconMORALS},
            "ITSModule":{"name":"ITS\n人际信任量表","route":"ITSModule","titlename":"ITS人际信任量表","icon":IconConfig.IconITS},
            "IASModule":{"name":"IAS\n交往焦虑量表","route":"IASModule","titlename":"IAS交往焦虑量表","icon":IconConfig.IconIAS},
            "FADModule":{"name":"FAD\n家庭功能评定","route":"FADModule","titlename":"FAD家庭功能评定","icon":IconConfig.IconFAD},
            "EPQModule":{"name":"EPQ\n艾森克人格测试","route":"EPQModule","titlename":"EPQ艾森克人格测试","icon":IconConfig.IconEPQ},
            "PDPModule":{"name":"PDP\n性格测试","route":"PDPModule","titlename":"PDP性格测试","icon":IconConfig.IconPDP},
            "EMBUFemaleModule":{"name":"EMBU\n家庭教养母亲版","route":"EMBUFemaleModule","titlename":"EMBU家庭教养母亲版","icon":IconConfig.IconFemale},
            "EMBUMaleModule":{"name":"EMBU\n家庭教养父亲版","route":"EMBUMaleModule","titlename":"EMBU家庭教养父亲版","icon":IconConfig.IconMale},
            "CARSModule":{"name":"CARS\n儿童孤僻症","route":"CARSModule","titlename":"CARS儿童孤僻症","icon":IconConfig.IconCARS},
            "GATBModule":{"name":"GATB\n大学生职业倾向","route":"GATBModule","titlename":"GATB大学生职业倾向","icon":IconConfig.IconGATB},
            "PROFModule":{"name":"RPOF\n高考专业性向","route":"PROFModule","titlename":"RPOF高考专业性向","icon":IconConfig.IconPROF},
            "MHTModule":{"name":"MHT\n中学心理测评","route":"MHTModule","titlename":"MHT中学心理测评","icon":IconConfig.IconMHT},
            "MHRSPModule":{"name":"MHRSP\n小学生心理健康","route":"MHRSPModule","titlename":"MHRSP小学生心理健康","icon":IconConfig.IconMHRSP},
            "16PFModule":{"name":"16PF\n16人格因素问卷","route":"16PFModule","titlename":"16人格因素问卷","icon":IconConfig.IconLAS},
            
            
            
            //亲属查询工具
        "relationshipcalcpage":{"name":"亲戚关系查询","route":"relationshipcalcpage","icon":IconConfig.IconLunarCourse},
        "SloganShare":{"name":"SLOGAN\n国风开屏语","titlename":"国风开屏语","route":"SloganShare","icon":IconConfig.IconSloganShare},
        "NamePage":{"name":"智能生辰\n五行起名","titlename":"智能生辰五行起名","route":"NamePage","icon":IconConfig.IconNamePage},
        "NameModule":{"name":"姓名\n五行查询","titlename":"名字五行查询","route":"NameModule","icon":IconConfig.IconNameSearchPage},
        //心理咨询录音工具
        "ConsultantAudioRecord":{"name":"咨询录音","route":"ConsultantAudioRecord","icon":IconConfig.ConfigIcon},
        "permutationcombination":{"name":"排列组合计算器","route":"permutationcombination","icon":IconConfig.ConfigIcon},
        "LunarCoursePageTab":{"name":"无邪书院","route":"LunarCoursePageTab","titlename":"无邪书院","icon":IconConfig.IconLunarCourse},
       
    
        //课程是进一步提高成本，解决问题的方法，合理收费
        "LunarCoursePage":{"name":"无邪书院","route":"LunarCoursePage","titlename":"无邪书院","icon":IconConfig.IconMaster},
        "LunarBooks":{"name":"无邪书院","route":"LunarCoursePage","titlename":"思无邪","icon":IconConfig.IconBooks},
        
        "LunarCourseConfigPage":{"name":"书院配置","route":"LunarCourseConfigPage","icon":IconConfig.IconSubmit},
        "LunarMasterConfigPage":{"name":"课程训练配置","route":"LunarMasterConfigPage","icon":IconConfig.IconSubmit},
        "CourseSearchPage":{"name":"说文助手","route":"CourseSearchPage","titlename":"说文解字","icon":IconConfig.IconSearch},
        "LunarCourseAnswerPage":{"name":"答疑解惑","route":"LunarCourseAnswerPage","titlename":"答疑解惑","icon":IconConfig.IconAnswerIntro},
        "LunarMasterPage":{"name":"课程","route":"LunarMasterPage","titlename":"书院课程","icon":IconConfig.IconLunarCourse},

        "ReadPage":{"name":"阅读","route":"ReadPage","titlename":"阅读","icon":IconConfig.IconLunarCourse},     
        "service":{"name":"服务支持","route":"service","icon":IconConfig.Service},     
        "kitConfigPage":{"name":"测评配置","route":"kitConfigPage","icon":IconConfig.IconSubmit},

        
        "IntroPage":{"name":"导读","titlename":"导读","route":"","icon":IconConfig.IconShuoWenIntro},
        "IntroAncientPage":{"name":"小学介绍","titlename":"小学","route":"IntroAncientPage","icon":IconConfig.IconShuoWenIntro},
        "IntroThreePage":{"name":"三玄介绍","titlename":"三玄","route":"IntroThreePage","icon":IconConfig.IconThreeIntro},
        "IntroBooksPage":{"name":"思想介绍","titlename":"思想介绍","route":"IntroBooksPage","icon":IconConfig.IconLunarCourseIntro},
        
        
        "MengBookPage":{"name":"蒙学","route":"DetailBookPage","icon":IconConfig.IconLunarCourse},  
            "AncientBaiJiaXingPage":{"name":"百家姓","titlename":"百家姓","route":"DetailBookPage","icon":IconConfig.IconLunarCourse},
            "AncientQianZiWenPage":{"name":"千字文","titlename":"千字文","route":"DetailBookPage","icon":IconConfig.IconLunarCourseRedO},
            "AncientSanZiJingPage":{"name":"三字经","titlename":"三字经","route":"DetailBookPage","icon":IconConfig.IconLunarCourseRed},
            
        "AncientChineseLiteraturePage":{"name":"小学","route":"LanguagesCoursePage","icon":IconConfig.IconLunarCourse},
            "ShuoWenBookPage":{"name":"说文","titlename":"说文","route":"DetailBookPage","icon":IconConfig.IconShuoWen},
            "ErYaBookPage":{"name":"尔雅","titlename":"尔雅","route":"DetailBookPage","icon":IconConfig.IconErYa},
            "ShengYunBookPage":{"name":"声律启蒙","titlename":"声律启蒙","route":"DetailBookPage","icon":IconConfig.IconShengYun},
        "ThreeExtPage":{"name":"三玄","titlename":"三玄","route":"","icon":IconConfig.IconThreeIntro},
            "UniversBookPage":{"name":"易经","titlename":"易经","route":"DetailBookPage","icon":IconConfig.IconUniversBook},
            "OldBookPage":{"name":"老子","titlename":"道德经","route":"DetailBookPage","icon":IconConfig.IconOldBook},
            "ZhuangBookPage":{"name":"庄子","titlename":"庄子","route":"DetailBookPage","icon":IconConfig.IconZhuangBook},
        "FourExtPage":{"name":"四书五经","titlename":"四书五经","route":"","icon":IconConfig.IconThreeIntro},
            "LunyuBookPage":{"name":"论语","titlename":"论语","route":"DetailBookPage","icon":IconConfig.IconLunYuBook},
            "MengziBookPage":{"name":"孟子","titlename":"孟子","route":"DetailBookPage","icon":IconConfig.IconMengZiBook},
            "ZhongBookPage":{"name":"中庸","titlename":"中庸","route":"DetailBookPage","icon":IconConfig.IconZhongYongBook},
            "BigBookPage":{"name":"大学","titlename":"大学","route":"DetailBookPage","icon":IconConfig.IconBigBook},
            "ShangshuBookPage":{"name":"尚书","titlename":"尚书","route":"DetailBookPage","icon":IconConfig.IconShangShuBook},
            "LijiBookPage":{"name":"礼记","titlename":"礼记","route":"DetailBookPage","icon":IconConfig.IconLijiBook},
        "ChineseMedicationPage":{"name":"医药经典","titlename":"医药经典","route":"","icon":IconConfig.IconBookMedic}, 
            //皇帝内景，难经，论伤寒，本草纲目，考虑早期内容主要以思考为主，只入选论黄帝内经，难经
            "HuangDiNeiJingSuWenPage":{"name":"素问","titlename":"黄帝内经·素问","route":"DetailBookPage","icon":IconConfig.IconBookMedicRed},
            "HuangDiNeiJingLingShuPage":{"name":"灵枢","titlename":"黄帝内经·灵枢","route":"DetailBookPage","icon":IconConfig.IconBookMedicBlue},
            "nanjingPage":{"name":"难经","titlename":"难经","route":"DetailBookPage","icon":IconConfig.IconBookMedicGreen},
            //"BenCaoGangMuPage":{"name":"本草纲目","route":"DetailBookPage","icon":IconConfig.IconLunarCourse},
            //"LunShangHanPage":{"name":"论伤寒","route":"DetailBookPage","icon":IconConfig.IconLunarCourse},
        "BingFaPage":{"name":"谋略","titlename":"谋略","route":"DetailBookPage","icon":IconConfig.IconThreeIntro}, 
            "sanshiliujiPage":{"name":"三十六计","titlename":"三十六计","route":"DetailBookPage","icon":IconConfig.IconJiBook},
            /*
            兵家，法家，也应该入选以思考思维为主的内容，是否扩大，以后商量
            "guiguziPage":{"name":"鬼谷子","route":"","icon":IconConfig.IconLunarCourse},
            "hanfeiziPage":{"name":"韩非子","route":"","icon":IconConfig.IconLunarCourse},
            "BaizhanPage":{"name":"百战奇略","route":"","icon":IconConfig.IconLunarCourse},
            "liutaosanluePage":{"name":"六韬三略","route":"","icon":IconConfig.IconLunarCourse},
            "sunzibingfaPage":{"name":"孙子兵法","route":"","icon":IconConfig.IconLunarCourse},
            */
        "CePage":{"name":"策论","titlename":"策论","route":"","icon":IconConfig.IconThreeIntro}, 
            "zhanguoPage":{"name":"战国策","titlename":"战国策","route":"DetailBookPage","icon":IconConfig.IconLunarCourseIntroRed},
            "guanziPage":{"name":"管子","titlename":"管子","route":"DetailBookPage","icon":IconConfig.IconLunarCourseIntroGold},
            "gongsunlongziPage":{"name":"公孙龙子","titlename":"公孙龙子","route":"DetailBookPage","icon":IconConfig.IconLunarCourseIntroOrange},
            "sushuPage":{"name":"素书","titlename":"素书","route":"DetailBookPage","icon":IconConfig.IconLunarCourseIntroBlue},
            "fanjingPage":{"name":"反经","titlename":"反经","route":"DetailBookPage","icon":IconConfig.IconLunarCourseIntroClaygreen},
            
           
        "PoemPage":{"name":"唐诗宋词","titlename":"唐诗宋词","route":"","icon":IconConfig.IconThreeIntro},      
            "chuciPage":{"name":"楚辞","route":"","icon":IconConfig.IconLunarCourse},
            //"zhanguoPage":{"name":"唐诗三百首","route":"","icon":IconConfig.IconLunarCourse},
            //"zhanguoPage":{"name":"宋词三百首","route":"","icon":IconConfig.IconLunarCourse},
            //"zhanguoPage":{"name":"元曲三百首","route":"","icon":IconConfig.IconLunarCourse},
            //"zhanguoPage":{"name":"纳兰词","route":"","icon":IconConfig.IconLunarCourse},

        // "OtherPage":{"name":"其他","titlename":"其他","route":"","icon":IconConfig.IconThreeIntro}, 
        /*    幼学琼林、增广贤文内容很好，但是和思想思维并不符合，是延伸
            "zhanguoPage":{"name":"增广贤文","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"颜氏家训","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"幼学琼林","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"古文观止","route":"","icon":IconConfig.IconLunarCourse},
            "zhanguoPage":{"name":"山海经","route":"","icon":IconConfig.IconLunarCourse},
        */
       "fivelevel1Module":{"name":"五行掌握·感受自然","titlename":"五行掌握","route":"CourseBookPage","icon":""},      
       "fivelevel2Module":{"name":"五行掌握·感受自然","titlename":"五行掌握","route":"CourseBookPage","icon":""},   


    "MyPage":{"name":"我的","card":"管理","route":"MyPage","icon":IconConfig.IconPerson},
    "MyPageFake":{"name":"我的","card":"管理","route":"MyPage","icon":IconConfig.IconPerson},
    "MyFontConfigPage":{"name":"字体显示","card":"字体显示","route":"MyPage","icon":IconConfig.IconPerson},
    
    "MyRegister":{"name":"注册","card":"管理","route":"MyRegister","icon":IconConfig.IconPerson},
    "MyUpdateRegister":{"name":"更新密码","card":"管理","route":"MyUpdateRegister","icon":IconConfig.IconPerson},
    "PrivacyPage":{"name":"用户隐私","route":"PrivacyPage","icon":IconConfig.IconPerson},
    "AgreePage":{"name":"用户协议","route":"AgreePage","icon":IconConfig.IconPerson},
    
        "MyconfigPage":{"name":"我的信息","route":"","icon":IconConfig.MyConfigIcon},
        "GeneralPage":{"name":"通用配置","route":"","icon":IconConfig.ConfigIcon}, 
        "SearchPage":{"name":"搜索","route":"SearchPage","icon":IconConfig.IconSearch},
         
    "DetailInfo":{"name":"详细信息","route":"","icon":IconConfig.IconDetail},
    "ScreenImage":{"name":"截图分享","route":"","icon":IconConfig.IconScreen},
    "RefreshImage":{"name":"刷新","route":"","icon":IconConfig.IconCyclefresh},
    "Lunarsubmit":{"name":"咨询提交","route":"","icon":IconConfig.IconSubmit},
   
    "submit":{"name":"提交","route":"","icon":IconConfig.IconSubmit},
    "malecall":{"name":"联系方式","route":"","icon":IconConfig.Iconmale},
    "femalecall":{"name":"联系方式","route":"","icon":IconConfig.Iconfemale},
    "business":{"name":"商务合作","route":"","icon":IconConfig.Iconbusiness},
    "email":{"name":"电子邮件","route":"","icon":IconConfig.Iconemail},
    "qrcode":{"name":"扫码关注公众号","route":"","icon":IconConfig.Iconqrcode},
    "wechat":{"name":"微信搜索公众号","route":"","icon":IconConfig.Iconqwechat},
    
    "GamblePageButton":{"name":"骰子","route":"","icon":IconConfig.IconGambleButton},
    "BeginImage":{"name":"开牌","route":"","icon":IconConfig.TarotStart},

    "AudioRecord":{"name":"录音","route":"","icon":IconConfig.IconAudioRecord},
    "AudioPlay":{"name":"播放","route":"","icon":IconConfig.IconAudioPlay},
    "AudioStop":{"name":"停止","route":"","icon":IconConfig.IconAudioStop},
    "AudioPause":{"name":"暂停","route":"","icon":IconConfig.IconAudioPause},

    "IconNext":{"name":" ","route":"","icon":IconConfig.IconNext},
    "IconLast":{"name":" ","route":"","icon":IconConfig.IconLast},
    "IconMore":{"name":" ","route":"","icon":IconConfig.IconMore},

    "ReCover":{"name":"恢复","route":"","icon":IconConfig.ReCover},


}
module.exports=RouteConfig;  