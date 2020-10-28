import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const routes = [
	{ path: '/', redirect: '/start/index' },
	{
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
	},
	{
		path: '/case',
		component: { render: c => c('router-view') },
		children: [
			{
				path: 'lazy-list', name: 'layz_list', component: () => import('@/views/case/lazy-list.vue'),
				meta: {
					title: '懒加载测试'
				}
			},
			{
				path: 'better-scroll', 
				name: 'betterScroll', 
				component: () => import('@/views/case/better-scroll.vue'),
				meta: {
					title: '滚动插件使用'
				}
			},
			{
				path: 'five', 
				name: 'five', 
				component: () => import('@/views/case/five.vue'),
				meta: {
					title: '五指棋'
				}
			},
			{
				path: 'vue-tabslider', 
				name: 'vue-tabslider', 
				component: () => import('@/views/case/vue-tabslider.vue'),
				meta: {
					title: 'tab滑动插件'
				}
			},
			{
				path: 'vue-render-path', 
				name: 'vue-render-path', 
				component: () => import('@/views/case/vue-render-path.vue'),
				meta: {
					title: '渲染函数'
				}
			},
			{
				path: 'img-distance', 
				name: 'img-distance', 
				component: () => import('@/views/case/img-distance.vue'),
				meta: {
					title: '解决h5图片间隙问题'
				}
			},
			{
				path: 'img-distance', 
				name: 'img-distance', 
				component: () => import('@/views/case/img-distance.vue'),
				meta: {
					title: '解决h5图片间隙问题'
				}
			},
			{
				path: 'lottie', 
				name: 'lottie', 
				component: () => import('@/views/case/lottie.vue'),
				meta: {
					title: 'lottie案例'
				}
			},
			{
				path : 'sudoku',
				name : 'sudoku',
				component : () => import('@/views/case/sudoku'),
				meta : {
					title : 'sudoku'
				}
			}
		]
	}
];

const router = new Router({
	mode: 'history',
	base: __dirname,
	routes
});

export default router;

