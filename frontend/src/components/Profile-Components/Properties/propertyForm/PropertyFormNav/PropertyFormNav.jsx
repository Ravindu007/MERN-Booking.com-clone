import { fa1 } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'


import "./PropertyFormNav.scss"
import { Link } from 'react-router-dom'

const PropertyFormNav = () => {
  
  const [navItems, setNavItems] = useState([
    {num:"1", item:"Property Details",to:"/propertyForm/propertyDetails", id:1},
    {num:"2", item:"Owner Details",to:"/propertyForm/ownerDetails", id:2},
    {num:"3", item:"Manager Details",to:"", id:3},
    {num:"4", item:"Confirmation",to:"", id:4},
  ])
  return (
    <div className='propertyFormNav'>
      <div className="row">
        {navItems && navItems.map((item)=>(
          <Link className="col-3 item" key={item.id} to={item.to}>
            <p><span className='num'>{item.num}</span>{item.item} </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PropertyFormNav