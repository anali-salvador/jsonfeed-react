import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-lg">
      <span className="text-xl font-bold tracking-wide">⚛️ JSONFeed</span>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-gray-300 transition font-medium">
          Home
        </Link>
        <Link to="/entities" className="hover:text-gray-300 transition font-medium">
          Entities
        </Link>
      </div>
    </nav>
  )
}

export default Navbar