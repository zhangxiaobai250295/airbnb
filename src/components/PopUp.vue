<template>
  <div class="main">
    <div class="pop-wrap" v-if="show" @touchmove.prevent>
      <div class="content" @touchmove.prevent>
        <div class="close">
          <span class="iconfont" @click="close">&#xe61f;</span>
        </div>
        <div class="house-rules" v-if="showRules && data.length > 0">
          <h2 class="title">查看房屋守则</h2>
          <div class="data-wrap">
            <div class="data-item">
              <div class="item-text" v-for="(item,index) in data" :key="index">{{item}}</div>
            </div>
            <div class="data-item" v-if="otherRules">
              <h3 class="other-title">其他规定</h3>
              <p v-for="(items,indes) in otherRules.split('\n')"
                 :key="indes">
                {{items}}
              </p>
            </div>
          </div>
        </div>
        <div class="city" v-if="showCity">
          <h2 class="title">位置</h2>
          <h3 class="other-title">{{cityTitle}}</h3>
          <div class="city-list">
            <p v-for="(city,list) in cityData.split('\n')"
               :key="list">
              {{city}}
            </p>
          </div>
          <h3 class="other-title">出行信息</h3>
          <div class="trip-list">
            <p v-for="(time,timelist) in tripTimeData.split('\n')"
               :key="timelist">
              {{time}}
            </p>
          </div>
        </div>
        <div class="about" v-if="showAbout">
          <h2 class="title">关于此房源</h2>
          <h3 class="other-title">概要</h3>
          <div class="about-list">
            <p v-for="(about,aboutlist) in aboutData.split('\n')"
               :key="aboutlist">
              {{about}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PopUp',
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
      showRules: {
        type: Boolean,
        default: false
      },
      otherRules: {
        type: String,
        default: null
      },
      showCity: {
        type: Boolean,
        default: false
      },
      cityTitle: {
        type: String,
        default: null
      },
      cityData: {
        type: String,
        default: null
      },
      tripTimeData: {
        type: String,
        default: null
      },
      showAbout: {
        type: Boolean,
        default: false
      },
      aboutData: {
        type: String,
        default: null
      }
    },
    methods: {
      close () {
        this.$emit('update:show', false);
      }
    }
  };
</script>

<style lang="less" scoped>
.main{
  .pop-wrap{
    position: fixed;
    /*position: absolute;*/
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.75);
    z-index: 99999;
    .content{
      height: 100%;
      overflow-y: scroll;
      font-size: 16px;
      color: #484848;
      width: 568px;
      position: absolute;
      top: 50%;
      transform: translate(-50%,-50%);
      left: 50%;
      /*transform: translateX(-50%);*/
      background-color: #fff;
      padding: 32px;
      box-sizing: border-box;
      /*overflow: hidden;*/
      .close{
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
        height: 40px;
        width: 40px;
        border-radius: 50%;
        text-align: center;
        cursor: pointer;
        span{
          font-size: 30px;
        }
      }
      .house-rules{

      }
      .title{
        font-size: 24px;
        font-weight: bolder;
        margin-top: 20px;
      }
      .other-title{
        margin-top: 40px;
        font-size: 16px;
        font-weight: bolder;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
