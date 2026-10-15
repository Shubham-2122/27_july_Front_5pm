// useEffect : function side effect
// API call 
// useEffect : logical , optional

import React, { useEffect, useState } from 'react'

function Test() {

    // 1) effect no parameter 
    // useEffect(()=>{
    //     console.log("ouside fun")
    //     return(()=>{
    //         console.log("inside fun")
    //     })
    // })


    // 2) paramter blank array 
    // useEffect(()=>{
    //     console.log("ouside fun")
    //     return(()=>{
    //         console.log("inside fun")
    //     })
    // },[])

    const [name,setname] = useState("het")
    // state
    useEffect(()=>{
        console.log("ouside fun")
        return(()=>{
            console.log("inside fun")
        })
    },[name])

  return (
    <div>
      <h1>Name :{name}</h1>
        <button onClick={()=>setname("jatin")}>Change name</button>
    </div>
  )
}

export default Test
