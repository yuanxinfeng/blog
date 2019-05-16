import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
import "iview/dist/styles/iview.css";

import "@/assets/style/index.scss";
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
