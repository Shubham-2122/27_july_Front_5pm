import axios from 'axios'
import React, { useState } from 'react'

function useGetAPI(api) {

    const [data,setdata] = useState([])
    
    const fetchdata=async()=>{
        try {
            const res = await axios.get(api)
            setdata(res.data)
        } catch (error) {
            console.log("APi data not found",error)
        }
    }
 
    return {data,fetchdata}
}

export default useGetAPI