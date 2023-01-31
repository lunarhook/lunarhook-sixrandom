//
//  plumberInfoBase.m
//  plumberIOS
//
//  Created by Mac on 2018/5/11.
//
#import "plumberInfoBase.h"
#import <AVFoundation/AVFoundation.h>
//#import <AdSupport/AdSupport.h>
#import <AudioToolbox/AudioToolbox.h>
#import <CoreLocation/CoreLocation.h>
#import <CoreMotion/CoreMotion.h>
#import <CoreTelephony/CTCarrier.h>
#import <CoreTelephony/CTTelephonyNetworkInfo.h>
#import <Foundation/Foundation.h>
#import <MapKit/MapKit.h>
#import <MediaPlayer/MediaPlayer.h>
#import <SystemConfiguration/SystemConfiguration.h>
#import <UIKit/UIKit.h>
#include <arpa/inet.h>
#import <arpa/inet.h>
#include <dirent.h>
#include <dlfcn.h>
#include <ifaddrs.h>
#import <mach/mach.h>
#import <mach-o/arch.h>
#include <limits.h>
#include <mach-o/dyld.h>
#import <mach-o/ldsyms.h>
#include <mach-o/nlist.h>
#include <mach/machine.h>
#include <net/if.h>
#include <net/if_dl.h>
#include <netdb.h>
#include <netinet/in.h>
#import <netinet/in.h>
#include <stdio.h>
#include <string.h>
#include <sys/ioctl.h>
#import <sys/ioctl.h>
#include <sys/socket.h>
#include <sys/sysctl.h>
#include <sys/types.h>
#include <unistd.h>
#import "SAMKeychain.h"
#import "plumberInfoCenter.h"
#import "plumberReachability.h"
#include "resolv.h"
#import "sys/utsname.h"

#define MAX_IFINDEX 8
#define MAXINTERFACES 16 /* 最大接口数 */

int fd;                          /* 套接字 */
int if_len;                      /* 接口数量 */
struct ifreq buf[MAXINTERFACES]; /* ifreq结构数组 */
struct ifconf ifc;               /* ifconf结构 */
static NSMutableArray *_UUIDRecordArray;

//获取国家名
//通过typedef定义类型
static NSString *invalid = @"invalid";
static float la = 0.0f;
static float ln = 0.0f;
static NSString *city = nil;
static NSString *country = nil;

#define PRIVATE_PATH "/System/Library/PrivateFrameworks/CoreTelephony.framework/CoreTelephony"

@implementation plumberInfoBase

+ (NSString *)GetCityCode:(NSString *)city {
    NSDictionary *citycode = @{
    @"北京" : @"110100",
    @"天津" : @"120100",
    @"石家庄" : @"130101",
    @"唐山" : @"130201",
    @"秦皇岛" : @"130301",
    @"张家口" : @"130701",
    @"承德" : @"130801",
    @"廊坊" : @"131001",
    @"邯郸" : @"130401",
    @"邢台" : @"130501",
    @"保定" : @"130601",
    @"沧州" : @"130901",
    @"衡水" : @"131101",
    @"河北省直辖县级行政区划" : @"1390",
    @"太原" : @"140101",
    @"大同" : @"140201",
    @"阳泉" : @"140301",
    @"晋城" : @"140501",
    @"朔州" : @"140601",
    @"晋中" : @"140701",
    @"忻州" : @"140901",
    @"离石" : @"142331",
    @"榆次" : @"142401",
    @"临汾" : @"141001",
    @"运城" : @"140801",
    @"长治" : @"140401",
    @"吕梁" : @"141101",
    @"呼和浩特" : @"150101",
    @"包头" : @"150201",
    @"乌海" : @"150301",
    @"集宁" : @"152601",
    @"巴彦浩特" : @"150801",
    @"呼伦贝尔" : @"150801",
    @"临河" : @"152801",
    @"赤峰" : @"150401",
    @"通辽" : @"150501",
    @"鄂尔多斯" : @"150601",
    @"乌兰察布" : @"150901",
    @"安兴盟" : @"152201",
    @"锡林浩特" : @"152502",
    @"海拉尔" : @"152101",
    @"阿拉善盟" : @"152901",
    @"沈阳" : @"210101",
    @"大连" : @"210201",
    @"鞍山" : @"210301",
    @"抚顺" : @"210401",
    @"本溪" : @"210501",
    @"丹东" : @"210601",
    @"锦州" : @"210701",
    @"营口" : @"210801",
    @"阜新" : @"210901",
    @"盘锦" : @"211101",
    @"铁岭" : @"211201",
    @"朝阳" : @"211301",
    @"葫芦岛" : @"211401",
    @"丹东" : @"210601",
    @"长春" : @"220101",
    @"吉林" : @"220201",
    @"四平" : @"220301",
    @"辽源" : @"220401",
    @"松原" : @"220701",
    @"白山" : @"220601",
    @"白城" : @"220801",
    @"延边" : @"222401",
    @"通化" : @"220501",
    @"哈尔滨" : @"230101",
    @"齐齐哈尔" : @"230201",
    @"鸡西" : @"230301",
    @"鹤岗" : @"230401",
    @"双鸭山" : @"230501",
    @"伊春" : @"230701",
    @"佳木斯" : @"230801",
    @"七台河" : @"230901",
    @"牡丹江" : @"231001",
    @"绥化" : @"231201",
    @"齐齐哈尔" : @"230201",
    @"大庆" : @"230601",
    @"黑河" : @"231101",
    @"大兴安岭" : @"232700",
    @"上海" : @"310100",
    @"南京" : @"320101",
    @"无锡" : @"320201",
    @"徐州" : @"320301",
    @"常州" : @"320401",
    @"苏州" : @"320501",
    @"南通" : @"320600",
    @"连云港" : @"320701",
    @"淮安" : @"320801",
    @"淮阴" : @"320801",
    @"盐城" : @"320901",
    @"扬州" : @"321001",
    @"镇江" : @"321101",
    @"泰州" : @"321102",
    @"宿迁" : @"321103",
    @"杭州" : @"330101",
    @"宁波" : @"330201",
    @"温州" : @"330301",
    @"嘉兴" : @"330401",
    @"湖州" : @"330501",
    @"绍兴" : @"330601",
    @"金华" : @"330701",
    @"衢州" : @"330801",
    @"舟山" : @"330901",
    @"丽水" : @"331101",
    @"台州" : @"331002",
    @"合肥" : @"340101",
    @"芜湖" : @"340201",
    @"蚌埠" : @"340301",
    @"淮南" : @"340401",
    @"马鞍山" : @"340501",
    @"淮北" : @"340601",
    @"铜陵" : @"340701",
    @"安庆" : @"340801",
    @"黄山市" : @"341001",
    @"阜阳" : @"341201",
    @"宿州" : @"341301",
    @"滁州" : @"341101",
    @"六安" : @"341501",
    @"宣城" : @"342501",
    @"巢湖" : @"341401",
    @"亳州" : @"341601",
    @"宣城" : @"341801",
    @"池州" : @"341701",
    @"福州" : @"350101",
    @"厦门" : @"350201",
    @"莆田" : @"350301",
    @"三明" : @"350401",
    @"泉州" : @"350501",
    @"漳州" : @"350601",
    @"南平" : @"352101",
    @"宁德" : @"352201",
    @"龙岩" : @"352601",
    @"陇南" : @"352602",
    @"庆阳" : @"352603",
    @"南昌" : @"360101",
    @"景德镇" : @"360201",
    @"赣州" : @"362101",
    @"萍乡" : @"360301",
    @"九江" : @"360401",
    @"新余" : @"360501",
    @"鹰潭" : @"360601",
    @"宜春" : @"360901",
    @"抚州" : @"361001",
    @"上饶" : @"361101",
    @"吉安" : @"360801",
    @"济南" : @"370101",
    @"青岛" : @"370201",
    @"淄博" : @"370301",
    @"枣庄" : @"370401",
    @"东营" : @"370501",
    @"烟台" : @"370601",
    @"潍坊" : @"370701",
    @"济宁" : @"370801",
    @"泰安" : @"370901",
    @"威海" : @"371001",
    @"日照" : @"371100",
    @"滨州" : @"371601",
    @"德州" : @"371401",
    @"聊城" : @"371501",
    @"临沂" : @"371301",
    @"菏泽" : @"371701",
    @"莱芜" : @"371202",
    @"郑州" : @"410101",
    @"开封" : @"410201",
    @"洛阳" : @"410301",
    @"平顶山" : @"410401",
    @"安阳" : @"410501",
    @"鹤壁" : @"410601",
    @"新乡" : @"410701",
    @"焦作" : @"410801",
    @"濮阳" : @"410901",
    @"许昌" : @"411001",
    @"漯河" : @"411101",
    @"三门峡" : @"411201",
    @"商丘" : @"411401",
    @"周口" : @"411601",
    @"驻马店" : @"411701",
    @"南阳" : @"411201",
    @"信阳" : @"411501",
    @"河南省直辖县级行政区划" : @"411901",
    @"武汉" : @"420101",
    @"黄石" : @"420201",
    @"十堰" : @"420301",
    @"随州" : @"420400",
    @"宜昌" : @"420501",
    @"襄樊" : @"420601",
    @"鄂州" : @"420701",
    @"荆门" : @"420801",
    @"黄冈" : @"421103",
    @"孝感" : @"420901",
    @"咸宁" : @"421201",
    @"荆州" : @"421021",
    @"恩施" : @"422801",
    @"随州市" : @"421301",
    @"湖北省直辖县级行政区划" : @"429001",
    @"长沙" : @"430101",
    @"衡阳" : @"430401",
    @"邵阳" : @"430501",
    @"郴州" : @"431001",
    @"永州" : @"431101",
    @"韶山" : @"430801",
    @"张家界" : @"430802",
    @"怀化" : @"431201",
    @"吉首" : @"433101",
    @"株洲" : @"430201",
    @"湘潭" : @"430301",
    @"岳阳" : @"430601",
    @"常德" : @"430701",
    @"益阳" : @"430901",
    @"娄底" : @"431301",
    @"湘西土家族苗族自治州" : @"433101",
    @"广州" : @"440101",
    @"佛山" : @"440601",
    @"深圳" : @"440301",
    @"汕尾" : @"441501",
    @"惠州" : @"441301",
    @"河源" : @"441601",
    @"清远" : @"441801",
    @"东莞" : @"441901",
    @"珠海" : @"440401",
    @"江门" : @"440701",
    @"肇庆" : @"441201",
    @"中山" : @"442001",
    @"湛江" : @"440801",
    @"茂名" : @"440901",
    @"韶关" : @"440201",
    @"汕头" : @"440501",
    @"梅州" : @"441401",
    @"阳江" : @"441701",
    @"潮州" : @"445101",
    @"顺德" : @"441703",
    @"揭阳" : @"445201",
    @"云浮" : @"445301",
    @"南宁" : @"450101",
    @"梧州" : @"450401",
    @"玉林" : @"452501",
    @"桂林" : @"450301",
    @"百色" : @"451001",
    @"河池" : @"451201",
    @"钦州" : @"450702",
    @"柳州" : @"450201",
    @"北海" : @"450501",
    @"防城港" : @"450502",
    @"贵港" : @"450503",
    @"贺州" : @"451101",
    @"崇左市" : @"451401",
    @"海口" : @"460100",
    @"三亚" : @"460200",
    @"三沙" : @"460300",
    @"儋州市" : @"460400",
    @"海南省直辖县级行政区划" : @"469000",
    @"西沙群岛" : @"460300",
    @"重庆" : @"500100",
    @"成都" : @"510101",
    @"眉山" : @"511421",
    @"雅安" : @"511801",
    @"峨嵋山" : @"513229",
    @"自贡" : @"510301",
    @"重庆" : @"500100",
    @"万州" : @"500102",
    @"涪陵" : @"500103",
    @"南充" : @"511301",
    @"泸州" : @"510501",
    @"德阳" : @"510601",
    @"绵阳" : @"510701",
    @"遂宁" : @"510901",
    @"内江" : @"511001",
    @"乐山" : @"511101",
    @"宜宾" : @"511501",
    @"广元" : @"510801",
    @"达州" : @"511721",
    @"资阳" : @"512001",
    @"攀枝花" : @"513201",
    @"阿坝" : @"510402",
    @"甘孜" : @"513303",
    @"凉山" : @"513404",
    @"广安" : @"511605",
    @"巴中" : @"511906",
    @"黔江" : @"500239",
    @"贵阳" : @"520101",
    @"六盘水" : @"520200",
    @"铜仁" : @"520601",
    @"黔西南布依族苗族自治州" : @"522301",
    @"黔东南苗族侗族自治州" : @"522601",
    @"黔南布依族苗族自治州" : @"522701",
    @"安顺" : @"520401",
    @"凯里" : @"522601",
    @"都匀" : @"522701",
    @"兴义" : @"522301",
    @"毕节" : @"520521",
    @"遵义" : @"520301",
    @"昆明" : @"530101",
    @"德宏" : @"533101",
    @"曲靖" : @"530301",
    @"楚雄" : @"532301",
    @"玉溪" : @"530401",
    @"红河" : @"532501",
    @"文山" : @"532621",
    @"思茅" : @"532721",
    @"昭通" : @"530601",
    @"西双版纳" : @"532821",
    @"大理" : @"532901",
    @"保山" : @"530501",
    @"怒江" : @"533321",
    @"丽江" : @"530721",
    @"迪庆" : @"533421",
    @"临沧" : @"530921",
    @"普洱" : @"530821",
    @"拉萨" : @"540101",
    @"昌都" : @"540321",
    @"山南" : @"540521",
    @"日喀则" : @"540201",
    @"那曲" : @"542421",
    @"阿里" : @"542523",
    @"林芝" : @"540421",
    @"西安" : @"610101",
    @"铜川" : @"610201",
    @"宝鸡" : @"610301",
    @"咸阳" : @"610401",
    @"渭南" : @"610501",
    @"汉中" : @"610701",
    @"安康" : @"610901",
    @"商洛" : @"611001",
    @"延安" : @"610601",
    @"榆林" : @"610801",
    @"兰州" : @"620101",
    @"白银" : @"620401",
    @"金昌" : @"620301",
    @"天水" : @"620501",
    @"张掖" : @"620701",
    @"武威" : @"620601",
    @"定西" : @"621121",
    @"平凉" : @"620801",
    @"临夏" : @"622901",
    @"甘南" : @"623001",
    @"陇南" : @"621201",
    @"嘉峪关" : @"620201",
    @"酒泉" : @"620902",
    @"西宁" : @"630100",
    @"果洛" : @"632621",
    @"海西" : @"632821",
    @"格尔木" : @"632321",
    @"海东" : @"630221",
    @"海北" : @"632221",
    @"玉树" : @"632721",
    @"海南" : @"632502",
    @"黄南" : @"632302",
    @"银川" : @"640101",
    @"石嘴山" : @"640201",
    @"吴忠" : @"640301",
    @"固原" : @"640421",
    @"中卫" : @"640521",
    @"乌鲁木齐" : @"650101",
    @"克拉玛依" : @"650201",
    @"吐鲁番" : @"650401",
    @"哈密" : @"652201",
    @"昌吉" : @"652301",
    @"博乐" : @"652701",
    @"库尔勒" : @"652801",
    @"阿克苏" : @"652901",
    @"克州" : @"653001",
    @"喀什" : @"653101",
    @"伊犁" : @"654001",
    @"石河子" : @"655001",
    @"塔城" : @"654202",
    @"阿勒泰" : @"654303",
    @"台北" : @"710001",
    @"辽阳" : @"211001",
    @"和田" : @"653201",
    @"澳门" : @"820000",
    @"香港" : @"810000",
    @"香港特別行政區" : @"810000",
    };
    // 这里实际是想做个前缀搜索，以便处理类似“香港湾仔码头”这样的地名。
    for (NSObject *object in citycode) {
        NSString *responseStr = [NSString stringWithFormat:@"%@", object];
        if ([city containsString:responseStr]) {
            return citycode[responseStr];
        }
    }
    return @"other";
}

