<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item, key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
  import Bscroll from 'better-scroll';
  export default {
    name: 'search-city-list',
    props: {
      hot: Array,
      cities: Object,
      letter: String
    },
    data(){
      return{
        currentCity : '北京'
      }
    },
    computed: {
    },
    methods: {
      handleCityClick (city) {
        this.changeCity(city)
        this.$router.push('/')
      }
    },
    watch: {
      letter () {
        if (this.letter) {
          const element = this.$refs[this.letter][0]
          this.scroll.scrollToElement(element)
        }
      }
    },
    mounted () {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        click: true
      })
    }
  }
</script>
 
<style lang="scss" scoped>
  @import 'styles/mixin.scss';
  .border-topbottom{
    &:before{
      border-color: #ccc;
    }
    &:after{
      border-color: #ccc;
    }
      
  }
  .border-bottom{
    &:before{
      border-color: #ccc
    }
  }
    
  .list{
    overflow: hidden;
    position: absolute;
    top: 158px;
    left: 0;
    right: 0;
    bottom: 0;
    .title{
      line-height: 54px;
      background: #eee;
      padding-left: 20px;
      color: #666;
      font-size: 26px;
    }
      
  }
    
  .button-list{
    overflow: hidden;
    padding: 10px 60px 10px 10px;
    .button-wrapper{
      float: left;
      width: 33.33%;
      .button{
        margin: 10px;
        padding: 10px 0;
        text-align: center;
        border: 2px solid #ccc;
        border-radius: 6px;
      }
    } 
  }

  .item-list{
    .item{
      line-height: 76px;
      padding-left: 20px;
    }
  }
      
</style>
 