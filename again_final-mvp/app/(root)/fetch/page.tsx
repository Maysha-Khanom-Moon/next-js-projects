const Home = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums')
  
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  const albums = await response.json()

  return (
    <div className="flex flex-row flex-wrap gap-2">
        {albums.map((album: { id: number; title: string }) => (
            <div key={album.id}
            className="bg-white shadow-md rounded-lg p-4 transition-all  hover:scale-105 hover:shadow-xl hover:bg-slate-200">
                <h2>{album.title}</h2>
            </div>
        ))}
    </div>
  )
}

export default Home