import React from 'react'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer'
import PageHead from '../Coman/PageHead'

function Services() {
    return (
        <div>
            <Header />
            <PageHead list="Services" title="Service" />
            <main className="main">
               
                {/* Services Section */}
                <section id="services" className="services section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row gy-4">
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                                <div className="service-item">
                                    <div className="service-image">
                                        <img src="assets/img/health/cardiology-2.webp" alt="Cardiology Services" className="img-fluid" />
                                        <div className="service-overlay">
                                            <i className="fas fa-heartbeat" />
                                        </div>
                                    </div>
                                    <div className="service-content">
                                        <h3>Cardiology</h3>
                                        <p>Comprehensive heart care with advanced diagnostic tools and treatment options for cardiovascular
                                            conditions.</p>
                                        <div className="service-features">
                                            <span className="feature-item"><i className="fas fa-check" /> ECG Testing</span>
                                            <span className="feature-item"><i className="fas fa-check" /> Heart Surgery</span>
                                        </div>
                                        <a href="service-details.html" className="service-btn">
                                            <span>Learn More</span>
                                            <i className="fas fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>{/* End Service Item */}
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={250}>
                                <div className="service-item">
                                    <div className="service-image">
                                        <img src="assets/img/health/neurology-3.webp" alt="Neurology Services" className="img-fluid" />
                                        <div className="service-overlay">
                                            <i className="fas fa-brain" />
                                        </div>
                                    </div>
                                    <div className="service-content">
                                        <h3>Neurology</h3>
                                        <p>Expert neurological care for brain and nervous system disorders with state-of-the-art imaging
                                            technology.</p>
                                        <div className="service-features">
                                            <span className="feature-item"><i className="fas fa-check" /> MRI Scans</span>
                                            <span className="feature-item"><i className="fas fa-check" /> Stroke Care</span>
                                        </div>
                                        <a href="service-details.html" className="service-btn">
                                            <span>Learn More</span>
                                            <i className="fas fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>{/* End Service Item */}
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
                                <div className="service-item">
                                    <div className="service-image">
                                        <img src="assets/img/health/orthopedics-1.webp" alt="Orthopedics Services" className="img-fluid" />
                                        <div className="service-overlay">
                                            <i className="fas fa-bone" />
                                        </div>
                                    </div>
                                    <div className="service-content">
                                        <h3>Orthopedics</h3>
                                        <p>Specialized bone and joint treatment including sports medicine and reconstructive surgery procedures.
                                        </p>
                                        <div className="service-features">
                                            <span className="feature-item"><i className="fas fa-check" /> Joint Replacement</span>
                                            <span className="feature-item"><i className="fas fa-check" /> Sports Medicine</span>
                                        </div>
                                        <a href="service-details.html" className="service-btn">
                                            <span>Learn More</span>
                                            <i className="fas fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>{/* End Service Item */}
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={350}>
                                <div className="service-item">
                                    <div className="service-image">
                                        <img src="assets/img/health/pediatrics-4.webp" alt="Pediatrics Services" className="img-fluid" />
                                        <div className="service-overlay">
                                            <i className="fas fa-child" />
                                        </div>
                                    </div>
                                    <div className="service-content">
                                        <h3>Pediatrics</h3>
                                        <p>Dedicated healthcare for children from infancy through adolescence with specialized treatment
                                            protocols.</p>
                                        <div className="service-features">
                                            <span className="feature-item"><i className="fas fa-check" /> Well-Child Visits</span>
                                            <span className="feature-item"><i className="fas fa-check" /> Immunizations</span>
                                        </div>
                                        <a href="service-details.html" className="service-btn">
                                            <span>Learn More</span>
                                            <i className="fas fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>{/* End Service Item */}
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
                                <div className="service-item">
                                    <div className="service-image">
                                        <img src="assets/img/health/emergency-2.webp" alt="Emergency Services" className="img-fluid" />
                                        <div className="service-overlay">
                                            <i className="fas fa-ambulance" />
                                        </div>
                                    </div>
                                    <div className="service-content">
                                        <h3>Emergency Care</h3>
                                        <p>24/7 emergency medical services with rapid response teams and critical care capabilities.</p>
                                        <div className="service-features">
                                            <span className="feature-item"><i className="fas fa-check" /> Trauma Center</span>
                                            <span className="feature-item"><i className="fas fa-check" /> Critical Care</span>
                                        </div>
                                        <a href="service-details.html" className="service-btn">
                                            <span>Learn More</span>
                                            <i className="fas fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>{/* End Service Item */}
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={450}>
                                <div className="service-item">
                                    <div className="service-image">
                                        <img src="assets/img/health/laboratory-3.webp" alt="Laboratory Services" className="img-fluid" />
                                        <div className="service-overlay">
                                            <i className="fas fa-microscope" />
                                        </div>
                                    </div>
                                    <div className="service-content">
                                        <h3>Laboratory Testing</h3>
                                        <p>Advanced diagnostic laboratory services with comprehensive testing panels and rapid result delivery.
                                        </p>
                                        <div className="service-features">
                                            <span className="feature-item"><i className="fas fa-check" /> Blood Tests</span>
                                            <span className="feature-item"><i className="fas fa-check" /> Pathology</span>
                                        </div>
                                        <a href="service-details.html" className="service-btn">
                                            <span>Learn More</span>
                                            <i className="fas fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>{/* End Service Item */}
                        </div>
                    </div>
                </section>{/* /Services Section */}
            </main>
            <Footer />

        </div>
    )
}

export default Services