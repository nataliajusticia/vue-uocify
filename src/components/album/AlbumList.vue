<template>
  <div class="row">
    <Album v-for="album in albums" :key="album.id" :title="album.title" :image="album.cover_big" :artist="album.artist.name" />
  </div>
</template>

<script>
import Album from '@/components/album/Album'

export default {
  name: 'AlbumList',
  components: {
    Album
  },
  props: {
    albums: Array
  }
}
</script>
