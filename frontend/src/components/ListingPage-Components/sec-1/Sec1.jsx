import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import "./Sec1.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Sec1 = () => {

  useEffect(()=>{
    changeText()
  },[])
 
  const changeText = () => {
    var texts = [
      "apartment",
      "hotels",
      "anything"

    ]
    var i=0;
    setInterval(function(){
      $(".h1").fadeOut(function(){
        $(this).html(texts[( i = (i + 1) % texts.length)]).fadeIn()
      })
    },12000)
  }


  return (
    <div className='sec1'>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="text">
              <h1>List Your</h1>
              <h1 className='h1'></h1>
              <h1>on Booking.com</h1>
            </div>
            <div className="text-btm">
              <p>Registration is free and can take as little as 15 minutes to complete – get started today</p>
            </div>
          </div>
          <div className="col-6 right">
            <div className="box">
              <h6>Create new listing</h6>
              <div className="item">
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> 
                <p>More than 6.4 million vacation rentals already listed</p>
              </div>
              <div className="item">
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                <p>Over 1 billion guests arrivals</p>
              </div>
              <div className="item">
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                <p>More than 40% of the vacation rentals are listings get first booking within a week</p>
              </div>
              <hr />
              <p>Create a partner account and get started</p>
              <p className='agree'>By creating you are agreed to let Booking.com email you regarding your properties</p>
              <Link className='btn btn-info' to="/profile">Start Listing</Link>
              <div className="btm">
                <h6>Already started Registration</h6>
                <Link>Continue your registration</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sec1