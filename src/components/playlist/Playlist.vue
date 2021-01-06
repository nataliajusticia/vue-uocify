<template>
  <div class="col playlist">
    <router-link :to="{ name: 'Playlist', params: { pId: playlist.id }}">
      <img class="playlist__image" :srcset="`${playlist.picture_big}, ${playlist.picture_xl} 1.5x`" :src="playlist.picture_big" :alt="playlist.title" loading="lazy">
      <p class="playlist__title">{{ playlist.title }}</p>
      <p class="playlist__description">{{ playlist.nb_tracks | formatNumber }} canciones</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Playlist',
  props: {
    playlist: Object
  }
}
</script>
