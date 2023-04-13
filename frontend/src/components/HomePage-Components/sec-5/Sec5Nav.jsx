import React from 'react'
import {Link} from "react-router-dom"

import "./Sec5Nav.scss"

const Sec5Nav = () => {
  return (
    <div className='sec5Nav'>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link className='nav-item nav-link active'>Beach</Link>
            <Link className='nav-item nav-link'>Outdoors</Link>
            <Link className='nav-item nav-link'>City</Link>
            <Link className='nav-item nav-link'>Romance</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Sec5Nav