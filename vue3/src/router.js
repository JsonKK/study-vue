import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/index',
      name: 'home',
      component: ()=>import('@/pages/index.vue'),
      redirect : '/index/combination-api',
      children : [
        {
          name : 'indexCombinationApi',
          path : '/index/combination-api',
          component : ()=>import('@/pages/index/combination-api.vue')
        },
        {
          name : 'indexTeleport',
          path : '/index/teleport',
          component : ()=>import('@/pages/index/teleport.vue')
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      redirect : '/index'
    }
　],
})


export default router