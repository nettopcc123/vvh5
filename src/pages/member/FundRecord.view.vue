<template>
  <f7-page>
    <ff-header-goback titProp='资金记录' rTitProp="全部类型" riconProp="drop"></ff-header-goback>
    <section class="bet-rec">
      <article class="a-v">
        <ff-funtabs :tabsProp="menulist" curMenuProp="fund1" tabsPropClass="home-new-tabs"></ff-funtabs>
      </article>
    </section>
  </f7-page>
</template>
<script>
import HeaderGoBack from "@p/comm/HeaderGoBack.view"; // 头部logo
import FunTabs from "@c/tabs/FunTabs.view"; // 资金列表
export default {
  name: 'BetgRecord', // 投注列表
  components: {
    "ff-header-goback": HeaderGoBack,
    "ff-funtabs": FunTabs
  },
  props: {},
  computed: {
  },
  data() {
    return {
          menulist: [
        {
          code: "fund1",
          name: "今日",
          list: [
            {
              time: "2019-10-21 19:30",
            },
            {
              time: "2019-10-21 19:30",
            },
            {
              time: "2019-10-21 19:30",
            }
          ]
        },
        {
          code: "fund2",
          name: "近3天",
          list: [
            {
              time: "刚刚",
            }
          ]
        },
        {
          code: "fund3",
          name: "近一周",
          list: [
            {
              time: "刚刚",
            }
          ]
        },
        {
          code: "fund4",
          name: "近10天",
          list: [
            {
              time: "刚刚",
            }
          ]
        },
        {
          code: "fund5",
          name: "近15天",
          list: [
            {
              time: "刚刚",
            }
          ]
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
.bet-rec{
 background: $main-bg;
 text-align: center;
}
</style>