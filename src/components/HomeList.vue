<template>
  <div class="home-tab">

    <h3><a class="direct-link" @click="changeTab(1)">Canciones <fa-icon icon="chevron-right" /></a></h3>
    <table class="table">
      <tbody>
        <Track v-for="track in tracks.slice(0, 6)" :key="track.id" :title="track.title" :duration="track.duration" :image="track.album.cover_xl" :album="track.album.title" :artist="track.artist.name" />
      </tbody>
    </table>

    <h3><a class="direct-link" @click="changeTab(2)">Álbumes <fa-icon icon="chevron-right" /></a></h3>
    <div class="row">
      <Album v-for="album in albums.slice(0, 6)" :key="album.id" :title="album.title" :image="album.cover_xl" :artist="album.artist.name" />
    </div>

    <h3><a class="direct-link" @click="changeTab(3)">Artistas <fa-icon icon="chevron-right" /></a></h3>
    <div class="row">
      <Artist v-for="artist in artists.slice(0, 6)" :key="artist.id" :name="artist.name" :image="artist.picture_xl" :nb_fan="artist.nb_fan" />
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
  },
  data () {
    return {
      activeTab: 0
    }
  },
  methods: {
    changeTab (tab) {
      this.activeTab = tab
      this.$emit('updateTab', tab)
    }
  }
}
</script>
