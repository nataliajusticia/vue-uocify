<template>
  <div>
    <h1>Resultados de <span class="search-excerp">the beatles</span></h1>

    <section class="main-section">
      <div class="nav">
        <a v-on:click="activeTab=1" v-bind:class="[ activeTab === 1 ? 'active' : '' ]">Canciones</a>
        <a v-on:click="activeTab=2" v-bind:class="[ activeTab === 2 ? 'active' : '' ]">Álbumes</a>
        <a v-on:click="activeTab=3" v-bind:class="[ activeTab === 3 ? 'active' : '' ]">Artistas</a>
      </div>

      <div v-if="activeTab === 1" class="pane">
        <TrackList v-bind:tracks="tracks" />
      </div>

      <div v-if="activeTab === 2" class="pane">
        <AlbumList v-bind:albums="albums" />
      </div>

      <div v-if="activeTab === 3" class="pane">
        <ArtistList v-bind:artists="artists" />
      </div>
    </section>
  </div>
</template>

<script>
import TrackList from '@/components/track/TrackList'
import AlbumList from '@/components/album/AlbumList'
import ArtistList from '@/components/artist/ArtistList'

import JsonTracks from '@/json/tracks.json'
import JsonAlbums from '@/json/albums.json'
import JsonArtists from '@/json/artists.json'

export default {
  name: 'SearchResults',
  components: {
    TrackList,
    AlbumList,
    ArtistList
  },
  data () {
    return {
      tracks: JsonTracks.data,
      albums: JsonAlbums.data,
      artists: JsonArtists.data,
      activeTab: 1
    }
  }
}
</script>
