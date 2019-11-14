<template>
  <f7-page>
    <ff-header-goback titProp='充值'></ff-header-goback>
    <section class="recharge scroll-con">
      <article class="r-t">
        <p class="r-title">选择支付渠道</p>
        <ul class="r-payli">
          <li v-for="(val, index) in payList" :key="index" @click="getCurPay(val.code)" :class="curPay==val.code  ? 'cur-pay' : ''">
            <p><svg-icon icon-class="wallet" /></p>
            <p>{{val.name}}</p>
          </li>
        </ul>
        <div class="r-name">
          充值用户： <span>张三丰</span>
        </div>
        <p class="r-title-b">充值金额</p>
        <div class="r-i-wrap">
          <span>￥</span>
          <span><input type="text" class="ff-input" name="" value="" placeholder="单笔金额500-5000元"></span>
          <span><svg-icon icon-class="close01" /></span>
        </div>
        <ul class="pay-amount">
          <li v-for="(val, index) in amount" :key="index" @click="getCurInp(val.code)" :class="curInp==val.code  ? 'cur-inp' : ''"> {{ val.bet }}</li>
        </ul>
      </article>
      <p class="l-but w175" :class="curPay && curInp  ? 'ibut-cur' : ''">
        <f7-link :href="furl">下一步</f7-link>
      </p>
    </section>
  </f7-page>
</template>
<script>
import HeaderGoBack from "@p/comm/HeaderGoBack.view"; // 头部logo
export default {
  name: 'Recharge', // 充值
  components: {
    "ff-header-goback": HeaderGoBack,
  },
  props: {},
  computed: {
  },
  data() {
    return {
      furl: '/fundDetails',
      curPay: '',
      curInp: '',
      amount: [{
        bet: 2000,
        code: 1
      },{
        bet: 3000,
        code: 2
      },{
        bet: 5000,
        code: 3
      },{
        bet: 8000,
        code: 4
      }],
      payList: [{
        code: 1,
        icon: 'pay',
        name: '支付宝扫码'
      },{
        code: 2,
        icon: 'pay',
        name: '微信扫码'
      },{
        code: 3,
        icon: 'pay',
        name: '支付宝支付'
      },{
        code: 4,
        icon: 'pay',
        name: '微信支付'
      },{
        code: 5,
        icon: 'pay',
        name: '银行卡转帐'
      }]
    };
  },
  created() {},
  mounted() {
  },
  filters: {
    
  },
  methods: {
    getCurPay(c) {
      this.curPay = c
      switch (c) {
        case 5:
          this.furl = '/fundBank'
          break;
        default:
          this.furl = '/fundDetails'
          break;
      }
    },
    getCurInp(c) {
      this.curInp = c
    }
  },
  destroyed() {
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.recharge{
  .r-t{
    width: 3.51rem;
    padding: 0.2rem 0.12rem 0.13rem;
    background-color: $login-bg;
    border-radius: 0.06rem;
    margin-bottom: 0.13rem;
  }
  .r-title{
    font-size: 0.14rem;
    color: $font-login;
    padding-left: 0.1rem;
  }
  .r-payli{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    li{
      background-color: $but-deep;
      border-radius: 0.06rem;
      width: 0.78rem;
      height: 0.54rem;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      padding: 0.12rem 0;
      margin-top: 0.1rem;
      border: 0.01rem solid $but-deep;
      margin-left: 0.1rem;
      &:nth-child(4n+1){
        margin-left: 0rem;
      } 
      p{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        text-align: center;
        color: rgba($login-f-pwd, 0.8);
        svg{
          width: 0.3rem;
	        height: 0.3rem;
        }
      }
    }
    .cur-pay{
      background-color: $fd-but-lin;
      border: 0.01rem solid $login-lin;
      p{color: $font-login;}
    }
  }

  .r-title-b{
    font-size: 0.16rem;
    color: rgba($font-login, 0.6);
    padding-top: 0.28rem;
    padding-left: 0.1rem;
  }
  .r-i-wrap{
    width: 3.34rem;
    margin: 0 auto;
    border-bottom: 0.01rem solid rgba($ver-lin, 0.7);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.08rem;
    line-height: 0.4rem;
    span{
      &:nth-child(1){
        font-size: 0.23rem;
        font-weight: bold;
        width: 10%;
        text-align: left;
      }
      &:nth-child(2){
        width: 100%;
        color: $login-f-pwd;
      }
      &:nth-child(3){
        width: 10%;
        text-align: right;
        svg{
          width: 0.15rem;
	        height: 0.15rem;
        }
      }
    }
  }
  .pay-amount{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    li{
      width: 0.75rem;
      height: 0.44rem;
      background-color: $but-deep;
      border-radius: 0.03rem;
      line-height: 0.44rem;
      text-align: center;
      margin-left: 0.1rem;
      margin-top: 0.13rem;
      font-size: 0.15rem;
      color: rgba($font-login, 0.8)
    }
    .cur-inp{
      background-color: $fd-but-lin;
    }
  }

  .r-name{
    border-bottom: 0.01rem solid rgba($ver-lin, 0.7);
    color: rgba($font-login, 0.6);
    font-size: 0.16rem;
    line-height: 0.4rem;
    padding: 0.2rem 0.08rem 0;
    span{
      color: $font-login;
      font-size: 0.16rem;
    }
  }
}
</style>