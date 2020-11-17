<template>
  <div>
    <img src="@/assets/logo.svg" width="150" alt="uocify logo" loading="lazy" class="d-none d-sm-block">
    <h1 class="header-title">Error 404</h1>
    <p>Lo sentimos, no hemos podido encontrar la página que buscas</p>
    <router-link to="/" class="btn">Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>
