<template>
  <div id="main">
    <Header :data="this.navData"></Header>
    <Swiper :data="this.swiperData"></Swiper>
  </div>
</template>

<script>
  import Header from '../components/Header';
  import Swiper from '../components/Swiper';
  export default {
    name: 'Index',
    components: {
      Header, Swiper
    },
    data () {
      return {
        swiperData: [],
        navData: []
      };
    },
    methods: {
      async getSwiperData () {
        const { data } = await this.axios.get('/api/advertise');
        this.swiperData = data;
        // console.log(data);
      },
      async getNavData () {
        const { data } = await this.axios.get('/api/nav');
        this.navData = data;
        // console.log(data);
      }
    },
    mounted () {
      this.getSwiperData();
      this.getNavData();
    }
  };
</script>

<style lang="less" scoped>

</style>
