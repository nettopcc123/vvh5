<template>
  <div class="com-tabs">
    <div class="toolbar">
      <div class="toolbar-inner">
        <a v-for="(val,index) in tabsList" :key="index" class="tab-link" :class="curMenu == `${val.code}` ? 'tab-link-active' :''" @click="getCur(val.code, index)" >
          {{val.name}}
        </a>
      </div>
    </div>
    <ul class="tabs-title">
      <li v-for="(val, index) in listTitle" :key="index">
        {{val.name}}
      </li>
    </ul>
    <div class="tabs-animated-wrap" ref='contentbox'>
      <div class="ff-tabs" :class="animatTran">
        <div class="list-warp">
          <ul class="tabs-list">
            <li v-for="(val, index) in dataList" :key="index">
              <div>
                <p>{{val.plan}}</p>
                <p class="tabs-time">{{val.time}}</p>
              </div>
              <div>{{val.amount}}</div>
              <div>{{val.bount}}</div>
              <div>{{val.state}}</div>
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
      listTitle: [{
        name: '游戏平台'
      },{
        name: '下注金额'
      },{
        name: '派彩金额'
      },{
        name: '状态'
      }],
      dataList:[{
        amount: '100',
        plan: 'AG真人娱乐',
        gameName: '百家乐',
        state: '已结算',
        bount: '7',
        time: '2019-09-25 17:30:09',
        number: '11283838726725656363'
      },{
        amount: '100',
        plan: 'AG真人娱乐',
        gameName: '百家乐',
        state: '已结算',
        bount: '7',
        time: '2019-09-25 17:30:09',
        number: '11283838726725656363'
      },{
        amount: '100',
        plan: 'AG真人娱乐',
        gameName: '百家乐',
        state: '已结算',
        bount: '7',
        time: '2019-09-25 17:30:09',
        number: '11283838726725656363'
      },{
        amount: '100',
        plan: 'AG真人娱乐',
        gameName: '百家乐',
        state: '已结算',
        bount: '7',
        time: '2019-09-25 17:30:09',
        number: '11283838726725656363'
      },{
        amount: '100',
        plan: 'AG真人娱乐',
        gameName: '百家乐',
        state: '已结算',
        bount: '7',
        time: '2019-09-25 17:30:09',
        number: '11283838726725656363'
      },{
        amount: '100',
        plan: 'AG真人娱乐',
        gameName: '百家乐',
        state: '已结算',
        bount: '7',
        time: '2019-09-25 17:30:09',
        number: '11283838726725656363'
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
  methods: {
    handleScroll() {
      let scrollT = this.$refs.contentbox.scrollTop,
          offsetT = this.$refs.contentbox.offsetHeight,
          offsetH = this.$refs.contentbox.scrollHeight
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
        amount: '100',
        plan: 'AG真人娱乐',
        gameName: '百家乐',
        state: '已结算',
        bount: '7',
        time: i,
        number: '11283838726725656363'
      },
      {
        amount: '100',
        plan: 'AG真人娱乐',
        gameName: '百家乐',
        state: '已结算',
        bount: '7',
        time: i,
        number: '11283838726725656363'
      },
      {
        amount: '100',
        plan: 'AG真人娱乐',
        gameName: '百家乐',
        state: '已结算',
        bount: '7',
        time: i,
        number: '11283838726725656363'
      },
      {
        amount: '100',
        plan: 'AG真人娱乐',
        gameName: '百家乐',
        state: '已结算',
        bount: '7',
        time: i,
        number: '11283838726725656363'
      },
      {
        amount: '100',
        plan: 'AG真人娱乐',
        gameName: '百家乐',
        state: '已结算',
        bount: '7',
        time: i,
        number: '11283838726725656363'
      }]
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.com-tabs {
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
        display: flex;
        justify-content: space-between;
        line-height: 0.3rem;
        color: $font-login;
        border-bottom: 0.01rem solid rgba($ver-lin, 0.7);
        padding: 0.1rem 0;
        &:last-child{
          border-bottom:none;
        }
        .tabs-time{
          color: $login-f-pwd;
        }
        div{
          width: 100%;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
          p{
            width: 100%;
          }
          &:nth-child(1){
            width: 190%;
            text-align: left;
            line-height: 0.18rem;
            justify-content: flex-start;
          }
          &:nth-child(2), &:nth-child(3){
            width: 130%;
          }
        }
      }
    }
  }

  .tabs-title{
    display: flex;
    justify-content: space-around;
    width: 3.45rem;
    padding: 0 0.15rem;
    background-color: $login-bg;
    li{
      width: 100%;
      font-size: 0.14rem;
      color: (rgba($font-login, 0.6));
      line-height: 0.3rem;
      &:nth-child(1){
        width: 190%;
        text-align: left
      }
      &:nth-child(2), &:nth-child(3){
        width: 130%;
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