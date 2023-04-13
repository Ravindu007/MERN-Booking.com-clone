import React from 'react'

import "./Discover.scss"

const Discover = () => {
  return (
    <div className="container">
      <div className='discover'>
        <div className="row">
          <div className="col-12 box">
            <div className="center-part">
              <h6>Find Your Hotels</h6>
              <h6>For your next trip</h6>
              <button className='btn'>Discover Homes</button>
            </div>
            <img src="./back.png" className='mx-auto d-block img-fluid' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discover