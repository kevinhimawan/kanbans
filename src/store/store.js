import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    state0: [],
    state1: [],
    state2: [],
    state4: []
  },
  mutations: {
    assignState0 (state, payload) {
      console.log(payload)
    },  
    assignState1 (state, payload) {
      
    },
    assignState2 (state, payload) {
      
    },
    assignState3 (state, payload) {
      
    }
  }
})

export default store
