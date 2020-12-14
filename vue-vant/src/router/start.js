export default {
  path: '/start',
  component: { render: c => c('router-view') },
  children: [
    {
      path: 'index', name: 'start_index', component: () => import('@/views/start/index.vue'),
      meta: {
        title: '首页'
      }
    }
  ]
}