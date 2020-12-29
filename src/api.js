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
