const url = 'https://cors-anywhere.herokuapp.com/'

// Fetch playlists data
export const getPlaylists = async () => {
  try {
    const response = await fetch(`${url}https://api.deezer.com/chart/0/playlists`)
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
