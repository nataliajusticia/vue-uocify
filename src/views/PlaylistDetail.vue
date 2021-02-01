<template>
  <section class="main-section">
    <div class="container playlist-detail">
      <div id="spinner" v-if="loading"></div>

      <div class="row row-cols-1 row-cols-md-2" v-if="Object.keys(playlist).length">
        <img class="playlist-detail__image" :srcset="`${playlist.picture_big}, ${playlist.picture_xl} 1.5x`" :src="playlist.picture_big" :alt="playlist.title" loading="lazy">

        <div class="playlist-detail__data">
          <h1>{{ playlist.title }}</h1>
          <p>{{ playlist.description }}</p>
        </div>
      </div>
    </div>

    <TrackList :tracks="tracks" v-if="tracks.length" />
  </section>
</template>

<script>
import TrackList from '@/components/track/TrackList'
import { getPlaylistDetails } from '@/services/api.js'

export default {
  name: 'PlaylistDetail',
  components: {
    TrackList
  },
  data () {
    return {
      playlist: [],
      tracks: [],
      playlistId: this.$route.params.pId || '',
      loading: true
    }
  },
  created () {
    this.loadPlaylistDetail(this.playlistId)
  },
  methods: {
    async loadPlaylistDetail (id) {
      const res = await getPlaylistDetails(id)
      this.playlist = res
      this.tracks = res.tracks.data
      this.loading = false
    }
  },
  metaInfo () {
    return {
      title: this.playlist.title,
      meta: [
        {
          name: 'description',
          content: this.playlist.description
        }
      ]
    }
  }
}
</script>
