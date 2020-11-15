<template>
    <header>
    <nav class="navbar">
      <div class="navbar__brand">
        <router-link class="navbar__logo" to="/">
          <img src="@/assets/logo/logo.svg" width="150" alt="uocify logo" loading="lazy" class="d-none d-sm-block">
          <img src="@/assets/logo/icon.svg" width="40" alt="uocify logo" loading="lazy" class="d-sm-none">
        </router-link>
        <SearchBar />
      </div>

      <div class="navbar__user">
        <span class="user-name d-none d-sm-block">Natalia</span>
        <span class="user-icon"><fa-icon icon="user" /></span>
      </div>
    </nav>
  </header>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'

export default {
  name: 'Header',
  components: {
    SearchBar
  }
}
</script>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  z-index: 1;
}

.navbar {
  background-color: $color-white;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  transition: all 0.3s;

  // Brand section
  &__brand {
    display: flex;
    align-items: center;
  }

  &__logo {
    display: inline-block;
    margin-right: 15px;

    img {
      display: inline-block;
      vertical-align: top;
      }
  }

  // User section
  &__user {
    display: flex;
    align-items: center;

    .user-name {
      font-size: 0.75rem;
      font-weight: 700;
      margin-right: 0.75rem;
      line-height: 100%;
    }

    .user-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
      background-color: $color-grey-lighter;
      border-radius: 100%;
      cursor: pointer;

      &:hover {
        background-color: $color-grey-dark;
        color: $color-grey-lighter;
        transition: .1s linear;
      }
    }
  }
}
</style>
