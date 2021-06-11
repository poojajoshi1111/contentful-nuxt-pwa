<template>
  <div class="page-component">
    <a @click="$router.go(-1)">&larr;Back</a>
    <hr />
    <h1>{{ page.heading }}</h1>
    <img
      v-if="page.image"
      :src="page.image.fields.file.url"
      :alt="page.heading"
      loading="lazy"
    />
    <p>
      {{ page.content }}
    </p>
  </div>
</template>

<script>
export default {
  async asyncData({ store, params: { id }, error }) {
    await store.dispatch('page/fetchPageData', { id })
    const page = await store.getters['page/getPage'](id)

    if (!page) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    return { page }
  },
}
</script>
