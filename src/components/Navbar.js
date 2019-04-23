import React from 'react'
import { Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar is-light">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">Home</Link>

          <a role="button" className="navbar-burger">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>

        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <Link to="/albums" className="navbar-item">Albums</Link>
          </div>

          <div className="navbar-end">
          </div>
        </div>
      </div>
    </nav>
  )
}


export default Navbar
