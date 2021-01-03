<template>
  <section>
    <h1>Resultados de <span class="search-excerp">{{ query }}</span></h1>

    <div class="main-section">
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

import { getTracks, getAlbums, getArtists } from '@/api'

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
      messageTrack: ''
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
    changeTab (tab) {
      this.activeTab = tab
    },
    // Search
    search (q) {
      this.updateTracks(q)
      this.updateAlbums(q)
      this.updateArtists(q)
    },
    async updateTracks (q) {
      const res = await getTracks(q)
      this.tracks = res.data
      this.tracksTotal = this.tracks.length

      if (Object.keys(this.tracks).length === 0) {
        this.messageTrack = 'No se ha encontrado ninguna canción que coincida con la búsqueda.'
      }
    },
    async updateAlbums (q) {
      const res = await getAlbums(q)
      this.albums = res.data
      this.albumsTotal = this.albums.length

      if (Object.keys(this.albums).length === 0) {
        this.messageAlbum = 'No se ha encontrado ningún álbum que coincida con la búsqueda.'
      }
    },
    async updateArtists (q) {
      const res = await getArtists(q)
      this.artists = res.data
      this.artistsTotal = this.artists.length

      if (Object.keys(this.artists).length === 0) {
        this.messageArtist = 'No se ha encontrado ningún artista que coincida con la búsqueda.'
      }
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
