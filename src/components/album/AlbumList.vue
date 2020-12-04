<template>
  <div class="album-pane">
    <h2>{{ albumsTotal }} álbumes</h2>

    <div class="row">
      <Album v-for="album in albums" :key="album.id" :title="album.title" :image="album.cover_xl" :artist="album.artist.name" />
    </div>
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
  },
  data () {
    return {
      albumsTotal: this.albums.length
    }
  }
}
</script>
