<template>
  <f7-navbar class="hg">
    <f7-nav-left><f7-link back><div class="h-t-logo"><svg-icon icon-class="goback" /></div></f7-link></f7-nav-left>
    <f7-nav-title>{{titProp}}</f7-nav-title>
    <f7-nav-right class="hg-r">
      <f7-button fill sheet-open=".fund-drop" v-if="rTitProp == '全部类型' && riconProp">
        {{ rTitProp }}<svg-icon :icon-class="riconProp"  class="r-i-drop"/>
      </f7-button>
      <svg-icon v-else :icon-class="riconProp"  class="r-i-c"/>
    </f7-nav-right>
    <ff-fun-drop></ff-fun-drop>
  </f7-navbar>
</template>
<script>
import FundDrop from "@p/member/FundDrop.view"; // 资金选择
export default {
  name: "HeaderGoBack", // 返回上一页
  components: {
    "ff-fun-drop": FundDrop
  },
  props: {
    titProp: {
      type: String,
      default: ''
    },
    riconProp: {
      type: String,
      default: ''
    },
    rTitProp: {
      type: String,
      default: ''
    }
  },
  computed: {
  },
  data() {
    return {
    }
  },
  watch: {
  },
  created() {},
  mounted() {},
  filters: {},
  methods: {},
  destroyed() {}
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.hg{
  .hg-r{
    a{
      color: #506081;
      font-size: 0.14rem;
      .r-i-drop{
        width: 0.19rem;
        height: 0.19rem;
      }
    }
  }
  .r-i-c{
    width: 0.21rem;
    height: 0.21rem;
  }
}
.navbar a.link{
  svg{
    width: 0.2rem;
    height: 0.2rem;
  }
}
</style>
