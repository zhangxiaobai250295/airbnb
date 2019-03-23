<template>
  <div id="main">
    <Header :data="this.navData"></Header>
    <Swiper :data="this.swiperData"></Swiper>
    <SearchChoice :data="this.searchChoiceData"></SearchChoice>
  </div>
</template>

<script>
  import Header from '../components/Header';
  import Swiper from '../components/Swiper';
  import SearchChoice from '../components/SearchChoice';
  export default {
    name: 'Index',
    components: {
      Header, Swiper, SearchChoice
    },
    data () {
      return {
        swiperData: [],
        navData: [],
        searchChoiceData: []
      };
    },
    methods: {
      async getSwiperData () {
        const { data } = await this.axios.get('/api/advertise');
        this.swiperData = data;
        // console.log(data);
      },
      async getNavData () {
        const { data } = await this.axios.get('/api/nav');
        this.navData = data;
        // console.log(data);
      },
      async getSearchChoiceData () {
        const { data } = await this.axios.get('/api/cityData');
        this.searchChoiceData = data;
        console.log(data);
      }
    },
    mounted () {
      this.getSwiperData();
      this.getNavData();
      this.getSearchChoiceData();
    }
  };
</script>

<style lang="less" scoped>
#main{
  height: 2000px;
}

</style>
