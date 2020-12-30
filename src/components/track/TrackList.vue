<template>
  <div class="track-pane">
    <h2>{{ tracksTotal }} canciones</h2>

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
        <Track v-for="track in tracks" :key="track.id" :title="track.title" :duration="track.duration" :image="track.album.cover_small" :album="track.album.title" :artist="track.artist.name" />
      </tbody>
    </table>
  </div>
</template>

<script>
import Track from '@/components/track/Track'

export default {
  name: 'TrackList',
  components: {
    Track
  },
  props: {
    tracks: Array
  },
  data () {
    return {
      tracksTotal: this.tracks.length
    }
  }
}
</script>
