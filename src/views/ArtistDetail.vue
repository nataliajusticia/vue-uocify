<template>
  <section class="main-section">
    <div id="spinner" v-if="loading"></div>

    <div class="container artist-detail" v-if="Object.keys(artist).length">
      <div class="row row-cols-1 row-cols-md-2">
        <img class="playlist-detail__image" :srcset="`${artist.picture_big}, ${artist.picture_xl} 1.5x`" :src="artist.picture_big" :alt="artist.name" loading="lazy">

        <div class="playlist-detail__data">
          <h1>{{ artist.name }}</h1>
          <p>Fans: {{ artist.nb_fan | formatNumber }}</p>
          <p>Álbumes: {{ artist.nb_album | formatNumber }}</p>
        </div>
      </div>
    </div>

    <div v-if="tracks.length">
      <h2 class="sub-title">Canciones más conocidas</h2>
      <TrackList :tracks="tracks" />
    </div>
  </section>
</template>

<script>
import TrackList from '@/components/track/TrackList'
import { getArtistDetails, getArtistTracks } from '@/services/api.js'

export default {
  name: 'ArtistDetail',
  components: {
    TrackList
  },
  data () {
    return {
      artist: [],
      tracks: [],
      artistId: this.$route.params.aId || '',
      loading: true
    }
  },
  created () {
    this.loadArtistDetail(this.artistId)
  },
  methods: {
    async loadArtistDetail (id) {
      const resData = await getArtistDetails(id)
      const resTracks = await getArtistTracks(id)
      this.artist = resData
      this.tracks = resTracks.data
      this.loading = false
    }
  },
  metaInfo () {
    return {
      title: this.artist.name,
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
