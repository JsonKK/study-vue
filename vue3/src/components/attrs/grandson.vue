<template>
  <!-- 显示展示传给孙子子组件的内容 -->
  <section class="grandson" :="$attrs">
    <h1>孙子组件标题</h1>
    <p>{{msg}}</p>
    <button @click="sendP" >孙子组件发来的信息</button>
  </section>
  <grandsonTwo :="$attrs"/>
</template>

<script>
import {computed} from 'vue';
import grandsonTwo from 'comps/attrs/grandson_two.vue';
export default {
  name : 'grandson',
  inheritAttrs: true,
  props : {
    toGrandson : {
      type : String
    },
    send : {
      type : Function
    }
  },
  components : {grandsonTwo},
  setup(props,context){
    console.log(props)
    const msg = computed(()=>{
      return '孙子组件渲染了:' + props.toGrandson;
    })

    const sendP = function(){
      let msg = '孙子组件发来的信息';
      if(typeof props.send === 'function'){
        props.send(msg);
      }
      else{
        context.emit('send',msg);
      }
    }
    return {msg,sendP};
  }
}
</script>