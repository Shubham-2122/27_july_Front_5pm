// ref : refrecemnt of element 
// ref : real dom 
// useRef : direct dom munulication

import React, { useRef } from 'react'
import Header from '../layout/Coman/Header'
import useCount from './useCount';

function RefmData() {

    const refelemet = useRef()

    const getdata =()=>{
        refelemet.current.focus();
    }

    const getcolor=()=>{
        refelemet.current.style.background = "red"
        refelemet.current.style.color = "white"
    }

    const {cout} = useCount(2)

  return (
    <div>
      <Header />
    <h1>Hello refrecemnt</h1>

    <input type="text" ref={refelemet} placeholder='Enter your name' />
    <button onClick={getdata}>Focusdata</button>

    <button onClick={getcolor}>change color</button>

    <h1>count : {cout}</h1>
    </div>
  )
}

export default RefmData
