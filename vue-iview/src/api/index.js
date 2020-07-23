//引入异步处理工具
import axios from 'axios';
//导入数据处理工具
import _ from 'underscore';
//导入接口地址
import todoNode from './todo-node';
// 数组接口合并
const services = [...todoNode]

//请求方法集合
//url : 请求路径
//modelName : 模块名称
//data : 传递数据
const api = function(name,module,data){
  let ajaxObj = _.findWhere(services,{name,module})
  //判断接口对象是否存在
  if(!name || !module || !ajaxObj){
    return false;
  }
  
  return new Promise((resolve,reject)=>{
    axios({
      method: ajaxObj.method,
      url: ajaxObj.path,
      data: data || {}
    }).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  })
}



//对外暴露请求方法
export default {api};