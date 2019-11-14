<template>
  <f7-page>
    <ff-header-goback titProp=''></ff-header-goback>
    <section class="cg-pwd scroll-con">
      <article class="cg-pwd-t">
        <p class="cg-t1">修改登录密码</p>
        <p class="cg-t2"><input type="text" class="ff-input" name="" value="" placeholder="请输入原登录密码">
          <span class="cg-eye"><svg-icon icon-class="ceye" /></span>
        </p>
        <p class="cg-t2"><input type="text" class="ff-input" name="" value="" placeholder="请重新设置登录密码">
          <ff-change-eye></ff-change-eye>
        </p>
      </article>
      <p class="comm-but pwd-b">确认修改</p>
    </section>
  </f7-page>
</template>
<script>
import HeaderGoBack from "@p/comm/HeaderGoBack.view"; // 头部logo
import ChangEye from "@p/comm/ChangEye.view"; // 密码隐藏显示
export default {
  name: 'LoginPwd', // 登录密码
  components: {
    "ff-header-goback": HeaderGoBack,
    "ff-change-eye": ChangEye
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
    this.bindEvent()
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
.cg-pwd{
  .cg-pwd-t{
    width: 3.25rem;
    background-color: $login-bg;
    border-radius: 0rem 0rem 0.06rem 0.06rem;
    padding: 1.1rem 0.25rem 0.25rem;
    margin-bottom: 0.2rem;
    .cg-t1{
      font-size: 0.23rem;
      color: $icon;
      padding-bottom: 0.1rem;
    }
    .cg-t2{
      border-bottom: 0.01rem solid $per-lin;
      font-size: 0.16rem;
      color: $icon;
      line-height: 0.4rem;
      height: 0.4rem;
      padding-top: 0.3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

    }
  }
  .pwd-b{
    width: 1.6rem;
    margin: 0 auto;
  }
}
</style>