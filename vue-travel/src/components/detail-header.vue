<template>
  <div class="detail-header">
    <div class="iconfont btn-back" v-show="showAbs" @click="$router.back(-1)">&#xe629;</div>
    <div class="header-fixed" :style="opacityStyle" v-show="!showAbs">
      <div class="iconfont header-fixed-back" @click="$router.back(-1)">&#xe629;</div>
      景点详情
    </div>
  </div>
</template>
 
<script>
  export default {
    name: 'detail-header',
    props:{},
    components: {},
    data(){
      return{
        showAbs: true,
        opacityStyle: {
          opacity: 0
        }
      }
    },
    mounted(){
      window.addEventListener('scroll',this.handleScroll);
    },
    destroyed(){
      //组件销毁时候注销滚动渐隐事件
      window.removeEventListener('scroll',this.handleScroll);
    },
    computed:{},
    methods:{
      handleScroll(){
        console.log(this.$route.params.id)
        let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
        if(top > 60){
          this.showAbs = false;
          let opacity = top / 140;
          opacity = opacity > 1 ? 1 : opacity;
          this.$set(this.opacityStyle,'opacity',opacity);
        }
        else{
          this.showAbs = true
        }
      }
    }
  }
</script>
 
<style lang="scss" scoped>
@import 'styles/mixin.scss';
.btn-back{
  width: 70px;
  height: 70px;
  line-height: 70px;
  color: #fff;
  font-size: 32px;
  text-align: center;
  background-color: rgba(0,0,0,.8);
  border-radius: 100%;
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 2;
}
.header-fixed{
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  background: $bgColor;
  font-size: 32px;
}
.header-fixed-back{
  position: absolute;
  top: 0;
  left: 0;
  width: 64px;
  text-align: center;
  font-size: 40px;
  color: #fff;
}
      
</style>
 