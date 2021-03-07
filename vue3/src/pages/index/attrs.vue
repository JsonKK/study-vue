<template>
  <h1>测试数据通过$attrs传递给孙子组件</h1>
  <h2>$attrs会一层一层拦截参数，例如send方法被子组件props定义了，在孙子组件里就无法使用</h2>
  <child :to-child="toChild" :to-grandson="toGrandson" :send="consoleInfo" @send="consoleInfo" />
</template>

<script>
import {reactive,toRefs} from 'vue';
// 引入孩子组件
import child from 'comps/attrs/child.vue';

export default {
  name : 'attrs',
  components : {child},
  setup(){
    const data = reactive({toChild : '传给子组件的信息',toGrandson : '传给孙子组件的信息'});
    const consoleInfo = function(msg){
      
      console.log(msg);
    }
    return {...toRefs(data),consoleInfo};
  }
}
</script>