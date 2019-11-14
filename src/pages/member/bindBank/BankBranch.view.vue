<template>
  <f7-page>
    <ff-header-goback titProp='绑定银行卡'></ff-header-goback>
    <section class="bbr scroll-con">
      <article class="bbr-ward">
        <p class="bbr-ft">绑定银行卡</p>
        <p class="bbr-has-name">请绑定<span>张三丰</span>的银行卡</p>
        <ul class="bbr-list">
          <li>
            <p class="bbr-iw">
              <span><input type="text" class="ff-input" name="" value="" placeholder="请输入银行卡号"></span>
              <span class="bbr-close"><svg-icon icon-class="close01" /></span>
            </p>
          </li>
        </ul>
        <p class="bbr-info">
          <span>建议您绑定这些银行：</span>
          <span class="bank-i"><f7-button fill sheet-open=".stand-bank"><svg-icon icon-class="info" /></f7-button></span>
        </p>
        <p class="bbr-ft">相关信息</p>
        <ul class="bbr-b-list">
          <li>
            <p class="bbrb-t">开户行</p>
            <p class="bbrb-r">
              <span><input type="text" class="ff-input" name="" value="" placeholder="请输入银行名称"></span>
              <span class="bbl-ico"><f7-button fill sheet-open=".select-bank"><svg-icon icon-class="more" /></f7-button></span>
            </p>
          </li>
          <li>
            <p class="bbrb-t">开户所在区</p>
            <p class="bbrb-r" @touchend.prevent="showPicker(0)" ref="select0">
              <span class="bb-sads">开户省 <span class="bbl-ico-drop"><svg-icon icon-class="drop"/></span></span>
              <span class="bb-sads">开户市 <span class="bbl-ico-drop"><svg-icon icon-class="drop"/></span></span>
            </p>
          </li>
          <li>
            <p class="bbrb-t">开户支行</p>
            <p class="bbrb-r">
              <span><input type="text" class="ff-input" name="" value="" placeholder="请输入开户支行信息"></span>
            </p>
          </li>
        </ul>
        <div class="bbf-rem">
          <svg-icon icon-class="info" class="bbl-ico" />
          银行卡号需与银行名称匹配，如不匹配将无法到帐
        </div>
        <cas-picker @select="handleSelect" :selected-index="[0,1,0]" ref="picker0" :alias="{value:'id', text: 'name'}"></cas-picker>
      </article>
      <p class="l-but w175" @touchend.prevent="goNext">下一步</p>
    </section>
    <ff-select-bank></ff-select-bank>
  </f7-page>
</template>
<script>
import json from '@c/address/components/data.json'
import Picker from '@c/address/components/bscroll/picker.vue'
import casPicker from '@c/address/components/casasualPicker'

import HeaderGoBack from "@p/comm/HeaderGoBack.view"; // 头部logo
import StandBank from "@p/comm/StandBank.view"; // 支持银行
import SelectBank from "@p/comm/SelectBank.view"; // 选择银行
export default {
  name: 'BindBank', // 绑定银行卡
  components: {
    "ff-header-goback": HeaderGoBack,
    "ff-select-bank": SelectBank,
    Picker,
    casPicker
  },
  props: {},
  computed: {
  },
  data() {
    return {
      hasName: false,
      location: {
        id: '140000 141100 141121',
        name: '山西省 吕梁市 文水县'
      },
      json
    };
  },
  created() {},
  mounted() {
    this.$refs.picker0.setData(this.json)
  },
  filters: {
    
  },
  methods: {
      addressPick(name, code) {
        console.log(name,'a01---', code)
      },
      showPicker(index) {
        if (index === 0) {
          let picker = this.$refs['picker' + index]
          picker.show()
        } else {
          this.$picker().show()
        }
      },
      handleSelect(val, ind, text) {
        console.log(val, '-----',ind, text)
        console.log(val[0], ind[0], text[0])
      },

    goNext() {

    }
  },
  destroyed() {
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.bbr{
  .bbr-ward{
    background-color: $login-bg;
    border-radius: 0.06rem;
    padding: 0.5rem 0.2rem 0.2rem;
    color: $font-login;
    .bbr-ft{
      font-size: 0.16rem;
      color: $font-login;
      line-height: 0.24rem;
    }
    .bbr-has-name{
      font-size: 0.14rem;
      color: $login-f-pwd;
      line-height: 0.3rem;
      span{
        color: $font-login;
        padding: 0 0.03rem;
        font-size: 0.14rem;
      }
    }
    .bbr-list{
      margin-top: 0.2rem;
      li{
        border-bottom: 0.01rem solid rgba($login-f-pwd, 0.3);
        padding-bottom: 0.05rem;
        .bbr-iw{
          display: flex;
          justify-content: space-between;
          span{
            width: 100%; 
            display: flex;
            justify-content: flex-end;
            align-items: center;
            svg{
              width: 0.18rem;
              height: 0.18rem;
              color: rgba($login-f-pwd, 0.9);
            }
          }
          .bb-close{
            width: 15%;
          }
          input{
            line-height: 0.4rem;
          }
        }
      }
    }
    .bbr-info{
      color: $font-wall;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 0.6rem;
      span{
        font-size: 0.14rem;
      }
      .bank-i{
        margin-left: 0.05rem;
        a{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          svg{
            width: 0.18rem;
            height: 0.18rem;
          }
        }
      }
    }

    .bbr-b-list{
      margin-top: 0.2rem;
      li{
        border-bottom: 0.01rem solid rgba($login-f-pwd, 0.3);
        padding: 0.08rem 0 0.03rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .bbrb-t{
          width: 30%;
          font-size: 0.15rem;
          color: $font-login;
          line-height: 0.4rem;
        }
        .bbrb-r{
          flex-grow: 1;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          input::-webkit-input-placeholder {
            color: rgba($login-f-pwd, 0.6);
          }
          input:-moz-placeholder {
            color: rgba($login-f-pwd, 0.6);
          }
          input::-moz-placeholder { 
            color: rgba($login-f-pwd, 0.6);
          }
          input:-ms-input-placeholder {
            color: rgba($login-f-pwd, 0.6);
          }
          span{
            font-size: 0.15rem;
            color: rgba($login-f-pwd, 0.6);
            &:nth-child(1){
              margin-right: 0.1rem;
            }
          }
          input{
            text-align: right;
            font-size: 0.15rem;
          }
          .bb-sads{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            span{
              margin-right: 0rem;
            }
            .bbl-ico-drop{
              svg{
                width: 0.24rem;
                height: 0.24rem;
              }
            }
          }
          .bbl-ico{
            margin-left: 0.05rem;
            display: flex;
            align-items: center;
            svg{
              width: 0.18rem;
              height: 0.18rem;
            }
          }
        }
      }
    }
    .bbf-rem{
      display: flex;
      justify-content: flex-start;
      color:rgba($font-wall, 0.5);
      align-items: center;
      padding-top: 0.15rem;
      svg{
        margin-right: 0.08rem;
        width: 0.16rem;
        height: 0.16rem;
      }
    }
  }
}
</style>