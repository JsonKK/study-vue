<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'indexRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles/mixin.scss';
  .title{
    margin-top: 20px;
    line-height: 80px;
    background: #eee;
    text-indent: 20px;
  }
  .item{
    overflow: hidden;
    display: flex;
    height: 190px;
  }

  .item-button{
    line-height: 44px;
    margin-top: .16rem;
    background: #ff9300;
    padding: 0 20px;
    border-radius: 6px;
    color: #fff;
  }

  .item-img{
    width: 170px;
    height: 170px;
    padding: 10px;
    .item-info{
      flex: 1;
      padding: 10px;
      min-width: 0;
    }
  }

  .item-title{
    line-height: 54px;
    font-size: 32px;
    @include ellipsis;
    .item-desc{
      line-height: 40px;
      color: #ccc;
      @include ellipsis;
    }
  }
    
</style>
