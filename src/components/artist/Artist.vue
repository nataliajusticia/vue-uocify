<template>
  <div class="col-lg-2 col-md-4 artist">
    <img class="artist__image" :src="artist.picture_big" :alt="artist.name" loading="lazy">
    <p class="artist__title">{{ artist.name }}</p>
    <p class="artist__description">{{ artist.nb_fan | formatNumber }} fans</p>
  </div>
</template>

<script>
export default {
  name: 'Artist',
  props: {
    artist: Object
  }
}
</script>
