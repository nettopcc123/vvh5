<template>
  <f7-page>
    <ff-header-goback titProp='绑定银行卡'></ff-header-goback>
    <section class="bindbank scroll-con">
      <article class="bandbank-ward">
        <p class="bb-ft">绑定银行卡</p>
        <p v-if="!hasName" class="bb-ftrem">为了您的资金安全，请绑定您的银行卡</p>
        <p class="bb-has-name">请绑定<span>张三丰</span>的银行卡</p>
        <ul class="bb-list">
          <li v-if="!hasName">
            <p class="bbl-t">真实姓名</p>
            <p class="bbl-iw"><input type="text" class="ff-input" name="" value="" placeholder="请输入您的真实姓名"></p>
          </li>
          <li>
            <p class="bbl-t">银行卡</p>
            <p class="bbl-iw">
              <span><input type="text" class="ff-input" name="" value="" placeholder="请输入银行卡号"></span>
              <span class="bb-close"><svg-icon icon-class="close01" /></span>
            </p>
          </li>
        </ul>
        <p class="bank-info">
          <span>建议您绑定这些银行：</span>
          <span class="bank-i"><f7-button fill sheet-open=".stand-bank"><svg-icon icon-class="info" /></f7-button></span>
        </p>
      </article>
      <p class="l-but w175" @touchend.prevent="goNext">下一步</p>
    </section>
    <ff-stand-bank></ff-stand-bank>
  </f7-page>
</template>
<script>
import HeaderGoBack from "@p/comm/HeaderGoBack.view"; // 头部logo
import StandBank from "@p/comm/StandBank.view"; // 支持银行
export default {
  name: 'BindBank', // 绑定银行卡
  components: {
    "ff-header-goback": HeaderGoBack,
    "ff-stand-bank": StandBank,
  },
  props: {},
  computed: {
  },
  data() {
    return {
      hasName: false,
    };
  },
  created() {},
  mounted() {
  },
  filters: {
    
  },
  methods: {
    goNext() {
      if(this.hasName) {
        this.diacon = {
                        title: '温馨提示',
                        con: '您的银行卡类型暂不支持使用该，请更换其它银行卡重试，重点击查看<span style="font-size:0.15rem; color:#17acc7">支持的银行</span>。',
                        rightIcon: 'close'
                      }
        this.$customEvent.trigger('dialogCon', this.diacon);
        this.$customEvent.trigger('changeDialog', true);
      }
      const router = this.$f7router;
      router.navigate({
        name: 'bankBranch',
        path: '/bankBranch'
      });
    }
  },
  destroyed() {
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.bindbank{
  .bandbank-ward{
    background-color: $login-bg;
    border-radius: 0.06rem;
    padding: 0.5rem 0.2rem 0.2rem;
    color: $font-login;
    .bb-ft{
      font-size: 0.16rem;
      color: $font-login;
      line-height: 0.24rem;
    }
    .bb-ftrem{
      font-size: 0.11rem;
      color: rgba($icon, 0.6);
      line-height: 0.24rem;
    }
    .bb-has-name{
      font-size: 0.14rem;
      color: $login-f-pwd;
      line-height: 0.3rem;
      span{
        color: $font-login;
        padding: 0 0.03rem;
        font-size: 0.14rem;
      }
    }
    .bb-list{
      li{
        border-bottom: 0.01rem solid rgba($login-f-pwd, 0.3);
        padding-bottom: 0.05rem;
        .bbl-t{
          font-size: 0.15rem;
          color: $font-login;
          line-height: 0.4rem;
          padding-top: 0.15rem;
        }
        .bbl-iw{
          display: flex;
          justify-content: space-between;
          span{
            width: 100%; 
            display: flex;
            justify-content: flex-end;
            align-items: center;
            svg{
              width: 0.18rem;
              height: 0.18rem;
              color: rgba($login-f-pwd, 0.9);
            }
          }
          .bb-close{
            width: 15%;
          }
          input{
            line-height: 0.4rem;
          }
        }
      }
    }
    .bank-info{
      color: $font-wall;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 0.6rem;
      span{
        font-size: 0.14rem;
      }
      .bank-i{
        margin-left: 0.05rem;
        a{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          svg{
            width: 0.18rem;
            height: 0.18rem;
          }
        }
      }
    }
  }
}
</style>