- (Boolean)geoReady {
    if (nil != city && nil != country) {
        return true;
    }
    return false;
}

+ (NSString *)ipAddressWithIfaName:(NSString *)name {
    if (name.length == 0) return nil;
    NSString *address = nil;
    struct ifaddrs *addrs = NULL;
    if (getifaddrs(&addrs) == 0) {
        struct ifaddrs *addr = addrs;
        while (addr) {
            if ([[NSString stringWithUTF8String:addr->ifa_name] isEqualToString:name]) {
                sa_family_t family = addr->ifa_addr->sa_family;
                switch (family) {
                    case AF_INET: {  // IPv4
                        char str[INET_ADDRSTRLEN] = {0};
                        inet_ntop(family, &(((struct sockaddr_in *)addr->ifa_addr)->sin_addr), str,
                                  sizeof(str));
                        if (strlen(str) > 0) {
                            address = [NSString stringWithUTF8String:str];
                        }
                    } break;

                    case AF_INET6: {  // IPv6
                        char str[INET6_ADDRSTRLEN] = {0};
                        inet_ntop(family, &(((struct sockaddr_in6 *)addr->ifa_addr)->sin6_addr),
                                  str, sizeof(str));
                        if (strlen(str) > 0) {
                            address = [NSString stringWithUTF8String:str];
                        }
                    }

                    default:
                        break;
                }
                if (address) break;
            }
            addr = addr->ifa_next;
        }
    }
    freeifaddrs(addrs);
    return address ? address : invalid;
}

