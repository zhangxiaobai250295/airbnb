<template>
  <div class="main">
    <Header></Header>
    <div class="content">
      <div class="img-list">
        <ImageList :data="this.infoData.photos" :title="this.infoData.name"></ImageList>
      </div>
      <div class="wrapper">
        <div class="nav">
          <a href="javascript:;" class="active item">详情</a>
          <a href="javascript:;" class="item">评价</a>
          <a href="javascript:;" class="item">可订日期</a>
          <a href="javascript:;" class="item">位置</a>
          <a href="javascript:;" class="item">须知</a>
          <a href="javascript:;" class="item">房东</a>
        </div>
        <div class="info-wrap clearfix">
          <div class="goods-info fl">
            <div class="goods">
              <div class="room">
                <span class="city">{{this.infoData.localized_city}}</span>
                <span class="room-desc">{{this.infoData.room_and_property_type}}</span>
              </div>
              <h3 class="title">{{this.infoData.name}}</h3>
              <div class="room-label">
                <span class="iconfont icon">&#xe61e;<span class="text">{{this.infoData.bedroom_label}}</span></span>
                <span class="iconfont icon">&#xe605;<span class="text">{{this.infoData.bed_label}}</span></span>
                <span class="iconfont icon">&#xe60b;<span class="text">{{this.infoData.bathroom_label}}</span></span>
                <span class="iconfont icon">&#xe6b6;<span class="text">{{this.infoData.guest_label}}</span></span>
              </div>
              <div class="type">
                <span>新房源</span>
                <span>可以做饭</span>
              </div>
            </div>
            <div class="landlord clearfix">
              <img :src="this.infoData.user && this.infoData.user.profile_pic_path" alt="" class="landlord-img fl">
              <div class="landlord-info fl">
                <p><span class="name">房东： {{this.infoData.user && this.infoData.user.host_name}}</span><a href="javascript:;" class="contact">联系房东</a></p>
                <p class="text" v-if="this.infoData.primary_host && this.infoData.primary_host.host_intro_tags.length === 2">{{this.infoData.primary_host && this.infoData.primary_host.host_intro_tags[0]}}
                  <span>· {{this.infoData.primary_host && this.infoData.primary_host.host_intro_tags[1]}}</span>
                </p>
                <p class="text" v-if="this.infoData.primary_host && this.infoData.primary_host.host_intro_tags.length === 1">{{this.infoData.primary_host && this.infoData.primary_host.host_intro_tags[0]}}
                </p>
              </div>
              <div class="popup fl">
                <p v-for="(items,indes) in this.infoData.sectioned_description && this.infoData.sectioned_description.summary.split('\n')"
                   :key="indes"
                >
                  {{items}}
                </p>
                <a href="javascript:;" class="more" @click="PopShow('about')"
                   v-if="this.infoData.sectioned_description && this.infoData.sectioned_description.summary.split('\n').length > 1"
                >
                  更多房源介绍
                </a>
              </div>
            </div>
            <div class="room-desc clearfix">
              <div class="item fl" v-for="(item,index) in this.infoData.hometour_rooms" :key="index">
                <span class="title">{{item.name_with_type}}</span>
                <div>
                  <span class="iconfont icon">&#xe607;</span>
                  <span class="iconfont icon">&#xe61d;</span>
                </div>
                <span>{{item.highlights_hometour[0]}} <span v-if="item.highlights_hometour[1]">,{{item.highlights_hometour[1]}}</span></span>
              </div>
            </div>
            <div class="room-info">
              <div class="info-item">
                <span class="title">整套房子/公寓</span>
                <span class="text">无需与房东或房客共享空间，独享整个房源</span>
              </div>
              <div class="info-item" v-for="(info,list) in this.infoData.guest_controls && this.infoData.guest_controls.structured_house_rules_with_tips"
                :key="list" v-if="info.key === 'check_in_time_and_check_out_time' || info.key === 'self_check_in'"
              >
                <span class="title" v-if="info.key !== 'self_check_in'">入住/退房</span>
                <span class="title" v-if="info.key === 'self_check_in'">自助入住</span>
                <span class="text">{{info.text}}</span>
              </div>
            </div>
            <div class="room-tool clearfix">
              <div class="tool-item fl">
                <span class="iconfont icon">&#xe665;</span>
                <p>无线网络</p>
              </div>
              <div class="tool-item fl">
                <span class="iconfont icon">&#xe69d;</span>
                <p>洗衣机</p>
              </div>
              <div class="tool-item fl">
                <span class="iconfont icon">&#xe7fd;</span>
                <p>电视</p>
              </div>
              <div class="tool-item fl">
                <span class="iconfont icon">&#xe72f;</span>
                <p>生活必需品</p>
              </div>
              <div class="tool-item fl">
                <span class="iconfont icon">&#xe613;</span>
                <p>吹风机</p>
              </div>
              <div class="tool-item fl">
                <span class="iconfont text">5+</span>
                <p class="text">更多设施</p>
              </div>
            </div>
            <div class="comment">
              <h3 class="comment-title">评价</h3>
              <div class="comment-number clearfix">
                <div class="number fl">
                  <span class="iconfont icon-item">&#xe70b;</span>
                  <span class="iconfont icon-item">&#xe70b;</span>
                  <span class="iconfont icon-item">&#xe70b;</span>
                  <span class="iconfont icon-item">&#xe70b;</span>
                  <span class="iconfont icon-item">&#xe70b;</span>
                  <span class="count">{{this.infoData.review_details_interface && this.infoData.review_details_interface.review_count}}条评价</span>
                </div>
                <div class="search fr">
                  <div class="box">
                    <span class="iconfont box-icon">&#xe651;</span>
                    <input type="text" class="box-text" placeholder="搜索评价">
                  </div>
                </div>
              </div>
              <div class="comment-type clearfix">
                <div class="type-item clearfix fl"
                    v-for="(type,lists) in this.infoData.review_details_interface && this.infoData.review_details_interface.review_summary"
                    :key="lists"
                >
                  <span class="type-title fl">{{type.label}}</span>
                  <div class="fr icon-wrap">
                    <span class="iconfont type-icon">&#xe70b;</span>
                    <span class="iconfont type-icon">&#xe70b;</span>
                    <span class="iconfont type-icon">&#xe70b;</span>
                    <span class="iconfont type-icon">&#xe70b;</span>
                    <span class="iconfont type-icon">&#xe70b;</span>
                  </div>
                </div>
                <!--<div class="type-item clearfix fl">-->
                  <!--<span class="type-title fl">如实描述</span>-->
                  <!--<div class="fr icon-wrap">-->
                    <!--<span class="iconfont type-icon">&#xe70b;</span>-->
                    <!--<span class="iconfont type-icon">&#xe70b;</span>-->
                    <!--<span class="iconfont type-icon">&#xe70b;</span>-->
                    <!--<span class="iconfont type-icon">&#xe70b;</span>-->
                    <!--<span class="iconfont type-icon">&#xe70b;</span>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class="type-item clearfix fl">-->
                  <!--<span class="type-title fl">如实描述</span>-->
                  <!--<div class="fr icon-wrap">-->
                    <!--<span class="iconfont type-icon">&#xe70b;</span>-->
                    <!--<span class="iconfont type-icon">&#xe70b;</span>-->
                    <!--<span class="iconfont type-icon">&#xe70b;</span>-->
                    <!--<span class="iconfont type-icon">&#xe70b;</span>-->
                    <!--<span class="iconfont type-icon">&#xe70b;</span>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class="type-item clearfix fl">-->
                  <!--<span class="type-title fl">如实描述</span>-->
                  <!--<div class="fr icon-wrap">-->
                    <!--<span class="iconfont type-icon">&#xe70b;</span>-->
                    <!--<span class="iconfont type-icon">&#xe70b;</span>-->
                    <!--<span class="iconfont type-icon">&#xe70b;</span>-->
                    <!--<span class="iconfont type-icon">&#xe70b;</span>-->
                    <!--<span class="iconfont type-icon">&#xe70b;</span>-->
                  <!--</div>-->
                <!--</div>-->
              </div>
              <div class="comment-list">
                <div class="list-item clearfix"
                     v-for="(comment,comlist) in this.infoData.sorted_reviews" :key="comlist"
                >
                  <div class="name-img fl">
                    <img :src="comment.reviewer.picture_url" alt="">
                  </div>
                  <div class="name-info fl">
                    <div class="name clearfix">{{comment.reviewer.first_name}} <span class="iconfont fr">&#xe6d5;</span></div>
                    <div class="date">{{comment.localized_date}}</div>
                  </div>
                  <div class="text">{{comment.comments}}</div>
                </div>
              </div>
              <div class="other clearfix" v-if="this.infoData.sorted_reviews && this.infoData.sorted_reviews.length !== 0">
                <div class="page-wrap fl">
                  <a href="javascript:;" class="page-item active">1</a>
                  <a href="javascript:;" class="page-item">2</a>
                  <a href="javascript:;" class="page-item">&gt;</a>
                </div>
                <span class="fr">房东收到的其他评价</span>
              </div>
            </div>
            <div class="date-wrap">
              <h3 class="date-title">可订日期</h3>
              <div class="timer">
                <div class="condition clearfix">
                  <div class="left-text fl">
                    <span>至少住一晚 ·</span>
                    <span>今天更新</span>
                  </div>
                  <div class="right-text fr">
                    <a href="javascript:;">清除日期</a>
                  </div>
                </div>
                <div class="timer-box" style="margin-bottom: 80px">
                  <el-date-picker
                    v-model="value6"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                  </el-date-picker>
                </div>
              </div>
            </div>
            <div class="position">
              <h3 class="position-title">位置</h3>
              <div class="position-info">
                <div class="position-item">
                  <div class="item-title">
                    <span class="list">{{this.infoData.location_title}}</span>,
                  </div>
                  <div class="item-text" v-if="this.infoData.sectioned_description && this.infoData.sectioned_description.neighborhood_overview">
                    <!--<p>条条百年名路,梧桐繁茂｡排排历史建筑,岁月沧桑｡</p>-->
                    <!--<p>{{this.infoData.sectioned_description && this.infoData.sectioned_description.neighborhood_overview}}</p>-->
                    <p v-for="(items,indes) in this.infoData.sectioned_description && this.infoData.sectioned_description.neighborhood_overview.split('\n')"
                       :key="indes"
                    >
                      {{items}}
                    </p>
                    <a href="javascript:;" class="more" @click="PopShow('city')"
                       v-if="this.infoData.sectioned_description && this.infoData.sectioned_description.neighborhood_overview.split('\n').length > 1"
                    >
                      查看更多
                    </a>
                  </div>
                </div>
                <div class="position-item">
                  <div class="item-title">
                    <span class="list">出行信息</span>
                  </div>
                  <div class="item-text" v-if="this.infoData.sectioned_description && this.infoData.sectioned_description.transit">
                    <!--<pre>{{this.infoData.sectioned_description && this.infoData.sectioned_description.transit}}</pre>-->
                    <p v-for="(items,indes) in this.infoData.sectioned_description && this.infoData.sectioned_description.transit.split('\n')"
                       :key="indes"
                    >
                      {{items}}
                    </p>
                    <a href="javascript:;" class="more" @click="PopShow('city')"
                       v-if="this.infoData.sectioned_description && this.infoData.sectioned_description.transit.split('\n').length > 1"
                    >
                      查看更多
                    </a>
                  </div>
                </div>
              </div>
              <div class="map" style="height: 280px;background-color: pink;margin-bottom: 20px">
                <el-amap vid="amap"></el-amap>
              </div>
              <div class="position-list">
                <ul>
                  <li class="list-item">
                    <span class="iconfont">&#xe6bc;</span>房源具体位置将在预订确认后提供
                  </li>
                  <!--<li class="list-item">-->
                    <!--<span class="iconfont">&#xe64c;</span>周边热门：珠江新城（约1.7公里）"、"广东省博物馆（约2.5公里）"、"广州塔（约3.1公里）-->
                  <!--</li>-->
                  <!--<li class="list-item">-->
                    <!--<span class="iconfont">&#xe64c;</span>周边热门：珠江新城（约1.7公里）"、"广东省博物馆（约2.5公里）"、"广州塔（约3.1公里）-->
                  <!--</li>-->
                  <!--<li class="list-item">-->
                    <!--<span class="iconfont">&#xe64c;</span>周边热门：珠江新城（约1.7公里）"、"广东省博物馆（约2.5公里）"、"广州塔（约3.1公里）-->
                  <!--</li>-->
                </ul>
                <a href="javascript:;" class="more">查看更多周边信息</a>
              </div>
            </div>
            <div class="notice">
              <h3 class="notice-title">须知</h3>
              <ul class="notice-list">
                <li class="list-item clearfix">
                  <div class="left-title fl">基本要求</div>
                  <div class="right-text fl">
                    <div class="text-item"
                         v-for="(notice,noticelist) in this.infoData.guest_controls && this.infoData.guest_controls.structured_house_rules"
                         :key="noticelist"
                    >
                      {{notice}}
                    </div>
                    <div class="rules">
                      <a href="javascript:;" class="more" @click="PopShow('rules')">房屋守则</a>
                    </div>
                    <!--<PopUp :show.sync="popshow" :show-rules="showRules" :show-city="showCity"-->
                           <!--:data="this.infoData.guest_controls && this.infoData.guest_controls.p3_structured_house_rules"-->
                           <!--:other-rules="this.infoData.additional_house_rules"-->
                    <!--&gt;</PopUp>-->
                  </div>
                </li>
                <li class="list-item clearfix">
                  <div class="left-title fl">取消政策</div>
                  <div class="right-text fl">
                    <div class="text-item">
                      中等<a href="javascript:;" class="more">查看完整详情</a>
                    </div>
                  </div>
                </li>
                <li class="list-item clearfix">
                  <div class="left-title fl">交易提示</div>
                  <div class="right-text fl">
                    <div class="text-item">
                      为了保护您的账号隐私和付款安全，请不要相信其它任何平台的折扣或礼金券代订，并始终在爱彼迎站内转账和交流。
                      <a href="javascript:;" class="more">查看详情</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="landlord_2">
              <h3 class="landlord_2-title">房东</h3>
              <div class="landlord_2-info clearfix">
                <div class="left-text fl">
                  <div class="name">{{this.infoData.primary_host && this.infoData.primary_host.host_name}} <a href="javascript:;" class="more">联系房东</a></div>
                  <div class="city-time">
                    <span v-if="this.infoData.primary_host && this.infoData.primary_host.location_long">{{this.infoData.primary_host && this.infoData.primary_host.location_long}} ·</span>
                    {{this.infoData.primary_host && this.infoData.primary_host.member_since_full_str}}
                  </div>
                  <div class="type clearfix">
                    <div class="type-comment fl" v-if="this.infoData.primary_host && this.infoData.primary_host.badges[0].count">
                      <span class="color">{{this.infoData.primary_host && this.infoData.primary_host.badges[0].count}}</span>
                      条评论
                    </div>
                    <div class="type-validate fl">
                      <img src="../assets/images/verified.png" alt="">
                      已验证
                    </div>
                  </div>
                </div>
                <div class="right-img fr">
                  <img :src="this.infoData.primary_host && this.infoData.primary_host.profile_pic_path" alt="">
                </div>
              </div>
              <div class="interaction">
                <h4 class="interac-title">与房客的互动</h4>
                <p class="interac-text">有问题随时通过任何方式都可以联系我,没回复时请拨打我电话!</p>
                <div class="interac-list">
                  <div class="interac-item">
                    <span class="item-title">回复率：</span>
                    {{this.infoData.primary_host && this.infoData.primary_host.response_rate_without_na}}
                  </div>
                  <div class="interac-item">
                    <span class="item-title">回复时间：</span>
                    {{this.infoData.primary_host && this.infoData.primary_host.response_time_without_na}}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="order fl">
            <div class="order-goods">
              <div class="goods-price">
                <span class="new-price">￥230</span>
                <span class="old-price">￥231</span>
                <span class="evenings">每晚</span>
              </div>
              <div class="goods-discount">
                <span class="discount-item"><span class="iconfont icon active">&#xe608;</span>春季特惠8.8折</span>
                <span class="discount-item"><span class="iconfont icon">&#xe608;</span>满七天立减6%</span>
                <span class="discount-item"><span class="iconfont icon">&#xe608;</span>礼金卷</span>
              </div>
              <div class="goods-comment">
                <span class="iconfont icon">&#xe70b;&#xe70b;&#xe70b;&#xe70b;&#xe70b;</span>
                <span class="count">{{this.infoData.review_details_interface && this.infoData.review_details_interface.review_count}}条</span>
              </div>
            </div>
            <div class="input-wrap">
              <div class="input-item">
                <h6 class="input-title">日期</h6>
                <div class="choice">
                  <el-date-picker
                    v-model="value9"
                    type="daterange"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    @change="changeTime"
                  >
                  </el-date-picker>
                </div>
              </div>
              <div class="input-item">
                <h6 class="input-title">房客</h6>
                <div class="choice" @click="showNumber">
                  <span v-if="!this.count">1人</span>
                  <span v-if="this.count">{{this.count}}人</span>
                  <span v-if="this.babyAdd">,{{this.babyCount}}名婴幼儿</span>
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
                        <a href="javascript:;" class="fr sure" @click.stop="sure">确定</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="order-subtotal">
              <div class="subtotal-item evenings-price clearfix">
                <div class="fl">
                  <span>￥231 x 1晚</span>
                </div>
                <div class="fr"><span>￥231</span></div>
              </div>
              <div class="subtotal-item clearfix">
                <div class="fl">
                  <span class="discount">春季特惠8.8折</span>
                  <span class="symbol">?</span>
                </div>
                <div class="fr discount-price"><span>-￥28</span></div>
              </div>
              <div class="subtotal-item clean clearfix">
                <div class="fl">
                  <span>清洁费</span>
                  <span class="symbol">?</span>
                </div>
                <div class="fr"><span>￥48</span></div>
              </div>
              <div class="subtotal-item service clearfix">
                <div class="fl">
                  <span>服务费：减免￥33</span>
                  <span class="symbol">?</span>
                </div>
                <div class="fr"><span>￥0</span></div>
              </div>
              <div class="subtotal-item clearfix">
                <div class="fl total" >
                  <span >总价</span>（节省￥28）
                </div>
                <div class="fr">
                  <span class="total-price">￥285</span>
                </div>
              </div>
            </div>
            <div class="apply">
              <a href="javascript:;" @click="goToOrder">申请预订</a>
              <div class="text">您暂时不会被收费</div>
            </div>
          </div>
        </div>
        <div class="live">
          <h3 class="live-title">你可能还喜欢</h3>
          <MovePlusList :data="this.loveData"></MovePlusList>
        </div>
        <div class="city-other clearfix">
          <h3 class="other-title">广州市附近的其他选择</h3>
          <p class="more"><span class="more-title">更多广州市的房源：</span>Apartments · Bed and breakfasts · Lofts · Villas · Condominiums</p>
          <div class="service-wrap">
            <ul class="other-service fl">
              <li class="service-item">
                <a href="javascript:;">Hong Kong</a>
              </li>
              <li class="service-item">
                <a href="javascript:;">Wan Chai</a>
              </li>
              <li class="service-item">
                <a href="javascript:;">Guangzhou</a>
              </li>
              <li class="service-item">
                <a href="javascript:;">Propriano</a>
              </li>
              <li class="service-item">
                <a href="javascript:;">Kanagawa Prefecture</a>
              </li>
              <li class="service-item">
                <a href="javascript:;">Wistow</a>
              </li>
            </ul>
            <ul class="other-service fl">
              <li class="service-item">
                <a href="javascript:;">Hong Kong</a>
              </li>
              <li class="service-item">
                <a href="javascript:;">Wan Chai</a>
              </li>
              <li class="service-item">
                <a href="javascript:;">Guangzhou</a>
              </li>
              <li class="service-item">
                <a href="javascript:;">Propriano</a>
              </li>
              <li class="service-item">
                <a href="javascript:;">Kanagawa Prefecture</a>
              </li>
              <li class="service-item">
                <a href="javascript:;">Wistow</a>
              </li>
            </ul>
            <ul class="other-service fl">
              <li class="service-item">
                <a href="javascript:;">Hong Kong</a>
              </li>
              <li class="service-item">
                <a href="javascript:;">Wan Chai</a>
              </li>
              <li class="service-item">
                <a href="javascript:;">Guangzhou</a>
              </li>
              <li class="service-item">
                <a href="javascript:;">Propriano</a>
              </li>
              <li class="service-item">
                <a href="javascript:;">Kanagawa Prefecture</a>
              </li>
              <li class="service-item">
                <a href="javascript:;">Wistow</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <PopUp :show.sync="popshow" :show-city="showCity" :show-rules="showRules" :show-about="showAbout"
             :city-title="this.infoData.location_title"
             :city-data="this.infoData.sectioned_description && this.infoData.sectioned_description.neighborhood_overview"
             :trip-time-data="this.infoData.sectioned_description && this.infoData.sectioned_description.transit"
             :data="this.infoData.guest_controls && this.infoData.guest_controls.p3_structured_house_rules"
             :other-rules="this.infoData.additional_house_rules"
             :about-data="this.infoData.sectioned_description && this.infoData.sectioned_description.description"
      ></PopUp>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../components/Header';
  import Footer from '../components/Footer';
  import ImageList from '../components/ImageList';
  import MovePlusList from '../components/MovePlusList';
  import PopUp from '../components/PopUp';
  export default {
    name: 'Datail',
    props: ['id'],
    components: {
      Header, Footer, ImageList, MovePlusList, PopUp
    },
    data () {
      return {
        infoData: [],
        loveData: [],
        value9: '',
        showSelect: false,
        city: '',
        value6: '',
        count: 1,
        adultCount: 1,
        childrenCount: 0,
        babyCount: 0,
        babyAdd: null,
        showNumberselect: false,
        popshow: false,
        showRules: false,
        showCity: false,
        showAbout: false,
        timeArray: []
      };
    },
    methods: {
      changeTime () {
        let data = this.value9;
        for (let i = 0; i < data.length; i++) {
          let year = data[i].getFullYear();
          let month = data[i].getMonth() + 1;
          let date = data[i].getDate();
          let str = year + '年' + month + '月' + date + '日';
          this.timeArray.push(str);
        }
        // console.log(this.timeArray);
      },
      async getDatail () {
        const {data} = await this.axios.get(`/api/categoryList/${this.id}`);
        this.infoData = data;
        console.log(data);
      },
      async getLoveData () {
        const { data } = await this.axios.get('/api/loveData');
        this.loveData = data;
        // console.log(data);
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
      },
      goToOrder () {
        this.$store.commit('addOrderData', {
          data: this.infoData,
          adultCount: this.adultCount,
          childrenCount: this.childrenCount,
          babyCount: this.babyCount,
          startTime: this.timeArray[0],
          endTime: this.timeArray[1]
        });
        this.$router.push({
          name: 'Order'
        });
      },
      PopShow (str) {
        if (str === 'rules') {
          this.showRules = true;
          this.showCity = false;
          this.showAbout = false;
        }
        if (str === 'city') {
          this.showCity = true;
          this.showRules = false;
          this.showAbout = false;
        }
        if (str === 'about') {
          this.showAbout = true;
          this.showRules = false;
          this.showCity = false;
        }
        this.popshow = true;
        // alert(111);
      }
    },
    mounted () {
      this.getLoveData();
      this.getDatail();
    }
  };
