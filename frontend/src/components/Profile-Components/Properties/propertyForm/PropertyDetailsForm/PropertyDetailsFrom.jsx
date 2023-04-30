import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

import "./PropertyDetailsForm.scss"
import PropertyFormNav from '../PropertyFormNav/PropertyFormNav'
import { PropertyFormContext } from '../../../../../context/PropertyFormContext'

const PropertyDetailsFrom = () => {
  const navigate = useNavigate()

  const {updateFormData} = useContext(PropertyFormContext)

  const [propertyName, setPropertyName] = useState("")
  const [address, setAddress] = useState("")
  const [unitNumber, setUnitNumber] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [town, setTown] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [error, setError] = useState(null)
 
  const handleNext = () => {
    updateFormData({ 
      propertyName: propertyName,
      address:address,  
      unitNumber:unitNumber,
      zipCode:zipCode,
      town:town,
      city:city,
      country:country
    })
    
    navigate('/propertyForm/ownerDetails')
  };
  
  const validate = (e) => {
    e.preventDefault()

    if(!propertyName){
      setError("Enter property Name")
    }
    else if(!address){
      setError("Enter Address")
    }
    else if(!unitNumber){
      setError("Enter unit Number")
    }
    else if(!zipCode){
      setError("Enter zip code")
    }
    else if(!town){
      setError("Enter Town")
    }
    else if(!city){
      setError("Enter city")
    }
    else if(!country){
      setError("Enter country")
    }else{
      handleNext()
    }
    

  }

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
                onChange={e=>setPropertyName(e.target.value)}
                value={propertyName}
              />
            </div>
            <div className="form-group">
              <label>Address (street name and house name)</label>
              <input 
                type="text" 
                className='form-control'
                onChange={e=>{setAddress(e.target.value)}}
                value={address}
              />
            </div>
            <div className="form-group">
              <label>Unit Number</label>
              <input 
                type="text" 
                className='form-control'
                onChange={e=>{setUnitNumber(e.target.value)}}
                value={unitNumber}
              />
            </div>
            <div className="form-group">
              <label>Zip code</label>
              <input 
                type="text" 
                className='form-control'
                onChange={e=>{setZipCode(e.target.value)}}
                value={zipCode}
              />
            </div>
            <div className="form-group">
              <label>Town</label>
              <input 
                type="text" 
                className='form-control'
                onChange={e=>setTown(e.target.value)}
                value={town}
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input 
                type="text" 
                className='form-control'
                onChange={e=>setCity(e.target.value)}
                value={city}
              />
            </div>
            <div className="form-group">
              <label>Country</label>
              <input 
                type="text" 
                className='form-control'
                onChange={e=>setCountry(e.target.value)}
                value={country}
              />
            </div>
            <div className="btn-div">
              <button 
                className='btn btn-info'
                onClick={validate}
                >Next</button>
              <Link className='btn btn-secondary' to="/properties">Cancel</Link>
            </div>
          </form>
        </div>
        <div className="col-5">
          <h6>{error }</h6>
          {/* tips */}
        </div>
      </div>
    </div>
  )
}

export default PropertyDetailsFrom