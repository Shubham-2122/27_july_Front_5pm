import React from 'react'

function Footer() {
    return (
        <div>
            <div>
                <footer id="footer" className="footer-16 footer position-relative">
                    <div className="container">
                        <div className="footer-main" data-aos="fade-up" data-aos-delay={100}>
                            <div className="row align-items-start">
                                <div className="col-lg-5">
                                    <div className="brand-section">
                                        <a href="index.html" className="logo d-flex align-items-center mb-4">
                                            <span className="sitename">Clinic</span>
                                        </a>
                                        <p className="brand-description">Crafting exceptional digital experiences through thoughtful design and
                                            innovative solutions that elevate your brand presence.</p>
                                        <div className="contact-info mt-5">
                                            <div className="contact-item">
                                                <i className="bi bi-geo-alt" />
                                                <span>123 Creative Boulevard, Design District, NY 10012</span>
                                            </div>
                                            <div className="contact-item">
                                                <i className="bi bi-telephone" />
                                                <span>+1 (555) 987-6543</span>
                                            </div>
                                            <div className="contact-item">
                                                <i className="bi bi-envelope" />
                                                <span>hello@designstudio.com</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="footer-nav-wrapper">
                                        <div className="row">
                                            <div className="col-6 col-lg-3">
                                                <div className="nav-column">
                                                    <h6>Studio</h6>
                                                    <nav className="footer-nav">
                                                        <a href="#!">Our Story</a>
                                                        <a href="#!">Design Process</a>
                                                        <a href="#!">Portfolio</a>
                                                        <a href="#!">Case Studies</a>
                                                        <a href="#!">Awards</a>
                                                    </nav>
                                                </div>
                                            </div>
                                            <div className="col-6 col-lg-3">
                                                <div className="nav-column">
                                                    <h6>Services</h6>
                                                    <nav className="footer-nav">
                                                        <a href="#!">Brand Identity</a>
                                                        <a href="#!">Web Design</a>
                                                        <a href="#!">Mobile Apps</a>
                                                        <a href="#!">Digital Strategy</a>
                                                        <a href="#!">Consultation</a>
                                                    </nav>
                                                </div>
                                            </div>
                                            <div className="col-6 col-lg-3">
                                                <div className="nav-column">
                                                    <h6>Resources</h6>
                                                    <nav className="footer-nav">
                                                        <a href="#!">Design Blog</a>
                                                        <a href="#!">Style Guide</a>
                                                        <a href="#!">Free Assets</a>
                                                        <a href="#!">Tutorials</a>
                                                        <a href="#!">Inspiration</a>
                                                    </nav>
                                                </div>
                                            </div>
                                            <div className="col-6 col-lg-3">
                                                <div className="nav-column">
                                                    <h6>Connect</h6>
                                                    <nav className="footer-nav">
                                                        <a href="#!">Start Project</a>
                                                        <a href="#!">Schedule Call</a>
                                                        <a href="#!">Join Newsletter</a>
                                                        <a href="#!">Follow Updates</a>
                                                        <a href="#!">Partnership</a>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="bottom-content" data-aos="fade-up" data-aos-delay={300}>
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="copyright">
                                            <p>© <span className="sitename">Clinic</span>. All rights reserved.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="legal-links">
                                            <a href="#!">Privacy Policy</a>
                                            <a href="#!">Terms of Service</a>
                                            <a href="#!">Cookie Policy</a>
                                            <div className="credits">
                                                {/* All the links in the footer should remain intact. */}
                                                {/* You can delete the links only if you've purchased the pro version. */}
                                                {/* Licensing information: https://bootstrapmade.com/license/ */}
                                                {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
                                                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>. Distributed by <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* Scroll Top */}
                <a href="#!" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
            </div>

        </div>
    )
}

export default Footer