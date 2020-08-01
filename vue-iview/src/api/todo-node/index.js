// 引入api处理通用方法
import {addBaseInfo} from '../utils.js';
//定义代理前缀
const proxy = '/node-seq';
//定义模块名称
const module = 'todoNode';
// 定义接口信息
let services = [
  //获取任务列表
  {
    url : '/task/list',
    name : 'postTaskList',
    method : 'post'
  },
  // 修改任务状态
  {
    url : '/task/edit/:id/:status',
    name : 'putTaskEdit',
    method : 'put'
  },
  //删除任务
  {
    url : '/task/delete/:id',
    name : 'deleteTask',
    method : 'delete'
  },
  //增加任务
  {
    url : '/task/create',
    name : 'createTask',
    method : 'post'
  },
  //修改任务
  {
    url : '/task/edit',
    name : 'editTask',
    method : 'post'
  },
]

services = addBaseInfo(services,proxy,module);

export default services;