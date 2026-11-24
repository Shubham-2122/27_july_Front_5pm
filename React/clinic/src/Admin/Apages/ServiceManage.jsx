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
    const deleteService =async(id)=>{
        try {
            const res = await axios.delete(`http://localhost:3000/services/${id}`)
            console.log("Delete Service success")
            fetchdata()

        } catch (error) {
            console.log("Api Data not Found",error)
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
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger' onClick={()=>deleteService(data.id)} >Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

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