<template>
  <div class="main">
    <div class="header">
      <div class="logo fl">
        <span class="iconfont">&#xe61c;</span>
      </div>
      <div class="nav fl">
        <span class="nav-item active">1，预订您的旅程</span>
        <span class="arrow">&gt;</span>
        <span class="nav-item">2 确认并支付</span>
      </div>
    </div>
    <div class="content">
      <div class="wrapper">
        <div class="info-wrap clearfix">
          <div class="user-info fl">
            <div class="book">
              <h2 class="user-title">预订您的旅程</h2>
              <div class="box clearfix">
                <span class="iconfont box-icon fl">&#xe66f;</span>
                <div class="text-box fl">
                  <span class="box-date">4月1日 - 4月14日优惠12%</span>
                  <span class="box-text">在未来11天内预订即可享受此特别优惠。</span>
                </div>
              </div>
            </div>
            <div class="info-item user-number">
              <h3 class="title">房客</h3>
              <div class="number-box clearfix" @click="showNumber">
                <span v-if="!this.count">1人</span>
                <span v-if="this.count">{{this.count}}人</span>
                <span v-if="this.babyAdd">,{{this.babyCount}}名婴幼儿</span>
                <div class="number-select" v-if="this.showNumberselect">
                  <ul>
                    <li class="clearfix">
                      <span class="fl first">成人</span>
                      <div class="fr">
                        <button class="btns" @click="reduce('adult')" :class="{'disabled': this.adultCount === 0}">-</button>
                        <span class="count">{{this.adultCount}}</span>
                        <button class="btns" @click="add('adult')">+</button>
                      </div>
                    </li>
                    <li class="clearfix">
                      <span class="fl">儿童<br><span class="year">2 - 12岁</span></span>
                      <div class="fr">
                        <button class="btns" @click="reduce('children')" :class="{'disabled': this.childrenCount === 0}">-</button>
                        <span class="count">{{this.childrenCount}}</span>
                        <button class="btns" @click="add('children')">+</button>
                      </div>
                    </li>
                    <li class="clearfix">
                      <span class="fl">婴儿<br><span class="year">2岁以下</span></span>
                      <div class="fr info">
                        <button class="btns" @click="reduce('baby')" :class="{'disabled': this.babyCount === 0}">-</button>
                        <span class="count">{{this.babyCount}}</span>
                        <button class="btns" @click="add('baby')">+</button>
                      </div>
                    </li>
                    <li class="clearfix bottom">
                      <a href="javascript:;" class="fl cancel" @click="cencel">取消</a>
                      <a href="javascript:;" class="fr sure" @click.stop="sure">确定</a>
                    </li>
                  </ul>
                </div>
                <span class="iconfont fr next">&#xe731;</span>
              </div>
            </div>
            <div class="info-item objective clearfix">
              <h3 class="title fl">您是要出差吗</h3>
              <div class="fl switch">
                <div class="switch-wrap" :class="{active:showmap}">
                  <div class="round" @click="showMap" :class="{'round-active':showmap}">
                    <span class="iconfont icon" v-if="!showmap">&#xe61f;</span>
                    <span class="iconfont icon color" v-if="showmap">&#xe608;</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="info-item book-room">
              <h3 class="title">预订中国房源</h3>
              <p class="rule-item">根据有关部门规定，所有前往中国的旅客都必须提供以下信息。
                作为中国居民，您的信息将由爱彼迎中国存储并处理。完成本次预订，
                您同意爱彼迎中国可以向中国政府披露您的信息而不向您提供进一步通知。
                <a href="javascript:;" class="more">了解更多</a>
              </p>
              <p class="rule-item">
                您所填的信息将不会与房东分享。房客信息将由爱彼迎中国妥善保管，以便下次预订时使用。
              </p>
              <div class="user-data">
                <div class="data-item">
                  <h3 class="title_2">您的信息</h3>
                  <div class="border user-box clearfix">
                    添加新的房客资料
                    <span class="iconfont fr next">&#xe731;</span>
                  </div>
                </div>
                <div class="data-item clearfix">
                  <div class="city fl">
                    <h4 class="title_2">国籍（地区）</h4>
                    <div class="border item-box clearfix">
                      111
                      <span class="iconfont fr next">&#xe731;</span>
                    </div>
                  </div>
                  <div class="type fl">
                    <h4 class="title_2">身份证件类型</h4>
                    <div class="border item-box clearfix">
                      222
                      <span class="iconfont fr next">&#xe731;</span>
                    </div>
                  </div>
                  <div class="number fl">
                    <h4 class="title_2">身份证件号码</h4>
                    <div class="border item-box">
                      333
                    </div>
                  </div>
                </div>
                <div class="data-item">
                  <h3 class="title_2">姓名</h3>
                  <div class="name-box border">
                    444
                  </div>
                </div>
              </div>
            </div>
            <div class="info-item hello">
              <h3 class="title">和房东打个招呼</h3>
              <div class="text">向Yujie简单介绍一下您自己，以及您旅行的目的。</div>
              <div class="text-box">
                <textarea name="" id="" cols="30" rows="10">
                  你好 Yujie，我叫 用鹏。在爱彼迎上看到你的房源，觉得好棒。希望能在这段时间内入住你的房源，谢谢！：)
                </textarea>
              </div>
              <div class="landlord-img ">
                111
                <img src="" alt="">
              </div>
            </div>
            <div class="info-item volume">
              <h3 class="title">礼金券和旅行基金</h3>
              <a href="javascript:;">使用新的礼金券</a>
            </div>
            <div class="info-item continue">
              <a href="javascript:;">继续</a>
              <div class="text">您暂时不会被收费</div>
            </div>
          </div>
          <div class="right-info fl">
            <div class="order-info right-item">
              <div class="room-data clearfix">
                <div class="text fl">
                  <div class="title">人民广场|高层电梯房|整套宽敞轻风INS风|地铁500m|仙人掌门</div>
                  <div class="room-desc">黄浦的整套房子/公寓</div>
                  <div class="comment">
                    <span class="iconfont icon">&#xe70b;&#xe70b;&#xe70b;&#xe70b;&#xe70b;</span>
                    <span class="number">12条评价</span>
                  </div>
                </div>
                <div class="img fl">
                  <img src="" alt="">
                </div>
              </div>
              <div class="number-time">
                <div class="number">
                  <span class="iconfont icon">&#xe6b6;</span>
                  <span>1人</span>
                </div>
                <div class="time clearfix">
                  <span class="iconfont fl icon">&#xe719;</span>
                  <div class="fl">
                    <span>2019年4月14日</span>
                    <span class="iconfont">&#xe624;</span>
                    <span>2019年4月15日</span>
                  </div>
                </div>
              </div>
              <div class="order-subtotal">
                <div class="subtotal-item evenings-price clearfix">
                  <div class="fl">
                    <span>￥231 x 1晚</span>
                  </div>
                  <div class="fr"><span>￥231</span></div>
                </div>
                <div class="subtotal-item clearfix">
                  <div class="fl">
                    <span class="discount">春季特惠8.8折</span>
                    <span class="symbol">?</span>
                  </div>
                  <div class="fr discount-price"><span>-￥28</span></div>
                </div>
                <div class="subtotal-item service clearfix">
                  <div class="fl">
                    <span>服务费：减免￥33</span>
                    <span class="symbol">?</span>
                  </div>
                  <div class="fr"><span>￥0</span></div>
                </div>
                <div class="subtotal-item volume clearfix">
                  <div class="fl">
                    <span>礼金卷</span>
                  </div>
                  <div class="fr"><span>-￥50</span></div>
                </div>
                <div class="subtotal-item total clearfix">
                  <div class="fl total-text" >
                    <span >总价（CNY）</span>
                  </div>
                  <div class="fr">
                    <span class="total-price">￥285</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="cancel right-item clearfix">
              <div class="left-text fl" style="width:70%">
                <div class="title">中等 - 可免费取消</div>
                <div class="cancel-text">
                  预订确认后48小时内取消可获全额退款。<a href="javascript:;">详细信息</a>
                </div>
              </div>
              <!--<div class="right-img fl">-->
                <!--111-->
              <!--</div>-->
            </div>
            <div class="room-rult right-item">
              <div class="title">房屋守则</div>
              <div class="rult-item">禁止吸烟</div>
              <div class="rult-item">不允许举办派对和活动</div>
              <div class="rult-item">15:00后可以随时入住</div>
              <a href="javascript:;">查看全部</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="wrapper">
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
    name: 'Order',
    data () {
      return {
        count: null,
        adultCount: 0,
        childrenCount: 0,
        babyCount: 0,
        babyAdd: null,
        showNumberselect: false,
        showmap: false
      };
    },
    methods: {
      showNumber () {
        this.showNumberselect = true;
      },
      reduce (type) {
        // if (this.count >= 0) {
        //   this.count--;
        // }
        if (type === 'adult' && this.adultCount > 0) {
          this.adultCount--;
          this.count--;
        }
        if (type === 'children' && this.childrenCount > 0) {
          this.childrenCount--;
          this.count--;
        }
        if (type === 'baby' && this.babyCount > 0) {
          this.babyCount--;
          this.babyAdd--;
        }
      },
      add (type) {
        if (type === 'adult') {
          this.adultCount++;
          this.count++;
        }
        if (type === 'children') {
          this.childrenCount++;
          this.count++;
          // this.count += this.childrenCount;
        }
        if (type === 'baby') {
          this.babyCount++;
          this.babyAdd++;
        }
      },
      cencel () {
        this.adultCount = 0;
        this.childrenCount = 0;
        this.babyCount = 0;
        this.count = null;
        this.babyAdd = null;
      },
      sure () {
        this.showNumberselect = false;
      },
      showMap () {
        this.showmap = !this.showmap;
      }
    }
  };
