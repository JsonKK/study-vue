import Vue from 'vue';
//引入确认弹窗组件
import comfirm from './comfirm.vue';

// 创建一个vue子类
const ComfirmConstructor = Vue.extend(comfirm);

const Comfirm = ({
  title='',
  content='',
  hideTitle,
  hideCancel,
  cancelText,
  okText,
  onOk,
  onCancel
}={}) => {
  //实例化组件
  const ComfirmInstance = new ComfirmConstructor({
    data : {
      isComfirm : true
    }
  });

  ComfirmInstance.vm = ComfirmInstance.$mount();

  {
    //赋值外部传进来的数据
    //参数定义在组件内查看
    ComfirmInstance.title = title;
    ComfirmInstance.content = content;
    ComfirmInstance.hideTitle = Boolean(hideTitle);
    ComfirmInstance.hideCancel = Boolean(hideCancel);
    if(cancelText){
      ComfirmInstance.cancelText = cancelText + '';
    }
    if(okText){
      ComfirmInstance.okText = okText + '';
    }
    //赋值确定按钮回调事件
    if(onOk && typeof onOk === 'function'){
      ComfirmInstance.onOk = onOk;
    }
    //取消回调事件
    if(onCancel && typeof onCancel === 'function'){
      ComfirmInstance.onCancel = onCancel;
    }
  }

  // 控制组件的显隐
  ComfirmInstance.modelShow = true;

  //获取dom
  ComfirmInstance.dom = ComfirmInstance.vm.$el;
  //往body里增加弹窗
  document.body.appendChild(ComfirmInstance.dom);

  return ComfirmInstance.vm;
} 

export default{
  install : (vue) => {
    vue.prototype.$comfirm = Comfirm;
  }
}