<template>
  <div class="list-wrap" ref="wrap">
    <ul class="list" >
      <li v-for="index in 89" :key="'lazy'+index"  @click="doubleClick">
        <img v-lazy="imgArr[parseInt((index)/30)]" alt="" @dblclick="doubleClick">
        测试better-scroll插件{{index}}
      </li>
    </ul>
  </div>
</template>
 
<script>
  import { Cell, CellGroup } from 'vant';
  import BScroll from 'better-scroll'
  let that;
  let scroll;
  export default {
    name: 'betterScroll',
    props:{},
    components: {
      [Cell.name] : Cell, 
      [CellGroup.name] : CellGroup
    },
    data(){
      that = this;
      return{
        imgArr : [
          'https://avatar01.jiaoliuqu.com/avatar/1e9bc51f5867cdca490a4f9c37c639a6.png?imageView/2/w/88/interlace/1',
          'https://avatar01.jiaoliuqu.com/avatar/215810b1e5fdbcdfa936ed78495d56cf.png?imageView/2/w/88/interlace/1',
          'https://avatar01.jiaoliuqu.com/avatar/illegal_avatar.png?imageView/2/w/88/interlace/1'
        ]
      }
    },
    metaInfo () {
      return {
        title : this.$route.meta.title
      }
    },
    mounted(){
      this.initScroll();
    },
    computed:{},
    methods:{
      //初始化加载滚动
      initScroll(){
        let wrap = this.$refs.wrap;
        scroll = new BScroll(wrap,{
          pullDownRefresh : false,
          click: true,
          taps: true,
          dblclick : true,
          bounce: false
        });
      },
      //双击
      doubleClick(){
        if(scroll.enabled){
          scroll.disable();
        }
        else{
          scroll.enable();
        }
        // alert(scroll.enabled)
      }
    },
    watch:{}
  }
</script>
 
<style lang="less" scoped>
.list-wrap{
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.list{
  width: 80%;
  margin: 0 auto;
  
  li{
    height: 80px;
    line-height: 90px;
    background-color: #fff;
    border-radius: 14px;
    margin-top: 14px;
    padding: 0 14px;
    font-size: 16px;
    color: #636363;
  }
  img{
    width: 40px;
    height: 40px;
    vertical-align: middle;
  }
}
</style>
 