import React from 'react'
import "./style.css"

function Css() {

    let htmldata = {
        background:"blue",
        color:"white"
    }

  return (
    <div>
      {/* 1) inline csss  */}

      <h1 style={{background:"red",color:"white",padding:"20px"}}>inline css data</h1>
      
      {/* 2) internal css : not use  */}
      <h1 style={htmldata}>Hello inertbal csss</h1>

      {/* 3) external css  */}

      <h1 className='ab'>Exnternal css</h1>
    </div>
  )
}

export default Css
