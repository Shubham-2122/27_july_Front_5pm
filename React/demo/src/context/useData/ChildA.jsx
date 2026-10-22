import React, { createContext, useState } from 'react'
import ChildD from './ChildD'
import ChildB from './ChildB'
import ChildC from './ChildC'

// 1) create context
export const data = createContext()

function ChildA() {

    const [name,setname] = useState("ketan")
    const [cout,setcout] = useState(0)

  return (
    <div>
      <h1>Child A : {name}</h1>

    <data.Provider value={{name,setname,cout,setcout}}>
        <ChildB />
        <ChildC />
        <ChildD />
    </data.Provider>

    </div>
  )
}

export default ChildA
