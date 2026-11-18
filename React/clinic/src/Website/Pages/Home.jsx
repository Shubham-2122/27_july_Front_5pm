import React from 'react'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer'

function Home() {
    return (
        <div>
            <Header />
            <main className="main">
                {/* Hero Section */}
                <section id="hero" className="hero section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="hero-content">
                                    <div className="trust-badges mb-4" data-aos="fade-right" data-aos-delay={200}>
                                        <div className="badge-item">
                                            <i className="bi bi-shield-check" />
                                            <span>Accredited</span>
                                        </div>
                                        <div className="badge-item">
                                            <i className="bi bi-clock" />
                                            <span>24/7 Emergency</span>
                                        </div>
                                        <div className="badge-item">
                                            <i className="bi bi-star-fill" />
                                            <span>4.9/5 Rating</span>
                                        </div>
                                    </div>
                                    <h1 data-aos="fade-right" data-aos-delay={300}>
                                        Excellence in <span className="highlight">Healthcare</span> With Compassionate Care
                                    </h1>
                                    <p className="hero-description" data-aos="fade-right" data-aos-delay={400}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                                    </p>
                                    <div className="hero-stats mb-4" data-aos="fade-right" data-aos-delay={500}>
                                        <div className="stat-item">
                                            <h3><span data-purecounter-start={0} data-purecounter-end={15} data-purecounter-duration={2} className="purecounter" />+</h3>
                                            <p>Years Experience</p>
                                        </div>
                                        <div className="stat-item">
                                            <h3><span data-purecounter-start={0} data-purecounter-end={5000} data-purecounter-duration={2} className="purecounter" />+</h3>
                                            <p>Patients Treated</p>
                                        </div>
                                        <div className="stat-item">
                                            <h3><span data-purecounter-start={0} data-purecounter-end={50} data-purecounter-duration={2} className="purecounter" />+</h3>
                                            <p>Medical Experts</p>
                                        </div>
                                    </div>
                                    <div className="hero-actions" data-aos="fade-right" data-aos-delay={600}>
                                        <a href="appointment.html" className="btn btn-primary">Book Appointment</a>
                                        <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="btn btn-outline glightbox">
                                            <i className="bi bi-play-circle me-2" />
                                            Watch Our Story
                                        </a>
                                    </div>
                                    <div className="emergency-contact" data-aos="fade-right" data-aos-delay={700}>
                                        <div className="emergency-icon">
                                            <i className="bi bi-telephone-fill" />
                                        </div>
                                        <div className="emergency-info">
                                            <small>Emergency Hotline</small>
                                            <strong>+1 (555) 911-2468</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="hero-visual" data-aos="fade-left" data-aos-delay={400}>
                                    <div className="main-image">
                                        <img src="assets/img/health/staff-10.webp" alt="Modern Healthcare Facility" className="img-fluid" />
                                        <div className="floating-card appointment-card">
                                            <div className="card-icon">
                                                <i className="bi bi-calendar-check" />
                                            </div>
                                            <div className="card-content">
                                                <h6>Next Available</h6>
                                                <p>Today 2:30 PM</p>
                                                <small>Dr. Sarah Johnson</small>
                                            </div>
                                        </div>
                                        <div className="floating-card rating-card">
                                            <div className="card-content">
                                                <div className="rating-stars">
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                </div>
                                                <h6>4.9/5</h6>
                                                <small>1,234 Reviews</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="background-elements">
                                        <div className="element element-1" />
                                        <div className="element element-2" />
                                        <div className="element element-3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Hero Section */}
                {/* Home About Section */}
                <section id="home-about" className="home-about section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right" data-aos-delay={200}>
                                <div className="about-content">
                                    <h2 className="section-heading">Compassionate Care, Advanced Medicine</h2>
                                    <p className="lead-text">For over two decades, we've been dedicated to providing exceptional healthcare that
                                        combines cutting-edge medical technology with the personal touch our patients deserve.</p>
                                    <p>Our multidisciplinary team of specialists works collaboratively to ensure every patient receives
                                        comprehensive care tailored to their unique needs. From preventive services to complex procedures, we
                                        maintain the highest standards of medical excellence while fostering an environment of trust and
                                        healing.</p>
                                    <div className="stats-grid">
                                        <div className="stat-item">
                                            <div className="stat-number purecounter" data-purecounter-start={0} data-purecounter-end={15000} data-purecounter-duration={1} />
                                            <div className="stat-label">Patients Served</div>
                                        </div>
                                        <div className="stat-item">
                                            <div className="stat-number purecounter" data-purecounter-start={0} data-purecounter-end={25} data-purecounter-duration={1} />
                                            <div className="stat-label">Years of Excellence</div>
                                        </div>
                                        <div className="stat-item">
                                            <div className="stat-number purecounter" data-purecounter-start={0} data-purecounter-end={50} data-purecounter-duration={1} />
                                            <div className="stat-label">Medical Specialists</div>
                                        </div>
                                    </div>
                                    <div className="cta-section">
                                        <a href="about.html" className="btn-primary">Learn More About Us</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6" data-aos="fade-left" data-aos-delay={300}>
                                <div className="about-visual">
                                    <div className="main-image">
                                        <img src="assets/img/health/facilities-9.webp" alt="Modern medical facility" className="img-fluid" />
                                    </div>
                                    <div className="floating-card">
                                        <div className="card-content">
                                            <div className="icon">
                                                <i className="bi bi-heart-pulse" />
                                            </div>
                                            <div className="card-text">
                                                <h4>24/7 Emergency Care</h4>
                                                <p>Always here when you need us most</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="experience-badge">
                                        <div className="badge-content">
                                            <span className="years">25+</span>
                                            <span className="text">Years of Trusted Care</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Home About Section */}
                {/* Featured Departments Section */}
                <section id="featured-departments" className="featured-departments section">
                    {/* Section Title */}
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Featured Departments</h2>
                        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>{/* End Section Title */}
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row g-5">
                            <div className="col-lg-6" data-aos="zoom-in" data-aos-delay={100}>
                                <div className="specialty-card">
                                    <div className="specialty-content">
                                        <div className="specialty-meta">
                                            <span className="specialty-label">Specialized Care</span>
                                        </div>
                                        <h3>Cardiovascular Medicine</h3>
                                        <p>Advanced diagnostic imaging and interventional procedures for comprehensive heart health management
                                            with personalized treatment protocols.</p>
                                        <div className="specialty-features">
                                            <span><i className="bi bi-check-circle-fill" />24/7 Emergency Cardiac Care</span>
                                            <span><i className="bi bi-check-circle-fill" />Minimally Invasive Procedures</span>
                                        </div>
                                        <a href="department-details.html" className="specialty-link">
                                            Explore Cardiology <i className="bi bi-arrow-right" />
                                        </a>
                                    </div>
                                    <div className="specialty-visual">
                                        <img src="assets/img/health/cardiology-1.webp" alt="Cardiovascular Medicine" className="img-fluid" />
                                        <div className="visual-overlay">
                                            <i className="bi bi-heart-pulse" />
                                        </div>
                                    </div>
                                </div>
                            </div>{/* End Specialty Card */}
                            <div className="col-lg-6" data-aos="zoom-in" data-aos-delay={200}>
                                <div className="specialty-card">
                                    <div className="specialty-content">
                                        <div className="specialty-meta">
                                            <span className="specialty-label">Expert Care</span>
                                        </div>
                                        <h3>Neurological Sciences</h3>
                                        <p>Cutting-edge neuroimaging and neurosurgical expertise for complex brain and spinal cord conditions
                                            with innovative treatment approaches.</p>
                                        <div className="specialty-features">
                                            <span><i className="bi bi-check-circle-fill" />Advanced Brain Imaging</span>
                                            <span><i className="bi bi-check-circle-fill" />Robotic Surgery</span>
                                        </div>
                                        <a href="department-details.html" className="specialty-link">
                                            Explore Neurology <i className="bi bi-arrow-right" />
                                        </a>
                                    </div>
                                    <div className="specialty-visual">
                                        <img src="assets/img/health/neurology-4.webp" alt="Neurological Sciences" className="img-fluid" />
                                        <div className="visual-overlay">
                                            <i className="bi bi-cpu" />
                                        </div>
                                    </div>
                                </div>
                            </div>{/* End Specialty Card */}
                            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                                <div className="department-highlight">
                                    <div className="highlight-icon">
                                        <i className="bi bi-shield-plus" />
                                    </div>
                                    <h4>Orthopedic Surgery</h4>
                                    <p>Comprehensive musculoskeletal care utilizing advanced arthroscopic techniques and joint replacement
                                        procedures.</p>
                                    <ul className="highlight-list">
                                        <li>Sports Medicine</li>
                                        <li>Joint Replacement</li>
                                        <li>Spine Surgery</li>
                                    </ul>
                                    <a href="department-details.html" className="highlight-cta">Learn More</a>
                                </div>
                            </div>{/* End Department Highlight */}
                            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={200}>
                                <div className="department-highlight">
                                    <div className="highlight-icon">
                                        <i className="bi bi-people" />
                                    </div>
                                    <h4>Pediatric Care</h4>
                                    <p>Child-centered healthcare services from newborn to adolescence with family-focused treatment
                                        approaches.</p>
                                    <ul className="highlight-list">
                                        <li>Neonatal Intensive Care</li>
                                        <li>Developmental Pediatrics</li>
                                        <li>Pediatric Surgery</li>
                                    </ul>
                                    <a href="department-details.html" className="highlight-cta">Learn More</a>
                                </div>
                            </div>{/* End Department Highlight */}
                            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={300}>
                                <div className="department-highlight">
                                    <div className="highlight-icon">
                                        <i className="bi bi-activity" />
                                    </div>
                                    <h4>Cancer Treatment</h4>
                                    <p>Multidisciplinary oncology program offering personalized cancer care with latest therapeutic
                                        innovations.</p>
                                    <ul className="highlight-list">
                                        <li>Precision Medicine</li>
                                        <li>Immunotherapy</li>
                                        <li>Radiation Oncology</li>
                                    </ul>
                                    <a href="department-details.html" className="highlight-cta">Learn More</a>
                                </div>
                            </div>{/* End Department Highlight */}
                        </div>
                        <div className="emergency-banner" data-aos="fade-up" data-aos-delay={400}>
                            <div className="row align-items-center">
                                <div className="col-lg-8">
                                    <div className="emergency-content">
                                        <h3>Emergency Services Available 24/7</h3>
                                        <p>Our emergency department is equipped with state-of-the-art technology and staffed by board-certified
                                            emergency physicians ready to provide immediate care.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 text-lg-end">
                                    <a href="tel:+15551234567" className="emergency-btn">
                                        <i className="bi bi-telephone-fill" />
                                        Call Emergency: (555) 123-4567
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Featured Departments Section */}
                {/* Featured Services Section */}
                <section id="featured-services" className="featured-services section">
                    {/* Section Title */}
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Featured Services</h2>
                        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>{/* End Section Title */}
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row g-0">
                            <div className="col-lg-8" data-aos="fade-right" data-aos-delay={200}>
                                <div className="featured-service-main">
                                    <div className="service-image-wrapper">
                                        <img src="assets/img/health/consultation-4.webp" alt="Premier Healthcare Services" className="img-fluid" loading="lazy" />
                                        <div className="service-overlay">
                                            <div className="service-badge">
                                                <i className="bi bi-heart-pulse" />
                                                <span>Emergency Care</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="service-details">
                                        <h2>Comprehensive Healthcare Excellence</h2>
                                        <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus
                                            orci luctus et ultrices posuere cubilia curae donec velit neque.</p>
                                        <a href="#!" className="main-cta">Explore Our Services</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4" data-aos="fade-left" data-aos-delay={300}>
                                <div className="services-sidebar">
                                    <div className="service-item" data-aos="fade-up" data-aos-delay={400}>
                                        <div className="service-icon-wrapper">
                                            <i className="bi bi-capsule" />
                                        </div>
                                        <div className="service-info">
                                            <h4>Dermatology Clinic</h4>
                                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                                            <a href="#!" className="service-link">Learn More</a>
                                        </div>
                                    </div>
                                    <div className="service-item" data-aos="fade-up" data-aos-delay={500}>
                                        <div className="service-icon-wrapper">
                                            <i className="bi bi-bandaid" />
                                        </div>
                                        <div className="service-info">
                                            <h4>Surgery Center</h4>
                                            <p>Donec rutrum congue leo eget malesuada curabitur arcu erat accumsan id imperdiet et porttitor at
                                                sem.</p>
                                            <a href="#!" className="service-link">Learn More</a>
                                        </div>
                                    </div>
                                    <div className="service-item" data-aos="fade-up" data-aos-delay={600}>
                                        <div className="service-icon-wrapper">
                                            <i className="bi bi-activity" />
                                        </div>
                                        <div className="service-info">
                                            <h4>Diagnostics Lab</h4>
                                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui cras ultricies ligula sed
                                                magna.</p>
                                            <a href="#!" className="service-link">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="specialties-grid" data-aos="fade-up" data-aos-delay={300}>
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-md-6">
                                    <div className="specialty-card">
                                        <div className="specialty-image">
                                            <img src="assets/img/health/maternal-2.webp" alt="Maternal Care" className="img-fluid" loading="lazy" />
                                        </div>
                                        <div className="specialty-content">
                                            <h5>Maternal Care</h5>
                                            <span>Expert pregnancy &amp; delivery support</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="specialty-card">
                                        <div className="specialty-image">
                                            <img src="assets/img/health/vaccination-3.webp" alt="Vaccination" className="img-fluid" loading="lazy" />
                                        </div>
                                        <div className="specialty-content">
                                            <h5>Vaccination</h5>
                                            <span>Complete immunization programs</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="specialty-card">
                                        <div className="specialty-image">
                                            <img src="assets/img/health/emergency-1.webp" alt="Emergency Care" className="img-fluid" loading="lazy" />
                                        </div>
                                        <div className="specialty-content">
                                            <h5>Emergency Care</h5>
                                            <span>24/7 critical care services</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="specialty-card">
                                        <div className="specialty-image">
                                            <img src="assets/img/health/facilities-6.webp" alt="Advanced Tech" className="img-fluid" loading="lazy" />
                                        </div>
                                        <div className="specialty-content">
                                            <h5>Advanced Technology</h5>
                                            <span>State-of-the-art medical equipment</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Featured Services Section */}
                {/* Find A Doctor Section */}
                <section id="find-a-doctor" className="find-a-doctor section">
                    {/* Section Title */}
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Find A Doctor</h2>
                        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>{/* End Section Title */}
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row justify-content-center mb-5" data-aos="fade-up" data-aos-delay={200}>
                            <div className="col-lg-8 text-center">
                                <div className="search-section">
                                    <h3 className="search-title">Find Your Perfect Healthcare Provider</h3>
                                    <p className="search-subtitle">Search through our comprehensive directory of experienced medical professionals
                                    </p>
                                    <form className="search-form" action="#!" method="#">
                                        <div className="search-input-group">
                                            <div className="input-wrapper">
                                                <i className="bi bi-person" />
                                                <input type="text" className="form-control" name="doctor_name" placeholder="Enter doctor name" />
                                            </div>
                                            <div className="select-wrapper">
                                                <i className="bi bi-heart-pulse" />
                                                <select className="form-select" name="specialty">
                                                    <option value>All Specialties</option>
                                                    <option value="cardiology">Cardiology</option>
                                                    <option value="neurology">Neurology</option>
                                                    <option value="orthopedics">Orthopedics</option>
                                                    <option value="pediatrics">Pediatrics</option>
                                                    <option value="dermatology">Dermatology</option>
                                                    <option value="oncology">Oncology</option>
                                                </select>
                                            </div>
                                            <button type="submit" className="search-btn">
                                                <i className="bi bi-search" />
                                                Find Doctors
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="doctors-grid" data-aos="fade-up" data-aos-delay={300}>
                            <div className="doctor-profile" data-aos="zoom-in" data-aos-delay={100}>
                                <div className="profile-header">
                                    <div className="doctor-avatar">
                                        <img src="assets/img/health/staff-2.webp" alt="Dr. Amanda Foster" className="img-fluid" />
                                        <div className="status-indicator available" />
                                    </div>
                                    <div className="doctor-details">
                                        <h4>Dr. Amanda Foster</h4>
                                        <span className="specialty-tag">Cardiology Specialist</span>
                                        <div className="experience-info">
                                            <i className="bi bi-award" />
                                            <span>14 years experience</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="rating-section">
                                    <div className="stars">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                    </div>
                                    <span className="rating-score">4.9</span>
                                    <span className="review-count">(127 reviews)</span>
                                </div>
                                <div className="action-buttons">
                                    <a href="#!" className="btn-secondary">View Details</a>
                                    <a href="#!" className="btn-primary">Book Now</a>
                                </div>
                            </div>{/* End Doctor Profile */}
                            <div className="doctor-profile" data-aos="zoom-in" data-aos-delay={200}>
                                <div className="profile-header">
                                    <div className="doctor-avatar">
                                        <img src="assets/img/health/staff-6.webp" alt="Dr. Marcus Johnson" className="img-fluid" />
                                        <div className="status-indicator busy" />
                                    </div>
                                    <div className="doctor-details">
                                        <h4>Dr. Marcus Johnson</h4>
                                        <span className="specialty-tag">Neurology Expert</span>
                                        <div className="experience-info">
                                            <i className="bi bi-award" />
                                            <span>16 years experience</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="rating-section">
                                    <div className="stars">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-half" />
                                    </div>
                                    <span className="rating-score">4.8</span>
                                    <span className="review-count">(89 reviews)</span>
                                </div>
                                <div className="action-buttons">
                                    <a href="#!" className="btn-secondary">View Details</a>
                                    <a href="#!" className="btn-primary">Schedule</a>
                                </div>
                            </div>{/* End Doctor Profile */}
                            <div className="doctor-profile" data-aos="zoom-in" data-aos-delay={300}>
                                <div className="profile-header">
                                    <div className="doctor-avatar">
                                        <img src="assets/img/health/staff-4.webp" alt="Dr. Rachel Williams" className="img-fluid" />
                                        <div className="status-indicator available" />
                                    </div>
                                    <div className="doctor-details">
                                        <h4>Dr. Rachel Williams</h4>
                                        <span className="specialty-tag">Pediatrics Care</span>
                                        <div className="experience-info">
                                            <i className="bi bi-award" />
                                            <span>11 years experience</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="rating-section">
                                    <div className="stars">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                    </div>
                                    <span className="rating-score">5.0</span>
                                    <span className="review-count">(203 reviews)</span>
                                </div>
                                <div className="action-buttons">
                                    <a href="#!" className="btn-secondary">View Details</a>
                                    <a href="#!" className="btn-primary">Book Now</a>
                                </div>
                            </div>{/* End Doctor Profile */}
                            <div className="doctor-profile" data-aos="zoom-in" data-aos-delay={400}>
                                <div className="profile-header">
                                    <div className="doctor-avatar">
                                        <img src="assets/img/health/staff-8.webp" alt="Dr. David Chen" className="img-fluid" />
                                        <div className="status-indicator offline" />
                                    </div>
                                    <div className="doctor-details">
                                        <h4>Dr. David Chen</h4>
                                        <span className="specialty-tag">Orthopedic Surgery</span>
                                        <div className="experience-info">
                                            <i className="bi bi-award" />
                                            <span>22 years experience</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="rating-section">
                                    <div className="stars">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-half" />
                                    </div>
                                    <span className="rating-score">4.7</span>
                                    <span className="review-count">(156 reviews)</span>
                                </div>
                                <div className="action-buttons">
                                    <a href="#!" className="btn-secondary">View Details</a>
                                    <a href="#!" className="btn-primary">Schedule</a>
                                </div>
                            </div>{/* End Doctor Profile */}
                            <div className="doctor-profile" data-aos="zoom-in" data-aos-delay={500}>
                                <div className="profile-header">
                                    <div className="doctor-avatar">
                                        <img src="assets/img/health/staff-11.webp" alt="Dr. Victoria Torres" className="img-fluid" />
                                        <div className="status-indicator available" />
                                    </div>
                                    <div className="doctor-details">
                                        <h4>Dr. Victoria Torres</h4>
                                        <span className="specialty-tag">Dermatology Care</span>
                                        <div className="experience-info">
                                            <i className="bi bi-award" />
                                            <span>9 years experience</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="rating-section">
                                    <div className="stars">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star" />
                                    </div>
                                    <span className="rating-score">4.5</span>
                                    <span className="review-count">(74 reviews)</span>
                                </div>
                                <div className="action-buttons">
                                    <a href="#!" className="btn-secondary">View Details</a>
                                    <a href="#!" className="btn-primary">Book Now</a>
                                </div>
                            </div>{/* End Doctor Profile */}
                            <div className="doctor-profile" data-aos="zoom-in" data-aos-delay={600}>
                                <div className="profile-header">
                                    <div className="doctor-avatar">
                                        <img src="assets/img/health/staff-14.webp" alt="Dr. Benjamin Lee" className="img-fluid" />
                                        <div className="status-indicator available" />
                                    </div>
                                    <div className="doctor-details">
                                        <h4>Dr. Benjamin Lee</h4>
                                        <span className="specialty-tag">Oncology Treatment</span>
                                        <div className="experience-info">
                                            <i className="bi bi-award" />
                                            <span>19 years experience</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="rating-section">
                                    <div className="stars">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                    </div>
                                    <span className="rating-score">4.9</span>
                                    <span className="review-count">(194 reviews)</span>
                                </div>
                                <div className="action-buttons">
                                    <a href="#!" className="btn-secondary">View Details</a>
                                    <a href="#!" className="btn-primary">Schedule</a>
                                </div>
                            </div>{/* End Doctor Profile */}
                        </div>
                        <div className="text-center mt-5" data-aos="fade-up" data-aos-delay={700}>
                            <a href="doctors.html" className="btn-view-all">
                                View All Doctors
                                <i className="bi bi-arrow-right" />
                            </a>
                        </div>
                    </div>
                </section>{/* /Find A Doctor Section */}
                {/* Call To Action Section */}
                <section id="call-to-action" className="call-to-action section light-background">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="hero-content">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="content-wrapper" data-aos="fade-up" data-aos-delay={200}>
                                        <h1>Excellence in Medical Care, Every Day</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                        <div className="cta-wrapper">
                                            <a href="appointment.html" className="primary-cta">
                                                <span>Schedule Consultation</span>
                                                <i className="bi bi-arrow-right" />
                                            </a>
                                            <a href="services.html" className="secondary-cta">
                                                <span>Explore Services</span>
                                                <i className="bi bi-arrow-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="image-container" data-aos="fade-left" data-aos-delay={300}>
                                        <img src="assets/img/health/facilities-9.webp" alt="Medical Excellence" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="features-section">
                            <div className="row g-0">
                                <div className="col-lg-4">
                                    <div className="feature-block" data-aos="fade-up" data-aos-delay={200}>
                                        <div className="feature-icon">
                                            <i className="bi bi-shield-check" />
                                        </div>
                                        <h3>Advanced Technology</h3>
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                            laborum.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="feature-block" data-aos="fade-up" data-aos-delay={300}>
                                        <div className="feature-icon">
                                            <i className="bi bi-clock" />
                                        </div>
                                        <h3>24/7 Availability</h3>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                                            excepteur.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="feature-block" data-aos="fade-up" data-aos-delay={400}>
                                        <div className="feature-icon">
                                            <i className="bi bi-people" />
                                        </div>
                                        <h3>Expert Team</h3>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
                                            totam rem.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-block">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="contact-content" data-aos="fade-up" data-aos-delay={200}>
                                        <h2>Need Immediate Medical Assistance?</h2>
                                        <p>Our emergency response team is available around the clock to provide immediate medical support when
                                            you need it most.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="contact-actions" data-aos="fade-up" data-aos-delay={300}>
                                        <a href="tel:5551234567" className="emergency-call">
                                            <i className="bi bi-telephone" />
                                            <span>(555) 123-4567</span>
                                        </a>
                                        <a href="contact.html" className="contact-link">Find Location</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Call To Action Section */}
            </main>
            <Footer />

        </div>
    )
}

export default Home