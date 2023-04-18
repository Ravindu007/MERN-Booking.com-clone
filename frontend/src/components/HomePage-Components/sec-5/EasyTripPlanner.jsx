import React, { useEffect, useState } from 'react'
import Sec5Nav from './Sec5Nav'
import { useCarousel } from '../../../hooks/useCarousel'

import './EasyTripPlanner.scss'

const EasyTripPlanner = () => {

  const {slickCarousel} = useCarousel()
  
  const [places, setPlaces] = useState(null)

  const [isLoading , setIsLoading] = useState(true)
  
  useEffect(()=>{

    const fetchAllTripPlaces = async() => {
      const response = await fetch("http://localhost:4000/api/frontendData/getTripPlaces")
      const json = await response.json()

      if(response.ok){
        setPlaces(json)
        setIsLoading(false)
        slickCarousel($('.carousel-trip'),5)
      }
    }

    fetchAllTripPlaces()

  },[])


  return (
    <div className='easyTripPlanner' data-aos="fade-right" data-aos-delay="200">
      <div className="container">
        <h6>Quick and easy trip planner</h6>
        <p>Pick a vibe and explore the top destinations in Sri Lanka</p>
        <div className="row">
          <div className="col-12">
            <Sec5Nav/>
          </div>
          <div className="col-12 places">
            {isLoading ? <p>Loading</p> : (
              <div className="carousel-trip">
              {places && places.map((place)=>(
                <div key={place._id}>
                  <img src={place.img} alt="" className='img-fluid'/>
                  <div className="text">
                  <p>{place.placeName}</p>
                  </div>
                </div>
              ))}
            </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default EasyTripPlanner