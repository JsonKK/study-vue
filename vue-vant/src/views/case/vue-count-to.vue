<template>
  <div class="content">
    <template v-for="(item,index) in list" >
      <countTo class="number-item" :startVal='0' :endVal='item' :duration='(list.length - index)*500' :key="index"></countTo>
      <span class="hide" :key="index+'hide'">{{(list.length)}}</span>
    </template>
  </div>
</template>
 
<script>
  import countTo from 'vue-count-to';
  export default {
    name: 'vue-count-to',
    props:{},
    components: {
      countTo
    },
    data(){
      return{
        list : []
      }
    },
    mounted(){
      this.numbers();
      this.animateNumbers();
    },
    computed:{
      
    },
    methods:{
      //数字列表
      numbers(){
        let arr = [];
        for(let i = 0; i < 10; i++){
          arr.push(parseInt(Math.random()*10));
        }
        console.log(arr)
        this.list = arr;
      },
      //定时改变数值
      animateNumbers(){
        setInterval(()=>{
          this.numbers();
        },5000)
      }
    }
  }
</script>
 
<style lang="less" scoped>
.content{
  background: #ccc;
  height: 100vh;
  display: flex;
  justify-content: space-around;
}
.hide{
  display: none;
}
.number-item{
  font-size: 24px;
  color: gold;
  width: 7%;
  height: 100px;
  line-height: 100px;
}
</style>
 