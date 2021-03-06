import Vue from 'vue'
import App from './App.vue'
import router from './router';
import Meta from 'vue-meta';
import VueLazyLoad from 'vue-lazyload';
import Toast from './components/common/toast';
import Comfirm from './components/common/comfirm';
Vue.use(Meta)
Vue.use(Toast);
Vue.use(Comfirm);
Vue.use(VueLazyLoad)
Vue.config.productionTip = false
// import vueTabslider from 'vueTabslider.js'
// Vue.use(vueTabslider)    

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
