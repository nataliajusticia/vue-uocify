<template>
  <div>
    <h1>Resultados de <span class="search-excerp">{{ $route.query.query }}</span></h1>

    <section class="main-section">
      <div class="nav">
        <a v-for="(tab, index) in tabs" v-bind:key="tab" @click="activeTab = index" :class="{active: activeTab === index}">{{ tab }}</a>
      </div>

      <div v-if="activeTab === 0" class="pane">
        <TrackList v-bind:tracks="tracks" />
      </div>

      <div v-if="activeTab === 1" class="pane">
        <AlbumList v-bind:albums="albums" />
      </div>

      <div v-if="activeTab === 2" class="pane">
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
      activeTab: 0,
      tabs: ['Canciones', 'Álbumes', 'Artistas']
    }
  }
}
</script>
