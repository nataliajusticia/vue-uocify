<template>
  <div>
    <h1>Resultados de <span class="search-excerp">the beatles</span></h1>

    <section class="main-section">
      <AlbumList />
      <ArtistList />
    </section>
  </div>
</template>

<script>
import AlbumList from '@/components/lists/AlbumList'
import ArtistList from '@/components/lists/ArtistList'

export default {
  name: 'SearchResults',
  components: {
    AlbumList,
    ArtistList
  }
}
</script>
