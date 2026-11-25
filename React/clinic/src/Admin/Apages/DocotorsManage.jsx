import React, { useEffect } from 'react'
import AHeader from '../Acoman/AHeader'
import APageHead from '../Acoman/APageHead'
import useGetAPI from '../../customData/useGetAPI'

function DocotorsManage() {

    const {data,fetchdata} = useGetAPI("http://localhost:3000/doctors")
    useEffect(()=>{
        fetchdata()
    },[])
    console.log(data)

  return (
    <div>
        <AHeader />
        <APageHead title="Doctors manage" />
        <div className="container">
             <table className="table table-dark">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#Id</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                             <th scope="col">Exprience</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((data) => {
                                // console.log(data)
                                return (
                                    <tr className='text-center' key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>
                                            <img src={data.img} style={{ width: "100px", height: "100px", borderRadius: "30px" }} alt="" />
                                        </td>
                                        <td>{data.name}</td>
                                        <td>{data.exp}</td>
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
    </div>
  )
}

export default DocotorsManage