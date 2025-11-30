import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const location = useLocation()

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">AfroPix</span>
          <span className="logo-subtitle">Symposium 2025</span>
        </Link>
        <div className="nav-links">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={location.pathname === '/about' ? 'active' : ''}
          >
            About
          </Link>
          <Link 
            to="/schedule" 
            className={location.pathname === '/schedule' ? 'active' : ''}
          >
            Schedule
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

