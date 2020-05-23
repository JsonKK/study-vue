import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.css'
// 解决一像素边框，在不同倍数的手机屏幕上不一致效果问题
import '@/assets/css/border.css'
//解决移动端点击有300ms的延时问题
import fastClick from 'fastclick';
//引入字体图标库
import '@/assets/css/iconfont.css';
//引入主要样式
import '@/assets/css/main.scss';
fastClick.attach(document.body);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => { 
    return h(App)
  }
}).$mount('#app')
