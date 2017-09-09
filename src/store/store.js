import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  title: '首页',
  showBack: false
}
const mutations = {
  showTitle (state, titles) {
    state.title = titles
  }
}
export default new Vuex.Store({
  state,
  mutations
})
