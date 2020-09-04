import Vue from 'vue'
import Vuex from 'vuex'
import UserProvider from '@/resources/user_provider'
import BCvalue from '@/resources/bc_value'
const userService = new UserProvider()
const bcvalue= new BCvalue()

Vue.use(Vuex)

const modules = {
}

const state = {
  user: {},
  bcvalue: {}
}

const actions = {
  async getUser ({commit}) {
    const data = await userService.getUser()
    commit('SET_USER', data)
  },

  async getBCvalue ({commit}) {
    const data = await bcvalue.getBCvalue()
    commit('SET_BCvalue', data)
  }
}

const mutations = {
  SET_USER (state, data) {
    state.user = data
  },
  SET_BCvalue (state, data) {
    state.bcvalue = data
  }
}

export default new Vuex.Store({
  modules,
  state,
  actions,
  mutations
})