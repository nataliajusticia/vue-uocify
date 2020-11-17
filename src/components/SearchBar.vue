<template>
  <div class="navbar__search">
    <form>
      <fa-icon icon="search" />
      <input type="text" placeholder="Buscar..." value="">
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchBar'
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
