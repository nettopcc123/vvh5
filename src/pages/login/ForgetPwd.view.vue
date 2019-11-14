<template>
  <f7-page class="login-ver">
    <ff-header-goback titProp='忘记密码'></ff-header-goback>
    <section class="login-c">
      <article class="login-l">
        <ul class="login-list">
          <li>
            <p class="login-l-tit">手机号</p>
            <p><input type="text" class="ff-input" name="" value="" placeholder="手机号"></p>
          </li>
          <li>
            <p class="login-l-tit">验证码</p>
            <p class="l-v-warp">
              <input type="text" class="ff-input" name="" value="" placeholder="请输入验证码"><button class="btn pw-v-but">发送验证码</button>
            </p>
          </li>
          <li>
            <p class="login-l-tit">密码</p>
            <p class="l-v-warp">
              <input type="text" class="ff-input" name="" value="" placeholder="请重新设置密码">
              <ff-change-eye></ff-change-eye>
            </p>
          </li>
        </ul>
        <p class="login-pw-p"><f7-link href="/login"><span>密码登录<svg-icon icon-class="more" /></span></f7-link></p>
      </article>
      <p class="login-but" @click="login">确定</p>
    </section>
  </f7-page>
</template>
<script>
import HeaderGoBack from "@p/comm/HeaderGoBack.view"; // 头部logo
import ChangEye from "@p/comm/ChangEye.view"; // 密码隐藏显示
export default {
  name: 'LoginVerif', // 验证码登入
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
  },
  filters: {
    
  },
  methods: {
    login() {
      this.$store.commit('SET_TOKEN', 'token');
      const router = this.$f7router;
      router.navigate({
        name: 'main',
        path: '/'
      });
    }
  },
  destroyed() {
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.login-ver{
  .login-c{
    background-color: $main-bg;
    height: calc(100vh - 0.44rem);
  }
  .login-l{
    padding: 0.4rem 0.28rem 0;
    width: 3.19rem;
    margin: 0 auto;
    color: $font-login;
    text-align: center;
    background: $login-bg;
    border-radius: 0.06rem;
  }
  .login-list{
    li{
      border-bottom: 0.01rem solid rgba($login-lin, 0.7);
      font-size: 0.15rem;
      line-height: 0.36rem;
      color:rgba($login-lin, 0.7);
      padding-top: 0.18rem;
      text-align: left;
      .login-l-tit{
        font-size: 0.16rem;
        color: $font-login;
      }
    }
  }
  .pw-v-but{
    width: 1.2rem;
    height: 0.3rem;
    font-size: 0.14rem;
    line-height: 0.3rem;
    color: $but-light-l;
    border: none;
    background: none;
  }
  .l-v-warp{
    display: flex;
    justify-content: space-between;
  }
  .login-pw-p{
    display: flex;
    justify-content: flex-end;
    line-height: 0.4rem;
    margin-bottom: 0.1rem;
  }
  .login-but{
    width: 1.75rem;
    height: 0.44rem;
    background-color: $logo-but-bg;
    border-radius: 0.06rem;
    font-size: 0.18rem;
    color: $login-f-pwd;
    text-align: center;
    line-height: 0.44rem;
    margin: 0.3rem auto 0;
  }
}
</style>