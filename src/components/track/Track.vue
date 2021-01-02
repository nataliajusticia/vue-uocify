<template>
  <tr class="song">
    <th scope="row"><img class="song__image" :src="track.album.cover_small" :alt="track.title" width="35px" height="35px" loading="lazy"></th>
    <td class="song__title">{{ track.title }}</td>
    <td class="song__author">{{ track.artist.name }}</td>
    <td class="song__album">{{ track.album.title }}</td>
    <td class="song__duration">{{ track.duration | formatTime }}</td>
  </tr>
</template>

<script>
export default {
  name: 'Track',
  props: {
    track: Object
  }
}
</script>
