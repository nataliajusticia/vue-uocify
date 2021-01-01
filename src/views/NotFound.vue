<template>
  <section>
    <h1 class="header-title">Error 404</h1>
    <p>Lo sentimos, no hemos podido encontrar la página que buscas</p>
    <router-link to="/" class="btn">Home</router-link>
  </section>
</template>

<script>
export default {
  name: 'NotFound',
  metaInfo: {
    title: '404 Error',
    meta: [
      {
        name: 'description',
        content: 'Error 404. Lo sentimos mucho pero la página que busca no se encuentra en nuestros servidores.'
      }
    ]
  }
}
</script>
