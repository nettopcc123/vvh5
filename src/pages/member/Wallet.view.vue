<template>
  <f7-page>
    <ff-header-goback titProp='钱包'></ff-header-goback>
    <section class="wallet scroll-con">
      <article class="w-c-warp">
        <p class="w-c-t">总资产(元)</p>
        <p class="w-c-z">26000</p>
        <ul class="w-c-list">
          <li>
            <p class="wc-n">2400</p>
            <p class="wc-f">中心钱包</p>
          </li>
          <li>
            <p class="wc-n">2400</p>
            <p class="wc-f">V竞技帐户</p>
          </li>
          <li>
            <f7-link href="/fundrecord">
              <button class="wc-but btn">资金记录</button>
            </f7-link>
          </li>
        </ul>
      </article>
      <article class="w-c-b">
        <ul class="wc-l">
          <li><f7-link href="/recharge"><svg-icon icon-class="recharge" />充值</f7-link></li>
          <li><f7-link href="/withdrawal"><svg-icon icon-class="withdraw" />提款</f7-link></li>
        </ul>
      </article>
    </section>
  </f7-page>
</template>
<script>
import HeaderGoBack from "@p/comm/HeaderGoBack.view"; // 头部logo
export default {
  name: 'Wallet', // 钱包
  components: {
    "ff-header-goback": HeaderGoBack,
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
.wallet{
  background: $main-bg;
  .w-c-warp{
    width: 3.21rem;
    height: 1.35rem;
    padding: 0.2rem 0.27rem;
    background-color: $login-bg;
    border-radius: 0.06rem;
    .w-c-t{
      font-size: 0.15rem;
      line-height: 0.2rem;
      color: rgba($font-login, 0.6);
    }
    .w-c-z{
      font-size: 0.28rem;
      color: $font-login;
      line-height: 0.4rem;
    }
    .w-c-list{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 0.6rem;
      margin-top: 0.2rem;
      .wc-n{
        font-size: 0.23rem;
        color: $font-login;
      }
      .wc-f{
        font-size: 0.14rem;
        color: rgba($font-login, 0.6);
      }
    }
    .wc-but{
      width: 0.71rem;
      height: 0.3rem;
      border-radius: 0.15rem;
      border: solid 0.01rem $font-but-wall;
      color: $font-but-wall;
      font-size: 0.12rem;
      background: none;
    }
  }
  .w-c-b{
    margin-top: 0.12rem;
    .wc-l{
      display: flex;
      justify-content: space-between;
      li{
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $font-wall;
        background-color: $login-bg;
        height: 0.55rem;
        font-size: 0.16rem;
        margin-right: 0.12rem;
        border-radius: 0.06rem;
        a{
          font-size: 0.16rem;
        }
        &:nth-child(2n){
          margin-right: 0rem;
        }
        svg{
          margin-right: 0.1rem;
          width: 0.2rem;
          height: 0.2rem;
        }
      }
    }
  }
}
</style>