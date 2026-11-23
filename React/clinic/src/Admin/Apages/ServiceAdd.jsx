import React, { useState } from 'react'
import AHeader from '../Acoman/AHeader'
import APageHead from '../Acoman/APageHead'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ServiceAdd() {

    const redirect = useNavigate()

    const [service, setservice] = useState({
        id: "",
        name: "",
        desc: "",
        img: ""
    })

    const getchange = (e) => {
        setservice({
            ...service,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const getsubmt = async (e) => {
        // without resresh data pass
        e.preventDefault()

        if (service.name == "" || service.img == "" || service.desc == "") {
            console.log("Pls field data")
            return false
        }

        try {
            const res = await axios.post("http://localhost:3000/services", service)
            console.log(res.data)
            console.log("Service added successfull")
            setservice({
                id: "",
                name: "",
                desc: "",
                img: ""
            })
            redirect("/servicemange")
        } catch (error) {
            console.log("Api Data not Found", error)
        }
    }

    return (
        <div>
            <AHeader />
            <APageHead title="service Add" />
            <div className="container my-5">
                <div className="row">
                    <div className="contact-form-card" data-aos="fade-up" data-aos-delay={200}>
                        <h2>Service Form Add</h2>

                        <form onSubmit={getsubmt}>
                            <div className="row g-4">
                                <div className="col-12">
                                    <input type="text" value={service.name} className="form-control" onChange={getchange} name="name" id="name" placeholder="Your Name" />
                                </div>
                                <div className="col-12">
                                    <input type="url" value={service.img} className="form-control" onChange={getchange} name="img" id="subject" placeholder="enter your Images" />
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control" value={service.desc} onChange={getchange} name="desc" id="message" placeholder="Your Descritption" rows={6} />
                                </div>

                                <div className="col-12">
                                    <button type="submit" className="btn btn-submit btn-info">Service add</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceAdd