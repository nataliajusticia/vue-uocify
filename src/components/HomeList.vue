<template>
  <div class="tab-pane">

    <h3><a class="direct-link">Canciones <fa-icon icon="chevron-right" /></a></h3>
    <table class="table">
      <tbody>
      <Track v-for="track in tracks.slice(0, 6)" v-bind:key="track.id" v-bind:title="track.title" v-bind:duration="track.duration" v-bind:cover_xl="track.album.cover_xl" v-bind:album="track.album.title" v-bind:artist="track.artist.name" />
      </tbody>
    </table>

    <h3><a class="direct-link">Álbumes <fa-icon icon="chevron-right" /></a></h3>
    <div class="row">
      <Album v-for="album in albums.slice(0, 6)" v-bind:key="album.id" v-bind:title="album.title" v-bind:cover_xl="album.cover_xl" v-bind:artist="album.artist.name" />
    </div>

    <h3><a class="direct-link">Artistas <fa-icon icon="chevron-right" /></a></h3>
    <div class="row">
      <Artist v-for="artist in artists.slice(0, 6)" v-bind:key="artist.id" v-bind:name="artist.name" v-bind:picture_xl="artist.picture_xl" v-bind:nb_fan="artist.nb_fan" />
    </div>
  </div>
</template>

<script>
import Track from '@/components/track/Track'
import Album from '@/components/album/Album'
import Artist from '@/components/artist/Artist'

export default {
  name: 'HomeList',
  components: {
    Track,
    Album,
    Artist
  },
  props: {
    tracks: Array,
    albums: Array,
    artists: Array
  }
}
</script>
