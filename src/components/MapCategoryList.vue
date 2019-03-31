<template>
  <div class="map-list">
    <ul class="clearfix">
      <li class="list-item fl" @click="goToDatail" v-for="(item,index) in data" :key="index">
        <a href="javascript:;" class="clearfix">
          <div class="img fl">
            <div class="img-wrap clearfix mal" :style="[maL,imgWrapWidth]">
              <div class="list-item fl" v-for="(img,list) in item.pdp_listing_detail.photos" :key="list">
                <img :src="img.picture" alt="" class="fl">
              </div>
              <!--<div class="list-item fl">-->
              <!--<img src="../assets/images/banner2.jpg" alt="" class="fl">-->
              <!--</div>-->
            </div>
            <div class="arrow clearfix">
              <span class="iconfont left icon fl" @click.stop="up">&#xe644;</span>
              <span class="iconfont right icon fr" @click.stop="next(item.pdp_listing_detail.photos.length)">&#xe646;</span>
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
          </div>
          <div class="right-info fl clearfix">
            <div class="room-info fl">
              <div class="room-desc">
                {{item.pdp_listing_detail.room_and_property_type}}
                <span class="room-number">
                {{item.pdp_listing_detail.bedroom_label}}{{item.pdp_listing_detail.bathroom_label}}
                {{item.pdp_listing_detail.bed_label}}
              </span>
              </div>
              <div class="desc clearfix">
                <p class="title fl">{{item.pdp_listing_detail.name}}</p>
              </div>
              <div class="label">
                <!--<a href="javascript:;" class="item green"> <span class="count">条评论</span></a>-->
                <!--<a href="javascript:;" class="item zan">超赞房东</a>-->
                <a href="javascript:;" class="item" :class="{zan:name.type === 'PRIMARY'}" v-for="(name,li) in item.pdp_listing_detail.preview_tags" :key="li">{{name.name}}</a>
                <!--<a href="javascript:;" class="item">自主入住</a>-->
              </div>
              <div class="comment clearfix">
                <div class="name-img fl">
                  <img src="" alt="">
                </div>
                <div class="text fl">
                  <!--{{item.pdp_listing_detail.sorted_reviews[0]}}-->
                  第一次住Nancy家房子完全超出了预期! 很干净!位置也很好找有公交直达!总之很满意了
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
                <img :src="item.pdp_listing_detail.user.profile_pic_path" alt="">
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'MapCategoryList',
    props: {
      data: {
        type: Array,
        default () {
          return [];
        }
      },
      width: {
        type: Number,
        default: 303
      }
    },
    computed: {
      listWrapper () {
        return {
          width: `${(this.data.length + 1) * this.width}px `
        };
      },
      imgWrapWidth () {
        return {
          width: `${(this.imgLenght) * this.width}px `
        };
      },
      maL () {
        return {
          marginLeft: `${this.moveLeft}px`
        };
      }
    },
    data () {
      return {
        move: 0,
        moveLeft: 0,
        defaultData: [],
        imgLenght: 1
      };
    },
    methods: {
      goToDatail () {
        this.$router.push({
          name: 'Datail'
        });
      },
      up () {
        if (this.move !== 0) {
          this.move--;
          this.moveLeft = '-' + this.move * 303;
          // console.log(this.move);
          // console.log(this.moveLeft);
        }
      },
      next (lenght) {
        // console.log(lenght);
        this.imgLenght = lenght;
        this.move++;
        this.moveLeft = '-' + this.move * 303;
        // this.move++;
        // this.moveLeft = '-' + this.move * 276;
      }
    },
    watch: {
      data (newData, prevData) {
        // console.log(newData[0]);
        this.defaultData = newData;
      }
    }
  };
</script>

<style lang="less" scoped>
.map-list{
  .list-item{
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    margin-top: 20px;
    .img{
      width: 35%;
      height: 200px;
      /*background-color: pink;*/
      position: relative;
      overflow: hidden;
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
      .img-wrap{
        /*width: 100%;*/
        /*width: 552px;*/
        height: 200px;
        .list-item{
          margin: 0;
          padding: 0;
          width: 303px;
          height: 200px;
          background-color: red;
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
            background-color: deeppink;
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
            background-color: pink;
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
</style>
