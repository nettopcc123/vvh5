<template>
    <f7-sheet class="select-bank" swipe-to-close backdrop :opened="sheetOpened" @sheet:closed="sheetOpened = false">
      <div class="sb-con">
        <p class="sb-tit-wrap">
          <span class="sb-cancel"><f7-link sheet-close>取消</f7-link></span>
          <span class="sb-tit">选择银行</span>
          <span class="sb-confirm"><f7-link sheet-close>确定</f7-link></span>
        </p>
        <div class="sb-cn">
          <ul class="sb-clist">
            <li v-for="(val, index) in bankList" :key="index" @touchend.prevent="selectBank(val.id)" :class="sid == val.id ? 'sb-cur' : ''">{{val.name}}</li>
          </ul>
        </div>
      </div>
    </f7-sheet>
</template>
<script>
export default {
  name: 'StandBank', // 支持银行
  components: {
  },
  props: {
  },
  computed: {
  },
  data() {
    return {
      sid: '',
      sheetOpened: false,
      bankList: [{id: 1,name: '中国银行'},{id: 2,name: '工商银行'},{id: 3,name: '建设银行'},{id: 4,name: '交通银行'},
                 {id: 5,name: '华夏银行'},{id: 6,name: '招商银行'},{id: 7,name: '光大银行'},{id: 8,name: '中国银行'},
                 {id: 9,name: '工商银行'},{id: 10,name: '建设银行'},{id: 11,name: '交通银行'},{id: 12,name: '华夏银行'},
                 {id: 13,name: '招商银行'},{id: 14,name: '光大银行'},{id: 15,name: '中国银行'},{id: 16,name: '工商银行'},
                 {id: 17,name: '建设银行'},{id: 18,name: '交通银行'},{id: 19,name: '华夏银行'},{id: 20,name: '招商银行'},
                 {id: 21,name: '光大银行'}
                ]
    };
  },
  created() {},
  mounted() {
  },
  filters: {
    
  },
  methods: {
    selectBank(v) {
      this.sid = v
    }
  },
  destroyed() {
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.select-bank{
  background: $but-deep;
  height: 70vh;
  border-radius: 0.06rem 0.06rem 0 0;
  .sb-con{
    .sb-tit-wrap{
      line-height: 0.4rem;
      border-bottom: 0.01rem solid rgba($ver-lin, 0.7);
      padding: 0 0.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span{
        font-size: 0.15rem;
        a{
          font-size: 0.15rem;
        }
      }
      .sb-cancel{
        color: $login-f-pwd;
      }
      .sb-confirm{
        color: $but-light-l;
      }
      .sb-tit{
        color: rgba($font-login, 0.6);
      }
    }
    .sb-cn{
      padding: 0.2rem;
      color: $font-login;
      line-height: 0.22rem;
      font-size: 0.14rem;
      height: calc(70vh - 0.8rem);
      overflow: auto;
      .sb-clist{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        li{
          width: 30%;
          border:solid 0.01rem $login-f-pwd;
          border-radius: 0.06rem;
          line-height: 0.44rem;
          text-align: center;
          font-size: 0.16rem;
          color: rgba($font-login, 0.6);
          margin-bottom: 0.1rem;
        }
        .sb-cur{
          background-color: $login-f-pwd;
          color: $font-login;
        }
      }
    }
  }
}
</style>