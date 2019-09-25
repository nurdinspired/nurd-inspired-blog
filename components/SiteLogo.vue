<template>
  <div>
    <img :src="responsiveImage.src" :alt="$siteConfig.siteName" />
  </div>
</template>
<script>
export default {
  name: 'SiteLogo',
  computed: {
    responsiveImage() {
      if (this.$siteConfig.logo.indexOf('/uploads') === 0) {
        return require(`~/assets${this.$siteConfig.logo}`)
      }
      return { src: this.$siteConfig.logo, srcSet: '' }
    },
    computedTheme() {
      if (this.theme === '' && this.$siteConfig.hero.theme) {
        return this.$siteConfig.hero.theme
      }
      return this.theme || 'mist'
    }
  }
}
</script>
