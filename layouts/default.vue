<template>
  <div>
    <Loading v-if="loading" />
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<style>
html, body {
  background: #3A3C41;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Loading from '../components/Loading'
export default {
  components: {
    Header,
    Footer,
    Loading
  },
  computed: {
    loading () {
      return this.$store.state.loading
    }
  }
}
</script>
