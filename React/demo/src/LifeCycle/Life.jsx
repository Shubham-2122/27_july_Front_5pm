import React, { Component } from 'react'
import Header from '../layout/Coman/Header'

class Life extends Component {
    constructor(){
        super()
        this.state = {
            name : "shubham"
        }
    }

    // 1) intial phase
    componentDidMount(){
        console.log("mouting Phase")
    }

    // 2) update phase
    componentDidUpdate(){
        console.log("updated phase")
    }

    // 3) unmouting 
    componentWillUnmount(){
        console.log("unmouting phase")
    }

  render() {
    return (
      <div>
        <Header />
            <h1>Hello Life Cycle</h1>
            {/* 
                3 phase 
                1) mouting : inital phase . state,props
                2) updateing : where props,state
                3) unmouting : null value

            */}

                <h1>Name :{this.state.name}</h1>
                <button onClick={()=>this.setState({name:"ketan"})}>Change name</button>
      </div>
    )
  }
}

export default Life
