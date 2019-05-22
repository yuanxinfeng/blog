const user = {
  state: {
    is_mobile_open_nav: false //移动端 是否展开导航
  },
  mutations: {
    SET_MOBILEOPENNAV(state, is_mobile_open_nav) {
      state.is_mobile_open_nav = is_mobile_open_nav;
    }
  },
  actions: {
    getMobileOpenNav({ commit }, is_mobile_open_nav) {
      commit("SET_MOBILEOPENNAV", is_mobile_open_nav);
    }
  }
};

export default user;
