<template>
  <section class="watch">
    <h1>监听器-watch</h1>
    <p>count1: {{data.count1}}</p>
    <p>count2: {{data.count2}}</p>
    <p>{{childMsg}}</p>
  </section>
</template>

<script>
import {reactive,watch,toRefs,toRef,inject,ref} from 'vue';
export default {
  props : {
    count : {
      type : Number
    }
  },
  setup(props){
    const data = reactive({count1:1,count2:1,timer:null});
    // 使用 `toRefs` 创建对prop的 `count` property 的响应式引用
    const {count} = toRefs(props);
    //监听外部count变化
    watch(count,(value)=>{
      console.log('watch props count:',value);
    })
    const msg = toRef(props,'msg');
    watch(msg,()=>{
      alert(1)
      console.log('watch props msg:',msg);
    });
    const childMsg = ref(inject('childMsg'));
    //只有数据发生改变的时候才会触发watch
    //监听data
    watch(data,()=>{
      console.log('watch监听data变化'+data.count1)
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
    return {data,childMsg};
  }
}
</script>