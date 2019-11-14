<template>
  <f7-page>
    <ff-header-goback titProp='资金详情' riconProp="customer"></ff-header-goback>
    <section class="fun-det scroll-con">
      <p class="f-d-t">充值金额</p>
      <p class="f-d-a">￥5000</p>
      <div class="f-d-progress">
        <p class="f-pt">
          <span class="f-p-cir"><svg-icon icon-class="circle1" /></span>
          <span class="f-p-lin"></span>
          <span class="f-p-cir"><svg-icon icon-class="circle2" /></span>
          <span class="f-p-lin"></span>
          <span class="f-p-cir"><svg-icon icon-class="circle3" /></span>
        </p>
        <p class="f-ps">
          <span>发起</span>
          <span>审核中</span>
          <span>完成</span>
        </p>
        <p class="f-pb">
          <span>2019-10-27<br>17:30:09</span>
          <span></span>
          <span></span>
        </p>
      </div>
      <ul class="f-p-list">
        <li><span>支付渠道</span><span>支付宝扫码</span></li>
        <li><span>支付类型</span><span>充值</span></li>
        <li><span>备注</span><span>订单超时</span></li>
        <li><span>订单创建时间</span><span>2019-10-25 19:30:09</span></li>
        <li><span>订单更新时间</span><span>2019-10-25 19:30:09</span></li>
        <li><span>订单编号</span><span>128383873633656363</span></li>
        <li><span>转入平台</span><span>无</span></li>
        <li><span>转出平台</span><span>无</span></li>
        <li><span>提款银行卡</span><span>无</span></li>
        <li><span>手续费</span><span>无</span></li>
      </ul>
      <ul class="f-p-bbut">
        <li>取消订单</li>
        <li><f7-link href="#">查看转帐详情</f7-link></li>
      </ul>
    </section>
  </f7-page>
</template>
<script>
import HeaderGoBack from "@p/comm/HeaderGoBack.view"; // 头部logo
export default {
  name: 'FundDetails', // 资金详情
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

  },
  destroyed() {
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.fun-det{
 background: $login-bg;
 text-align: center;
 padding: 0.25rem;
 .f-d-t{
	font-size: 0.14rem;
  color: $font-login;
 }
 .f-d-a{
	font-size: 0.27rem;
	line-height: 0.24rem;
  color: $font-login;
  line-height: 0.5rem;
  font-weight: bold;
 }
 .f-d-progress{
   height: 0.8rem;
   width: 3.2rem;
   margin: 0 auto;
   .f-pt{
      width: 2.6rem;
      margin: 0 auto;
      display: flex;
      height: 0.3rem;
      justify-content: space-between;
      align-items: center;
      align-content: center;
    span{
      width: 100%;
      font-size: 0;
    }
    .f-p-lin{
      height: 0.01rem;
      background-color: $font-color;
    }
    .f-p-cir{
      width: 10%;
      svg{
        width: 0.16rem;
        height: 0.16rem;
      }
    }
   }
  .f-ps{
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    span{
      width: 0.8rem;
      color: $font-but-wall;
    }
   }
  .f-pb{
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    line-height: 0.14rem;
    padding-top: 0.05rem;
    span{
      width: 0.8rem;
      color: $login-f-pwd;
      line-height: 0.18rem;
    }
   }
 }

  .f-p-list{
    padding-top: 0.3rem;
    padding-bottom: 0.8rem;
    li{
      line-height: 0.36rem;
      display: flex;
      justify-content: space-between;
      span{
        font-size: 0.15rem;
        color: $font-login;
        &:nth-child(1){
          color: rgba($font-login, 0.6)
        }
      }
    }
  }
  .f-p-bbut{
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    li{
      width: 100%;
      line-height: 0.5rem;
      background-color: $but-deep;
      &:nth-child(1){
        border-right: 0.01rem solid $fd-d-lin;
      }
    }
  }
}
</style>