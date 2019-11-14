<template>
  <f7-page>
    <ff-header-goback titProp='银行卡转帐' riconProp="customer"></ff-header-goback>
    <section class="fun-bank scroll-con">
      <article class="fun-bcon">
        您好，非常感谢您的信息。请您务必在收到此信息后2小时内通过网上转账或柜台转账的方式存入以下银行账户内。
      </article>
      <article class="fun-bcon">
        <b>
        【请您在存款是务必使用以下<span class="num-font">充值金额加独特尾数，</span>不然会导致您的存款不能及时到账】
        </b>
      </article>
      <article class="fun-c">
        <div class="fun-ct">
          <p>您充值金额加独特尾数：</p>
          <p class="num-font f22">￥{{bank.amount}}</p>
        </div>
        <ul class="fun-cl">
          <li>
            <span>帐户名称：</span>
            <span>{{bank.name}}</span>
            <span class="f-c1" :data-clipboard-text="bank.name" @click="copySub('f-c1')">复制</span>
          </li>
          <li>
            <span>帐户号码：</span>
            <span>{{bank.acount}}</span>
            <span class="f-c2" :data-clipboard-text="bank.acount" @click="copySub('f-c2')">复制</span>
          </li>
          <li>
            <span>银行名称：</span>
            <span>{{bank.bName}}</span>
            <span class="f-c3" :data-clipboard-text="bank.bName" @click="copySub('f-c3')">复制</span>
          </li>
          <li>
            <span>银行分行：</span>
            <span>{{bank.branchBank}}</span>
            <span class="f-c4" :data-clipboard-text="bank.branchBank" @click="copySub('f-c4')">复制</span>
          </li>
          <li>
            <span>您充值金额加独特尾数：</span>
            <span class="num-font f18">￥{{bank.amount}}</span>
            <span class="f-c5" :data-clipboard-text="bank.amount" @click="copySub('f-c5')">复制</span>
          </li>
          <li>
            <span>转帐备注码：</span>
            <span class="num-font f18">{{bank.rcode}}</span>
            <span class="f-c6" :data-clipboard-text="bank.rcode" @click="copySub('f-c6')">复制</span>
          </li>
        </ul>
      </article>
      <article class="fun-bcon">
      当您完成该笔充值后，如果需要再进行充值，请登录V竞技网站，重新进行充值。<br><br>
      此致！<br><br>
      V竞技团队<br>
      V竞技一直致力于为客户提供最周到的服务。
      </article>
    </section>
  </f7-page>
</template>
<script>
import HeaderGoBack from "@p/comm/HeaderGoBack.view"; // 头部logo
import clipboard from "clipboard"
export default {
  name: 'FundBank', // 银行卡转帐
  components: {
    "ff-header-goback": HeaderGoBack,
  },
  props: {},
  computed: {
  },
  data() {
    return {
      bank:{
        name: '张三丰',
        acount: '6000 0000 0000 0000',
        bName: '中国民生银行',
        branchBank: '宜春市分行',
        amount: '5000.01',
        rcode: '6789'
      }
    };
  },
  created() {},
  mounted() {

  },
  filters: {
    
  },
  methods: {
    copySub(c) {
      const btnCopy = new clipboard(`.${c}`);
      btnCopy.on('success', function(e) {
          console.info('Text:', e.text);
          e.clearSelection();
      });
    }
  },
  destroyed() {
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.fun-bank{
 background: $login-bg;
 padding: 0.15rem 0.25rem;
  .fun-bcon{
    font-size: 0.15rem;
    color: rgba($font-login, 0.8);
    line-height: 0.2rem;
    margin-bottom: 0.15rem;
    b{
      font-size: 0.15rem;
      span{
        font-size: 0.15rem;
      }
    }
    &:last-child{
      padding-bottom: 0.4rem;
    }
  }
  .fun-c{
    background: $but-deep;
    border-radius: 0.06rem;
    padding: 0.15rem;
    margin: 0.05rem 0 0.2rem;
    .fun-ct{
      border-bottom: 0.01rem solid rgba($ver-lin, 0.7);
      p{
        &:nth-child(2){
          line-height: 0.4rem;
        }
      }
    }
    .fun-cl{
      li{
        line-height: 0.32rem;
        display: flex;
        justify-content: space-between;
        text-align: left;
        align-items: center;
        span{
          &:nth-child(2){
            flex-grow: 1
          }
          &:nth-child(3){
            width: 0.36rem;
            height: 0.2rem;
            line-height: 0.2rem;
            text-align: center;
            background-color: #3e4966;
            border-radius: 0.03rem;
            font-size: 0.12rem;
            color: #e5ebff;
          }
        }
      }
    }
    .f18{
      font-size: 0.18rem;
    }
    .f22{
      font-size: 0.22rem;
    }
  }
  .num-font{
    color: $font-but-wall;
    font-weight: bold;
  }
}
</style>