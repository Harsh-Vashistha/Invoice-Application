import React, { Component } from 'react'
import './Body.css'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}
