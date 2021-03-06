<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <br/>
  <p>{{msg}}</p>
  <combinationApi />
</template>

<script setup>
import combinationApi from 'comps/combination-api/index.vue';
import { defineProps, reactive } from 'vue'
//暂时不知道用来干什么的
//实现来看是传递给子组件的
defineProps({
  msg: String
})

//定义双向绑定数据
const state = reactive({ count: 0 })
</script>

<style scoped>
a {
  color: #42b983;
}
</style>