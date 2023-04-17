import React, { useEffect } from 'react'
import "./Discount.scss"
import { use3DLogo } from '../../../hooks/use3DLogo'
import * as THREE from "three"


const Discount = () => {
  const {threeD} = use3DLogo()

  useEffect(()=>{
    let canvas = document.getElementById("globe")
    let texture = "./world.png"
    threeD(canvas,texture, 0xffffff, new THREE.SphereGeometry( 15, 32, 16 ))
  }) 

  return (
    <div className="container" data-aos="flip-up" data-aos-delay="200">
      <div className='discount'>
        <div className="row">
          <div className="col-3 threeD-art">
            <canvas id='globe'></canvas>
          </div>
          <div className="col-9 details">
            <h6>Get instant discounts</h6>
            <p>Just sign into your Booking.com account and look for the blue Genius logo to save</p>
            <button className='sign-in active'>Sign in</button>
            <button className='register'>Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discount