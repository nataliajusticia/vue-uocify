<template>
  <div class="row">
    <Artist v-for="artist in artists" :key="artist.id" :artist="artist" />
  </div>
</template>

<script>
import Artist from '@/components/artist/Artist'

export default {
  name: 'ArtistList',
  components: {
    Artist
  },
  props: {
    artists: Array
  }
}
</script>
