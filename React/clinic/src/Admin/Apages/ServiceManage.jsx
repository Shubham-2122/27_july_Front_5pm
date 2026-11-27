import React, { useEffect, useState } from 'react'
import AHeader from '../Acoman/AHeader'
import APageHead from '../Acoman/APageHead'
import axios from 'axios'

function ServiceManage() {

    const [service, setservice] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const [sigservice, setsigservice] = useState({
        id: "",
        name: "",
        desc: "",
        img: ""
    })

    // get signle data
    const getService = async (id) => {
        try {
            const res = await axios.get(`http://localhost:3000/services/${id}`)
            // console.log(res.data)
            setsigservice(res.data)
        } catch (error) {
            console.log("Api Data Not Found", error)
        }
    }

    const fetchdata = async () => {
        try {
            const res = await axios.get("http://localhost:3000/services")
            // console.log(res.data)
            setservice(res.data)
        } catch (error) {
            console.log("Api data not Found", error)
        }
    }

    // delete data 
    const deleteService = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3000/services/${id}`)
            console.log("Delete Service success")
            fetchdata()

        } catch (error) {
            console.log("Api Data not Found", error)
        }
    }

    // model open / closed 
    const [seredit, setseredit] = useState(null)
    const [sereditting, setservediting] = useState({
        id: "",
        name: "",
        desc: "",
        img: ""
    })

    const getopen = (data) => {
        console.log(data)
        setseredit(data)
        setservediting(data)
    }

    const getchangedata = (e) => {
        setservediting({
            ...sereditting,
            [e.target.name]: e.target.value
        })
    }

    const getsupdate = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.put(`http://localhost:3000/services/${sereditting.id}`, sereditting)
            console.log(res.data)
            console.log("Data Succesffuly added")
            setservediting({
                id: "",
                name: "",
                desc: "",
                img: ""
            })
            fetchdata()
            setseredit(null)
        } catch (error) {
            console.log("Api Data not Found", error)
        }
    }

    return (
        <div>
            <AHeader />
            <APageHead title="Service Management" />
            <div className="container">
                <table className="table table-dark">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#Id</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            service && service.map((data) => {
                                // console.log(data)
                                return (
                                    <tr className='text-center' key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>
                                            <img src={data.img} style={{ width: "100px", height: "100px", borderRadius: "30px" }} alt="" />
                                        </td>
                                        <td>{data.name}</td>
                                        <td>
                                            <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => getService(data.id)}>View</button>
                                            <button className='btn btn-success mx-2' onClick={() => getopen(data)}>Edit</button>
                                            <button className='btn btn-danger' onClick={() => deleteService(data.id)} >Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
                {
                    seredit && (
                        <div className="container my-5">
                            <div className="row">
                                <div className="contact-form-card" data-aos="fade-up" data-aos-delay={200}>
                                    <h2>Service Form Updated id : {sereditting.id}</h2>

                                    <form >
                                        <div className="row g-4">
                                            <div className="col-12">
                                                <input type="text" value={sereditting.name} onChange={getchangedata} className="form-control" name="name" id="name" placeholder="Your Name" />
                                            </div>
                                            <div className="col-12">
                                                <input type="url" value={sereditting.img} onChange={getchangedata} className="form-control" name="img" id="subject" placeholder="enter your Images" />
                                            </div>
                                            <div className="col-12">
                                                <textarea className="form-control" onChange={getchangedata} value={sereditting.desc} name="desc" id="message" placeholder="Your Descritption" rows={6} />
                                            </div>

                                            <div className="col-12">


                                                <button onClick={getsupdate} className="btn btn-submit btn-info">Service Update</button>


                                                <button onClick={() => setseredit(null)} className="btn mx-2 btn-submit btn-info">Service cancle</button>
                                                <div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{sigservice.name}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-12">
                                    <div className="service-item">
                                        <div className="service-image">
                                            <img src={sigservice.img} alt="Cardiology Services" className="img-fluid" />

                                        </div>
                                        <div className="service-content">
                                            <h3>{sigservice.name}</h3>
                                            <p>{sigservice.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ServiceManage