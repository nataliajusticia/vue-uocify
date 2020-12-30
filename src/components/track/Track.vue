<template>
  <tr class="song">
    <th scope="row"><img class="song__image" :src="image" :alt="title" loading="lazy"></th>
    <td class="song__title">{{ title }}</td>
    <td class="song__author">{{ artist }}</td>
    <td class="song__album">{{ album }}</td>
    <td class="song__duration">{{ duration | formatTime }}</td>
  </tr>
</template>

<script>
export default {
  name: 'Track',
  props: {
    title: String,
    artist: String,
    image: String,
    album: String,
    duration: Number
  }
}
</script>
