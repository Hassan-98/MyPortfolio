/* eslint-disable */
import Vuex from 'vuex'

export default () => {
  return new Vuex.Store({
   state: {
      ROUTE: 'home',
      modalImg: '',
      openPicModal: false,
      loading: true,
      sidebar: true,
      openedSection: 'GeneralSetting'
   },
   getters: {},
   mutations: {
      setRoute(state, ROUTE){
         state.ROUTE = ROUTE
      },
      closeModal (state) {
        state.openPicModal = false
        state.modalImg = ''
      },
      openPicModal (state, img) {
        state.openPicModal = true
        state.modalImg = img
      },
      endLoading (state) {
        state.loading = false
      },
      hideSidebar (state) {
         state.sidebar = false
      },
      showSidebar (state) {
         state.sidebar = true
      },
      openSection (state, component) {
         state.openedSection = component
      }
   },
   actions: {
   async nuxtServerInit ({ commit }, { route }){
         commit('setRoute', route.name)
      }
   }
   })
}
