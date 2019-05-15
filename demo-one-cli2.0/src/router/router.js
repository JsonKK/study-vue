import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

const home = { template: '<div>home主路由</div>' };
const first = { template: '<div>{{$route.name}} first子路由的id:{{$route.params.id}}</div>' };
const second = { template: '<div>{{$route.name}} second子路由的id:{{$route.params.id}}</div>' };
const third = { template: '<div>{{$route.name}} third子路由的路径:{{$route.params.third}} - {{$route.query.id}}</div>' }

const routerConfig = {
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: () => import('../App.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: home
        },
        {
          path: '/mini-first',
          name: 'mini-first',
          component: first
        },
        {
          path: '/mini-second',
          name: 'mini-second',
          component: second
        },
        {
          path: ':third',
          name: 'mini-third',
          component: third
        },
        {
          path:'/bbb/:id',
          redirect : res => {
            const {hash,params,query} = res;
            if(params.id == '001'){
              return '/'
            }
          }
        }
      ]
    },
    {
      //使用正则限定参数的类型，如果bbb不为整数则路径获取不到参数,包括aaa也不起作用
      path: '/hello/:aaa/:bbb(\\d+)',
      name: 'hello',
      component: () => import('../components/HelloWorld.vue')
    },
    {
      path: '/hi',
      name: 'hi',
      components: {
        default: () => import('../components/hiMan'),
        left: first,
        right: second
      }
      // component: () => import('../components/hiMan')
    }
  ]
};

const router = new VueRouter(routerConfig);

new Vue({
  router,
  template: `
        <div id="r">
          <h1>导航</h1>
          <p>this is {{$route.name}} name</p>
          <ol>
            <li><router-link to="/">/</router-link></li>
            <ul>
            <li><router-link :to="{name:'mini-first',params:{id:123}}">first子路由</router-link></li>
            <li><router-link :to="{name:'mini-second',params:{id:234}}">second子路由</router-link></li>
            <li><router-link :to="{path:'/usernamefsdfdsf',query:{id:334455}}">third子路由</router-link></li>
            <li><router-link to="/bbb/001">bbb</router-link></li>
            </ul>
            <li><router-link to="/hello/123/222">hello</router-link></li>
            <li><router-link :to="{name:'hi',params:{id:'heheda'}}">hi</router-link></li>
          </ol>
          <router-view></router-view>
          <router-view name="left" style="float:left;width:50%;height:300px;background-color:#ff6600;"></router-view>
          <router-view name="right" style="float:right;width:50%;height:300px;background-color:#fff600;"></router-view>
          
        </div>
    `
}).$mount('#app');

// 疑问
//如果在同级子节点跳转，输出$route就会报错
//Converting circular structure to JSON" 死循环
{/* <pre style="width:50%;">
  <code style="white-space: pre-wrap;">{{ $route}}</code>
</pre> */}