import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import PropertyFormNav from '../PropertyFormNav/PropertyFormNav'

import "./ManagerDetailsForm.scss"
import { PropertyFormContext } from '../../../../../context/PropertyFormContext'

const ManagerDetailsFrom = () => {
  const navigate = useNavigate()
  const {updateFormData} = useContext(PropertyFormContext)

  const [managedBy, setManagedBy] = useState("")
  const [governmentRepresentation, setGovernmentRepresentation] = useState("")
  const [error, setError] = useState("")

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem('formData'));
    setManagedBy(data.managedBy) 
  },[])

  const handleNext = () => {
    updateFormData({
      managedBy:managedBy,
      governmentRepresentation:governmentRepresentation
    })

    navigate('/propertyForm/confirmDetails')
  }

  const validate = (e) => {
    e.preventDefault()
    if(!managedBy){
      setError("Enter who is managing")
    }else{
      handleNext()
    }
  }

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
                onChange={e=>setManagedBy(e.target.value)}
                value={managedBy}
              />
            </div>
            <div className="form-group">
              <label>Government Representation</label>
              <p>Is a government agency, government official, or close family members of government official involved in the ownership, control or management of the accomodation</p>
              
              <div className="radio-div">
                  <div className="form-check">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="flexRadioDefault" 
                      id="flexRadioDefault1"
                      onChange={e=>setGovernmentRepresentation(e.target.value)}
                      value={governmentRepresentation}
                    />
                    <label className="form-check-label">
                      Yes
                    </label>
                  </div>

                  <div className="form-check">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="flexRadioDefault" 
                      id="flexRadioDefault1"
                      onChange={e=>setGovernmentRepresentation(e.target.value)}
                      value={governmentRepresentation}
                    />
                    <label className="form-check-label">
                      No
                    </label>
                  </div>
              </div>

            </div>
            
            <div className="btn-div">
              <button className='btn btn-info' onClick={validate}>Next</button>
              <Link className='btn btn-secondary' to="/propertyForm/ownerDetails">Back</Link>
            </div>
           
          </form>
        </div>
        <div className="col-5">
          <h6>{error}</h6>
        </div>
      </div>
    </div>
  )
}

export default ManagerDetailsFrom