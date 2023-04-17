import React, { useState } from 'react'
import DesNavbar from './Des-Navbar'

import "./Destination.scss"

const Destination = () => {

  const [places, setPlaces] = useState([
    {placeName: "Ibiza", properties:"1641", id:1},
    {placeName: "Lake District", properties:"784", id:2},
    {placeName: "Jersy", properties:"2321", id:3},
    {placeName: "My konos", properties:"1474", id:4},
    {placeName: "Bota Bora", properties:"586", id:5},
    {placeName: "Bali", properties:"852", id:6},
    {placeName: "Hawaii", properties:"852", id:7},
    {placeName: "Bihar", properties:"852", id:8},
    {placeName: "Ras Al Kaimah", properties:"852", id:9},
    {placeName: "Sydney", properties:"852", id:10},
    {placeName: "Texel", properties:"852", id:11},
  ])

  return (
    <div className='destination'>
      <div className="container">
        <DesNavbar/>
        <div className="container">
        <div className="row">
          {places && places.map((place)=>(
            <div className="col" key={place.id}>
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