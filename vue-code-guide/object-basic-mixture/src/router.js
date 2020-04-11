import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import start from './pages/start/base';
import startIndex from './pages/start/index';
import startAdvantage from './pages/start/advantage';
import root from './pages/start/root';
import menu from './pages/base/menu';
import footer from './pages/base/footer';
import users from '@/pages/start/users';
import transition from '@/pages/start/transition.vue';
import modelInput from '@/pages/start/model-input.vue';
import Page404 from '@/pages/error/404.vue';

import vuexIndex from '@/pages/vuex/index.vue';
import vuexBasic from '@/pages/vuex/basic.vue';
import vuexLife from '@/pages/vuex/life.vue';

const routes = [
    // { path: '/', component: Home },
    { path: '/', redirect: '/start/index' },
    { 
        path: '/start', component: start,
        children : [
            { path: 'index',name:'start_index',component: startIndex},
            { path: 'advantage',name:'start_advantage',component: startAdvantage},
            { path: 'root',name:'start_root',components: {menu,footer,default:root},alias:['/agogo']},
            //斜杆代表根目录
            // /:users/:sex => http://192.168.0.21:4000/#/wosssss/wowen?id=123&name=jsonKK
            // :users/:sex => http://192.168.0.21:4000/#/start/wosssss/wowen?id=123&name=jsonKK
            { path: ':users/:sex',component:users},
            { path: 'transition',component:transition},
            {path: 'model_input',component:modelInput}
        ]
    },
    {
        path:'/vuex',component:vuexIndex,children:[
            {path:'basic',component:vuexBasic},
            {path:'life',component:vuexLife},
        ]
    },
    {
        path : '*' , component : Page404 , 
        beforeEnter(to,from,next){
            next('/start/index')
        }
    }
]

const router = new Router({
    mode:'history',
    base: __dirname,
    routes // (缩写) 相当于 routes: routes
})

export default router