import confirmVue from './comfirm.vue';
import Vue from 'vue';
//参数配置
const defaults = {
    show:false,
    title:'',
    text:'',
    button:[]

};
let confirmVueLoading;
const confirmVueConstructor = Vue.extend(confirmVue);
//这里关闭的时候返回promise
confirmVueConstructor.prototype.close = function() {
  debugger
    var vm=this;
    confirmVueLoading=null;
    var promise=new Promise(function(resolve,reject){
      if (vm.$el && vm.$el.parentNode) {
          vm.$el.parentNode.removeChild(vm.$el);
      }
      resolve();
      vm.$destroy();
      vm.show = false;
    })
    return promise
};
const confirmBox = (options = {}) => {
  if (Vue.prototype.$isServer) return;
  console.log(options);
  options = Object.assign({}, defaults, options);

  let parent = document.body ;
  //没有关闭不允许新开
  if(confirmVueLoading){
    return confirmVueLoading
  }
  let instance = new confirmVueConstructor({
    el: document.createElement('div'),
    data: options
  });

  parent.appendChild(instance.$el);
  Vue.nextTick(() => {
    instance.show = true;
  });
  confirmVueLoading=instance
  return instance;
};

export default confirmBox;