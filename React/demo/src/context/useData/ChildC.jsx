import React, { useContext } from 'react'
import { data } from './ChildA'

export default function ChildC() {

    const {cout,setcout} = useContext(data)

  return (
    <div>
        <h1>Child C : {cout}</h1>
        <button onClick={()=>setcout(cout+1)}>icnremnet</button>
        <button onClick={()=>setcout(cout-1)}>decnremnet</button>
        <button onClick={()=>setcout(0)}>reset</button>
    </div>
  )
}
