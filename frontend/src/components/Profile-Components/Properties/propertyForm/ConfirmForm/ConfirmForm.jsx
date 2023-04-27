import React from 'react'
import PropertyFormNav from '../PropertyFormNav/PropertyFormNav'
import { Link } from 'react-router-dom'

import "./ConfirmForm.scss"

const ConfirmForm = () => {
  return (
    <div className='confirmForm'>
      <PropertyFormNav parentComponent="/propertyForm/confirmDetails"/>
      <div className="row">
        <div className="col-7">
          <h6>Review details</h6>
          <div className="btn-div">
            <Link className='btn btn-info'>Add</Link>
            <Link className='btn btn-secondary' to="/propertyForm/ownerDetails">Back</Link>
          </div>
        </div>
        <div className="col-5"></div>
      </div>
    </div>
  )
}

export default ConfirmForm