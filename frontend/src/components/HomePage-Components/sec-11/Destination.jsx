import React, { useEffect, useState } from 'react'
import DesNavbar from './Des-Navbar'

import "./Destination.scss"

const Destination = () => {

  const [places, setPlaces] = useState(null)

  useEffect(()=>{
    const fetchAllDestinations = async()=>{
      const response = await fetch("http://localhost:4000/api/frontendData/getAllDestinations")
      const json = await response.json()

      if(response.ok){
        setPlaces(json)
      }
    }

    fetchAllDestinations()
  },[])

  return (
    <div className='destination'>
      <div className="container">
        <DesNavbar/>
        <div className="container">
        <div className="row">
          {places && places.map((place)=>(
            <div className="col" key={place._id}>
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