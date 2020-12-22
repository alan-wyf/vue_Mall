import Vue from 'vue'
import Vuex from 'vuex'

import api from '@/assets/config/api.js'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    cartTotal: {
      goodsCount: 0,
      goodsAmount: 0,
      checkedGoodsCount: 0,
      checkedGoodsAmount: 0
    },
    cartList: []

  },
  mutations: {
    setCarList: function (state, cartList) {
      state.cartList = cartList
    },
    setCartTotal: function (state, cartTotal) {
      state.cartTotal = cartTotal
    }
  },
  actions: {
    AjaxCart: async function (content) {
      const cartRes = await axios.get(api.CartList)
      console.log(cartRes.data)
      content.commit('setCarList', cartRes.data.data.cartList)
      content.commit('setCartTotal', cartRes.data.data.cartTotal)
    }
  },
  modules: {
  }
})
