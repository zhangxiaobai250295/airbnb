<template>
  <div id="main">
    <Header :data="this.navData"></Header>
    <Swiper :data="this.swiperData"></Swiper>
    <SearchChoice :data="this.searchChoiceData"></SearchChoice>
    <div class="content">
      <div class="recent">
        <div class="wrapper">
          <h3>最近浏览过的</h3>
          <div class="info">
            <GoodsList :data="this.recentBrowseData"></GoodsList>
          </div>
        </div>
      </div>
      <div class="discount">
        <div class="wrapper">
          <h3 class="title">春季特惠房源</h3>
          <p class="desc">低至 8 折，可叠加使用礼券</p>
          <div class="info">
            <CityList :data="this.discountData"></CityList>
          </div>
        </div>
      </div>
      <div class="spring-trip">
        <div class="wrapper">
          <h3 class="title">春季出行灵感集</h3>
          <div class="info">
            <GoodsList :data="this.springTripData"></GoodsList>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header';
  import Swiper from '../components/Swiper';
  import SearchChoice from '../components/SearchChoice';
  import GoodsList from '../components/GoodsList';
  import CityList from '../components/CityList';
  export default {
    name: 'Index',
    components: {
      Header, Swiper, SearchChoice, GoodsList, CityList
    },
    data () {
      return {
        swiperData: [],
        navData: [],
        searchChoiceData: [],
        recentBrowseData: [],
        discountData: [],
        springTripData: []
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
      },
      async getRecentBrowseData () {
        const { data } = await this.axios.get('/api/recentBrowse');
        this.recentBrowseData = data;
        // console.log(data);
      },
      async getDiscountData () {
        const { data } = await this.axios.get('/api/discount');
        this.discountData = data;
        // console.log(data);
      },
      async getSpringTripData () {
        const { data } = await this.axios.get('/api/springTrip');
        this.springTripData = data;
        // console.log(data);
      }

    },
    mounted () {
      this.getSwiperData();
      this.getNavData();
      this.getSearchChoiceData();
      this.getRecentBrowseData();
      this.getDiscountData();
      this.getSpringTripData();
    }
  };
</script>

<style lang="less" scoped>
#main{
  height: 2000px;

  .content{
    .recent{
      margin-top: 30px;
      h3{
        font-size: 16px;
        margin-bottom: 10px;
      }
      .info{

      }
    }
    .discount{
      color: #484848;
      .title{
        margin-top: 40px;
        font-size: 24px;
      }
      .desc{
        font-size: 16px;
        line-height: 16px;
        margin-bottom: 25px;
      }
      .info{

      }
    }
    .spring-trip{
      .title{
        margin-top: 40px;
        font-size: 24px;
        margin-bottom: 20px;
      }
      .info{
        /*width: 50px;*/
        /*height: 50px;*/
        /*background-color: red;*/
      }
    }
  }
}
</style>
