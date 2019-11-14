<template>
  <f7-page>
    <ff-header-goback titProp='关于我们'></ff-header-goback>
    <section class="about scroll-con">
      <article class="a-v">
        <p class="a-v-logo"><svg-icon icon-class="v88" /></p>
        <p class="a-v-tit">最佳电竞即时投注</p>
      </article>
      <article class="a-c">
        <h2 class="a-c-tit">官方主赞助商</h2>
        <p class="w25"><img :src="require('../../assets/img/login/z01.png')" alt=""></p>
        <h2 class="a-c-tit">支付合作</h2>
        <p class="w34"><img :src="require('../../assets/img/login/p01.png')" alt=""></p>
        <h2 class="a-c-tit">品牌合作</h2>
        <ul class="a-c-l">
          <li>
            <p><img :src="require('../../assets/img/login/c01.png')" alt=""></p>
            <p>188体育</p>
          </li>
          <li>
            <p><img :src="require('../../assets/img/login/c02.png')" alt=""></p>
            <p>GG彩票</p>
          </li>
        </ul>
      </article>
      <ff-foot-address></ff-foot-address>
    </section>
  </f7-page>
</template>
<script>
import HeaderGoBack from "@p/comm/HeaderGoBack.view"; // 头部logo
import Foot from '@p/comm/FootAddress.view'; // 底部
export default {
  name: 'Member', // 主页
  components: {
    "ff-header-goback": HeaderGoBack,
    'ff-foot-address': Foot,
  },
  props: {},
  computed: {
  },
  data() {
    return {
    };
  },
  created() {},
  mounted() {
    this.bindEvent()
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
.about{
 background: $login-bg;
 text-align: center;
 .a-v{
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    p{
      width: 100%;
    }
    .a-v-tit{
      font-size: 0.14rem;
      color: $font-login;
    }
    .a-v-logo{
      margin: 0.3rem 0 0.1rem;
      svg{
        width: 0.9rem;
        height: 0.9rem;
      }
    }
 }
 .a-c{
   height: calc(100vh - 3.5rem);
    img{
      width: 100%;
    }
 }
  .a-c-tit{
    font-size: 0.14rem;
    color: $font-login;
    margin-top: 0.35rem;
    margin-bottom: 0.12rem;
  }
  .w25{
    width: 2.5rem;
    margin: 0 auto;
  }
  .w34{
    width: 3.4rem;
    margin: 0 auto;
  }
  .a-c-l{
    width: 1.4rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    li{
      width: 50%;
      margin: 0px 0.05rem;
      img{
        max-width: 0.43rem;
      }
    }
  }
}
</style>