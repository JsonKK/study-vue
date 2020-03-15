// 引入路由并且使用
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    history:true,
    routes : [
        {
            path : '/dom',
            component : () => import('../components/dom')
        },
        {
            path : '/formText',
            component : () => import('../components/formText')
        },
        {
            path : '/main',
            component : () => import('../components/main')
        },
        {
            path : '/event',
            component : () => import('../components/event')
        },
        {
            path:'*',redirect:'/main'
        }
    ]
});

export default router;