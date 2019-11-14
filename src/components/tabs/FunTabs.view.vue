<template>
  <div class="fun-tabs">
    <div class="toolbar">
      <div class="toolbar-inner">
        <a v-for="(val,index) in tabsList" :key="index" class="tab-link" :class="curMenu == `${val.code}` ? 'tab-link-active' :''" @click="getCur(val.code, index)" >
          {{val.name}}
        </a>
      </div>
    </div>
    <div class="tabs-animated-wrap" ref='funconbox'>
      <div class="ff-tabs" :class="animatTran">
        <div class="list-warp">
          <ul class="tabs-list">
            <li v-for="(val, index) in dataList" :key="index">
              <div class="f-t-t"><span>{{val.name}}</span><span>{{val.amount}}</span></div>
              <div class="f-t-b"><span>{{val.time}}</span><span :class="stateClass(val.state)">{{val.state}}</span></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Utils from "@m/utils/Utils.module"; // 工具类
export default {
  name: "Tab", // 滑动Tab
  components: {
  },
  props: {
    getCurClssProp: {
      type: String,
      default: ""
    },
    tabsProp: {
      type: Array,
      default: () => {
        return [];
      }
    },
    curMenuProp: {
      type: String,
      default: "news1"
    }
  },
  data() {
    return {
      animatTran: '',
      curMenu: this.curMenuProp, // 默认选中Tab标签
      tabsList: this.tabsProp, // 数据列表
      ti: 0,
      dataList:[{
        amount: '+5000',
        name: '支付宝充值',
        state: '成功',
        time: '2019-09-25 17:30:09',
      },{
        amount: '-5000',
        name: '提现',
        state: '成功',
        time: '2019-09-25 17:30:09',
      },{
        amount: '+5000',
        name: '转帐',
        state: '成功',
        time: '2019-09-25 17:30:09',
      },{
        amount: '+10',
        name: '加扣款',
        state: '审核中',
        time: '2019-09-25 17:30:09',
      },{
        amount: '+50',
        name: '支付宝支付',
        state: '成功',
        time: '2019-09-25 17:30:09',
      },{
        amount: '+5000',
        name: '微信扫码',
        state: '失败',
        time: '2019-09-25 17:30:09',
      }]
    };
  },
  watch: {
  },
  created() {
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true);
  },
  filters: {

  },
  methods: {
    stateClass(val) {
      let sclass = ''
      switch (val) {
        case '成功':
          sclass = 'f-success'
          break;
        case '审核中':
          sclass = 'f-warn'
          break;
        case '失败':
          sclass = 'f-fail'
          break;
        default:
          break;
      }
      return sclass
    },
    handleScroll() {
      let scrollT = this.$refs.funconbox.scrollTop,
          offsetT = this.$refs.funconbox.offsetHeight,
          offsetH = this.$refs.funconbox.scrollHeight
          console.log('a01-----', scrollT)
      if(!scrollT) {
        this.dis()
      }
      if(((offsetH - offsetT) - scrollT) < 50) {
        console.log('************', offsetH - offsetT)
        this.dis()
      }
    },
    dis() {
      window.removeEventListener('scroll',this.handleScroll)
      return false
    },
    getCur(v, i) {
      if(this.curMenu == v) {
        return false
      }
      this.animatTran = 'trans'
      setTimeout(() => {
        this.animatTran = ''
      }, 300)
      this.ti = i;
      this.curMenu = v;
      this.dataList = [{
        amount: '+5000',
        name: '支付宝充值',
        state: '成功',
        time: '2019-09-25 17:30:09',
      },{
        amount: '-5000',
        name: '提现',
        state: '成功',
        time: '2019-09-25 17:30:09',
      },{
        amount: '+5000',
        name: '转帐',
        state: '成功',
        time: '2019-09-25 17:30:09',
      },{
        amount: '+10',
        name: '加扣款',
        state: '审核中',
        time: '2019-09-25 17:30:09',
      },{
        amount: '+50',
        name: '支付宝支付',
        state: '成功',
        time: '2019-09-25 17:30:09',
      },{
        amount: '+5000',
        name: '微信扫码',
        state: '失败',
        time: '2019-09-25 17:30:09',
      }]
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.fun-tabs {
  .toolbar {
    width: 100%;
    border-bottom: 0.01rem solid $logo-but-bg;
    text-align: center;
    background-color: $login-bg;
    .toolbar-inner{
      width: 90%;
      margin: 0px 5%;
    }
    .tab-link {
      line-height: 0.25rem;
      font-size: 0.15rem;
      color: rgba($font-login, 0.3);
      padding: 0 0.1rem;
    }
    .tab-link-active {
      color: $font-color;
      background-image: linear-gradient(90deg, $but-light-l 0%, $login-lin 100%), linear-gradient($message-icon, $message-icon);
      border-radius: 0.15rem;
    }
  }
  .page-content {
    padding-top: 0rem;
  }
  .list-warp {
    transition: all 0.2s;
    padding-bottom: 0.02rem;
    margin-bottom: 0.12rem;
    width: 100%;
    .tabs-list {
      overflow: auto;
      transition: all 0.2s;
      width: 3.45rem;
      padding: 0 0.15rem;
      background-color: $login-bg;
      border-radius: 0rem 0rem 0.06rem 0.06rem;
      li {
        line-height: 0.2rem;
        color: $font-login;
        border-bottom: 0.01rem solid rgba($ver-lin, 0.7);
        padding: 0.1rem 0.08rem;
        div{
          display: flex;
          justify-content: space-between;
        }
        .f-t-t{
          color: rgba($font-login, 0.8);
          span{
            font-size: 0.14rem;
            &:nth-child(2){
              color: $font-login;
              font-weight: bold;
            }
          }
        }
        .f-t-b{
          color: rgba($font-login, 0.8);
          span{
            font-size: 0.12rem;
            color: $login-f-pwd;
            &:nth-child(2){
              color: rgba($font-login, 0.6);
            }
          }
          .f-success{
            color: $font-login!important;
          }
          .f-warn{
            color: rgba($font-warn, 0.6)!important;
          }
          .f-fail{
            color: $per-state-bg1!important;
          }

        }
      }
    }
  }

  .tabs-animated-wrap{
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100vh - 1.19rem);
  }

  .trans {
    animation: trans 0.3s linear infinite;
  }
  @keyframes trans {
    from {
      transform: translate3d(100%, 0px, 0px);
    }
    to {
      transform: translate3d(0%, 0px, 0px);
    }
  }




}


.ff-tabs {
  display: flex;
  height: 100%;
  .tab {
    width: 100%;
    display: block;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
}
</style>