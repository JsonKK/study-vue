import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path : '/index',
    name : 'index',
    meta : {
      title : '恋爱博物馆',
      keepAlive : true
    },
    component:()=>import('./views/index.vue')
  },
  {
    path : '/rule',
    name : 'rule',
    meta : {
      title : '规则',
      keepAlive : true
    },
    component:()=>import('./views/rule.vue')
  },
  {
    path : '/muesum-list',
    name : 'muesumList',
    meta : {
      title : '失恋博物馆',
      keepAlive : true
    },
    component:()=>import('./views/muesum-list.vue')
  },
  {
    path : '*',
    redirect : '/index'
  }
]

export default new Router({
  mode: 'hash',
  routes
})