import React from 'react'
import axios from 'axios'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            color: 'white'
        }
    }

    componentDidMount() {
        axios.get('http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}')
            .then(response => {
                this.setState({color: response.data.colors[0].hex})
            })
            .catch(err => console.error(err))
    }

    render() {
        return (
            <div 
                style={{
                    width: '250px', 
                    height: '250px', 
                    backgroundColor: `#${this.state.color}`
                }}
            />            
        )
    }
}