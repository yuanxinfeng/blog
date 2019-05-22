import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app";
import header from "./modules/header";
import getters from "./getters";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    header
  },
  getters
});

export default store;
