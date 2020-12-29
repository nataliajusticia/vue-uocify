<template>
  <div class="col album">
    <img class="album__image" :src="image" :alt="title" loading="lazy">
    <p class="album__title">{{ title }}</p>
    <p class="album__description">{{ nb_tracks }} canciones</p>
  </div>
</template>

<script>
export default {
  name: 'Playlist',
  props: {
    title: String,
    image: String,
    nb_tracks: String
  }
}
</script>
