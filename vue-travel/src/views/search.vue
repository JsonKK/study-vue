<template>
  <div class="search-wrap">
    <search-header></search-header>
    <search-info :cities="cities"></search-info>
    <search-city-list :cities="cities" :hot="hotCities"></search-city-list>
  </div>
</template>

<script>
  import axios from 'axios';
  import searchHeader from '@/components/search-header.vue';
  import searchInfo from '@/components/search-info.vue';
  import searchCityList from '@/components/search-city-list.vue';
  export default {
    name: 'search',
    components:{
      searchHeader,
      searchInfo,
      searchCityList
    },
    data() {
      return {
        cities : {},
        hotCities : []
      }
    },
    mounted(){
      this.getCityInfo();
    },
    methods:{
      getCityInfo () {
        axios.get('/api/city.json')
          .then(this.handleGetCityInfoSucc)
      },
      handleGetCityInfoSucc (res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data;
          this.cities = data.cities;
          this.hotCities = data.hotCities;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>