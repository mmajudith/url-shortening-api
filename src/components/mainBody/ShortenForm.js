import React from 'react'

function ShortenForm() {
  return (
    <div className="form-wrapper">
      <form>
        <div className="inputBut-wrapper">
          <div className="input-wrapper">
            <input type="text" placeholder="shorten a link here..."/>
            <p>please add a link</p>
          </div>
          <div className="button-wrapper">
            <button type="submit">Shorten It!</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ShortenForm
