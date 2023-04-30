import {Link, useNavigate} from 'react-router-dom'
import PropertyFormNav from '../PropertyFormNav/PropertyFormNav'

import "./OwnerDetailsForm.scss"
import { useContext, useEffect, useState } from 'react';
import { PropertyFormContext } from '../../../../../context/PropertyFormContext';


const OwnerDetailsForm = () => {
  const navigate = useNavigate()

  const {updateFormData} = useContext(PropertyFormContext);

  const [business, setBusiness] = useState("")
  const [ownerName, setOwnerName] = useState("")
  const [ownerNickName, setOwnerNickName] = useState("")
  const [error, setError] = useState("")


  const handleNext = ( )=>{
    updateFormData({
      business:business,
      ownerName:ownerName,
      ownerNickName:ownerNickName
    })

    navigate('/propertyForm/managerDetails')
  }

  const validate = (e) => {
    e.preventDefault()
    if(!business){
      setError("Enter business type")
    }else if(!ownerName){
      setError("Enter own name")
    }else if(!ownerNickName){
      setError("Enter owner nick name")
    }else{
      handleNext()
    }
  }


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
                onChange={e=>{setBusiness(e.target.value)}}
                value={business}
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
                onChange={e=>{setOwnerName(e.target.value)}}
                value={ownerName}
              />
            </div>
            <div className="form-group">
              <label>If any owner go by any other name</label>
              <input 
                type="text"
                className='form-control' 
                onChange={e=>{setOwnerNickName(e.target.value)}}
                value={ownerNickName}
              />
            </div>
            <div className="btn-div">
              <button className='btn btn-info' onClick={validate}>Next</button>
              <Link className='btn btn-secondary' to="/propertyForm/propertyDetails">Back</Link>
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

export default OwnerDetailsForm