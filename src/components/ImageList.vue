<template>
  <div class="main">
    <div class="img-wrap clearfix">
      <div class="big-img fl" @click="showSmall(0)">
        <img :src="data[0] && data[0].picture" alt="">
      </div>
      <div class="small-img fl">
        <ul class="clearfix">
          <li class="small-list fl" @click="showSmall(1)">
            <a href="javascript:;">
              <img :src="data[1] && data[1].picture" alt="">
            </a>
          </li>
          <li class="small-list fl" @click="showSmall(2)">
            <a href="javascript:;">
              <img :src="data[2] && data[2].picture" alt="">
            </a>
          </li>
          <li class="small-list fl" @click="showSmall(3)">
            <a href="javascript:;">
              <img :src="data[3] && data[3].picture" alt="">
            </a>
          </li>
          <li class="small-list fl" @click="showSmall(4)">
            <a href="javascript:;">
              <img :src="data[4] && data[4].picture" alt="">
            </a>
          </li>
        </ul>
      </div>
      <div class="btn">
      <a href="javascript:;"></a>
      </div>
      <div class="btn-group">
        <span class="iconfont wrap">&#xe609;<span class="text">分享</span></span>
        <span class="iconfont wrap">&#xe62a;<span class="text">保存</span></span>
      </div>
      <a href="javascript:;" class="check">查看照片</a>
    </div>
    <SmallImagList :data="data" :title="title" :show.sync="showsmall" :change-index="changeIndex"></SmallImagList>
  </div>
</template>

<script>
  import SmallImagList from './SmallImagList';
  export default {
    name: 'ImageList',
    components: {
      SmallImagList
    },
    props: {
      data: {
        type: Array,
        default () {
          return [];
        }
      },
      title: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        showsmall: false,
        changeIndex: null
      };
    },
    methods: {
      showSmall (index) {
        this.showsmall = true;
        this.changeIndex = index;
        // console.log(index);
      }
    }
  };
</script>

<style lang="less" scoped>
.main{
  /*position: relative;*/
  width: 100%;
  .img-wrap{
    position: relative;
    .big-img{
      /*padding: 2px;*/
      box-sizing: border-box;
      width: 50%;
      height: 550px;
      border: 1px solid #000;
      overflow: hidden;
      cursor: pointer;
      img{
        height: 100%;
        width: 100%;
        display: inline-block;
        background-color: pink;
        transition: all .5s;
      }
      &:hover img{
        transition: all .5s;
        transform: scale(1.1,1.1);
      }
      &:hover .small-list{
        opacity: .3;
      }
    }
    .small-img{
      width: 50%;
      .small-list{
        /*padding: 2px;*/
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
          transition: all .5s;
        }
        &:hover img{
          transition: all .5s;
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
}
</style>
