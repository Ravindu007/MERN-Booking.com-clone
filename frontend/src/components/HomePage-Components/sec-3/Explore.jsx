import React, { useEffect, useState } from 'react'
import "./Explore.scss"

import {useCarousel} from "../../../hooks/useCarousel"


const Explore = () => {
  
  const {slickCarousel} = useCarousel()

  const [places, setPlaces] = useState(null)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{

    // fetching data
    const fetchExplorePlaces = async() => {
      const response = await fetch("http://localhost:4000/api/frontendData/getExploreData")
      const json = await response.json()

      if(response.ok){
        setPlaces(json)
        setIsLoading(false)
        slickCarousel($('.carousel'),5)
      }
    }

    fetchExplorePlaces()

  },[])

  return (
    <div className='explore' data-aos="fade-right" data-aos-delay="200">
      <div className="container">
        <h6>Explore</h6>
        <p>These popular destinations have a lot to offer</p>

        {isLoading ? <p>Loading</p> : (
          <div className="carousel">
          {places && places.map((place)=>(
            <div key={place._id}>
              <img src={place.img} alt="" className='img-fluid'/>
              <div className="text">
              <p>{place.placeName}</p>
              <p>{place.numberOfProperties} properties</p>
              </div>
            </div>
          ))}
        </div>
        )}

      </div>
    </div>
  )
}


export default Explore