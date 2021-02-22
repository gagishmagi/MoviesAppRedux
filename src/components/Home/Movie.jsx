import React, { Component } from 'react'

export default class Movie extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <h1>Movie page {this.props.match.params.id}</h1>
            </div>
        )
    }
}
