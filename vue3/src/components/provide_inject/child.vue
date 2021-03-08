<template>
  <section class="child">
    <div class="input-box">
      <input type="text" v-model.trim="things" placeholder="输入事项" name="" id="">
      <button @click="submitItem">增加</button>
    </div>
    <grandson />
  </section>
</template>

<script>
  import {reactive,toRefs} from 'vue';
  import grandson from 'comps/provide_inject/grandson.vue';
  export default {
    inject:['changeList'],
    setup(){
      const data = reactive({things : ''});
      return {...toRefs(data)};
    },
    components : {grandson},
    methods : {
      submitItem(){
        let {changeList,things} = this;
        if(!things){
          return;
        }
        changeList(things);
        this.things = '';
      }
    }
    
  }
</script>

<style lang="scss" scoped>

</style>