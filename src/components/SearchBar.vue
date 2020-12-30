<template>
  <div class="navbar__search">
    <form @submit.prevent="submitQuery">
      <fa-icon icon="search" />
      <label class="visibility-hidden" for="search">Buscar</label>
      <input id="search" type="text" placeholder="Buscar..." v-model="query">
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      query: this.$route.params.q || ''
    }
  },
  methods: {
    submitQuery () {
      this.$router.push({
        name: 'Search',
        params: { q: this.query }
      }).catch(() => {})
      this.query = ''
    }
  }
}
</script>
