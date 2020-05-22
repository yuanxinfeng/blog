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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