- (NSString *)deviceVersion {
    struct utsname systemInfo;
    uname(&systemInfo);
    NSString *deviceString = [NSString stringWithCString:systemInfo.machine
                                                encoding:NSUTF8StringEncoding];

    if ([deviceString isEqualToString:@"iPhone3,1"]) return @"iPhone 4";
    if ([deviceString isEqualToString:@"iPhone3,2"]) return @"iPhone 4";
    if ([deviceString isEqualToString:@"iPhone3,3"]) return @"iPhone 4";
    if ([deviceString isEqualToString:@"iPhone4,1"]) return @"iPhone 4S";
    if ([deviceString isEqualToString:@"iPhone5,1"]) return @"iPhone 5";
    if ([deviceString isEqualToString:@"iPhone5,2"]) return @"iPhone 5 (GSM+CDMA)";
    if ([deviceString isEqualToString:@"iPhone5,3"]) return @"iPhone 5c (GSM)";
    if ([deviceString isEqualToString:@"iPhone5,4"]) return @"iPhone 5c (GSM+CDMA)";
    if ([deviceString isEqualToString:@"iPhone6,1"]) return @"iPhone 5s (GSM)";
    if ([deviceString isEqualToString:@"iPhone6,2"]) return @"iPhone 5s (GSM+CDMA)";
    if ([deviceString isEqualToString:@"iPhone7,1"]) return @"iPhone 6 Plus";
    if ([deviceString isEqualToString:@"iPhone7,2"]) return @"iPhone 6";
    if ([deviceString isEqualToString:@"iPhone8,1"]) return @"iPhone 6s";
    if ([deviceString isEqualToString:@"iPhone8,2"]) return @"iPhone 6s Plus";
    if ([deviceString isEqualToString:@"iPhone8,4"]) return @"iPhone SE";
    // 日行两款手机型号均为日本独占，可能使用索尼FeliCa支付方案而不是苹果支付
    if ([deviceString isEqualToString:@"iPhone9,1"]) return @"iPhone 7";
    if ([deviceString isEqualToString:@"iPhone9,2"]) return @"iPhone 7 Plus";
    if ([deviceString isEqualToString:@"iPhone9,3"]) return @"iPhone 7 (Global)";
    if ([deviceString isEqualToString:@"iPhone9,4"]) return @"iPhone 7 Plus (Global)";
    if ([deviceString isEqualToString:@"iPhone10,1"]) return @"iPhone 8 (A1863/A1906)";
    if ([deviceString isEqualToString:@"iPhone10,4"]) return @"iPhone 8 (Global/A1905)";
    if ([deviceString isEqualToString:@"iPhone10,2"]) return @"iPhone 8 Plus (A1864/A1898)";
    if ([deviceString isEqualToString:@"iPhone10,5"]) return @"iPhone 8 Plus (Global/A1897)";
    if ([deviceString isEqualToString:@"iPhone10,3"]) return @"iPhone X (A1865/A1902)";
    if ([deviceString isEqualToString:@"iPhone10,6"]) return @"iPhone X (Global/A1901)";
    if ([deviceString isEqualToString:@"iPhone11,2"]) return @"iPhone_XS";
    if ([deviceString isEqualToString:@"iPhone11,4"]) return @"iPhone_XS_Max";
    if ([deviceString isEqualToString:@"iPhone11,6"]) return @"iPhone_XS_Max";
    if ([deviceString isEqualToString:@"iPhone11,8"]) return @"iPhone_XR";
    if ([deviceString isEqualToString:@"iPhone12,1"]) return @"iPhone 11";
    if ([deviceString isEqualToString:@"iPhone12,3"]) return @"iPhone 11 Pro";
    if ([deviceString isEqualToString:@"iPhone12,5"]) return @"iPhone 11 Pro Max";
    if ([deviceString isEqualToString:@"iPhone12,8"]) return @"iPhone SE2";

    if ([deviceString isEqualToString:@"iPod1,1"]) return @"iPod Touch 1G";
    if ([deviceString isEqualToString:@"iPod2,1"]) return @"iPod Touch 2G";
    if ([deviceString isEqualToString:@"iPod3,1"]) return @"iPod Touch 3G";
    if ([deviceString isEqualToString:@"iPod4,1"]) return @"iPod Touch 4G";
    if ([deviceString isEqualToString:@"iPod5,1"]) return @"iPod Touch 5G)";
    if ([deviceString isEqualToString:@"iPod7,1"]) return @"iPod Touch 6G";
    if ([deviceString isEqualToString:@"iPod9,1"]) return @"iPod Touch 7G";

    if ([deviceString isEqualToString:@"iPad1,1"]) return @"iPad";
    if ([deviceString isEqualToString:@"iPad1,2"]) return @"iPad 3G";
    if ([deviceString isEqualToString:@"iPad2,1"]) return @"iPad 2 (WiFi)";
    if ([deviceString isEqualToString:@"iPad2,2"]) return @"iPad 2";
    if ([deviceString isEqualToString:@"iPad2,3"]) return @"iPad 2 (CDMA)";
    if ([deviceString isEqualToString:@"iPad2,4"]) return @"iPad 2";
    if ([deviceString isEqualToString:@"iPad2,5"]) return @"iPad Mini (WiFi)";
    if ([deviceString isEqualToString:@"iPad2,6"]) return @"iPad Mini";
    if ([deviceString isEqualToString:@"iPad2,7"]) return @"iPad Mini (GSM+CDMA)";
    if ([deviceString isEqualToString:@"iPad3,1"]) return @"iPad 3 (WiFi)";
    if ([deviceString isEqualToString:@"iPad3,2"]) return @"iPad 3 (GSM+CDMA)";
    if ([deviceString isEqualToString:@"iPad3,3"]) return @"iPad 3";
    if ([deviceString isEqualToString:@"iPad3,4"]) return @"iPad 4 (WiFi)";
    if ([deviceString isEqualToString:@"iPad3,5"]) return @"iPad 4";
    if ([deviceString isEqualToString:@"iPad3,6"]) return @"iPad 4 (GSM+CDMA)";
    if ([deviceString isEqualToString:@"iPad4,1"]) return @"iPad Air (WiFi)";
    if ([deviceString isEqualToString:@"iPad4,2"]) return @"iPad Air (Cellular)";
    if ([deviceString isEqualToString:@"iPad4,4"]) return @"iPad Mini 2 (WiFi)";
    if ([deviceString isEqualToString:@"iPad4,5"]) return @"iPad Mini 2 (Cellular)";
    if ([deviceString isEqualToString:@"iPad4,6"]) return @"iPad Mini 2";
    if ([deviceString isEqualToString:@"iPad4,7"]) return @"iPad Mini 3";
    if ([deviceString isEqualToString:@"iPad4,8"]) return @"iPad Mini 3";
    if ([deviceString isEqualToString:@"iPad4,9"]) return @"iPad Mini 3";
    if ([deviceString isEqualToString:@"iPad5,1"]) return @"iPad Mini 4 (WiFi)";
    if ([deviceString isEqualToString:@"iPad5,2"]) return @"iPad Mini 4 (LTE)";
    if ([deviceString isEqualToString:@"iPad11,1"]) return @"iPad Mini 5 (WiFi)";
    if ([deviceString isEqualToString:@"iPad11,2"]) return @"iPad Mini 4 (LTE)";
    if ([deviceString isEqualToString:@"iPad5,3"]) return @"iPad Air 2";
    if ([deviceString isEqualToString:@"iPad5,4"]) return @"iPad Air 2";
    if ([deviceString isEqualToString:@"iPad6,3"]) return @"iPad Pro 9.7";
    if ([deviceString isEqualToString:@"iPad6,4"]) return @"iPad Pro 9.7";
    if ([deviceString isEqualToString:@"iPad6,7"]) return @"iPad Pro 12.9";
    if ([deviceString isEqualToString:@"iPad6,8"]) return @"iPad Pro 12.9";
    if ([deviceString isEqualToString:@"iPad6,11"]) return @"iPad 5 (WiFi)";
    if ([deviceString isEqualToString:@"iPad6,12"]) return @"iPad 5 (Cellular)";
    if ([deviceString isEqualToString:@"iPad7,1"]) return @"iPad Pro 12.9 inch 2nd gen (WiFi)";
    if ([deviceString isEqualToString:@"iPad7,2"]) return @"iPad Pro 12.9 inch 2nd gen (Cellular)";
    if ([deviceString isEqualToString:@"iPad7,3"]) return @"iPad Pro 10.5 inch (WiFi)";
    if ([deviceString isEqualToString:@"iPad7,4"]) return @"iPad Pro 10.5 inch (Cellular)";
    if ([deviceString isEqualToString:@"iPad7,6"]) return @"iPad_6";
    if ([deviceString isEqualToString:@"iPad8,1"]) return @"iPad Pro 11 Wifi";
    if ([deviceString isEqualToString:@"iPad8,2"]) return @"iPad Pro 11 Wifi";
    if ([deviceString isEqualToString:@"iPad8,3"]) return @"iPad Pro 11 Wifi + MN";
    if ([deviceString isEqualToString:@"iPad8,4"]) return @"iPad Pro 11 Wifi + MN";
    if ([deviceString isEqualToString:@"iPad8,5"]) return @"iPad Pro(3) 12.9 Wifi";
    if ([deviceString isEqualToString:@"iPad8,6"]) return @"iPad Pro(3) 12.9 Wifi";
    if ([deviceString isEqualToString:@"iPad8,7"]) return @"iPad Pro(3) 12.9 Wifi + MN";
    if ([deviceString isEqualToString:@"iPad8,8"]) return @"iPad Pro(3) 12.9 Wifi + MN";
    if ([deviceString isEqualToString:@"iPad8,9"]) return @"iPad Pro(2) 11 Wifi";
    if ([deviceString isEqualToString:@"iPad8,10"]) return @"iPad Pro(2) 11 Wifi + MN";
    if ([deviceString isEqualToString:@"iPad8,11"]) return @"iPad Pro(4) 12.9 Wifi";
    if ([deviceString isEqualToString:@"iPad8,12"]) return @"iPad Pro(4) 12.9 Wifi + MN";
    if ([deviceString isEqualToString:@"iPad11,1"]) return @"iPad Mini 5 (WiFi)";
    if ([deviceString isEqualToString:@"iPad11,2"]) return @"iPad Mini 5 (LTE)";
    if ([deviceString isEqualToString:@"iPad11,3"]) return @"iPad Air 3 Wifi";
    if ([deviceString isEqualToString:@"iPad11,4"]) return @"iPad Air 3 Wifi + MN";

    if ([deviceString isEqualToString:@"AppleTV2,1"]) return @"Apple TV 2";
    if ([deviceString isEqualToString:@"AppleTV3,1"]) return @"Apple TV 3";
    if ([deviceString isEqualToString:@"AppleTV3,2"]) return @"Apple TV 3";
    if ([deviceString isEqualToString:@"AppleTV5,3"]) return @"Apple TV 4";
    if ([deviceString isEqualToString:@"AppleTV6,2"]) return @"Apple TV 4K";

    if ([deviceString isEqualToString:@"i386"]) return @"Simulator";
    if ([deviceString isEqualToString:@"x86_64"]) return @"Simulator";

    return deviceString;
}

- (NSNumber *)isDeviceJailbroken {
#if !TARGET_IPHONE_SIMULATOR
    char file[10] = {0};
    file[0] = '/';
    file[1] = 'b';
    file[2] = 'i';
    file[3] = 'n';
    file[4] = '/';
    file[5] = 'b';
    file[6] = 'a';
    file[7] = 's';
    file[8] = 'h';
    file[9] = '\0';
#ifdef DEBUG
    assert([@(file) isEqualToString:@"/bin/bash"]);
#endif

    BOOL exists = [[NSFileManager defaultManager] fileExistsAtPath:@(file)];
    if (exists) {
        return [[NSNumber alloc] initWithBool:exists];
    }

#endif
    return [[NSNumber alloc] initWithBool:false];
}

// 硬件识别
+ (NSString *)uid_sid {
    // return [plumberIOSuuid uniquemacuuid];
    NSString *UUID = [SAMKeychain passwordForService:@"plumberdevice" account:@"plumber"];
    if (nil == UUID) {
        UUID = [[NSUUID UUID] UUIDString];
        BOOL ret = [SAMKeychain setPassword:UUID forService:@"plumberdevice" account:@"plumber"];
        if (false == ret) {
            return nil;
        }
    }
    return [UUID uppercaseString];
}

- (BOOL)uid_retain:(NSMutableDictionary *)dict {
    NSString *appname = [self get_appmeta_appname];
    if (nil != appname) {
        NSData *retainTimp = [SAMKeychain passwordDataForService:@"retain" account:appname];
        if (nil == retainTimp) {
            //不存在老数据，构建当前数据信息
            NSMutableDictionary *retaindays = [[NSMutableDictionary alloc] init];
            NSMutableDictionary *curday = [[NSMutableDictionary alloc] init];
            NSDate *date = [[NSDate alloc] init];
            NSDateFormatter *formatter = [[NSDateFormatter alloc] init];
            [formatter setDateFormat:@"yyyy-MM-dd"];
            NSString *timeString = [formatter stringFromDate:date];

            curday[@"timestamp"] = [NSString
                stringWithFormat:@"%lld", [plumberInfoBase timestampInMiniseconds] / 1000];
            curday[@"appmeta_channel"] = [plumberInfoBase appmeta_channel];
            curday[@"appmeta_appver"] = [plumberInfoBase appmeta_appver];
            retaindays[timeString] = curday;
            //写入项目存储
            NSData *retainTimp = [NSJSONSerialization dataWithJSONObject:retaindays
                                                                 options:kNilOptions
                                                                   error:nil];
            BOOL ret = [SAMKeychain setPasswordData:retainTimp
                                         forService:@"retain"
                                            account:appname];
            if (false != ret) {
                //成功发送全新客户端留存
                dict[@"retain"] = retaindays;
                return true;
            }
        } else {
            //判定是否需要发送数据，先还原老的留存数据
            int64_t curtime = [plumberInfoBase timestampInMiniseconds];
            NSError *err;
            NSMutableDictionary *dic =
                [NSJSONSerialization JSONObjectWithData:retainTimp
                                                options:NSJSONReadingMutableContainers
                                                  error:&err];
            NSMutableDictionary *retaindict = [[NSMutableDictionary alloc] initWithDictionary:dic];

            NSDate *date = [[NSDate alloc] init];
            NSDateFormatter *formatter = [[NSDateFormatter alloc] init];
            [formatter setDateFormat:@"yyyy-MM-dd"];
            NSString *timeString = [formatter stringFromDate:date];

            NSMutableDictionary *curday = retaindict[timeString];
            if (nil == curday) {
                //删除老的留存数据
                NSArray *allkeys = [dic allKeys];
                for (int i = 0; i < allkeys.count; i++) {
                    NSString *key = [allkeys objectAtIndex:i];
                    NSMutableDictionary *curday = [dic objectForKey:key];
                    if (nil != curday) {
                        NSString *timpstamp = curday[@"timestamp"];
                        int64_t time = atoll([timpstamp UTF8String]);
                        if (time < curtime - 24 * 60 * 60 * 30) {
                            //删除该节点
                            [retaindict removeObjectForKey:key];
                        }
                    }
                };
                //写入今天的节点
                NSMutableDictionary *newday = [[NSMutableDictionary alloc] init];
                newday[@"timestamp"] = [NSString
                    stringWithFormat:@"%lld", [plumberInfoBase timestampInMiniseconds] / 1000];
                newday[@"appmeta_channel"] = [plumberInfoBase appmeta_channel];
                newday[@"appmeta_appver"] = [plumberInfoBase appmeta_appver];
                retaindict[timeString] = newday;
                //更新本地留存
                NSData *retainTimp = [NSJSONSerialization dataWithJSONObject:retaindict
                                                                     options:kNilOptions
                                                                       error:nil];
                BOOL ret = [SAMKeychain setPasswordData:retainTimp
                                             forService:@"retain"
                                                account:appname];
                if (false != ret) {
                    //成功发送客户端留存
                    dict[@"retain"] = retaindict;
                    return true;
                }
            }
        }
    }
    return false;
}

