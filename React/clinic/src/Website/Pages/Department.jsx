import React from 'react'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer'
import PageHead from '../Coman/PageHead'

function Department() {
    return (
        <div>
            <Header />
            <main className="main">
                {/* Page Title */}
                <PageHead title="Department" list="Department" />
                
                {/* End Page Title */}
                {/* Departments Tabs Section */}
                <section id="departments-tabs" className="departments-tabs section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="medical-specialties">
                            <div className="row">
                                <div className="col-12">
                                    <div className="specialty-navigation">
                                        <div className="nav nav-pills d-flex" id="specialty-tabs" role="tablist" data-aos="fade-up" data-aos-delay={400}>
                                            <a className="nav-link department-tab active" id="neurology-tab" data-bs-toggle="pill" href="#departments-tabs-neurology" role="tab" aria-controls="departments-tabs-neurology" aria-selected="true" data-aos="fade-up" data-aos-delay={100}>Neurology</a>
                                            <a className="nav-link department-tab" id="surgery-tab" data-bs-toggle="pill" href="#departments-tabs-surgery" role="tab" aria-controls="departments-tabs-surgery" aria-selected="false" data-aos="fade-up" data-aos-delay={150}>Surgery</a>
                                            <a className="nav-link department-tab" id="dental-tab" data-bs-toggle="pill" href="#departments-tabs-dental" role="tab" aria-controls="departments-tabs-dental" aria-selected="false" data-aos="fade-up" data-aos-delay={200}>Dental Care</a>
                                            <a className="nav-link department-tab" id="ophthalmology-tab" data-bs-toggle="pill" href="#departments-tabs-ophthalmology" role="tab" aria-controls="departments-tabs-ophthalmology" aria-selected="false" data-aos="fade-up" data-aos-delay={250}>Ophthalmology</a>
                                            <a className="nav-link department-tab" id="cardiology-tab" data-bs-toggle="pill" href="#departments-tabs-cardiology" role="tab" aria-controls="departments-tabs-cardiology" aria-selected="false" data-aos="fade-up" data-aos-delay={300}>Cardiology</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="tab-content department-content" id="specialty-content" data-aos="fade-up" data-aos-delay={500}>
                                        <div className="tab-pane fade show active" id="departments-tabs-neurology" role="tabpanel" aria-labelledby="neurology-tab">
                                            <div className="row department-layout">
                                                <div className="col-lg-4 order-lg-2">
                                                    <div className="department-image">
                                                        <img src="assets/img/health/neurology-3.webp" alt="Neurology Department" className="img-fluid" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 order-lg-1">
                                                    <div className="department-info">
                                                        <h2 className="department-title">Neurological Sciences Department</h2>
                                                        <p className="department-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                            nostrud exercitation ullamco.</p>
                                                        <div className="row mt-4">
                                                            <div className="col-md-6">
                                                                <div className="service-item">
                                                                    <div className="service-icon">
                                                                        <i className="fas fa-brain" />
                                                                    </div>
                                                                    <div className="service-content">
                                                                        <h4>Brain Monitoring</h4>
                                                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="service-item">
                                                                    <div className="service-icon">
                                                                        <i className="fas fa-wave-square" />
                                                                    </div>
                                                                    <div className="service-content">
                                                                        <h4>EEG Testing</h4>
                                                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="service-item">
                                                                    <div className="service-icon">
                                                                        <i className="fas fa-stethoscope" />
                                                                    </div>
                                                                    <div className="service-content">
                                                                        <h4>Neurological Exam</h4>
                                                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="service-item">
                                                                    <div className="service-icon">
                                                                        <i className="fas fa-file-medical" />
                                                                    </div>
                                                                    <div className="service-content">
                                                                        <h4>Treatment Plans</h4>
                                                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* End Neurology Tab */}
                                        <div className="tab-pane fade" id="departments-tabs-surgery" role="tabpanel" aria-labelledby="surgery-tab">
                                            <div className="row department-layout">
                                                <div className="col-lg-4 order-lg-2">
                                                    <div className="department-image">
                                                        <img src="assets/img/health/surgery-2.webp" alt="Surgery Department" className="img-fluid" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 order-lg-1">
                                                    <div className="department-info">
                                                        <h2 className="department-title">Surgical Services Department</h2>
                                                        <p className="department-description">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                                                            odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                                        </p>
                                                        <div className="row mt-4">
                                                            <div className="col-md-6">
                                                                <div className="service-item">
                                                                    <div className="service-icon">
                                                                        <i className="fas fa-cut" />
                                                                    </div>
                                                                    <div className="service-content">
                                                                        <h4>Minimally Invasive</h4>
                                                                        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="service-item">
                                                                    <div className="service-icon">
                                                                        <i className="fas fa-tools" />
                                                                    </div>
                                                                    <div className="service-content">
                                                                        <h4>Advanced Procedures</h4>
                                                                        <p>Consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="service-item">
                                                                    <div className="service-icon">
                                                                        <i className="fas fa-shield-alt" />
                                                                    </div>
                                                                    <div className="service-content">
                                                                        <h4>Safe Operations</h4>
                                                                        <p>Incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="service-item">
                                                                    <div className="service-icon">
                                                                        <i className="fas fa-clock" />
                                                                    </div>
                                                                    <div className="service-content">
                                                                        <h4>Recovery Support</h4>
                                                                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* End Surgery Tab */}
                                        <div className="tab-pane fade" id="departments-tabs-dental" role="tabpanel" aria-labelledby="dental-tab">
                                            <div className="row department-layout">
                                                <div className="col-lg-4 order-lg-2">
                                                    <div className="department-image">
                                                        <img src="assets/img/health/dermatology-1.webp" alt="Dental Care Department" className="img-fluid" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 order-lg-1">
                                                    <div className="department-info">
                                                        <h2 className="department-title">Dental Care Department</h2>
                                                        <p className="department-description">Suscipit laboriosam, nisi ut aliquid ex ea commodi
                                                            consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                                                            molestiae.</p>
                                                        <div className="row mt-4">
                                                            <div className="col-md-6">
                                                                <div className="service-item">
                                                                    <div className="service-icon">
                                                                        <i className="far fa-smile" />
                                                                    </div>
                                                                    <div className="service-content">
                                                                        <h4>Oral Health</h4>
                                                                        <p>Consequatur aut perferendis doloribus asperiores repellat tempore.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="service-item">
                                                                    <div className="service-icon">
                                                                        <i className="fas fa-tooth" />
                                                                    </div>
                                                                    <div className="service-content">
                                                                        <h4>Teeth Cleaning</h4>
                                                                        <p>Et harum quidem rerum facilis est et expedita distinctio nam libero.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="service-item">
                                                                    <div className="service-icon">
                                                                        <i className="fas fa-star" />
                                                                    </div>
                                                                    <div className="service-content">
                                                                        <h4>Cosmetic Dentistry</h4>
                                                                        <p>Tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="service-item">
                                                                    <div className="service-icon">
                                                                        <i className="fas fa-cog" />
                                                                    </div>
                                                                    <div className="service-content">
                                                                        <h4>Orthodontics</h4>
                                                                        <p>Id quod maxime placeat facere possimus, omnis voluptas assumenda est.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* End Dental Tab */}
                                        <div className="tab-pane fade" id="departments-tabs-ophthalmology" role="tabpanel" aria-labelledby="ophthalmology-tab">
                                            <div className="row department-layout">
                                                <div className="col-lg-4 order-lg-2">
                                                    <div className="department-image">
                                                        <img src="assets/img/health/pediatrics-4.webp" alt="Ophthalmology Department" className="img-fluid" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 order-lg-1">
                                                    <div className="department-info">
                                                        <h2 className="department-title">Ophthalmology Department</h2>
                                                        <p className="department-description">Omnis dolor repellendus temporibus autem quibusdam et aut
                                                            officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.</p>
                                                        <div className="row mt-4">
                                                            <div className="col-md-6">
                                                                <div className="service-item">
                                                                    <div className="service-icon">
                                                                        <i className="fas fa-eye" />
                                                                    </div>
                                                                    <div className="service-content">
                                                                        <h4>Vision Testing</h4>
                                                                        <p>Sint et voluptatum sint quia dolor sit amet consectetur adipiscing elit.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="service-item">
                                                                    <div className="service-icon">
                                                                        <i className="fas fa-camera" />
                                                                    </div>
                                                                    <div className="service-content">
                                                                        <h4>Retinal Imaging</h4>
                                                                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="service-item">
                                                                    <div className="service-icon">
                                                                        <i className="fas fa-bolt" />
                                                                    </div>
                                                                    <div className="service-content">
                                                                        <h4>Laser Surgery</h4>
                                                                        <p>Enim ad minim veniam quis nostrud exercitation ullamco laboris nisi.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="service-item">
                                                                    <div className="service-icon">
                                                                        <i className="fas fa-prescription-bottle" />
                                                                    </div>
                                                                    <div className="service-content">
                                                                        <h4>Eye Care Plans</h4>
                                                                        <p>Ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* End Ophthalmology Tab */}
                                        <div className="tab-pane fade" id="departments-tabs-cardiology" role="tabpanel" aria-labelledby="cardiology-tab">
                                            <div className="row department-layout">
                                                <div className="col-lg-4 order-lg-2">
                                                    <div className="department-image">
                                                        <img src="assets/img/health/cardiology-3.webp" alt="Cardiology Department" className="img-fluid" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 order-lg-1">
                                                    <div className="department-info">
                                                        <h2 className="department-title">Cardiology Department</h2>
                                                        <p className="department-description">In voluptate velit esse cillum dolore eu fugiat nulla pariatur
                                                            excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt.</p>
                                                        <div className="row mt-4">
                                                            <div className="col-md-6">
                                                                <div className="service-item">
                                                                    <div className="service-icon">
                                                                        <i className="fas fa-heartbeat" />
                                                                    </div>
                                                                    <div className="service-content">
                                                                        <h4>Heart Monitoring</h4>
                                                                        <p>Mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="service-item">
                                                                    <div className="service-icon">
                                                                        <i className="fas fa-chart-line" />
                                                                    </div>
                                                                    <div className="service-content">
                                                                        <h4>ECG Analysis</h4>
                                                                        <p>Sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="service-item">
                                                                    <div className="service-icon">
                                                                        <i className="fas fa-tint" />
                                                                    </div>
                                                                    <div className="service-content">
                                                                        <h4>Blood Tests</h4>
                                                                        <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="service-item">
                                                                    <div className="service-icon">
                                                                        <i className="fas fa-shield-heart" />
                                                                    </div>
                                                                    <div className="service-content">
                                                                        <h4>Preventive Care</h4>
                                                                        <p>Vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* End Cardiology Tab */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Departments Tabs Section */}
                {/* Departments Section */}
                <section id="departments" className="departments section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row g-5">
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
                                <div className="department-card">
                                    <div className="department-icon">
                                        <i className="fas fa-heartbeat" />
                                    </div>
                                    <div className="department-image">
                                        <img src="assets/img/health/cardiology-3.webp" alt="Cardiology Department" className="img-fluid" />
                                    </div>
                                    <div className="department-content">
                                        <h3>Cardiology</h3>
                                        <p>Comprehensive heart care with advanced diagnostic tools and expert cardiologists dedicated to your
                                            cardiovascular health.</p>
                                        <a href="#!" className="learn-more">
                                            <span>Learn More</span>
                                            <i className="fas fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>{/* End Department Card */}
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                                <div className="department-card">
                                    <div className="department-icon">
                                        <i className="fas fa-brain" />
                                    </div>
                                    <div className="department-image">
                                        <img src="assets/img/health/neurology-2.webp" alt="Neurology Department" className="img-fluid" />
                                    </div>
                                    <div className="department-content">
                                        <h3>Neurology</h3>
                                        <p>Advanced treatment for neurological disorders with cutting-edge technology and specialized
                                            neurological care teams.</p>
                                        <a href="#!" className="learn-more">
                                            <span>Learn More</span>
                                            <i className="fas fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>{/* End Department Card */}
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
                                <div className="department-card">
                                    <div className="department-icon">
                                        <i className="fas fa-bone" />
                                    </div>
                                    <div className="department-image">
                                        <img src="assets/img/health/orthopedics-4.webp" alt="Orthopedics Department" className="img-fluid" />
                                    </div>
                                    <div className="department-content">
                                        <h3>Orthopedics</h3>
                                        <p>Expert bone and joint care offering comprehensive treatment from sports injuries to complex
                                            reconstructive surgery.</p>
                                        <a href="#!" className="learn-more">
                                            <span>Learn More</span>
                                            <i className="fas fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>{/* End Department Card */}
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
                                <div className="department-card">
                                    <div className="department-icon">
                                        <i className="fas fa-child" />
                                    </div>
                                    <div className="department-image">
                                        <img src="assets/img/health/pediatrics-3.webp" alt="Pediatrics Department" className="img-fluid" />
                                    </div>
                                    <div className="department-content">
                                        <h3>Pediatrics</h3>
                                        <p>Specialized medical care for infants, children, and adolescents with compassionate pediatric
                                            specialists.</p>
                                        <a href="#!" className="learn-more">
                                            <span>Learn More</span>
                                            <i className="fas fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>{/* End Department Card */}
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                                <div className="department-card">
                                    <div className="department-icon">
                                        <i className="fas fa-hand-holding-medical" />
                                    </div>
                                    <div className="department-image">
                                        <img src="assets/img/health/dermatology-4.webp" alt="Dermatology Department" className="img-fluid" />
                                    </div>
                                    <div className="department-content">
                                        <h3>Dermatology</h3>
                                        <p>Complete skin care services from medical dermatology to cosmetic procedures for healthy, beautiful
                                            skin.</p>
                                        <a href="#!" className="learn-more">
                                            <span>Learn More</span>
                                            <i className="fas fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>{/* End Department Card */}
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
                                <div className="department-card">
                                    <div className="department-icon">
                                        <i className="fas fa-ribbon" />
                                    </div>
                                    <div className="department-image">
                                        <img src="assets/img/health/oncology-2.webp" alt="Oncology Department" className="img-fluid" />
                                    </div>
                                    <div className="department-content">
                                        <h3>Oncology</h3>
                                        <p>Comprehensive cancer care with multidisciplinary approach and latest treatment options for all cancer
                                            types.</p>
                                        <a href="#!" className="learn-more">
                                            <span>Learn More</span>
                                            <i className="fas fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>{/* End Department Card */}
                        </div>
                    </div>
                </section>{/* /Departments Section */}
            </main>
            <Footer />

        </div>
    )
}

export default Department