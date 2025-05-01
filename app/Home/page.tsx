import React from 'react'
import GoogleMap from '../components/Utils/GoogleMap'
const Homepage = () => {
  return (
    <div className="flex justify-around">
      <div className="w-auto">
        <GoogleMap />
      </div>
    </div>
  )
}

export default Homepage