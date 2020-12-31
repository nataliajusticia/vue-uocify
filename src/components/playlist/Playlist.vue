<template>
  <div class="col album playlist">
    <router-link :to="{ name: 'Playlist', params: { pId: playlist.id }}">
      <img class="album__image" :src="playlist.picture_big" :alt="playlist.title" loading="lazy">
      <p class="album__title">{{ playlist.title }}</p>
      <p class="album__description">{{ playlist.nb_tracks | formatNumber }} canciones</p>
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
