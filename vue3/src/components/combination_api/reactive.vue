<template>
  <h1>数据响应式reactive</h1>
  <p>{{data.msg}}</p>
  <button @click="updateData">更新数据</button>
</template>

<script>
import {reactive} from 'vue';
export default {
  name : 'reactive',
  setup(){
    const msg = 'reactive message';
    const data = reactive({msg});
    const updateData = () => {
      data.msg = msg + new Date().getTime();
    }
    return {data,updateData}
  }
}
</script>