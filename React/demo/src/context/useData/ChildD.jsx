import React, { useContext } from 'react'
import { data } from './ChildA'

export default function ChildD() {

    const {name,setname} = useContext(data)

  return (
    <div>
        <h1>Child D : {name}</h1>
        <button onClick={()=>setname("demo")}>Change name</button>
    </div>
  )
}
