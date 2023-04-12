import React from 'react'
import "./Offers.scss"
const Offers = () => {
  return (
    <div className='offers'>
      <div className="container">
      <h6>Offers</h6>
      <p>Promotions, deals, and special offers for you</p>

        <div className="row">
          <div className="col-6">
            <div className="card card-1">
              <img src="./offers/left.jpeg" className='card-img'/>
              <div className="card-img-overlay">
                <h6>Escape for a while</h6>
                <p>Enjoy the freedom of a monthly stay on Booking.com</p>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="card card-2">
              <img src="./offers/right.jpeg" className='card-img'/>
              <div className="card-img-overlay">
                <h6>The great getaway, your way</h6>
                <p>Save at least 15% on stays worldwide, from relaxing retreats to off-the-grid adventures</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offers