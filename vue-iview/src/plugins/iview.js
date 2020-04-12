import Vue from 'vue'
import ViewUI from 'view-design'
Vue.use(ViewUI)
import 'view-design/dist/styles/iview.css'

//以按需加载的方式加载
//需要在babel.config.js文件中引入以下代码片段配置
// "plugins": [["import", {
//   "libraryName": "view-design",
//   "libraryDirectory": "src/components"
// }]]

// import { Button, Table } from 'view-design';
// Vue.component('Button', Button);
// Vue.component('Table', Table);