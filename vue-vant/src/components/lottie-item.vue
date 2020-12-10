<template>
  <div class="item-box" ref="lottieItem"></div>
</template>
 
<script>
  import lottie from 'lottie-web';
  export default {
    props:{
      show : {
        type : Boolean
      }
    },
    components: {},
    data(){
      return{
        anim : false
      }
    },
    mounted(){
      
    },
    computed:{},
    watch:{
      show : {
        handler(value){
          this.destoryAnim();
          if(value){
            this.$nextTick(()=>{
              this.move();
            })
          }
        },
        immediate : true
      }
    },
    methods:{
      destoryAnim(){
        if(this.anim && this.anim.destroy){
          this.anim.destroy();
        }
      },
      move(){
        let element = this.$refs['lottieItem'];
        this.anim = lottie.loadAnimation({
          container: element, // the dom element
          renderer: 'html',
          loop: true,
          prerender: true,
          autoplay: true,
          path: '/cross-data.json',
          onComplete(){
            console.log(1)
          }
        });
      }
    }
  }
</script>
 
<style lang="less" >
.item-box{
  width: 150px;
  height: 250px;
  background: white;
  margin: 30px auto;
  position: relative;
}
img{
  max-width: 100%;
}
</style>
 