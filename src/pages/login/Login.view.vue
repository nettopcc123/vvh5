<template>
  <f7-page class="login">
    <ff-header-goback></ff-header-goback>
    <section class="login-c">
      <article class="login-logo">
        <svg-icon icon-class="logo" />
      </article> 
      <article class="login-l">
        <ul class="login-list">
          <li><span>手机号</span>
          <div class="login-pi">
            <input type="text" class="ff-input" name="" value="" placeholder="手机号">
          </div>
          </li>
          <li>
            <span class="login-sp">密码</span>
            <div class="login-pi">
              <input type="text" class="ff-input" name="" value="" placeholder="密码">
              <ff-change-eye></ff-change-eye>
            </div>
          </li>
        </ul>
        <p class="login-pw-v"><span><f7-link href="/forgetPwd">忘记密码</f7-link></span> <span><f7-link href="/loginverif">验证码登录<svg-icon icon-class="more" /></f7-link></span></p>
        <p class="comm-but login-but" @click="login">登录</p>
        <p class="login-reg"><f7-link href="/registered">还没有帐户？ 立即注册</f7-link></p>
        <div class="login-arg"><f7-checkbox name="isRead"></f7-checkbox><p>已阅读 并同意<span>《用户服务协议》</span></p></div>
      </article>
    </section>
  </f7-page>
</template>
<script>
import HeaderGoBack from "@p/comm/HeaderGoBack.view"; // 头部logo
import ChangEye from "@p/comm/ChangEye.view"; // 密码隐藏显示
import { loginByPwd } from '@m/http/Api.module'
export default {
  name: 'Login', // 登入
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
  created() {
    
  },
  mounted() {
  },
  filters: {
    
  },
  methods: {
    login() {
      this.$loading.show()
      // loginByPwd({}).then( response => {
      //   this.$loading.hidden()
      //     console.log('rrr', response)
      // })
      this.$store.commit('SET_TOKEN', 'token');
      this.$store.commit('SET_HOMEURL', 'https://h5.raygaming.co?payload=eyJhbGciOiJIUzI1NiJ9.eyJhcHBfa2V5IjoiOGMwYWZmMDIzM2RmMTA5YiIsImRhdGEiOnsibG9iYnlfdXJsIjoiaHR0cDovL3d3dy5nb29nbGUuY29tIiwidXNlcl9uYW1lIjoiczFfMTAwMSIsImlhdCI6MTU3MzM1OTIwMjAzM319.GpU0c5NLRCAz8OYUjNH13mFVM1NMAjASgECk103odyI');
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
.login{
  .login-c{
    background-color: $login-bg;
    height: calc(100vh - 0.44rem);
  }
  .login-logo{
    height: calc(100vh - 3.8rem);
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
      .login-pi{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }
    }
  }
  .login-pw-v{
    display: flex;
    justify-content: space-between;
    line-height: 0.4rem;
    margin-bottom: 0.1rem;
    span{
      &:nth-child(1){
        color: $login-f-pwd;
      }
    }
  }
  .login-but{
    width: 3.17rem;
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