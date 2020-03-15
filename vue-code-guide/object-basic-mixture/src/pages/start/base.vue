<template>
    <div>
      <button @click="_back">后退</button>
      <button @click="_next">前进</button>
      <ul>
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <li>
            <router-link to="/">home</router-link>
        </li>
        <li>
            <router-link :to="{name:'start_advantage',params:{id:123}}" >战略优势</router-link>
        </li>
        <li>
            <router-link to="/start/root">Go to root</router-link>
        </li>
        <router-link :to="{path:'/start/wosssss/wowen',query:{id:123,name:'jsonKK'}}">to user</router-link>
        <li>
            <router-link :to="{path:'/agogo',query:{id:123,name:'jsonKK'}}">other root</router-link>
        </li>
        <li>
            <router-link :to="{path:'/start/transition',query:{id:123,name:'jsonKK'}}">transition</router-link>
        </li>
      </ul>
      <h2>{{$route.name}}</h2>
      <transition :name="transitionName" mode="out-in">
          <router-view></router-view>
      </transition>
      <transition :name="transitionName" mode="out-in">
          <router-view name="menu"></router-view>
      </transition>
      <transition :name="transitionName" mode="out-in">
          <router-view name="footer"></router-view>
      </transition>
        
    </div>
</template>
<script>
    export default {
        props: {},
        components: {},
        data(){
            return { 
                transitionName : ''
            }
        },
        mounted(){
        },
        methods : {
          _back(){
            this.$router.go(-1)
          },
          _next(){
            this.$router.go(1)
          }
        },
        watch : {
            '$route'(to){
                console.log(to);
                if(to.path == '/start/advantage'){
                    this.transitionName = 'move';
                }
                else{
                    this.transitionName = 'bounce';
                }
            }
        }
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

.move-enter-active {
  animation: move-in .5s;
}
.move-leave-active {
  animation: move-in .5s reverse;
}
@keyframes move-in {
  0% {
    transform: translateX(40px);
    opacity: 0;
  }
  50% {
    transform: translateX(20px);
    opacity: 0.5;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>