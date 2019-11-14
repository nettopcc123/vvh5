<template>
  <f7-page>
    <ff-header-goback titProp='投注记录'></ff-header-goback>
    <section class="bet-rec">
      <article class="a-v">
        <ff-tabs :tabsProp="menulist" curMenuProp="news1" tabsPropClass="home-new-tabs"></ff-tabs>
      </article>
    </section>
  </f7-page>
</template>
<script>
import HeaderGoBack from "@p/comm/HeaderGoBack.view"; // 头部logo
import Tabs from "@c/tabs/Tabs.view"; // 新闻列表
export default {
  name: 'BetgRecord', // 投注列表
  components: {
    "ff-header-goback": HeaderGoBack,
    "ff-tabs": Tabs
  },
  props: {},
  computed: {
  },
  data() {
    return {
          menulist: [
        {
          code: "news1",
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
          code: "news2",
          name: "近3天",
          list: [
            {
              time: "刚刚",
            }
          ]
        },
        {
          code: "news3",
          name: "近一周",
          list: [
            {
              time: "刚刚",
            }
          ]
        },
        {
          code: "news4",
          name: "近10天",
          list: [
            {
              time: "刚刚",
            }
          ]
        },
        {
          code: "news5",
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