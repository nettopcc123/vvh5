<template>
  <f7-page>
    <ff-header-goback titProp='个人资料'></ff-header-goback>
    <section class="personal scroll-con">
      <article class="p-c-con">
        <ul class="p-c-c-list">
          <li><a href="javascript:void(0);"><div class="p-c-n">会员编号</div><div class="p-c-h">9527</div></a></li>
          <li><a href="javascript:void(0)"><div class="p-c-n">真实姓名</div><div class="p-c-nf">未填写姓名</div></a></li>
          <li><a href="javascript:void(0)"><div class="p-c-n">手机号码</div><div class="p-c-h">180 *** 000</div></a></li>
          <li><a href="javascript
          :void(0)"><div class="p-c-n">银行名称</div><div class="p-c-nf">未绑定银行卡</div></a></li>
          <li><f7-link :href="bankLink"><div class="p-c-n">银行卡号</div><div class="p-c-nf p-c-r"><span>立即去绑定</span><svg-icon icon-class="more" /></div></f7-link></li>
          <li><f7-link :href="withPwd"><div class="p-c-n">提款密码</div><div class="p-c-nf p-c-r"><span>未设置提款密码</span><svg-icon icon-class="more" /></div></f7-link></li>
          <li><f7-link :href="loginPwd"><div class="p-c-n">登录密码</div><div class="p-c-nf p-c-r"><span>密码可修改</span><svg-icon icon-class="more" /></div></f7-link></li>
        </ul>
        <p class="l-but w175">退出登录</p>
      </article>
    </section>
  </f7-page>
</template>
<script>
import HeaderGoBack from "@p/comm/HeaderGoBack.view"; // 头部logo
export default {
  name: 'PersonalInfo', // 个人资料
  components: {
    "ff-header-goback": HeaderGoBack,
  },
  props: {},
  computed: {
  },
  data() {
    return {
      link: '/withdrawPwd',
      withPwd: '/withdrawPwd',
      loginPwd: '/loginPwd',
      bankLink: '/bindBank',
      // withPwd: '/changeWithPwd',
      // loginPwd: '/changeLoginPwd'
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
    },
    preDef() {
      return false
    }
  },
  destroyed() {
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.personal{
  .p-c-con{
    align-items: center;
    font-size: 0.15rem;
    .p-c-c-list{
      background-color: $login-bg;
      width: 3.51rem;
      padding: 0rem 0.12rem;
      li{
        padding: 0 0.1rem;
        border-bottom: 0.01rem solid rgba($login-f-pwd, 0.3);
        a{
          display: flex;
          justify-content: space-between;
          line-height: 0.56rem;
          div{
            font-size: 0.15rem;
            color: $font-login;
            span{
              font-size: 0.15rem;
            }
          }
        }
        &:last-child{
          border-bottom: none;
        }
        .p-c-r{
          display: flex;
          justify-content: space-between;
          align-items: center;
          svg{
            margin-left: 0.05rem;
            width: 0.18rem;
            height: 0.18rem;
          }
        }
      }
      .p-c-h{
        color: rgba($font-login, 0.6);
      }
      .p-c-nf{
        color: $login-f-pwd;
      }
    }
  }
}
</style>