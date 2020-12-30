<template>
  <section>
    <h1>Resultados de <span class="search-excerp">{{ $route.query.query }}</span></h1>

    <div class="main-section">
      <div class="nav">
        <a v-for="(tab, index) in tabs" :key="tab" @click="activeTab = index" :class="{active: activeTab === index}">{{ tab }}</a>
      </div>

      <HomeList @updateTab="changeTab" :activeTab="activeTab" :tracks="tracks" :albums="albums" :artists="artists" v-if="activeTab === 0" />
      <TrackList :tracks="tracks" v-if="activeTab === 1" />
      <AlbumList :albums="albums" v-if="activeTab === 2" />
      <ArtistList :artists="artists" v-if="activeTab === 3" />
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
      tracksTotal: JsonTracks.total,
      albumsTotal: JsonAlbums.total,
      artistsTotal: JsonArtists.total,
      activeTab: 0,
      tabs: ['Todos', 'Canciones', 'Álbumes', 'Artistas']
    }
  },
  methods: {
    changeTab (value) {
      this.activeTab = value
    }
  }
}
</script>
