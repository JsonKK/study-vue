import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import animated from 'animate.css';
import './assets/style/reset.less';
import router from './router'
import './plugins/iview.js'
Vue.use(ViewUI);
Vue.use(animated);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
