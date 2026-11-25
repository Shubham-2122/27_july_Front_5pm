import React, { useEffect } from 'react'
import Header from '../Coman/Header'
import PageHead from '../Coman/PageHead'
import Footer from '../Coman/Footer'
import useGetAPI from '../../customData/useGetAPI'

function Doctors() {

     const {data,fetchdata} = useGetAPI("http://localhost:3000/doctors")
    useEffect(()=>{
        fetchdata()
    },[])

    return (
        <div>
            <Header />
            <PageHead title="Doctors" list="Doctors" />
            <main className="main">
               
                {/* Doctors Section */}
                <section id="doctors" className="doctors section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row gy-4">
                            {
                                data && data.map((data)=>{
                                    return(
                                        <div key={data.id} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={100}>
                                <div className="doctor-card">
                                    <div className="doctor-image">
                                        <img src={data.img} alt="Dr. Marcus Johnson" className="img-fluid" />
                                        <div className="doctor-overlay">
                                            <div className="social-links">
                                                <a href="#!"><i className="bi bi-linkedin" /></a>
                                                <a href="#!"><i className="bi bi-envelope" /></a>
                                                <a href="#!"><i className="bi bi-phone" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="doctor-content">
                                        <h4>{data.name}</h4>
                                        <span className="specialty">{data.cate}</span>
                                        <p>{data.desc.slice(0,100)}</p>
                                        <div className="doctor-meta">
                                            <div className="experience">
                                                <i className="bi bi-award" />
                                                <span>{data.exp}+ Years Experience</span>
                                            </div>
                                            <div className="department">
                                                <i className="bi bi-building" />
                                                <span>Cardiology Dept.</span>
                                            </div>
                                        </div>
                                        <a href="appointment.html" className="btn-appointment">Book Appointment</a>
                                    </div>
                                </div>
                            </div>
                                    )
                                })
                            }
                          
                        </div>
                    </div>
                </section>{/* /Doctors Section */}
            </main>
            <Footer />

        </div>
    )
}

export default Doctors