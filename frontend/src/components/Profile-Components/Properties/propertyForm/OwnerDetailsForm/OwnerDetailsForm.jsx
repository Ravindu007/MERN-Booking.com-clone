import React from 'react'
import PropertyFormNav from '../PropertyFormNav/PropertyFormNav'

import "./OwnerDetailsForm.scss"
import { Link } from 'react-router-dom'

const OwnerDetailsForm = () => {
  return (
    <div className='OwnerDetailsForm'>
      <PropertyFormNav parentComponent="/propertyForm/ownerDetails"/>
      <div className="row">
        <div className="col-7">
          <form>
            <div className="form-group">
              <label>Is this accomodation owned by individual or business entity?</label>
              <select 
                name="" 
                id=""
                className='form-select'
              >
                <option value="individual">Owned by an Individual</option>
                <option value="business">Owned by a Business entity</option>
              </select>
            </div>
            <div className="form-group">
              <label>Your full name</label>
              <input 
                type="text"
                className='form-control' 
              />
            </div>
            <div className="form-group">
              <label>If any owner go by any other name</label>
              <input 
                type="text"
                className='form-control' 
              />
            </div>
            <div className="btn-div">
              <Link className='btn btn-info' to="/propertyForm/managerDetails">Next</Link>
              <Link className='btn btn-secondary' to="/propertyForm/propertyDetails">Back</Link>
            </div>
          </form>
        </div>
        <div className="col-5"></div>
      </div>
    </div>
  )
}

export default OwnerDetailsForm