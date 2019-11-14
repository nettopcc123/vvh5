<template>
  <f7-page>
    <ff-header-goback titProp=''></ff-header-goback>
    <section class="cg-pwd scroll-con">
      <article class="cg-pwd-t">
        <p class="cg-t1">修改提款密码</p>
        <p class="cg-t2"><input @focus="getOpwd()" type="text" class="ff-input" name="" :value="withPwd | pwdToString" placeholder="请输入原提款密码">
          <span class="cg-eye"><svg-icon icon-class="ceye" /></span>
        </p>
        <p class="cg-t2"><input @focus="getNpwd()" type="text" class="ff-input" name="" :value="withPwd01 | pwdToString" placeholder="请重新设置提款密码">
          <ff-change-eye></ff-change-eye>
        </p>
      </article>
      <p class="comm-but pwd-b">确认修改</p>
    </section>
    <ff-keyboard-num v-if="keybordShow"></ff-keyboard-num>
    <ff-keyboard-num01 v-else></ff-keyboard-num01>
  </f7-page>
</template>
<script>
import HeaderGoBack from "@p/comm/HeaderGoBack.view"; // 头部logo
import KeyBoardNum from "@p/comm/KeyBoardNum.view"; // 键盘
import KeyBoardNum01 from "@p/comm/KeyBoardNum01.view"; // 键盘
import ChangEye from "@p/comm/ChangEye.view"; // 密码隐藏显示
export default {
  name: 'LoginPwd', // 登录密码
  components: {
    "ff-header-goback": HeaderGoBack,
    "ff-keyboard-num": KeyBoardNum,
    "ff-keyboard-num01": KeyBoardNum01,
    "ff-change-eye": ChangEye
  },
  props: {},
  computed: {
  },
  data() {
    return {
      keybordShow: true,
      withPwd: [],
      withPwd01: []
    };
  },
  created() {},
  mounted() {
    this.bindEvent()
  },
  filters: {
    pwdToString: function(v) {
      return v.join('')
    }
  },
  methods: {
    bindEvent() {
      this.$customEvent.on('delWithPwd', data => {
        this.withPwd = data
      });
      this.$customEvent.on('getWithPwd', data => {
        this.withPwd = data
      });

      this.$customEvent.on('delWithPwd01', data => {
        this.withPwd01 = data
      });
      this.$customEvent.on('getWithPwd01', data => {
        this.withPwd01 = data
      });
    },
    getOpwd() {
      this.keybordShow = true;
    },
    getNpwd() {
      this.keybordShow = false;
    }
  },
  destroyed() {
    this.$customEvent.off('delWithPwd')
    this.$customEvent.off('getWithPwd')
    this.$customEvent.off('delWithPwd01')
    this.$customEvent.off('getWithPwd01')
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
    padding: calc(100vh - 5.6rem) 0.25rem 0.25rem;
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