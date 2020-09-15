<template>
  <div class="child">
    <p @click="tapPartents">子节点内容，被渲染函数引用</p>
    <i>{{name || '命个名字传进来把'}}</i>
    <slot></slot>
  </div>
</template>
 
<script>
  export default {
    props:{
      name : {
        type : String
      }
    },
    components: {},
    data(){return{}},
    mounted(){},
    computed:{},
    methods:{
      tapPartents(){
        this.$emit('self-click','子组件名称')
      }
    },
    watch:{},
    filters:{}
  }
</script>
 
<style></style>
 