import React from 'react'

function D({name,setname}) {
  return (
    <div>
      <h1>D compo</h1>

      <h1>D : {name}</h1>

      <button onClick={()=>setname("dhruv")}>Chnage name</button>
    </div>
  )
}

export default D
