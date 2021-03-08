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
        },
        {
          name : 'attrs',
          path : '/index/attrs',
          component : ()=>import('@/pages/index/attrs.vue')
        },
        {
          name : 'vmodel',
          path : '/index/vmodel',
          component : ()=>import('@/pages/index/vmodel.vue')
        },
        {
          name : 'provide_inject',
          path : '/index/provide_inject',
          component : ()=>import('@/pages/index/provide_inject.vue')
        },
        {
          name : 'dynamic_component',
          path : '/index/dynamic_component',
          component : ()=>import('@/pages/index/dynamic_component.vue')
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