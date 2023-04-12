import React from 'react'
import LandingPage from '../components/HomePage-Components/sec-1/LandingPage'
import Offers from '../components/HomePage-Components/sec-2/Offers'
import Explore from '../components/HomePage-Components/sec-3/Explore'
import PropertyTypes from '../components/HomePage-Components/sec-4/PropertyTypes'

const Home = () => {
  return (
    <div>
      <LandingPage/>
      <Offers/> 
      <Explore/>
      <PropertyTypes/>
    </div>
  )
}

export default Home