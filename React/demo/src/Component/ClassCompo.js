// compoenent : it's block code when need simple call it 
// compoennt : class and function 
// 2013 : class compoennt
// class : compoenent . render 

// import React, { Component } from "react";

// class ClassCompo extends Component{
//     render(){
//         return(
//             <h1>Hello Class Compoenent</h1>
//         )
//     }
// }
// export default ClassCompo;

// import React, { Component } from 'react'

// class ClassCompo extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Helli this RCE</h1>
//       </div>
//     )
//   }
// }

// export default ClassCompo

import React, { Component } from 'react'

export default class ClassCompo extends Component {
  render() {
    return (
      <div>
        <h1>Hello RCC </h1>
      </div>
    )
  }
}


