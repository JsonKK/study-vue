// 登录相关接口配置
var loginServiceConfig = {
		
    // 登录
    USER_LOGIN : "/user/login",
    
    // 验证码登录
    VERIFY_CODE_LOGIN : "/user/phoneVertifyLogin",
    
    // 退出登录
    USER_LOGOUT : "/user/logout",
    
    // 判断用户是否登录
    ISLOGIN : "/user/isLogin",
    
    // 获取验证码
    GET_VERIFY_CODE : "/sms/getCommonVertifyCode",
    
    // 验证是否注册
    VERIFY_IS_REGISTER : "/user/validatePhone",
    
    // 注册
    USER_REGISTER :"/user/phoneRegister",
    
    // 注册并登录
    USER_REGISTER_AND_LOGIN : "/user/phoneRegisterAndLogin",
    
    // 忘记密码设置新密码
    USER_FORGET_PASSWORD : "/user/resetPassword",
    
    // 忘记密码获取验证码
    USER_FORGET_PASSWORD_VERIFY_CODE : "/user/getForgotPwdVertifyCode",
    
    // 校验手机是否注册
    CHECK_PHONE_REGISTER : "/user/validateBindPhone",		
    
    // 绑定手机
    THIRD_BIND_PHONE : "/user/thirdBindPhone"
};

// 通用接口配置	
var commonServiceConfig = {
    
    // 获取上传参数
    GET_UPLOAD_TOKEN : "/innocraft/common/getTokenForPC",
    
    GET_WECHAT_JS_SIGN : "/wx/getWechatJsSign",

    LOGIN_CHECK : "/user/isLogin"
};

// 匠人管理相关

var craftsmanServiceConfig = {
        
    // 匠人商品列表
    GET_CRAFT_WORK_LIST : "/innocraft/craft/art/listHome",
    
    // 匠人作品列表
    GET_CRAFT_ART_LIST : "/innocraft/craft/works/listHome",
    
    // 匠人匠文列表
    GET_CRAFT_ARTICAL_LIST : "/innocraft/craft/listCraftArticle",
    
    // 获取匠人个人信息
    GET_CRAFT_INFO : "/innocraft/craft/getCraftIndexInfo",
    
    // 获取匠人个人信息（拍品获取匠人信息）
    GET_CRAFT_INFO_BY_ID : "/innocraft/craft/getCraftIndexInfoById",		
    
    // 获取匠人技艺列表
    GET_CRAFT_SKILL_LIST : "/innocraft/craft/listCraftSkill",
    
    // 获取匠人大事件
    GET_CRAFT_PROGRESS : "/innocraft/craft/listCraftEvent",
    
    // 获取大师资料库
    GET_MASTER_INFO : "/innocraft/master/getMasterDetail",
    
    // 获取匠人个人信息(通过匠人Id)
    GET_CRAFT_INFO_BYID : "/innocraft/craft/getCraftIndexInfoById",
    
    // 获取匠人作品推荐
    GET_RECOMMEND_WORKS : "/innocraft/craft/art/listRecommendByCategory",
    
    // 服务商服务列表
    GET_PROVIDER_SERVICE_LIST : "/innocraft/expert/service/listHome",
    
    // 获取服务商个人信息
    GET_PROVIDER_INFO : "/innocraft/expert/getExpertIndexInfo",
    
    // 获取推荐服务
    GET_PROVIDER_RECOMMEND_SERVICE : "/innocraft/expert/service/listRecommendByCategory",
    
    // 获取帮助分类文章
    GET_HELP_CENTER_ARTICAL: "/general/config/article/getArticleListByCategoryId",
    
    // 关注匠人
    ATTENTION : "/innocraft/user/attention",
    
    // 取消关注
    CANCLE_ATTENTION : "/innocraft/user/cancelAttention",
    
    // 作品收藏
    ART_FAVORITE : "/innocraft/craft/art/favorite",
    
    // 作品取消收藏
    ART_CANCLE_FAVORITE : "/innocraft/craft/art/cancelFavorite",
    
    // 代表作收藏
    WORK_FAVORITE : "/innocraft/craft/works/favorite",
    
    // 代表作取消收藏
    WORK_CANCLE_FAVORITE : "/innocraft/craft/works/cancelFavorite",
    
    // 服务收藏
    SERVICE_FAVORITE : "/innocraft/expert/service/favorite",
    
    // 服务取消收藏
    SERVICE_CANCLE_FAVORITE : "/innocraft/expert/service/cancelFavorite",
    
    // 作品评论
    GET_EVALUATE_ART_LIST : "/innocraft/common/evaluate/listEvaluateOfArt",
     
     // 其他匠人作品评论
    GET_EVALUATE_OTHER_ART_LIST : "/innocraft/common/evaluate/listEvaluateOfOtherArt",

    // 代表作评论列表
    GET_ART_COMMENT_LIST : "/innocraft/common/comment/listResourceParent"
};

