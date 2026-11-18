import React from 'react'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer'
import PageHead from '../Coman/PageHead'

function About() {
    return (
        <div>
            <Header />
            <main className="main">
                
                <PageHead title="About" list="About" />

                {/* About Section */}
                <section id="about" className="about section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row align-items-center">
                            <div className="col-lg-6" data-aos="fade-right" data-aos-delay={100}>
                                <div className="about-content">
                                    <h2>Compassionate Care for Every Family</h2>
                                    <p className="lead">For over two decades, we have been dedicated to providing exceptional healthcare services
                                        to our community. Our commitment goes beyond medical treatment—we believe in building lasting
                                        relationships with our patients and their families.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                        ex ea commodo consequat.</p>
                                    <div className="stats-grid">
                                        <div className="stat-item">
                                            <span className="stat-number" data-purecounter-start={0} data-purecounter-end={15000} data-purecounter-duration={2}>15000</span>
                                            <span className="stat-label">Patients Treated</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-number" data-purecounter-start={0} data-purecounter-end={25} data-purecounter-duration={2}>25</span>
                                            <span className="stat-label">Years Experience</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-number" data-purecounter-start={0} data-purecounter-end={50} data-purecounter-duration={2}>50</span>
                                            <span className="stat-label">Medical Specialists</span>
                                        </div>
                                    </div>{/* End Stats Grid */}
                                </div>{/* End About Content */}
                            </div>
                            <div className="col-lg-6" data-aos="fade-left" data-aos-delay={200}>
                                <div className="image-wrapper">
                                    <img src="assets/img/health/facilities-6.webp" className="img-fluid main-image" alt="Healthcare facility" />
                                    <div className="floating-image" data-aos="zoom-in" data-aos-delay={400}>
                                        <img src="assets/img/health/staff-8.webp" className="img-fluid" alt="Medical team" />
                                    </div>
                                </div>{/* End Image Wrapper */}
                            </div>
                        </div>
                        <div className="values-section" data-aos="fade-up" data-aos-delay={300}>
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h3>Our Core Values</h3>
                                    <p className="section-description">These principles guide everything we do in our commitment to exceptional
                                        healthcare</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={100}>
                                    <div className="value-item">
                                        <div className="value-icon">
                                            <i className="bi bi-heart-pulse" />
                                        </div>
                                        <h4>Compassion</h4>
                                        <p>Providing care with empathy and understanding for every patient's unique needs and circumstances.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="value-item">
                                        <div className="value-icon">
                                            <i className="bi bi-shield-check" />
                                        </div>
                                        <h4>Excellence</h4>
                                        <p>Maintaining the highest standards of medical care through continuous learning and innovation.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={300}>
                                    <div className="value-item">
                                        <div className="value-icon">
                                            <i className="bi bi-people" />
                                        </div>
                                        <h4>Integrity</h4>
                                        <p>Building trust through honest communication and ethical practices in all our interactions.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={400}>
                                    <div className="value-item">
                                        <div className="value-icon">
                                            <i className="bi bi-lightbulb" />
                                        </div>
                                        <h4>Innovation</h4>
                                        <p>Embracing cutting-edge technology and treatments to improve patient outcomes.</p>
                                    </div>
                                </div>
                            </div>{/* End Values Row */}
                        </div>{/* End Values Section */}
                        <div className="certifications-section" data-aos="fade-up" data-aos-delay={400}>
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h3>Accreditations &amp; Certifications</h3>
                                    <p className="section-description">Recognized by leading healthcare organizations for our commitment to
                                        quality care</p>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6" data-aos="zoom-in" data-aos-delay={100}>
                                    <div className="certification-item">
                                        <img src="assets/img/clients/clients-1.webp" className="img-fluid" alt="Healthcare certification" />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6" data-aos="zoom-in" data-aos-delay={200}>
                                    <div className="certification-item">
                                        <img src="assets/img/clients/clients-2.webp" className="img-fluid" alt="Medical accreditation" />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6" data-aos="zoom-in" data-aos-delay={300}>
                                    <div className="certification-item">
                                        <img src="assets/img/clients/clients-3.webp" className="img-fluid" alt="Healthcare certification" />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6" data-aos="zoom-in" data-aos-delay={400}>
                                    <div className="certification-item">
                                        <img src="assets/img/clients/clients-4.webp" className="img-fluid" alt="Medical certification" />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6" data-aos="zoom-in" data-aos-delay={500}>
                                    <div className="certification-item">
                                        <img src="assets/img/clients/clients-5.webp" className="img-fluid" alt="Healthcare accreditation" />
                                    </div>
                                </div>
                            </div>{/* End Certifications Row */}
                        </div>{/* End Certifications Section */}
                    </div>
                </section>{/* /About Section */}
            </main>
            <Footer />

        </div>
    )
}

export default About