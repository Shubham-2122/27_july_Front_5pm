import React, { useState } from 'react'

function useCount(num) {
  
    const [cout,setcout] = useState(num)

    const increment=()=>{
        setcout(cout+1)
    }
    const decrement=()=>{
        setcout(cout-1)
    }
    const reset=()=>{
        setcout(0)
    }

    return {cout,increment,decrement,reset}

}

export default useCount