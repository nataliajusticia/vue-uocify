<template>
  <div class="artist col-lg-2 col-md-4 col-sm-6">
    <router-link :to="{ name: 'Artist', params: { aId: artist.id }}">
      <img class="artist__image" :srcset="`${artist.picture_big}, ${artist.picture_xl} 1.5x`" :src="artist.picture_big" :alt="artist.name" loading="lazy">
      <p class="artist__title">{{ artist.name }}</p>
      <p class="artist__description">{{ artist.nb_fan | formatNumber }} fans</p>
    </router-link>
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
