import React, { useContext, useEffect } from 'react'
import PropertyFormNav from '../PropertyFormNav/PropertyFormNav'
import { Link } from 'react-router-dom'

import "./ConfirmForm.scss"
import { PropertyFormContext } from '../../../../../context/PropertyFormContext'

const ConfirmForm = () => {


  const {formData} = useContext(PropertyFormContext)

  return (
    <div className='confirmForm'>
      <PropertyFormNav parentComponent="/propertyForm/confirmDetails"/>
      <div className="row">
        <div className="col-7">
          <h6>Review details</h6>

          <h6>Property Details</h6>
          <p><span>Property Name: </span>{formData.propertyName}</p>
          <p><span>Address: </span>{formData.address}</p>
          <p><span>Unit Number: </span>{formData.unitNumber}</p>
          <p><span>Zip code: </span>{formData.zipCode}</p>
          <p><span>Town: </span>{formData.town}</p>
          <p><span>City: </span>{formData.city}</p>
          <p><span>Country: </span>{formData.country}</p>

          <h6>Owner Details</h6>
          <p><span>Business: </span>{formData.business}</p>
          <p><span>Owner Name: </span>{formData.ownerName}</p>
          <p><span>Owner nick name: </span>{formData.ownerNickName}</p>


          <h6>Manager Details</h6>
          <p><span>Managed by: </span>{formData.managedBy}</p>
          <p><span>Government Representation: </span>{formData.governmentRepresentation}</p>

          
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