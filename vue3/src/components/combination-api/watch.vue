<template>
  <section class="watch">
    <h1>监听器-watch</h1>
    <p>count1: {{data.count1}}</p>
    <p>count2: {{data.count2}}</p>
  </section>
</template>

<script>
import {reactive,watch} from 'vue';
export default {
  setup(){
    const data = reactive({count1:1,count2:1,timer:null});
    //监听data
    watch(data,()=>{
      console.log('watch监听data变化')
    })
    //监听单个属性变化
    watch(()=>{
      return data.count1
    },(newValue)=>{
      data.count2 = newValue * newValue;
    })
    data.timer = setInterval(()=>{
      data.count1++;
      if(data.count1 > 5){
        clearInterval(data.timer);
        data.timer = null;
      }
    },1000);
    return {data};
  }
}
</script>