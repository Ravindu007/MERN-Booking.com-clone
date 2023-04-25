import React from 'react'
import PropertyFormNav from './PropertyFormNav/PropertyFormNav'
import PropertyDetailsFrom from './PropertyDetailsForm/PropertyDetailsFrom'

const PropertyForm = () => {
  return (
    <div className='propertyForm'>
      {/* initial form */}
      <PropertyDetailsFrom/>
    </div>
  )
}

export default PropertyForm