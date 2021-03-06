<template>
  <section class="ref">
    <h1>单值数组局响应式ref</h1>
    <p>{{msg}}</p>
    <button @click="updateMessage">更新数据</button>
  </section>
</template>

<script>
import {ref} from 'vue';

export default {
  name : 'ref',
  setup(){
    const basicMsg = 'hello ref'
    const msg = ref(basicMsg);
    const updateMessage = ()=>{
      msg.value = basicMsg + (new Date()).toUTCString();
    }
    return {msg,updateMessage};
  }
}
</script>