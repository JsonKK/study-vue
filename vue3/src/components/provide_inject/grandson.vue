<template>
  <section class="grandson">
    <ul>
      <li class="todo-item" v-for="item in todoList">{{item}}</li>
    </ul>
  </section>
</template>

<script>
  export default {
    inject : ['todoList']
  }
</script>

<style lang="scss" scoped>
  
</style>