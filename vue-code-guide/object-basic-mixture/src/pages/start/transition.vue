<template>
    <div>
        <button @click="show = !show">show/hide</button>
        <transition name="jj">
            <p v-if="show">一段动画文案</p>
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
                show : true
            }
        },
        mounted(){
        },
        computed:{},
        methods:{},
        watch:{},
        filters:{}
    }
</script>
 
<style scoped>
    .jj-enter-active {
    transition: all .3s ease;
    }
    .jj-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .jj-enter, .jj-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
    }
</style>
 