import Vue from 'vue'
import App from './App.vue'
import router from './router';
import Meta from 'vue-meta';
import VueLazyLoad from 'vue-lazyload';
Vue.use(Meta)
Vue.use(VueLazyLoad)
Vue.config.productionTip = false
// import vueTabslider from 'vueTabslider.js'
// Vue.use(vueTabslider)    

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
