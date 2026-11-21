import React from 'react'
import { NavLink } from 'react-router-dom'

function AHeader() {
  return (
    <div>
  <div>
            <header id="header" className="header fixed-top">
                
                <div className="branding d-flex align-items-cente">
                    <div className="container position-relative d-flex align-items-center justify-content-between">
                        <NavLink to="/dash" className="logo d-flex align-items-center">
                            {/* Uncomment the line below if you also wish to use an image logo */}
                            {/* <img src="assets/img/logo.webp" alt=""> */}
                            <h1 className="sitename">DashBoard</h1>
                        </NavLink>
                        <nav id="navmenu" className="navmenu">
                            <ul>
                                {/* <li><NavLink to="/" className="">Home</NavLink></li> */}
                                {/* <li><NavLink to="/about" >About</NavLink></li>
                                <li><NavLink to="/department" >Departments</NavLink></li> */}
                                <li><NavLink to="/servicemange" >Services</NavLink></li>
                                <li><NavLink to="/doctors" >Doctors</NavLink></li>
                                <li className="dropdown"><a href="#"><span>More Pages</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                                    <ul>
                                        <li><NavLink to="/departmentdetails" >Department Details</NavLink></li>
                                        <li><NavLink to="/servicedetails" >Service Details</NavLink></li>
                                        <li><NavLink to="/appointment" >Appointment</NavLink></li>
                                       
                                    </ul>
                                </li>
                              
                                {/* <li><NavLink to="/contact" >Contact</NavLink></li> */}
                            </ul>
                            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
                        </nav>
                    </div>
                </div>
            </header>

        </div>
    </div>
  )
}

export default AHeader