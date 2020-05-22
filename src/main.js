import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Loading from "./components/loading";
//然后通过 USE方法全局注册
Vue.use(Loading);
Vue.config.productionTip = false;
import "iview/dist/styles/iview.css";

import "@/assets/style/index.scss";

var _hmt = _hmt || [];
window._hmt = _hmt; // 必须把_hmt挂载到window下，否则找不到
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?2ff41b2a46b0870d1efd2e6dc99a0395";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
