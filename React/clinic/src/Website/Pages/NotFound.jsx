import React from 'react'
import Header from '../Coman/Header'
import PageHead from '../Coman/PageHead'
import Footer from '../Coman/Footer'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div>
            
            <main className="main">
                {/* Page Title */}
               
                {/* Error 404 Section */}
                <section id="error-404" className="error-404 section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <div className="error-number" data-aos="zoom-in" data-aos-delay={200}>
                                    404
                                </div>
                                <h1 className="error-title" data-aos="fade-up" data-aos-delay={300}>
                                    Page Not Found
                                </h1>
                                <p className="error-description" data-aos="fade-up" data-aos-delay={400}>
                                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                                </p>
                                <div className="error-actions" data-aos="fade-up" data-aos-delay={500}>
                                    <Link to="/" className="btn-primary">
                                        <i className="bi bi-house" />
                                        Back to Home
                                    </Link>
                                    <a href="#!" className="btn-secondary">
                                        <i className="bi bi-search" />
                                        Search Site
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-5">
                            <div className="col-lg-10">
                                <div className="helpful-links" data-aos="fade-up" data-aos-delay={600}>
                                    <h3>You might be looking for:</h3>
                                    <div className="links-grid">
                                        <a href="#!" className="link-item">
                                            <i className="bi bi-info-circle" />
                                            <span>About Us</span>
                                        </a>
                                        <a href="#!" className="link-item">
                                            <i className="bi bi-telephone" />
                                            <span>Contact</span>
                                        </a>
                                        <a href="#!" className="link-item">
                                            <i className="bi bi-grid-3x3-gap" />
                                            <span>Services</span>
                                        </a>
                                        <a href="#!" className="link-item">
                                            <i className="bi bi-journal-text" />
                                            <span>Blog</span>
                                        </a>
                                        <a href="#!" className="link-item">
                                            <i className="bi bi-question-circle" />
                                            <span>Support</span>
                                        </a>
                                        <a href="#!" className="link-item">
                                            <i className="bi bi-shield-check" />
                                            <span>Privacy Policy</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Error 404 Section */}
            </main>
           

        </div>
    )
}

export default NotFound