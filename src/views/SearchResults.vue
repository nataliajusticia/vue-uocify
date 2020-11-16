<template>
  <div>
    <h1>Resultados de <span class="search-excerp">the beatles</span></h1>

    <section class="main-section">
      <AlbumList v-bind:albums="albums" />
      <ArtistList v-bind:artists="artists" />
    </section>
  </div>
</template>

<script>
import AlbumList from '@/components/lists/AlbumList'
import ArtistList from '@/components/lists/ArtistList'

import JsonAlbums from '@/json/albums.json'
import JsonArtists from '@/json/artists.json'

export default {
  name: 'SearchResults',
  components: {
    AlbumList,
    ArtistList
  },
  data () {
    return {
      albums: JsonAlbums.data,
      artists: JsonArtists.data
    }
  }
}
</script>
