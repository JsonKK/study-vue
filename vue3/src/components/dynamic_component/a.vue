<template>
  <section >
    <h1>{{title}}</h1>
    <section class="input-box">
      <input type="text" v-model="text" />
    </section>
  </section>
</template>

<script>
  import {reactive,toRefs} from 'vue';
  export default {
    name: 'a component',
    setup(){
      const data = reactive({title : 'a component',text:''});
      return {...toRefs(data)}
    }
  }
</script>

<style lang="scss" scoped>
  
</style>