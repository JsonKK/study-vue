<template>
  <transition v-if="show">
    <slot></slot>
  </transition>
</template>
<script>
export default {
  name: 'fadeAnimation',
  data(){
    return {
      show : false
    }
  },
  mounted(){
    this.initSlotEvent();
  },
  methods : {
    initSlotEvent(){
      this.$on('hide',this.hide);
    },
    //隐藏内容
    hide(){
      this.show = false;
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-enter, .v-leave-to{
    opacity: 0
  }
  .v-enter-active, .v-leave-active{
    transition: opacity .5s
  }
</style>
 