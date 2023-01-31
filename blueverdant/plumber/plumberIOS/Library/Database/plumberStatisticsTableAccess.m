//
//  plumberStatisticsTableAccess.m
//  Compass
//
//  Created by 李耀忠 on 25/09/2017.
//

#import "plumberStatisticsTableAccess.h"

#define DB_TABLE_STATISTICS @"statistics"

#define TABLE_COLUMN_TIMESTAMP @"timestamp"
#define TABLE_COLUMN_UPLOADNOW @"upload"

@interface plumberStatisticsTableAccess ()

@property (nonatomic) plumberDatabase *database;

@end

@implementation plumberStatisticsTableAccess

- (instancetype)initWithDatabase:(plumberDatabase *)database {
    self = [super init];
    if (self) {
        _database = database;
    }

    return self;
}

- (BOOL)createTable {
    NSString *sql = [NSString stringWithFormat:@"create table if not exists %@ (%@ INTEGER PRIMARY KEY AUTOINCREMENT, %@ blob, %@ bigint, %@ int default 0)", DB_TABLE_STATISTICS, TABLE_COLUMN_ID, TABLE_COLUMN_CONTENT, TABLE_COLUMN_TIMESTAMP, TABLE_COLUMN_UPLOADNOW];
    BOOL result = [self.database executeUpdate:sql];
    return result;
}

- (BOOL)addStatisticsWithData:(NSData *)data uploadImmediately:(BOOL)uploadImmediately {
    NSMutableDictionary *dict = [NSMutableDictionary dictionary];
    dict[TABLE_COLUMN_CONTENT] = data;
    dict[TABLE_COLUMN_TIMESTAMP] = @([[NSDate date] timeIntervalSince1970]);
    dict[TABLE_COLUMN_UPLOADNOW] = @(uploadImmediately);

    BOOL result = [self.database insert:dict intoTable:DB_TABLE_STATISTICS];
    return result;
}

- (NSArray<NSDictionary *> *)allStatisticsData {
    NSArray<NSDictionary *> *result = [self.database findAll:@"*" fromTable:DB_TABLE_STATISTICS];

    return [result copy];
}

- (NSArray<NSDictionary *> *)statisticsDataWithCount:(NSInteger)maxCount {
    NSArray<NSDictionary *> *result = [self.database findAll:@"*" fromTable:DB_TABLE_STATISTICS withOffset:0 withCount:maxCount];

    return [result copy];
}

- (NSInteger)count {
    NSInteger count = [self.database countFromTable: DB_TABLE_STATISTICS];
    return count;
}

- (BOOL)deleteStatisticsNoNewerThanData:(NSDictionary *)data {
    NSInteger lastId = [[data objectForKey:TABLE_COLUMN_ID] integerValue];
    NSString *where = [NSString stringWithFormat:@"where id <= %@", @(lastId)];
    BOOL result = [self.database deleteFromTable:DB_TABLE_STATISTICS withCondition:where];

    return result;
}

- (BOOL)deleteDataBeforeDate:(NSDate *)date {
    NSTimeInterval timestamp = [date timeIntervalSince1970];
    NSString *condition = [NSString stringWithFormat:@" where %@ <= %@", TABLE_COLUMN_TIMESTAMP, @(timestamp)];

    BOOL result = NO;
    if ([self.database isTableExistent:DB_TABLE_STATISTICS]) {
        result = [self.database deleteFromTable:DB_TABLE_STATISTICS withCondition:condition];
    }

    return result;
}

- (BOOL)needUpdateImmediately {
    NSString *condition = [NSString stringWithFormat:@"where %@ = 1 ", TABLE_COLUMN_UPLOADNOW];

    NSDictionary *row = [self.database findOne:TABLE_COLUMN_ID fromTable:DB_TABLE_STATISTICS withCondition:condition];
    return row != nil;
}

@end
