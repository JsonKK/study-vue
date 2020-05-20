import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.css'
// 解决一像素边框，在不同倍数的手机屏幕上不一致效果问题
import '@/assets/css/border.css'
//解决移动端点击有300ms的延时问题
import fastClick from 'fastclick';
fastClick.attach(document.body);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => { 
    return h(App)
  }
}).$mount('#app')
