import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/index',
      name: 'home',
      component: ()=>import('@/pages/index.vue'),
      redirect : '/index/combination_api',
      children : [
        {
          name : 'indexCombinationApi',
          path : '/index/combination_api',
          component : ()=>import('@/pages/index/combination_api.vue')
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
        },
        {
          name : 'ref',
          path : '/index/ref',
          component : ()=>import('@/pages/index/ref.vue')
        },
        {
          name : 'custom_bind',
          path : '/index/custom_bind',
          component : ()=>import('@/pages/index/custom_bind.vue')
        },
        {
          name : 'render',
          path : '/index/render',
          component : ()=>import('@/pages/index/render.vue')
        }
      ]
    },
    {
      path: '/case',
      name: 'case',
      component: ()=>import('@/pages/case.vue'),
      redirect: '/case/barrage',
      children: [
        {
          name: 'caseBarrage',
          path: '/case/barrage',
          component: ()=>import('@/pages/case/barrage.vue')
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