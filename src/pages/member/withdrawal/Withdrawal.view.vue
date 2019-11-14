<template>
  <f7-page>
    <ff-header-goback titProp='提款'></ff-header-goback>
    <section class="withdrawal scroll-con">
      <article class="wi-t">
        <div class="wi-tf">
          <div class="wi-fz">
            <p class="wi-ft">总资产(元)</p>
            <p class="wi-fn">26000</p>
          </div>
          <div class="wi-fz">
            <p class="wi-ft">中心钱包(元)</p>
            <p class="wi-fn">24000</p>
          </div>
        </div>
        <p class="wi-bw"><button class="wi-but btn">一键回收</button></p>
      </article>
      <article class="wi-b">
        <p class="wib-tit">提款至</p>
        <div class="wib-n">
          <p class="wibn-name">张三丰</p>
          <p class="wibn-card"><span>中国银行</span><span>**** **** **** 1234</span> </p>
        </div>
        <div class="wib-a">
          <p class="wib-tit">提款金额</p>
          <p class="wib-i">
            <span class="wibi-l">￥</span>
            <span class="wibi-m"><input type="text" class="ff-input" name="" value="" placeholder="请输入提款金额"></span>
            <span class="wibi-r">全部提款</span>
          </p>
        </div>
        <p class="wit-war">您的提款次数今日已达上限，请明日再来。</p>
      </article>
      <p class="l-but w175" @touchend.prevent="goNext">
        <f7-button fill sheet-open=".keyboard">下一步</f7-button>
      </p>
    </section>
    <ff-keyboard></ff-keyboard>
  </f7-page>
</template>
<script>
import HeaderGoBack from "@p/comm/HeaderGoBack.view"; // 头部logo
import KeyBoard from "@p/comm/KeyBoard.view"; // 键盘
export default {
  name: 'Recharge', // 充值
  components: {
    "ff-header-goback": HeaderGoBack,
    "ff-keyboard": KeyBoard,
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
    goNext() {
      this.diacon = {
                      title: '温馨提示',
                      con: '为了您的资金安全，我们会将您的资金分成29,700.00、294,400、123.00三部分，陆续打到您的帐号上，请您耐心等待。',
                      but: '我知道了'
                    }
      this.$customEvent.trigger('dialogCon', this.diacon);
      this.$customEvent.trigger('changeDialog', true);
    }
  },
  destroyed() {
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.withdrawal{
  .wi-t{
    height: 0.85rem;
    padding: 0.2rem;
    position: relative;
    background-color: $withdraw-tbg;
    .wi-tf{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-top: 0.15rem;
      .wi-fz{
        width: 100%;
        color: $font-login;
        .wi-ft{
          font-size: 0.14rem;
          color: rgba($font-login, 0.6)
        }
        .wi-fn{
          font-size: 0.27rem;
          line-height: 0.46rem;
          color: rgba($font-login, 0.8)
        }
      }
    }
    .wi-bw{
      position: absolute;
      top: 0.1rem;
      right: 0.2rem;
      .wi-but{
        width: 0.7rem;
        height: 0.28rem;
        border-radius: 0.14rem;
        border: solid 0.01rem $font-but-wall;
        color: $font-but-wall;
        font-size: 0.12rem;
        background: none;
      }
    }

  }
  .wi-b{
    padding: 0.2rem 0.2rem 0.1rem;
    background-color: $login-bg;
    border-radius: 0.06rem;
    .wib-tit{
      font-size: 0.16rem;
      color: rgba($font-login, 0.6);
      line-height: 0.24rem;
    }
    .wib-n{
      display: flex;
      justify-content: space-between;
      border-bottom: 0.01rem solid rgba($ver-lin, 0.7);
      line-height: 0.38rem;
      margin: 0.08rem 0 0.2rem;
      .wibn-name{
        width: 50%;
        font-size: 0.15rem;
        color: $font-login;
      }
      .wibn-card{
        width: 200%;
        font-size: 0.14rem;
        color: rgba($font-login, 0.8)
      }
    }
    .wib-a{
      border-bottom: 0.01rem solid rgba($ver-lin, 0.7);
      line-height: 0.38rem;
      margin: 0.08rem 0;
      .wib-i{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .wibi-l{
          width: 20%;
          font-size: 0.23rem;
          color: $font-login;
        }
        .wibi-m{
          width: 200%;
          color: $font-login;
          font-weight: bold;
          input{
            font-size: 0.23rem;
          }
          input::-webkit-input-placeholder {
            font-size: 0.15rem;
            line-height: 0.3rem;
          }
          input:-moz-placeholder {
            font-size: 0.15rem;
            line-height: 0.3rem;
          }
          input::-moz-placeholder { 
            font-size: 0.15rem;
            line-height: 0.3rem;
          }
          input:-ms-input-placeholder {
            font-size: 0.15rem;
            line-height: 0.3rem;
          }

        }
        .wibi-r{
          width: 40%;
          color: $font-but-wall;
        }
      }
    }
  }
  .wit-war{
    padding-top: 0.05rem;
    color: $font-red;
    font-size: 0.11rem;
  }
}
</style>