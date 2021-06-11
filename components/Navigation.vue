<template>
  <div class="navigation">
    <div class="h-1" :class="isOnline ? 'bg-green-500' : 'bg-red-500'" />
    <nav>
      <ul role="menu" class="flex justify-between my-3">
        <li
          v-for="(navItem, index) in navItems"
          :key="index"
          class="inline-block"
        >
          <nuxt-link
            :to="'/pages/' + navItem.fields.slug.trim()"
            role="menuitem"
          >
            {{ navItem.fields.navTitle }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['navItems', 'isOnline']),
  },
}
</script>
