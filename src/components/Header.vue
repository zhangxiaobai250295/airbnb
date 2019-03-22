<template>
  <div class="header clearfix">
    <div class="logo fl">
      <span class="iconfont">&#xe61c;</span>
    </div>
    <div class="search-wrap fl">
      <div class="box" :class="{'box-long':this.showSearchList}">
        <span class="iconfont icon">&#xe651;</span>
        <input type="text" class="text" placeholder='搜"吉隆坡"试试' @blur="search('blur')" @focus="search('focus')">
        <div class="search-list" :class="{'show-search-list':this.showSearchList}" v-if="this.showSearchList">
          最近的搜索
          <ul>
            <li class="list-item">
              <a href="javascript:;" class="clearfix">
                <span class="iconfont fl">&#xeaf7;</span>
                <div class="content fl">
                  <p>意大利拉齐奥罗马</p>
                  <p>6月8日-6月14日·2人</p>
                </div>
              </a>
            </li>
            <li class="list-item">
              <a href="javascript:;" class="clearfix">
                <span class="iconfont fl">&#xeaf7;</span>
                <div class="content fl">
                  <p>意大利拉齐奥罗马</p>
                  <p>任何时间</p>
                </div>
              </a>
            </li>
            <li class="list-item">
              <a href="javascript:;" class="clearfix">
                <span class="iconfont fl">&#xeaf7;</span>
                <div class="content fl">
                  <p>重庆市，中国·房源</p>
                  <p>6月8日-6月14日</p>
                </div>
              </a>
            </li>
            <li class="list-item">
              <a href="javascript:;" class="clearfix">
                <span class="iconfont fl">&#xeaf7;</span>
                <div class="content fl">
                  <p>意大利拉齐奥罗马</p>
                  <p>6月8日-6月14日·2人</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <nav class="nav fr">
      <a :href="item.href" class="item" v-for="(item,index) in data" :key="index">{{item.name}}</a>
      <!--<a href="javascript:;" class="item">手机端</a>-->
      <!--<a href="javascript:;" class="item">成为房东/体验达人</a>-->
      <!--<a href="javascript:;" class="item">故事</a>-->
      <!--<a href="javascript:;" class="item">心愿单</a>-->
      <!--<a href="javascript:;" class="item">行程</a>-->
      <!--<a href="javascript:;" class="item">消息</a>-->
      <!--<a href="javascript:;" class="item">帮助</a>-->
      <a href="javascript:;" class="login">
        <div>
          <img src="../assets/images/user.png" alt="">
        </div>
      </a>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      data: {
        type: Array,
        default () {
          return [];
        }
      }
    },
    data () {
      return {
        showSearchList: false
      };
    },
    methods: {
      search (type) {
        if (type === 'blur') {
          this.showSearchList = false;
        } else {
          this.showSearchList = true;
        }
      }
    },
    mounted: function () {
      // this.globalClick(this.moreSetupMenuRemove);
    }
  };
</script>

<style lang="less" scoped>
.header{
  position: relative;
  z-index: 9;
  height: 80px;
  line-height: 80px;
  /*background-color:rgba(255,255,255,0);*/
  /*background-color: rgba(0,0,0,0);*/
  /*background-color: aqua;*/
  .logo{
    /*width: 82px;*/
    width: 6%;
    height: 100%;
    text-align: center;
    span{
      font-size: 30px;
      color: #fff;
    }
  }
  .search-wrap{
    /*width: 730px;*/
    /*width: 48%;*/
    height: 100%;
    /*background-color: orange;*/
    position: relative;
    .box{
      transition: all .5s ;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 460px;
      height: 47px;
      line-height: 47px;
      padding: 5px 5px;
      box-sizing: border-box;
      border-radius: 5px;
      background-color: #fff;
      .icon{
        position: absolute;
        top: 50%;
        left: 5px;
        z-index: 9;
        transform: translateY(-50%);
        margin-left: 10px;
        font-size: 25px;
        font-weight: bold;
        vertical-align: middle;
      }
      .text{
        position: absolute;
        top: 50%;
        left: 10%;
        transform: translateY(-50%);
        height: 28px;
        line-height: 28px;
        width: 88%;
        border: none;
        font-size: 16px;
        font-weight: bold;
        margin-left: 5px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .search-list{
        background-color: #fff;
        opacity: 0;
        padding-bottom: 15px;
        font-size: 12px;
        color: #000;
        font-weight: bold;
        position: absolute;
        /*z-index: 99;*/
        top: 46px;
        left: 0;
        width: 100%;
        text-indent: 35px;
        ul{
          margin-top: 5px;
          .list-item{
            padding: 5px 0;
            &:hover{
              background-color: #f1f1f1;
            }
            span{
              vertical-align: middle;
              color: #000;
            }
            .content{
              color: #000;
              font-size: 16px;
              margin-top: 3px;
              margin-left: -10px;
              line-height: 20px;
              p:nth-of-type(2){
                font-size: 14px;
                font-weight: normal;
              }
            }
          }
        }
      }
    }
    .show-search-list{
      transition: all .6s ;
      opacity: 1 !important;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    .box-long{
      transition: all .5s ;
      width: 550px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
  .nav{
    margin-right: 15px;
    .item{
      font-size: 16px;
      font-weight: bold;
      padding: 31px 10px;
      box-sizing: border-box;
      /*margin: 0 2px;*/
      color: #fff;

      &:hover{
        border-bottom: 2px solid #fff;
      }
    }
    .login{
      display: inline-block;
      margin-left: 10px;
      height: 78px;
      &:hover{
        border-bottom: 2px solid #fff;
      }
      img{
        vertical-align: middle;
        border: 2px solid #fff;
        border-radius: 50%;
        height: 28px;
        width: 28px;
      }
    }
  }
}
</style>
