<template>
  <section class="home">
    <h1 class="header-title">¿En busca de música? <br> Tu traes la pasión. Uocify trae la música.</h1>
    <p>Prueba Uocify Premium gratis por 30 días*</p>
    <router-link :to="{ path: '/search', query: { query: 'the beatles' }}" class="btn">Más de The Beatles</router-link>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>
