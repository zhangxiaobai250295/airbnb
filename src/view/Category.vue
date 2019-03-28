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
        <CategoryList></CategoryList>
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
    </div>
    <div class="footer clearfix">
      <a href="javascript:;" class="show-footer show fr" v-if="!this.showFooter" @click="showfooter">
        <span class="iconfont">&#xe620;</span>
        <span class="text">条款,隐私政策,货币以及更多</span>
      </a>
      <a href="javascript:;" class="hidden-footer show fr" v-if="showFooter" @click="showfooter">
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
  export default {
    name: 'Category',
    data () {
      return {
        value4: true,
        showmap: false,
        showFooter: false
      };
    },
    components: {
      Header, Footer, CategoryList
    },
    methods: {
      showMap () {
        this.showmap = !this.showmap;
      },
      showfooter () {
        this.showFooter = !this.showFooter;
      }
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
      position: relative;
      .paging{
        margin: 50px;
        .btn-group{
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
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
    bottom: 2%;
    right: 1%;
    position: fixed;
    background-color: #fff;
    z-index: 9;
    .show{
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
      font-size: 16px;
      font-weight: bolder;
      color: #484848;
    }
    .show-footer{
      padding: 5px 10px;
    }
    .hidden-footer{
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 5px 15px;
      font-size: 18px;
      font-weight: bolder;
      border: 1px solid #008489;
      z-index: 10;
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
