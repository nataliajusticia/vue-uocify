<template>
  <div id="app">
    <AppHeader />
    <main class="container">
      <transition name="slide" mode="out-in">
        <router-view :key="$route.path" />
      </transition>
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

<style lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: opacity .2s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
</style>
