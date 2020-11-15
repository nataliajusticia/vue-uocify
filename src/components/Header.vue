<template>
    <header>
    <nav class="navbar">
      <div class="navbar__brand">
        <a class="navbar__logo" href="#">
          <img src="@/assets/logo.svg" width="150" alt="uocify logo" loading="lazy" class="d-none d-sm-block">
          <img src="@/assets/icon.svg" width="40" alt="uocify logo" loading="lazy" class="d-sm-none">
        </a>

        <div class="navbar__search">
          <fa-icon icon="search" />
          <input type="text" placeholder="Buscar..." value="the beatles">
        </div>
      </div>

      <div class="navbar__user">
        <span class="user-name d-none d-sm-block">Natalia</span>
        <span class="user-icon"><fa-icon icon="user" /></span>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
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

  &__search {
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
