<template>
  <div class="load-effect-wrap">
    <div class="load-effect" v-show="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="bg"></div>
  </div>
</template>
<script>
export default {
  name:'loading',
  data() {
    return {
      loading: true
    }
  }
}
</script>

<style>
.load-effect {
  width: 0.5rem;
  height: 0.5rem;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10002;
}
.load-effect span {
  display: inline-block;
  width: 0.1rem;
  height: 0.1rem;
  border-radius: 50%;
  background: #c4daff;
  position: absolute;
  -webkit-animation: load 1.04s ease infinite;
}
@-webkit-keyframes load {
  0%{
    -webkit-transform: scale(1.2);
    opacity: 1;
  }
  100%{
    -webkit-transform: scale(.3);
    opacity: 0.5;
  }
}
.load-effect span:nth-child(1) {
  right: 0;
  top: 50%;
  margin-top:-0.05rem;
  -webkit-animation-delay: 0.13s;
}
.load-effect span:nth-child(2) {
  right: 0.07rem;
  top: 0.07rem;
  -webkit-animation-delay: 0.26s;
}
.load-effect span:nth-child(3) {
  right: 50%;
  top: 0;
  margin-right: -0.05rem;
  -webkit-animation-delay: 0.39s;
}
.load-effect span:nth-child(4) {
  top: 0.07rem;
  left:0.07rem;
  -webkit-animation-delay: 0.52s;
}
.load-effect span:nth-child(5) {
  left: 0;
  top: 50%;
  margin-top:-0.05rem;
  -webkit-animation-delay: 0.65s;
}
.load-effect span:nth-child(6) {
  left: 0.07rem;
  bottom:0.07rem;
  -webkit-animation-delay: 0.78s;
}
.load-effect span:nth-child(7) {
  bottom: 0;
  right: 50%;
  margin-right: -0.05rem;
  -webkit-animation-delay: 0.91s;
}
.load-effect span:nth-child(8) {
  bottom: 0.07rem;
  right: 0.07rem;
  -webkit-animation-delay: 1.04s;
}
</style>