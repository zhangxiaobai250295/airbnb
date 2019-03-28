<template>
  <div class="category-list">
    <ul class="clearfix">
      <li class="list-item fl" @click="goToDatail">
        <a href="javascript:;">
          <div class="img">
            <img src="../assets/images/banner.jpg" alt="">
            <div class="arrow clearfix">
              <span class="iconfont left icon fl">&#xe644;</span>
              <span class="iconfont right icon fr">&#xe646;</span>
            </div>
            <div class="round">
              <span class="round-item big"></span>
              <span class="round-item"></span>
              <span class="round-item"></span>
              <span class="round-item"></span>
              <span class="round-item"></span>
              <span class="round-item small"></span>
            </div>
            <span class="iconfont love">&#xe62a;</span>
            <span class="type">新房源</span>
          </div>
          <div class="room-desc">整件公寓<span class="room-number">单间1卫1床</span></div>
          <div class="desc clearfix">
            <p class="title fl">這•間民宿【叁舍】 超大江景落地窗/网红浴缸拍照/海洋球/培元桥地铁站/简欧田园风/</p>
            <div class="name-img fr">
              <img src="../assets/images/banner2.jpg" alt="">
            </div>
          </div>
          <div class="evaluate">
            <span class="iconfont icon">&#xe643;&#xe643;&#xe643;&#xe643;&#xe643;</span>
            <span class="number">31</span>
          </div>
          <div class="price-wrap clearfix">
            <span class="price fl">￥253</span>
            <div class="old-price fl clearfix">
              <div class="info fl">
                <span>￥</span>288
              </div>
            </div>
            每晚
            <span class="text fr"><span class="iconfont icon">&#xe608;</span>春季特惠8.8折</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'CategoryList',
    methods: {
      goToDatail () {
        this.$router.push({
          name: 'Datail'
        });
      }
    }
  };
</script>

<style lang="less" scoped>
.category-list{
  .list-item{
    width: 20%;
    padding: 0 10px;
    box-sizing: border-box;
    margin-top: 20px;
    .img{
      width: 100%;
      height: 185px;
      background-color: pink;
      position: relative;
      &:hover .arrow{
        display: block;
      }
      &:hover:after{
        display: inline-block;
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,.1);
      }
      .arrow{
        display: none;
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 999;
        margin: 0 auto;
        .icon{
          font-size: 30px;
          font-weight: bolder;
          color: #fff;
        }
        .left{
          font-size: 27px !important;
          margin-left: 4%;
        }
        .right{
          margin-right: 4%;
        }
      }
      .round{
        position: absolute;
        bottom: 2.5%;
        left: 50%;
        transform: translateX(-50%);
        .big{
          height: 8px !important;
          width: 8px !important;
          background-color: #fff !important;
        }
        .round-item{
          display: inline-block;
          height: 6px;
          width: 6px;
          background-color: rgba(255,255,255,0.8);
          border-radius: 50%;
          margin-right: 10px;
        }
        .small{
          display: inline-block;
          height: 4px;
          width: 4px;
        }
      }
      .love{
        position: absolute;
        font-size: 33px;
        color: #fff;
        top: 2%;
        right: 6%;
      }
      .type{
        position: absolute;
        top: 8%;
        left: 6%;
        font-size: 12px;
        font-weight: bolder;
        color: rgb(72, 72, 72);
        padding: 5px 6px;
        border-radius: 3px;
        background-color: #fff;
      }
      img{
        border-radius: 5px;
        width: 100%;
        height: 100%;
      }
    }
    .room-desc{
      color: rgb(118, 118, 118);
      font-size: 12px;
      font-weight: bold;
      margin-top: 5px;
      .room-number{
        position: relative;
        margin-left: 8px;
        padding-left: 8px;

        &:before{
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          box-sizing: border-box;
          left: 0;
          display: inline-block;
          content: '';
          width: 4px;
          height: 4px;
          background-color: rgb(118, 118, 118);
          border-radius: 50%;
        }
      }
    }
    .desc{
      width: 100%;
      .title{
        width: 80%;
        color: #484848;
        font-size: 16px;
        font-weight: bold;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .name-img{
        height: 40px;
        width: 40px;
        background-color: deeppink;
        img{
          height: 100%;
          width: 100%;
          border-radius: 50%;
        }
      }
    }
    .evaluate{
      .icon{
        font-size: 12px;
        color: #008489;
      }
      .number{
        font-size: 14px;
        color: #484848;
      }
    }
    .price-wrap{
      margin-top: 5px;
      line-height: 26px;
      color: #484848;
      .price{
        color: rgb(0, 132, 137);
        font-size: 14px;
      }
      .old-price{
        margin-left: 5px;
        color: #484848;
        font-size: 12px;
        .info{
          font-size: 14px;
          text-decoration: line-through;
          margin-right: 5px;
        }
        span{
          font-size: 16px;
          color: #000;
          font-weight: bold;
        }
      }
      .text{
        font-size: 12px;
        .icon{
          display: inline-block;
          height: 12px;
          width: 12px;
          text-align: center;
          line-height: 11px;
          background-color: rgb(96, 182, 181);
          color: #fff;
          border-radius: 50%;
          margin-right: 5px;
        }
      }
    }
    .evaluate{
      .icon{
        font-size: 12px;
        color: #008489;
      }
      .number{
        font-size: 14px;
        color: #484848;
      }
    }
  }
}
</style>
