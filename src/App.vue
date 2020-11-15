<template>
  <div id="app">
    <AppHeader />
    <main class="container">
      <SearchResults />
    </main>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import SearchResults from '@/views/SearchResults'

export default {
  name: 'App',
  components: {
    AppHeader,
    SearchResults
  }
}
</script>
