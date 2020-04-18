import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const routes = [
    {path : '/', redirect : '/start/index'},
    {
        path : '/start' , 
        component: { render : c=>c('router-view')},
        children : [
            { path : 'index' , name : 'start_index' , component : ()=> import('@/views/start/index.vue')}
        ]
    }
];

const router = new Router({
    mode : 'history',
    base : __dirname,
    routes
});

export default router;

