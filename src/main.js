import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueAMap from 'vue-amap';
// 引入重置样式、字体图标和公共样式
import './assets/css/reset.css';
import './assets/css/iconfont.css';
import './assets/css/common.css';
// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '\t72628c1f5ba9e6d264d8873d743fc993',
  plugin: [
    'AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView',
    'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor',
    'Geocoder'
  ],
  // 默认高德 sdk 版本为 1.4.4
  uiVersion: '1.0',
  v: '1.4.4'
});

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

// 定义全局点击函数
Vue.prototype.globalClick = function (callback) {
  document.getElementById('main').onclick = function () {
    callback();
  };
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
