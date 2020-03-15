<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <!-- 使用name属性传参 -->
        <router-view></router-view>
        
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'App',
    components: {
        // HelloWorld
    },
    methods: {
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}

/*这里和上面第一个动画效果一样，只不过为了使得效果更明显，时间改为1s*/
  .fade-enter-active, .fade-leave-active{
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }

</style>
