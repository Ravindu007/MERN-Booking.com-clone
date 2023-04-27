import React from 'react'
import { Link } from 'react-router-dom'
import PropertyFormNav from '../PropertyFormNav/PropertyFormNav'

import "./ManagerDetailsForm.scss"

const ManagerDetailsFrom = () => {
  return (
    <div className='managerDetailsFrom'>
      <PropertyFormNav parentComponent="/propertyForm/managerDetails"/>
      <div className="row">

        <div className="col-7">
          <form>
            <div className="form-group">
              <label>Is the accomodation managed by the owner, a property manager or a management company</label>
              <input
                type="text" 
                className="form-control" 
              />
            </div>
            <div className="form-group">
              <label>Government Representation</label>
              <p>Is a government agency, government official, or close family members of government official involved in the ownership, control or management of the accomodation</p>
              
              <div className="radio-div">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label">
                      Yes
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label">
                      No
                    </label>
                  </div>
              </div>

            </div>
            
            <div className="btn-div">
              <Link className='btn btn-info' to="/propertyForm/confirmDetails">Next</Link>
              <Link className='btn btn-secondary' to="/propertyForm/ownerDetails">Back</Link>
            </div>
           
          </form>
        </div>
        <div className="col-5"></div>
      </div>
    </div>
  )
}

export default ManagerDetailsFrom