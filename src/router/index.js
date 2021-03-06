import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Index from '../view/Index';
import Category from '../view/Category';
import Datail from '../view/Datail';
import Order from '../view/Order';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/datail/:id',
      name: 'Datail',
      component: Datail,
      props: true
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    }
  ]
});
