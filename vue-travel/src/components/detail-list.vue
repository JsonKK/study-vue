<template>
  <div class="detail-list">
    <div class="item-box" v-for="(item,index) in list" :key="index">
      <div class="item">
        <span class="item-title-icon"></span>
        喜喜哈哈
      </div>
      <div v-if="item.children" class="item-chilren">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
    
  </div>
</template>
 
<script>
  export default {
    name: 'detail-list',
    props:{
      list : Array
    },
    components: {},
    data(){
      return{}
    },
    mounted(){},
    computed:{},
    methods:{},
    watch:{}
  }
</script>
 
<style lang="scss" scoped>
.item{
  font-size: 30px;
  line-height: 3em;
  height: 3em;
  border-bottom: 1px solid #ccc;
}

.item-title-icon{
  position: relative;
  left: 6px;
  top: 6px;
  display: inline-block;
  width: 50px;
  height: 50px;
  background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -67px no-repeat;
  margin-right: 10px;
  vertical-align: -10px;
}
.item-chilren{
  padding: 0 1em;
}    
</style>
 