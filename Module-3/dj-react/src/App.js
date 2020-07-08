import React from "react"
import Square from "./Square"
import './styles.css'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            colors: ['white', 'white', 'white', 'white']
        }
    }

    render() {
        return (
            <div className='flex-container'>
                <div className='square-container'>
                    {this.state.colors.map(color => <Square color={color} />)}
                </div>
                <button onClick={this.handleClick}>Small Time DJ</button>
            </div>
        )
    }
}
