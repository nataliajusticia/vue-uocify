<template>
  <section>
    <h1>Resultados de <span class="search-excerp">{{ query }}</span></h1>

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

import { getTracks, getAlbums, getArtists } from '@/api'

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
      tracks: [],
      albums: [],
      artists: [],
      activeTab: 0,
      tabs: ['Todos', 'Canciones', 'Álbumes', 'Artistas'],
      query: this.$route.params.q || ''
    }
  },
  created () {
    this.search(this.query)
  },
  watch: {
    '$route.params.q': function (q) {
      this.query = q
    }
  },
  methods: {
    changeTab (value) {
      this.activeTab = value
    },
    // Search
    search (q) {
      this.updateTracks(q)
      this.updateAlbums(q)
      this.updateArtists(q)
    },
    async updateTracks (q) {
      const response = await getTracks(q)
      this.tracks = response.data
    },
    async updateAlbums (q) {
      const response = await getAlbums(q)
      this.albums = response.data
    },
    async updateArtists (q) {
      const response = await getArtists(q)
      this.artists = response.data
    }
  }
}
</script>
