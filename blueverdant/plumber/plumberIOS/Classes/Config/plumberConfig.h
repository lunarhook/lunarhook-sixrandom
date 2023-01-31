//
//  plumberConfig.h
//  Compass
//
//  Created by 李耀忠 on 26/09/2017.
//

#ifndef plumberConfig_h
#define plumberConfig_h


//埋点数据最多保存的时间，单位秒
#define DB_MAX_LIFE 1 * 24 * 60 * 60
//单位毫秒
#define SESSION_MAX_LIFE 7 * 24 * 60 * 60 * 1000

//如果网络请求成功，且时间小于该值则不单独上传，单位毫秒
#define REQUEST_TIME_INTERVAL 1000

//一次上传的条数
#define UPLOAD_COUNT 100
//上传失败重试的次数
#define UPLOAD_RETRY_COUNT 3
//连续上传失败后等待下次重试的时间间隔
#define UPLOAD_RETRY_INTERVAL 300
//上传时间间隔，即每3分钟上传一次
#define UPLOAD_INTERVAL 300

#endif /* plumberConfig_h */
