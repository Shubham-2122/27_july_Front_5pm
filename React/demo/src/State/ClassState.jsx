// state : class 
// class : controcutur 
// this.state : defind 
// this.setState() : update : function data change 
// class : object create

import React, { Component } from 'react'
import ImageData from './ImageData'

class ClassState extends Component {
    constructor(){
        super()
        this.state = {
            name:"meet",
            count : 0,
            isImage : true
        }
    }
    
  render() {
    // console.log(this.state)
    return (
      <div>
        {/* string */}
        <h1>name : {this.state.name}</h1>

        <button onClick={()=>this.setState({name : "chetan"})}>Change Name</button>
        <button onClick={()=>this.setState({name : "shubham"})}>Change Name 2</button>

        <h1>Count : {this.state.count}</h1>
        
        <button onClick={()=>this.setState({count : this.state.count + 1})}>Increment</button>
        <button onClick={()=>this.setState({count : this.state.count - 1})}>Decrement</button>
        <button onClick={()=>this.setState({count : 0})}>reset</button>

        <br />  
        <hr />
        <button onClick={()=>this.setState({isImage : false})}>Hide</button>
        <button onClick={()=>this.setState({isImage : true})}>Show</button>
        <button onClick={()=>this.setState({isImage : !this.state.isImage })}>Toggle</button>

        {
            this.state.isImage ? <ImageData /> : false
        }

      </div>
    )
  }
}

export default ClassState
