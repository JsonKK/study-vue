<template>
  <div class="search-wrap">
    <search-header></search-header>
    <search-info :cities="cities"></search-info>
    <search-city-list :cities="cities" :hot="hotCities" :letter="letter"></search-city-list>
    <search-alphabet :cities="cities"  @change="handleLetterChange"></search-alphabet>
  </div>
</template>

<script>
  import axios from 'axios';
  import searchHeader from '@/components/search-header.vue';
  import searchInfo from '@/components/search-info.vue';
  import searchCityList from '@/components/search-city-list.vue';
  import searchAlphabet from '@/components/search-alphabet.vue';
  export default {
    name: 'search',
    components:{
      searchHeader,
      searchInfo,
      searchCityList,
      searchAlphabet
    },
    data() {
      return {
        cities : {},
        hotCities : [],
        letter : ''
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
      },
      handleLetterChange (letter) {
        this.letter = letter
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>