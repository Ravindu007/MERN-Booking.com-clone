import React from 'react'
import {Link} from "react-router-dom"

import "./subscription.scss"

const Subscription = () => {
  return (
    <div className='subscription'>
      <div className="row sub-input">
        <h4>Save time, save money!</h4>
        <p>Sign up and and we will send you the best deals</p>
        <div className="email-input">
          <input 
            type="text"
            className='form-control' 
          />
          <button className='btn btn-info'>Subscribe</button>
        </div>
      </div>
      <div className="row sub-btn">
        <button>List your Property</button>
      </div>
      <div className="row sub-navbar">
        <ul>
          <li><Link>Mobile Version</Link></li>
          <li><Link>Your Account</Link></li>
          <li><Link>Make changes to your account</Link></li>
          <li><Link>Customer service Help</Link></li>
          <li><Link>Become an Affiliate</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Subscription