<template>
  <div class="main">
    <div class="img-wrap clearfix">
      <div class="big-img fl">
        <img src="" alt="">
      </div>
      <div class="small-img fl">
        <ul class="clearfix">
          <li class="small-list fl">
            <a href="javascript:;">
              <img src="" alt="">
            </a>
          </li>
          <li class="small-list fl">
            <a href="javascript:;">
              <img src="" alt="">
            </a>
          </li>
          <li class="small-list fl">
            <a href="javascript:;">
              <img src="" alt="">
            </a>
          </li>
          <li class="small-list fl">
            <a href="javascript:;">
              <img src="" alt="">
            </a>
          </li>
        </ul>
      </div>
      <div class="btn">
        <a href="javascript:;"></a>
      </div>
      <div class="btn-group">
        <span class="iconfont wrap">&#xe609;<span class="text">分享</span></span>
        <span class="iconfont wrap">&#xe62a;<span class="text">保存</span></span>
      </div>
      <a href="javascript:;" class="check">查看照片</a>
    </div>
    <!--<div class="see-img">-->
      <!--<div class="see-wrap">-->
        <!--<div class="close">-->
          <!--<span class="iconfont">&#xe61f;</span>-->
        <!--</div>-->
        <!--<div class="info">-->
          <!--<div class="img">-->
            <!--<img src="" alt="">-->
          <!--</div>-->
          <!--<div class="arrow clearfix">-->
            <!--<span class="iconfont left fl icon">&#xe644;</span>-->
            <!--<span class="iconfont right fr icon">&#xe646;</span>-->
          <!--</div>-->
          <!--<div class="small clearfix">-->
            <!--<span class="text fl">40/47：公园前双地铁/北京路上下九/机场/南站投影大床房</span>-->
            <!--<span class="hidden fr">隐藏照片列表 <span class="iconfont"> &#xe627;</span></span>-->
            <!--<div class="list-img">-->
              <!--<ul class="clearfix item-wrap">-->
                <!--<li class="fl img-item">-->
                  <!--<a href="javascript:;">-->
                    <!--<img src="" alt="">-->
                  <!--</a>-->
                <!--</li>-->
                <!--<li class="fl img-item">-->
                  <!--<a href="javascript:;">-->
                    <!--<img src="" alt="">-->
                  <!--</a>-->
                <!--</li>-->
                <!--<li class="fl img-item">-->
                  <!--<a href="javascript:;">-->
                    <!--<img src="" alt="">-->
                  <!--</a>-->
                <!--</li>-->
                <!--<li class="fl img-item">-->
                  <!--<a href="javascript:;">-->
                    <!--<img src="" alt="">-->
                  <!--</a>-->
                <!--</li>-->
              <!--</ul>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: 'ImageList'
  };
</script>

<style lang="less" scoped>
.main{
  /*position: relative;*/
  width: 100%;
  .img-wrap{
    position: relative;
    .big-img{
      padding: 2px;
      box-sizing: border-box;
      width: 50%;
      height: 550px;
      border: 1px solid #000;
      overflow: hidden;
      img{
        height: 100%;
        width: 100%;
        display: inline-block;
        background-color: pink;
        transition: all .3s;
      }
      &:hover img{
        transform: scale(1.1,1.1);
      }
    }
    .small-img{
      width: 50%;
      .small-list{
        padding: 2px;
        box-sizing: border-box;
        width: 50%;
        height: 275px;
        border: 1px solid #000;
        overflow: hidden;

        img{
          display: inline-block;
          height: 100%;
          width: 100%;
          background-color: deeppink;
          transition: all .3s;
        }
        &:hover img{
          transform: scale(1.1,1.1);
        }
      }
    }
    .btn-group{
      position: absolute;
      top: 6%;
      right: 2%;
      .wrap{
        margin-left: 15px;
        background-color: #fff;
        border-radius: 5px;
        padding: 10px 15px;
        box-sizing: border-box;
        cursor: pointer;
        .text{
          margin-left: 5px;
        }
      }
    }
    .check{
      position: absolute;
      bottom: 5%;
      right: 2%;
      color: #484848;
      font-size: 14px;
      font-weight: bolder;
      border-radius: 5px;
      background-color: #fff;
      padding: 8px 13px;
      box-sizing: border-box;
    }
  }
  .see-img{
    .see-wrap{
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 99;
      background-color: #484848;

      .close{
        height: 84px;
        line-height: 84px;
        text-align: right;
        color: #fff;
        /*background-color: red;*/
        padding-right: 30px;
        span{
          font-size: 30px;
        }
      }
      .info{
        position: relative;
        .img{
          margin: 0 auto;
          height: 500px;
          width: 600px;
          img{
            display: inline-block;
            background-color: pink;
            height: 100%;
            width: 100%;
          }
        }
        .arrow{
          padding-left: 30px;
          padding-right: 30px;
          box-sizing: border-box;
          width: 100%;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          .icon{
            font-size: 43px;
            font-weight: bolder;
            color: #fff;
            cursor: pointer;
          }
        }
        .small{
          width: 600px;
          margin: 0 auto;
          color: #fff;
          .text{
            /*text-align: center;*/
            color: #fff;
          }
          .list-img{
            width: 600px;
            overflow: hidden;
            .item-wrap{
              .img-item{
                width: 100px;
                height: 67px;
                margin-right: 10px;
                background-color: deeppink;
              }
            }
          }
        }
      }
    }
  }
}
</style>
