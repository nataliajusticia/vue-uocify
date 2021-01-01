<template>
  <div class="navbar__search">
    <form @submit.prevent="submitQuery">
      <fa-icon icon="search" />
      <label for="search" class="visibility-hidden">Buscar</label>
      <input id="search" type="text" name="search" placeholder="Buscar..." v-model="query">
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
