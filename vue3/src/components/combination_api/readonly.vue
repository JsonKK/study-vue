<template>
  <section class="readonly">
    <h1>readonly - “深层”的只读代理</h1>
    <p>original.count: {{original.count}}</p>
    <p>copy.count: {{copy.count}}</p>
  </section>
</template>

<script>
import {reactive,readonly} from 'vue';
export default {
  name : 'readonly',
  setup(){
    const original = reactive({count : 0});
    const copy = readonly(original);
    setTimeout(()=>{
      original.count = parseInt(Math.random() * 100);
      try{
        copy.count = 99;
        console.log('readonly 被赋值不会抛出异常，只是发出警告，此行代码能够被执行。')
      }
      catch(e){
        console.info(e);
      }
    },1000);

    return {original,copy};
  }
}
</script>