<template>
  <div class="main">
    <div class="img">
      <div class="img-wrap clearfix mal" :style="[maL,imgWrapWidth]">
        <div class="list-item fl" v-for="(img,list) in data.photos" :key="list">
          <img :src="img.picture" alt="" class="fl">
        </div>
        <!--<div class="list-item fl">-->
        <!--<img src="../assets/images/banner2.jpg" alt="" class="fl">-->
        <!--</div>-->
      </div>
      <div class="arrow clearfix">
        <span class="iconfont left icon fl" @click.stop="up">&#xe644;</span>
        <span class="iconfont right icon fr" @click.stop="next(data.photos.length)">&#xe646;</span>
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
      <span class="type" v-if="name.name === '新房源'" v-for="(name,li) in data.preview_tags" :key="li">{{name.name}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ImgSwitch',
    props: {
      data: {
        type: Object,
        default () {
          return {};
        }
      },
      width: {
        type: Number,
        default: 276
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
      up () {
        if (this.move !== 0) {
          this.move--;
          this.moveLeft = '-' + this.move * 276;
          // console.log(this.moveLeft);
          // console.log(this.move);
          // console.log(this.moveLeft);
        }
      },
      next (lenght) {
        // console.log(lenght);
        this.imgLenght = lenght;
        this.move++;
        this.moveLeft = '-' + this.move * 276;
        // console.log(this.moveLeft);
        // this.$emit('getData', {
        //   moveLeft: this.moveLeft,
        //   lenght: lenght
        // });
        // this.move++;
        // this.moveLeft = '-' + this.move * 276;
      }
    }
  };
</script>

<style lang="less" scoped>
.main{
  .img{
    width: 100%;
    height: 185px;
    background-color: pink;
    position: relative;
    overflow: hidden;
    &:hover /deep/  .arrow{
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
}
</style>
