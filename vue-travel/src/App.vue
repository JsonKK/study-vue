<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default{
  data(){
    return{}
  },
  mounted(){
    window.onresize = ()=>{
      console.log(1)
      window.HBUtils.fixScreen();
    }
  }
}
</script>
