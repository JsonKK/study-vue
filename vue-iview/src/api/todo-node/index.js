// 引入api处理通用方法
import {addBaseInfo} from '../utils.js';
//定义代理前缀
const proxy = '/node-seq';
//定义模块名称
const module = 'todoNode';
// 定义接口信息
let services = [
  {
    url : '/person/list',
    name : 'getPersonList',
    method : 'get'
  }
]

services = addBaseInfo(services,proxy,module);

export default services;