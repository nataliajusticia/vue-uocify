<template>
  <div>
    <h1>Resultados de <span class="search-excerp">the beatles</span></h1>

    <section class="main-section">
      <AlbumList v-bind:albums="albums" />
      <ArtistList v-bind:artists="artists" />
      <TrackList v-bind:tracks="tracks" />
    </section>
  </div>
</template>

<script>
import AlbumList from '@/components/album/AlbumList'
import ArtistList from '@/components/artist/ArtistList'
import TrackList from '@/components/track/TrackList'

import JsonAlbums from '@/json/albums.json'
import JsonArtists from '@/json/artists.json'
import JsonTracks from '@/json/tracks.json'

export default {
  name: 'SearchResults',
  components: {
    AlbumList,
    ArtistList,
    TrackList
  },
  data () {
    return {
      albums: JsonAlbums.data,
      artists: JsonArtists.data,
      tracks: JsonTracks.data
    }
  }
}
</script>
