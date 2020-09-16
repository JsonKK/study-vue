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

/* 
使用说明 

第一种方式
在main.js中引入
import Comfirm from './components/common/comfirm';
Vue.use(Comfirm);

在业务模块通过方法调用
this.$comfirm({
  // hideTitle 是否隐藏头部，默认为false
  // hideCancel 是否隐藏取消按钮，默认为false
  content : '内容字符串，可以是带html结构的',
  cancelText : '取消按钮文案，默认是取消',
  okText : '确认按钮文案，默认是确认',
  //成功回调，可以不设置
  onOk(){
    console.log('xixihaha ')
  },
  //取消回调，可以不设置
  onCancel(){
    console.log('取消')
  }
})

第二种方式
在需要使用的页面作为组件引用
import comfirm from '../../components/common/comfirm/comfirm.vue';
<comfirm title="标题" content="内容" v-model="showComfirm"></comfirm>

value 	对话框是否显示，可使用 v-model 双向绑定数据。 	Boolean 	false
title 	标题
content 内容
ok-text 	确定按钮文字 	String 	确定
cancel-text 	取消按钮文字 	String 	取消
on-ok 	点击确定的回调 	
on-cancel 	点击取消的回调
hide-title 隐藏标题
hide-cancel 是否隐藏取消按钮，默认为false
*/
