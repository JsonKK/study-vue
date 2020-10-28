<template>
  <div class="page-content" style="background-color:#ccc; margin: 0px;height: 100%; font-family: sans-serif;font-size: 10px">
    <div class="circle" ref="lottie" id="bodymovin"></div>
  </div>
</template>
 
<script>
  import lottie from 'lottie-web';
  import bodymovin from 'bodymovin';
  export default {
    name: 'lottie',
    props:{},
    components: {},
    data(){
      return{
        
      }
    },
    mounted(){
      this.move();
    },
    computed:{},
    methods:{
      move(){
        let element = this.$refs['lottie'];
        let anim = lottie.loadAnimation({
          wrapper: element, // the dom element
          animType: 'html',
          loop: true,
          prerender: true,
          autoplay: true,
          path: '/cross-data.json'
        });
        // setTimeout(()=>{
        //   anim.goToAndStop(1100)
        // },1000)
        
      }
    }
  }
</script>
 
<style lang="less" scoped>
  .page-content{
    min-height: 200px;
    // &:before{
    //   content: '';
    //   display: table;
    // }
    &:before{
      content: '.';
      display:block;
      height:0;
      visibility:hidden;
    }
  }

  .circle{
    width:100%;height:100%;
    background-color:#333;
    min-height: 56px;
    margin-top: 20px;
    position: relative;
  }
</style>
 