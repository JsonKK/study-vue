/*
 * @Author: chendongge 
 * @Date: 2019-07-16 17:29:24 
 * @Last Modified by: chendongge
 * @Last Modified time: 2020-04-27 10:14:09
 */
/**
 * MobileWeb 通用功能助手，包含常用的 UA 判断、页面适配。
 * 该 JS 应在 head 中尽可能早的引入，减少重绘。
 *
 * fixScreen 方法根据两种情况适配，该方法自动执行。
 * https://github.com/re54k/mobileweb-utilities/blob/master/util/mobile-util.js
 *      1. 定宽： 对应 meta 标签写法 -- <meta name="viewport" content="target-densitydpi=device-dpi,width=750">
 *         该方法会提取 width 值，主动添加 scale 相关属性值。
 *         注意： 如果 meta 标签中指定了 initial-scale， 该方法将不做处理（即不执行）。
 */
!(function (win, doc) {
  // 判断平台
  const UA = navigator.userAgent;
  const isAndroid = /android|adr/gi.test(UA);
  const isIos = /iphone|ipod|ipad/gi.test(UA) && !isAndroid; // 据说某些国产机的UA会同时包含 android iphone 字符
  const isMobile = isAndroid || isIos;  // 粗略的判断
  const devicePixelRatio = window.devicePixelRatio;
  const windowScreenWidth = window.screen.width;
  const windowScreenHeight = window.screen.height;
  const isIPhoneX = isIos && devicePixelRatio && devicePixelRatio === 3 && windowScreenWidth === 375 && windowScreenHeight === 812;
  const isIPhoneXSMax = isIos && devicePixelRatio && devicePixelRatio === 3 && windowScreenWidth === 414 && windowScreenHeight === 896;
  const isIPhoneXR = isIos && devicePixelRatio && devicePixelRatio === 2 && windowScreenWidth === 414 && windowScreenHeight === 896;
  let isInMyApp = false;
  const myProtocol = 'https://';
  const myDomain = '.jiaoliuqu.com';
  if(isIos){document.querySelector("html").classList.add("ios")}
  if(isIPhoneX||isIPhoneXSMax||isIPhoneXR){document.querySelector("html").classList.add("iphonex")}
  // 判断新旧内核
  let coreCode = '2';
  if (typeof TaquJSBridge === "object") {
    isInMyApp = true;
    coreCode = '1';
  }
  class HBUtils {
    constructor(opt){
      this.opt = opt;
    }
    get imgHost(){
      return {
        avatar_host: `${myProtocol}avatar01${myDomain}`,
        miscimg_host: `${myProtocol}miscimg01${myDomain}`,
        vox_host: `${myProtocol}vox01${myDomain}`,
        mallimg_host: `${myProtocol}mallimg01${myDomain}`,
        mv_host: `${myProtocol}mv01${myDomain}`,
        forumimg_host: `${myProtocol}forumimg01${myDomain}`,
      }
    }
    get platform(){
      return {
        isAndroid: isAndroid,
        isIos: isIos,
        isMobile: isMobile,
        isMyApp: isInMyApp
      }
    }
    fixScreen(){
      let metaEl = doc.querySelector('meta[name="viewport"]'),
        metaCtt = metaEl ? metaEl.content : '',
        matchScale = metaCtt.match(/initial\-scale=([\d\.]+)/),
        matchWidth = metaCtt.match(/width=([^,\s]+)/);
      function fillScale(scale) {
        return 'initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale;
      }
      if (isMobile && !matchScale && (matchWidth && matchWidth[1] != 'device-width')) { // 定宽
        let width = parseInt(matchWidth[1]),
          iw = win.innerWidth || width,
          ow = win.outerWidth || iw,
          sw = win.screen.width || iw,
          saw = win.screen.availWidth || iw,
          ih = win.innerHeight || width,
          oh = win.outerHeight || ih,
          ish = win.screen.height || ih,
          sah = win.screen.availHeight || ih,
          w = Math.min(iw, ow, sw, saw, ih, oh, ish, sah),
          scale = w / width;
        if (scale < 1) {
          metaEl.content = metaCtt + ',' + fillScale(scale);
        }
      }
    }
    getUrlParam(paraName) {
      const url = decodeURIComponent(window.location.href);
      paraName = paraName.replace(/[\[\]]/g, "\\$&");
      const regex = new RegExp("[?&]" + paraName + "(=([^&#]*)|&|#|$)");
      let results = regex.exec(url);
      if (!results||!results[2]) {
        return null;
      }
      return results[2].replace(/\+/g, " ");
    }
    identifyApp(){
      return new Promise(function(resolve) {
        const xo_type = win.HBUtils.getUrlParam('xo_type');// 新版他趣app会在链接上拼接xo_type=app参数
        if(xo_type === 'app'){// url带app特有参数，判定是他趣app内部
          isInMyApp = true;
          resolve(isInMyApp);
        }else{
          win.HBUtils.callHandler('getVersion','',function(){// 非他趣app进不来
            isInMyApp = true;
            resolve(isInMyApp);
          });
          if(!isInMyApp){// 非他趣app。android初始化比较慢,所以需要延迟判断防止android返回false
            let delayTime = 100;// ios 100ms
            if(isAndroid){
              delayTime = 100;// adnroid机制不一样，延迟500ms
            }
            setTimeout(() => {
              resolve(isInMyApp)
            }, delayTime);
          }
        }
      });
    }
    userInfoToObject(param){
      // userInfo信息string转成object
      const properties = param.split('&');
      let obj = {};
      properties.forEach(function (value) {
        let tup = value.split('=');
        obj[tup[0]] = tup[1];
      });
      return obj;
    }
    setupWebViewJavascriptBridge(callback){
      if (window.WebViewJavascriptBridge) {
        return callback(window.WebViewJavascriptBridge);
      }else{
        if (isIos) {
          //IOS
          if (window.WVJBCallbacks) {
            return window.WVJBCallbacks.push(callback);
          }
          window.WVJBCallbacks = [callback];
          const WVJBIframe = document.createElement('iframe');
          WVJBIframe.style.display = 'none';
          WVJBIframe.src = 'https://__bridge_loaded__';
          document.documentElement.appendChild(WVJBIframe);
          setTimeout(function () {
            document.documentElement.removeChild(WVJBIframe);
          }, 0);
        } else {
          //Android
          document.addEventListener('WebViewJavascriptBridgeReady', function () {
            if(!window.WebViewJavascriptBridge._messageHandler){
              WebViewJavascriptBridge.init(function (callbackFunc) {
                let data = {};
                callbackFunc(data);
              });
              return callback(window.WebViewJavascriptBridge);
            }else{
              return callback(window.WebViewJavascriptBridge);
            }
          }, false);
        }
      }
    }
    strToVar(str,data){
      let _data = data;
      let todoFun;
      if(_data!==''&&_data!==null&&_data!==undefined){
        todoFun = (new Function(`return TaquJSBridge.${str}('${data}')`))();
      }else{
        todoFun = (new Function(`return TaquJSBridge.${str}()`))();
      }
      return todoFun;
    }
    founderJSBridge(handlerName, data, callbackFunc){
      if(callbackFunc !== undefined){
        callbackFunc(this.strToVar(handlerName,data));
      }else{
        this.strToVar(handlerName,data);
      }
    }
    registerHandler(handlerName, handler){
      this.setupWebViewJavascriptBridge(function (bridge) {
        bridge.registerHandler(handlerName, handler);
      });
    }
    callHandler(handlerName, data, callbackFunc){
      if (coreCode === '1') {// 初代webview
        switch(handlerName){
          case 'showShareDialog':
            TaquJSBridge.showShareDialog(data.title,data.content,data.imageUrl,data.shareUrl);
          break;
          case 'showImage':
            TaquJSBridge.showImage(data.img,data.imgs);
          break;
          case 'requestAddToCart':
            TaquJSBridge.requestAddToCart(data.goods_attr_id,data.quantity);
          break;
          case 'setTopRightButton':
            TaquJSBridge.setTopRightButton(data.title,data.jumpUrl);
          break;
          case 'reportWebError':
            TaquJSBridge.reportWebError(data.title,data.info);
          break;
          default:
            this.founderJSBridge(handlerName, data, callbackFunc);
        }
      } else {// 二代webview
        this.setupWebViewJavascriptBridge(function (bridge) {
          isInMyApp = true;// 他趣app内
          if (callbackFunc !== undefined) {
            bridge.callHandler(handlerName, data, callbackFunc);
          } else {
            bridge.callHandler(handlerName, data);
          }
        })
      }
    }
  }
  win.HBUtils = new HBUtils();
})(window, document);
window.HBUtils.fixScreen();