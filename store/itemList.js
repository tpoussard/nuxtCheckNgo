export const state = () => ({
  data: []
})

export const mutations = {
  setData(state, items) {
    state.data = items.data
  }
}