- (NSString *)get_uid_uid {
    return _set_uid_uid;
}

- (void)set_uid_uid:(NSString *)uid_uid {
    _set_uid_uid = uid_uid;
}

+ (NSString *)uid_uid {
    NSString *uid_uid = [[plumberInfoBase sharedInstance] get_uid_uid];

    return uid_uid;
}

- (void)set_uid_idfa:(NSString *)uid_idfa {
    _set_uid_idfa = uid_idfa;
}

+ (NSString *)uid_idfa {
    /*
    if ([[ASIdentifierManager sharedManager] isAdvertisingTrackingEnabled]) {
        return [[[ASIdentifierManager sharedManager] advertisingIdentifier] UUIDString];
    }
     */
    return invalid;
}

+ (NSString *)uid_imei {
    //  私有api会禁止上架
    return nil;
}

+ (NSString *)uid_idfv {
    return [[[UIDevice currentDevice] identifierForVendor] UUIDString];
}

+ (NSNumber *)device_FontScale {
    UIFont *font = [UIFont preferredFontForTextStyle:UIFontTextStyleBody];

    UIFontDescriptor *ctFont = font.fontDescriptor;

    NSNumber *fontString = [ctFont objectForKey:@"NSFontSizeAttribute"];

    return fontString;
}

+ (NSString *)uid_imsi {
    return nil;
    NSString *imsi = nil;
    @try {
        CTTelephonyNetworkInfo *info = [[CTTelephonyNetworkInfo alloc] init];

        CTCarrier *carrier = [info subscriberCellularProvider];

        NSString *mcc = [carrier mobileCountryCode];
        NSString *mnc = [carrier mobileNetworkCode];
        NSString *mname = @"";
        if (carrier.carrierName != nil) {
            mname = carrier.carrierName;
        }

        imsi = [NSString stringWithFormat:@"%@%@ %@", mcc, mnc, mname];
    } @catch (NSException *exception) {
    }
    return imsi;
}

+ (NSString *)getCarrier:(NSString *)imsi {
    if (imsi == nil || [imsi isEqualToString:@"SIM Not Inserted"]) {
        return @"Unknown";
    } else {
        if ([[imsi substringWithRange:NSMakeRange(0, 3)] isEqualToString:@"460"]) {
            NSInteger MNC = [[imsi substringWithRange:NSMakeRange(3, 2)] intValue];
            switch (MNC) {
                case 00:
                case 02:
                case 07:
                case 8:
                case 13:
                    return @"China Mobile";
                    break;
                case 04:
                    return @"China Satellite";
                    break;
                case 01:
                case 06:
                case 9:
                case 10:
                    return @"China Unicom";
                    break;
                case 03:
                case 05:
                case 11:
                case 12:
                    return @"China Telecom";
                    break;
                case 20:
                    return @"China Tietong";
                    break;
                default:
                    break;
            }
        }
    }
    return @"Unknown";
}

+ (NSString *)uid_mac {
    return nil;
    return [self getuniquemac];
}

+ (NSString *)uid_phone_number {
    NSString *num = [[NSUserDefaults standardUserDefaults] stringForKey:@"SBFormattedPhoneNumber"];
    return num;
}

+ (NSString *)uid_androidid {
    return nil;
}

- (BOOL)get_uid_login {
    return _set_uid_login;
}

- (NSString *)get_uid_idfa {
    return _set_uid_idfa;
}

- (void)set_uid_login:(BOOL)uid_login {
    _set_uid_login = [[NSNumber alloc] initWithBool:uid_login];
}

+ (NSNumber *)uid_login {
    BOOL r = [[plumberInfoBase sharedInstance] get_uid_login];
    return [[NSNumber alloc] initWithBool:r];  //默认未登录
}

//系统识别
+ (NSString *)device_phone_name {
    return [UIDevice currentDevice].name;
}

+ (NSString *)device_os_ver {
    static dispatch_once_t onceToken;
    static NSString *systemVersion;
    dispatch_once(&onceToken, ^{
        systemVersion = [UIDevice currentDevice].systemVersion;
    });
    return systemVersion;
}

+ (NSString *)device_os {
    NSString *systemName = [[UIDevice currentDevice] systemName];
    systemName = @"ios";
    return [systemName lowercaseString];
}

+ (NSString *)device_brand {
    return [[UIDevice currentDevice] model];
}

+ (NSString *)device_model {
    static dispatch_once_t onceToken;
    static NSString *phoneModel;
    dispatch_once(&onceToken, ^{
        phoneModel = [[plumberInfoBase sharedInstance] deviceVersion];
    });
    return phoneModel;
}

+ (NSString *)device_type {
    return @"app";
}

- (NSString *)get_device_sim_number {
    return _set_device_sim_number;
}

- (void)set_device_sim_number:(NSString *)device_sim_number {
    _set_device_sim_number = device_sim_number;
}

+ (NSString *)device_sim_number {
    return [[plumberInfoBase sharedInstance] get_device_sim_number];
}

//存储识别
+ (NSNumber *)device_sc {
    NSError *error = nil;
    NSDictionary *attrs =
        [[NSFileManager defaultManager] attributesOfFileSystemForPath:NSHomeDirectory()
                                                                error:&error];
    if (error) return [[NSNumber alloc] initWithInt:0];
    int64_t space = [[attrs objectForKey:NSFileSystemSize] longLongValue];
    if (space < 0) space = 0;
    return [[NSNumber alloc] initWithInt:(int)(space / 1000000000)];
}

+ (NSNumber *)device_rc {
    NSError *error = nil;
    NSDictionary *attrs =
        [[NSFileManager defaultManager] attributesOfFileSystemForPath:NSHomeDirectory()
                                                                error:&error];
    if (error) return [[NSNumber alloc] initWithInt:0];
    int64_t space = [[attrs objectForKey:NSFileSystemFreeSize] longLongValue];
    if (space < 0) space = 0;
    return [[NSNumber alloc] initWithInt:(int)(space / 1000000000)];
}

//处理器识别
+ (double)device_TotalMemory {
    return [NSProcessInfo processInfo].physicalMemory;
}

+ (NSString *)device_cpu {
    NSMutableString *cpu = [[NSMutableString alloc] init];
    size_t size;
    cpu_type_t type;
    cpu_subtype_t subtype;
    size = sizeof(type);
    sysctlbyname("hw.cputype", &type, &size, NULL, 0);

    size = sizeof(subtype);
    sysctlbyname("hw.cpusubtype", &subtype, &size, NULL, 0);

    // values for cputype and cpusubtype defined in mach/machine.h
    if (type == CPU_TYPE_X86) {
        [cpu appendString:@"x86 "];
        // check for subtype ...

    } else if (type == CPU_TYPE_ARM) {
        [cpu appendString:@"ARM"];
        [cpu appendFormat:@",Type:%d", subtype];
    } else {
        [cpu appendFormat:@"CPU:%d", type];
        [cpu appendFormat:@",Type:%d", subtype];
    }
    // return [[DeviceDataLibrery sharedLibrery] getCPUProcessor] ? : invalid;
    return cpu;
}

+ (NSString *)getCPUCount {
    return [NSString stringWithFormat:@"%lu", [NSProcessInfo processInfo].activeProcessorCount];
}

//电池识别
+ (NSNumber *)device_is_charge {
    // float batteryMultiplier = [[UIDevice currentDevice] batteryLevel];
    [UIDevice currentDevice].batteryMonitoringEnabled = YES;
    // int batteryState = [UIDevice currentDevice].batteryState;
    // 电池电量 0~1 -1表示未知
    // float batteryLevel = [UIDevice currentDevice].batteryLevel;

    NSArray *stateArray =
        [NSArray arrayWithObjects:@"invalid", @"notcharge", @"incharge", @"complete", nil];
    NSString *ret = [stateArray objectAtIndex:[[UIDevice currentDevice] batteryState]];
    if ([ret isEqual:@"incharge"]) {
        return [[NSNumber alloc] initWithBool:TRUE];
    }

    return [[NSNumber alloc] initWithBool:FALSE];
}

+ (NSString *)device_battery {
    return nil;
}

+ (NSNumber *)device_batterypercent {
    float batteryLevel = [[UIDevice currentDevice] batteryLevel];
    int ret = batteryLevel * 100;
    return [[NSNumber alloc] initWithInt:ret];
}

//输入识别
+ (NSNumber *)device_is_usbdebug {
    //有就越狱了
    return [[NSNumber alloc] initWithBool:FALSE];
}

+ (NSNumber *)device_volume {
    return @0;
    // 获取当前手机音量
    float volume = 0.0f;
    MPVolumeView *slide = [MPVolumeView new];
    UISlider *volumeViewSlider;
    for (UIView *view in [slide subviews]) {
        if ([[[view class] description] isEqualToString:@"MPVolumeSlider"]) {
            volumeViewSlider = (UISlider *)view;
        }
    }
    volume = volumeViewSlider.value;

    NSError *sessionError = nil;
    AVAudioSession *audioSession = [AVAudioSession sharedInstance];
    [audioSession setCategory:AVAudioSessionCategoryPlayback error:&sessionError];
    //获取手机音量
    volume = [[AVAudioSession sharedInstance] outputVolume] * 100;
    return [[NSNumber alloc] initWithInt:(int)volume];
}

+ (NSString *)device_resolution {
    CGRect rect = [UIScreen mainScreen].bounds;
    CGSize size = rect.size;
    CGFloat scale = [UIScreen mainScreen].scale;
    int width = size.width * scale;
    int height = size.height * scale;
    return [NSString stringWithFormat:@"%d*%d", height, width];
}

+ (NSNumber *)device_shake {
    return [[NSNumber alloc] initWithBool:TRUE];
}

+ (NSString *)device_typewriting {
    __block NSString *result = @"unknow";
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        @try {
            //result = [[self textInputMode] primaryLanguage]
            result = [[UIApplication sharedApplication] textInputMode].primaryLanguage;
        } @catch (NSException *exception) {
        } @finally {
        }
    });
    return result;
}

//网络识别
+ (NSArray *)device_SupportedAbis {
    /* https://stackoverflow.com/questions/19859388/how-can-i-get-the-ios-device-cpu-architecture-in-runtime
     */
    const NXArchInfo *info = NXGetLocalArchInfo();
    NSString *typeOfCpu = [NSString stringWithUTF8String:info->description];
    return @[ typeOfCpu ];
}

+ (NSNumber *)device_timezone {
    [NSTimeZone resetSystemTimeZone];  // 重置手机系统的时区
    NSInteger offset = [NSTimeZone localTimeZone].secondsFromGMT;
    offset = offset / 3600;
    return [[NSNumber alloc] initWithInt:(int)offset];
}

