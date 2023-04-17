import React from 'react'
import { Link } from 'react-router-dom'

import "./Des-Navbar.scss"

const DesNavbar = () => {
  return (
    <div className='Des-Navbar'>
    <nav className="navbar navbar-expand-lg navbar-light">
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className='nav-item nav-link active'>Regions</Link>
          <Link className='nav-item nav-link'>Cities</Link>
          <Link className='nav-item nav-link'>Place of interests</Link>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default DesNavbar