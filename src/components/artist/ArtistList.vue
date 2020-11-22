<template>
  <div class="tab-pane">
    <h2>{{ artistsTotal }} artistas</h2>

    <div class="row">
      <Artist v-for="artist in artists" v-bind:key="artist.id" v-bind:name="artist.name" v-bind:picture_xl="artist.picture_xl" v-bind:nb_fan="artist.nb_fan" />
    </div>
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
  },
  data () {
    return {
      artistsTotal: this.artists.length
    }
  }
}
</script>
