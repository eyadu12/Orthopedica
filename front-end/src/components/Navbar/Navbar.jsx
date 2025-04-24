import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className="upper">
            <h1>Orthopedic</h1>
            <ul>
                <li><a href="#">Book Appointment</a></li>
                <li><a href="#">Patient Portal</a></li>
                <li><a href="#">Print Patient Forms</a></li>
                <li><a href="#">Request Medical Records</a></li>
            </ul>
        </div>
        <div className="lower">
            <ul>
                <li>
                    <a href="#">About</a>
                    <div className="dropdown-content">
                        <a href="#">Our History</a>
                        <a href="#">Our Staff</a>
                        <a href="#">News</a>
                        <a href="#">Career</a>
                    </div>
                </li>
                <li>
                    <a href="#">Area of Speciallity</a>
                    <div className="dropdown-content">
                        <a href="#">Sports Medicine</a>
                        <a href="#">Spine</a>
                        <a href="#">Knee</a>
                        <a href="#">Joint Replacement</a>
                        <a href="#">Hip</a>
                        <a href="#">Foot and Ankle</a>
                        <a href="#">Spine</a>

                    </div>
                </li>
                <li>
                    <a href="#">Patient Resources</a>
                    <div className="dropdown-content">
                        <a href="#">Patient Resource</a>
                        <a href="#">Patient Forms</a>
                        <a href="">Usefull Links</a>
                        <a href="#">Insurance</a>
                        <a href="#">Doctor Highlights</a>
                        <a href="#">Patient Testimonials</a>

                    </div>
                </li>
                <li>
                    <a href="#">Research</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                    <div className="dropdown-content">
                        <a href="#">Email</a>
                        <a href="#">Phone</a>
                        <a href="#">Map</a>
                    </div>
                </li>
                <li>
                    <a href="#">Blogs</a>
                </li>
            </ul>    
        </div>
    </div>
  );
}

export default Navbar;
