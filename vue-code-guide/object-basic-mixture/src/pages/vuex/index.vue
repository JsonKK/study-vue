<template>
    <div>
        <button @click="_back">后退</button>
        <button @click="_next">前进</button>
        <ul>
            <li><router-link to="/vuex/basic">基础语法</router-link></li>
            <li><router-link to="/vuex/life">生命周期</router-link></li>
        </ul>
        <transition name="bounce" mode="out-in">
          <router-view></router-view>
        </transition>
    </div>
</template>
 
<script>
    export default {
        name: '',
        props:{},
        components: {},
        data(){return{}},
        mounted(){},
        computed:{},
        methods:{
            _back(){
                this.$router.go(-1)
            },
            _next(){
                this.$router.go(1)
            }
        },
        watch:{},
        filters:{}
    }
</script>
 
<style scoped>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

</style>
 