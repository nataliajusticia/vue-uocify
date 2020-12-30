<template>
  <section>
    <div class="main-section section-playlist">
      <div class="container playlist-detail">
        <div class="row row-cols-1 row-cols-md-2">
          <img class="playlist-detail__image" :src="playlist.picture_big" :alt="playlist.title" loading="lazy">

          <div class="playlist-detail__data">
            <h1>{{ playlist.title }}</h1>
            <p>{{ playlist.description }}</p>
          </div>
        </div>
      </div>

      <TrackList :tracks="tracks" />
    </div>
  </section>
</template>

<script>
import TrackList from '@/components/track/TrackList'
import { getPlaylistDetails } from '@/api.js'

export default {
  name: 'PlaylistDetail',
  components: {
    TrackList
  },
  data () {
    return {
      playlist: [],
      tracks: [],
      playlistId: this.$route.params.pId || ''
    }
  },
  created () {
    this.loadPlaylistDetail(this.playlistId)
  },
  methods: {
    async loadPlaylistDetail (id) {
      const response = await getPlaylistDetails(id)
      this.playlist = response
      this.tracks = response.tracks.data
    }
  }
}
</script>
