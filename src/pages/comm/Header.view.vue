<template>
  <div class="n-menu" @click.native='test()'>
    <f7-link :href="url">
      <svg-icon :icon-class="leftIconProp" />
    </f7-link>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: "Header", // 头部组件
  components: {},
  props: {
    leftIconProp: {
      // 左边图标
      type: String,
      default: "personal"
    }
  },
  computed: {
    ...mapGetters(['token'])
  },
  data() {
    return {
      url: '',
    }
  },
  watch: {
    token: {
      handler: function(newVal) {
        if (newVal) {
          this.url = '/member'
          this.$store.commit('SET_HOMEURL', 'https://h5.raygaming.co?payload=eyJhbGciOiJIUzI1NiJ9.eyJhcHBfa2V5IjoiOGMwYWZmMDIzM2RmMTA5YiIsImRhdGEiOnsibG9iYnlfdXJsIjoiaHR0cDovL3d3dy5nb29nbGUuY29tIiwidXNlcl9uYW1lIjoiczFfMTAwMSIsImlhdCI6MTU3MzM1OTIwMjAzM319.GpU0c5NLRCAz8OYUjNH13mFVM1NMAjASgECk103odyI');
        }else{
          this.url = '/login'
          console.log('a0')
          this.$store.commit('SET_HOMEURL', 'https://h5.raygaming.co/');
        }
      },
      immediate: true // 确认是否初始执行handler
    }
  },
  created() {},
  mounted() {},
  filters: {},
  methods: {
    test(){
      console.log('a01')
    }
  },
  destroyed() {}
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.n-menu {
  height: 48px;
  width: 0.54rem;
  padding-left: 0.5rem;
  padding-bottom: 10px;
  position: fixed;
  top:0;
  right: 0;
  z-index: 100;
  background: $main-bg;
  font-size: 0.18rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 20px;
    height: 20px;
    color: $icon;
  }
}
</style>
