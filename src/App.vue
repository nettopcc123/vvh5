<template>
  <f7-app :params="f7params">
    <f7-statusbar></f7-statusbar>
    <transition>
      <ff-dialog :dialProp="diacon" v-if="diaShow"></ff-dialog>
    </transition>
    <f7-view id="main-view" url="/" main class="safe-areas"></f7-view>
  </f7-app>
</template>

<script>
import Dialog from "@c/dialog/Dialog.view"; // 弹出框
import routes from "@/router/Router.config.js";
export default {
  name: "App",
  components: {
    "ff-dialog": Dialog
  },
  computed: {
    
  },
  data() {
    return {
      diaShow: false,
      diacon: {},
      f7params: {
        id: "f.app.vapp", // App bundle ID
        name: "app", // App name
        theme: "auto", // Automatic theme detection
        routes: routes
      }
    };
  },
  watch: {
  },
  mounted() {
    this.bindEvent()
  },
  filters: {
    
  },
  methods: {
    bindEvent() {
      this.$customEvent.on('changeDialog', data => {
        console.log('c---',data)
        this.diaShow = data
      });
      this.$customEvent.on('dialogCon', data => {
        console.log('d---',data)
        this.diacon = data
      });
    }
  }
};
</script>