<template>
  <f7-page class="register">
    <ff-header-goback titProp='注册'></ff-header-goback>
    <section class="login-c">
      <article class="login-l">
        <p class="logo-reg-tit">欢迎注册威竞技</p>
        <ul class="login-list">
          <li>
            <span class="login-l-tit">手机号</span>
            <span class="l-v-warp"><input type="text" class="ff-input" name="" value="" placeholder="手机号"></span>
          </li>
          <li>
            <span class="login-l-tit">验证码</span>
            <span class="l-v-warp">
              <input type="text" class="ff-input" name="" value="" placeholder="请输入验证码"><button class="btn pw-v-but">发送验证码</button>
            </span>
          </li>
          <li>
            <span class="login-l-tit login-sp">密码</span>
            <span class="l-v-warp">
              <input type="text" class="ff-input" name="" value="" placeholder="请设置密码">
            </span>
          </li>
        </ul>
        <p class="login-pw-p"><f7-link href="/login"><span>已有帐号，立即登录<svg-icon icon-class="more" /></span></f7-link></p>
      </article>
      <p class="l-but w175" @click="login">确定</p>
    </section>
  </f7-page>
</template>
<script>
import HeaderGoBack from "@p/comm/HeaderGoBack.view"; // 头部logo
export default {
  name: 'LoginVerif', // 验证码登入
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
.register{
  .logo-reg-tit{
    font-size: 0.23rem;
    color: $font-login;
    text-align: left;
    padding: 0.25rem 0 0.2rem 0;
  }
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
      height: 0.3rem;
      font-size: 0.15rem;
      line-height: 0.3rem;
      color:rgba($login-lin, 0.7);
      padding-top: 0.3rem;
      display: flex;
      text-align: left;
      justify-content: flex-start;
      span{
        &:nth-child(1){
          width: 0.9rem;
        }
        color: $font-login;
        font-size: 0.16rem;
        text-align: left;
      }
      .login-sp{
        letter-spacing: 0.16rem;
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
    width: 100%;
  }
  .login-pw-p{
    display: flex;
    justify-content: flex-end;
    line-height: 0.4rem;
    margin-bottom: 0.1rem;
  }
}
</style>