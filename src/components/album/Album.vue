<template>
  <div class="col-lg-2 col-md-4 album">
    <img class="album__image" :src="image" :alt="title" loading="lazy">
    <p class="album__title">{{ title }}</p>
    <p class="album__description">{{ artist }}</p>
  </div>
</template>

<script>
export default {
  name: 'Album',
  props: {
    title: String,
    image: String,
    artist: String
  }
}
</script>
