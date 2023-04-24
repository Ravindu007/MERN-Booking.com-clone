import React, { useState } from 'react'
import "./Sec2.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const Sec2 = () => {

  const [rules, setRules] = useState([
    "Set house rules guest must agree to before they stay",
    "Request damage deposits for extra security",
    "Report guest misconduct if something goes wrong",
    "Access 24/7 support in 43+ languages",
    "Protection against liability claims from guests and neighbors up to $1,000,000 for every reservation"
  ])

  return (
    <div className='sec2'>
      <div className="container">
        <div className="row upper">
          <div className="col-6">
          <h3>Your peace of mind is our top priority</h3>
          <p>Here’s how we’re helping you feel confident welcoming guests:</p>
          </div>
        </div>
        <div className="row middle">
          <div className="col-6">
            {rules && rules.map((rule)=>(
              <div className="row rule" key={rule}>
                <div className="col-1">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </div>
                <div className="col-11">
                  <p>{rule}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-6">
            <img src="/ListingPage/Sec2/sec2.svg" alt="" />
          </div>
        </div>
        <div className="row">
          <button className='btn btn-outline-info'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Sec2