</script>

<style lang="less" scoped>
.main{
  /*position: relative;*/
  /deep/ .header{
    background-color: #fff;
    /*border-bottom: 1px solid #e4e4e4;*/
    .logo{
      span{
        font-size: 30px;
        color: #FF5A5F;
      }
    }
    .nav{
      .item{
        color: #000;
        &:hover{
          border-bottom: 2px solid #484848;
        }
      }
      .login{
        &:hover{
          border-bottom: 2px solid #484848;
        }
      }
    }
  }
  .content{
    .img-list{
      width: 100%;
    }
    .nav{
      height: 49px;
      line-height: 49px;
      .item:first-child{
        color: #484848;
        &:before{
          display: none;
        }
      }
      .item{
        font-size: 16px;
        font-weight: bolder;
        color: #008489;
        position: relative;
        margin-left: 8px;
        padding-left: 15px;
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
    .info-wrap{
      position: relative;
      /*font-size: 0;*/
      .goods-info{
        border-top: 1px solid #ccc;
        padding-top: 30px;
        /*display: inline-block;*/
        width: 58%;
        font-weight: bolder;
        /*height: 400px;*/
        /*background-color: deeppink;*/
        .goods{
          .room{
            font-size: 12px;
            color: rgb(57, 87, 106);
            font-weight: bolder;
            .city{

            }
            .room-desc{
              position: relative;
              margin-left: 5px;
              padding-left: 10px;
              border-top: none;
              padding-top: 0;
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
                background-color: #484848;
                border-radius: 50%;
              }
            }
          }
          .title{
            margin-top: 5px;
            font-size: 32px;
            line-height: 35px;
            color: rgb(72, 72, 72);
          }
          .room-label{
            margin-top: 15px;
            margin-bottom: 20px;
            .icon{
              display: inline-block;
              font-size: 14px;
              font-weight: normal;
              margin-right: 10px;
              .text{
                padding-left: 10px;
              }
            }
          }
          .type{
            padding: 0px 0 30px;
            border-bottom: 1px solid #ccc;
            span{
              padding: 5px 8px;
              border-radius: 10px;
              font-size: 12px;
            }
            span:first-child{
              background-color: rgb(234, 247, 234);
              color: rgb(41, 110, 0);
            }
            span:last-child{
              background-color: rgb(242, 242, 242);
              color: rgb(72, 72, 72);
            }
          }
        }
        .landlord{
          margin-top: 30px;
          .landlord-img{
            height: 64px;
            width: 64px;
            border-radius: 50%;
            background-color: pink;
            vertical-align: middle;
          }
          .landlord-info{
            font-weight:bolder;
            font-size: 16px;
            color: rgb(72, 72, 72);
            padding: 10px;
            .contact{
              margin-left: 10px;
              color: #008489;
            }
            .text{
              font-weight: bold;
              font-size: 14px;
            }
          }
          .popup{
            margin-top: 20px;
            width:100%;
            background:rgb(248, 248, 248);
            padding:10px 20px;
            box-sizing: border-box;
            color: rgb(72, 72, 72);
            font-size: 16px;
            font-weight: normal;
            line-height: 25px;
            border-radius:4px;
            position:relative;
            /*top:30px;*/
            /*left:30px;*/
            /*border:1px solid #333;*/
            p{
              display: none;
              &:nth-of-type(1){
                display: block;
              }
            }
            .more{
              display: inline-block;
              margin-top: 15px;
              color: rgb(0, 132, 137);
              font-size: 16px;
              font-weight: bolder;
            }
            span{
              display:block;
              width:0;
              height:0;
              /*border-width:0 10px 10px;*/
              /*border-style:solid;*/
              border-color:transparent transparent #333;
              position:absolute;
              top:-10px;
              left:5%;
              margin-left:-10px;
              em{
                display: block;
                width: 0;
                height: 0;
                border-width: 0 23px 25px;
                border-style: solid;
                border-color: transparent transparent #f8f8f8;
                position: absolute;
                top: -5px;
                left: 0px;
              }
            }
          }
        }
        .room-desc{
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #ccc;
          .item{
            width: 136px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-weight: normal;
            margin-right: 10px;
            .title{
              font-weight: bolder;
            }
            .icon{
              display: inline-block;
              font-size: 24px;
              margin-right: 5px;
            }
          }
        }
        .room-info{
          margin-top: 20px;
          border-top: 1px solid #ccc;
          padding: 32px 0;
          box-sizing: border-box;
          font-size: 16px;
          line-height: 35px;
          .title{
            display: inline-block;
            width: 136px;
            color: rgb(72, 72, 72);
            /*font-size: 16px;*/
          }
          .text{
            font-weight: normal;
          }
        }
        .room-tool{
          border-top: 1px solid #ccc;
          padding: 10px 0;
          .tool-item{
            width: 16.6666%;
            text-align: center;
            font-size: 14px;
            font-weight: normal;
            .icon{
              font-size: 24px;
            }
            .text{
              line-height: 31px;
              font-size: 14px;
              font-weight: bolder;
              color: rgb(0, 132, 137);
            }
          }
        }
        .comment{
          border-top: 1px solid #ccc;
          padding-top: 60px;
          .comment-title{
            color: rgb(72, 72, 72);
            font-size: 24px;
            font-weight: bolder;
            margin-bottom: 30px;
          }
          .comment-number{
            margin-bottom: 20px;
            .number{
              .icon-item{
                color: #008489;
              }
              .count{
                margin-left: 10px;
                font-weight: normal;
                font-size: 16px;
              }
            }
            .search{
              .box{
                padding: 5px;
                box-sizing: border-box;
                width: 187px;
                height: 35px;
                line-height: 20px;
                border: 1px solid #ccc;
                text-align: center;
                border-radius: 5px;
                .box-icon{
                  width: 20%;
                  vertical-align: middle;
                }
                .box-text{
                  width: 80%;
                  border: none;
                }
              }
            }
          }
          .comment-type{
            .type-item{
              width: 45%;
              margin-right: 10%;
              line-height: 34px;
              .type-title{
                font-size: 16px;
                font-weight: 500;
              }
              .type-icon{
                color: #008489;
              }
            }
            .type-item:nth-child(even){
              margin-right: 0;
            }
          }
          .comment-list{
            margin-top: 30px;
            .list-item{
              border-top: 1px solid #ccc;
              padding: 20px 0;
              .name-img{
                height: 48px;
                width: 48px;
                img{
                  display: inline-block;
                  background-color: pink;
                  height: 100%;
                  width: 100%;
                  border-radius: 50%;
                }
              }
              .name-info{
                width: 88%;
                margin-left: 20px;
                .name{

                }
                .date{
                  font-weight: normal;
                }
              }
              .text{
                margin-top: 60px;
                font-size: 16px;
                font-weight: normal;
              }
            }
          }
          .other{
            padding-top: 24px;
            border-top: 1px solid #ccc;
            line-height: 32px;
            .page-wrap{
              .page-item{
                display: inline-block;
                height: 32px;
                width: 32px;
                text-align: center;
                line-height: 32px;
                border: 1px solid rgb(0, 132, 137);
                border-radius: 50%;
                margin-right: 10px;
                color: #008489;
              }
              .active{
                background-color: #008489;
                color: #fff;
              }
            }
            span{
              color: #008489;
              font-size: 15px;
              font-weight: bolder;
            }
          }
        }
        .date-wrap{
          margin-top: 80px;
          .date-title{
            font-size: 24px;
            color: #484848;
            font-weight: bolder;
            margin-bottom: 30px;
          }
          .condition{
            font-size: 16px;
            font-weight: 600;
            color: #484848;
            margin-bottom: 30px;
            .left-text{

            }
            .right-text{
              a{
                color: #008489;
              }
            }
          }
          .timer-box{
            .el-date-editor--daterange.el-input__inner {
              width: 310px;
              margin-left: -50px;
            }
          }
        }
        .position{
          .position-title{
            font-size: 24px;
            font-weight: bolder;
            color: #484848;
            margin-bottom: 30px;
          }
          .position-info{
            .position-item{
              margin-bottom: 30px;
              .item-title{
                font-size: 16px;
                margin-bottom: 10px;
                .list{
                  font-weight: bolder;
                }
              }
              .item-text{
                font-size: 16px;
                font-weight: normal;
                .more{
                  display: block;
                  margin-top: 10px;
                  color: #008489;
                  font-weight: bolder;
                  font-size: 16px;
                }
                p{
                  display: none;
                  /*!*&:not(:nth-of-type(1)){*!*/
                    /*!*display: none;*!*/
                  /*!*}*!*/
                  &:nth-of-type(1),&:nth-of-type(3){
                    display: block;
                  }
                  &:nth-of-type(2){
                    margin-top: 20px;
                    display: block;
                  }
                }
              }
            }
          }
          .position-list{
            .list-item{
              width: 100%;
              margin-bottom: 10px;
            }
            .more{
              color: #008489;
              font-weight: bolder;
              font-size: 16px;
            }
          }
        }
        .notice{
          margin-top: 80px;
          .notice-title{
            font-size: 24px;
            font-weight: bolder;
          }
          .notice-list{
            .list-item{
              margin-top: 40px;
              .left-title{
                width: 30%;
                font-size: 16px;
                font-weight: bolder;
              }
              .right-text{
                font-size: 16px;
                font-weight: 400;
                width: 70%;
              }
              .more{
                font-size: 16px;
                color: #008489;
                font-weight: bolder;
              }
            }
          }
        }
        .landlord_2{
          margin-top: 80px;
          .landlord_2-title{
            font-size: 24px;
            font-weight: bolder;
          }
          .more{
            font-size: 16px;
            color: #008489;
          }
          .landlord_2-info{
            margin-top: 30px;
            .left-text{
              .name{
                font-size: 16px;
                font-weight: bolder;
              }
              .city-time{
                margin-top: 5px;
                font-size: 14px;
                font-weight: bolder;
              }
              .type{
                margin-top: 10px;
                .type-comment{
                  font-size: 14px;
                  margin-right: 15px;
                  height: 24px;
                  line-height: 24px;
                  .color{
                    display: inline-block;
                    margin-right: 5px;
                    box-sizing: border-box;
                    padding: 0px 8px;
                    background-color: rgb(255, 195, 51);
                    color: #fff;
                    border-radius: 5px;
                  }
                }
                .type-validate{
                  img{
                    height: 24px;
                    width: 24px;
                    vertical-align: middle;
                    margin-right: 10px;
                  }
                }
              }
            }
            .right-img{
              height: 88px;
              width: 88px;
              background-color: pink;
              img{
                height: 100%;
                width: 100%;
                border-radius: 50%;
              }
            }
          }
          .interaction{
            margin-top: 30px;
            .interac-title{
              font-size: 16px;
              font-weight: bolder;
            }
            .interac-text{
              margin-top: 10px;
              font-weight: 500;
            }
            .interac-list{
              margin-top: 30px;
              .interac-item{
                font-size: 16px;
                font-weight: bolder;
                .item-title{
                  font-weight: normal;
                }
              }
            }
          }
        }
      }
      .order{
        /*display: inline-block;*/
        margin-left: 5%;
        width: 36.5%;
        height: 570px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 24px;
        box-sizing: border-box;
        .order-goods{
          .goods-price{
            .new-price{
              font-size: 22px;
              color: #008489;
              font-weight: bolder;
            }
            .lod-price{
              font-size: 14px;
              color: #767676;
            }
            .evenings{
              color: #484848;
            }
          }
          .goods-discount{
            .discount-item{
              margin-right: 5px;
              font-size: 12px;
              color: #767676;
              .icon{
                display: inline-block;
                height: 12px;
                width: 12px;
                text-align: center;
                line-height: 11px;
                background-color:rgb(187, 187, 187);
                color: #fff;
                border-radius: 50%;
                margin-right: 5px;
              }
              .active{
                background-color: rgb(96, 182, 181);
              }
            }
          }
          .goods-comment{
            font-size: 12px;
            .icon{
              font-size: 12px;
              color: #008489;
            }
            .count{
              color: #484848;
              font-weight: bolder;
            }
          }
        }
        .input-wrap{
          margin-top: 20px;
          border-top: 1px solid #ccc;
          padding-top: 20px;
          .input-item{
            margin-bottom: 10px;
            .input-title{
              font-size: 12px;
              font-weight: bolder;
              margin-bottom: 5px;
            }
            .choice{
              position: relative;
              padding: 8px;
              box-sizing: border-box;
              border: 1px solid #ccc;
              border-radius: 3px;
              height: 40px;
              /*line-height: 40px;*/
              .number-select{
                display: inline-block;
                padding: 30px 20px 20px;
                box-sizing: border-box;
                position: absolute;
                top: 39px;
                left: 0px;
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
        .order-subtotal{
          margin-top: 10px;
          .subtotal-item{
            border-bottom: 1px solid #EBEBEB ;
            padding: 5px;

            .discount,.discount-price{
              color: #008489;
            }
            .total{
              font-size: 14px;
              font-weight: bolder;
              color: #008489;
              span{
                color: #484848;
              }
            }
            .total-price{
              font-weight: bolder;
              color: #484848;
            }
          }
          .symbol{
            display: inline-block;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            line-height: 15px;
            text-align: center;
            border: 1px solid #484848;
          }
        }
        .apply{
          text-align: center;
          margin-top: 20px;
          a{
            display: inline-block;
            width: 100%;
            height: 45px;
            line-height: 45px;
            border-radius: 4px;
            font-size: 16px;
            font-weight: bolder;
            color: #fff;
            text-align: center;
            background-color: #ff5a5f;
            margin-bottom: 10px;
          }
          .text{
            font-size: 12px;
            font-weight: bolder;
          }
        }
      }
    }
    .live{
      margin-top: 100px;
      overflow: hidden;
      .live-title{
        font-size: 24px;
        font-weight: bolder;
        margin-bottom: 20px;
      }
    }
    .city-other{
      margin-top: 80px;
      .other-title{
        font-size: 24px;
        font-weight: bolder;
        margin-bottom: 30px;
      }
      .more{
        font-size: 16px;
        color: #767676;
        font-weight: normal;
        .more-title{
          font-weight: 600;
          color: #484848;
        }
      }
      .service-wrap{
        margin-top: 20px;
        .other-service{
          width: 30%;
          .service-item{
            a{
              color: #767676;
            }
          }
        }
      }
    }
  }
  /deep/ .footer{
    margin-top: 40px;
  }
}
</style>
<style>
  .el-input__inner {
    border: none;
    height: 24px;
  }
  .el-date-editor--daterange.el-input, .el-date-editor--daterange.el-input__inner, .el-date-editor--timerange.el-input, .el-date-editor--timerange.el-input__inner {
    width: 310px;
  }
  .el-date-editor .el-range-separator {
     height: 34px!important;
  }
  .el-icon-date:before {
    content: "";
  }
</style>
