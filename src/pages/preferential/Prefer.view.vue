<template>
  <f7-page>
    <ff-header-goback titProp='优惠活动'></ff-header-goback>
    <section class="prefer scroll-con">
      <ul class="per-li">
        <li v-for="(val, index) in list" :key="index">
          <f7-button fill sheet-open=".perdetial">
            <img :src="val.img" alt />
            <span class="p-s" :class="val.state">进行中</span>
          </f7-button>
        </li>
      </ul>
      <ff-perfer-details></ff-perfer-details>
    </section>
  </f7-page>
</template>
<script>
import HeaderGoBack from "@p/comm/HeaderGoBack.view"; // 头部logo
import PreferDetails from "@p/preferential/PreferDetails.view"; // 优惠详情
export default {
  name: 'BetgRecord', // 投注列表
  components: {
    "ff-header-goback": HeaderGoBack,
    "ff-perfer-details": PreferDetails,
  },
  props: {},
  computed: {
  },
  data() {
    return {
      sheetOpened: false,
      list:[{
        img: require("@/assets/img/perferent/pban01.jpg"),
        link: 'https://www.baidu.com',
        state: 'pbg0'
      },{
        img: require("@/assets/img/perferent/pban01.jpg"),
        link: 'https://www.baidu.com',
        state: 'pbg1'
      },{
        img: require("@/assets/img/perferent/pban01.jpg"),
        link: 'https://www.baidu.com',
        state: 'pbg2'
      },{
        img: require("@/assets/img/perferent/pban01.jpg"),
        link: 'https://www.baidu.com',
        state: 'pbg3'
      }]
    };
  },
  created() {},
  mounted() {
  },
  filters: {
    
  },
  methods: {
    bindEvent() {
    }
  },
  destroyed() {
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.prefer{
 background: $main-bg;
 text-align: center;
 padding: 0 0.12rem;
 .per-li{
   li{
     margin-top: 0.1rem;
     position: relative;
    img{
      width: 100%;
      border-radius: 0.06rem;
    }
    .p-s{
      width: 0.5rem;
      height: 0.18rem;
      border-radius: 0rem 0.06rem 0rem 0.06rem;
      display: inline-block;
      position: absolute;
      right: 0;
      top: 0;
      color: $font-per;
    }
    .pbg0{
      background-color: $font-but-wall;
    }
    .pbg1{
      background-color: $per-state-bg1;
    }
    .pbg2{
      background-color: $per-state-bg2;
    }
    .pbg3{
      background-color: $per-state-bg3;
      color: $font-per-s3;
    }
  }
 }
}
</style>