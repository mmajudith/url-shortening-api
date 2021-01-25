import React from 'react'
import Brand from '../../images/icon-brand-recognition.svg'
import DetRecord from '../../images/icon-detailed-records.svg'
import FullyCustom from '../../images/icon-fully-customizable.svg'

function TrackLink() {
  return (
    <div>

      <div>
        <h2> Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our 
          advanced statistics dashboard.
        </p>
      </div>

      <div>
        <div>
          <div>
            <img src={Brand} alt="brand recognition icon"/>
          </div>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t 
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div>
          <div>
            <img src={DetRecord} alt="brand recognition icon"/>
          </div>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and where 
            people engage with your content helps inform better decisions.
          </p>
        </div>
        <div>
          <div>
            <img src={FullyCustom} alt="brand recognition icon"/>
          </div>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through customizable 
            links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TrackLink
