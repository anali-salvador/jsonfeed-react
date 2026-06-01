import usePosts from '../hooks/usePosts'

const Entities = () => {
  const { posts, loading, error } = usePosts()

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">📜 Entities</h1>
        <p className="text-gray-500 mb-8">
          Listado completo de publicaciones obtenidas desde JSONPlaceholder.
        </p>

        {loading && (
          <div className="text-center py-20 text-gray-500 text-lg font-medium">
            Cargando entidades...
          </div>
        )}

        {error && (
          <div className="text-center py-20 text-red-500 text-lg font-medium">
            Error: {error}
          </div>
        )}

        <div className="overflow-x-auto rounded-xl shadow">
          <table className="w-full text-sm bg-white">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">#ID</th>
                <th className="px-4 py-3 text-left">User ID</th>
                <th className="px-4 py-3 text-left">Título</th>
                <th className="px-4 py-3 text-left">Cuerpo</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr
                  key={post.id}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="px-4 py-3 font-bold text-gray-700">{post.id}</td>
                  <td className="px-4 py-3 text-gray-500">{post.userId}</td>
                  <td className="px-4 py-3 font-medium text-gray-700 capitalize">{post.title}</td>
                  <td className="px-4 py-3 text-gray-500">{post.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Entities