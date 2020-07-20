import Vue from 'vue'
import App from './App.vue'
import router from './router.js';
import api from './api';
// import './registerServiceWorker'

Vue.config.productionTip = false

//将API方法绑定到全局
Vue.prototype.$api = api;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
