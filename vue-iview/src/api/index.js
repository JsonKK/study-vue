//引入异步处理工具
import axios from 'axios';
//导入数据处理工具
import _ from 'underscore';
//导入接口地址
import todoNode from './todo-node';
//引入vue实例
import Vue from 'vue';
const vue = new Vue();
// 数组接口合并
const services = [...todoNode]

//私有方法
const privateMethod = {
  //处理动态路由
  disposeActiveUrl(url,params){
    if(!_.isString(url) || !_.isObject(params)){
      return url;
    }
    for(let key in params){
      let reg = new RegExp(`:${key}`,'g');
      url = url.replace(reg , params[key]);
    }
    return url;
  } 
}

//请求方法集合
//url : 请求路径
//modelName : 模块名称
//data : 传递数据
//hideErrorToast : 隐藏报错提示
const api = function(name,module,data,{hideErrorToast,params,otherParams}={}){
  let ajaxObj = _.findWhere(services,{name,module});
  return new Promise((resolve,reject)=>{
    //判断接口对象是否存在
    if(!name || !module || !ajaxObj){
      reject('缺少必要参数')
      return;
    }

    let sendData = {
      method: ajaxObj.method,
      url: ajaxObj.path,
      data: data || {}
    }

    if(params){
      sendData.params = params;
    }

    if(otherParams){
      sendData.url = privateMethod.disposeActiveUrl(sendData.url,otherParams);
    }
  
  
    axios(sendData).then((res)=>{
      let {data} = res;
      resolve(data || {});
    }).catch((err)=>{
      reject(err);
      if(!hideErrorToast){
        vue.$Notice.error({
          title : '开小差，有点忙'
        })
      }
    })
  })
}



//对外暴露请求方法
export default {api};