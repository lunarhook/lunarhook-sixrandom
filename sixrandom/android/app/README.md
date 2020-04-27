一、SDK使用
  SDK以jar的形式提供，并对外提供以下方法：
 （1）Application onCreate时进行初始化，必须先执行初始化,该方法异步执行不阻塞主线程;
 同时为了保证获取的准确性，在主进程和子进程都需要初始化，而且尽可能onCreate靠前初始化。
     /**
      * 埋点Compass 初始化
      *
      * @param application Application对象
      * @param channel     渠道ID
      * @param deviceID    可设置设备ID
      * @param appName     统一分配的app名字,不能为空
      */
    public static void init(Application application, String channel, String deviceID)

（2）SDK提供的开关配置
    /**
     * 是否开启debug logcat，当前默认开启
     * @param enable
     */
    public static void enableLog(boolean enable)

   /**
     * 是否开启记录Crash上报，当前默认开启
     *
     * @param enable
     */
   public static void enableRecordCrash(boolean enable)

   /**
     * 设置是否登陆状态
     * @param uidLogin
     */
   public static void setUidLogin(boolean uidLogin)

   /**
     * 获取到地理位置时，设置地理位置信息
     *
     * @param longitude 经度
     * @param latitude  维度
     * @param city      城市编码
     * @param country   国家编码
     */
   public static void setLocationInfo(double longitude, double latitude, String city, String country)

   /**
     * 设置手机号
     * @param uidPhoneNumber
     */
   public static void setUidPhoneNumber(String uidPhoneNumber)

