<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
   <router-view></router-view>
  
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue';
</script>

<style lang="scss">
@import url('assets/css/main.css');
body{
  overflow-y: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.input-box{
  padding: 10px;
  background: #ddd;
  input{
    border: 1px solid #888;
    padding: 0 4px;
  }
  button{
    padding: 0 10px;
    margin-left: 20px;
  }
}
</style>