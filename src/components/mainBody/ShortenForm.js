import React, { useState, useEffect } from "react";
import axios from "axios";

function ShortenForm() {

  const [input, setInput] = useState("")

  const formSubmit = e =>{
      e.preventDefault()

      const regx = /^[\w.]+@\w+\.(com|net|org|oi)$/;

      // if (){

      // }else{

      // }
      // console.log(input)


      setInput("")
  }

  // https://api.shrtco.de/v2/
  // shorten
  // GET/POST: https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html

  return (
    <div className="form-wrapper">
      <form onSubmit={formSubmit} method="GET">
        <div className="inputBut-wrapper">
          <div className="input-wrapper">
            <input type="text"
             placeholder="shorten a link here..." 
             value={input}
             onChange={e => setInput(e.target.value)}/>
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
