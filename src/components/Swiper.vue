<template>
  <div class="swiper">
    <ul class="swiper-wrap">
      <li class="list-item" :class="{'show-item': activeIndex === index}"  v-for="(item,index) in data" :key="index">
        <a :href="item.href" class="item-warp">
          <img :src="item.imgUrl" alt="">
          <div class="content">
            <span class="title">{{item.title}}<p>{{item.subheading}}</p></span>
            <p class="desc">{{item.description}}</p><br>
            <a href="javascript:;" class="btn">{{item.btnName}}</a>
          </div>
        </a>
      </li>
    </ul>
    <ul class="line">
      <li class="line-item" v-for="(item,index) in data" :key="index">
        <span :class="{'move': activeIndex === index}"></span>
      </li>
    </ul>
    <div class="arrow clearfix">
      <span class="iconfont left fl" @click="up">&#xe644;</span>
      <span class="iconfont right fr" @click="next">&#xe646;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Swiper',
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
        timer: null,
        activeIndex: -1
      };
    },
    methods: {
      move () {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
          if (this.activeIndex < this.data.length - 1) {
            this.activeIndex++;
          } else {
            this.activeIndex = 0;
          }
          // console.log(this.activeIndex);
        }, 5000);
      },
      up () {
        if (this.activeIndex <= 0) {
          this.activeIndex = this.data.length - 1;
        } else {
          this.activeIndex--;
        }
      },
      next () {
        if (this.activeIndex >= this.data.length - 1) {
          this.activeIndex = 0;
        } else {
          this.activeIndex++;
        }
      }
    },
    mounted () {
      setTimeout(() => {
        this.activeIndex = 0;
      }, 100);
      this.move();
    }
  };
</script>

<style lang="less" scoped>
.swiper{
  position: relative;
  top: -80px;
  left: 0;
  height: 529px;
  .swiper-wrap{
    .list-item{
      position: absolute;
      opacity: 0;
      transition: all .5s;
      .item-warp{
        display: inline-block;
        height: 529px;
        /*position: relative;*/
        /*top: 0;*/
        /*left: 0;*/
        img{
          width: 100%;
          height: 100%;
        }
        .content{
          position: absolute;
          top: 30%;
          left: 20%;
          color: #fff;
          .title{
            font-size: 30px;
            font-weight: bolder;
            p{
              margin-top: -12px;
            }
          }
          .desc{
            font-size: 20px;
            font-weight: bold;
          }
          .btn{
            display: inline-block;
            margin-top: 10px;
            border: 2px solid #fff;
            border-radius: 5px;
            padding: 9px 18px;
            color: #fff;
            font-size: 16px;
            font-weight: bolder;
          }
        }
      }
    }
    .list-item:nth-of-type(2){
      /*z-index: 3;*/
    }
    .list-item:nth-of-type(3){
      /*z-index: 2;*/
    }
    .show-item{
      transition: all .5s;
      opacity: 1;
      z-index: 2;
    }
  }
  .line{
    /*z-index: 9;*/
    position: absolute;
    top: 75%;
    left: 20%;
    z-index: 9;
    .line-item{
      display: inline-block;
      height: 2px;
      width: 56px;
      background-color: rgba(255, 255, 255, 0.3);
      position: relative;
      margin-left: 10px;

      /*&:before{*/
        /*position: absolute;*/
        /*top: 0;*/
        /*left: 0;*/
        /*display: inline-block;*/
        /*content: '';*/
        /*height: 3px;*/
        /*width: 0px;*/
        /*background-color: #fff;*/
      /*}*/
      span{
        position: absolute;
        top: 0;
        left: 0;
        display: inline-block;
        content: '';
        height: 2px;
        width: 0px;
        background-color: #fff;
        transition: all 0s;
      }
      .move{
        width: 60px;
        transition: all 5s;
      }
    }
  }
  .arrow{
    width: 100%;
    position: absolute;
    top: 50%;
    z-index: 9;
    transform: translateY(-50%);
    /*background-color: red;*/
    font-size: 18px;
    color: #fff;
    .left{
      cursor: pointer;
      font-size: 18px;
      margin-left: 2%;
    }
    .right{
      cursor: pointer;
      font-size: 18px;
      margin-right: 2%;
    }
  }
}
</style>
