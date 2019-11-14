<template>
  <div class="kbn">
    <div class="kbn-close" @touchend.prevent="hidKeyBord()"><svg-icon icon-class="more"  :class="hidKb ? 'tran270' : 'tran90'"></svg-icon></div>
    <ul class="kbn-list" :class="hidKb ? 'hid-kb' : ''">
      <li v-for="(val,index) in number" :key="index">
        <span v-if="val != 'del'" @touchend.prevent="getCurAmount(val)">{{ val }}</span>
        <svg-icon v-else :icon-class="val" @touchend.prevent="delAmount()" ></svg-icon>
      </li>
    </ul>
  </div>
</template>
<script>
import HeaderGoBack from "@p/comm/HeaderGoBack.view"; // 头部logo
export default {
  name: 'Recharge', // 充值
  components: {
    "ff-header-goback": HeaderGoBack,
  },
  props: {
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
      this.$customEvent.trigger('delWithPwd01', this.pwd);
    },
    getCurAmount(v) {
      if(this.pwd.length < 4) {
        this.pwd.push(v)
      }
      if(this.pwd.length == 4) {
        console.log('a01---我是第四位',this.pwd )
      }
      console.log(this.pwd)
      this.$customEvent.trigger('getWithPwd01', this.pwd);
    }
  },
  destroyed() {
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.kbn{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  .kbn-close{
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
  .kbn-list{
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