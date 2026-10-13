import React, { useState } from 'react'

function FormObj() {

    const [data,setdata] = useState({
        name:"",
        surname:"",
        email:"",
        phone :"",
        password:""
    })

    console.log(data)

    const getchange=(e)=>{
        setdata({
            ...data,
            [e.target.name] : e.target.value
        })
    }

  return (
    <div>
       <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        {/* <form>
                             <div className="mb-3">
                                <label htmlFor="Name" className="form-label">Enter Name</label>
                                <input type="text" value={data.name} onChange={(e)=>setdata({...data,name:e.target.value})} className="form-control" id="Name" />
                            </div>
                             <div className="mb-3">
                                <label htmlFor="surName" className="form-label">Enter surName</label>
                                <input type="text" value={data.surname} onChange={(e)=>setdata({...data,surname:e.target.value})} className="form-control" id="surName" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mobile" className="form-label">Enter mobile</label>
                                <input type="tel" value={data.phone} onChange={(e)=>setdata({...data,phone:e.target.value})} className="form-control" id="mobile" />
                                
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" value={data.email} onChange={(e)=>setdata({...data,email:e.target.value})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" value={data.password} onChange={(e)=>setdata({...data,password:e.target.value})} className="form-control" id="exampleInputPassword1" />
                            </div>
                           
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form> */}

                         <form>
                             <div className="mb-3">
                                <label htmlFor="Name" className="form-label">Enter Name</label>
                                <input type="text" value={data.name} name='name' onChange={getchange} className="form-control" id="Name" />
                            </div>
                             <div className="mb-3">
                                <label htmlFor="surName" className="form-label">Enter surName</label>
                                <input type="text" value={data.surname} name='surname' onChange={getchange} className="form-control" id="surName" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mobile" className="form-label">Enter mobile</label>
                                <input type="tel" value={data.phone} name='phone' onChange={getchange} className="form-control" id="mobile" />
                                
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" value={data.email} onChange={getchange} name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" value={data.password} onChange={getchange} name='password' className="form-control" id="exampleInputPassword1" />
                            </div>
                           
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default FormObj
