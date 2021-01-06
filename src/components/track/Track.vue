<template>
  <tr class="song">
    <th scope="row">
      <img class="song__image" :srcset="`${track.album.cover_small}, ${track.album.cover_big} 1.5x`" :src="track.album.cover_small" :alt="track.title" width="35" height="35" loading="lazy">
    </th>
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
