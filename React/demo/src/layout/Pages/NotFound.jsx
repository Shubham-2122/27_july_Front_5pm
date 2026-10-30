import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NotFound() {

    // location
    const redirect = useNavigate()

    const getback=()=>{
        console.log("hello home")
        redirect("/")
    }

  return (
    <div>
      <h1 className='bg-danger text-light p-5'>404 Not Found Page</h1>
      <Link to="/" className='btn btn-success' >back To Home</Link>

      <button onClick={getback} className='btn btn-dark mx-2'>back to home2</button>
    </div>
  )
}

export default NotFound
