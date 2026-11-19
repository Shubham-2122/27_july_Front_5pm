import React from 'react'
import Header from '../Coman/Header'
import PageHead from '../Coman/PageHead'
import Footer from '../Coman/Footer'

function ServiceDetails() {
    return (
        <div>
            <Header />
            <PageHead title="Service Details" list="Service Details" />
            <main className="main">
              
                {/* Service Details 2 Section */}
                <section id="service-details-2" className="service-details-2 section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center mb-5" data-aos="fade-up" data-aos-delay={150}>
                                <div className="service-header">
                                    <div className="service-category">
                                        <span>Advanced Neurology</span>
                                    </div>
                                    <h2>Comprehensive Neurological Care Services</h2>
                                    <p className="lead">Expert diagnosis and treatment for complex neurological conditions using state-of-the-art
                                        technology</p>
                                </div>
                            </div>
                        </div>
                        <div className="row gy-4 align-items-center">
                            <div className="col-lg-5" data-aos="fade-right" data-aos-delay={200}>
                                <div className="service-details">
                                    <div className="detail-item">
                                        <div className="icon-wrapper">
                                            <i className="bi bi-activity" />
                                        </div>
                                        <div className="content">
                                            <h4>Neurological Assessment</h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
                                                totam rem aperiam.</p>
                                        </div>
                                    </div>
                                    <div className="detail-item">
                                        <div className="icon-wrapper">
                                            <i className="bi bi-diagram-2" />
                                        </div>
                                        <div className="content">
                                            <h4>Brain Imaging &amp; Diagnosis</h4>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                                                deleniti.</p>
                                        </div>
                                    </div>
                                    <div className="detail-item">
                                        <div className="icon-wrapper">
                                            <i className="bi bi-prescription2" />
                                        </div>
                                        <div className="content">
                                            <h4>Treatment Planning</h4>
                                            <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim
                                                laborum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7" data-aos="fade-left" data-aos-delay={300}>
                                <div className="service-visual">
                                    <img src="assets/img/health/neurology-2.webp" alt="Neurology Services" className="img-fluid" />
                                    <div className="visual-overlay">
                                        <div className="stats-card">
                                            <div className="stat">
                                                <span className="number">95%</span>
                                                <span className="label">Success Rate</span>
                                            </div>
                                            <div className="stat">
                                                <span className="number">24/7</span>
                                                <span className="label">Emergency Care</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row gy-4 mt-5">
                            <div className="col-12" data-aos="fade-up" data-aos-delay={100}>
                                <div className="service-overview">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <h3>Why Choose Our Neurology Department</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore
                                                et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat.</p>
                                            <div className="features-grid">
                                                <div className="feature">
                                                    <i className="bi bi-award" />
                                                    <span>Board Certified Specialists</span>
                                                </div>
                                                <div className="feature">
                                                    <i className="bi bi-clock-history" />
                                                    <span>Same Day Appointments</span>
                                                </div>
                                                <div className="feature">
                                                    <i className="bi bi-shield-plus" />
                                                    <span>Advanced Treatment Options</span>
                                                </div>
                                                <div className="feature">
                                                    <i className="bi bi-heart-pulse" />
                                                    <span>Patient-Centered Care</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="treatment-areas">
                                                <h4>Conditions We Treat</h4>
                                                <div className="condition-tags">
                                                    <span className="tag">Stroke Recovery</span>
                                                    <span className="tag">Epilepsy Management</span>
                                                    <span className="tag">Memory Disorders</span>
                                                    <span className="tag">Headache Disorders</span>
                                                    <span className="tag">Movement Disorders</span>
                                                    <span className="tag">Peripheral Neuropathy</span>
                                                    <span className="tag">Multiple Sclerosis</span>
                                                    <span className="tag">Parkinson's Disease</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row gy-4 mt-5">
                            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={100}>
                                <div className="action-card primary">
                                    <div className="card-header">
                                        <i className="bi bi-calendar-check" />
                                        <h4>Schedule Consultation</h4>
                                    </div>
                                    <p>Book your neurological evaluation with our expert team</p>
                                    <div className="card-footer">
                                        <a href="#!" className="btn-action">Book Now</a>
                                        <span className="availability">Next available: Tomorrow</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={200}>
                                <div className="action-card secondary">
                                    <div className="card-header">
                                        <i className="bi bi-telephone" />
                                        <h4>Emergency Consultation</h4>
                                    </div>
                                    <p>24/7 neurological emergency support and rapid response</p>
                                    <div className="card-footer">
                                        <a href="tel:+15551234567" className="btn-action">Call Now</a>
                                        <span className="availability">+1 (555) 123-4567</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={300}>
                                <div className="action-card tertiary">
                                    <div className="card-header">
                                        <i className="bi bi-file-text" />
                                        <h4>Get Second Opinion</h4>
                                    </div>
                                    <p>Expert review of existing diagnoses and treatment plans</p>
                                    <div className="card-footer">
                                        <a href="#!" className="btn-action">Request Review</a>
                                        <span className="availability">Response within 48h</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Service Details 2 Section */}
            </main>
            <Footer />

        </div>
    )
}

export default ServiceDetails