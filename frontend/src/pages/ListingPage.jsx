import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sec1 from '../components/ListingPage-Components/sec-1/Sec1'
import Sec2 from '../components/ListingPage-Components/sec-2/Sec2'

const ListingPage = () => {
  return (
    <div className='listingPage'>
      <Navbar/>
      <Sec1/>
      <Sec2/>
    </div>
  )
}

export default ListingPage