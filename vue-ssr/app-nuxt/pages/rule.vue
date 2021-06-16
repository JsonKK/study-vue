<template>
  <div class="main">
    <section>我是规则页</section>
  </div>
</template>

<script>
export default {
  name: 'rule',
  data() {
    return {
      title: '规则页'
    }
  },
  //parms 是路由跳转的parms
  //query 是路由跳转的query
  asyncData({params,query},callBack){
    console.log('params',params);
    //数据会被合并到this.data里。在mounted中可以获取到
    setTimeout(()=>{
      callBack(null,{title:'规则页abc',text:'hello rule'})
    },200)
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'rule,s description'
        }
      ]
    }
  },
  mounted() {
    console.log(this.text);
  }
}
</script>

<style lang="scss" scoped>
</style>