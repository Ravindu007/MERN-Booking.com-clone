import React from 'react'
import LandingPage from '../components/HomePage-Components/sec-1/LandingPage'
import Offers from '../components/HomePage-Components/sec-2/Offers'
import Explore from '../components/HomePage-Components/sec-3/Explore'
import PropertyTypes from '../components/HomePage-Components/sec-4/PropertyTypes'
import EasyTripPlanner from '../components/HomePage-Components/sec-5/EasyTripPlanner'
import GetInspiration from '../components/HomePage-Components/sec-6/GetInspiration'
import FavouriteHomes from '../components/HomePage-Components/sec-7/FavouriteHomes'
import Connect from '../components/HomePage-Components/sec-8/Connect'
import Discount from '../components/HomePage-Components/sec-9/Discount'
import Discover from '../components/HomePage-Components/sec-10/Discover'
import Destination from '../components/HomePage-Components/sec-11/Destination'
import Subscription from '../components/HomePage-Components/sec-12/Subscription'
import ExternalLinks from '../components/HomePage-Components/sec-13/ExternalLinks'
import Footer from '../components/HomePage-Components/sec-14/Footer'

const Home = () => {
  return (
    <div>
      <LandingPage/>
      <Offers/> 
      <Explore/>
      <PropertyTypes/>
      <EasyTripPlanner/>
      <GetInspiration/>
      <FavouriteHomes/>
      <Connect/>
      <Discount/>
      <Discover/>
      <Destination/>
      <Subscription/>
      <ExternalLinks/>
      <Footer/> 
    </div>
  )
}

export default Home