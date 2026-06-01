import usePosts from '../hooks/usePosts'
import PostCard from '../components/PostCard'

const Home = () => {
  const { posts, loading, error } = usePosts()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gray-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-3">⚛️ JSONFeed React</h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Aplicación SPA que consume la API pública de JSONPlaceholder
          y muestra publicaciones en tiempo real.
        </p>
      </div>

      {/* Listado */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">📋 Publicaciones recientes</h2>

        {loading && (
          <div className="text-center py-20 text-gray-500 text-lg font-medium">
            Cargando publicaciones...
          </div>
        )}

        {error && (
          <div className="text-center py-20 text-red-500 text-lg font-medium">
            Error: {error}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.slice(0, 9).map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home