import React, { useState } from 'react'
import './LandingPage.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

const LandingPage = () => {


  const [showCoronaSupport, setShowCoronaSupport] = useState(false);

  const handleShowSupport = () => {
    setShowCoronaSupport(!showCoronaSupport)
  }

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

          <div className="sec-2 col-12">

            <div className="container">
              <div className="row">
                <div className="col-11">
                
                <p>Coronavirus (COVID-19) support</p>
                  {showCoronaSupport && (
                      <p>Get the advice you need. Check the latest COVID-19 restrictions before you travel.</p>            
                  )}
                
                </div>
                <div className="col-1">
                  <button onClick={handleShowSupport}>
                    {showCoronaSupport ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LandingPage