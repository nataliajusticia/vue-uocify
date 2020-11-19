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

<style lang="scss" scoped>
.navbar__search {
  input {
    appearance: none;
    font-size: 0.75rem;
    color: $color-grey-dark;
    padding: 5px;
    border: 0;
    border-bottom: 2px solid transparent;
    font-family: $font-family-base;

    &:focus {
      outline: none;
      border-bottom: 2px solid $color-red;
    }
  }
}
</style>
