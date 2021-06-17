<template>
  <div class="swiper"></div>
  <!-- <transition-group class="self-motion" name="slide-left" tag="ul">
    <li class="motion-item" v-for="(item,index) in list" :key="item.id">{{item.index}}</li>
  </transition-group> -->
  <ul class="self-motion">
    <li class="motion-item" 
      v-for="(item, index) in list" 
      :key="item.id"
      :class="{
        'hide-li':index==hideIndex,
        'light-li': index == lightIndex,
        'hide-item': index >= 4 && index != lightIndex}">
      {{ item.index }}
    </li>
  </ul>
</template>

<script>
import { toRefs, reactive, onMounted } from 'vue';
export default {
  name: 'caseSwiper',
  setup() {
    const vmData = reactive({
      list: [],
      hideIndex : -1,
      lightIndex : -1
    })

    const addList = () => {
      const count = Math.round(Math.random() * 100)
      const ids = [];
      const list = Array.from(new Array(count).keys()).map((item, index) => {
        let id = (new Date()).valueOf() - Math.round(Math.random() * Math.pow(10, 11));
        while (ids.indexOf(id) > -1) {
          id = (new Date()).valueOf() - Math.round(Math.random() * Math.pow(10, 11));
          console.log(ids.length);
        }
        ids.push(id);
        return {
          isrender: false,
          id,
          index
        }
      })
      vmData.list = [...vmData.list, ...list];
      console.log(vmData.list);
    }

    

    onMounted(() => {
      while(vmData.list.length < 4){
        addList();
      }
      setInterval(() => {
        vmData.hideIndex = 0;
        vmData.lightIndex = 4;
        setTimeout(()=>{
          vmData.list.push(vmData.list.shift());
          vmData.lightIndex = -1;
          vmData.hideIndex = -1;
        },1000)
      }, 1100)

    })

    return {
      ...toRefs(vmData)
    }
  }
}
</script>

<style lang="scss" scoped>
$moveDistance: 40px;
.self-motion {
  display: flex;
  width: 130px;
  overflow: hidden;
  padding-left: 10px;
}
.motion-item {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: chocolate;
  color: #fff;
  line-height: 40px;
  text-align: center;
  flex-shrink: 0;
  transition: all 0.3s;
  margin-left: -10px;
  box-sizing: border-box;
  border: 1px solid yellowgreen;
  position: relative;
  left: 0;
}
.hide-li{
  animation: hideLi 1s;
}
.light-li{
  animation: lightLi 1s;
}
.hide-item{
  opacity: 0;
}
@keyframes hideLi{
  from {
    left: 0;
    opacity: 1;
    transform: scale(1);
  }
  to {
    left: -80px;
    opacity: 0;
    width: 10px;
    transform: scale(0);
  }
}
@keyframes lightLi{
  from{
    opacity: 0;
    transform: scale(0);
  }
  to{
    opacity: 1;
    transform: scale(1);
  }
}

</style>