<template>
  <div class="footer">
    <div class="wrapper">
      <div class="info">
        <div class="help clearfix">
          <ul class="fl help-item">
            <li class="item-list title">
              <a href="javascript:;">爱彼迎</a>
            </li>
            <li class="item-list">
              <a href="javascript:;">工作机会</a>
            </li>
            <li class="item-list">
              <a href="javascript:;">新闻</a>
            </li>
            <li class="item-list">
              <a href="javascript:;">政策</a>
            </li>
            <li class="item-list">
              <a href="javascript:;">帮助</a>
            </li>
            <li class="item-list">
              <a href="javascript:;">多元化与归属感</a>
            </li>
          </ul>
          <ul class="fl help-item">
            <li class="item-list title">
              <a href="javascript:;">发现</a>
            </li>
            <li class="item-list">
              <a href="javascript:;">信任与安全</a>
            </li>
            <li class="item-list">
              <a href="javascript:;">邀请好友</a>
            </li>
            <li class="item-list">
              <a href="javascript:;">礼品卡</a>
            </li>
            <li class="item-list">
              <a href="javascript:;">爱彼迎公民</a>
            </li>
            <li class="item-list">
              <a href="javascript:;">商务差旅</a>
            </li>
            <li class="item-list">
              <a href="javascript:;">旅游指南</a>
            </li>
            <li class="item-list">
              <a href="javascript:;">爱彼迎杂志</a>
            </li>
            <li class="item-list">
              <a href="javascript:;">爱彼迎生活助手<span class="new"></span></a>
            </li>
          </ul>
          <ul class="fl help-item">
            <li class="item-list title">
              <a href="javascript:;">出租</a>
            </li>
            <li class="item-list">
              <a href="javascript:;">为什么要出租?</a>
            </li>
            <li class="item-list">
              <a href="javascript:;">待客之道</a>
            </li>
            <li class="item-list">
              <a href="javascript:;">房东义务</a>
            </li>
            <li class="item-list">
              <a href="javascript:;">开展体验<span class="new"></span></a>
            </li>
            <li class="item-list">
              <a href="javascript:;">Open Homes<span class="new"></span></a>
            </li>
          </ul>
          <ul class="fl help-item">
            <li class="item-list icon">
              <span class="iconfont">&#xe600;</span>
              <span class="iconfont">&#xe715;</span>
            </li>
            <li class="item-list">
              <a href="javascript:;">条款</a>
            </li>
            <li class="item-list">
              <a href="javascript:;">隐私政策</a>
            </li>
            <li class="item-list">
              <a href="javascript:;">网站地图</a>
            </li>
          </ul>
        </div>
        <div class="copyright clearfix">
          <div class="left-text fl">
            <span class="iconfont logo">&#xe61c;</span>
            <span class="info-text">© 2019 Airbnb, Inc. All rights reserved.</span>
          </div>
          <div class="right-text fl clearfix">
            <a href="javascript:;" class="fr">CNY - ￥</a>
            <a href="javascript:;" class="fr">中文（简体）</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  };
</script>

<style lang="less" scoped>
  .footer{
    margin-top: 115px;
    border-top: 1px solid rgb(235, 235, 235);
    .info{
      padding: 48px 24px;

      .help{
        .help-item{
          width: 25%;
          .item-list{
            line-height: 23px;
            a{
              font-size: 14px;
              font-weight: bold;
              color: #767676;
              &:hover{
                text-decoration: underline;
              }
              .new{
                &:before{
                  margin-left: 8px;
                  display: inline-block;
                  font-size: 12px;
                  text-align: center;
                  border-radius: 5px;
                  content: 'New';
                  height: 18px;
                  line-height: 18px;
                  width: 36px;
                  background-color: rgb(0, 106, 112);
                  color: #fff;
                }
              }
            }
          }
          .icon{
            color: rgb(118, 118, 118);
            margin-bottom: 15px;
            span{
              margin-right: 15px;
              font-size: 18px;
            }
          }
          .title{
            margin-bottom: 15px;
            a{
              color: rgb(72, 72, 72);
              font-size: 14px;
              font-weight: bolder;
              &:hover{
                text-decoration: none;
              }
            }
          }
        }
      }
      .copyright{
        margin-top: 20px;
        border-top: 1px solid rgb(235, 235, 235);
        padding: 15px 0;
        /*height: 40px;*/
        /*line-height: 40px;*/
        .left-text{
          width: 60%;
          /*background-color: pink;*/
          color: rgb(118, 118, 118);
          .logo{
            font-size: 18px;
            margin-right: 10px;
          }
          .info-text{
            font-size: 14px;
            font-weight: bolder;
          }
          /*height: 30px;*/
        }
        .right-text{
          width: 40%;
          /*background-color: deeppink;*/
          /*height: 30px;*/
          a{
            display: inline-block;
            margin-left: 15px;
            padding: 8px 12px;
            box-sizing: border-box;
            border: 1px solid rgb(242, 242, 242);
            border-radius: 3px;
            color: rgb(118, 118, 118);
            font-size: 14px;
            font-weight: bolder;
            &:hover{
              background-color: #cccc;
            }
          }
        }
      }
    }
  }
</style>
