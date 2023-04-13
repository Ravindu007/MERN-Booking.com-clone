import React, { useEffect, useState } from 'react'
import "./GetInspiration.scss"
import { useCarousel } from '../../../hooks/useCarousel'

const GetInspiration = () => {

  const {slickCarousel} = useCarousel()

  useEffect(()=>{
    slickCarousel($('.inspire-carousel'),2)
  },[])

  const [inspirations, setInspirations] = useState([
    {img:"./inspire/i1.webp", title:"Tomato party", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, at?",id:1},
    {img:"./inspire/i2.webp", title:"Independence Day", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, at?",id:2},
    {img:"./inspire/i3.webp", title:"History repeats", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, at?",id:3},
  ])

  return (
    <div className='getInspiration'>
      <div className="container">
        <h6>Get inspiration for your next trip</h6>
        <div className="row">
          
          <div className="col-6">
            <div className="card">
              <img src={inspirations[0].img} className='card-img' />
              <div className="card-img-overlay">
                <div className="text">
                <h6>{inspirations[0].title}</h6>
                <p>{inspirations[0].content}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="inspire-carousel">
            {inspirations && inspirations.map((inspiration)=>(
              <div className="col-3" key={inspiration.id}>
                <div className="card">
                  <img src={inspiration.img} className='card-img' />
                  <div className="card-img-overlay"></div>
                  <div className="card-footer">
                    <h6>{inspiration.title}</h6>
                    <p>{inspiration.content}</p>
                  </div>
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

export default GetInspiration