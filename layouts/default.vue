<template>
  <div class="container mx-auto">
    <Navigation />
    <nuxt />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    Navigation,
  },
  beforeMount() {
    // this.setUserIsOnline()
    // if ('serviceWorker' in navigator) {
    //   this.swRegistration()
    // }
  },
  methods: {
    setUserIsOnline() {
      const isOnline = 'onLine' in navigator ? navigator.onLine : true
      this.$store.commit('SET_IS_ONLINE', isOnline)
      window.addEventListener('online', () => {
        this.$store.commit('SET_IS_ONLINE', true)
      })
      window.addEventListener('offline', () => {
        this.$store.commit('SET_IS_ONLINE', false)
      })
    },
    async swRegistration() {
      await navigator.serviceWorker.register('sw.js', {
        updateViaCache: 'none',
      })
    },
  },
}
</script>
