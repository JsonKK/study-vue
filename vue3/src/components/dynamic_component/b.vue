<template>
  <section >
    <h1>{{title}}</h1>
  </section>
</template>

<script>
  import {reactive,toRefs} from 'vue';
  export default {
    name: 'b component',
    setup(){
      const data = reactive({title : 'b component'});
      return {...toRefs(data)}
    }
  }
</script>

<style lang="scss" scoped>
  
</style>