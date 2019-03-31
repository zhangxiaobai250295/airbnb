<template>
  <div class="main">
    <Header></Header>
    <div class="content">
      <div class="img-list">
        <ImageList></ImageList>
      </div>
      <div class="wrapper">
        <div class="nav">
          <a href="javascript:;" class="active item">详情</a>
          <a href="javascript:;" class="item">评价</a>
          <a href="javascript:;" class="item">可订日期</a>
          <a href="javascript:;" class="item">位置</a>
          <a href="javascript:;" class="item">须知</a>
          <a href="javascript:;" class="item">房东</a>
        </div>
        <div class="info-wrap clearfix">
          <div class="goods-info fl">
            <div class="goods">
              <div class="room">
                <span class="city">广州市</span>
                <span class="room-desc">整套公寓</span>
              </div>
              <h3 class="title">公园前双地铁/北京路上下九/机场/南站投影大床房</h3>
              <div class="room-label">
                <span class="iconfont icon">&#xe61e;<span class="text">1间卧室</span></span>
                <span class="iconfont icon">&#xe605;<span class="text">2张床</span></span>
                <span class="iconfont icon">&#xe60b;<span class="text">1间卫生间</span></span>
                <span class="iconfont icon">&#xe6b6;<span class="text">最多住3人</span></span>
              </div>
              <div class="type">
                <span>新房源</span>
                <span>可以做饭</span>
              </div>
            </div>
            <div class="landlord clearfix">
              <img src="" alt="" class="landlord-img fl">
              <div class="landlord-info fl">
                <p><span class="name">房东： 林梅</span><a href="javascript:;" class="contact">联系房东</a></p>
                <p class="text">共收到55条评价 · 已验证</p>
              </div>
              <div class="popup fl">
                <span><em></em></span>
                <p>我家坐落于广州北京路闹市中的一片净地,在空中18楼有一个欧式美丽花园,
                  这里没有吵闹的车声,能给你一个舒适宁静的夜晚｡我的房源位于繁华的解放路
                  与中山五路交界处,在对面是机场快线和港澳直通巴士站,周边有陶街尚业街､惠福路美食街一条街,
                </p>
                <a href="javascript:;" class="more">更多房源介绍</a>
              </div>
            </div>
            <div class="room-desc clearfix">
              <div class="item fl">
                <span class="title">卧室1</span>
                <div>
                  <span class="iconfont icon">&#xe607;</span>
                  <span class="iconfont icon">&#xe61d;</span>
                </div>
                <span>1张小号双人床, 1张沙发床</span>
              </div>
            </div>
            <div class="room-info">
              <div class="info-item">
                <span class="title">整套房子/公寓</span>
                <span class="text">无需与房东或房客共享空间，独享整个房源</span>
              </div>
              <div class="info-item">
                <span class="title">入住/退房</span>
                <span class="text">入住时间 14:00 － 00:00 · 退房时间 12:00</span>
              </div>
            </div>
            <div class="room-tool clearfix">
              <div class="tool-item fl">
                <span class="iconfont icon">&#xe665;</span>
                <p>无线网络</p>
              </div>
              <div class="tool-item fl">
                <span class="iconfont icon">&#xe665;</span>
                <p>无线网络</p>
              </div>
              <div class="tool-item fl">
                <span class="iconfont icon">&#xe665;</span>
                <p>无线网络</p>
              </div>
              <div class="tool-item fl">
                <span class="iconfont icon">&#xe665;</span>
                <p>无线网络</p>
              </div>
              <div class="tool-item fl">
                <span class="iconfont icon">&#xe665;</span>
                <p>无线网络</p>
              </div>
              <div class="tool-item fl">
                <span class="iconfont text">5+</span>
                <p class="text">更多设施</p>
              </div>
            </div>
            <div class="comment">
              <h3 class="title">评价</h3>
              <div class="comment-number clearfix">
                <div class="number fl">
                  <span class="iconfont">&#xe70b;&#xe70b;&#xe70b;&#xe70b;&#xe70b;</span>
                  <span>24条评价</span>
                </div>
                <div class="search fr">
                  <div class="box">
                    <span class="iconfont">&#xe651;</span>
                    <input type="text" placeholder="搜索评价">
                  </div>
                </div>
              </div>
              <div class="comment-type clearfix">
                <div class="type-item clearfix fl">
                  <span class="title fl">如实描述</span>
                  <span class="iconfont fr">&#xe70b;&#xe70b;&#xe70b;&#xe70b;&#xe70b;</span>
                </div>
                <div class="type-item clearfix fl">
                  <span class="title fl">如实描述</span>
                  <span class="iconfont fr">&#xe70b;&#xe70b;&#xe70b;&#xe70b;&#xe70b;</span>
                </div>
                <div class="type-item clearfix fl">
                  <span class="title fl">如实描述</span>
                  <span class="iconfont fr">&#xe70b;&#xe70b;&#xe70b;&#xe70b;&#xe70b;</span>
                </div>
                <div class="type-item clearfix fl">
                  <span class="title fl">如实描述</span>
                  <span class="iconfont fr">&#xe70b;&#xe70b;&#xe70b;&#xe70b;&#xe70b;</span>
                </div>
              </div>
              <div class="comment-list">
                <div class="list-item clearfix">
                  <div class="name-img fl">
                    <img src="" alt="">
                  </div>
                  <div class="name-info fl">
                    <div class="name clearfix">Hooray <span class="iconfont fr">&#xe6d5;</span></div>
                    <div class="date">2019年3月</div>
                  </div>
                  <div class="text">交通便利,窗明几净,床铺舒服,房东热情｡</div>
                </div>
                <div class="list-item clearfix">
                  <div class="name-img fl">
                    <img src="" alt="">
                  </div>
                  <div class="name-info fl">
                    <div class="name clearfix">Hooray <span class="iconfont fr">&#xe6d5;</span></div>
                    <div class="date">2019年3月</div>
                  </div>
                  <div class="text">交通便利,窗明几净,床铺舒服,房东热情｡</div>
                </div>
                <div class="list-item clearfix">
                  <div class="name-img fl">
                    <img src="" alt="">
                  </div>
                  <div class="name-info fl">
                    <div class="name clearfix">Hooray <span class="iconfont fr">&#xe6d5;</span></div>
                    <div class="date">2019年3月</div>
                  </div>
                  <div class="text">交通便利,窗明几净,床铺舒服,房东热情｡</div>
                </div>
                <div class="list-item clearfix">
                  <div class="name-img fl">
                    <img src="" alt="">
                  </div>
                  <div class="name-info fl">
                    <div class="name clearfix">Hooray <span class="iconfont fr">&#xe6d5;</span></div>
                    <div class="date">2019年3月</div>
                  </div>
                  <div class="text">交通便利,窗明几净,床铺舒服,房东热情｡</div>
                </div>
                <div class="list-item clearfix">
                  <div class="name-img fl">
                    <img src="" alt="">
                  </div>
                  <div class="name-info fl">
                    <div class="name clearfix">Hooray <span class="iconfont fr">&#xe6d5;</span></div>
                    <div class="date">2019年3月</div>
                  </div>
                  <div class="text">交通便利,窗明几净,床铺舒服,房东热情｡</div>
                </div>
              </div>
              <div class="other">
                <span>房东收到的其他评价</span>
              </div>
            </div>
            <div class="date-wrap">
              <h3 class="date-title">可订日期</h3>
              <div class="timer">
                <div class="condition clearfix">
                  <div class="left-text fl">
                    <span>至少住一晚 ·</span>
                    <span>今天更新</span>
                  </div>
                  <div class="right-text fr">
                    <a href="javascript:;">清除日期</a>
                  </div>
                </div>
                <div class="timer-box" style="height: 304px; background-color: pink">

                </div>
              </div>
            </div>
            <div class="position">
              <h3 class="position-title">位置</h3>
              <div class="position-city">
                <span>广州市</span>
                <span>广东省</span>
                <span>中国</span>
              </div>
              <div class="map" style="height: 280px;background-color: pink">

              </div>
              <div class="position-list">
                <ul>
                  <li class="position-item">
                    <span class="iconfont">&#xe64c;</span>周边热门：珠江新城（约1.7公里）"、"广东省博物馆（约2.5公里）"、"广州塔（约3.1公里）
                  </li>
                  <li class="position-item">
                    <span class="iconfont">&#xe64c;</span>周边热门：珠江新城（约1.7公里）"、"广东省博物馆（约2.5公里）"、"广州塔（约3.1公里）
                  </li>
                  <li class="position-item">
                    <span class="iconfont">&#xe64c;</span>周边热门：珠江新城（约1.7公里）"、"广东省博物馆（约2.5公里）"、"广州塔（约3.1公里）
                  </li>
                  <li class="position-item">
                    <span class="iconfont">&#xe64c;</span>周边热门：珠江新城（约1.7公里）"、"广东省博物馆（约2.5公里）"、"广州塔（约3.1公里）
                  </li>
                </ul>
                <a href="javascript:;">查看更多周边信息</a>
              </div>
            </div>
          </div>
          <div class="order fl">

          </div>
        </div>
        <div></div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../components/Header';
  import Footer from '../components/Footer';
  import ImageList from '../components/ImageList';
  export default {
    name: 'Datail',
    components: {
      Header, Footer, ImageList
    }
  };
