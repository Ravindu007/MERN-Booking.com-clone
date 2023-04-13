import React, { useState } from 'react'

import "./Connect.scss"
const Connect = () => {

  AOS.init()

  const [communities, setCommunities] = useState([
    {img:"./community/c1.jpg",name:"Sri Lanka",about:"Travel community", members:"77436", id:1},
    {img:"./community/c2.jpg",name:"Sri Lanka",about:"Travel community", members:"77436", id:2},
    {img:"./community/c3.png",name:"Sri Lanka",about:"Travel community", members:"77436", id:3},
  ])

  return (
    <div className='connect' data-aos="fade-left" data-aos-delay="200">
      <div className="container">
        <h6>Connect with others</h6>
        <div className="card-group">
          {communities && communities.map((community)=>(
            <div className="col-4 card community-card" key={community.id}>
              <img src={community.img} alt="" className='card-img'/>
              <div className="card-img-overlay"></div>
              <div className="card-footer">
                <p>{community.name}</p>
                <p>{community.about}</p>
                <p>{community.members} travellers</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Connect