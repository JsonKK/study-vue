<template>
  <section class="grandson">
    <h1>孙子组件标题</h1>
    <p>{{msg}}</p>
    <button @click="sendP">孙子组件发来的信息</button>
  </section>
</template>

<script>
import {computed} from 'vue';
export default {
  name : 'grandson',
  props : {
    toGrandson : {
      type : String
    },
    send : {
      type : Function
    }
  },
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