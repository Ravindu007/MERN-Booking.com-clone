import { Link } from 'react-router-dom'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas, faCircleQuestion, faBed, faPlane, faTaxi, faTreeCity} from '@fortawesome/free-solid-svg-icons'

import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="row">

          <div className="col-12 upper-part">
            <nav className="navbar navbar-expand-lg">

              <Link className="navbar-brand" to="/">Booking.com</Link>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item txt">
                      <Link className="nav-link" href="/">LKR</Link>
                    </li>
                    <li className="nav-item">
                      <FontAwesomeIcon icon={faEarthAmericas} className='icon'/>
                    </li>
                    <li className="nav-item">
                      <FontAwesomeIcon icon={faCircleQuestion} className='icon'/>
                    </li>
                    <li className="nav-item text">
                      <Link className='nav-link'>List your property</Link>
                    </li>
                    <button className="nav-item">
                      <Link className='nav-link'>Register</Link>
                    </button>
                    <button className="nav-item">
                      <Link className='nav-link'>Sign in</Link>
                    </button>
                </ul>
              </div>
            </nav>
          </div>


          <div className="col-12 lower-part">
          <nav className="navbar navbar-expand-lg">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <Link className='nav-item'>
                  <FontAwesomeIcon icon={faBed} className='icon'/>
                  <span>Stays</span>
                </Link>
                <Link className='nav-item'>
                  <FontAwesomeIcon icon={faPlane} />
                  <span>Flights</span>
                </Link>
                <Link className='nav-item'>
                  <FontAwesomeIcon icon={faTaxi} />
                  <span>Cars</span>
                </Link> 
                <Link className='nav-item'>
                  <FontAwesomeIcon icon={faTreeCity} />
                  <span>Attracts</span>
                </Link>   
              </ul>
            </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar