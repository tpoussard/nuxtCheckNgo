export const state = () => ({
  data: ['test']
})
export const mutations = {
  INIT_CHECKED(state, items) {
    state.data = items
  },
  ADD_CHECKED(state, itemName) {
    state.data.push(itemName)
  },
  REMOVE_CHECKED(state, itemName) {
    const index = state.data.indexOf(itemName)
    state.data.splice(index, 1) // delete 1 item on index 'index'
  }
}

export const actions = {
  initChecked: (store, items) => {
    // check is array
    if (!Array.isArray(items)) {
      items = []
    }
    store.commit('INIT_CHECKED', items)
  },
  addChecked: (store, item) => {
    store.commit('ADD_CHECKED', item)
  },
  removeChecked: (store, item) => {
    store.commit('REMOVE_CHECKED', item)
  }
}

export const getters = {
  getState: (state) => state.data,
  includeChecked: (state) => (itemName) => state.data.includes(itemName),
  counter: (state) => (categoryData) => {
    let countChecked = 0
    for (const item of categoryData) {
      if (state.data.includes(item.key)) {
        countChecked += 1
      }
    }
    return countChecked
  }
}
