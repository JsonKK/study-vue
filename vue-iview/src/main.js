import Vue from 'vue'
import App from './App.vue'
import './plugins/iview.js'
import router from './router'
import './style/icon-font.css';
//引入请求工具
import service from './api';
// import './style/custom.less';
Vue.config.productionTip = false

//将API方法绑定到全局
Vue.prototype.$api = service.api;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
