import React from 'react'
import Header from '../Coman/Header'
import PageHead from '../Coman/PageHead'
import Footer from '../Coman/Footer'

function Contact() {
    return (
        <div>
            <Header />
            <PageHead title="Contact" list="Contact" />
            <main className="main">
                
                {/* Contact Section */}
                <section id="contact" className="contact section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row g-5">
                            <div className="col-lg-5">
                                <div className="contact-info-wrapper">
                                    <div className="contact-info-item" data-aos="fade-up" data-aos-delay={100}>
                                        <div className="info-icon">
                                            <i className="bi bi-geo-alt" />
                                        </div>
                                        <div className="info-content">
                                            <h3>Our Address</h3>
                                            <p>1842 Maple Avenue, Portland, Oregon 97204</p>
                                        </div>
                                    </div>
                                    <div className="contact-info-item" data-aos="fade-up" data-aos-delay={200}>
                                        <div className="info-icon">
                                            <i className="bi bi-envelope" />
                                        </div>
                                        <div className="info-content">
                                            <h3>Email Address</h3>
                                            <p>info@example.com</p>
                                            <p>contact@example.com</p>
                                        </div>
                                    </div>
                                    <div className="contact-info-item" data-aos="fade-up" data-aos-delay={300}>
                                        <div className="info-icon">
                                            <i className="bi bi-headset" />
                                        </div>
                                        <div className="info-content">
                                            <h3>Hours of Operation</h3>
                                            <p>Sunday-Fri: 9 AM - 6 PM</p>
                                            <p>Saturday: 9 AM - 4 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="contact-form-card" data-aos="fade-up" data-aos-delay={200}>
                                    <h2>Send us a Message</h2>
                                    <p className="mb-4">Have questions or want to learn more? Reach out to us and our team will get back to you
                                        shortly.</p>
                                    <form action="forms/contact.php" method="post" className="php-email-form">
                                        <div className="row g-4">
                                            <div className="col-md-6">
                                                <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" required />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                            </div>
                                            <div className="col-12">
                                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                            </div>
                                            <div className="col-12">
                                                <textarea className="form-control" name="message" id="message" placeholder="Your Message" rows={6} required defaultValue={""} />
                                            </div>
                                            <div className="col-12">
                                                <div className="loading">Loading</div>
                                                <div className="error-message" />
                                                <div className="sent-message">Your message has been sent. Thank you!</div>
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-submit">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid map-container" data-aos="fade-up" data-aos-delay={200}>
                        <div className="map-overlay" />
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" width="100%" height={500} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </section>{/* /Contact Section */}
            </main>
            <Footer />

        </div>
    )
}

export default Contact