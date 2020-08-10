<template>
  <div class="content">
    <back-btn></back-btn>
    <div class="main-box">
      <img src="../assets/img/rule-1.png" alt="">
    </div>
    <div class="main-box">
      <img src="../assets/img/rule-2.png" alt="">
    </div>
  </div>
</template>
 
<script>
  import backBtn from '../components/back-btn.vue';
  export default {
    name: 'rule',
    components: {
      // eslint-disable-next-line vue/no-unused-components
      backBtn
    },
    data(){
      return{}
    },
    mounted(){},
    computed:{},
    methods:{},
    watch:{}
  }
</script>
 
<style src="../assets/css/reset.css"></style>
<style lang="scss" scoped>
.main-box{
  width: 100%;
  max-width: 750px;
  font-size: 0;
}
</style>
 