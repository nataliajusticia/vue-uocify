// Deezer api url
const url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com'

// Fetch chart playlists data
//
export const getPlaylists = async () => {
  document.getElementById('spinner').classList.add('is-active')
  const res = await fetch(`${url}/chart/0/playlists`)
  if (res) document.getElementById('spinner').classList.remove('is-active')
  return await res.json()
}

// Fetch playlists data
//
export const getPlaylistDetails = async (id) => {
  document.getElementById('spinner').classList.add('is-active')
  const res = await fetch(`${url}/playlist/${id}`)
  if (res) document.getElementById('spinner').classList.remove('is-active')
  return await res.json()
}

// Search data
//
const searchData = async (q, type) => {
  document.getElementById('spinner').classList.add('is-active')
  const res = await fetch(`${url}/search/${type}?q=${q}`)
  if (res) document.getElementById('spinner').classList.remove('is-active')
  return await res.json()
}

// Fetch tracks
export const getTracks = async (q, type = 'track') => {
  return searchData(q, type)
}

// Fetch albums
export const getAlbums = async (q, type = 'album') => {
  return searchData(q, type)
}

// Fetch artists
export const getArtists = async (q, type = 'artist') => {
  return searchData(q, type)
}

// Fetch artist data
//
export const getArtistDetails = async (id) => {
  document.getElementById('spinner').classList.add('is-active')
  const res = await fetch(`${url}/artist/${id}`)
  if (res) document.getElementById('spinner').classList.remove('is-active')
  return await res.json()
}

export const getArtistTracks = async (id) => {
  document.getElementById('spinner').classList.add('is-active')
  const res = await fetch(`${url}/artist/${id}/top?limit=10`)
  if (res) document.getElementById('spinner').classList.remove('is-active')
  return await res.json()
}
