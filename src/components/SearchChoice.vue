<template>
  <div class="search-choice">
    <div class="wrapper">
      <div class="choice-wrap">
        <a href="javascript:;" class="choice-item active">房源</a>
        <a href="javascript:;" class="choice-item">体验</a>
      </div>
      <div class="choice-box">
        <div class="city box-item">
          <span class="iconfont icon">&#xe601;</span>
          <input type="text" class="text" placeholder="成都" v-model="city" @blur="search('blur')" @focus="search('focus')">
          <div class="select" v-if="this.showSelect">
            <p class="desc">温馨提示：您还可以输入城市 + 景点、行政区名进行搜索，如：巴黎 埃菲尔铁塔</p>
            <div class="select-content clearfix">
              <div class="select-item fl" v-for="(item,index) in data" :key="index">
                <a href="javascript:;" class="title">{{item.title}}</a>
                <ul class="list-wrap clearfix">
                  <li class="fl" v-for="(info,list) in item.children" :key="list" @click.stop="changeCity(info)">
                    <a href="javascript:;">{{info.city}}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="select-footer">
              <a href="javascript:;" class="title">最近搜索</a>
              <ul class="clearfix">
                <li class="fl"><a href="javascript:;">上海市，中国·房源<br><span>3月22日-3月23日</span></a></li>
                <li class="fl"><a href="javascript:;">重庆市，中国·房源<br><span>3月19日-3月20日</span></a></li>
                <li class="fl"><a href="javascript:;">新街口，中国·房源<br><span>任何时间</span></a></li>
                <li class="fl"><a href="javascript:;">新街口，中国·房源<br><span>任何时间</span></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="time box-item">
          <!--<span class="iconfont icon">&#xe719;</span>-->
          <!--<span>入住日期-退房日期</span>-->
          <el-date-picker class="el-time"
                          v-model="value6"
                          size="large"
                          type="daterange"
                          format="M月d日"
                          range-separator="-"
                          start-placeholder="入住日期"
                          end-placeholder="退房日期">
          </el-date-picker>
        </div>
        <div class="number box-item">
          <span class="iconfont icon">&#xe6b6;</span>
          <span>人数</span>
        </div>
        <div class="btn box-item">
          <a href="javascript:;">搜索</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchChoice',
    props: {
      data: {
        type: Array,
        defuault () {
          return [];
        }
      }
    },
    data () {
      return {
        showSelect: false,
        city: '',
        value6: ''
      };
    },
    methods: {
      search (type) {
        if (type === 'blur') {
          this.showSelect = false;
        } else {
          this.showSelect = true;
        }
      },
      changeCity (data) {
        this.city = data.city;
        this.showSelect = false;
      }
    }
  };
</script>

<style lang="less" scoped>
  .search-choice{
    margin-top: -80px;

    .choice-wrap{
      padding-bottom: 15px;
      border-bottom: 1px solid #ebebeb;
      margin-top: 20px;
      /*height: 70px;*/
      .choice-item{
        padding: 20px 0 16px;
        font-size: 18px;
        font-weight: bolder;
        color: #000;
        margin-right: 40px;

        &.active{
          color: #398288;
          border-bottom: 2px solid #398288;
          border-radius: 2px;
        }
      }
    }
    .choice-box{
      margin-top: 25px;
      height: 70px;
      line-height: 70px;
      position: relative;
      /*background-color: royalblue;*/
      box-shadow: 0 0px 2px rgba(0, 0, 0, 0.3);
      .box-item{
        display: inline-block;
        padding: 0 10px;
        font-size: 18px;
        font-weight: bolder;
      }
      .icon{
        font-size: 20px;
        margin-right: 5px;
      }
      .city{
        width: 39%;
        border-right: 1px solid #ebebeb;
        .text{
          width: 88%;
          height: 24px;
          border: none;
          font-size: 18px;
          font-weight: bolder;
          color: #484848;
        }
        .select{
          box-shadow: 0 0px 2px rgba(0, 0, 0, 0.3);
          position: absolute;
          width: 100%;
          left: 0;
          padding: 0 4% 15px;
          box-sizing: border-box;
          background-color: #fff;
          z-index: 99;

          .desc{
            font-size: 14px;
            border-bottom: 1px solid #ccc;
            line-height: 60px;
          }
          .select-content{
            padding-bottom: 20px;
            border-bottom: 1px solid #ccc;
            .select-item{
              width: 33.3333%;
              text-align: left;

              .title{
                font-size: 18px;
                color: #000;
              }
              .list-wrap{
                margin-top: -11px;
                li{
                  width: 25%;
                  line-height: 47px;
                  text-indent: 8px;
                  a{
                    color: #000;
                    font-size: 16px;
                    font-weight: normal;
                  }
                }
              }
            }
          }
        }
        .select-footer{
          .title{
            font-size: 18px;
            color: #000;
          }
          ul{
            li{
              width: 33.333%;
              line-height: 21px;
              padding-left: 8px;
              box-sizing: border-box;
              margin-bottom: 30px;
              a{
                color: #000;
                font-size: 16px;
                font-weight: normal;

                span{
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
      .time{
        cursor: pointer;
        width: 25%;
        border-right: 1px solid #ebebeb;
        .el-time{
          width: 100%;
          border: none;
          .el-range-editor .el-range-input {
            font-size: 18px !important;
            line-height: 1;
          }
        }
      }
      .number{
        cursor: pointer;
        width: 20%;
        border-right: 1px solid #ebebeb;
      }
      .btn{
        text-align: center;
        a{
          cursor: pointer;
          padding: 11px 15px;
          background-color: #ec6665;
          border-radius: 5px;
          color: #fff;
        }
      }
    }
  }
</style>
<style>
  .el-date-editor .el-range-input, .el-date-editor .el-range-separator {
    font-size: 18px;
    color: #484848 !important;
  }

  .el-date-editor .el-range__icon {
    font-size: 20px;
    color: #484848;
  }
</style>
