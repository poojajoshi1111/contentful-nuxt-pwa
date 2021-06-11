import createClient from '../plugins/contentful'
const contentfulClient = createClient()

export const state = () => ({
  pages: {},
})

export const actions = {
  async fetchPageData({ commit }, { id }) {
    const page = await contentfulClient.getEntries({
      content_type: 'page',
      'fields.slug': id,
    })
    let pageData = null
    if (page.items[0]) {
      pageData = page.items[0].fields
    }
    commit('UPSERT_PAGES', { [id]: pageData })
  },
}

export const mutations = {
  UPSERT_PAGES(state, pages) {
    state.pages = { ...pages, ...state.pages }
  },
}

export const getters = {
  getPage(state) {
    return (id) => state.pages[id]
  },
}
