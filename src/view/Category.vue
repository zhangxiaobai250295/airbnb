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

          <div class="map fl" id="container">
            <el-amap vid="amapDemo"
                     :amap-manager="amapManager"
                     :zoom="zoom"
                     :events="events"
                     class="amap-demo"
                     :center="center"
            >
            </el-amap>
            <div class="map-list">
              <ul id="myList" class="clearfix">
              </ul>
            </div>
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
  import axios from 'axios';
  import Header from '../components/Header';
  import Footer from '../components/Footer';
  import CategoryList from '../components/CategoryList';
  // import MapCategoryList from '../components/MapCategoryList';
  import { AMapManager } from 'vue-amap';
  let amapManager = new AMapManager();
  export default {
    name: 'Category',
    data () {
      return {
        categoryData_1: [],
        categoryData_2: [],
        value4: true,
        showmap: false,
        showFooter: false,
        zoom: 16,
        center: [116.45967, 39.93703],
        amapManager,
        marker: null,
        events: {
          init (map) {
            AMapUI.loadUI(['overlay/SvgMarker', 'misc/PositionPicker', 'misc/MarkerList', 'overlay/SimpleMarker'], (SvgMarker, PositionPicker, MarkerList, SimpleMarker) => {
              // let positionPicker = new PositionPicker({
              //   mode: 'dragMarker', // 设定为拖拽地图模式，可选'dragMap'、'dragMarker'，默认为'dragMap'
              //   map: map // 依赖地图对象
              // });
              // // 启动拖放
              // positionPicker.start();
              // 即jQuery/Zepto
              var $ = MarkerList.utils.$;

              let defaultIconStyle = 'red'; // 默认的图标样式
              let hoverIconStyle = 'green'; // 鼠标hover时的样式
              let selectedIconStyle = 'purple'; // 选中时的图标样式
              let myList = document.getElementById('myList');
              let markerList = new MarkerList({
                map: map, // 关联的map对象
                listContainer: myList, // 列表的dom容器的节点或者id, 用于放置getListElement返回的内容
                getDataId: function (dataItem, index) {
                  return dataItem.id;
                },
                getPosition: function (dataItem) {
                  // 返回数据项的经纬度，AMap.LngLat实例或者经纬度数组
                  return [Number(dataItem.lng), Number(dataItem.lat)];
                },
                getMarker: function (dataItem, context, recycledMarker) {
                  // let label = `￥213`;
                  if (recycledMarker) {
                    recycledMarker.setIconLabel();
                    return;
                  }
                  return new SimpleMarker({
                    iconLabel: {
                      innerHTML: '<i>￥213</i>', // 设置文字内容
                      style: {
                        color: '#000' // 设置文字颜色
                      }
                    },
                    iconStyle: defaultIconStyle,
                    containerClassNames: 'my-marker'
                  });
                },
                getInfoWindow: function (dataItem, context, recycledInfoWindow) {
                  var tpl = `
                    <div class="window-item">
                      <div class="img">
                        <div class="img-wrap clearfix mal">
                          <div class="list-item fl">
                            <img src="${dataItem.photos[0].picture}" alt="" class="fl">
                          </div>
                        </div>
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
                      <div class="room-desc">
                        ${dataItem.room_and_property_type}
                        <span class="room-number">
                              ${dataItem.bedroom_label}
                              ${dataItem.bathroom_label}
                              ${dataItem.bed_label}
                        </span>
                      </div>
                      <div class="desc clearfix">
                        <p class="title fl">${dataItem.name}</p>
                      </div>
                      <div class="evaluate">
                        <span class="iconfont icon">&#xe643;&#xe643;&#xe643;&#xe643;&#xe643;</span>
                        <span class="number">${dataItem.visible_review_count || '暂无评论'}</span>
                      </div>
                      <div class="price-wrap clearfix">
                        <span class="price fl">￥253</span>
                        <div class="old-price fl clearfix">
                          <div class="info fl">
                            <span>￥</span>288
                          </div>
                        </div>
                        每晚
                      </div>
                    </div>
                  `;
                  // MarkerList.utils.template支持underscore语法的模板
                  var content = MarkerList.utils.template(tpl, {
                    dataItem: dataItem,
                    dataIndex: context.index
                  });
                  if (recycledInfoWindow) {
                    // 存在可回收利用的infoWindow, 直接setContent返回
                    recycledInfoWindow.setContent(content);
                    return recycledInfoWindow;
                  }
                  // 返回一个新的InfoWindow
                  return new AMap.InfoWindow({
                    offset: new AMap.Pixel(0, -23),
                    content: content
                  });
                },
                getListElement: function (dataItem, context, recycledListElement) {
                  var tpl = `
                  <li class="list-item">
                    <a href="javascript:;" class="clearfix">
                      <div class="img fl">
                        <div class="img-wrap clearfix mal">
                          <div class="list-item fl">
                            <img src="${dataItem.photos[0].picture}" alt="" class="fl">
                          </div>
                        </div>
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
                      <div class="right-info fl clearfix">
                        <div class="room-info fl">
                          <div class="room-desc">
                            ${dataItem.room_and_property_type}
                            <span class="room-number">
                              ${dataItem.bedroom_label}
                              ${dataItem.bathroom_label}
                              ${dataItem.bed_label}
                            </span>
                          </div>
                          <div class="desc clearfix">
                            <p class="title fl">${dataItem.name}</p>
                          </div>
                          <div class="label">
                             <span class="item">${dataItem.preview_tags[0] ? dataItem.preview_tags[0].name : '自主入住'}</span>
                          </div>
                          <div class="comment clearfix">
                            <div class="name-img fl">
                              <img src="${dataItem.sorted_reviews[0] && dataItem.sorted_reviews[0].reviewer.picture_url}" alt="">
                            </div>
                            <div class="text fl">
                              ${dataItem.sorted_reviews[0] ? dataItem.sorted_reviews[0].comments : '暂无评论'}
                            </div>
                          </div>
                        </div>
                        <div class="price fl clearfix">
                          <div class="price-wrap">
                            <span class="new-price">￥385</span>
                            <span class="old-price">￥483</span>
                          </div>
                          <div class="cancel">
                            每晚 <span>免费取消预订</span>
                          </div>
                          <div class="text"><span class="iconfont icon">&#xe608;</span>春季特惠8.8折</div>
                          <div class="user-img fr">
                            <img src="${dataItem.user.profile_pic_path}" alt="">
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                `;
                  // var tpl = `<p><%- dataItem.id %>：<%- dataItem.desc %><p>`
                  var content = MarkerList.utils.template(tpl, {
                    dataItem: dataItem,
                    dataIndex: context.index
                  });
                  if (recycledListElement) {
                    // 存在可回收利用的listElement, 直接更新内容返回
                    recycledListElement.innerHTML = content;
                    return recycledListElement;
                  }
                  return content;
                },
                // 列表节点上监听的事件
                listElementEvents: ['click', 'mouseenter', 'mouseleave'],
                // marker上监听的事件
                markerEvents: ['click', 'mouseover', 'mouseout'],
                // makeSelectedEvents:false,
                selectedClassNames: 'selected',
                autoSetFitView: true
              });
              window.markerList = markerList;
              // 监听选中改变
              markerList.on('selectedChanged', function (event, info) {
                // checkBtnStats()
                if (info.selected) {
                  // console.log(info);
                  if (info.selected.marker) {
                    // 更新为选中样式
                    info.selected.marker.setIconStyle(selectedIconStyle);
                  }
                  // 选中并非由列表节点上的事件触发，将关联的列表节点移动到视野内
                  if (!info.sourceEventInfo.isListElementEvent) {
                    if (info.selected.listElement) {
                      scrollListElementIntoView($(info.selected.listElement));
                    }
                  }
                }
                if (info.unSelected && info.unSelected.marker) {
                  // 更新为默认样式
                  info.unSelected.marker.setIconStyle(defaultIconStyle);
                }
              });
              // 监听Marker和ListElement上的点击，详见markerEvents，listElementEvents
              markerList.on('markerClick listElementClick', function (event, record) {});
              markerList.on('listElementMouseenter markerMouseover', function (event, record) {
                if (record && record.marker) {
                  forcusMarker(record.marker);
                  // this.openInfoWindowOnRecord(record);
                  // 非选中的id
                  if (!this.isSelectedDataId(record.id)) {
                    // 设置为hover样式
                    record.marker.setIconStyle(hoverIconStyle);
                    // this.closeInfoWindow();
                  }
                }
              });
              markerList.on('listElementMouseleave markerMouseout', function (event, record) {
                if (record && record.marker) {
                  if (!this.isSelectedDataId(record.id)) {
                    // 恢复默认样式
                    record.marker.setIconStyle(defaultIconStyle);
                  }
                }
              });
              // 数据输出完成
              markerList.on('renderComplete', function (event, records) {
                // console.log(event)
                // console.log(records)
                // console.log(map)
              });
              // 加载数据
              function loadData () {
                axios.get('/api/categoryList?_page=1&_limit=15').then((res) => {
                  // console.log(res);
                  markerList.render(res.data);
                });
                // console.log(typeof $(this))
              }
              loadData();
              function forcusMarker (marker) {
                marker.setTop(true);
                // 不在地图视野内
                if (!(map.getBounds().contains(marker.getPosition()))) {
                  // 移动到中心
                  map.setCenter(marker.getPosition());
                }
              }
              function isElementInViewport (el) {
                let rect = el.getBoundingClientRect();
                return (
                  rect.top >= 0 &&
                  rect.left >= 0 &&
                  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
                  rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
                );
              }
              function scrollListElementIntoView ($listEle) {
                if (!isElementInViewport($listEle.get(0))) {
                  $('#panel').scrollTop($listEle.offset().top - $listEle.parent().offset().top);
                }
                // 闪动一下
                $listEle
                  .one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
                    function (e) {
                      $(this).removeClass('flash animated');
                    }).addClass('flash animated');
              }
            });
          }
        }
      };
    },
    components: {
      Header, Footer, CategoryList
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
        /*.map-list{*/
          /*width: 100%;*/
          /*!*height: 500px;*!*/
          /*!*background-color: pink;*!*/
        /*}*/
        /*.map{*/
          /*width: 40%;*/
          /*height: 584px;*/
          /*background-color: deeppink;*/
          /*position: fixed;*/
          /*right: 0;*/
          /*top: 19%;*/
        /*}*/
        .map{
          width: 100%;
          .amap-demo{
            width: 40%;
            height: 584px;
            background-color: deeppink;
            position: fixed;
            right: 0;
            top: 19%;
          }
          .map-list{
            width: 100%;
          }
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
<style lang="less">
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
  #myList{
    .amap-ui-markerlist-list-ele{
      width: 100%;
      .list-item{
        width: 100%;
        padding: 0 10px;
        box-sizing: border-box;
        margin-top: 20px;
        .img{
          float: left;
          width: 35%;
          height: 200px;
          /*width: 100%;*/
          /*height: 185px;*/
          background-color: pink;
          position: relative;
          overflow: hidden;
          &:hover   .arrow{
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
          .img-wrap{
            /*width: 100%;*/
            width: 552px;
            /*height: 185px;*/
            height: 200px;
            .list-item{
              /*padding: 0;*/
              /*margin: 0;*/
              /*padding: 0;*/
              /*width: 276px;*/
              /*height: 185px;*/
              margin: 0;
              padding: 0;
              width: 303px;
              height: 200px;
              img{
                border-radius: 5px;
                width: 100%;
                height: 100%;
              }
            }
          }
          .mal{
            transition: all .3s;
          }
          /*img{*/
          /*border-radius: 5px;*/
          /*width: 100%;*/
          /*height: 100%;*/
          /*}*/
        }
        .right-info{
          box-shadow: 0 1px 3px rgba(0,0,0, .3);
          height: 200px;
          width: 65%;
          .room-info{
            padding: 20px;
            box-sizing: border-box;
            height: 200px;
            width: 70%;
            overflow: hidden;
            /*background-color: darkorange;*/
            position: relative;
            .room-desc{
              color: rgb(118, 118, 118);
              font-size: 12px;
              font-weight: bold;
              margin-top: 5px;
              .room-number{
                position: relative;
                margin-left: 0px;
                padding-left: 7px;

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
                /*background-color: deeppink;*/
                img{
                  height: 100%;
                  width: 100%;
                  border-radius: 50%;
                }
              }
            }
            .label{
              margin-top: 3px;
              .item{
                display: inline-block;
                padding: 4px;
                background-color: #f2f2f2;
                color: #484848;
                font-size: 12px;
                font-weight: bolder;
                border-radius: 10px;
                margin-right: 5px;
                margin-bottom: 5px;
              }
              .item:nth-of-type(1){
                color: #296e00 !important;
              }
              .count{
                position: relative;
                margin-left: 0px;
                padding-left: 7px;

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
                  background-color: #296e00;
                  border-radius: 50%;
                }
              }
              .green{
                color: #296e00;
              }
              .zan{
                color: #8a2400;
              }
            }
            .comment{
              /*margin-top: 45px;*/
              position: absolute;
              left: 5%;
              bottom: 8%;
              width: 86%;
              .name-img{
                height: 24px;
                width: 24px;
                /*background-color: pink;*/
                img{
                  height: 100%;
                  width: 100%;
                  border-radius: 50%;
                }
              }
              .text{
                line-height: 24px;
                margin-left: 5px;
                color: rgb(72, 72, 72);
                font-size: 12px;
                width: 90%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }
          }
          .price{
            border-left: 1px solid #ccc;
            padding: 15px;
            height: 200px;
            box-sizing: border-box;
            text-align: right;
            /*background-color: deeppink;*/
            width: 30%;
            .price-wrap{
              .new-price{
                color: #008489;
                font-size: 16px;
                font-weight: bolder;
                margin-bottom: 5px;
              }
              .old-price{
                font-size: 16px;
                font-weight: bolder;
                color: rgb(187, 187, 187);
                text-decoration: line-through;
              }
            }
            .cancel{
              margin-bottom: 5px;
              font-size: 12px;
              color: #484848;
              span{
                position: relative;
                margin-left: 0px;
                padding-left: 7px;

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
            .text{
              font-size: 12px;
              color: #484848;
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
            .user-img{
              margin-top: 55px;
              height: 40px;
              width: 40px;
              /*background-color: pink;*/
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
    }
  }
  .window-item{
    width: 280px;
    /*height: 187px;*/
    .img{
      width: 100%;
      height: 187px;
      /*background-color: pink;*/
      position: relative;
      overflow: hidden;
      &:hover   .arrow{
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
      .img-wrap{
        /*width: 100%;*/
        width: 552px;
        height: 185px;
        .list-item{
          /*padding: 0;*/
          margin: 0;
          padding: 0;
          width: 276px;
          height: 185px;
          img{
            border-radius: 5px;
            width: 100%;
            height: 100%;
          }
        }
      }
      .mal{
        transition: all .3s;
      }
      /*img{*/
      /*border-radius: 5px;*/
      /*width: 100%;*/
      /*height: 100%;*/
      /*}*/
    }
    .room-desc{
      color: rgb(118, 118, 118);
      font-size: 12px;
      font-weight: bold;
      margin-top: 5px;
      .room-number{
        position: relative;
        margin-left: 0px;
        padding-left: 7px;

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
        /*background-color: deeppink;*/
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
</style>
