import React, { useState } from 'react'

import "./Footer.scss"

const Footer = () => {

  const [partners, setPartners] = useState([
    "./footer/p1.png",
    "./footer/p2.png",
    "./footer/p3.png",
    "./footer/p4.png",
    "./footer/p5.png",
  ])

  return (
    <div className='footer'>
      <div className="container">
        <div className="row">
          <div className="col-12 copyRight">
            <p>Copyright © 1996–2023 BookingClone.com™. All rights not reserved.</p>
          </div>
          <div className="col-12 about">
            <p>Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.</p>
          </div>
          <div className="col-12 partners">
            {partners && partners.map((imgLink)=>(
              <img src={imgLink} alt="" key={imgLink}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer