import React from 'react'
import WhiteLogo from '../images/logo-white.svg'
import Facebook from '../images/icon-facebook.svg';
import Twitter from '../images/icon-twitter.svg';
import Pinterest from '../images/icon-pinterest.svg';
import Instagram from '../images/icon-instagram.svg';

function Footer() {
  return (
    <footer>

      <div>

        <div className="footer-logo-wrapper">
          <img src={WhiteLogo} alt="footer logo" />
        </div>

        <div>
          <p>Features</p>
          <ul>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>

        <div>
          <p>Resources</p>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>

        <div>
          <p>Company</p>
          <ul>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <img src={Facebook} alt="facebook icon"/>
          <img src={Twitter} alt="twitter icon"/>
          <img src={Pinterest} alt="pinterest icon"/>
          <img src={Instagram} alt="instagram icon"/>
        </div>

      </div>
    </footer>
  )
}

export default Footer
