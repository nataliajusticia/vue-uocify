const url = 'https://cors-anywhere.herokuapp.com/'

// Fetch playlists data
export const getPlaylists = async () => {
  try {
    const response = await fetch('https://api.deezer.com/chart/0/playlists')
    return await response.json()
  } catch (err) {
    console.error(err)
  }
}

// Fetch playlist data
export const getPlaylistDetails = async (id) => {
  try {
    const response = await fetch(`${url}https://api.deezer.com/playlist/${id}`)
    return await response.json()
  } catch (err) {
    console.error(err)
  }
}

// Fetch tracks
export const getTracks = async (q) => {
  try {
    const response = await fetch(`${url}https://api.deezer.com/search/track?q=${q}`)
    return await response.json()
  } catch (err) {
    console.error(err)
  }
}

// Fetch albums
export const getAlbums = async (q) => {
  try {
    const response = await fetch(`${url}https://api.deezer.com/search/album?q=${q}`)
    return await response.json()
  } catch (err) {
    console.error(err)
  }
}

// Fetch artists
export const getArtists = async (q) => {
  try {
    const response = await fetch(`${url}https://api.deezer.com/search/artist?q=${q}`)
    return await response.json()
  } catch (err) {
    console.error(err)
  }
}
