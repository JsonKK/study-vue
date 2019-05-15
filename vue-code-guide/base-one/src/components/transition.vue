<template>
    <div id="">
        <button v-on:click="show = !show">
            Toggle
        </button>
        <transition name="fade">
            <p v-if="show">hello</p>
        </transition>
        <transition name="extend">
            <p v-if="show">world</p>
        </transition>
    </div>
</template>
 
<script>
    export default {
        name: '',
        props:{},
        components: {},
        data(){
            return{
                show : false
            }
        },
        mounted(){
            this.$parent.$data.text = '测试子组件传值11';
        },
        computed:{},
        methods:{},
        watch:{},
        filters:{}
    }
</script>
 
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.extend-transition,
.extend-enter-active, .extend-leave-active{
    transition: all .3 ease;
    height: 30px;
    padding: 10px;
    background-color : #eee;
    overflow: hidden;
}
.extend-enter,.extend-leave,
.extend-enter,.extend-leave-to{
    height: 0;
    padding: 0 10px;
    opacity: 0;
}
</style>
 