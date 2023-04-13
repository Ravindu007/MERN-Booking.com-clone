import React from 'react'
import LandingPage from '../components/HomePage-Components/sec-1/LandingPage'
import Offers from '../components/HomePage-Components/sec-2/Offers'
import Explore from '../components/HomePage-Components/sec-3/Explore'
import PropertyTypes from '../components/HomePage-Components/sec-4/PropertyTypes'
import EasyTripPlanner from '../components/HomePage-Components/sec-5/EasyTripPlanner'
import GetInspiration from '../components/HomePage-Components/sec-6/GetInspiration'

const Home = () => {
  return (
    <div>
      <LandingPage/>
      <Offers/> 
      <Explore/>
      <PropertyTypes/>
      <EasyTripPlanner/>
      <GetInspiration/>
    </div>
  )
}

export default Home