<template>
  <div class="album col-lg-2 col-md-4 col-sm-6">
    <img class="album__image" :srcset="`${album.cover_big}, ${album.cover_xl} 1.5x`" :src="album.cover_big" :alt="album.title" loading="lazy">
    <p class="album__title">{{ album.title }}</p>
    <p class="album__description">{{ album.artist.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'Album',
  props: {
    album: Object
  }
}
</script>
