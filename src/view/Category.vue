<template>
  <div class="main">
    <div class="top">
      <Header class=""></Header>
      <div class="filter clearfix">
        <div class="left-btn fl">
          <!--<a href="javascript:;" class="item">4月2日-4月3日</a>-->
          <!--<a href="javascript:;" class="item">人数</a>-->
          <!--<a href="javascript:;" class="item">房源类型</a>-->
          <!--<a href="javascript:;" class="item">价格</a>-->
          <!--<a href="javascript:;" class="item">闪订</a>-->
          <!--<a href="javascript:;" class="item">位置区域</a>-->
          <el-row>
            <el-button  size="medium" class="big">4月2日-4月3日</el-button>
            <el-button size="small" class="item">人数</el-button>
            <el-button size="small" class="item">房源类型</el-button>
            <el-button size="small" class="item">价格</el-button>
            <el-button size="small" class="item">闪订</el-button>
            <el-button size="small" class="item">位置区域</el-button>
            <el-button  size="medium" class="big">更多筛选条件 · 2</el-button>
          </el-row>
        </div>
        <div class="right-btn fr">
          <span class="show">显示地图</span>
          <div class="switch">
            <div class="switch-wrap" :class="{active:showmap}">
              <div class="round" @click="showMap" :class="{'round-active':showmap}">
                <span class="iconfont icon" v-if="!showmap">&#xe61f;</span>
                <span class="iconfont icon color" v-if="showmap">&#xe608;</span>
              </div>
            </div>
          </div>
          <!--<el-switch class="switch"-->
          <!--v-model="value4"-->
          <!--active-color="rgb(0, 132, 137)"-->
          <!--inactive-text="显示地图"-->
          <!--active-icon-class="el-icon-check"-->
          <!--inactive-color="#ccc">-->
          <!--</el-switch>-->
        </div>
      </div>
    </div>
    <div class="start">
      <div class="img">
        <img src="../assets/images/start.gif" alt="">
      </div>
      <div class="text">
        <span>您的旅程在6天后就要开始了！</span>
        <span>在筛选条件中选择“闪订”，查看您即刻就能预订到的房源。</span>
      </div>
    </div>
    <div class="content">
      <h3 class="title">超过300个房源</h3>
      <div class="info">
        <div class="normal-show" v-if="!showmap">
          <CategoryList :data="this.categoryData_1" @clickItem="goToDetail"></CategoryList>
          <div class="banner">
            <div class="wrapper clearfix">
              <div class="img fl">
                <img src="../assets/images/invitation.jpg" alt="">
              </div>
              <div class="text fl">
                <span>每邀请一位好友，即可为你的旅行节省 ￥75</span><br>
                <a href="javascript:;" class="btn">立即邀请</a>
              </div>
            </div>
          </div>
          <CategoryList :data="this.categoryData_2" @clickItem="goToDetail"></CategoryList>
          <div class="paging">
            <div class="btn-group">
              <a href="javascript:;" class="btn-item active">1</a>
              <a href="javascript:;" class="btn-item">2</a>
              <a href="javascript:;" class="btn-item">3</a>
              <a href="javascript:;" class="btn-item">...</a>
              <a href="javascript:;" class="btn-item last">&gt;</a>
            </div>
            <div class="text">
              <p>1 – 18 共超过300个房源出租</p>
              <p>包含额外附加费用及适用税费。</p>
              <p>只有预订后的48小时之内可以免费取消。</p>
            </div>
          </div>
        </div>
        <div class="map-show clearfix" v-if="showmap">
          <div class="map-list fl">
            <MapCategoryList :data="this.categoryData_1" @clickItem="goToDetail"></MapCategoryList>
            <div class="banner banner-small">
              <div class="wrapper clearfix">
                <div class="img fl img-small">
                  <img src="../assets/images/invitation.jpg" alt="">
                </div>
                <div class="text fl">
                  <span class="span-small">每邀请一位好友，即可为你的旅行节省 ￥75</span><br>
                  <a href="javascript:;" class="btn">立即邀请</a>
                </div>
              </div>
            </div>
            <MapCategoryList :data="this.categoryData_2" @clickItem="goToDetail"></MapCategoryList>
            <div class="paging">
              <div class="btn-group">
                <a href="javascript:;" class="btn-item active">1</a>
                <a href="javascript:;" class="btn-item">2</a>
                <a href="javascript:;" class="btn-item">3</a>
                <a href="javascript:;" class="btn-item">...</a>
                <a href="javascript:;" class="btn-item last">&gt;</a>
              </div>
              <div class="text">
                <p>1 – 18 共超过300个房源出租</p>
                <p>包含额外附加费用及适用税费。</p>
                <p>只有预订后的48小时之内可以免费取消。</p>
              </div>
            </div>
          </div>
          <div class="map fl" id="container">
            <!--<el-amap class="amap-box" :vid="'amap-vue'"></el-amap>-->
            <!--<el-amap ref="map" vid="amapDemo" :amap-manager="amapManager" :center="center" :zoom="zoom" :plugin="plugin" :events="events">-->
            <!--</el-amap>-->
            <el-amap
              vid="amapDemo"
              :center="center"
              :zoom="zoom"
              :events="events">
            </el-amap>
          </div>
        </div>
      </div>
      </div>
    <div class="footer">
      <a href="javascript:;" class="show-footer show" v-if="!this.showFooter" @click="showfooter">
        <span class="iconfont">&#xe620;</span>
        <span class="text">条款,隐私政策,货币以及更多</span>
      </a>
      <a href="javascript:;" class="hidden-footer show" v-if="showFooter" @click="showfooter">
        <span class="iconfont">&#xe61f;</span>
        <span class="text">关闭</span>
      </a>
      <Footer v-if="this.showFooter"></Footer>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header';
  import Footer from '../components/Footer';
  import CategoryList from '../components/CategoryList';
  import MapCategoryList from '../components/MapCategoryList';
  export default {
    name: 'Category',
    data () {
      let self = this;
      return {
        categoryData_1: [],
        categoryData_2: [],
        value4: true,
        showmap: false,
        showFooter: false,
        zoom: 12,
        center: [121.59996, 31.197646],
        address: '',
        events: {
          click (e) {
            let { lng, lat } = e.lnglat;
            self.lng = lng;
            self.lat = lat;
            var geocoder = new AMap.Geocoder({
              radius: 1000,
              extensions: 'all'
            });
            geocoder.getAddress([lng, lat], function (status, result) {
              if (status === 'complete' && result.info === 'OK') {
                if (result && result.regeocode) {
                  self.address = result.regeocode.formattedAddress;
                  self.$nextTick();
                }
              }
            });
          }
        },
        lng: 0,
        lat: 0
      };
    },
    components: {
      Header, Footer, CategoryList, MapCategoryList
    },
    methods: {
      async getCategoryData () {
        const {data} = await this.axios.get('/api/categoryList?_page=1&_limit=15');
        // this.categoryData = data;
        this.categoryData_1 = this.splitArray(data, 10)[0];
        this.categoryData_2 = this.splitArray(data, 10)[1];
        // console.log(data);
      },
      showMap () {
        this.showmap = !this.showmap;
      },
      showfooter () {
        this.showFooter = !this.showFooter;
      },
      splitArray (arr, len) {
        let aLen = arr.length;
        let result = [];
        for (let i = 0; i < aLen; i += len) {
          result.push(arr.slice(i, i + len));
        }
        // console.log(result);
        return result;
      },
      goToDetail (item) {
        this.$router.push({
          name: 'Datail',
          params: {
            id: item.id
          }
        });
      }
    },
    mounted () {
      this.getCategoryData();
    }
  };
