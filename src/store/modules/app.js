const user = {
  state: {
    is_rightBar: true //默认显示右边栏
  },
  mutations: {
    SET_RIGHTBAR(state, is_rightBar) {
      state.is_rightBar = is_rightBar;
    }
  },
  actions: {
    getRightBar({ commit }, is_rightBar) {
      commit("SET_RIGHTBAR", is_rightBar);
    }
  }
};

export default user;