+ (NSString *)network_signal {
    CTTelephonyNetworkInfo *info = [[CTTelephonyNetworkInfo alloc] init];
    CTCarrier *carrier = [info subscriberCellularProvider];
    //当前手机所属运营商名称
    NSString *mobileCarrier = invalid;

    NSString *mcc = [carrier mobileCountryCode];
    NSString *mnc = [carrier mobileNetworkCode];

    mobileCarrier = [NSString stringWithFormat:@"%@%@", mcc, mnc];

    //先判断有没有SIM卡，如果没有则不获取本机运营商
    mobileCarrier = [plumberInfoBase getCarrier:mobileCarrier];

    plumberReachability *reachability =
        [plumberReachability reachabilityWithHostName:@"www.xdf.cn"];
    plumberNetworkStatus internetStatus = [reachability currentReachabilityStatus];

    NSString *net = @"unknow";
    switch (internetStatus) {
        case plumberReachableViaWiFi:
            net = @"wifi";
            break;

        case plumberReachableViaWWAN: {
            CTTelephonyNetworkInfo *info = [[CTTelephonyNetworkInfo alloc] init];
            /* 如果有性能问题可以采用异步
            dispatch_once(&onceToken, ^{
             info = [[CTTelephonyNetworkInfo alloc] init];
                        });
             */
            NSString *currentStatus = info.currentRadioAccessTechnology;
#ifdef __IPHONE_12_0
            if (@available(iOS 12.1, *)) {
                currentStatus = info.serviceCurrentRadioAccessTechnology.allValues.lastObject;
            }
#endif
            if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyGPRS"]) {
                net = @"2g";  //@"GPRS";
            } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyEdge"]) {
                net = @"2g";  //@"2.75G EDGE";
            } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyWCDMA"]) {
                net = @"3g";  //@"3G";
            } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyHSDPA"]) {
                net = @"3g";  //@"3.5G HSDPA";
            } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyHSUPA"]) {
                net = @"3g";  //@"3.5G HSUPA";
            } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyCDMA1x"]) {
                net = @"2g";  //@"2G";
            } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyCDMAEVDORev0"]) {
                net = @"3g";  //@"3G";
            } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyCDMAEVDORevA"]) {
                net = @"3g";  //@"3G";
            } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyCDMAEVDORevB"]) {
                net = @"3g";  //@"3G";
            } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyeHRPD"]) {
                net = @"3g";  //@"HRPD";
            } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyLTE"]) {
                net = @"4g";  //@"4G";
            } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyNRNSA"]) {
                net = @"5g";  //@"HRPD";
            } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyNR"]) {
                net = @"5g";  //@"4G";
            }
        } break;

        case plumberNotReachable:
            net = @"other";

        default:
            break;
    }

    return net;
    return mobileCarrier;
}

+ (NSString *)network_mobile{
    CTTelephonyNetworkInfo *info = [[CTTelephonyNetworkInfo alloc] init];
    NSString *net = @"unknow";
            /* 如果有性能问题可以采用异步
            dispatch_once(&onceToken, ^{
             info = [[CTTelephonyNetworkInfo alloc] init];
                        });
             */
            NSString *currentStatus = info.currentRadioAccessTechnology;
#ifdef __IPHONE_12_0
            if (@available(iOS 12.1, *)) {
                currentStatus = info.serviceCurrentRadioAccessTechnology.allValues.lastObject;
            }
#endif
            if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyGPRS"]) {
                net = @"2g";  //@"GPRS";
            } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyEdge"]) {
                net = @"2g";  //@"2.75G EDGE";
            } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyWCDMA"]) {
                net = @"3g";  //@"3G";
            } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyHSDPA"]) {
                net = @"3g";  //@"3.5G HSDPA";
            } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyHSUPA"]) {
                net = @"3g";  //@"3.5G HSUPA";
            } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyCDMA1x"]) {
                net = @"2g";  //@"2G";
            } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyCDMAEVDORev0"]) {
                net = @"3g";  //@"3G";
            } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyCDMAEVDORevA"]) {
                net = @"3g";  //@"3G";
            } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyCDMAEVDORevB"]) {
                net = @"3g";  //@"3G";
            } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyeHRPD"]) {
                net = @"3g";  //@"HRPD";
            } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyLTE"]) {
                net = @"4g";  //@"4G";
            } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyNRNSA"]) {
                net = @"5g";  //@"HRPD";
            } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyNR"]) {
                net = @"5g";  //@"4G";
            }
    return net;
}

+ (NSString *)network_mnc {
    CTTelephonyNetworkInfo *info = [[CTTelephonyNetworkInfo alloc] init];
    CTCarrier *carrier = [info subscriberCellularProvider];
    NSString *mobileCarrier = invalid;

    NSString *mcc = [carrier mobileCountryCode];
    NSString *mnc = [carrier mobileNetworkCode];

    mobileCarrier = [NSString stringWithFormat:@"%@%@", mcc, mnc];
    NSString *net = @"unknow";
    if (nil != carrier) {
        NSString *currentStatus = info.currentRadioAccessTechnology;
#ifdef __IPHONE_12_0
        if (@available(iOS 12.1, *)) {
            currentStatus = info.serviceCurrentRadioAccessTechnology.allValues.lastObject;
        }
#endif
        if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyGPRS"]) {
            net = @"2g";  //@"GPRS";
        } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyEdge"]) {
            net = @"2g";  //@"2.75G EDGE";
        } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyWCDMA"]) {
            net = @"3g";  //@"3G";
        } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyHSDPA"]) {
            net = @"3g";  //@"3.5G HSDPA";
        } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyHSUPA"]) {
            net = @"3g";  //@"3.5G HSUPA";
        } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyCDMA1x"]) {
            net = @"2g";  //@"2G";
        } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyCDMAEVDORev0"]) {
            net = @"3g";  //@"3G";
        } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyCDMAEVDORevA"]) {
            net = @"3g";  //@"3G";
        } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyCDMAEVDORevB"]) {
            net = @"3g";  //@"3G";
        } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyeHRPD"]) {
            net = @"3g";  //@"HRPD";
        } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyLTE"]) {
            net = @"4g";  //@"4G";
        } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyNRNSA"]) {
            net = @"5g";  //@"HRPD";
        } else if ([currentStatus isEqualToString:@"CTRadioAccessTechnologyNR"]) {
            net = @"5g";  //@"4G";
        }
        mobileCarrier = [NSString stringWithFormat:@"%@%@", mcc, mnc];
        return [plumberInfoBase getCarrier:mobileCarrier];
        //return [carrier mobileNetworkCode];
    }
    return invalid;
}

+ (NSString *)network_mcc {
    CTTelephonyNetworkInfo *info = [[CTTelephonyNetworkInfo alloc] init];
    CTCarrier *carrier = [info subscriberCellularProvider];
    if (nil != carrier) {
        return [carrier mobileCountryCode];
    }
    return invalid;
}

+ (NSString *)network_cellid {
    NSString *cellid = invalid;
    NSString *rawNumber =
        [[NSUserDefaults standardUserDefaults] stringForKey:@"phonenumber_preference"];
    if (rawNumber && ![rawNumber isEqualToString:@""]) {
        NSString *telNumber = @"";
        for (int i = 0; i < [rawNumber length]; i++) {
            NSString *chr = [rawNumber substringWithRange:NSMakeRange(i, 1)];
            if ([chr rangeOfString:@"*3001#12345#*"].location == NSNotFound) {
                telNumber = [telNumber stringByAppendingFormat:@"%@", chr];
            }
        }
        cellid = [NSString stringWithFormat:@"tel:%@", telNumber];
    }
    return cellid;
}

+ (NSString *)network_ip {
    NSString *ret = [self ipAddressWithIfaName:@"pdp_ip0"];  // cellip
    if ([ret isEqualToString:invalid]) {
        NSString *retWifiIp = [self ipAddressWithIfaName:@"en0"];
        if (false == [retWifiIp isEqualToString:invalid]) {
            return retWifiIp;
        }
    } else {
        return ret;
    }
    return [self getDeviceIPAddresses];
}

+ (NSString *)network_dnscache_ip {
    return nil;
    //这里的代码存在一个lib库的问题，动态的resolv库存在一个7、8、9版本不能兼容的问题
    /*

    res_state res = malloc(sizeof(struct __res_state));

    int result = res_ninit(res);

    NSMutableArray *dnsArray = @[].mutableCopy;

    if ( result == 0 )
    {
        for ( int i = 0; i < res->nscount; i++ )
        {
            NSString *s = [NSString stringWithUTF8String : inet_ntoa(res->nsaddr_list[i].sin_addr)];

            [dnsArray addObject:s];
        }
    }
    else{
        NSLog(@"%@",@" res_init result != 0");
    }

    res_nclose(res);

    return dnsArray.firstObject;
     */
}

//地理识别
+ (NSString *)geoinfo {
    // 这个方法用到子类plumberInfoCenter的方法，放在子类里会更合适。
    float lat = [[plumberInfoCenter sharedInstance] get_geoinfo_latitude];
    float lng = [[plumberInfoCenter sharedInstance] get_geoinfo_longitude];
    NSLog(@"geoinfo latitude longitude (%f, %f)", lat, lng);
    if (la == lat && ln == lng) return nil;
    la = lat;
    ln = lng;
    // 先更新经纬度字段，获取到城市信息后再更新一次。
    [[plumberInfoCenter sharedInstance] BuildInfo];
    // 这里有一个优化，经纬度信息会更新，但对应的国家、城市获取一次后就不会更新了，应该是考虑到用户移动范围有限的原因。
    if (!(country == nil && city == nil)) return nil;
    return nil;

    CLLocation *location = [[CLLocation alloc] initWithLatitude:la longitude:ln];
    CLGeocoder *geocoder = [[CLGeocoder alloc] init];
    [geocoder
        reverseGeocodeLocation:location
             completionHandler:^(NSArray *placemarks, NSError *error) {
                 if (!error && placemarks && placemarks.count > 0) {
                     for (CLPlacemark *placemark in placemarks) {
                         NSLog(@"name=%@ locality=%@ country=%@ postalCode=%@", placemark.name,
                               placemark.locality, placemark.country, placemark.postalCode);
                         city = placemark.locality;
                         country = placemark.ISOcountryCode;  // placemark.country;
                         if (!city) {
                             //四大直辖市的城市信息无法通过locality获得，只能通过获取省份的方法来获得（如果city为空，则可知为直辖市）
                             city = placemark.administrativeArea;
                         }
                         NSString *citycode = [plumberInfoBase GetCityCode:city];
                         city = citycode;
                         //这里由于异步的问题，重新建立关键字对照表，然后重新发送启动信息，以保证laln经度纬度发送，但是地理信息并不一定能取得，geoReady已经可以获取
                     }
                     [[plumberInfoCenter sharedInstance] set_geoinfo_city:city];
                     [[plumberInfoCenter sharedInstance] set_geoinfo_country:country];
                     [[plumberInfoCenter sharedInstance] BuildInfo];
                 }
             }];
    return nil;
}

+ (void)setgeoinfo_country:(NSString *)s_country {
    country = s_country;
}

+ (void)setgeoinfo_city:(NSString *)s_city {
    city = s_city;
}

- (float)get_geoinfo_latitude {
    return _set_geoinfo_latitude;
}

- (void)set_geoinfo_latitude:(float)geoinfo_latitude {
    _set_geoinfo_latitude = geoinfo_latitude;
}

+ (void)setgeoinfo_latitude:(float)s_latitude {
    la = s_latitude;
    float newla = [[plumberInfoBase sharedInstance] get_geoinfo_latitude];
    if (0.0f != newla) {
        la = newla;
    }
}

- (float)get_geoinfo_longitude {
    return _set_geoinfo_longitude;
}

- (void)set_geoinfo_longitude:(float)geoinfo_longitude {
    _set_geoinfo_longitude = geoinfo_longitude;
}

