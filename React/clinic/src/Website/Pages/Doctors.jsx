import React from 'react'
import Header from '../Coman/Header'
import PageHead from '../Coman/PageHead'
import Footer from '../Coman/Footer'

function Doctors() {
    return (
        <div>
            <Header />
            <PageHead title="Doctors" list="Doctors" />
            <main className="main">
               
                {/* Doctors Section */}
                <section id="doctors" className="doctors section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row gy-4">
                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={100}>
                                <div className="doctor-card">
                                    <div className="doctor-image">
                                        <img src="assets/img/health/staff-1.webp" alt="Dr. Marcus Johnson" className="img-fluid" />
                                        <div className="doctor-overlay">
                                            <div className="social-links">
                                                <a href="#!"><i className="bi bi-linkedin" /></a>
                                                <a href="#!"><i className="bi bi-envelope" /></a>
                                                <a href="#!"><i className="bi bi-phone" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="doctor-content">
                                        <h4>Dr. Marcus Johnson</h4>
                                        <span className="specialty">Cardiologist</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua.</p>
                                        <div className="doctor-meta">
                                            <div className="experience">
                                                <i className="bi bi-award" />
                                                <span>15+ Years Experience</span>
                                            </div>
                                            <div className="department">
                                                <i className="bi bi-building" />
                                                <span>Cardiology Dept.</span>
                                            </div>
                                        </div>
                                        <a href="appointment.html" className="btn-appointment">Book Appointment</a>
                                    </div>
                                </div>
                            </div>{/* End Doctor Card */}
                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                                <div className="doctor-card">
                                    <div className="doctor-image">
                                        <img src="assets/img/health/staff-2.webp" alt="Dr. Sarah Williams" className="img-fluid" />
                                        <div className="doctor-overlay">
                                            <div className="social-links">
                                                <a href="#!"><i className="bi bi-linkedin" /></a>
                                                <a href="#!"><i className="bi bi-envelope" /></a>
                                                <a href="#!"><i className="bi bi-phone" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="doctor-content">
                                        <h4>Dr. Sarah Williams</h4>
                                        <span className="specialty">Neurologist</span>
                                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat.</p>
                                        <div className="doctor-meta">
                                            <div className="experience">
                                                <i className="bi bi-award" />
                                                <span>12+ Years Experience</span>
                                            </div>
                                            <div className="department">
                                                <i className="bi bi-building" />
                                                <span>Neurology Dept.</span>
                                            </div>
                                        </div>
                                        <a href="appointment.html" className="btn-appointment">Book Appointment</a>
                                    </div>
                                </div>
                            </div>{/* End Doctor Card */}
                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={300}>
                                <div className="doctor-card">
                                    <div className="doctor-image">
                                        <img src="assets/img/health/staff-3.webp" alt="Dr. Michael Chen" className="img-fluid" />
                                        <div className="doctor-overlay">
                                            <div className="social-links">
                                                <a href="#!"><i className="bi bi-linkedin" /></a>
                                                <a href="#!"><i className="bi bi-envelope" /></a>
                                                <a href="#!"><i className="bi bi-phone" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="doctor-content">
                                        <h4>Dr. Michael Chen</h4>
                                        <span className="specialty">Orthopedic Surgeon</span>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur.</p>
                                        <div className="doctor-meta">
                                            <div className="experience">
                                                <i className="bi bi-award" />
                                                <span>18+ Years Experience</span>
                                            </div>
                                            <div className="department">
                                                <i className="bi bi-building" />
                                                <span>Orthopedics Dept.</span>
                                            </div>
                                        </div>
                                        <a href="appointment.html" className="btn-appointment">Book Appointment</a>
                                    </div>
                                </div>
                            </div>{/* End Doctor Card */}
                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={400}>
                                <div className="doctor-card">
                                    <div className="doctor-image">
                                        <img src="assets/img/health/staff-4.webp" alt="Dr. Emily Rodriguez" className="img-fluid" />
                                        <div className="doctor-overlay">
                                            <div className="social-links">
                                                <a href="#!"><i className="bi bi-linkedin" /></a>
                                                <a href="#!"><i className="bi bi-envelope" /></a>
                                                <a href="#!"><i className="bi bi-phone" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="doctor-content">
                                        <h4>Dr. Emily Rodriguez</h4>
                                        <span className="specialty">Pediatrician</span>
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                            laborum.</p>
                                        <div className="doctor-meta">
                                            <div className="experience">
                                                <i className="bi bi-award" />
                                                <span>10+ Years Experience</span>
                                            </div>
                                            <div className="department">
                                                <i className="bi bi-building" />
                                                <span>Pediatrics Dept.</span>
                                            </div>
                                        </div>
                                        <a href="appointment.html" className="btn-appointment">Book Appointment</a>
                                    </div>
                                </div>
                            </div>{/* End Doctor Card */}
                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={500}>
                                <div className="doctor-card">
                                    <div className="doctor-image">
                                        <img src="assets/img/health/staff-5.webp" alt="Dr. David Thompson" className="img-fluid" />
                                        <div className="doctor-overlay">
                                            <div className="social-links">
                                                <a href="#!"><i className="bi bi-linkedin" /></a>
                                                <a href="#!"><i className="bi bi-envelope" /></a>
                                                <a href="#!"><i className="bi bi-phone" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="doctor-content">
                                        <h4>Dr. David Thompson</h4>
                                        <span className="specialty">Dermatologist</span>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                                        <div className="doctor-meta">
                                            <div className="experience">
                                                <i className="bi bi-award" />
                                                <span>14+ Years Experience</span>
                                            </div>
                                            <div className="department">
                                                <i className="bi bi-building" />
                                                <span>Dermatology Dept.</span>
                                            </div>
                                        </div>
                                        <a href="appointment.html" className="btn-appointment">Book Appointment</a>
                                    </div>
                                </div>
                            </div>{/* End Doctor Card */}
                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={100}>
                                <div className="doctor-card">
                                    <div className="doctor-image">
                                        <img src="assets/img/health/staff-6.webp" alt="Dr. Lisa Anderson" className="img-fluid" />
                                        <div className="doctor-overlay">
                                            <div className="social-links">
                                                <a href="#!"><i className="bi bi-linkedin" /></a>
                                                <a href="#!"><i className="bi bi-envelope" /></a>
                                                <a href="#!"><i className="bi bi-phone" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="doctor-content">
                                        <h4>Dr. Lisa Anderson</h4>
                                        <span className="specialty">Oncologist</span>
                                        <p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                                            sunt.</p>
                                        <div className="doctor-meta">
                                            <div className="experience">
                                                <i className="bi bi-award" />
                                                <span>16+ Years Experience</span>
                                            </div>
                                            <div className="department">
                                                <i className="bi bi-building" />
                                                <span>Oncology Dept.</span>
                                            </div>
                                        </div>
                                        <a href="appointment.html" className="btn-appointment">Book Appointment</a>
                                    </div>
                                </div>
                            </div>{/* End Doctor Card */}
                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                                <div className="doctor-card">
                                    <div className="doctor-image">
                                        <img src="assets/img/health/staff-7.webp" alt="Dr. Robert Martinez" className="img-fluid" />
                                        <div className="doctor-overlay">
                                            <div className="social-links">
                                                <a href="#!"><i className="bi bi-linkedin" /></a>
                                                <a href="#!"><i className="bi bi-envelope" /></a>
                                                <a href="#!"><i className="bi bi-phone" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="doctor-content">
                                        <h4>Dr. Robert Martinez</h4>
                                        <span className="specialty">Emergency Medicine</span>
                                        <p>Explicabo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                            consequuntur.</p>
                                        <div className="doctor-meta">
                                            <div className="experience">
                                                <i className="bi bi-award" />
                                                <span>11+ Years Experience</span>
                                            </div>
                                            <div className="department">
                                                <i className="bi bi-building" />
                                                <span>Emergency Dept.</span>
                                            </div>
                                        </div>
                                        <a href="appointment.html" className="btn-appointment">Book Appointment</a>
                                    </div>
                                </div>
                            </div>{/* End Doctor Card */}
                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={300}>
                                <div className="doctor-card">
                                    <div className="doctor-image">
                                        <img src="assets/img/health/staff-8.webp" alt="Dr. Jennifer Lee" className="img-fluid" />
                                        <div className="doctor-overlay">
                                            <div className="social-links">
                                                <a href="#!"><i className="bi bi-linkedin" /></a>
                                                <a href="#!"><i className="bi bi-envelope" /></a>
                                                <a href="#!"><i className="bi bi-phone" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="doctor-content">
                                        <h4>Dr. Jennifer Lee</h4>
                                        <span className="specialty">Radiologist</span>
                                        <p>Magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est qui dolorem.</p>
                                        <div className="doctor-meta">
                                            <div className="experience">
                                                <i className="bi bi-award" />
                                                <span>13+ Years Experience</span>
                                            </div>
                                            <div className="department">
                                                <i className="bi bi-building" />
                                                <span>Radiology Dept.</span>
                                            </div>
                                        </div>
                                        <a href="appointment.html" className="btn-appointment">Book Appointment</a>
                                    </div>
                                </div>
                            </div>{/* End Doctor Card */}
                        </div>
                    </div>
                </section>{/* /Doctors Section */}
            </main>
            <Footer />

        </div>
    )
}

export default Doctors