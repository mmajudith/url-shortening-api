import React, { useState } from 'react'
import Logo from '../images/logo.svg'
import HamMenu from '../images/icon-hamburger.svg'
import Illustration from '../images/illustration-working.svg'

function Header() {

    const [toggle, setToggle] = useState(false)

    const menuHandle = () =>{
        setToggle(!toggle)
    }

  return (
    <header>
            <div className={!toggle ? "close" : "open"}>
                <nav>
                    <div className="flex-left">
                        <div className="logoHam-wrapper">
                            <div className="logoWrapper">
                                <img src={Logo} alt="header logo" className="logo"/>
                            </div> 
                            <div className="hamMenuWrapper">
                                <img src={HamMenu} alt="hamburger Menu" className="hamMenu" onClick={menuHandle}/>
                            </div> 
                        </div>
                    
                        <ul className="items">
                            <li className="item">Features</li>
                            <li className="item">Pricing</li>
                            <li className="item">Resources</li>
                        </ul>
                    </div>
                    <div className="logSign-wrapper">
                        <span className="login">Login</span>
                        <span className="sign-up">Sign Up</span>
                    </div>
                </nav>
            </div>
            <div className="heading-wrapper">
                <div className="heading">
                    <h1>More than just shorter links</h1>
                    <p>Build your brand’s recognition and get detailed insights 
                        on how your links are performing.
                    </p>
                    <div className="get-started">
                        <span>Get Started</span>
                    </div>
                </div>
                <div className="work-illust-wrapper">
                    <img src={Illustration} alt="working illustration" className="illust"/>
                </div>
            </div>
        
    </header>
  )
}

export default Header
