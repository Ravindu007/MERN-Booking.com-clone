import React, { useEffect, useState } from 'react'
import "./GetInspiration.scss"
import { useCarousel } from '../../../hooks/useCarousel'

const GetInspiration = () => {
  
  const {slickCarousel} = useCarousel()
  
  const [inspirations, setInspirations] = useState(null)
  const [firstItem, setFirstItem]  = useState(null) //first itrm has to be seperated from fetched data

  const [isLoading , setIsLoading] = useState(true)


  
  useEffect(()=>{
    
    const fetchAllInspirations = async() => {
      var array = []
      const response = await fetch("http://localhost:4000/api/frontendData/getInspirations")
      const json = await response.json()

      if(response.ok){
        array.push(json)
        
        setFirstItem(array[0].slice(0,1)) //seperating first item
        setInspirations(array[0].slice(1,array[0].length)) //getting remaining items
        
        setIsLoading(false)
        slickCarousel($('.inspire-carousel'),2)
      }
    }

    fetchAllInspirations()

  },[])


  return (
    <div data-aos="fade-left" data-aos-delay="200" className='getInspiration'>
      <div className="container">
        <h6>Get inspiration for your next trip</h6>
        <div className="row">
          
         {isLoading ? <p>Loading</p> : (
          <>
          <div className="col-6">
            <div className="card">
              <img src={firstItem[0].img} className='card-img' />
              <div className="card-img-overlay">
                <div className="text">
                <h6>{firstItem[0].title}</h6>
                <p>{firstItem[0].content}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="inspire-carousel">
            {inspirations && inspirations.map((inspiration)=>(
              <div className="col-3" key={inspiration._id}>
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
          </>
         )}
   
        </div>
      </div>
    </div>
  )
}

export default GetInspiration