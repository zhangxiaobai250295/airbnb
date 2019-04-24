<template>
  <div class="goods-list">
    <ul class="clearfix">
      <li class="goods-item fl" :class="{'last-child': (index+1) %4 === 0}" v-for="(item,index) in data" :key="index" >
        <a href="javascript:;">
          <img :src="item.imgUrl" alt="" class="goods-img">
          <div class="room-desc">{{item.type}}<span class="room-number">{{item.city}}</span></div>
          <p class="title">{{item.title}}</p>
          <p class="titleDesc" v-if="item.titleDesc">{{item.titleDesc}}</p>
          <div class="price-wrap clearfix" v-if="item.price">
            每人
            <span class="price">￥{{item.price}}</span>
            <div class="old-price fl clearfix" v-if="item.oldPrice">
              <div class="info fl">
                <span>￥</span>{{item.oldPrice}}
              </div>
            </div>
            <span class="cencel" v-if="item.cencel">免费取消预订</span>
          </div>
          <div class="evaluate" v-if="item.score">
            <span class="number">{{item.score}}</span>
            <span class="iconfont icon">&#xe643;</span>
            <span class="comment">({{item.comment}})</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Experience',
    props: {
      data: {
        type: Array,
        default () {
          return [];
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  .goods-list{

    .goods-item{
      width: 25%;
      padding: 5px;
      box-sizing: border-box;
      margin-bottom: 15px;
      height: 354px;
      /*margin-right: 20px;*/
      &:last-child{
        margin-right: 0;
      }
      &.last-child{
        margin-right: 0;
      }
      .goods-img{
        display: inline-block;
        width: 100%;
        height: 222px;
        background-color: pink;
        border-radius: 5px;
      }
      img{
        height: 100%;
        width: 100%;
      }
      .color{
        color: rgb(145, 70, 105) !important;
      }
      .room-desc{
        color: rgb(118, 118, 118);
        font-size: 12px;
        font-weight: bold;
        .plus{
          display: inline-block;
          width: 37px;
          height: 16px;
          line-height: 15px;
          background-color: rgb(145, 70, 105);
          color: #fff;
          font-weight: bolder;
          text-align: center;
          border-radius: 3px;
        }
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
            background-color: rgb(118, 118, 118);;
            border-radius: 50%;
          }
        }
      }
      .title{
        color: #484848;
        font-size: 16px;
        font-weight: bold;
      }
      .titleDesc{
        color: #484848;
        font-size: 16px;
        line-height: 20px;
        margin-top: 5px;
      }
      .price-wrap{
        margin-top: 5px;
        font-size: 16px;
        line-height: 26px;
        color: rgb(72, 72, 72);
        .price{
          color: rgb(72, 72, 72);
          font-size: 16px;
          /*font-weight: bold;*/
        }
        .old-price{
          margin-left: 5px;
          color: #484848;
          font-size: 16px;
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
        .cencel{
          color: #484848;
          position: relative;
          margin-left: 8px;
          padding-left: 8px;
          box-sizing: border-box;
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
      .evaluate{
        .icon{
          font-size: 12px;
          color: #008489;
        }
        .number{
          font-size: 14px;
          color: rgb(0, 132, 137);
        }
        .comment{
          font-size: 14px;
          color:  rgb(118, 118, 118);
          /*padding-left: 8px;*/
          box-sizing: border-box;
          position: relative;
        }
      }
    }
  }
</style>
