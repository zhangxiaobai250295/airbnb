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
      <div class="hot-place">
        <div class="wrapper">
          <h3 class="title">热门目的地</h3>
          <div class="info">
            <CityList :data="this.hotPlaceData"></CityList>
          </div>
        </div>
      </div>
      <div class="service">
        <div class="wrapper clearfix">
          <div class="service-item clearfix fl">
            <div class="left-img fl">
              <img src="../assets/images/phone_icon.png" alt="">
            </div>
            <div class="right-text fl">
              <h5>24小时中文客服</h5>
              <span>400-841-0328</span>
            </div>
          </div>
          <div class="service-item clearfix fl">
            <div class="left-img fl">
              <img src="../assets/images/alipay_icon.png" alt="">
            </div>
            <div class="right-text fl">
              <h5>安全支付</h5>
              <span>支付宝付款已向中国用户开通</span>
            </div>
          </div>
          <div class="service-item clearfix fl">
            <div class="left-img fl">
              <img src="../assets/images/sesame.png" alt="">
            </div>
            <div class="right-text fl">
              <h5>芝麻信用</h5>
              <span>实名认证房东房客信息，真实可靠</span>
            </div>
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
        springTripData: [],
        hotPlaceData: []
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
        // console.log(data);
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
      },
      async getHotPlaceData () {
        const { data } = await this.axios.get('/api/hotPlace');
        this.hotPlaceData = data;
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
      this.getHotPlaceData();
    }
  };
</script>

<style lang="less" scoped>
#main{
  height: 5000px;

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
    .hot-place{
      .title{
        margin-top: 40px;
        font-size: 24px;
        margin-bottom: 20px;
      }
    }
    .service{
      margin: 35px 0 60px;
      .service-item{
        width: 33.3333%;
        /*background-color: pink;*/
        position: relative;
        .left-img{
          height: 36px;
          width: 36px;
          line-height: 1;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          img{
            width: 100%;
            height: 100%;
          }
        }
        .right-text{
          margin-left: 61px;
          h5{
            font-size: 15px;
            font-weight: 800;
            color: #484848;
            margin-bottom: 5px;
          }
        }
      }
    }
  }
}
</style>
