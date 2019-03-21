<template>
  <div class="header clearfix">
    <div class="logo fl">
      <span class="iconfont">&#xe61c;</span>
    </div>
    <div class="search-wrap fl">
      <div class="box" @click="search" :class="{'box-long':this.showSearchList}">
        <span class="iconfont icon">&#xe651;</span>
        <input type="text" class="text" placeholder='搜"吉隆坡"试试'>
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
    <nav class="nav fl">
      <a href="javascript:;" class="item">人民币 - ￥</a>
      <a href="javascript:;" class="item">手机端</a>
      <a href="javascript:;" class="item">成为房东/体验达人</a>
      <a href="javascript:;" class="item">故事</a>
      <a href="javascript:;" class="item">心愿单</a>
      <a href="javascript:;" class="item">行程</a>
      <a href="javascript:;" class="item">消息</a>
      <a href="javascript:;" class="item">帮助</a>
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
    data () {
      return {
        showSearchList: false
      };
    },
    methods: {
      search () {
        this.showSearchList = true;
      },
      moreSetupMenuRemove () {
        // this.$refs.showSearchList = false;
        // alert(111);
        console.log(this.showSearchList);
        this.showSearchList = false;
        // this.$refs.moreSetupMenu.style.display = 'none';
      }
    },
    mounted: function () {
      // this.globalClick(this.moreSetupMenuRemove);
    }
  };
</script>

<style lang="less" scoped>
.header{
  height: 80px;
  line-height: 80px;
  background-color: aqua;
  .logo{
    width: 82px;
    text-align: center;
    span{
      font-size: 30px;
      color: #fff;
    }
  }
  .search-wrap{
    width: 730px;
    height: 100%;
    background-color: orange;
    position: relative;
    .box{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 460px;
      height: 47px;
      padding: 5px 5px;
      background-color: deeppink;
      line-height: 47px;
      .icon{
        margin-left: 10px;
        font-size: 25px;
        font-weight: bold;
        vertical-align: middle;
      }
      .text{
        height: 28px;
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
        opacity: 0;
        padding-bottom: 15px;
        font-size: 12px;
        color: #000;
        font-weight: bold;
        position: absolute;
        top: 69px;
        left: 0;
        width: 100%;
        background-color: pink;
        text-indent: 35px;
        ul{
          margin-top: 5px;
          .list-item{
            &:hover{
              background-color: deeppink;
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
    }
    .box-long{
      transition: all .5s ;
      width: 550px;
    }
  }
  .nav{
    .item{
      font-size: 16px;
      font-weight: bold;
      padding: 31px 10px;
      box-sizing: border-box;
      margin: 0 2px;
      color: #000;

      &:hover{
        border-bottom: 2px solid red;
      }
    }
    .login{
      display: inline-block;
      margin-left: 5px;
      height: 79px;
      &:hover{
        border-bottom: 2px solid red;
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
