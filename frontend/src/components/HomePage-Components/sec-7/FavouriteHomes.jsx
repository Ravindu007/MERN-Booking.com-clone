import React, { useEffect, useState } from 'react'
import "./FavouriteHomes.scss"
import { useCarousel } from '../../../hooks/useCarousel'


const FavouriteHomes = () => {
  
  const {slickCarousel} = useCarousel()
  const [homes, setHomes] = useState(null)
  const [isLoading ,setIsLoading] = useState(true)
  
  useEffect(()=>{
    const fetchFavouriteHomes = async() => {
      const response = await fetch("http://localhost:4000/api/frontendData/getFavouriteHomes")
      const json = await response.json()

      if(response.ok){
        setHomes(json)
        setIsLoading(false)
        slickCarousel($('.home-carousel'),4)
      }
    }

    fetchFavouriteHomes()
  },[])

  return (
    <div  className='favouriteHomes' data-aos="fade-right" data-aos-delay="200">
      <div className="container">
        <h6>Homes guests love</h6>
        {isLoading ? <p>Loading</p> : (
          <div className="home-carousel">
          {homes && homes.map((home)=>(
            <div className="home-item" key={home._id}>
              <img src={home.img} className='img-fluid' />
              <h6>{home.propertyName}</h6>
              <p>{home.address}</p>
              <p>Starting from <span>{home.price}</span></p>
              <p><span className='rating'>{home.ratings}</span>  <span id='reviews'>{home.numberOfReviews} reviews</span></p>
            </div>
          ))}
        </div>
        )}
      </div>
    </div>
  )
}

export default FavouriteHomes