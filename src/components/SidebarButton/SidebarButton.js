import React, { Component } from 'react';
import './SidebarButton.scss';

class SidebarButton extends React.Component {
    constructor(props) {
        super(props)

        
    }
    render() {
        
        return (
            <button className="sidebar-btn">
                <div className="btn-icon">
                {this.props.icon}
                </div>

                <span>{this.props.title}</span>

           </button>
        )
    } 
}

export default SidebarButton;