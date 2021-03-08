<template>
  <div class="main">
    <h1>my name is : {{name}}</h1>
    <!-- 标签上同时绑定两个v-model -->
    <child v-model:lastName="lastName" v-model:firstName="firstName" />
  </div>
</template>

<script>
  import {reactive,toRefs,computed} from 'vue';
  import child from 'comps/vmodel/child.vue';
  export default {
    name: 'vmodel',
    components : {child},
    setup(){
      const data = reactive({
        lastName : 'lastName',
        firstName : 'firstName'
      });
      const name = computed(()=>{
        return data.lastName + ' ' + data.firstName;
      })
      return {...toRefs(data),name};
    }
  }
</script>

<style lang="scss" scoped>
  
</style>