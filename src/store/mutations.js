import Vue from 'vue';

const mutations = {
  addOrderData (state, obj) {
    Vue.set(obj.data, 'adultCount', obj.adultCount);
    Vue.set(obj.data, 'babyCount', obj.babyCount);
    Vue.set(obj.data, 'childrenCount', obj.childrenCount);
    state.orderDate.push(obj.data);
  }
};

export default mutations;
