// useReducer = complex state management 
// reducer : logic reduce

import React, { useReducer } from 'react'
import Header from '../layout/Coman/Header'

const initalvalue = 1

export const reducer=(state,action)=>{
    switch (action) {
        case 'increment':
            return state += 1
            break;
        case 'decrement':
            return state -= 1
        case 'reset':
            return state = 0

        default:
            return initalvalue
            break;
    }
}

function DemoData() {

    const [count,dispatch] = useReducer(reducer,initalvalue)

  return (
    <div>
        <Header />
        <h1>hello reducer</h1>
        <h1>Counter : {count}</h1>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}>decrement</button>
         <button onClick={()=>dispatch('reset')}>reset</button>
    </div>
  )
}

export default DemoData
