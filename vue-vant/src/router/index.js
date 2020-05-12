import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const routes = [
    {path : '/', redirect : '/start/index'},
    {
        path : '/start' , 
        component: { render : c=>c('router-view')},
        children : [
            { 
                path : 'index' , name : 'start_index' , component : ()=> import('@/views/start/index.vue'),
                meta : {
                    title : '首页'
                }
            }
        ]
    },
    {
        path : '/case' , 
        component: { render : c=>c('router-view')},
        children : [
            { 
                path : 'lazy-list' , name : 'layz_list' , component : ()=> import('@/views/case/lazy-list.vue'),
                meta : {
                    title : '懒加载测试'
                }
            }
        ]
    }
];

const router = new Router({
    mode : 'history',
    base : __dirname,
    routes
});

export default router;