</script>

<style lang="less" scoped>
.main{
  /*position: relative;*/
  /deep/ .header{
    background-color: #fff;
    /*border-bottom: 1px solid #e4e4e4;*/
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
  .content{
    .img-list{
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
    .nav{
      height: 49px;
      line-height: 49px;
      .item:first-child{
        color: #484848;
        &:before{
          display: none;
        }
      }
      .item{
        font-size: 16px;
        font-weight: bolder;
        color: #008489;
        position: relative;
        margin-left: 8px;
        padding-left: 15px;
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
          background-color: #000;
          border-radius: 50%;
        }
      }
    }
    .info-wrap{
      /*font-size: 0;*/
      .goods-info{
        border-top: 1px solid #ccc;
        padding-top: 30px;
        /*display: inline-block;*/
        width: 58%;
        font-weight: bolder;
        /*height: 400px;*/
        /*background-color: deeppink;*/
        .goods{
          .room{
            font-size: 12px;
            color: rgb(57, 87, 106);
            font-weight: bolder;
            .city{

            }
            .room-desc{
              position: relative;
              margin-left: 5px;
              padding-left: 10px;
              border-top: none;
              padding-top: 0;
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
                background-color: #484848;
                border-radius: 50%;
              }
            }
          }
          .title{
            margin-top: 5px;
            font-size: 32px;
            line-height: 35px;
            color: rgb(72, 72, 72);
          }
          .room-label{
            margin-top: 15px;
            margin-bottom: 20px;
            .icon{
              display: inline-block;
              font-size: 14px;
              font-weight: normal;
              margin-right: 10px;
              .text{
                padding-left: 10px;
              }
            }
          }
          .type{
            padding: 0px 0 30px;
            border-bottom: 1px solid #ccc;
            span{
              padding: 5px 8px;
              border-radius: 10px;
              font-size: 12px;
            }
            span:first-child{
              background-color: rgb(234, 247, 234);
              color: rgb(41, 110, 0);
            }
            span:last-child{
              background-color: rgb(242, 242, 242);
              color: rgb(72, 72, 72);
            }
          }
        }
        .landlord{
          margin-top: 30px;
          .landlord-img{
            height: 64px;
            width: 64px;
            border-radius: 50%;
            background-color: pink;
            vertical-align: middle;
          }
          .landlord-info{
            font-weight:bolder;
            font-size: 16px;
            color: rgb(72, 72, 72);
            padding: 10px;
            .contact{
              margin-left: 10px;
              color: #008489;
            }
            .text{
              font-weight: bold;
              font-size: 14px;
            }
          }
          .popup{
            margin-top: 20px;
            width:100%;
            background:rgb(248, 248, 248);
            padding:10px 20px;
            box-sizing: border-box;
            color: rgb(72, 72, 72);
            font-size: 16px;
            font-weight: normal;
            line-height: 25px;
            border-radius:4px;
            position:relative;
            /*top:30px;*/
            /*left:30px;*/
            /*border:1px solid #333;*/
            .more{
              display: inline-block;
              margin-top: 15px;
              color: rgb(0, 132, 137);
              font-size: 16px;
              font-weight: bolder;
            }
            span{
              display:block;
              width:0;
              height:0;
              /*border-width:0 10px 10px;*/
              /*border-style:solid;*/
              border-color:transparent transparent #333;
              position:absolute;
              top:-10px;
              left:5%;
              margin-left:-10px;
              em{
                display: block;
                width: 0;
                height: 0;
                border-width: 0 23px 25px;
                border-style: solid;
                border-color: transparent transparent #f8f8f8;
                position: absolute;
                top: -5px;
                left: 0px;
              }
            }
          }
        }
        .room-desc{
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #ccc;
          .item{
            width: 136px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-weight: normal;
            .title{
              font-weight: bolder;
            }
            .icon{
              display: inline-block;
              font-size: 24px;
              margin-right: 5px;
            }
          }
        }
        .room-info{
          margin-top: 20px;
          border-top: 1px solid #ccc;
          padding: 32px 0;
          box-sizing: border-box;
          font-size: 16px;
          line-height: 35px;
          .title{
            display: inline-block;
            width: 136px;
            color: rgb(72, 72, 72);
            /*font-size: 16px;*/
          }
          .text{
            font-weight: normal;
          }
        }
        .room-tool{
          border-top: 1px solid #ccc;
          padding: 10px 0;
          .tool-item{
            width: 16.6666%;
            text-align: center;
            font-size: 14px;
            font-weight: normal;
            .icon{
              font-size: 24px;
            }
            .text{
              line-height: 31px;
              font-size: 14px;
              font-weight: bolder;
              color: rgb(0, 132, 137);
            }
          }
        }
        .comment{
          border-top: 1px solid #ccc;
          padding-top: 60px;
          .comment-type{
            .type-item{
              width: 50%;
            }
          }
          .comment-list{
            margin-top: 30px;
            .list-item{
              border-top: 1px solid #ccc;
              padding: 20px 0;
              .name-img{
                height: 48px;
                width: 48px;
                img{
                  display: inline-block;
                  background-color: pink;
                  height: 100%;
                  width: 100%;
                  border-radius: 50%;
                }
              }
              .name-info{
                width: 88%;
                margin-left: 20px;
                .name{

                }
                .date{
                  font-weight: normal;
                }
              }
              .text{
                margin-top: 60px;
                font-size: 16px;
                font-weight: normal;
              }
            }
          }
          .other{
            padding-top: 24px;
            border-top: 1px solid #ccc;
            span{
              color: #008489;
              font-size: 15px;
              font-weight: bolder;
            }
          }
        }
      }
      .order{
        /*display: inline-block;*/
        width: 42%;
        background-color: pink;
        height: 400px;
      }
    }
  }
}
</style>
