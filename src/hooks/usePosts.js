import { useState, useEffect } from 'react'
import axios from 'axios'

const usePosts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setPosts(res.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { posts, loading, error }
}

export default usePosts