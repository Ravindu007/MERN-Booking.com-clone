import React from 'react'
import './LandingPage.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBed} from '@fortawesome/free-solid-svg-icons'

const LandingPage = () => {
  return (
    <div className='landingPage'>
        <div className="row">
          <div className="sec-1 col-12">
            <div className="container">
              <h1>Find Your Next Stay</h1>
              <p>Search deals on homes, hotels and much more...</p>
            </div>

            {/* search bar */}
            <form className='search-bar'>
              <div className="row">
                <div className="col-4 input">
                  <input 
                    type="text" 
                    placeholder='Where are you going'
                    className='form-control'
                  />
                </div>
                <div className="col-3 input">
                <input 
                    type="text" 
                    placeholder='Check in date'
                    className='form-control'
                  />
                </div>
                <div className="col-3 input">
                <input 
                    type="text" 
                    placeholder='Number of Guests'
                    className='form-control'
                  />
                </div>
                <div className="col-2 input">
                  <button className='btn btn-primary'>Search</button>
                </div>
              </div>
            </form>
 
          </div>
          <div className="sec-2 col-12"></div>
        </div>
    </div>
  )
}

export default LandingPage