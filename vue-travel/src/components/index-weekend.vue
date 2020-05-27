<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'indexWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles/mixin.scss';
  .title{
    line-height: 80px;
    background: #eee;
    text-indent: 20px;
  }
  .item-img-wrapper{
    overflow: hidden;
    height: 0;
    padding-bottom: 37.09%;
    .item-img{
      width: 100%;
    }
  }
    
  .item-info{
    padding: 10px;
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
  }
    
</style>
