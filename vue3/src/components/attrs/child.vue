<template>
  <section class="child">
    <h1>子组件标题</h1>
    <p>{{msg}}</p>
    <button @click="send('子组件发来的信息')">子组件触发事件</button>
  </section>
  <br/>
  <grandson :="$attrs" />
</template>

<script>
import {computed} from 'vue';
// 引入孙子组件
import grandson from 'comps/attrs/grandson.vue';
export default {
  name : 'child',
  props : {
    toChild :{
      type : String
    },
    send : {
      type : Function
    }
  },
  components : {
    grandson
  },
  setup(props){
    const msg = computed(()=>{
      return '子组件渲染了:' + props.toChild
    })
    return {msg};
  }
}
</script>