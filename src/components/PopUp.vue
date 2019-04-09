<template>
  <div class="main">
    <div class="pop-wrap" v-if="show">
      <div class="content">
        <div class="close">
          <span class="iconfont" @click="close">&#xe61f;</span>
        </div>
        <h2 class="title">查看房屋守则</h2>
        <div class="data-wrap">
          <div class="data-item">
            <!--<h3 class="item-title">基础设施</h3>-->
            <div class="item-text">禁止吸烟</div>
            <div class="item-text">不允许举办派对和活动</div>
            <div class="item-text">15:00后可以随时入住</div>
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
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.75);
    .content{
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
      .title{
        font-size: 24px;
        font-weight: bolder;
        margin-top: 20px;
      }
    }
  }
}
</style>
