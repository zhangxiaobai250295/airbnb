<template>
  <div class="city-list">
    <div class="clearfix city-wrap">
      <div :style="marL" class="marl">
        <div class="list-item" v-for="(item,index) in data" :key="index" @click="showGoods(item,index)">
          <a href="javascript:;" :class="{active:indexActive === index}">{{item.cityName}}</a>
        </div>
      </div>
      <div class="right-warp">
        <span class="iconfont right icon" @click="next">&#xe646;</span>
      </div>
      <div class="left-warp" v-if="this.move">
        <span class="iconfont left icon" @click="up" >&#xe644;</span>
      </div>
    </div>
    <div class="city-goods">
      <ul class="clearfix goods-wrap" v-for="(item,index) in data" :key="index" :class="{active:indexActive === index, move:tran === ++index}">
        <li class="goods-item fl"  v-for="(info,list) in item.children" :key="list" :class="{'last-child': (list+1) %3 === 0}">
          <a href="javascript:;">
            <img :src="info.imgUrl" alt="" class="goods-img">
            <div class="room-desc">{{info.roomDesc}}<span class="room-number">{{info.roomNumber}}张床</span></div>
            <p class="title">{{info.title}}</p>
            <p class="titleDesc" v-if="info.titleDesc">{{info.titleDesc}}</p>
            <div class="price-wrap clearfix">
              <span class="price fl">￥{{info.price}}</span>
              <div class="old-price fl clearfix" v-if="info.oldPrice">
                <div class="info fl">
                  <span>￥</span>{{info.oldPrice}}
                </div>
              </div>
              每晚
              <span class="cencel" v-if="info.cencel">免费取消预订</span>
            </div>
            <div class="evaluate" v-if="info.evaluate">
              <span class="iconfont icon">&#xe643;&#xe643;&#xe643;&#xe643;&#xe643;</span>
              <span class="number">{{info.evaluate}}</span>
              <span class="zan">超赞房东</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="footer" @click="goToCategory">
      查看更多<span>{{this.city}}</span>房源 >
    </div>
  </div>
</template>

<script>
  import GoodsList from '../components/GoodsList';
  export default {
    name: 'CityList',
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
        indexActive: 0,
        move: 0,
        moveLeft: 0,
        city: '',
        tran: 1
      };
    },
    components: {
      GoodsList
    },
    computed: {
      marL () {
        return {
          marginLeft: `${this.moveLeft}px`
        };
      }
    },
    methods: {
      showGoods (item, index) {
        this.indexActive = index;
        // this.city = item.cityName;
        this.tran = index;
        this.city = item.cityName;
        setTimeout(() => {
          this.tran++;
        }, 100);
      },
      next () {
        this.move++;
        this.moveLeft = '-' + this.move * 134;
        // console.log(this.moveLeft);
      },
      up () {
        if (this.move !== 0) {
          this.move--;
          this.moveLeft = '-' + this.move * 134;
          // console.log(this.move);
          // console.log(this.moveLeft);
        }
      },
      goToCategory () {
        this.$router.push({
          name: 'Category'
        });
      }
    },
    watch: {
      data (newData, prevData) {
        // console.log(newData[0]);
        this.city = newData[0].cityName;
      }
    }
  };
</script>

<style lang="less" scoped>
.city-list{

  .city-wrap{
    white-space: nowrap;
    overflow: hidden;
    height: 48px;
    width: 100%;
    position: relative;
    .marl{
      transition: all .5s;
    }
    /*&.next{*/
      /*margin-left: -122px;*/
    /*}*/
    .icon{
      position: absolute;
      font-size: 18px;
      color: #000;
      height: 30px;
      width: 30px;
      line-height: 30px;
      text-align: center;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
      border: solid 0.5px #D8D8D8;
      cursor: pointer;
    }
    .right-warp{
      position: absolute;
      top: 0;
      right: 0;
      height: 48px;
      width: 48px;
      background: linear-gradient(270deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 17%, rgba(255, 255, 255, 0) 100%) !important;
      .right{
        top: 10px;
        right: -6px;
      }
    }
    .left-warp{
      position: absolute;
      top: 0;
      left: 0;
      height: 48px;
      width: 48px;
      background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 17%, rgba(255, 255, 255, 0) 100%) !important;
      .left{
        top: 10px;
        left: 0px;
      }
    }
    .list-item{
      display: inline-block;
      a{
        display: inline-block;
        /*padding: 15px 30px;*/
        border-radius: 5px;
        font-size: 18px;
        text-align: center;
        font-weight: bold;
        height: 48px;
        line-height: 48px;
        padding: 0px 42px;
        box-sizing: border-box;
        margin-right: 15px;
        color: #484848;
        background-color: #fff;
        border: solid 0.5px #D8D8D8;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);

        &.active{
          box-shadow: 0px 7px 14px rgba(0, 132, 138, 0.15);
          border: solid 0.5px #00848A;
          background-color: #00848A;
          color: #ffffff;
        }
      }
    }
  }
  .city-goods{
    /*display: none;*/
    margin-top: 25px;
    /*height: 50px;*/
    /*width: 50px;*/
    /*background-color: red;*/
    .goods-wrap{
      display: none;
      opacity: 0;
      &.active{
        display: block;
      }
    }
    .move{
      opacity: 1;
      transition: all .1s;
    }
    .goods-item{
      width: 32%;
      margin-right: 20px;
      margin-bottom: 20px;
      /*&:last-child{*/
        /*margin-right: 0;*/
      /*}*/
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
      .room-desc{
        color: #231341;
        font-size: 12px;
        font-weight: bold;

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
            background-color: #000;
            border-radius: 50%;
          }
        }
      }
      .title{
        color: #484848;
        font-size: 16px;
        font-weight: bold;
        /*overflow: hidden;*/
        /*text-overflow: ellipsis;*/
        /*white-space: nowrap;*/
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        /*height: 80px;*/
      }
      .titleDesc{
        color: #484848;
        font-size: 14px;
        line-height: 20px;
        margin-top: 5px;
      }
      .price-wrap{
        margin-top: 5px;
        font-size: 16px;
        line-height: 26px;
        color: #484848;
        .price{
          color: #484848;
          font-size: 18px;
          font-weight: bold;
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
          color: #484848;
        }
        .zan{
          font-size: 14px;
          color: #484848;
          padding-left: 8px;
          box-sizing: border-box;
          position: relative;

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
    }
  }
  .footer{
    cursor: pointer;
    font-size: 17px;
    color: #484848;
    font-weight: bold;
  }
}
</style>
