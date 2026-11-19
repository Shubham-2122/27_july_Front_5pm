import React from 'react'
import Header from '../Coman/Header'
import PageHead from '../Coman/PageHead'
import Footer from '../Coman/Footer'

function DepartmentDetails() {
    return (
        <div>
            <Header />
            <PageHead title="Department Details" list="Department Details" />
            <main className="main">
                
                {/* Department Details Section */}
                <section id="department-details" className="department-details section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row">
                            <div className="col-xl-6 col-lg-7">
                                <div className="department-hero" data-aos="fade-right" data-aos-delay={200}>
                                    <div className="badge-wrap">
                                        <span className="specialty-badge">Neurology</span>
                                    </div>
                                    <h1 className="department-title">Advanced Neurological Care</h1>
                                    <p className="department-intro">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                                        cubilia curae. Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
                                    <div className="key-highlights">
                                        <div className="highlight-item">
                                            <span className="highlight-number">24/7</span>
                                            <span className="highlight-text">Emergency Neurology</span>
                                        </div>
                                        <div className="highlight-item">
                                            <span className="highlight-number">15+</span>
                                            <span className="highlight-text">Specialist Neurologists</span>
                                        </div>
                                        <div className="highlight-item">
                                            <span className="highlight-number">95%</span>
                                            <span className="highlight-text">Patient Satisfaction</span>
                                        </div>
                                    </div>
                                    <div className="action-group">
                                        <a href="appointment.html" className="btn-primary">Schedule Consultation</a>
                                        <a href="services.html" className="btn-secondary">
                                            <span>View All Services</span>
                                            <i className="bi bi-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-5">
                                <div className="department-visual" data-aos="fade-left" data-aos-delay={300}>
                                    <div className="image-container">
                                        <img src="assets/img/health/neurology-2.webp" alt="Neurology Department" className="img-fluid primary-image" />
                                        <div className="floating-card" data-aos="zoom-in" data-aos-delay={500}>
                                            <div className="card-icon">
                                                <i className="bi bi-brain" />
                                            </div>
                                            <div className="card-content">
                                                <h4>Brain Health Experts</h4>
                                                <p>Comprehensive neurological assessment and treatment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="services-overview" data-aos="fade-up" data-aos-delay={400}>
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="overview-header">
                                        <h3>Our Neurological Services</h3>
                                        <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
                                            tincidunt nibh pulvinar a.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row gy-4 services-grid">
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={500}>
                                    <div className="service-item">
                                        <div className="service-icon">
                                            <i className="bi bi-lightning-charge" />
                                        </div>
                                        <h4>Epilepsy Treatment</h4>
                                        <p>Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={550}>
                                    <div className="service-item">
                                        <div className="service-icon">
                                            <i className="bi bi-search" />
                                        </div>
                                        <h4>Diagnostic Imaging</h4>
                                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={600}>
                                    <div className="service-item">
                                        <div className="service-icon">
                                            <i className="bi bi-heart-pulse" />
                                        </div>
                                        <h4>Stroke Prevention</h4>
                                        <p>Donec sollicitudin molestie malesuada. Proin eget tortor risus cras ultricies ligula.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={650}>
                                    <div className="service-item">
                                        <div className="service-icon">
                                            <i className="bi bi-person-gear" />
                                        </div>
                                        <h4>Movement Disorders</h4>
                                        <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={700}>
                                    <div className="service-item">
                                        <div className="service-icon">
                                            <i className="bi bi-moon" />
                                        </div>
                                        <h4>Sleep Disorders</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={750}>
                                    <div className="service-item">
                                        <div className="service-icon">
                                            <i className="bi bi-shield-check" />
                                        </div>
                                        <h4>Memory Care</h4>
                                        <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a vestibulum ac diam.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="expert-care-section" data-aos="fade-up" data-aos-delay={800}>
                            <div className="row align-items-center">
                                <div className="col-lg-5" data-aos="fade-right" data-aos-delay={900}>
                                    <div className="expert-image">
                                        <img src="assets/img/health/neurology-4.webp" alt="Neurological Expert" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-7" data-aos="fade-left" data-aos-delay={900}>
                                    <div className="expert-content">
                                        <h3>Leading Neurological Expertise</h3>
                                        <p className="lead">Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Sed porttitor
                                            lectus nibh donec rutrum congue leo eget malesuada.</p>
                                        <div className="expertise-list">
                                            <div className="expertise-item">
                                                <i className="bi bi-check2" />
                                                <span>Board-certified neurologists and neurosurgeons</span>
                                            </div>
                                            <div className="expertise-item">
                                                <i className="bi bi-check2" />
                                                <span>State-of-the-art diagnostic equipment and facilities</span>
                                            </div>
                                            <div className="expertise-item">
                                                <i className="bi bi-check2" />
                                                <span>Comprehensive care from diagnosis to rehabilitation</span>
                                            </div>
                                            <div className="expertise-item">
                                                <i className="bi bi-check2" />
                                                <span>Personalized treatment plans for every patient</span>
                                            </div>
                                        </div>
                                        <div className="contact-info">
                                            <div className="contact-item">
                                                <i className="bi bi-telephone" />
                                                <div>
                                                    <span className="contact-label">Emergency Neurology</span>
                                                    <span className="contact-value">+1 (555) 234-5678</span>
                                                </div>
                                            </div>
                                            <div className="contact-item">
                                                <i className="bi bi-calendar-check" />
                                                <div>
                                                    <span className="contact-label">Appointments</span>
                                                    <span className="contact-value">Mon - Fri, 8:00 AM - 6:00 PM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Department Details Section */}
            </main>

            <Footer />

        </div>
    )
}

export default DepartmentDetails