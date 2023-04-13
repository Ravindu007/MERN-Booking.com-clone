import React, { useEffect, useState } from 'react'
import {useCarousel} from "../../../hooks/useCarousel"

import "./PropertyType.scss"

const PropertyTypes = () => {
  AOS.init(); //animation on scroll

  const {slickCarousel} = useCarousel()

  useEffect(()=>{
    slickCarousel($('.carousel-property'), 4)
  },[])

  const [properties, setProperties] = useState([
    {img:"./properties/pr1.jpeg",type:"Hotels", number:1521, id:1},
    {img:"./properties/pr2.jpeg",type:"Apartments", number:700, id:2},
    {img:"./properties/pr3.jpeg",type:"Resorts", number:348, id:3},
    {img:"./properties/pr4.jpeg",type:"Villas", number:154, id:4},
    {img:"./properties/pr5.jpeg",type:"Cabins", number:121, id:5},
  ])


  return (
    <div className='propertyTypes' data-aos="fade-left" data-aos-delay="200">
      <div className="container">
        <h6>Browse By Property Type</h6>

        <div className="carousel-property">
          {properties && properties.map((property)=>(
            <div key={property.id}>
              <img src={property.img} alt="" className='img-fluid'/>
              <div className="text">
                <p>{property.type}</p>
                <p>{property.number} properties</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )

}



export default PropertyTypes