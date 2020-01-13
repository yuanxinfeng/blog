/*
 * @Description:
 * @Author: Jasper
 * @Github: https://github.com/yuanxinfeng
 * @Date: 2019-05-20 15:34:56
 * @LastEditors  : Jasper
 * @LastEditTime : 2020-01-13 15:59:38
 */
const user = {
  state: {
    is_rightBar: false, //默认显示右边栏
    is_pager: true //触发分页 进行页面滑动到顶部
  },
  mutations: {
    SET_RIGHTBAR(state, is_rightBar) {
      state.is_rightBar = is_rightBar;
    },
    SET_PAGER(state, is_pager) {
      state.is_pager = is_pager;
    }
  },
  actions: {
    getRightBar({ commit }, is_rightBar) {
      commit("SET_RIGHTBAR", is_rightBar);
    },
    getPager({ commit }, is_pager) {
      commit("SET_PAGER", is_pager);
    }
  }
};

export default user;
