const LOADING = {
  install(Vue) {
    if (document.getElementsByClassName('.load-effect-wrap').length) return
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    let tpl;
    Vue.prototype.$loading = {
      show() {
        var loading = Vue.extend(require('@c/loading/Loading.view').default);
            tpl = new loading().$mount().$el;
            document.body.appendChild(tpl);
            return tpl
      },
      hidden() {
        return document.body.removeChild(tpl);
      }
    }
    this.show = function(){
      var loading = Vue.extend(require('@c/loading/Loading.view').default);
          tpl = new loading().$mount().$el;
          document.body.appendChild(tpl);
          return tpl
    }
    this.hidden = function() {
      return document.body.removeChild(tpl);
    }
  }
}
export default LOADING