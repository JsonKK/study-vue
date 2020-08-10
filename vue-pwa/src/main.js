import Vue from 'vue'
import App from './App.vue'
import router from './router'

import api from './api';
// import './registerServiceWorker'

Vue.config.productionTip = false

if ('serviceWorker' in navigator) {
  window.onload = function(){
    navigator.serviceWorker.register('./sw.js').then(registration => {
      console.log(registration);
      console.log(
        'ServiceWorker registration successful with scope: ',
        registration.scope
      )
    })
    .catch(err => {
      console.log('ServiceWorker registration failed: ', err)
    });
  }
}

//将API方法绑定到全局
Vue.prototype.$api = api;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')