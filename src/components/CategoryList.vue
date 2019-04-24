<template>
  <div class="category-list">
    <ul class="clearfix">
      <li class="list-item fl" @click="clickItem(item)" v-for="(item,index) in data" :key="index">
        <a href="javascript:;">
          <ImgSwitch :data="item"></ImgSwitch>
          <div class="room-desc">
            {{item.room_and_property_type}}
            <span class="room-number">
              {{item.bedroom_label}}{{item.bathroom_label}}
              {{item.bed_label}}
            </span>
          </div>
          <div class="desc clearfix">
            <p class="title fl">{{item.name}}</p>
            <div class="name-img fr">
              <img :src="item.user.profile_pic_path" alt="">
            </div>
          </div>
          <div class="evaluate">
            <span class="iconfont icon">&#xe643;&#xe643;&#xe643;&#xe643;&#xe643;</span>
            <span class="number">{{item.visible_review_count || '暂无评论'}}</span>
          </div>
          <div class="price-wrap clearfix">
            <span class="price fl">￥253</span>
            <div class="old-price fl clearfix">
              <div class="info fl">
                <span>￥</span>288
              </div>
            </div>
            每晚
            <span class="text fr"><span class="iconfont icon">&#xe608;</span>春季特惠8.8折</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import ImgSwitch from './ImgSwitch';
  export default {
    name: 'CategoryList',
    props: {
      data: {
        type: Array,
        default () {
          return [];
        }
      }
    },
    components: {
      ImgSwitch
    },
    data () {
      return {
        defaultData: []
      };
    },
    methods: {
      clickItem (item) {
        // this.$router.push({
        //   name: 'Datail'
        // });
        this.$emit('clickItem', item);
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
.category-list{
  .list-item{
    width: 20%;
    padding: 0 10px;
    box-sizing: border-box;
    margin-top: 20px;
    height: 304px;
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
}
</style>
