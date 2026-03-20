import { Link, useLocation } from 'react-router-dom'

export default function GoHomeLink() {
  const location = useLocation()
  if (location.pathname === '/') return null

  return (
    <div className="container mt-8">
      <Link to="/" className="inline-block text-gray-600 home-btn">
        Go Home
      </Link>
    </div>
  )
}
