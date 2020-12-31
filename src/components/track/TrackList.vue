<template>
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
      <Track v-for="track in tracks" :key="track.id" :track="track" />
    </tbody>
  </table>
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
  }
}
</script>
