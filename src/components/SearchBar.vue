<template>
  <div class="navbar__search">
    <form @submit.prevent="submitQuery">
      <fa-icon icon="search" />
      <input type="text" placeholder="Buscar..." v-model="query">
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      query: ''
    }
  },
  methods: {
    submitQuery () {
      this.$router.push({
        name: 'Search',
        query: { query: this.query }
      }).catch(() => {})
      this.query = ''
    }
  }
}
</script>
