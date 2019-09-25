<template>
  <nav
    class="navbar has-shadow is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <site-logo />
      </nuxt-link>
    </div>
    <div class="navbar-menu">
      <ul class="navbar-end">
        <li
          v-for="item in $siteConfig.mainMenu"
          :key="item.link"
          :class="{ 'navbar-item': true }"
        >
          <component
            :is="item.link.startsWith('http') ? 'a' : 'nuxt-link'"
            :href="item.link"
            :to="item.link"
            :target="item.target ? item.target : '_self'"
          >
            {{ item.name }}
          </component>
        </li>
        <li class="navbar-item site-search-wrapper">
          <site-search />
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import SiteSearch from '~/components/SiteSearch'

export default {
  name: 'SiteNav',
  components: { SiteSearch },
  data() {
    return {
      active: false
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar-item img {
  max-height: 2rem;
}
.site-search-wrapper {
  transform: translateX(5px);
  @media (max-width: 1023px) {
    display: none;
  }
}
.navbar-burger {
  height: auto;
}
.navbar-menu a {
  display: block;
}
.nuxt-link-active {
  color: $secondary;
}
</style>
