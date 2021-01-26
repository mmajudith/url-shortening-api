import React from 'react'
import ShortenForm from './ShortenForm'
import TrackLink from './TrackLink'
import BoostLink from './BoostLink'

function MainBody() {
  return (
    <div className="main-body">

      <ShortenForm />
      <TrackLink />
      <BoostLink />
      
    </div>
  )
}

export default MainBody