+ (void)setgeoinfo_longitude:(float)s_longitude {
    ln = s_longitude;
    float newln = [[plumberInfoBase sharedInstance] get_geoinfo_longitude];
    if (0.0f != newln) {
        ln = newln;
    }
}

- (NSString *)get_geoinfo_country {
    return _set_geoinfo_country;
}

- (void)set_geoinfo_country:(NSString *)geoinfo_country {
    _set_geoinfo_country = geoinfo_country;
}

+ (NSString *)geoinfo_country {
    NSString *setCountry = [[plumberInfoBase sharedInstance] get_geoinfo_country];
    if (nil != setCountry) {
        return setCountry;
    }
    return country;
}

- (NSString *)get_geoinfo_city {
    return _set_geoinfo_city;
}

- (void)set_geoinfo_city:(NSString *)geoinfo_city {
    _set_geoinfo_city = geoinfo_city;
}

+ (NSString *)geoinfo_city {
    NSString *setcity = [[plumberInfoBase sharedInstance] get_geoinfo_city];
    if (nil != setcity) {
        return setcity;
    }
    return city;
}

+ (NSNumber *)geoinfo_longitude {
    return [[NSNumber alloc] initWithFloat:ln];
}

+ (NSNumber *)geoinfo_latitude {
    return [[NSNumber alloc] initWithFloat:la];
}

// wifi网络识别
+ (NSString *)wifi_curname {
    return nil;
}

+ (NSString *)wifi_curmac {
    return nil;
}

+ (NSString *)wifi_wifilist {
    return nil;
}

//用户偏好
+ (NSString *)getIcon:(id)value withPath:(NSString *)imagePath {
    if ([value isKindOfClass:[NSString class]]) {
        NSRange range = [value rangeOfString:@"png"];
        NSRange iconRange = [value rangeOfString:@"icon"];
        NSRange IconRange = [value rangeOfString:@"Icon"];
        if (range.length > 0) {
            NSString *path = [imagePath stringByAppendingPathComponent:value];
            UIImage *image = [UIImage imageWithContentsOfFile:path];
            if (image != nil && image.size.width > 50 && image.size.height > 50) {
                return value;
            }
        } else if (iconRange.length > 0) {
            NSString *imgUrl = [NSString stringWithFormat:@"%@.png", value];
            NSString *path = [imagePath stringByAppendingPathComponent:imgUrl];
            UIImage *image = [UIImage imageWithContentsOfFile:path];
            if (image != nil && image.size.width > 50 && image.size.height > 50) {
                return imgUrl;
            }
        } else if (IconRange.length > 0) {
            NSString *imgUrl = [NSString stringWithFormat:@"%@.png", value];
            NSString *path = [imagePath stringByAppendingPathComponent:imgUrl];
            UIImage *image = [UIImage imageWithContentsOfFile:path];
            if (image != nil && image.size.width > 50 && image.size.height > 50) {
                return imgUrl;
            }
        }
    } else if ([value isKindOfClass:[NSDictionary class]]) {
        NSDictionary *dict = (NSDictionary *)value;
        for (id subValue in [dict allValues]) {
            NSString *str = [self getIcon:subValue withPath:imagePath];
            if (![str isEqualToString:@""]) {
                return str;
            }
        }
    } else if ([value isKindOfClass:[NSArray class]]) {
        for (id subValue in value) {
            NSString *str = [self getIcon:subValue withPath:imagePath];
            if (![str isEqualToString:@""]) {
                return str;
            }
        }
    }
    return @"";
}

+ (NSString *)device_applist {
    return nil;
    // 由于沙箱的问题，已经无法取得了
    /*
    NSString *pathOfApplications;
    if ([[[UIDevice currentDevice] systemVersion] floatValue] >= 8.0)
        pathOfApplications = @"/var/mobile/Containers/Data/Application";
    else
        pathOfApplications = @"/var/mobile/Applications";

    NSLog(@"scan begin");
    // all applications

    NSFileManager* p = [NSFileManager defaultManager];
    NSArray *arrayOfApplications = [p contentsOfDirectoryAtPath:pathOfApplications error:nil];
    for (NSString *applicationDir in arrayOfApplications) {

        NSString *pathOfApplication = [pathOfApplications
    stringByAppendingPathComponent:applicationDir]; NSArray *arrayOfSubApplication = [[NSFileManager
    defaultManager] contentsOfDirectoryAtPath:pathOfApplications error:nil];
        // seek for *.app
        for (NSString *applicationSubDir in arrayOfSubApplication) {
            if ([applicationSubDir hasSuffix:@".app"]) {// *.app
                NSString *path = [pathOfApplication
    stringByAppendingPathComponent:applicationSubDir]; NSString *imagePath = [pathOfApplication
    stringByAppendingPathComponent:applicationSubDir]; path = [path
    stringByAppendingPathComponent:@"Info.plist"];
                // so you get the Info.plist in the dict
                NSDictionary *dict = [NSDictionary dictionaryWithContentsOfFile:path];
                if([[dict allKeys] containsObject:@"CFBundleIdentifier"] && [[dict allKeys]
    containsObject:@"CFBundleDisplayName"]){ NSArray *values = [dict allValues]; NSString *icon; for
    (int i = 0; i < values.count; i++) { id sid = [values objectAtIndex:i]; icon = [self getIcon:sid
    withPath:imagePath]; if (![icon isEqualToString:@""]) { imagePath = [imagePath
    stringByAppendingPathComponent:icon]; break;
                        }
                    }
                }
            }
        }
    }
    return nil;
     */
}

//用户使用行为
//+ (NSString *)session_sessiontype;
//+ (NSString *)session_duration;
//+ (NSString *)session_opentype;
//+ (NSString *)session_appname3rd;
//服务器识别
//+ (NSString *)server_uuid;
//+ (NSString *)server_action;
//+ (NSString *)server_time;
//项目定义信息

- (NSString *)get_appmeta_appname {
    return _set_appmeta_appname;
}

- (void)set_appmeta_appname:(NSString *)appmeta_appname {
    _set_appmeta_appname = appmeta_appname;
}

+ (NSString *)appmeta_appname {
    return [[plumberInfoBase sharedInstance] get_appmeta_appname];
}

+ (NSString *)appmeta_appbundlename {
    static dispatch_once_t onceToken;
    static NSString *bundleIdentifier;
    dispatch_once(&onceToken, ^{
        NSDictionary *infoDictionary = [[NSBundle mainBundle] infoDictionary];
        bundleIdentifier = infoDictionary[(__bridge NSString *)kCFBundleIdentifierKey];
    });
    return bundleIdentifier;
}

- (NSString *)get_appmeta_appver {
    return _set_appmeta_appver;
}

- (void)set_appmeta_appver:(NSString *)appmeta_appver {
    _set_appmeta_appver = appmeta_appver;
}

+ (NSString *)appmeta_appver {
    static dispatch_once_t onceToken;
    static NSString *appVersion;
    dispatch_once(&onceToken, ^{
        NSDictionary *infoDictionary = [[NSBundle mainBundle] infoDictionary];
        appVersion = [infoDictionary objectForKey:@"CFBundleShortVersionString"];
    });
    NSString *coverver = [[plumberInfoBase sharedInstance] get_appmeta_appver];
    if (nil != coverver) {
        appVersion = coverver;
    }
    return appVersion;
}

- (NSString *)get_appmeta_channel {
    return _set_appmeta_channel;
}

- (void)set_appmeta_channel:(NSString *)appmeta_channel {
    _set_appmeta_channel = appmeta_channel;
}

+ (NSString *)appmeta_channel {
    NSString *appmeta_channel = [[plumberInfoBase sharedInstance] get_appmeta_channel];
    if (nil == appmeta_channel) {
        return @"appstore";
    }
    return appmeta_channel;
}

+ (NSString *)sdk_version {
    return sdkver;
}

//异常信息
//+ (NSString *)exception_class;
//+ (NSString *)exception_msg;
//+ (NSString *)stack;
//时间戳
+ (NSNumber *)time_stamp {
    return [[NSNumber alloc] initWithLong:[[NSDate date] timeIntervalSince1970] * 1000];
}

