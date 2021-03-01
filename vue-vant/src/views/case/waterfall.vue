<template>
  <div class="content">
    <h3 class="center">css实现瀑布流</h3>
    <br/>
    <!-- 使用flow布局无法实现瀑布流 -->
    <ul class="list hide">
      <li class="list-item" v-for="(item,index) in pics" :key="index">
        <img :src="item" alt="">
      </li>
    </ul>

    <ul class="list2">
      <li class="list-item" v-for="(item,index) in pics" :key="index">
        <img :src="item" alt="">
      </li>
    </ul>
  </div>
</template>
 
<script>
  const normalPre = '@/assets/images/double-eleven/';
  export default {
    name: 'waterfall',
    props:{},
    components: {},
    data(){
      return{
        pics : [
          require(`@/assets/images/double-eleven/1.jpg`),
          require(`@/assets/images/double-eleven/51.jpg`),
          require(`@/assets/images/double-eleven/52.jpg`),
          require(`@/assets/images/double-eleven/3.jpg`),
          require(`@/assets/images/double-eleven/4.jpg`),
          require(`@/assets/images/double-eleven/5.jpg`),
          require(`@/assets/images/double-eleven/53.jpg`),
        ]
      }
    },
    mounted(){},
    computed:{},
    methods:{}
  }
</script>
 
<style lang="less">
.hide{
  display: none !important;
}
img{
  width: 100%;
  height: auto;
}
.list{
  display: flex;
  flex-wrap: wrap;
  .list-item{
    width: 50%;
    padding: 14px;
    box-sizing: border-box;
  }
}
.list2{
  width: 100%;
  columns: 2;
  column-gap: 10px;
  box-sizing: border-box;
  padding: 0 10px;
  .list-item{
    width: 100%;
    font-size: 0;
    margin-bottom: 10px;
  }
}

</style>
 