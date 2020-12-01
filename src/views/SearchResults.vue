<template>
  <section>
    <h1>Resultados de <span class="search-excerp">{{ $route.query.query }}</span></h1>

    <div class="main-section">
      <div class="nav">
        <a v-for="(tab, index) in tabs" v-bind:key="tab" @click="activeTab = index" :class="{active: activeTab === index}">{{ tab }}</a>
      </div>
      <HomeList v-bind:tracks="tracks" v-bind:albums="albums" v-bind:artists="artists" v-bind:activeTab="activeTab"  v-if="activeTab === 0" />
      <TrackList v-bind:tracks="tracks" v-if="activeTab === 1" />
      <AlbumList v-bind:albums="albums" v-if="activeTab === 2" />
      <ArtistList v-bind:artists="artists" v-if="activeTab === 3" />
    </div>
  </section>
</template>

<script>
import HomeList from '@/components/HomeList'
import TrackList from '@/components/track/TrackList'
import AlbumList from '@/components/album/AlbumList'
import ArtistList from '@/components/artist/ArtistList'

import JsonTracks from '@/json/tracks.json'
import JsonAlbums from '@/json/albums.json'
import JsonArtists from '@/json/artists.json'

export default {
  name: 'SearchResults',
  components: {
    HomeList,
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
      tabs: ['Todos', 'Canciones', 'Álbumes', 'Artistas']
    }
  }
}
</script>
