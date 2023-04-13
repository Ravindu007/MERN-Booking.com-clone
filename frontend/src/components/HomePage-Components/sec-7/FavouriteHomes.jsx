import React, { useEffect, useState } from 'react'
import "./FavouriteHomes.scss"
import { useCarousel } from '../../../hooks/useCarousel'


const FavouriteHomes = () => {

  AOS.init(); //animation on scroll


  const {slickCarousel} = useCarousel()

  useEffect(()=>{
    slickCarousel($('.home-carousel'),4)
  },[])

  const [homes, setHomes] = useState([
    {img:"./favouriteHomes/h1.webp",propertyName:"Aparthotel Stare Miasto", address:"Old Town, Poland, Kraków", price:"37797", rating:"8.6", numberOfReviews:"2133",id:1},
    {img:"./favouriteHomes/h2.webp",propertyName:"7Seasons Apartments Budapest", address:"06. Terézváros, Hungary, Budapest", price:"55791", rating:"8.8", numberOfReviews:"2133",id:2},
    {img:"./favouriteHomes/h3.webp",propertyName:"numa I Vita Apartments", address:"Old Town, Poland, Kraków", price:"37797", rating:"8.6", numberOfReviews:"2133",id:3},
    {img:"./favouriteHomes/h4.webp",propertyName:"Cheval Three Quays at The Tower of London", address:"City of London, United Kingdom, London", price:"37797", rating:"9.5", numberOfReviews:"255996",id:4},
    {img:"./favouriteHomes/h5.webp",propertyName:"RAMBLA BEACH Barcelonastuff Apartments", address:"Old Town, Poland, Kraków", price:"37797", rating:"8.6", numberOfReviews:"2133",id:5},
  ])
  return (
    <div  className='favouriteHomes' data-aos="fade-right" data-aos-delay="200">
      <div className="container">
        <h6>Homes guests love</h6>
        <div className="home-carousel">
          {homes && homes.map((home)=>(
            <div className="home-item" key={home.id}>
              <img src={home.img} className='img-fluid' />
              <h6>{home.propertyName}</h6>
              <p>{home.address}</p>
              <p>Starting from <span>{home.price}</span></p>
              <p><span className='rating'>{home.rating}</span>  <span id='reviews'>{home.numberOfReviews} reviews</span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FavouriteHomes