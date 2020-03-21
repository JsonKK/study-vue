<template>
    <div id="app">
        <section class="content">
            <guess-list></guess-list>
        </section>
    </div>
</template>

<script>
import guessList from './components/guess-list';

export default {
    name: 'App',
    components: {
        guessList
    }
}
</script>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #ccefde;
}
.content{
    min-width: 980px;
    width: 65%;
    box-shadow: 0 2px 10px #333333;
    height: 100vh;
    margin: 0 auto;
    background-color: #ffffff;
}
</style>