// 拍卖相关
var auction = {
    
    // 获取拍卖详情
    GET_AUCTION_DETAIL : "/innocraft/craft/auctiongoods/refreshDetail",
    
    // 获取出价记录
    GET_AUCTION_RECORD : "/innocraft/craft/auctiongoods/listAuctionRecord",
    
    // 获取出价记录数量
    GET_AUCTION_RECORD_LENGTH : "/innocraft/craft/auctiongoods/countAuctionRecord",
    
    // 普通出价接口
    NORMAL_OFFER_PRICE : "/innocraft/craft/auctiongoods/offerPrice",
    
    // 代理出价接口
    AGENT_OFFER_PRICE : "/innocraft/craft/auctiongoods/agentOfferPrice",
    
    // 撤销代理接口
    CANCLE_AGENT : "/innocraft/craft/auctiongoods/cancelAgent",
    
    // 拍品列表--0元拍列表
    AUCTION_LIST : "/innocraft/craft/auctiongoods/listAuction",
    
    // 拍品列表--历史拍品列表
    AUCTION_HISTORY_LIST : "/innocraft/craft/auctiongoods/listHistoryAuction",
    
    // 修改拍品代理价
    UPDATE_AGENT_PRICE :  "/innocraft/craft/auctiongoods/updateAgentPrice"
};

var others = {
    
    // 获取安卓最新版本
    GET_ANDROID_NEWEST_VERSION : "/manage/appversion/getLastVersion",
    
    // 获取文章详情
    GET_ARTICAL_DETAIL : "/general/config/article/get"
};

var purchase = {

    // 获取商品信息
    GET_GOODS_BASEINFO : "/innocraft/craft/art/getBaseInfo",

    // 获取默认地址
    GET_DEFAULT_ADDRESS : "/innocraft/user/listDeliveryAddress",

    // 提交订单
    POST_GOODS_BASEINFO : "/innocraft/craft/art-order/createOrder",

    // 获取支付详情
    GET_ORDER_PAYDETAIL : "/order/visitor/getOrderPayDetail",

    // 获取推荐列表
    GET_LIKE_GOODSLIST : "/innocraft/craft/art/listInterestOfMarket",
    
    // 获取买家作品订单列表
       ORDER_GET_BUYER_LIST : "/order/visitor/getBuyerOrderList",

       // 提交支付
       PAY_ORDER_DETAIL : "/order/trade/buyerPay",

       // 获取订单优惠券
       GET_ORDER_COUPON : "/innocraft/user-coupons/listUserOrderCoupons"
       
};

var order = {
    
    // 获取物流信息
       GET_ORDER_TRACES : "/order/visitor/getOrderTraces",
       
       // 获取订单详情
       GET_ORDER_DETAIL : "/order/visitor/getOrderDetailDTO",
       
       // 获取退款列表
       ORDER_GET_REFUND_LISTBUYER : "/order/refund/listBuyer",
       
       // 删除订单
       BUYER_DELETE : "/order/trade/buyerDelete",
       
       // 取消订单
       BUYER_CANCEL : "/order/trade/buyerCancel",
       
       // 提醒发货
       BUYER_REMIND_DELIVERY : "/order/trade/buyerRemindDelivery",
       
       // 确认收货
       BUYER_CONFIRM_RECEIPT : "/order/trade/buyerConfirmReceipt",

       // 取消申诉
       ORDER_REFUND_CANCEL_APPEAL : "/order/refund/buyerCancelAppeal",
       
       // 申请退款
       ORDER_REFUND_APPLY : "/order/refund/buyerApply",
       
       // 退款申诉
       ORDER_REFUND_APPEAL : "/order/refund/buyerAppeal",
       
       // 取消申请退款
       ORDER_REFUND_CANCEL_APPLY : "/order/refund/buyerCancelApply",

       // 提交地址
       ORDER_SUBMIT_ADDRESS : "/order/trade/buyerBindOrderAddress",
       
       // 提交退货
       BUYER_RETURN_GOODS : "/order/refund/buyerReturnGoods"
       
};

