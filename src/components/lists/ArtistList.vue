<template>
  <div class="tab-pane" id="artistas">
    <h2>72 artistas</h2>

    <div class="row">
      <div class="col-lg-2 col-md-4 artist">
        <img class="artist__image" v-bind:src="picture_xl" v-bind:alt="name" loading="lazy">
        <p class="artist__title">{{ name }}</p>
        <p class="artist__description">{{ nb_fan }} fans</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtistList',
  props: {
    artists: Array,
    name: String,
    picture_xl: String,
    nb_fan: Number
  }
}
</script>

<style lang="scss">

</style>
