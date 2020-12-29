<template>
  <div>
    <div class="row row-cols-lg-5 row-cols-md-2 row-cols-1">
      <Playlist v-for="playlist in playlists" :key="playlist.id" :id="playlist.id" :title="playlist.title" :image="playlist.picture_xl" :nb_tracks="playlist.nb_tracks" />
    </div>
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
