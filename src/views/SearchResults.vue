<template>
  <div>
    <h1>Resultados de <span class="search-excerp">the beatles</span></h1>

    <section class="main-section">
      <AlbumList />
      <ArtistList
       v-bind:key="artist.id" v-bind:name="artist.name" v-bind:picture_xl="artist.picture_xl" v-bind:nb_fan="artist.nb_fan" v-for="artist in artists" />
    </section>
  </div>
</template>

<script>
import AlbumList from '@/components/lists/AlbumList'
import ArtistList from '@/components/lists/ArtistList'
import json from '@/json/artists.json'

export default {
  name: 'SearchResults',
  components: {
    AlbumList,
    ArtistList
  },
  data () {
    return {
      artists: json.data
    }
  }
}
</script>
