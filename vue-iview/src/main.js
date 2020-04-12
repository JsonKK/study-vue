import Vue from 'vue'
import App from './App.vue'
import './plugins/iview.js'
import router from './router'
import './style/icon-font.css';
// import './style/custom.less';
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
