<template>
  <section>
    <h1>{{ playlist.title }}</h1>

    <div class="main-section">
      <img class="album__image" :src="playlist.picture_xl" :alt="playlist.title" loading="lazy">
      <p>{{ playlist.description }}</p>

      <table class="table">
        <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col" class="table__title">Canción</th>
          <th scope="col" class="table__mobile">Artista</th>
          <th scope="col" class="table__mobile">Álbum</th>
          <th scope="col" class="table__mobile">D.</th>
        </tr>
        </thead>

        <tbody>
          <Track v-for="track in playlist.tracks.data" :key="track.id" :title="track.title" :duration="track.duration" :image="track.album.cover_xl" :album="track.album.title" :artist="track.artist.name" />
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import Track from '@/components/track/Track'
import { getPlaylistDetails } from '@/api.js'

export default {
  name: 'PlaylistDetail',
  components: {
    Track
  },
  props: ['playlistId'],
  data () {
    return {
      playlist: []
    }
  },
  created () {
    this.loadPlaylistDetail(this.playlistId)
  },
  methods: {
    async loadPlaylistDetail (id) {
      const response = await getPlaylistDetails(id)
      this.playlist = response
    }
  }
}
</script>
