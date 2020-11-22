<template>
  <div class="tab-pane">
    <h2>{{ albumsTotal }} álbumes</h2>

    <div class="row">
      <Album v-for="album in albums" v-bind:key="album.id" v-bind:title="album.title" v-bind:cover_xl="album.cover_xl" v-bind:artist="album.artist.name" />
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
