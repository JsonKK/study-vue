<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <br/>
  <p>{{state.msg}}</p>
  <combinationApi :count="state.count" :msg="state.msg" />
</template>

<script setup>
import combinationApi from 'comps/combination_api/index.vue';
import { defineProps, reactive ,provide, ref } from 'vue'
//暂时不知道用来干什么的
//实现来看是传递给子组件的
defineProps({
  msg: String
})

//定义双向绑定数据
const state = reactive({ count: 0 ,msg : '组合api的段落描述',childMsg : '提供给组件inject使用的信息'});
const childMsg = ref('提供给组件inject使用的信息')
provide('childMsg',childMsg);

setTimeout(()=>{
  state.msg = '组合api的段落描述++';
  childMsg.value = '提供给组件inject使用的信息++';
},100)
</script>

<style scoped>
a {
  color: #42b983;
}
</style>