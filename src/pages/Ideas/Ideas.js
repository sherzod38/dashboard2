import React, {Component} from 'react';
// import { useState } from "react";

import "./Ideas.scss";


class Ideas extends Component{
    constructor(props){
        super(props)

        this.state = {
            count: 1,
            activePage: false
        }
    }
    // functsiyadagi korinish

    // const [count,setCount] = useState(1)
    // const [activePage, setactivePage] = useState(false)
    
    // class dagi korinish
    
    // this.state = {
    //     count: 1,
    //     activePage:false
    // }


    render() {
    
    return (
        <div className="hamma">
            <h1>hamma</h1>
            <h1>son: {this.state.count}</h1>
            <button onClick={() => this.setState({count:this.state.count - 1})}>-</button>
            <button onClick={() => this.setState({count:this.state.count + 1})}>+</button>

        </div>

    )
    }
}

export default Ideas;