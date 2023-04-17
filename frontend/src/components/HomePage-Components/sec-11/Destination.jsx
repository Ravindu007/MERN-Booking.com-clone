import React, { useState } from 'react'
import DesNavbar from './Des-Navbar'

import "./Destination.scss"

const Destination = () => {

  const [places, setPlaces] = useState([
    {placeName: "Ibiza", properties:"1641"},
    {placeName: "Lake District", properties:"784"},
    {placeName: "Jersy", properties:"2321"},
    {placeName: "My konos", properties:"1474"},
    {placeName: "Bota Bora", properties:"586"},
    {placeName: "Bali", properties:"852"},
    {placeName: "Hawaii", properties:"852"},
    {placeName: "Bihar", properties:"852"},
    {placeName: "Ras Al Kaimah", properties:"852"},
    {placeName: "Sydney", properties:"852"},
    {placeName: "Texel", properties:"852"},
  ])

  return (
    <div className='destination'>
      <div className="container">
        <DesNavbar/>
        <div className="container">
        <div className="row">
          {places && places.map((place)=>(
            <div className="col">
              <p>{place.placeName}</p>
              <p>{place.properties} properties</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Destination