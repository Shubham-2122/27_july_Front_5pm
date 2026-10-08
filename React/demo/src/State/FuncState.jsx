// Hooks : it ' magicall and reuse , reduce code
// useState
// import useState 
// return first and function name inside
// type [defind,setdefind] = useState()

import React, { useState } from 'react'
import ImageData from './ImageData'

function FuncState() {

    const [name, setname] = useState("harshil")
    const [count, setcount] = useState(1)
    const [isImage,setisImage]= useState(true)


    const incrment2=()=>{
        setcount(count+2)
    }

    return (
        <div>
            <h1>Name : {name}</h1>
            <button onClick={() => setname("meet")}>Change name</button>
            <button onClick={() => setname("dhruv")}>Change name 2</button>

            <h1>Count : {count}</h1>
            <button onClick={() => setcount(count + 1)}>increment</button>
            <button onClick={incrment2}>increment by 2</button>
            <button onClick={() => setcount(count - 1)}>decrement</button>
            <button onClick={() => setcount(0)}>Reset</button>
            <hr />
            <br />

            <button onClick={()=>setisImage(false)}>Hide</button>
            <button onClick={()=>setisImage(true)}>Show</button>
            <button onClick={()=>setisImage(!isImage)}>toggle</button>

            {
                isImage ? <ImageData /> : false
            }
        </div>
    )
}

export default FuncState
