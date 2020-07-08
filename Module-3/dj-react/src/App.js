import React from "react"
import Square from "./Square"
import './styles.css'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            colors: ['white', 'white', 'white', 'white']
        }
        this.smallTimeDJ = this.smallTimeDJ.bind(this)
        this.partyDJ = this.partyDJ.bind(this)
    }

    smallTimeDJ() {
        if (this.state.colors[0] === 'white') {
            this.setState({colors: ['black', 'black', 'black', 'black']})
        } else if (this.state.colors[0] === 'black') {
            this.setState({colors: ['white', 'white', 'white', 'white']})
        }
    }

    partyDJ() {
        this.setState(prevState => {
                return {
                    colors: ['purple', 'purple', prevState.colors[2], prevState.colors[3]]
                }
        })
    }

    render() {
        console.log(this.state.colors)
        return (
            <div className='flex-container'>
                <div className='square-container'>
                    {this.state.colors.map((color, i) => <Square key={i+1} color={color} number={i+1}/>)}
                </div>
                <button className='buttons' onClick={this.smallTimeDJ}>Small Time DJ</button>
                <button className='buttons' onClick={this.partyDJ}>Party DJ</button>
            </div>
        )
    }
}
