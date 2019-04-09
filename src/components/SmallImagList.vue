<template>
  <div class="main">
    <div class="see-img" v-if="show">
      <div class="see-wrap">
        <div class="close" @click="close">
          <span class="iconfont">&#xe61f;</span>
        </div>
        <div class="info">
          <div class="img">
            <img :src="data[activeIndex].picture" alt="">
          </div>
          <div class="arrow clearfix">
            <span class="iconfont left fl icon" @click="up(data.length)">&#xe644;</span>
            <span class="iconfont right fr icon" @click="next(data.length)">&#xe646;</span>
          </div>
          <div class="small clearfix">
            <div class="text-wrap clearfix">
              <div class="text fl">
                {{this.activeIndex + 1}}/{{data.length}}：{{title}}
              </div>
              <div class="hidden fr">隐藏照片列表 <span class="iconfont"> &#xe627;</span></div>
            </div>
            <div class="list-img">
              <ul class="clearfix item-wrap" :style="[listWidth, maL]">
                <li class="fl img-item" :class="{'opacity':list === activeIndex}" v-for="(small,list) in data" :key="list" @click="changeImage(list)">
                  <a href="javascript:;">
                    <img :src="small.picture" alt="">
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SmallImagList',
    props: {
      data: {
        type: Array,
        default () {
          return [];
        }
      },
      show: {
        type: Boolean,
        default: false
      },
      smallImgWidth: {
        type: Number,
        default: 100
      },
      changeIndex: {
        type: Number,
        default: 0
      },
      title: {
        type: String,
        default: ''
      }
    },
    computed: {
      listWidth () {
        return {
          width: `${(this.imgLength) * this.smallImgWidth}px`
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
        activeIndex: 0,
        imgLength: 6,
        move: 0,
        moveLeft: 0,
        index: 0
      };
    },
    methods: {
      close () {
        this.$emit('update:show', false);
      },
      changeImage (list) {
        this.activeIndex = list;
        this.move = list;
        this.index = list - 2;
      },
      next (length) {
        // this.activeIndex++;
        // this.imgLength = length;
        // if (this.activeIndex >= this.data.length) {
        //   this.activeIndex = 0;
        // }
        // this.move++;
        // if (this.move > 2) {
        //   this.index++;
        //   this.moveLeft = '-' + this.index * this.smallImgWidth;
        //   // console.log(this.index);
        // }
        // if (this.move === this.data.length - 1) {
        //   this.move = 0;
        //   this.index = 1;
        //   this.moveLeft = '-' + this.move * this.smallImgWidth;
        // }
        this.activeIndex++;
        this.imgLength = length;
        // console.log(length);
        if (this.activeIndex > 2) {
          this.index++;
          this.moveLeft = '-' + this.index * this.smallImgWidth;
          // console.log(this.index);
          // console.log(this.activeIndex);
          // console.log(this.data.length);
        }
        if (this.activeIndex === this.data.length) {
          this.activeIndex = 0;
          this.moveLeft = 0;
          this.index = 0;
        }
      },
      up (length) {
        this.imgLength = length;
        this.activeIndex--;
        // if (this.activeIndex < 0) {
        //   this.activeIndex = length - 1;
        //   this.move = length;
        //   this.index = length - 5;
        //   this.moveLeft = '-' + this.index * this.smallImgWidth;
        //   // console.log(this.move);
        // }
        // if (this.move !== 0) {
        //   this.move--;
        //   if (this.move < length - 3) {
        //     this.index--;
        //     this.moveLeft = '-' + this.index * this.smallImgWidth;
        //   }
        // }
        if (this.activeIndex > 2) {
          if (this.index > 0) {
            this.index--;
          } else {
            this.index = 0;
          }
          this.moveLeft = '-' + this.index * this.smallImgWidth;
        }
        if (this.activeIndex < 0) {
          this.activeIndex = length - 1;
          this.index = length - 5;
          this.moveLeft = '-' + this.index * this.smallImgWidth;
        }
      }
    },
    watch: {
      changeIndex (data, prevData) {
        this.activeIndex = data;
        console.log(data);
      }
    }
  };
</script>

<style lang="less" scoped>
.main{
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
        cursor: pointer;
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
          .text-wrap{
            height: 20px;
            .text{
              height: 24px;
              line-height: 24px;
              /*text-align: center;*/
              color: #fff;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: normal;
              width: 82%;
            }
            .hidden{
              /*width: 20%;*/
            }
          }
          .list-img{
            width: 600px;
            height: 67px;
            overflow: hidden;
            .item-wrap{
              /*width: 900px;*/
              /*white-space: nowrap;*/
              /*overflow: hidden;*/
              transition: all .3s;
              .opacity{
                opacity: 1!important;
              }
              .img-item{
                width: 100px;
                height: 67px;
                padding-right: 5px;
                box-sizing: border-box;
                /*background-color: deeppink;*/
                /*background-color: rgba(0,0,0,.8);*/
                opacity: .5;
                img{
                  height: 100%;
                  width: 100%;

                  /*position: relative;*/
                  /*&:before{*/
                    /*position: absolute;*/
                    /*z-index: 99999;*/
                    /*top: 0;*/
                    /*left: 0;*/
                    /*bottom: 0;*/
                    /*right: 0;*/
                    /*content: '';*/
                    /*background-color: rgba(0,0,0,.3);*/
                  /*}*/
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
