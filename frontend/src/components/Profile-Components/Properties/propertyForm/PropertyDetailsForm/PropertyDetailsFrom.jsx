import React from 'react'

import "./PropertyDetailsForm.scss"
import PropertyFormNav from '../PropertyFormNav/PropertyFormNav'
import { Link } from 'react-router-dom'

const PropertyDetailsFrom = () => {
  return (
    <div className='PropertyDetailsFrom'>
      <PropertyFormNav parentComponent="/propertyForm/propertyDetails"/>
      <div className="row">
        <div className="col-7">
          <form>
            <div className="form-group">
              <label>Full name of the accomodation</label>
              <input 
                type="text" 
                className='form-control'
              />
            </div>
            <div className="form-group">
              <label>Address (street name and house name)</label>
              <input 
                type="text" 
                className='form-control'
              />
            </div>
            <div className="form-group">
              <label>Unit Number</label>
              <input 
                type="text" 
                className='form-control'
              />
            </div>
            <div className="form-group">
              <label>Zip code</label>
              <input 
                type="text" 
                className='form-control'
              />
            </div>
            <div className="form-group">
              <label>Town</label>
              <input 
                type="text" 
                className='form-control'
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input 
                type="text" 
                className='form-control'
              />
            </div>
            <div className="form-group">
              <label>Country</label>
              <input 
                type="text" 
                className='form-control'
              />
            </div>
            <div className="btn-div">
              <Link className='btn btn-info' to="/propertyForm/ownerDetails">Next</Link>
              <Link className='btn btn-secondary' to="/properties">Cancel</Link>
            </div>
          </form>
        </div>
        <div className="col-5">
          {/* tips */}
        </div>
      </div>
    </div>
  )
}

export default PropertyDetailsFrom