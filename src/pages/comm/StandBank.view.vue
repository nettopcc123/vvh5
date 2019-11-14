<template>
    <f7-sheet class="stand-bank" swipe-to-close backdrop :opened="sheetOpened" @sheet:closed="sheetOpened = false">
      <div class="sb-con">
        <p class="sb-tit">支持银行</p>
        <div class="sb-cn">
          中国银行、工商银行、建设银行、交通银行、华夏银行、招商银行、光大银行、中国银行、工商银行、建设银行、交通银行、华夏银行、招商银行、光大银行、中国银行、工商银行、建设银行、交通银行、华夏银行、招商银行、光大银行
        </div>
        <p class="comm-but sb-b">我知道了</p>
      </div>
    </f7-sheet>
</template>
<script>
export default {
  name: 'StandBank', // 支持银行
  components: {
  },
  props: {
  },
  computed: {
  },
  data() {
    return {
      sheetOpened: false
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
.stand-bank{
  background: $but-deep;
  height: 2.6rem;
  .sb-con{
    .sb-tit{
      color: rgba($font-login, 0.6);
      font-size: 0.15rem;
      border-bottom: 0.01rem solid rgba($ver-lin, 0.7);
      line-height: 0.4rem;
      padding: 0 0.2rem;
    }
    .sb-cn{
      padding: 0.2rem;
      color: $font-login;
      line-height: 0.22rem;
      font-size: 0.14rem;
      height: 1.1rem;
      overflow: auto;
    }
  }
  .sb-b{
    width: 1.6rem;
    margin: 0.1rem auto;
  }
}
</style>