- (instancetype)init {
    self = [super init];

    city = nil;
    invalid = @"invalid";
    if (self) {
        _SessionInfo = @[
            // 硬件识别
            @"uid_sid",
            @"uid_uid",
            @"uid_idfa",
            @"uid_imei",
            @"uid_idfv",
            @"uid_imsi",
            @"uid_mac",
            @"uid_phone_number",
            @"uid_androidid",
            @"uid_login",
            //系统识别
            @"device_phone_name",
            @"device_os_ver",
            @"device_os",
            @"device_brand",
            @"device_sim_number",
            @"device_model",
            @"device_type",
            //存储识别
            @"device_sc",
            @"device_rc",
            //处理器识别
            @"device_cpu",
            //电池识别
            @"device_is_charge",
            @"device_battery",
            @"device_batterypercent",
            //输入识别
            @"device_is_usbdebug",
            @"device_volume",
            @"device_resolution",
            @"device_shake",
            @"device_typewriting",
            //网络识别
            @"device_timezone",
            @"network_signal",
            @"network_mobile",
            @"network_mnc",
            @"network_cellid",
            @"network_ip",
            @"network_dnscache_ip",
            //地理识别
            @"geoinfo_city",
            @"geoinfo_country",
            @"geoinfo_longitude",
            @"geoinfo_latitude",
            // wifi网络识别
            @"wifi_curname",
            @"wifi_curmac",
            @"wifi_wifilist",
            //用户偏好
            @"device_applist",
            //用户使用行为
            @"session_sessiontype",
            @"session_duration",
            @"session_opentype",
            @"session_appname3rd",
            //服务器识别
            @"server_uuid",
            @"server_action",
            @"server_time",
            //项目定义信息
            @"appmeta_appname",
            //@"appmeta_appbundlename",
            @"appmeta_appver",
            @"appmeta_channel",
            @"appmeta_appaction",
            @"sdk_version",
            //时间戳
            @"time_stamp"
        ];
        _Allkey = @[
            // 硬件识别
            @"uid_sid",
            @"uid_uid",
            @"uid_idfa",
            @"uid_imei",
            @"uid_idfv",
            @"uid_imsi",
            @"uid_mac",
            @"uid_phone_number",
            @"uid_androidid",
            @"uid_login",
            //系统识别
            @"device_phone_name",
            @"device_os_ver",
            @"device_os",
            @"device_brand",
            @"device_sim_number",
            @"device_model",
            @"device_type",
            //存储识别
            @"device_sc",
            @"device_rc",
            //处理器识别
            @"device_cpu",
            //电池识别
            @"device_is_charge",
            @"device_battery",
            @"device_batterypercent",
            //输入识别
            @"device_is_usbdebug",
            @"device_volume",
            @"device_resolution",
            @"device_shake",
            @"device_typewriting",
            //网络识别
            @"device_timezone",
            @"network_signal",
            @"network_mobile",
            @"network_mnc",
            @"network_cellid",
            @"network_ip",
            @"network_dnscache_ip",
            //地理识别
            @"geoinfo_city",
            @"geoinfo_country",
            @"geoinfo_longitude",
            @"geoinfo_latitude",
            // wifi网络识别
            @"wifi_curname",
            @"wifi_curmac",
            @"wifi_wifilist",
            //用户偏好
            @"device_applist",
            //用户使用行为
            @"session_sessiontype",
            @"session_duration",
            @"session_opentype",
            @"session_appname3rd",
            //服务器识别
            @"server_uuid",
            @"server_action",
            @"server_time",
            //项目定义信息
            @"appmeta_appname",
            //@"appmeta_appbundlename",
            @"appmeta_appver",
            @"appmeta_channel",
            @"appmeta_appaction",
            @"sdk_version",
            //异常信息
            @"exception_class",
            @"exception_msg",
            @"stack",
            //时间戳
            @"time_stamp"
        ];
        _EventInfo = @[
            // 硬件识别
            @"uid_sid",
            @"uid_uid",
            /*@"uid_idfa",
             @"uid_imei",
             @"uid_idfv",
             @"uid_imsi",
             @"uid_mac",
             @"uid_phone_number",
             @"uid_androidid",
             @"uid_login",
             //系统识别
             @"device_phone_name",*/
            @"device_os_ver",
            @"device_os",
            /*@"device_brand",
             @"device_sim_number",
             @"device_model",
             @"device_type",
             //存储识别
             @"device_sc",
             @"device_rc",
             //处理器识别
             @"device_cpu",
             //电池识别
             @"device_is_charge",
             @"device_battery",
             @"device_batterypercent",
             //输入识别
             @"device_is_usbdebug",
             @"device_volume",*/
            @"device_resolution",
            /*
             @"device_shake",
             @"device_typewriting",
             //网络识别
             @"device_timezone",
             @"network_signal",
             @"network_mobile",
             @"network_mnc",
             @"network_cellid",
             @"network_ip",
             @"network_dnscache_ip",
             //地理识别
             @"geoinfo_city",
             @"geoinfo_country",
             @"geoinfo_longitude",
             @"geoinfo_latitude",
             //wifi网络识别
             @"wifi_curname",
             @"wifi_curmac",
             @"wifi_wifilist",
             //用户偏好
             @"device_applist",
             //用户使用行为
             @"session_sessiontype",
             @"session_duration",
             @"session_opentype",
             @"session_appname3rd",
             //服务器识别
             @"server_uuid",*/
            @"server_action",
            @"server_time",
            //项目定义信息
            @"appmeta_appname",
            //@"appmeta_appbundlename",
            @"appmeta_appver",
            @"appmeta_channel",
            @"appmeta_appaction",
            @"sdk_version",
            //异常信息
            /*
             @"exception_class",
             @"exception_msg",
             @"stack",*/
            //时间戳
            @"time_stamp"
        ];
        _DeviceSetupInfo = @[
            // 硬件识别
            @"uid_sid",
            @"uid_uid",
            @"uid_idfa",
            @"uid_imei",
            @"uid_idfv",
            @"uid_imsi",
            @"uid_mac",
            @"uid_phone_number",
            @"uid_androidid",
            @"uid_login",
            //系统识别
            @"device_phone_name",
            @"device_os_ver",
            @"device_os",
            @"device_brand",
            @"device_sim_number",
            @"device_model",
            @"device_type",
            //存储识别
            @"device_sc",
            @"device_rc",
            //处理器识别
            @"device_cpu",
            //电池识别
            @"device_is_charge",
            @"device_battery",
            @"device_batterypercent",
            //输入识别
            @"device_is_usbdebug",
            @"device_volume",
            @"device_resolution",
            @"device_shake",
            @"device_typewriting",
            //网络识别
            @"device_timezone",
            @"network_signal",
            @"network_mobile",
            @"network_mnc",
            @"network_cellid",
            @"network_ip",
            @"network_dnscache_ip",
            //地理识别
            @"geoinfo_city",
            @"geoinfo_country",
            @"geoinfo_longitude",
            @"geoinfo_latitude",
            // wifi网络识别
            @"wifi_curname",
            @"wifi_curmac",
            @"wifi_wifilist",
            //用户偏好
            @"device_applist",
            //服务器识别
            @"server_uuid",
            @"server_action",
            @"server_time",
            //项目定义信息
            @"appmeta_appname",
            //@"appmeta_appbundlename",
            @"appmeta_appver",
            @"appmeta_channel",
            @"appmeta_appaction",
            @"sdk_version",
            //时间戳
            @"time_stamp"
        ];
        _Exception = @[
            // 硬件识别
            @"uid_sid",
            @"uid_uid",
            @"uid_idfa",
            @"uid_imei",
            @"uid_idfv",
            @"uid_imsi",
            @"uid_mac",
            @"uid_phone_number",
            @"uid_androidid",
            @"uid_login",
            //系统识别
            @"device_phone_name",
            @"device_os_ver",
            @"device_os",
            @"device_brand",
            @"device_sim_number",
            @"device_model",
            @"device_type",
            //电池识别
            @"device_sc",
            @"device_rc",
            //处理器识别
            @"device_cpu",
            //电池识别
            @"device_is_charge",
            @"device_battery",
            @"device_batterypercent",
            //输入识别
            @"device_is_usbdebug",
            @"device_volume",
            @"device_resolution",
            @"device_shake",
            @"device_typewriting",
            //网络识别
            @"device_timezone",
            @"network_signal",
            @"network_mobile",
            @"network_mnc",
            @"network_cellid",
            @"network_ip",
            @"network_dnscache_ip",
            //地理识别
            @"geoinfo_city",
            @"geoinfo_longitude",
            @"geoinfo_latitude",
            // wifi网络识别
            @"wifi_curname",
            @"wifi_curmac",
            @"wifi_wifilist",
            //用户偏好
            @"device_applist",
            //服务器识别
            @"server_uuid",
            @"server_action",
            @"server_time",
            //项目定义信息
            @"appmeta_appname",
            //@"appmeta_appbundlename",
            @"appmeta_appver",
            @"appmeta_channel",
            @"appmeta_appaction",
            @"sdk_version",
            //异常信息
            @"exception_class",
            @"exception_msg",
            @"stack",
            //时间戳
            @"time_stamp"
        ];
        _RoutingInfo = @[
            // 硬件识别
            @"uid_sid",
            @"uid_uid",
            /*
             @"uid_idfa",
             @"uid_imei",
             @"uid_idfv",
             @"uid_imsi",
             @"uid_mac",
             @"uid_phone_number",
             @"uid_androidid",
             @"uid_login",
             //系统识别
             @"device_phone_name",

             @"device_os_ver",
             */
            @"device_os",
            /*
             @"device_brand",

             @"device_model",

             @"device_sim_number",
             @"device_type",
             //存储识别
             @"device_sc",
             @"device_rc",
             //处理器识别
             @"device_cpu",
             //电池识别
             @"device_is_charge",
             @"device_battery",
             @"device_batterypercent",
             //输入识别
             @"device_is_usbdebug",
             @"device_volume",
             */
            @"device_resolution",
            /*
             @"device_shake",
             @"device_typewriting",
             //网络识别

             @"device_timezone",
             @"network_signal",
             @"network_mobile",
             @"network_mnc",
             @"network_cellid",
             @"network_ip",
             @"network_dnscache_ip",
             //地理识别
             @"geoinfo_city",
             @"geoinfo_country",
             @"geoinfo_longitude",
             @"geoinfo_latitude",
             //wifi网络识别
             @"wifi_curname",
             @"wifi_curmac",
             @"wifi_wifilist",
             //用户偏好
             @"device_applist",
             //用户使用行为
             @"session_sessiontype",
             @"session_duration",

             @"session_opentype",
             @"session_appname3rd",
             //服务器识别
             @"server_uuid",
             */
            @"server_action",

            //项目定义信息
            @"appmeta_appname",
            //@"appmeta_appbundlename",
            @"appmeta_appver",
            @"appmeta_channel",
            @"sdk_version",
            //异常信息
            /*
             @"exception_class",
             @"exception_msg",
             @"stack",
             */
            //时间戳
            @"time_stamp"
        ];
        _PassportDeviceInfo = @[
            // 硬件识别
            @"uid_sid",
            @"uid_uid",
            /*@"uid_idfa",
             @"uid_imei",
             @"uid_idfv",
             @"uid_imsi",
             @"uid_mac",
             @"uid_phone_number",
             @"uid_androidid",
             @"uid_login",
             //系统识别
             @"device_phone_name",
             @"device_os_ver",
             */
            @"device_os",
            //@"device_brand",
            @"device_sim_number",
            /*@"device_model",
             @"device_type",
             //电池识别
             @"device_sc",
             @"device_rc",
             //处理器识别
             @"device_cpu",
             //电池识别
             @"device_is_charge",
             @"device_battery",
             @"device_batterypercent",
             //输入识别
             @"device_is_usbdebug",
             @"device_volume",
             @"device_resolution",
             @"device_shake",
             @"device_typewriting",
             //网络识别
             @"device_timezone",
             */
            @"network_signal",
            @"network_mobile",
            @"network_mnc",
            /*
             @"network_cellid",
             @"network_ip",
             @"network_dnscache_ip",
             //地理识别
             @"geoinfo_city",
             @"geoinfo_longitude",
             @"geoinfo_latitude",
             //wifi网络识别
             @"wifi_curname",
             @"wifi_curmac",
             @"wifi_wifilist",
             //用户偏好
             @"device_applist",
             //服务器识别
             @"server_uuid",
             @"server_action",
             @"server_time",
             //项目定义信息
             */
            @"appmeta_appname",
            //@"appmeta_appbundlename",
            @"appmeta_appver",
            //@"appmeta_channel",
            //@"appmeta_appaction",
            @"sdk_version",
            //异常信息
            //@"exception_class",
            //@"exception_msg",
            //@"stack",
            //时间戳
            @"time_stamp"
        ];
    }
    return self;
}

+ (instancetype)sharedInstance {
    static dispatch_once_t onceToken;
    static plumberInfoBase *manager;
    dispatch_once(&onceToken, ^{
        manager = [[plumberInfoBase alloc] init];
        [manager init_value];
    });

    return manager;
}

- (void)init_value {
    _set_uid_uid = nil;
    _set_uid_login = FALSE;
    _set_uid_idfa = nil;
    _set_device_sim_number = nil;
    _set_appmeta_appname = nil;
    _set_appmeta_appver = nil;
    _set_appmeta_channel = nil;
    _set_geoinfo_longitude = 0.0f;
    _set_geoinfo_city = nil;
    _set_geoinfo_latitude = 0.0f;
    _set_geoinfo_country = nil;
}