var address = {
    
    // 获取地址列表
    GET_ADDRESS_LIST : "/innocraft/user/listDeliveryAddress",
    
    // 设置默认地址
    SET_DEFAULT_ADDRESS : "/user/address/setDefault",
    
    // 删除地址
    DELETE_ADDRESS : "/user/address/delete",
    
    // 添加地址
    ADD_ADDRESS : "/innocraft/user/addDeliveryAddress",
    
    // 获取地址详情
    GET_ADDRESS_DETAIL : "/user/address/get",
    
    // 更新地址
    UPADTE_ADDRESS_DETAIL : "/user/address/update"
};

var classify = {

    // 一级分类
    GET_MAIN_CLASSIFY : "/innocraft/craft/art-category/listOfSearch",

    // 获取二级分类
    GET_SECOND_CLASSIFY : "/innocraft/craft/art/listHotByCategory"
};

var collect = {

    // 获取收藏列表
    GET_COLLECT_LIST : "/innocraft/craft/art/listMyFavorite",

    // 删除收藏条目
    DELETE_COLLECT_ITEM : "/innocraft/craft/art/cancelFavorite"
};

var attention = {

    // 获取列表数据
    GET_ATTENTION_LIST : "/innocraft/user/listAttention" 

};

var market = {
    
    // 人气推荐
    GET_POPULAR_MARKET_LIST : "/innocraft/craft/art/listPopularOfMarket",
    
    // 人气推荐列表页
    GET_POPULAR_MARKET_LIST_PAGE  : "/innocraft/craft/art/listPopularOfMarketPage",
    
    // 最新列表
    GET_NEWEST_MARKET_LIST : "/innocraft/craft/art/listNewestOfMarket",
    
    // 新品首发列表页
    GET_NEWEST_MARKET_LIST_PAGE  : "/innocraft/craft/art/listNewestOfMarketPage",
    
    // 分类列表
    GET_CATEGORY_MARKET_LIST : "/innocraft/craft/art-category/listOfMarket",
    
    //  猜你喜欢
    GET_INTEREST_MARKET_LIST : "/innocraft/craft/art/listInterestOfMarket",

    //首页轮播图
    GET_INDEX_MARKET_BANNER : "general/config/carousel/getAppCarouselList",

    //分类列表
    GET_INDEX_CLASS_LIST : "innocraft/craft/art-category/listOfMarket",

    //新品列表
    GET_INDEX_NEW_GOODS_LIST : "innocraft/craft/art/listNewestOfMarket"
};

var my = {
    
    // 获取用户信息
    GET_MY_BASE_INFO : "/innocraft/user/getMyBaseInfo",
    
    // 获取订单数
    GET_BUYER_STATISTICS : "/order/visitor/getBuyerStatistics",
    
    // 获取收藏、关注、粉丝数量
    GET_MY_SOCIAL_INFO : "/innocraft/user/getMySocialInfo",

    // 获取我的优惠券
    GET_MY_COUPON_LIST : "/innocraft/user-coupons/listMyCoupons"

};

var searchService = {
    
    // 获取联想词
    GET_KEYWORDS_BY_PREFIX : "/innocraft/common/search-keyword/getKeywordsByPrefix",
    
    // 商品搜索
    GET_GOODS_SEARCH : "/innocraft/craft/art/listSearch",
    
    // 匠人搜索
    GET_CRAFT_SEARCH : "/innocraft/craft/listSearch",
    
    // 文章搜索
    GET_ARTICLE_SEARCH : "/general/config/article/search",
    
    // 默认关键词
    GET_DEFAULT_KEYWORD : "/general/config/keyword/getKeyword",

    // 优惠券作品
    GET_COUPON_GOODS_SEARCH : "/innocraft/craft/art/searchArtByCoupons",

    // 优惠券匠人
    GET_COUPON_CRAFT_SEARCH : "/innocraft/craft/searchCraftByCoupons"
    
};

