import React, { useState } from 'react'

import "./PropertyType.scss"

const PropertyTypes = () => {

  const [properties, setProperties] = useState([
    {img:"./properties/pr1.jpeg",type:"Hotels", number:1521, id:1},
    {img:"./properties/pr2.jpeg",type:"Apartments", number:700, id:2},
    {img:"./properties/pr3.jpeg",type:"Resorts", number:348, id:3},
    {img:"./properties/pr4.jpeg",type:"Villas", number:154, id:4},
    {img:"./properties/pr5.jpeg",type:"Cabins", number:121, id:5},
  ])


  return (
    <div className='propertyTypes'>
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

$(document).ready(function(){
  $('.carousel-property').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,
    slidesToScroll: 1,  
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});

export default PropertyTypes