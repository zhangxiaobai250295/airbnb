import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
// 引入重置样式、字体图标和公共样式
import './assets/css/reset.css';
import './assets/css/iconfont.css';
import './assets/css/common.css';

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
