import React, { useEffect, useState } from 'react'
import AHeader from '../Acoman/AHeader'
import APageHead from '../Acoman/APageHead'
import axios from 'axios'

function ServiceManage() {

    const [service, setservice] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        try {
            const res = await axios.get("http://localhost:3000/services")
            // console.log(res.data)
            setservice(res.data)
        } catch (error) {
            console.log("Api data not Found", error)
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
                                            <button className='btn btn-info'>View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default ServiceManage