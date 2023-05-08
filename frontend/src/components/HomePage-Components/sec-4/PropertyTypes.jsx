import React, { useEffect, useState } from 'react'
import {useCarousel} from "../../../hooks/useCarousel"

import "./PropertyType.scss"

const PropertyTypes = () => {

  const {slickCarousel} = useCarousel()

  const [properties, setProperties] = useState(null)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    const fetchAllProperties = async()=>{
      const response = await fetch("http://localhost:4000/api/frontendData/getAllProperties")
      const json = await response.json()

      if(response.ok){
        setProperties(json)
        setIsLoading(false)
        slickCarousel($('.carousel-property'), 4)
      }
    }

    fetchAllProperties()
  },[])



  return (
    <div className='propertyTypes' data-aos="fade-left" data-aos-delay="200">
      <div className="container">
        <h6>Browse By Property Type</h6>

        {isLoading ? <p>Loading</p> : (
          <div className="carousel-property">
          {properties && properties.map((property)=>(
            <div key={property._id}>
              <img src={property.propertyImage1} alt="" className='img-fluid'/>
              <div className="text">
                <p>{property.propertyName}</p>
                <p>{property.unitNumber} properties</p>
              </div>
            </div>
          ))}
        </div>
        )}

      </div>
    </div>
  )

}



export default PropertyTypes