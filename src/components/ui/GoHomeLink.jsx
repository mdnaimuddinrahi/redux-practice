import { Home } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function GoHomeLink() {
  const location = useLocation()
  if (location.pathname === '/') return null

  return (
    <div className="container mt-8">
      <Link to="/" className="inline-flex items-center text-gray-600 home-btn">
        <Home className="mr-2" /> Go Home
      </Link>
    </div>
  )
}