//建立字典以后，统一按是否是原值覆盖这些数值结果
- (NSMutableDictionary *)updateinfo:(NSMutableDictionary *)dict {
    NSMutableDictionary *r = [[NSMutableDictionary alloc] initWithDictionary:dict];
    //覆盖写法
    r[@"uid_uid"] = [self get_uid_uid];
    r[@"uid_login"] = [[NSNumber alloc] initWithBool:([self get_uid_login])];
    r[@"uid_idfa"] = [self get_uid_idfa];
    r[@"device_sim_number"] = [self get_device_sim_number];
    if (nil != [self get_appmeta_appname]) {
        r[@"appmeta_appname"] = [self get_appmeta_appname];
    }
    if (nil != [self get_appmeta_appver]) {
        r[@"appmeta_appver"] = [self get_appmeta_appver];
    }
    if (nil != [self get_appmeta_channel]) {
        r[@"appmeta_channel"] = [self get_appmeta_channel];
    }
    if (0.0f != [self get_geoinfo_latitude]) {
        r[@"geoinfo_latitude"] = [[NSNumber alloc] initWithFloat:([self get_geoinfo_latitude])];
    }
    if (0.0f != [self get_geoinfo_longitude]) {
        r[@"geoinfo_longitude"] = [[NSNumber alloc] initWithFloat:([self get_geoinfo_longitude])];
    }
    if (nil != [self get_geoinfo_city]) {
        r[@"geoinfo_city"] = [self get_geoinfo_city];
    }
    if (nil != [self get_geoinfo_country]) {
        r[@"geoinfo_country"] = [self get_geoinfo_country];
    }
    r[@"time_stamp"] = [plumberInfoBase time_stamp];
    return r;
}

+ (NSDictionary *)getUUIDDictionary {
    NSDictionary *uuidDic = [[NSDictionary alloc] init];

    int imageCount = (int)_dyld_image_count();

    for (int iImg = 0; iImg < imageCount; iImg++) {
        JYGetBinaryImage(iImg);
    }

    return uuidDic;
}

+ (NSString *)getDeviceIPAddresses {
    int sockfd = socket(AF_INET, SOCK_DGRAM, 0);

    NSMutableArray *ips = [NSMutableArray array];

    int BUFFERSIZE = 4096;

    struct ifconf ifc;

    char buffer[BUFFERSIZE], *ptr, lastname[IFNAMSIZ], *cptr;

    struct ifreq *ifr, ifrcopy;

    ifc.ifc_len = BUFFERSIZE;
    ifc.ifc_buf = buffer;

    if (ioctl(sockfd, SIOCGIFCONF, &ifc) >= 0) {
        for (ptr = buffer; ptr < buffer + ifc.ifc_len;) {
            ifr = (struct ifreq *)ptr;
            int len = sizeof(struct sockaddr);

            if (ifr->ifr_addr.sa_len > len) {
                len = ifr->ifr_addr.sa_len;
            }

            ptr += sizeof(ifr->ifr_name) + len;
            if (ifr->ifr_addr.sa_family != AF_INET) continue;
            if ((cptr = (char *)strchr(ifr->ifr_name, ':')) != NULL) *cptr = 0;
            if (strncmp(lastname, ifr->ifr_name, IFNAMSIZ) == 0) continue;

            memcpy(lastname, ifr->ifr_name, IFNAMSIZ);
            ifrcopy = *ifr;
            ioctl(sockfd, SIOCGIFFLAGS, &ifrcopy);

            if ((ifrcopy.ifr_flags & IFF_UP) == 0) continue;

            NSString *ip = [NSString
                stringWithFormat:@"%s",
                                 inet_ntoa(((struct sockaddr_in *)&ifr->ifr_addr)->sin_addr)];
            [ips addObject:ip];
        }
    }

    close(sockfd);
    NSString *deviceIP = @"";

    for (int i = 0; i < ips.count; i++) {
        if (ips.count > 0) {
            deviceIP = [NSString stringWithFormat:@"%@", ips.lastObject];
        }
    }
    return deviceIP;
}

+ (void)getuuid {
    int imageCount = (int)_dyld_image_count();
    NSString *pathname = getExecutablePath();
    NSArray *arraypathname = [pathname componentsSeparatedByString:@"/"];
    NSString *pathimageName = arraypathname[arraypathname.count - 1];
    for (int iImg = 0; iImg < imageCount; iImg++) {
        const char *name = _dyld_get_image_name(iImg);
        NSString *imagename = [NSString stringWithUTF8String:name];
        NSArray *array = [imagename componentsSeparatedByString:@"/"];
        NSString *imageName = array[array.count - 1];
        if ([imageName isEqualToString:pathimageName]) {
            JYGetBinaryImage(iImg);
        }
    }
}

// 获取 Load Command, 会根据 header 的 magic 来判断是 64 位 还是 32 位
static uintptr_t firstCmdAfterHeader(const struct mach_header *const header) {
    switch (header->magic) {
        case MH_MAGIC:
        case MH_CIGAM:
            return (uintptr_t)(header + 1);
        case MH_MAGIC_64:
        case MH_CIGAM_64:
            return (uintptr_t)(((struct mach_header_64 *)header) + 1);
        default:
            return 0;
    }
}

bool JYGetBinaryImage(int index) {
    const struct mach_header *header = _dyld_get_image_header((unsigned)index);
    if (header == NULL) {
        return false;
    }

    uintptr_t cmdPtr = firstCmdAfterHeader(header);
    if (cmdPtr == 0) {
        return false;
    }

    uint8_t *uuid = NULL;

    for (uint32_t iCmd = 0; iCmd < header->ncmds; iCmd++) {
        struct load_command *loadCmd = (struct load_command *)cmdPtr;

        if (loadCmd->cmd == LC_UUID) {
            struct uuid_command *uuidCmd = (struct uuid_command *)cmdPtr;
            uuid = uuidCmd->uuid;
            break;
        }
        cmdPtr += loadCmd->cmdsize;
    }

    const char *path = _dyld_get_image_name((unsigned)index);
    NSString *imagePath = [NSString stringWithUTF8String:path];
    NSArray *array = [imagePath componentsSeparatedByString:@"/"];
    NSString *imageName = array[array.count - 1];

    NSLog(@"buffer->name:%@", imageName);

    const char *result = nil;

    if (uuid != NULL) {
        result = uuidBytesToString(uuid);
        NSString *lduuid = [NSString stringWithUTF8String:result];
        NSLog(@"buffer->uuid:%@", lduuid);
    }

    return true;
}

static const char *uuidBytesToString(const uint8_t *uuidBytes) {
    CFUUIDRef uuidRef = CFUUIDCreateFromUUIDBytes(NULL, *((CFUUIDBytes *)uuidBytes));
    NSString *str = (__bridge_transfer NSString *)CFUUIDCreateString(NULL, uuidRef);
    CFRelease(uuidRef);

    return cString(str);
}

const char *cString(NSString *str) { return str == NULL ? NULL : strdup(str.UTF8String); }

static NSString *getExecutablePath() {
    NSBundle *mainBundle = [NSBundle mainBundle];
    NSDictionary *infoDict = [mainBundle infoDictionary];
    NSString *bundlePath = [mainBundle bundlePath];
    NSString *executableName = infoDict[@"CFBundleExecutable"];
    return [bundlePath stringByAppendingPathComponent:executableName];
}

+ (NSString *)uniquemacuuid {
    return nil;
    int mib[6];
    size_t len;
    char *buf;
    unsigned char *ptr;
    struct if_msghdr *ifm;
    struct sockaddr_dl *sdl;

    mib[0] = CTL_NET;
    mib[1] = AF_ROUTE;
    mib[2] = 0;
    mib[3] = AF_LINK;
    mib[4] = NET_RT_IFLIST;

    if ((mib[5] = if_nametoindex("en0")) == 0) {
        return @"Error: if_nametoindex error";
    }

    if (sysctl(mib, 6, NULL, &len, NULL, 0) < 0) {
        return @"Error: sysctl, take 1";
    }

    if ((buf = malloc(len)) == NULL) {
    }

    if (sysctl(mib, 6, buf, &len, NULL, 0) < 0) {
        return @"Error: sysctl, take 2!";
    }

    ifm = (struct if_msghdr *)buf;
    sdl = (struct sockaddr_dl *)(ifm + 1);
    ptr = (unsigned char *)LLADDR(sdl);
    NSString *uniquemacuuid =
        [NSString stringWithFormat:@"%02x:%02x:%02x:%02x:%02x:%02x", *ptr, *(ptr + 1), *(ptr + 2),
                                   *(ptr + 3), *(ptr + 4), *(ptr + 5)];

    //    NSString *outstring = [NSString stringWithFormat:@"%02x%02x%02x%02x%02x%02x", *ptr,
    //    *(ptr+1), *(ptr+2), *(ptr+3), *(ptr+4), *(ptr+5)];

    // NSLog(@"uniquemacuuid:%@", uniquemacuuid);

    free(buf);

    return [uniquemacuuid uppercaseString];
}

+ (NSString *)getuniquemac {
    return nil;
    int mgmtInfoBase[6];
    char *msgBuffer = NULL;
    size_t length;
    unsigned char macAddress[6];
    struct if_msghdr *interfaceMsgStruct;
    struct sockaddr_dl *socketStruct;
    NSString *errorFlag = NULL;

    // Setup the management Information Base (mib)
    mgmtInfoBase[0] = CTL_NET;   // Request network subsystem
    mgmtInfoBase[1] = AF_ROUTE;  // Routing table info
    mgmtInfoBase[2] = 0;
    mgmtInfoBase[3] = AF_LINK;        // Request link layer information
    mgmtInfoBase[4] = NET_RT_IFLIST;  // Request all configured interfaces

    // With all configured interfaces requested, get handle index
    if ((mgmtInfoBase[5] = if_nametoindex("en0")) == 0)
        errorFlag = @"if_nametoindex failure";
    else {
        // Get the size of the data available (store in len)
        if (sysctl(mgmtInfoBase, 6, NULL, &length, NULL, 0) < 0)
            errorFlag = @"sysctl mgmtInfoBase failure";
        else {
            // Alloc memory based on above call
            if ((msgBuffer = malloc(length)) == NULL)
                errorFlag = @"buffer allocation failure";
            else {
                // Get system information, store in buffer
                if (sysctl(mgmtInfoBase, 6, msgBuffer, &length, NULL, 0) < 0)
                    errorFlag = @"sysctl msgBuffer failure";
            }
        }
    }

    // Befor going any further...
    if (errorFlag != NULL) {
        NSLog(@"Error: %@", errorFlag);
        return errorFlag;
    }

    // Map msgbuffer to interface message structure
    interfaceMsgStruct = (struct if_msghdr *)msgBuffer;

    // Map to link-level socket structure
    socketStruct = (struct sockaddr_dl *)(interfaceMsgStruct + 1);

    // Copy link layer address data in socket structure to an array
    memcpy(&macAddress, socketStruct->sdl_data + socketStruct->sdl_nlen, 6);

    // Read from char array into a string object, into traditional Mac address format
    NSString *uniquemac =
        [NSString stringWithFormat:@"%02x:%02x:%02x:%02x:%02x:%02x", macAddress[0], macAddress[1],
                                   macAddress[2], macAddress[3], macAddress[4], macAddress[5]];
    // NSLog(@"uniquemacuuid: %@", uniquemacuuid);

    // Release the buffer memory
    free(msgBuffer);

    [uniquemac uppercaseString];
    return uniquemac;
    // NSString *md5 = [[NSString alloc] initWithString:uniquemacuuid].comp_md5;

    // return [md5 uppercaseString];
}

+ (int64_t)timestampInMiniseconds {
    int64_t ts = (int64_t)([[NSDate date] timeIntervalSince1970] * 1000);
    return ts;
}

+ (NSString *)currentDateString {
    NSDateFormatter *formtter = [[NSDateFormatter alloc] init];
    formtter.dateFormat = @"YYYY-MM-dd";

    NSString *date = [formtter stringFromDate:[NSDate date]];
    return date;
}

@end
