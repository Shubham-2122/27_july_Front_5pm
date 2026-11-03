import React from 'react'
import Header from '../layout/Coman/Header'
import useCount from './useCount'
import useApi from './useApi'


function TestData() {

    const {cout,increment,decrement,reset} = useCount(1)

    const {data}= useApi("https://fakestoreapi.com/products")

    console.log(data)
    // console.log(cout)
  
  return (
    <div>
        <Header /> 
        <h1>Custom data</h1>
        <h1>Count : {cout}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        
    </div>
  )
}

export default TestData