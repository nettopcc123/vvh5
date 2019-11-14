<template>
    <f7-sheet class="fund-drop" swipe-to-close backdrop :opened="sheetOpened" @sheet:closed="sheetOpened = false">
      <f7-toolbar class="fd-twrap">
        <div class="fd-tit">类型筛选</div>
        <div class="fd-close">
          <f7-link sheet-close><svg-icon icon-class="close" /></f7-link>
        </div>
      </f7-toolbar>
      <f7-page-content class="fd-con">
        <ul class="fd-li">
          <li v-for="(val, index) in menu" :key="index" @click="getFdCur(val.code)" :class="curFd == val.code ? 'cur-fd' : ''">{{val.name}}</li>
        </ul>
        <p class="fd-but" :class="!!curFd ? 'fd-but-cur' : ''">登录</p>
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
      curFd: '',
      menu: [
        {
          code: 1,
          name: '充值'
        },{
          code: 2,
          name: '提现'
        },{
          code: 3,
          name: '转帐'
        },{
          code: 4,
          name: '加扣款'
        },{
          code: 5,
          name: '活动派彩'
        }
      ]
    };
  },
  created() {},
  mounted() {
  },
  filters: {
    
  },
  methods: {
    getFdCur(val) {
      this.curFd = val;
    }
  },
  destroyed() {
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.fund-drop{
  background: $but-deep;
  height: 2.5rem;
  .fd-twrap{
    height: 0.44rem;
    line-height: 0.44rem;
    border-bottom: 0.01rem solid $per-lin;
    position: relative;
    background-color: $fd-t-bg;
    .fd-tit{
      text-align: left;
      font-size: 0.16rem;
      color: $font-login;
      width: 100%;
      padding-left: 0.2rem;
    }
    .fd-close{
      position: absolute;
      right: 0.2rem;
      top: 0rem;
      svg{
        width: 0.21rem;
        height: 0.21rem;
      }
    }
  }
  .fd-con{
    padding: 0.12rem 0.15rem!important;
    .fd-li{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      box-sizing: border-box;
      li{
        width: 0.78rem;
        height: 0.46rem;
        border-radius: 0.06rem;
        border: solid 0.01rem $fd-but-lin;
        line-height: 0.46rem;
        text-align: center;
        margin-left: 0.11rem;
        margin-bottom: 0.12rem;
        box-sizing: border-box;
        font-size: 0.15rem;
        color: $login-f-pwd;
        &:nth-child(4n+1){
          margin-left: 0rem;
        }
      }
      .cur-fd{
        background-color: $fd-but-lin;
        color: rgba($font-funs, 0.8)
      }
    }
  }
  .fd-but{
    width: 1.23rem;
    height: 0.44rem;
    margin: 0.1rem auto 0;
    background-color: $logo-but-bg;
    border-radius: 0.2rem;
    font-size: 0.18rem;
    color: $login-f-pwd;
    text-align: center;
    line-height: 0.44rem;
  }
  .fd-but-cur{
    background-image: linear-gradient(90deg,$but-light-l 0%, $login-lin 100%), linear-gradient($but-deep, $but-deep);
    color: $font-login;
  }
}
</style>