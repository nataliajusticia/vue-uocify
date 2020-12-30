<template>
  <div class="row">
    <Artist v-for="artist in artists" :key="artist.id" :name="artist.name" :image="artist.picture_big" :nb_fan="artist.nb_fan" />
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
