import axios from 'axios'

export const store = () => ({
  itemList: []
})
export const mutations = {
  setData(state, items) {
    state.itemList = items
  }
}
export const actions = {
  async nuxtServerInit({ commit }) {
    const res = await axios.get(
      'https://jolly-poitras-86a932.netlify.com/.netlify/functions/server/another/'
    )
    commit('setData', res.data)
  }
}
