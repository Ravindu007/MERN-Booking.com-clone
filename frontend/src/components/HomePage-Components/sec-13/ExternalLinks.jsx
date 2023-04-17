import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./ExternalLinks.scss"

const ExternalLinks = () => {

  const [linkSet1, setLinkSet1] = useState([
    "Countries", "Regions","Cities","Districts","Airports"
  ])
  const [linkSet2, setLinkSet2] = useState([
    "Homes", "Apartments","Villas","Resorts","Hotels"
  ])
  const [linkSet3, setLinkSet3] = useState([
    "Unique places to stay","All destinations","All flight Destinations", "All car rental Destinations","Discover","Reviews", "Seasonal & Holiday"
  ])
  const [linkSet4, setLinkSet4] = useState([
    "Car rental","flight finder", "resturant reservations", "Booking.com for travel agents"
  ])
  const [linkSet5, setLinkSet5] = useState([
    "Covid 19 FAQs","About","Customer service help", "Partner help", "Careers","Press center", "Sustainability", "Terms and conditions", "How we work", "Privacy and cokkie statements", "Corperate contact"
  ])


  return (
    <div className='externalLinks'>
      <div className="container">
        <div className="row links">
          {/* Links set 1 */}
          <div className="col">
            {linkSet1 && linkSet1.map((link)=>(
              <div className="col-12" key={link}>
                <Link>{link}</Link>
              </div>
            ))}
          </div>

          {/* Links set 2 */}
          <div className="col">
            {linkSet2 && linkSet2.map((link)=>(
              <div className="col-12" key={link}>
                <Link>{link}</Link>
              </div>
            ))}
          </div>

          {/* Links set 3 */}
          <div className="col">
            {linkSet3 && linkSet3.map((link)=>(
              <div className="col-12" key={link}>
                <Link>{link}</Link>
              </div>
            ))}
          </div>

          {/* Links set 4 */}
          <div className="col">
            {linkSet4 && linkSet4.map((link)=>(
              <div className="col-12" key={link}>
                <Link>{link}</Link>
              </div>
            ))}
          </div>

          {/* Links set 5 */}
          <div className="col">
            {linkSet5 && linkSet5.map((link)=>(
              <div className="col-12" key={link}>
                <Link>{link}</Link>
              </div>
            ))}
          </div>

        </div>

        <div className="row extranet">
          <Link>Extranet Login</Link>
        </div>
      </div>
    </div>
  )
}

export default ExternalLinks