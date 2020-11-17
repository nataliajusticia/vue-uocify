<template>
  <div class="tab-pane" id="canciones">
    <h2>{{ numberOfTracks() }} canciones</h2>

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
        <Track v-for="track in tracks" v-bind:key="track.id" v-bind:title="track.title" v-bind:duration="track.duration" v-bind:cover_xl="track.album.cover_xl" v-bind:album="track.album.title" v-bind:artist="track.artist.name" />
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
  methods: {
    numberOfTracks () {
      return this.tracks.length
    }
  }
}
</script>
