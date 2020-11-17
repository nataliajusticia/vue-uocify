<template>
  <tr class="song">
    <th scope="row"><img class="song__image" v-bind:src="cover_xl" v-bind:alt="title" loading="lazy"></th>
    <td class="song__title">{{ title }}</td>
    <td class="song__author">{{ artist }}</td>
    <td class="song__album">{{ album }}</td>
    <td class="song__duration">{{ millisToMinutesAndSeconds(duration) }}</td>
  </tr>
</template>

<script>
export default {
  name: 'Track',
  props: {
    title: String,
    artist: String,
    cover_xl: String,
    album: String,
    duration: Number
  },
  methods: {
    millisToMinutesAndSeconds (time) {
      const minutes = `${Math.floor((time % 3600) / 60)}`.slice(-2)
      const seconds = `0${Math.floor(time % 60)}`.slice(-2)
      return `${minutes}:${seconds}`
    }
  }
}
</script>
