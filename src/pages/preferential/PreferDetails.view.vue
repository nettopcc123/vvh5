<template>
    <f7-sheet class="perdetial" swipe-to-close backdrop :opened="sheetOpened" @sheet:closed="sheetOpened = false">
      <f7-toolbar class="per-twrap">
        <div class="per-tit">活动详情</div>
        <div class="per-close">
          <f7-link sheet-close><svg-icon icon-class="close" /></f7-link>
        </div>
      </f7-toolbar>
      <!-- Scrollable sheet content -->
      <f7-page-content class="per-con">
        <h2>我是活动详情</h2>
        <div>
          <h3>活动内容</h3>
          <ul>
            <li>为感谢V竞技忠实客户对我们的厚爱，V竞技长期回馈银行卡存款客户。</li>
            <li>凡使用网银转账/支付宝转账/手机银行转账/ATM存款/柜台转账/至我司的收款银行卡，即可获赠存款金额1%的赠送红利。</li>
          </ul>
          <h3>活动规则：</h3>
          <ul>
            <li>活动时间：2017.05.09-2020.12.31。</li>
            <li>每用户限领取一次。</li>
            <li>爵士娱乐有权对活动修改，并保留对活动的最终解释权。</li>
            <li>活动时间：2017.05.09-2020.12.31。</li>
            <li>每用户限领取一次。</li>
            <li>爵士娱乐有权对活动修改，并保留对活动的最终解释权。</li>
            <li>活动时间：2017.05.09-2020.12.31。</li>
            <li>每用户限领取一次。</li>
            <li>爵士娱乐有权对活动修改，并保留对活动的最终解释权。</li>
          </ul>
        </div>
      </f7-page-content>
    </f7-sheet>
</template>
<script>
export default {
  name: 'PerferDetails', // 优惠详情
  components: {
  },
  props: {},
  computed: {
  },
  data() {
    return {
      sheetOpened: false,
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
.perdetial{
  background: $login-bg;
  height: 60vh;
  .per-twrap{
    height: 0.44rem;
    line-height: 0.44rem;
    border-bottom: 0.01rem solid $per-lin;
    position: relative;
    .per-tit{
      text-align: center;
      font-size: 0.16rem;
      color: $icon;
      width: 100%;
    }
    .per-close{
      position: absolute;
      right: 0.2rem;
      top: 0rem;
      svg{
        width: 0.21rem;
        height: 0.21rem;
      }
    }
  }
  .per-con{
    padding: 0.1rem 0.2rem; 
    height: calc(60vh - 0.45rem);
    overflow: auto;
    h2{
      font-size: 0.16rem;
      line-height: 0.3rem;
      color: $icon;
      padding-top: 0.1rem;
    }
    h3{
      font-size: 0.15rem;
      line-height: 0.2rem;
      color: rgba($icon, 0.5);
      padding: 0.15rem 0 0.05rem;
    }
    ul{
      padding-left: 0.18rem;
      li{
        font-size: 0.15rem;
        line-height: 0.24rem;
        color: rgba($icon, 0.5);
        list-style-type: decimal;
      }
    }
  }
}
</style>