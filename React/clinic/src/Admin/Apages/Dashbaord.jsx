import React from 'react'
import AHeader from '../Acoman/AHeader'
import APageHead from '../Acoman/APageHead'

function Dashbaord() {
  return (
    <div>
        <AHeader />
        <APageHead title="Admin Dashbaord" list="Dashbaord" />
        <h1 className='text-center'>Hello This Admin Dashbaord</h1>
    </div>
  )
}

export default Dashbaord