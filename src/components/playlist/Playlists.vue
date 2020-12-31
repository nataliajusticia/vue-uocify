<template>
  <div class="row row-cols-lg-5 row-cols-md-2 row-cols-1">
    <Playlist v-for="playlist in playlists" :key="playlist.id" :playlist="playlist" />
  </div>
</template>

<script>
import Playlist from '@/components/playlist/Playlist'

export default {
  name: 'PlaylistList',
  components: {
    Playlist
  },
  props: {
    playlists: Array
  }
}
</script>
