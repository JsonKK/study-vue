import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path : '/index',
    name : 'index',
    component: () => import('@/views/index.vue'),
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
    path: '*',
    redirect : '/index'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
