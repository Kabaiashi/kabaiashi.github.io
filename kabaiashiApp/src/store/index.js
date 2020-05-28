import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: false,
    users: []
  },
  getters: {
    users(state) {
      return state.users
    },
    authenticated(state) {
      return state.authenticated
    }
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setAuthenticated(state, authenticated) {
      state.authenticated = authenticated
    }
  },
  actions: {
    login({ commit }, authenticated) {
      commit('setAuthenticated', authenticated)
    },
    fetchUsers({ commit }) {
      axios.get(`${process.env.VUE_APP_GITHUB_API}/users?page=1&per_page=20`)
        .then(response => {
          commit('setUsers', response.data)
        })
    }
  },
  modules: {
  }
})
