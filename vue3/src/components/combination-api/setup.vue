<template>
  <div>
    <h1>setup - 组件内使用 Composition API 的入口点</h1>
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  props:{
    text : {
      type : String,
      default : '组件内部的默认值'
    }
  },
  //setup的执行生命周期优先于beforeCreate
  setup(props,context){
    console.log('在setup中渲染的内容',props);
    //使用context提交事件
    context.emit('emit',{msg:'get from setup emit'});
  },
  beforeCreate(){
    console.log('setup 里的beforeCreate');
  }
}
</script>