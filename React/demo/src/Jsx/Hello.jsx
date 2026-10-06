// jsx : jvascript syntax extestibale / xml 
// js vs jsx: 0.1s 
// jsx :easy read and write also html
// jsx : {}
// react : className

import React from 'react'

function Hello() {

    let test = "varj"
    console.log(test)

    let person = {
        name:"het",
        age:24,
        course:"Front-end"
    }

    console.log(person)

    let htmldata = <ul>
        <li>helli</li>
        <li>sda</li>
        <li>asdsa</li>
    </ul>

  return (
    <div>
      <h1>hello jsx file</h1>

      <h1 className=''>Name : {test}</h1>

      <h1>Name : {person.name} Age : {person.age}</h1>

      {htmldata}

      <h1>Hello sun : {20+45}</h1>
    </div>
  )
}

export default Hello
