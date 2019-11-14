<template>
  <section class="h-dialog">
    <article class="h-d-com">
      <p class="h-d-tit">{{dialProp.title}} <span class="d-close" @touchend="closeDialog" v-if="dialProp.rightIcon"><svg-icon :icon-class="dialProp.rightIcon" /></span></p>
      <div class="hd-c" v-html="dialProp.con"></div>
      <p class="comm-but w12" v-if="dialProp.but" @touchend="closeDialog">{{dialProp.but}}</p>
    </article>
    <div class="bg"></div>
  </section>
</template>
<script>
export default {
  name: 'Dialog', // 对话框
  props: {
    dialProp: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  methods: {
    closeDialog() {
      this.$customEvent.trigger('changeDialog', false);
    }
  },
  }
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.h-dialog{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 5001;
  .h-d-com{
    position: relative;
    z-index: 100;
    background-color: $but-deep;
    color: $font-login;
    line-height: 0.26rem;
    width: 3.2rem;
    border-radius: 0.06rem;
    padding-bottom: 0.2rem;
    .h-d-tit{
      font-size: 0.15rem;
      color: rgba($font-login, 0.6);
      text-align: center;
      border-bottom: 0.01rem solid $logo-but-bg;
      line-height: 0.4rem;
      position: relative;
      .d-close{
        position: absolute;
        right: 0.15rem;
        top: 0.03rem;
        svg{
          width: 0.18rem;
          height: 0.18rem;
        }
      }
    }
    .hd-c{
      padding: 0.15rem 0.15rem;
      font-size: 0.15rem;
      color: $font-login;
      overflow: auto;
      margin:0.08rem 0;
    }
    .w12{
      width: 1.2rem;
      margin: 0 auto;
    }
  }
}
</style>