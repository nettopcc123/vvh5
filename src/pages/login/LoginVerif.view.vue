<template>
  <f7-page class="login-ver">
    <ff-header-goback></ff-header-goback>
    <section class="login-c">
      <article class="login-logo">
        <svg-icon icon-class="logo" />
      </article>
      <article class="login-l">
        <ul class="login-list">
          <li><span>手机号</span><input type="text" class="ff-input" name="" value="" placeholder="手机号"></li>
          <li>
            <span class="login-sp">密码</span>
            <div class="l-v-warp">
              <input type="text" class="ff-input" name="" value="" placeholder="请输入验证码"><button class="btn pw-v-but">发送验证码</button>
            </div>
          </li>
        </ul>
        <p class="login-pw-p"><f7-link href="/login"><span>密码登录<svg-icon icon-class="more" /></span></f7-link></p>
        <p class="login-but" @click="login">登录</p>
        <p class="login-reg">还没有帐户？ 立即注册</p>
        <div class="login-arg"><f7-checkbox name="isRead"></f7-checkbox><p>已阅读 并同意<span>《用户服务协议》</span></p></div>
      </article>
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
.login-ver{
  .login-c{
    background-color: $login-bg;
    height: calc(100vh - 0.44rem);
  }
  .login-logo{
    height: calc(100vh - 3.64rem);
    display: flex;
    justify-content: center;
    align-items: center;
    filter: invert(1);
    svg{
      width: 30vh;
      height: 0.35rem;
      filter: brightness(0);
    }
  }
  .login-l{
    width: 3.18rem;
    height: 3.2rem;
    margin: 0 auto;
    color: $font-login;
    text-align: center;
  }
  .login-list{
    li{
      border-bottom: 0.01rem solid rgba($login-lin, 0.7);
      height: 0.3rem;
      font-size: 0.15rem;
      line-height: 0.3rem;
      color:rgba($login-lin, 0.7);
      padding-top: 0.18rem;
      display: flex;
      span{
        width: 0.9rem;
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
  }
  .login-pw-p{
    display: flex;
    justify-content: flex-end;
    line-height: 0.4rem;
    margin-bottom: 0.1rem;
  }
  .login-but{
    width: 3.17rem;
    height: 0.44rem;
    background-image: linear-gradient(90deg,$but-light-l 0%, $login-lin 100%), linear-gradient($but-deep, $but-deep);
    border-radius: 0.06rem;
    font-size: 0.18rem;
    color: $font-login;
    text-align: center;
    line-height: 0.44rem;
  }
  .login-reg{
    font-size: 0.14rem;
    color: $font-login;
    line-height: 0.5rem;
  }
  .login-arg{
    display: flex;
    justify-content: center;
    margin-top:0.5rem;
    p{
      padding-left: 0.05rem;
    }
    span{
      color: $but-light-l;
      padding: 0 0.02rem
    }
  }
}
</style>