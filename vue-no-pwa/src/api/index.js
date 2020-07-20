//引用JSONP
const jsonp = require('jsonp');

//api
const HBHost = {
  //当前域名
  host : window.location.host,
  //测试环境
  apiHost: 'https://test-gw-k8s-web.taqu.cn/live_api',
  //测试环境
  tradeHost: 'https://test-gw-k8s-web.taqu.cn/live_trade'
}

if(HBHost.host === 'market-h5.taqu.cn'){
  HBHost.apiHost = 'https://gw-w.jiaoliuqu.com/live_api';
  HBHost.tradeHost = 'https://gw-w.jiaoliuqu.com/live_trade';
}

const HBApi = {
  /**
  * 兑换列表
  * @param ticket_id   ticket_id
  * @param type   固定传4
  * @param page   固定传1
  */
  getExchangeList : '/v1/Prop/exchangeCenterList',
  /**
  * 兑换
  * @param ticket_id   ticket_id
  * @param group_id    	兑换组id
  */
  postExchange : '/v1/Prop/exchange',
  /**
  * 座驾墙
  * @param ticket_id   ticket_id
  */
  getCarList : '/v1/Activity/getAccountCarWall',
  /**
  * 主播榜单
  * @param id   通用活动ID
  * @param current_uuid   当前主播uuid
  */
  getLiveRanking : '/v1/RegularActivity/getHostRank',
  /**
  * 富豪榜单
  * @param id   通用活动ID
  * @param current_uuid   当前主播uuid
  */
  getMoneyRanking : '/v1/RegularActivity/getAccountRank',
  /**
  * 道具数量
  * @param ticket_id 
  */
  getToolsInfo : '/v1/Activity/getLoveMuseumPropInfo'
}

const HBApiTrade = {};

Object.keys(HBApi).forEach((val)=>{
  //拼接完整接口地址
  HBApiTrade[val] = HBHost.tradeHost + HBApi[val];
  HBApi[val] = HBHost.apiHost + HBApi[val];
})

//json转url参数
const parseParam = function(param){
  let str = Object.keys(param).map(function(key){
    return encodeURIComponent(key) + '=' + encodeURIComponent(param[key])
  }).join('&');
  return str;
}

//返回在vue模板中的调用接口
export default{
  get: function(apiName, requestData, fn){
    let url = `${HBApi[apiName]}?soa_come_from=ajax&${parseParam(requestData)}` ;
    // 灰度判断
    // eslint-disable-next-line no-undef
    if(HBUtils.getUrlParam('env') === '1'){
      //如果env=1则调用灰度环境的接口，服务端接口加？env=1这个参数
      url += '&env=1';
    }
    return jsonp(url, { param: 'jsonp_callback', prefix: 'doCallback' }, fn);
  },
  getTrade: function(apiName, requestData, fn){
    let url = `${HBApiTrade[apiName]}?soa_come_from=ajax&${parseParam(requestData)}` ;
    // 灰度判断
    // eslint-disable-next-line no-undef
    if(HBUtils.getUrlParam('env') === '1'){
      //如果env=1则调用灰度环境的接口，服务端接口加？env=1这个参数
      url += '&env=1';
    }
    return jsonp(url, { param: 'jsonp_callback', prefix: 'doCallback' }, fn);
  }
}