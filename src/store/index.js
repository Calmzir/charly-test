import axios from 'axios'
import { createStore } from 'vuex'
import companies from './../API/api'

const apiUrl = './../API/api.js'

export default createStore({
  state: {
    companies: []
  },
  getters: {
  },
  mutations: {
    setCompanies: (state, payload) => {
      state.companies = payload
      console.log(payload)
    }
  },
  actions: {
    getCompaniesAPI: ({commit}) => {
      try {
        const { data } = axios.get(apiUrl);
        commit('setCompanies', data)
      } catch (error) {
        console.log(error)
      }
    },
    getCompanies: ({commit}) => {
      try {
        commit('setCompanies', companies.companies)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
