import React, { useContext, useEffect } from 'react'
import PropertyFormNav from '../PropertyFormNav/PropertyFormNav'
import { Link, useNavigate } from 'react-router-dom'

import "./ConfirmForm.scss"
import { PropertyFormContext } from '../../../../../context/PropertyFormContext'

const ConfirmForm = () => {
  const navigate = useNavigate()

  const {formData} = useContext(PropertyFormContext)

  const handleSubmit = async(e) => {
    e. preventDefault()

    const formData1 = new FormData()
    formData1.append('propertyName', formData.propertyName)
    formData1.append('address', formData.address)
    formData1.append('unitNumber', formData.unitNumber)
    formData1.append('zipCode', formData.zipCode)
    formData1.append('town', formData.town)
    formData1.append('city', formData.city)
    formData1.append('country', formData.country)
    formData1.append('business', formData.business)
    formData1.append('ownerName', formData.ownerName)
    formData1.append('ownerNickName', formData.ownerNickName)
    formData1.append('managedBy', formData.managedBy)
    formData1.append('governmentRepresentation', formData.governmentRepresentation)
    formData1.append('propertyImage1', formData.propertyImage1)
    formData1.append('propertyImage2', formData.propertyImage2)
    formData1.append('propertyImage3', formData.propertyImage3)
    


    const response = await fetch("http://localhost:4000/api/properties/createNewProperty", {
      method:"POST",
      body:formData1
    })
    const json = await response.json()

    if(response.ok){
      console.log("upload successfully");
      localStorage.removeItem('formData')
      navigate("/")
    }

  }


  useEffect(()=>{
    console.log(formData);
  },[])

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

          <p><span>Image 1: </span>{formData.propertyImage1.name}</p>
          <p><span>Image 2: </span>{formData.propertyImage2.name}</p>
          <p><span>Image 3: </span>{formData.propertyImage3.name}</p>

          
          <div className="btn-div">
            <button className='btn btn-info' onClick={handleSubmit}>Add</button>
            <Link className='btn btn-secondary' to="/propertyForm/managerDetails">Back</Link>
          </div>
        </div>
        <div className="col-5"></div>
      </div>
    </div>
  )
}

export default ConfirmForm