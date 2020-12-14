import Vue from 'vue';
import Router from 'vue-router';
import Start from './start.js';
import Case from './case.js';
Vue.use(Router);

const routes = [
	{ path: '/', redirect: '/start/index' },
	Start,
	Case
];

const router = new Router({
	mode: 'history',
	base: __dirname,
	routes
});

export default router;

