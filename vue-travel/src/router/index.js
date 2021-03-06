import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index.vue';
Vue.use(VueRouter)

  const routes = [
  {
    path : '/index',
    name : 'index',
    // component: () => import('@/views/index.vue'),
    component : index,
    meta:{
      title : '首页'
    }
  },
  {
    path : '/search',
    name : 'search',
    component: () => import('@/views/search.vue'),
    meta:{
      title : '城市检索'
    }
  },
  {
    path : '/detail/:id',
    name : 'detail',
    component: () => import('@/views/detail.vue'),
    meta:{
      title : '详情'
    }
  },
  {
    path : '/transition',
    name : 'transition',
    component: () => import('@/views/transition.vue'),
    meta:{
      title : '动画'
    }
  },
  {
    path: '*',
    redirect : '/index'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
  
})

export default router
