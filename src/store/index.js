import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isBackTop: false,
    cartGoods: [],
    cartGoods_length: 0,
    sizeChart_flag: false,
    cart_drawer: false,

  },
  mutations: {
    // 保存当前菜单栏的路径
    saveActive(state, pathName) {
      state.isBackTop = pathName;
    },
    // 购物车
    getCartGoods(state, pathName) {
      state.cartGoods = pathName;
    },
    // 购物车数量
    getCartGoods_length(state, pathName) {
      state.cartGoods_length = pathName;
    },
    // sizeChart 状态
    getSizeChart_flag(state, patnName) {
      state.sizeChart_flag = patnName
    },

    // cart drawer 状态
    getCart_drawer(state, patnName) {
      state.cart_drawer = patnName
    }

  }
})