var activity = {
    
    // 世界杯活动配置登录
    IS_WORLD_CUP_LOGIN : "/innocraft/activity/worldcup/schedule/login",
    
    // 赛程列表
    WORLD_CUP_SCHEDULE_LIST : "/innocraft/activity/worldcup/schedule/getList",
    
    // 赛程保存
    WORLD_CUP_SCHEDULE_SAVE : "/innocraft/activity/worldcup/schedule/save",
    
    // 赛程结果更新
    WORLD_CUP_SCHEDULE_UPDATE : "/innocraft/activity/worldcup/schedule/update",

    // 大转盘奖项获取
    BIG_TABLE_GET_PRIZE : "/innocraft/activity/lottery/activityprize/list",

    // 大转盘抽奖
    BIG_TABLE_DRAW_INFO : "/innocraft/activity/lottery/activity/drawTurntable",

    // 大转盘获取活动信息
    BIG_TABLE_GET_ACTIVITY_INFO : "/innocraft/activity/lottery/activity/getDetails",

    // 大转盘获取跑马灯
    BIG_TABLE_GET_MARQUE_INFO : "/innocraft/activity/lottery/activity-participation-log/listUserWinPrizeLog",

    // 中奖纪录
    BIG_TABLE_GET_WIN_PRIZE_LIST: "/innocraft/activity/lottery/activity-participation-log/listMyWinPrizeLog",

    // 兑奖记录
    BIG_TABLE_GET_EXCHANGE_PRIZE_LIST : "/innocraft/activity/lottery/activity-participation-log/listMyWinPrizeLog",

    // 获取海报
    BIG_TABLE_GET_SHARE_BANNER : "/innocraft/activity/lottery/activity-invite/getMiniSharePicUrl",

    // 兑奖
    EXCHANGE_BIG_TABLE_PRIZE : "/innocraft/activity/lottery/activity-exchangegift/exchangeGift",

    // 中奖记录
    BIG_TABLE_GET_PRIZE_RECORD : "/innocraft/activity/lottery/activity-participation-log/listMyWinPrizeLog",

    // 参与记录
    BIG_TABLE_GET_JOIN_RECORD : "/innocraft/activity/lottery/activity-participation-log/listMyParticipationLog",
    
    // 兑奖默认地址
    EXCHANGE_GIFT_ADDRESS_DEFAULT : "/innocraft/activity/lottery/activity-exchangegift/getUserAddress"

};

var coupon = {

    // 优惠券专题配置列表
    GET_COUPON_TOPIC_SET_LIST : "/innocraft/coupons/listByTopic",

    // 优惠卷专题活动列表
    GET_COUPON_TOPIC_LIST : "/innocraft/coupons/listByActivityId",

    // 领取全部优惠券
    GET_COUPON_LIST_ALL : "/innocraft/coupons/takeAllCoupons",

    // 领取单个优惠券
    GET_COUPON_LIST_ITEM : "/innocraft/coupons/takeCoupons",

    // 优惠推荐
    GET_COUPON_HOT_GOODS_LIST : "/innocraft/craft/art/listArtByActivityId",
    
    // 领券中心
    GET_COUPONS_CENTER_LIST : "/innocraft/coupons/listCouponsCenter",
    
    // 作品优惠券列表
    GET_WORKS_COUPONS_LIST : "/innocraft/coupons/listByArtDetail"
}

let servicesConfig = {
    ...loginServiceConfig,
    ...commonServiceConfig,
    ...craftsmanServiceConfig,
    ...auction,
    ...others,
    ...purchase,
    ...address,
    ...classify,
    ...market,
    ...collect,
    ...my,
    ...searchService,
    ...attention,
    ...order,
    ...activity,
    ...coupon
}

export default servicesConfig;