</script>

<style lang="less" scoped>
.main{
  color: #484848;
  .header{
    height: 80px;
    line-height: 80px;
    .logo{
      height: 80px;
      width: 80px;
      text-align: center;
      span{
        font-size: 34px;
        color: #FF5A5F;
      }
    }
    .nav{
      padding-left: 50px;
      .active{
        color: #484848;
        font-weight: bolder;
      }
      .nav-item{
        font-size: 14px;
        color: #767676;
      }
      .arrow{
        padding: 0 10px;
      }
    }
  }
  .content{
    padding-top: 30px;
    width: 100%;
    .info-wrap{
      .user-info{
        width: 58%;
        .info-item{
          margin-top: 60px;
        }
        .title{
          font-size: 18px;
          font-weight: bolder;
        }
        .book{
          .user-title{
            font-size: 32px;
            font-weight: bolder;
            margin-bottom: 20px;
          }
          .box{
            border: 1px solid #ccc;
            border-radius: 4px;
            height: 65px;
            line-height: 65px;
            padding: 0 15px;
            box-sizing: border-box;
            .box-icon{
              font-size: 32px;
              vertical-align: middle;
            }
            .text-box{
              margin-left: 15px;
              line-height: 65px;
              font-size: 14px;
              .box-date{
                font-weight: bolder;
              }
              .box-text{

              }
            }
          }
        }
        .user-number{
          .number-box{
            margin-top: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
            padding: 0 15px;
            box-sizing: border-box;
            height: 47px;
            line-height: 47px;
            width: 290px;
            position: relative;
            .next{
              font-size: 30px;
            }
            .number-select{
              display: inline-block;
              padding: 30px 20px 20px;
              box-sizing: border-box;
              position: absolute;
              top: 45px;
              left: 0px;
              width: 100%;
              box-shadow: 0 0px 2px rgba(0, 0, 0, 0.3);
              background-color: #fff;
              z-index: 99;

              ul{
                li{
                  font-size: 18px;
                  color: #484848;
                  font-weight: bold;
                  vertical-align: middle;
                  /*line-height: 25px;*/
                  height: 64px;
                  line-height: 1;
                  .first{
                    display: inline-block;
                    margin-top: 11px;
                  }
                  .year{
                    font-size: 14px;
                    font-weight: normal;
                  }
                  .count{
                    margin: 0 10px;
                  }
                  .btns{
                    border: 1px solid rgb(0, 132, 137);
                    height: 32px;
                    width: 32px;
                    text-align: center;
                    border-radius: 50%;
                    background-color: #fff;
                    font-size: 20px;
                  }
                  .disabled{
                    opacity: .5;
                  }
                }
                .bottom{
                  height: 30px;
                  line-height: 30px;
                  font-size: 16px;
                  font-weight: bold;
                  a{
                    &:hover{
                      text-decoration: underline;
                    }
                  }
                  .cancel{
                    color: #484848;
                  }
                  .sure{
                    color: rgb(0, 132, 137);
                  }
                }
              }
            }
          }
        }
        .objective{
          .switch{
            margin-left: 150px;
            vertical-align: bottom;
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
        .book-room{
          .rule-item{
            margin-top: 20px;
            font-size: 16px;
            .more{
              color: #008489;
            }
          }
          .rule-item:nth-of-type(1){
            margin-top: 5px;
          }
          .user-data{
            margin-top: 10px;
            .title_2{
              font-size: 16px;
              margin-bottom: 5px;
            }
            .next{
              font-size: 30px;
            }
            .data-item{
              margin-top: 10px;
              .border{
                border: 1px solid #ccc;
                border-radius: 4px;
                padding: 0 15px;
                box-sizing: border-box;
              }
              .user-box{
                height: 56px;
                line-height: 56px;
                font-size: 16px;
              }
              .item-box{
                height: 46px;
                line-height: 46px;
              }
              .city,.type{
                width: 22%;
                margin-right: 4%;
              }
              .number{
                width: 48%;
              }
              .name-box{
                height: 46px;
                line-height: 46px;
                width: 48%;
              }
            }
          }
        }
        .hello{
          position: relative;
          .text{
            font-size: 16px;
          }
          .text-box{
            margin-top: 10px;
            textarea{
              font-size: 16px;
              color: #484848;
              border-radius: 4px;
              text-align: left;
              text-indent: -128px;
              padding: 15px 10px 6px;
              box-sizing: border-box;
              border-color: #ccc;
              width: 100%;
              height: 78px;
            }
          }
          .landlord-img{
            position: absolute;
            right: 0;
            top: 0;
            height: 48px;
            width: 48px;
            background-color: pink;
            img{
              height: 100%;
              width: 100%;
              border-radius: 50%;
            }
          }
        }
        .volume{
          a{
            color: #008489;
            font-size: 16px;
            font-weight: bolder;
          }
        }
        .continue{
          a{
            display: inline-block;
            height: 48px;
            width: 80px;
            text-align: center;
            line-height: 48px;
            color: #fff;
            background-color: #008489;
            border-radius: 5px;
          }
          .text{
            margin-top: 15px;
            font-size: 14px;
            color: #767676;
          }
        }
      }
      .right-info{
        width: 36.5%;
        margin-left: 5%;
        .right-item{
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 24px;
          box-sizing: border-box;
          margin-bottom: 20px;
        }
        .order-info{
          color: #484848;
          .room-data{
            position: relative;
            padding-bottom: 30px;
            border-bottom: 1px solid #ccc;
            .text{
              width: 70%;
              .title{
                font-size: 16px;
                font-weight: bolder;
                margin-bottom: 5px;
              }
              .room-desc{
                font-size: 14px;
              }
              .comment{
                font-size: 12px;
                .icon{
                  color: #008489;
                }
                .number{
                  font-weight: bolder;
                }
              }
            }
            .img{
              position: absolute;
              top: 50%;
              right: -3px;
              transform: translateY(-63%);
              width: 100px;
              height: 80px;
              background-color: pink;
              img{
                height: 100%;
                width: 100%;
              }
            }
          }
          .number-time{
            padding: 20px 0;
            font-size: 16px;
            border-bottom: 1px solid #ccc;
            .icon{
              margin-right: 5px;
            }
            .number{

            }
            .time{

            }
          }
          .order-subtotal{
            margin-top: 10px;
            font-size: 16px;
            .subtotal-item{
              padding: 5px;

              .discount,.discount-price{
                color: #008489;
              }
            }
            .total{
              margin-top: 10px;
              border-top: 1px solid #ccc;
              padding-top: 20px;
              font-size: 16px;
              font-weight: bolder;
              .total-text{
                font-weight: bolder;
              }
              .total-price{
                font-weight: bolder;
                color: #484848;
              }
            }
          }
        }
        .cancel{
          .left-text{
            font-size: 14px;
            .title{
              font-size: 16px;
              font-weight: bolder;
              margin-bottom: 5px;
            }
            .cancel-text{
              a{
                color: #008489;
              }
            }
          }
        }
        .room-rult{
          font-size: 14px;
          .title{
            font-size: 16px;
            font-weight: bolder;
            margin-bottom: 5px;
          }
          a{
            color: #008489;
          }
        }
      }
    }
  }
  .footer{
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
