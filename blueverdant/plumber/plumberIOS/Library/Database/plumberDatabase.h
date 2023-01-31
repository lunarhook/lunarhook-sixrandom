//
//  plumberDatabase.h
//  Compass
//
//  Created by 李耀忠 on 28/09/2017.

//

#import <Foundation/Foundation.h>

@interface plumberDatabase : NSObject

+ (instancetype)databaseWithPath:(NSString *)path;

/**
 *  判断表是否存在
 *
 *  @param tableName 表名
 *
 *  @return 表是否存在
 */
- (BOOL)isTableExistent:(NSString *)tableName;

/**
 *  查询数据库表的行数
 *
 *  @param table 数据库表名
 *
 *  @return 行数
 */
- (NSInteger)countFromTable:(NSString *)table;

/**
 *  按条件查询数据库表的行数
 *
 *  @param table     数据库表名
 *  @param condition 条件 @"where ..."
 *
 *  @return 行数
 */
- (NSInteger)countFromTable:(NSString *)table withCondition:(NSString *)condition;

/**
 *  在数据库表中插入数据
 *
 *  @param row   数据
 *  @param table 表名
 *
 *  @return 操作是否成功
 */
- (BOOL)insert:(NSDictionary *)row intoTable:(NSString *)table;

/**
 *  按条件从数据库表中删除所有数据
 *
 *  @param table     表名
 *  @param condition 条件 @"where ..."
 *
 *  @return 操作是否成功
 */
- (BOOL)deleteFromTable:(NSString *)table withCondition:(NSString *)condition;

/**
 *  查找一行数据库表中的字段
 *
 *  @param fields    字段名 @"*"为全部
 *  @param table     表名
 *  @param condition 条件 @"where ..."
 *
 *  @return 查找到的数据
 */
- (NSDictionary *)findOne:(NSString *)fields fromTable:(NSString *)table withCondition:(NSString *)condition;

/**
 *  查找一行数据库表中的字段
 *
 *  @param fields    字段名 @"*"为全部
 *  @param table     表名
 *  @param order     顺序 @"asc" / @"desc"
 *  @param condition 条件 @"where ..."
 *
 *  @return 查找到的数据
 */
- (NSDictionary *)findOne:(NSString *)fields fromTable:(NSString *)table withOrder:(NSString *)order withCondition:(NSString *)condition;

/**
 *  查找数据库表中的字段
 *
 *  @param fields    字段名 @"*"为全部
 *  @param table     表名
 *
 *  @return 查找到的数据
 */
- (NSArray *)findAll:(NSString *)fields fromTable:(NSString *)table;

/**
 *  查找数据库表中的字段
 *
 *  @param fields    字段名 @"*"为全部
 *  @param table     表名
 *  @param offset    起始索引
 *  @param count     个数
 *
 *  @return 查找到的数据
 */
- (NSArray *)findAll:(NSString *)fields fromTable:(NSString *)table withOffset:(NSInteger)offset withCount:(NSInteger)count;

/**
 *  查找数据库表中的字段
 *
 *  @param fields    字段名 @"*"为全部
 *  @param table     表名
 *  @param offset     起始索引
 *  @param count    个数
 *  @param order     顺序 @"asc" / @"desc"
 *  @param condition 条件 @"where ..."
 *
 *  @return 查找到的数据
 */
- (NSArray *)findAll:(NSString *)fields fromTable:(NSString *)table withOffset:(NSInteger)offset withCount:(NSInteger)count withOrder:(NSString *)order withCondition:(NSString *)condition;

/**
 *  通过sql语句执行
 *
 *  @param sql sql语句
 */
- (BOOL)executeUpdate:(NSString *)sql;


@end
