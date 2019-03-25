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
        <!--<div class="number box-item">-->
          <!--<span class="iconfont icon">&#xe6b6;</span>-->
          <!--<span>人数</span>-->
        <!--</div>-->
        <!--<div class="btn box-item">-->
          <!--<a href="javascript:;">搜索</a>-->
        <!--</div>-->
        <div class="right-wrap">
          <div class="number box-item" @click="showNumber">
            <span class="iconfont icon">&#xe6b6;</span>
            <span v-if="!this.count">人数</span>
            <span v-if="this.count">{{this.count}}人</span>
            <span v-if="this.babyAdd">,{{this.babyCount}}名婴幼儿</span>
          </div>
          <div class="btn box-item">
            <a href="javascript:;">搜索</a>
          </div>
          <div class="number-select" v-if="this.showNumberselect">
            <ul>
              <li class="clearfix">
                <span class="fl first">成人</span>
                <div class="fr">
                  <button class="btns" @click="reduce('adult')" :class="{'disabled': this.adultCount === 0}">-</button>
                  <span class="count">{{this.adultCount}}</span>
                  <button class="btns" @click="add('adult')">+</button>
                </div>
              </li>
              <li class="clearfix">
                <span class="fl">儿童<br><span class="year">2 - 12岁</span></span>
                <div class="fr">
                  <button class="btns" @click="reduce('children')" :class="{'disabled': this.childrenCount === 0}">-</button>
                  <span class="count">{{this.childrenCount}}</span>
                  <button class="btns" @click="add('children')">+</button>
                </div>
              </li>
              <li class="clearfix">
                <span class="fl">婴儿<br><span class="year">2岁以下</span></span>
                <div class="fr info">
                  <button class="btns" @click="reduce('baby')" :class="{'disabled': this.babyCount === 0}">-</button>
                  <span class="count">{{this.babyCount}}</span>
                  <button class="btns" @click="add('baby')">+</button>
                </div>
              </li>
              <li class="clearfix bottom">
                <a href="javascript:;" class="fl cancel" @click="cencel">取消</a>
                <a href="javascript:;" class="fr sure" @click="sure">确定</a>
              </li>
            </ul>
          </div>
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
        value6: '',
        count: null,
        adultCount: 0,
        childrenCount: 0,
        babyCount: 0,
        babyAdd: null,
        showNumberselect: false
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
      },
      showNumber () {
        this.showNumberselect = true;
      },
      reduce (type) {
        // if (this.count >= 0) {
        //   this.count--;
        // }
        if (type === 'adult' && this.adultCount > 0) {
          this.adultCount--;
          this.count--;
        }
        if (type === 'children' && this.childrenCount > 0) {
          this.childrenCount--;
          this.count--;
        }
        if (type === 'baby' && this.babyCount > 0) {
          this.babyCount--;
          this.babyAdd--;
        }
      },
      add (type) {
        if (type === 'adult') {
          this.adultCount++;
          this.count++;
        }
        if (type === 'children') {
          this.childrenCount++;
          this.count++;
          // this.count += this.childrenCount;
        }
        if (type === 'baby') {
          this.babyCount++;
          this.babyAdd++;
        }
      },
      cencel () {
        this.adultCount = 0;
        this.childrenCount = 0;
        this.babyCount = 0;
        this.count = null;
        this.babyAdd = null;
      },
      sure () {
        this.showNumberselect = false;
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
      /*.number{*/
        /*cursor: pointer;*/
        /*width: 20%;*/
        /*border-right: 1px solid #ebebeb;*/
      /*}*/
      /*.btn{*/
        /*text-align: center;*/
        /*a{*/
          /*cursor: pointer;*/
          /*padding: 11px 15px;*/
          /*background-color: #ec6665;*/
          /*border-radius: 5px;*/
          /*color: #fff;*/
        /*}*/
      /*}*/
      .right-wrap{
        position: relative;
        display: inline-block;
        font-size: 0;
        width: 31%;
        .number{
          cursor: pointer;
          width: 66%;
          /*width: 20%;*/
          border-right: 1px solid #ebebeb;
        }
        .btn{
          /*width: 20%;*/
          text-align: center;
          a{
            cursor: pointer;
            padding: 11px 15px;
            box-sizing: border-box;
            background-color: #FF5A5F;
            border-radius: 5px;
            color: #fff;
          }
        }
        .number-select{
          display: inline-block;
          padding: 30px 20px 20px;
          box-sizing: border-box;
          position: absolute;
          top: 71px;
          left: -4px;
          width: 100%;
          box-shadow: 0 0px 2px rgba(0, 0, 0, 0.3);
          background-color: #fff;
          z-index: 99;

          ul{
            li{
              font-size: 18px;
              color: #484848;
              font-weight: bold;
              vertical-align: middle;
              /*line-height: 25px;*/
              height: 64px;
              line-height: 1;
              .first{
                display: inline-block;
                margin-top: 11px;
              }
              .year{
                font-size: 14px;
                font-weight: normal;
              }
              .count{
                margin: 0 10px;
              }
              .btns{
                border: 1px solid rgb(0, 132, 137);
                height: 32px;
                width: 32px;
                text-align: center;
                border-radius: 50%;
                background-color: #fff;
                font-size: 20px;
              }
              .disabled{
                opacity: .5;
              }
            }
            .bottom{
              height: 30px;
              line-height: 30px;
              font-size: 16px;
              font-weight: bold;
              a{
                &:hover{
                  text-decoration: underline;
                }
              }
              .cancel{
                color: #484848;
              }
              .sure{
                color: rgb(0, 132, 137);
              }
            }
          }
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
