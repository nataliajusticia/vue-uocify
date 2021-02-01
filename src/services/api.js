// Deezer api url
const API_URL = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com'

// Fetch playlists data
//
export const getPlaylists = async () => {
  const res = await fetch(`${API_URL}/chart/0/playlists`)
  return await res.json()
}

export const getPlaylistDetails = async (id) => {
  const res = await fetch(`${API_URL}/playlist/${id}`)
  return await res.json()
}

// Search data
//
export const searchData = async (q, type) => {
  const res = await fetch(`${API_URL}/search/${type}?q=${q}`)
  return await res.json()
}

// Fetch artist data
//
export const getArtistDetails = async (id) => {
  const res = await fetch(`${API_URL}/artist/${id}`)
  return await res.json()
}

export const getArtistTracks = async (id) => {
  const res = await fetch(`${API_URL}/artist/${id}/top?limit=10`)
  return await res.json()
}
