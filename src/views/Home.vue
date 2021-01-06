<template>
  <section v-if="playlists.length">
    <h1>Chart <span class="search-excerp">Playlists</span></h1>

    <div class="main-section playlist-section">
      <Playlists :playlists="playlists" />
    </div>
  </section>
</template>

<script>
import Playlists from '@/components/playlist/PlaylistList'
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
  created () {
    this.loadPlaylists()
  },
  methods: {
    async loadPlaylists () {
      const response = await getPlaylists()
      this.playlists = response.data
    }
  },
  metaInfo: {
    title: 'Home',
    meta: [
      {
        name: 'description',
        content: 'Tú pones la pasión. Nosotros ponemos la música. Uocify es tu aliado para conocer música.'
      }
    ]
  }
}
</script>
