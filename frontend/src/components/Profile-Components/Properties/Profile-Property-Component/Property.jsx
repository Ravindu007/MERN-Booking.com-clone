import React from 'react'
import { Link } from 'react-router-dom'
import Navabar from '../../Navbar/Navabar'

import "./Property.scss"

const Property = () => {
  
  return (
    <div className='property'>
    <Navabar/>
    <div className="container">
      <div className="row">
        <div className="col-8"></div>
        <div className="col-4">
          <Link className='btn btn-info' to="/propertyForm">Add a property</Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Property