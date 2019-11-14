<template>
  <f7-sheet class="keyboard" swipe-to-close backdrop :opened="sheetOpened" @sheet:closed="sheetOpened = false">
    <div class="key-pwd">
      <p class="key-pwd-tit"><svg-icon icon-class="close01"></svg-icon>请输入提款密码</p>
      <div class="key-con">
        <p class="key-cft">确认提款</p>
        <p class="key-cfm"><span>￥</span><span>5000</span></p>
        <p class="key-cfb">张三丰 中国银行 *** *** *** 1234</p>
        <p class="key-inp">
          <span>{{ this.pwd[0] }}</span>
          <span>{{ this.pwd[1] }}</span>
          <span>{{ this.pwd[2] }}</span>
          <span>{{ this.pwd[3] }}</span>
        </p>
      </div>
      <p class="key-rem">密码错误</p>
    </div>
    <div class="keybord-close" @touchend.prevent="hidKeyBord()"><svg-icon icon-class="more" :class="hidKb ? 'tran270' : 'tran90'"></svg-icon></div>
    <ul class="key-list" :class="hidKb ? 'hid-kb' : ''">
      <li v-for="(val,index) in number" :key="index">
        <span v-if="val != 'del'" @touchend.prevent="getCurAmount(val)">{{ val }}</span>
        <svg-icon v-else :icon-class="val" @touchend.prevent="delAmount()" ></svg-icon>
      </li>
    </ul>
  </f7-sheet>
</template>
<script>
import HeaderGoBack from "@p/comm/HeaderGoBack.view"; // 头部logo
export default {
  name: 'Recharge', // 充值
  components: {
    "ff-header-goback": HeaderGoBack,
  },
  props: {
    sheetOpened:{
      type: Boolean,
      default: false
    }
  },
  computed: {
  },
  data() {
    return {
      number: [1,2,3,4,5,6,7,8,9,'.',0,'del'],
      pwd: [],
      hidKb: false
    };
  },
  created() {},
  mounted() {
  },
  filters: {
    
  },
  methods: {
    hidKeyBord() {
      this.hidKb = !this.hidKb
    },
    delAmount() {
      this.pwd.pop()
    },
    getCurAmount(v) {
      if(this.pwd.length < 4) {
        this.pwd.push(v)
      }
      if(this.pwd.length == 4) {
        console.log('a01---我是第四位',this.pwd )
      }
    }
  },
  destroyed() {
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.keyboard{
  .key-pwd{
    margin: 0 auto 0.3rem;
    background-color: $but-deep;
    width: 2.7rem;
    height: 2.25rem;
    border-radius: 0.06rem;
    position: relative;
    .key-pwd-tit{
      text-align: center;
      position: relative;
      font-size: 0.15rem;
      line-height: 0.4rem;
      border-bottom: 0.01rem solid $logo-but-bg;
      svg{
        position: absolute;
        left: 0.12rem;
        top: 0.12rem;
        width: 0.2rem;
        height: 0.2rem;
      }
    }
    .key-con{
      text-align: center;
      .key-inp{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        line-height: 0.44rem;
        border-top: 0.01rem solid $logo-but-bg;
        span{
          width: 25%;
          line-height: 0.44rem;
          height: 0.44rem;
          display: inline-block;
          font-size: 0.25rem;
          border-left: 0.01rem solid $logo-but-bg;
          &:nth-child(1){
            border-left: none;
          }
        }
      }
      .key-cft{
        font-size: 0.14rem;
        line-height: 0.16rem;
        padding-top: 0.2rem;
        color: rgba($font-login, 0.8);
      }
      .key-cfm{
        line-height: 0.6rem;
        span{
          font-size: 0.28rem;
          color: $font-login;
          font-weight: bold;
        }
      }
      .key-cfb{
        line-height: 0.2rem;
        font-size: 0.12rem;
        color: $font-login;
      }
    }
    .key-rem{
      position: absolute;
      bottom: -0.2rem;
      left: 0;
      color: $font-red;
    }
  }
  .keybord-close{
    background: $but-deep;
    line-height: 0.26rem;
    height: 0.26rem;
    border-radius: 0.06rem 0.06rem 0 0;
    justify-content: center;
    align-items: center;
    display: flex;
    svg{
      height: 0.2rem;
      width: 0.2rem;
    }
  }
  .hid-kb{
    height: 0rem!important;
    transition: all 0.3s;
  }
  .key-list{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      flex-direction: row;
      background: $but-deep;
      height: 2rem;
      transition: all 0.3s;
      li{
          line-height: 0.5rem;
          height: 0.5rem;
          color: $font-color;
          text-align: center;
          border-top: 0.01rem solid $logo-but-bg;
          border-left: 0.01rem solid $logo-but-bg;
          flex: 1 1 33.33%;
          box-sizing:border-box;
          svg{
              width: 0.3rem;
              height: 0.3rem;
              line-height: 0.5rem;
              margin-top: 0.1rem;
              color: $font-color;
              }
          span{
              font-size: 0.25rem;
              font-family: Arial, Helvetica, sans-serif;
              display: inline-block;
              width: 100%;
              }
    }
    }
}
</style>