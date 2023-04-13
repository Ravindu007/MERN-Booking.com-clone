import React, { useEffect, useState } from 'react'
import Sec5Nav from './Sec5Nav'
import { useCarousel } from '../../../hooks/useCarousel'

import './EasyTripPlanner.scss'

const EasyTripPlanner = () => {

  const {slickCarousel} = useCarousel()

  useEffect(()=>{
    slickCarousel($('.carousel'),5)
  },[])

  const [places, setPlaces] = useState([
    {img:"./explore/p1.jpg", placeName:"Galle",numberOfProperties:200,id:1},
    {img:"./explore/p2.jpg", placeName:"Colombo",numberOfProperties:200,id:2},
    {img:"./explore/p3.jpg", placeName:"Badulla",numberOfProperties:200,id:3},
    {img:"./explore/p4.jpg", placeName:"Kandy",numberOfProperties:200,id:4},
    {img:"./explore/p5.jpg", placeName:"Babarakanda Falls",numberOfProperties:200,id:5},
    {img:"./explore/p6.jpg", placeName:"Wattala",numberOfProperties:200,id:6},
    {img:"./explore/p7.jpg", placeName:"Mount Lavinia",numberOfProperties:200,id:7},
    {img:"./explore/p8.jpg", placeName:"Benthota",numberOfProperties:200,id:8},
  ])

  return (
    <div className='easyTripPlanner'>
      <div className="container">
        <h6>Quick and easy trip planner</h6>
        <p>Pick a vibe and explore the top destinations in Sri Lanka</p>
        <div className="row">
          <div className="col-12">
            <Sec5Nav/>
          </div>
          <div className="col-12 places">
            <div className="carousel">
            {places && places.map((place)=>(
              <div key={place.id}>
                    <img src={place.img} alt="" className='img-fluid'/>
                    <div className="text">
                    <p>{place.placeName}</p>
                    </div>
                  </div>
                ))}
              </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default EasyTripPlanner