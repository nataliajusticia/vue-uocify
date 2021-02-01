<template>
  <section>
    <h1>Resultados de <span class="search-excerp">{{ query }}</span></h1>

    <div class="main-section">
      <div id="spinner" v-if="loading"></div>

      <div class="nav">
        <a v-for="(tab, index) in tabs" :key="tab" @click="activeTab = index" :class="{active: activeTab === index}">{{ tab }}</a>
      </div>

      <div id="tab-home" v-if="activeTab === 0">
        <h2><a class="direct-link" @click="changeTab(1)">Canciones <fa-icon icon="chevron-right" /></a></h2>
        <TrackList :tracks="tracks.slice(0,6)" v-if="tracks.length" />
        {{ messageTrack }}

        <h2><a class="direct-link" @click="changeTab(2)">Álbumes <fa-icon icon="chevron-right" /></a></h2>
        <AlbumList :albums="albums.slice(0,6)" v-if="albums.length" />
        {{ messageAlbum }}

        <h2><a class="direct-link" @click="changeTab(3)">Artistas <fa-icon icon="chevron-right" /></a></h2>
        <ArtistList :artists="artists.slice(0,6)" v-if="artists.length" />
        {{ messageArtist }}
      </div>

      <div id="tab-tracks" v-if="activeTab === 1">
        <h2>{{ tracksTotal }} canciones</h2>
        <TrackList :tracks="tracks" v-if="tracks.length" />
        {{ messageTrack }}
      </div>

      <div id="tab-albums" v-if="activeTab === 2">
        <h2>{{ albumsTotal }} álbumes</h2>
        <AlbumList :albums="albums" v-if="albums.length" />
        {{ messageAlbum }}
      </div>

      <div id="tab-artists" v-if="activeTab === 3">
        <h2>{{ artistsTotal }} artistas</h2>
        <ArtistList :artists="artists" v-if="artists.length" />
        {{ messageArtist }}
      </div>
    </div>
  </section>
</template>

<script>
import TrackList from '@/components/track/TrackList'
import AlbumList from '@/components/album/AlbumList'
import ArtistList from '@/components/artist/ArtistList'

import { searchData } from '@/services/api.js'

export default {
  name: 'SearchResults',
  components: {
    TrackList,
    AlbumList,
    ArtistList
  },
  data () {
    return {
      tracks: [],
      albums: [],
      artists: [],
      tracksTotal: 0,
      albumsTotal: 0,
      artistsTotal: 0,
      activeTab: 0,
      tabs: ['Todos', 'Canciones', 'Álbumes', 'Artistas'],
      query: this.$route.params.q || '',
      messageArtist: '',
      messageAlbum: '',
      messageTrack: '',
      loading: true
    }
  },
  created () {
    this.updateTracks(this.query, 'track')
    this.updateAlbums(this.query, 'album')
    this.updateArtists(this.query, 'artist')
  },
  watch: {
    '$route.params.q': function (q) {
      this.query = q
    }
  },
  methods: {
    changeTab (tab) {
      this.activeTab = tab
    },
    async updateTracks (q, type) {
      const res = await searchData(q, type)
      this.tracks = res.data
      this.tracksTotal = this.tracks.length

      if (Object.keys(this.tracks).length === 0) this.messageTrack = 'No se ha encontrado ninguna canción que coincida con la búsqueda.'
      this.loading = false
    },
    async updateAlbums (q, type) {
      const res = await searchData(q, type)
      this.albums = res.data
      this.albumsTotal = this.albums.length

      if (Object.keys(this.albums).length === 0) this.messageAlbum = 'No se ha encontrado ningún álbum que coincida con la búsqueda.'
      this.loading = false
    },
    async updateArtists (q, type) {
      const res = await searchData(q, type)
      this.artists = res.data
      this.artistsTotal = this.artists.length

      if (Object.keys(this.artists).length === 0) this.messageArtist = 'No se ha encontrado ningún artista que coincida con la búsqueda.'
      this.loading = false
    }
  },
  metaInfo () {
    return {
      title: this.query,
      meta: [
        {
          name: 'description',
          content: 'Tú pones la pasión. Nosotros ponemos la música. Uocify es tu aliado para conocer música.'
        }
      ]
    }
  }
}
</script>
