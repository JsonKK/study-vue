<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
export default{
  data(){
    return{}
  },
  mounted(){
    window.onresize = ()=>{
      window.HBUtils.fixScreen();
    }
  }
}
</script>
