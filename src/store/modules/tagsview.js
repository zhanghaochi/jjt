const tagsview = {
  state: {
    visitedviews: []
  },
  mutations: {
    ADD_VISITED_VIEW: (state, view) => {
      if (state.visitedviews.some(v => v.path === view.path)) return;
      state.visitedviews.push(view)
    },
    DEL_VISITED_VIEW: (state, view) => {
      for (const [i, v] of state.visitedviews.entries()) {
        if (v.path === view.path) {
          state.visitedviews.splice(i, 1)
          break
        }
      }
    }
  },
  actions: {
    addVisitedView({ commit }, view) {
      commit('ADD_VISITED_VIEW', view)
    },
    delVisitedView({ commit }, view){
      commit('DEL_VISITED_VIEW', view)
    }
  }
}
export default tagsview