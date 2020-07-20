import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
if ('serviceWorker' in navigator) {
  window.onload = function(){
    console.log(2)
    navigator.serviceWorker.register('./service-worker.js?2').then(registration => {
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

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
