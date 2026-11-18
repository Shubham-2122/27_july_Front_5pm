import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            <header id="header" className="header fixed-top">
                
                <div className="branding d-flex align-items-cente">
                    <div className="container position-relative d-flex align-items-center justify-content-between">
                        <a href="index.html" className="logo d-flex align-items-center">
                            {/* Uncomment the line below if you also wish to use an image logo */}
                            {/* <img src="assets/img/logo.webp" alt=""> */}
                            <h1 className="sitename">Clinic</h1>
                        </a>
                        <nav id="navmenu" className="navmenu">
                            <ul>
                                <li><NavLink to="/" className="">Home</NavLink></li>
                                <li><NavLink to="/about" >About</NavLink></li>
                                <li><NavLink to="/department" >Departments</NavLink></li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="doctors.html">Doctors</a></li>
                                <li className="dropdown"><a href="#"><span>More Pages</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                                    <ul>
                                        <li><a href="department-details.html">Department Details</a></li>
                                        <li><a href="service-details.html">Service Details</a></li>
                                        <li><a href="appointment.html">Appointment</a></li>
                                        <li><a href="testimonials.html">Testimonials</a></li>
                                        <li><a href="faq.html">Frequently Asked Questions</a></li>
                                        <li><a href="gallery.html">Gallery</a></li>
                                        <li><a href="terms.html">Terms</a></li>
                                        <li><a href="privacy.html">Privacy</a></li>
                                        <li><a href="404.html">404</a></li>
                                    </ul>
                                </li>
                              
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
                        </nav>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Header