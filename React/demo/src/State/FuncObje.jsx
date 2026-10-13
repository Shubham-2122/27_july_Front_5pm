import React, { useState } from 'react'
import ImageData from './ImageData'

function FuncObje() {

    const [data, setdata] = useState({
        name: "meet",
        count: 1,
        isImage: true
    })

    // console.log(data)

    return (
        <div>

            <h1>name : {data.name}</h1>

            <button onClick={() => setdata({ ...data, name: "harshil" })}>Change Name </button>
            <button onClick={() => setdata({ ...data, name: "vikas" })}>Change Name </button>

            <h1>counter : {data.count}</h1>
            <button onClick={() => setdata({ ...data, count: data.count + 1 })}>Increment</button>
            <button onClick={() => setdata({ ...data, count: data.count - 1 })}>Decrement</button>
            <button onClick={() => setdata({ ...data, count: 0 })}>reset</button>

            <hr />
            <br />
            <button onClick={()=>setdata({...data,isImage : false})}>Hide</button>
            <button onClick={()=>setdata({...data,isImage : true})}>Show</button>

            <button onClick={()=>setdata({...data,isImage : !data.isImage})}>Toogle</button>

            {
                data.isImage ? <ImageData /> : false
            }
        </div>
    )
}

export default FuncObje
