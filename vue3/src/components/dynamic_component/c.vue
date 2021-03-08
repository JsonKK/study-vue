<template>
  <section >
    <h1>{{title}}</h1>
  </section>
</template>

<script>
  import {reactive,toRefs} from 'vue';
  export default {
    name: 'c component',
    setup(){
      const data = reactive({title : 'c component'});
      return {...toRefs(data)}
    }
  }
</script>

<style lang="scss" scoped>
  
</style>