<template>
  <section class="watchEffect">
    <h1>watchEffect - 侦听器</h1>
    <p>{{count}}</p>
  </section>
</template>

<script>
import {reactive,watchEffect,toRefs} from 'vue';
export default {
  setup(){
    const data = reactive({count:0,timer:null});
    //默认会执行一次
    watchEffect(()=>{
      console.log('监视器函数watchEffect 监控count变化：'+data.count);
    })
    data.timer = setInterval(()=>{
      data.count++;
      if(data.count>5){
        clearInterval(data.timer);
        data.timer = null;
      }
    },1000);
    return {...toRefs(data)};
  }
}
</script>