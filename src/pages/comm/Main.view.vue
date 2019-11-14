<template>
    <f7-page>
      <ff-header></ff-header>
      <iframe 
        :src="homeUrl"
        name="vgame" 
        scolling="no"
        class="if-h"
        ref="vgame"
      >
      </iframe>
    </f7-page>
</template>
<script>
import Header from "@p/comm/Header.view"; // 头部logo
import { mapGetters } from 'vuex';
export default {
  components: {
    "ff-header": Header,
  },
  computed: {
    ...mapGetters(['homeUrl'])
  },
  data() {
    return {
      leftIconProp: 'personal',
      resolution: 200,  
      iframes: [],  
      interval: null,
      frame: null,
      vueid:"myid"
    }
  },
  watch: {
  },
  created(){
  },
  mounted() {
  
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.if-h{
  height: 100vh;
  margin: 0px; 
  padding: 0px; 
  overflow: hidden; 
  border: none; 
  width: 100vw;
  .back-icon{
    display: none;
  }
}
</style>
