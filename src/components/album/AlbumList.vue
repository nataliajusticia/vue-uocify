<template>
  <div class="row">
    <Album v-for="album in albums" :key="album.id" :album="album" />
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
