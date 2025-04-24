import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-content">
            <h1>About</h1>
            <ul>
                <li><a href="">News</a></li>
                <li><a href="">Our History</a></li>
                <li><a href="">Our Doctors</a></li>
                <li><a href="">Our Staff</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">Patient Testimonials</a></li>
                <li><a href="">Areas of Specialty</a></li>
            </ul>
        </div>
        <div className="footer-content">
        <h1>All Locations</h1>

        <ul>
                <li><a href="">Long Island</a></li>
                <li><a href="">Manhattan</a></li>
                <li><a href="">Staten Island</a></li>
                <li><a href="">Brooklyn</a></li>
                <li><a href="">Westchester</a></li>
                <li><a href="">Rockland</a></li>
                <li><a href="">New Jersey</a></li>
                <li><a href="">Other Locations</a></li>

            </ul>
        </div>
        <div className="footer-content">
        <h1>Patient Resources</h1>

        <ul>
                <li><a href="">Insurance</a></li>
                <li><a href="">Patient Education</a></li>
                <li><a href="">Patient Forms</a></li>
                <li><a href="">Blog</a></li>
            </ul>
        </div>
      
    </div>
  )
}

export default Footer
