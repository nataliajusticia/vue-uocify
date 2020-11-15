<template>
  <div id="app">
    <AppHeader />
    <main class="container">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>
