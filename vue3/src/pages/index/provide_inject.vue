<template>
  <div class="main">
    <h1>当前任务项目{{todoLength}}</h1>
    <child />
  </div>
</template>

<script>
  import {reactive,toRefs,computed} from 'vue';
  import child from 'comps/provide_inject/child.vue';
  
  export default {
    name: 'provide_inject',
    components : {child},
    provide(){
      let that = this;
      return {
        todoList : this.todoList,
        changeList(item){
          that.todoList.push(item);
        }
      }
    },
    setup(){
      const data = reactive({todoList : []});
      const todoLength = computed(()=>data.todoList.length);
      return {...toRefs(data),todoLength};
    }
  }
</script>

<style lang="scss" scoped>
  
</style>