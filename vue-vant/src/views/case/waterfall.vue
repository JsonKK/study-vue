<template>
  <div class="content">
    <h3 class="center">css实现瀑布流</h3>
    <br/>
    <!-- 使用flow布局无法实现瀑布流 必须固定高度，顺序是先从上到下，再从左到右-->
    <ul class="list hide">
      <li class="list-item" v-for="(item,index) in pics" :key="index">
        <img :src="item" alt="">
      </li>
    </ul>
    <!-- 如果数据为固定的，并且不大考虑顺序问题，可以使用 -->
    <ul class="list2 hide">
      <li class="list-item" v-for="(item,index) in pics" :key="index">
        <img :src="item" alt="">
      </li>
    </ul>

    <ul class="list3 hide">
      <li class="list-item" v-for="(item,index) in pics" :key="index">
        <img :src="item" alt="">
      </li>
    </ul>

    <h3 class="center">js实现瀑布流</h3>
    <br/>
    <div class="list-box">
      <ul class="list-js" ref="listLeft">
        <li class="list-item" v-for="(item,index) in picsLeft" :key="index">
          <img :src="item" alt="">
        </li>
      </ul>
      <ul class="list-js" ref="listRight">
        <li class="list-item" v-for="(item,index) in picsRight" :key="index">
          <img :src="item" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>
 
<script>
  const normalPre = '@/assets/images/double-eleven';
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
          require(`@/assets/images/double-eleven/53.jpg`)
        ],
        picsLeft : [],
        picsRight : []
      }
    },
    mounted(){
      this.judgeList(this.pics);
      this.judgeList(this.pics);
    },
    watch:{
      // pics : {
      //   handler(list,oldList){
      //     console.log(list);
      //     if(!oldList || !list.length || list.length <= oldList.length){
      //       this.judgeList(list,true);
      //     }
      //     else{
      //       console.log(list.slice(oldList.length))
      //       this.judgeList(list.slice(oldList.length));
      //     }
      //   },
      //   immediate : true
      // }
    },
    methods:{
      disposeListItem(item){
        const that = this;
        //渲染dom结束后处理
        setTimeout(()=>{
          const leftList = that.$refs.listLeft;
          const rightList = that.$refs.listRight;
          if(!leftList || !rightList){
            return;
          }
          // 如果左边比右边高，往右边列表加数据
          if(leftList.offsetHeight > rightList.offsetHeight){
            that.picsRight.push(item);
          }
          else{
            that.picsLeft.push(item);
          }
        })
      },
      judgeList(list,isInit){
        const that = this;
        let count = 0;
        if(isInit){
          that.picsRight = [];
          that.picsLeft = [];
        }
        if(Array.isArray(list)){
          list.forEach((item) => {
            count++;
            console.log(count)
            that.disposeListItem(item)
          })
          
        }
      }
    }
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
  // 灵活列
  // 如果高度不限制，会自动撑开列,达不到瀑布流的效果
  //如果限制了高度，多出的内容会自动往宽度撑，和期望不符合
  flex-flow: column wrap;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
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
.list3{
  width: 100%;
  column-count:2;
  column-gap: 2em;
  .list-item{
    width: 100%;
    padding: 14px;
    box-sizing: border-box;
    break-inside: avoid;
  }
}

.list-box{
  width: 100%;
  overflow: hidden;
}
.list-js{
  width: 50%;
  float: left;
  .list-item{
    width: 100%;
    padding: 14px;
    box-sizing: border-box;
  }
}
</style>
 