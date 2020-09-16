import Vue from 'vue';
import toast from './toast.vue';

const ToastConstructor = Vue.extend(toast);

const Toast = ({content,location,duration}) => {
  const ToastInstance = new ToastConstructor({
    data : {
      content,
      location,
      duration
    }
  })

  ToastInstance.vm = ToastInstance.$mount();
  //控制组件显隐
  ToastInstance.show = true;
  //dom
  ToastInstance.dom = ToastInstance.vm.$el;
  // 往body里增加节点
  document.body.appendChild(ToastInstance.dom);

  return ToastInstance.vm;
}

export default{
  install : vue => {
    vue.prototype.$toast = Toast;
  }
}

/* 
使用方法 
在main.js中引入
import Toast from './components/common/toast';
Vue.use(Toast);

在业务模块通过方法调用
this.$toast({
  content : '吐司内容',
  //吐司持续时间，不写默认为3秒
  duration : 10000,
  //location 位置，默认为居中。可设置top、bottom
})

*/