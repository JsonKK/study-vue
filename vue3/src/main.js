import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
//定义全局数据
app.config.globalProperties.$userInfo = {
  userId : parseInt(Math.random() * 899999) + 100000
}
//通过provide挂载数据
app.provide('$testUserInfo',{
  testId : parseInt(Math.random() * 899999) + 100000
});
app.use(router)
app.mount('#app')
