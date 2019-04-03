<template>
  <div id="main">
    <Header></Header>
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
      <div class="travel-story">
        <div class="wrapper">
          <h3 class="title">精彩旅行故事</h3>
          <div class="story">
            <ul class="clearfix">
              <li class="story-item fl" v-for="(item,index) in this.travelStoryData" :key="index">
                <a href="javascript:;">
                  <div class="big-img">
                    <img :src="item.imgUrl" alt="" class="">
                    <span class="type">{{item.type}}</span>
                    <span class="iconfont good-icon">&#xe62b;</span>
                  </div>
                  <div class="text">
                    <span class="city">{{item.city}}</span>
                    <span class="desc">{{item.title}}</span>
                  </div>
                  <div class="icon">
                    <div class="name-img">
                      <img :src="item.nameImgUrl" alt="" >
                    </div>
                    <span class="iconfont good">&#xe62b;&nbsp;{{item.good}}</span>
                    <span class="iconfont comment">&#xe612;&nbsp;{{item.comment}}</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <a href="javascript:;" class="showtotal">显示全部 ></a>
        </div>
      </div>
      <div class="airbnb-plus">
        <div class="wrapper">
          <h3 class="title">爱彼迎Plus已在上海推出</h3>
          <p class="desc">品质与设计均保证的精选房源系列</p>
          <div class="info">
            <MovePlusList :data="this.airbnbPlusData"></MovePlusList>
          </div>
          <a href="javascript:;" class="showtotal">显示全部 (448) ></a>
        </div>
      </div>
      <div class="experience">
        <div class="wrapper">
          <h3 class="title">高分体验</h3>
          <div class="info">
            <Experience :data="this.experienceData"></Experience>
          </div>
          <a href="javascript:;" class="showtotal">显示所有体验 ></a>
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
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../components/Header';
  import Swiper from '../components/Swiper';
  import SearchChoice from '../components/SearchChoice';
  import GoodsList from '../components/GoodsList';
  import CityList from '../components/CityList';
  import MovePlusList from '../components/MovePlusList';
  import Experience from '../components/Experience';
  import Footer from '../components/Footer';
  export default {
    name: 'Index',
    components: {
      Header, Swiper, SearchChoice, GoodsList, CityList, MovePlusList, Experience, Footer
    },
    data () {
      return {
        swiperData: [],
        searchChoiceData: [],
        recentBrowseData: [],
        discountData: [],
        springTripData: [],
        hotPlaceData: [],
        travelStoryData: [],
        airbnbPlusData: [],
        experienceData: []
      };
    },
    methods: {
      async getSwiperData () {
        const { data } = await this.axios.get('/api/advertise');
        this.swiperData = data;
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
      },
      async getTravelStoryData () {
        const { data } = await this.axios.get('/api/travelStory');
        this.travelStoryData = data;
        // console.log(data);
      },
      async getAirbnbPlusData () {
        const { data } = await this.axios.get('/api/airbnbPlus');
        this.airbnbPlusData = data;
        // console.log(data);
      },
      async getExperienceData () {
        const { data } = await this.axios.get('/api/experience');
        this.experienceData = data;
        // console.log(data);
      }
    },
    mounted () {
      this.getSwiperData();
      this.getSearchChoiceData();
      this.getRecentBrowseData();
      this.getDiscountData();
      this.getSpringTripData();
      this.getHotPlaceData();
      this.getTravelStoryData();
      this.getAirbnbPlusData();
      this.getExperienceData();
    }
  };
</script>

<style lang="less" scoped>
#main{

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
    .travel-story{
      .title{
        /*margin-top: 40px;*/
        font-size: 24px;
        margin-bottom: 20px;
      }
      .story-item{
        position: relative;
        padding: 5px;
        box-sizing: border-box;
        width: 25%;
        margin-bottom: 15px;
        .big-img{
          height: 246px;
          /*background-color: pink;*/
          margin-bottom: 5px;
          position: relative;
          img{
            width: 100%;
            height: 100%;
            border-radius: 5px;
          }
          .type{
            display: inline-block;
            position: absolute;
            font-size: 12px;
            color: #484848;
            font-weight: bolder;
            right: 5%;
            bottom: 5%;
            width: 40px;
            height: 26px;
            line-height: 26px;
            text-align: center;
            background-color: #fff;
            border-radius: 5px;
          }
          .good-icon{
            position: absolute;
            font-size: 33px;
            top: 0;
            right: 3%;
            color: #fff;
          }
        }
        .text{
          margin-bottom: 5px;
          .city{
            font-size: 14px;
            font-weight: bolder;
            color: rgb(72, 72, 72);
          }
          .desc{
            font-size: 14px;
            color: #484848;
            font-weight: 400;
          }
        }
        .icon{
          .name-img{
            display: inline-block;
            height: 24px;
            width: 24px;
            /*background-color: deeppink;*/
            margin-right: 10px;
            img{
              height: 100%;
              width: 100%;
              border-radius: 50%;
            }
          }
          .good,.comment{
            margin-right: 10px;
            font-size: 14px;
            color: rgb(118, 118, 118);
          }
        }
      }
      .showtotal{
        font-size: 18px;
        font-weight: bolder;
        color: rgb(0, 132, 137);

        &:hover{
          text-decoration: underline;
        }
      }
    }
    .airbnb-plus{
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
      .wrapper{
        overflow: hidden;

      }
      .showtotal{
        font-size: 18px;
        font-weight: bolder;
        color: rgb(0, 132, 137);

        &:hover{
          text-decoration: underline;
        }
      }
    }
    .experience{
      .title{
        margin-top: 40px;
        font-size: 24px;
      }
      .showtotal{
        font-size: 18px;
        font-weight: bolder;
        color: rgb(0, 132, 137);

        &:hover{
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
