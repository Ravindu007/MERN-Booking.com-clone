import React, { useEffect, useState } from 'react'

import "./PropertyFormNav.scss"
import { Link } from 'react-router-dom'

const PropertyFormNav = ({parentComponent}) => {

  useEffect(()=>{
    if(parentComponent === "/propertyForm/propertyDetails"){
      $(".i1").addClass("select")
    }else if(parentComponent === "/propertyForm/ownerDetails"){
      $(".i2").addClass("select")
    }else if(parentComponent === "/propertyForm/managerDetails"){
      $(".i3").addClass("select")
    }else if(parentComponent === "/propertyForm/confirmDetails"){
      $(".i4").addClass("select")
    }
  })
  
  const [navItems, setNavItems] = useState([
    {num:"1", item:"Property Details",to:"",class:"col-3 item i1", id:1},
    {num:"2", item:"Owner Details",to:"",class:"col-3 item i2", id:2},
    {num:"3", item:"Manager Details",to:"",class:"col-3 item i3", id:3},
    {num:"4", item:"Confirmation",to:"",class:"col-3 item i4", id:4},
  ])
  return (
    <div className='propertyFormNav'>
      <div className="row">
        {navItems && navItems.map((item)=>(
          <Link className={item.class} key={item.id} to={item.to}>
            
              <span className='num'>{item.num}</span>
              {item.item}
              <hr />
            
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PropertyFormNav