import React from 'react'
import {Link} from "react-router-dom"

import "./Navbar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faBook, faCoins, faHouse, faHouseChimneyWindow, faInbox, faPercent, faRocket } from '@fortawesome/free-solid-svg-icons'

const Navabar = () => {
  return (
    <nav className="profile-navbar navbar navbar-expand-lg">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          
          <div className="item">
            <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
            <Link className="navbar-brand" to="/">Home</Link>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faPercent}></FontAwesomeIcon>
            <Link className='nav-item nav-link'>Rates and availability</Link>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faHouseChimneyWindow}></FontAwesomeIcon>
            <Link className='nav-item nav-link active' to="/property">Properties</Link>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
            <Link className='nav-item nav-link'>Reservations</Link>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faRocket}></FontAwesomeIcon>
            <Link className='nav-item nav-link'>Oppertunities</Link>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faInbox}></FontAwesomeIcon>
            <Link className='nav-item nav-link'>Inbox</Link>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon>
            <Link className='nav-item nav-link'>Guest Reviews</Link>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>
            <Link className='nav-item nav-link'>Finance</Link>          
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navabar