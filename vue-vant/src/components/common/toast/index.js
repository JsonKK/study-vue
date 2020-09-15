import Vue from 'vue';
import toast from './toast.vue';

const ToastConstructor = Vue.extend(toast);

const Toast = ({message,location}) => {
  const ToastInstance = new ToastConstructor({
    data :{
      message,
      location
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