<template>
  <div class="detail">
    <detail-header></detail-header>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
    ></detail-banner>
    <detail-list :list="list"></detail-list>
  </div>
</template>
 
<script>
  import detailBanner from '../components/detail-banner.vue';
  import detailHeader from '../components/detail-header.vue';
  import detailList from '../components/detail-list.vue';
  import axios from 'axios';
  export default {
    name: 'detail',
    props:{},
    components: {
      detailBanner,
      detailHeader,
      detailList
    },
    data(){
      return{
        sightName: '',
        bannerImg: '',
        gallaryImgs: [],
        list: []
      }
    },
    mounted(){
      this.initDetail();
    },
    computed:{},
    methods:{
      //初始化详情数据
      initDetail(){
        let id = this.$route.params.id;
        axios.get('/api/detail.json',{
          params : {
            id
          }
        }).then(this.detailBanner);
      },
      //数据渲染
      detailBanner(res){
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
          this.list = data.categoryList
        }
      }
    },
    watch:{}
  }
</script>
 
<style lang="scss" scoped>
.detail{
  min-height: 5200px;
}
</style>
 