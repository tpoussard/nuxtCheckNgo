import axios from 'axios'

export const state = () => ({})

export const actions = {
  async nuxtServerInit({ commit }) {
    const res = await axios.get(
      'https://jolly-poitras-86a932.netlify.com/.netlify/functions/server/another/'
    )
    commit('itemList/setData', res.data)
  }
}
