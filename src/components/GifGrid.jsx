const GifGrid = ({ category }) => {

  const getGifs = async() => {
    const api_key = 'zMYQShqVzaNHXyjz3vOQHul3zPbhrfGV'
    const url = 'https://api.giphy.com/v1/gifs/search?q=Dragon+Ball&limit=10&api_key=zMYQShqVzaNHXyjz3vOQHul3zPbhrfGV'

    const respuesta = await fetch(url)
    const { data } = await respuesta.json()

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    console.log(gifs)
  }

  getGifs()

  return (
    <h3>{category}</h3>
  )
}

export default GifGrid