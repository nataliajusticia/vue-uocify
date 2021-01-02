const url = 'https://cors-anywhere.herokuapp.com/'

// Fetch playlists data
export const getPlaylists = async () => {
  document.getElementById('spinner').classList.add('is-active')
  const response = await fetch(`${url}https://api.deezer.com/chart/0/playlists`)
  document.getElementById('spinner').classList.remove('is-active')
  return await response.json()
}

// Fetch playlist data
export const getPlaylistDetails = async (id) => {
  document.getElementById('spinner').classList.add('is-active')
  const response = await fetch(`${url}https://api.deezer.com/playlist/${id}`)
  if (response) document.getElementById('spinner').classList.remove('is-active')
  return await response.json()
}

// Fetch tracks
export const getTracks = async (q) => {
  document.getElementById('spinner').classList.add('is-active')
  const response = await fetch(`${url}https://api.deezer.com/search/track?q=${q}`)
  if (response) document.getElementById('spinner').classList.remove('is-active')
  return await response.json()
}

// Fetch albums
export const getAlbums = async (q) => {
  document.getElementById('spinner').classList.add('is-active')
  const response = await fetch(`${url}https://api.deezer.com/search/album?q=${q}`)
  if (response) document.getElementById('spinner').classList.remove('is-active')
  return await response.json()
}

// Fetch artists
export const getArtists = async (q) => {
  document.getElementById('spinner').classList.add('is-active')
  const response = await fetch(`${url}https://api.deezer.com/search/artist?q=${q}`)
  if (response) document.getElementById('spinner').classList.remove('is-active')
  return await response.json()
}
