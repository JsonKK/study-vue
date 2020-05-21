import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect : '/guess-list'
  },
  {
    path: '/guess-list',
    name: 'guessList',
    component: ()=> import('../views/guess-list.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
