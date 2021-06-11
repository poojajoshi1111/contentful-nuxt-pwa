import createClient from '~/plugins/contentful'
const contentfulClient = createClient()

export const state = () => ({
  navItems: null,
  isOnline: true,
})

export const actions = {
  async nuxtServerInit({ commit }) {
    try {
      const page = await contentfulClient.getEntries({
        content_type: 'page',
        order: '-sys.createdAt',
      })
      commit('SET_MENU_ITEMS', page.items)
    } catch (err) {
      // eslint-disable-next-line
      console.log(err)
    }
  },
}

export const mutations = {
  SET_MENU_ITEMS(state, navItems) {
    state.navItems = navItems
  },
  SET_IS_ONLINE(state, flag) {
    state.isOnline = flag
  },
}
