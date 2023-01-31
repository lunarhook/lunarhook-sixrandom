//
//  plumberStatisticsTableAccess.h
//  Compass
//
//  Created by 李耀忠 on 25/09/2017.
//

#import <Foundation/Foundation.h>
#import "plumberDatabase.h"

#define TABLE_COLUMN_ID @"id"
#define TABLE_COLUMN_CONTENT @"content"

@interface plumberStatisticsTableAccess : NSObject

@property (nonatomic, readonly) NSInteger count;

- (instancetype)initWithDatabase:(plumberDatabase *)database;
- (BOOL)createTable;
- (BOOL)addStatisticsWithData:(NSData *)data uploadImmediately:(BOOL)uploadImmediately;
- (NSArray<NSDictionary *> *)allStatisticsData;
- (NSArray<NSDictionary *> *)statisticsDataWithCount:(NSInteger)maxCount;
- (BOOL)deleteStatisticsNoNewerThanData:(NSDictionary *)data;
- (BOOL)deleteDataBeforeDate:(NSDate *)date;
- (BOOL)needUpdateImmediately;

@end
