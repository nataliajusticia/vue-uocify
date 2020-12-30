<template>
  <div class="col album playlist">
    <router-link :to="{ name: 'Playlist', params: { playlistId: id }}">
      <img class="album__image" :src="image" :alt="title" loading="lazy">
      <p class="album__title">{{ title }}</p>
      <p class="album__description">{{ nb_tracks }} canciones</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Playlist',
  props: {
    id: Number,
    title: String,
    image: String,
    nb_tracks: Number
  }
}
</script>