</script>

<style lang="less" scoped>
.main{
  .top{
    position: fixed;
    width: 100%;
    z-index: 99;
    /deep/ .header{
      background-color: #fff;
      border-bottom: 1px solid #e4e4e4;
      .logo{
        span{
          font-size: 30px;
          color: #FF5A5F;
        }
      }
      .nav{
        .item{
          color: #000;
          &:hover{
            border-bottom: 2px solid #484848;
          }
        }
        .login{
          &:hover{
            border-bottom: 2px solid #484848;
          }
        }
      }
    }
    .filter{
      padding: 10px 20px;
      border-bottom: 1px solid #e4e4e4;
      background-color: #fff;
      .left-btn{
        .big{
          background-color: rgb(0, 132, 137);
          color: #fff;
        }
        .item{
          font-size: 15px;
          &:hover{
            background-color: #ccc;
            color: #000;
          }
        }
      }
      .right-btn{
        .show{
          display: inline-block;
          vertical-align: middle;
        }
        .switch{
          vertical-align: middle;
          display: inline-block;
          .switch-wrap{
            height: 32px;
            width: 48px;
            line-height: 32px;
            background-color: #ccc;
            border-radius: 17px;
            position: relative;
            &.active{
              box-shadow: 0 0 2px 2px #008489;
              background-color: rgb(0, 132, 137);
            }
            .round{
              cursor: pointer;
              height: 30px;
              width: 30px;
              text-align: center;
              line-height: 30px;
              border-radius: 50%;
              background-color: #fff;
              position: absolute;
              top: 1px;
              transition: all .8s;
              &.round-active{
                transition: left .8s;
                left: 38%;
              }
              .color{
                color: rgb(0, 132, 137);
              }
            }
          }
        }
      }
    }
  }
  .start{
    padding: 160px 30px 50px;
    .img{
      display: inline-block;
      height: 40px;
      width: 40px;
      vertical-align: middle;
      img{
        height: 100%;
        width: 100%;
      }
    }
    .text{
      display: inline-block;
      font-size: 14px;
      color: rgb(72, 72, 72);
      span:nth-of-type(1){
        color: rgb(72, 72, 72);
        font-size: 14px;
        font-weight: bolder;
      }
      span:nth-of-type(2){

      }
    }
  }
  .content{
    padding: 0px 20px;
    .title{
      font-size: 24px;
      color: rgb(72, 72, 72);
      font-weight: bolder;
    }
    .info{
      width: 100%;
      /*position: relative;*/
      .banner-small{
        padding: 30px 50px !important;
      }
      .banner{
        margin: 50px 0 30px;
        padding: 30px 0;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        .img-small{
          width: 274px !important;
          height: 137px !important;
        }
        .img{
          /*display: inline-block;*/
          width: 483px;
          height: 241px;
          /*background-color: pink;*/
          img{
            height: 100%;
            width: 100%;
          }
        }
        .text{
          /*display: inline-block;*/
          margin-left: 20px;
          span{
            margin-top: 83px;
            margin-bottom: 15px;
            display: inline-block;
            font-size: 25px;
            color: #484848;
            font-weight: bolder;
          }
          .span-small{
            margin-top: 28px !important;
          }
          .btn{
            padding: 10px 15px;
            color: #fff;
            font-size: 14px;
            font-weight: bolder;
            background-color: rgb(0, 132, 137);
            border-radius: 5px;
          }
        }
      }
      .normal-show{
        position: relative;
      }
      .map-show{
        /*position: relative;*/
        width: 60%;
        .map-list{
          width: 100%;
          /*height: 500px;*/
          /*background-color: pink;*/
        }
        .map{
          width: 40%;
          height: 584px;
          background-color: deeppink;
          position: fixed;
          right: 0;
          top: 19%;
        }
      }
      .paging{
        /*margin: 50px;*/
        /*position: absolute;*/
        /*bottom: 0%;*/
        /*left: 50%;*/
        /*transform: translateX(-50%);*/
        margin-top: 20px;
        padding-bottom: 20px;
        .btn-group{
          text-align: center;
          /*position: absolute;*/
          /*bottom: 0;*/
          /*left: 50%;*/
          /*transform: translateX(-50%);*/
          .btn-item{
            margin-right: 10px;
            display: inline-block;
            height: 32px;
            width: 32px;
            text-align: center;
            line-height: 32px;
            color: #008489;
            &.active{
              color: #fff;
              background-color: rgb(0, 132, 137);
              border-radius: 50%;
            }
          }
          .last{
            border: 1px solid #008489;
            border-radius: 50%;
            font-size: 20px;
          }
        }
        .text{
          padding-top: 50px;
          text-align: center;
          p:nth-of-type(1){
            margin-bottom: 50px;
            font-size: 14px;
            font-weight: normal;
          }
          p{
            color: rgb(118, 118, 118);
            font-size: 15px;
            font-weight: bolder;
          }
        }
      }
    }
  }
  .footer{
    /*position: relative;*/
    width: 100%;
    bottom: 0%;
    /*padding-bottom: 20px;*/
    right: 0%;
    position: fixed;
    background-color: #fff;
    z-index: 99;
    .show{
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
      font-size: 16px;
      font-weight: bolder;
      color: #484848;
      position: absolute;
      bottom: 18px;
      right: 2%;
      background-color: #fff;
    }
    .show-footer{
      padding: 5px 10px;
    }
    .hidden-footer{
      padding: 5px 15px;
      font-size: 18px;
      font-weight: bolder;
      border: 1px solid #008489;
      z-index: 999;
    }
  }
}
</style>
<style>
  .el-switch__core{
    height: 32px;
    border-radius: 17px;
    width: 48px !important;
    margin-top: 10px;
  }
  .el-switch__core:after {
    width: 27px;
    height: 27px;
  }
  .el-switch.is-checked .el-switch__core::after {
    margin-left: -26px;
  }
  .el-switch__label * {
    margin-top: 10px;
  }
  .el-switch__label.is-active {
    color: #000;
  }
</style>
