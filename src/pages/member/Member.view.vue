<template>
  <f7-page>
    <ff-header-goback titProp='个人中心'></ff-header-goback>
    <section class="member scroll-con">
      <article class="m-info-t">
        <div class="m-i-t-cn">
          <p class="m-i-t-c">会员编号</p>
          <p class="m-i-t-n">9527,您好</p>
        </div>
        <div class="m-i-b">
          <f7-link href="/wallet">
            <p>
              <span class="m-i-mr10"><svg-icon icon-class="wallet" /></span>
              <span>我的钱包</span>
            </p>
            <p class="m-i-blance">
              <span>余额：</span>
              <span class="m-blance">{{ balance }}</span>
              <span>
                <button class="wc-but btn">刷新</button>
              </span>
            </p>
            <p class="m-more"><svg-icon icon-class="more" /></p>
          </f7-link>
        </div>
      </article>
      <article class="m-info-b">
        <ul class="m-info-b-l">
          <li v-for="(val, index) in mList" :key="index">
            <f7-link :href="val.link">
              <div class="m-i-m">
                <span class="m-i-mr10"><svg-icon :icon-class="val.icon" /></span>
                {{val.name}}
              </div>
              <div class="m-more"><svg-icon icon-class="more" /></div>
            </f7-link>
          </li>
        </ul>
      </article>
    </section>
  </f7-page>
</template>
<script>
import HeaderGoBack from "@p/comm/HeaderGoBack.view"; // 头部logo
export default {
  name: 'Member', // 主页
  components: {
    "ff-header-goback": HeaderGoBack,
  },
  props: {},
  computed: {
  },
  data() {
    return {
      balance: '2400',
      mList: [{
          icon: 'bet',
          name: '投注记录',
          link: '/betRecord'
        },{
          icon: 'preferential',
          name: '优惠活动',
          link: '/prefer'
        },{
          icon: 'personalInfo',
          name: '个人资料',
          link: '/personalInfo'
        },{
          icon: 'aboutUs',
          name: '关于我们',
          link: '/about'
        }
      ]
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
.member{
  .m-info-t{
    width: 3.51rem;
    padding: 0.2rem 0.12rem 0;
    background-color: $login-bg;
    border-radius: 0.06rem;
    margin-bottom: 0.13rem;
  }
  .m-i-t-cn{
    border-bottom: 0.01rem solid rgba($login-f-pwd, 0.3);
    padding: 0.1rem 0.08rem;
  }
  .m-i-t-c{
    font-size: 0.18rem;
    color: $font-login;
    line-height: 0.4rem;
  }
  .m-i-t-n{
    color: rgba($font-login, 0.6);
    line-height: 0.24rem;
    font-size: 0.15rem;
  }
  .m-i-b{
    a{
      line-height: 0.55rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0rem 0.08rem;
      p{
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      span{
        font-size: 0.15rem;
      }
      .m-i-blance{
        flex-grow: 1;
        justify-content: flex-end;
        span{
          font-size: 0.16rem;
        }
        .m-blance{
          color: $font-but-wall;
          font-weight: bold;
        }
        .wc-but{
          width: 0.44rem;
          height: 0.26rem;
          border-radius: 0.15rem;
          border: solid 0.01rem $font-but-wall;
          color: $font-but-wall;
          font-size: 0.12rem;
          background: none;
          margin-left: 0.08rem;
        }
      }
    }
  }
  .m-i-m{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.15rem;
  }
  .m-i-mr10{
    margin-right: 0.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg{
      width: 0.19rem;
      height: 0.19rem;
    }
  }
  .m-info-b{
    background-color: $login-bg;
    width: 3.51rem;
    padding: 0rem 0.12rem;
    .m-info-b-l{
      li{
        border-bottom: 0.01rem solid rgba($login-f-pwd, 0.3);
        a{
          display: flex;
          justify-content: space-between;
          line-height: 0.56rem;
          padding: 0 0.08rem;
        }
        &:last-child{
          border-bottom: none;
        }
      }
    }
  }
  .m-more{
    display: flex;
    align-items: center;
    height: 0.56rem;
    svg{
      width: 0.18rem;
	    height: 0.18rem;
    }
  }
}
</style>