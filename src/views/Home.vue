<template>
  <section>
    <h1>Chart <span class="search-excerp">Playlists</span></h1>

    <div class="main-section">
      <Playlists :playlists="playlists" />
    </div>
  </section>
</template>

<script>
import Playlists from '@/components/playlist/Playlists'
import { getPlaylists } from '@/api.js'

export default {
  name: 'Home',
  components: {
    Playlists
  },
  data () {
    return {
      playlists: []
    }
  },
  methods: {
    loadPlaylists () {
      getPlaylists().then(response => {
        this.playlists = response.data
      })
    }
  },
  created () {
    this.loadPlaylists()
  }
}
</script>
