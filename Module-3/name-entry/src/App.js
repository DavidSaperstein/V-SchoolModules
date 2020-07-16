import React from 'react'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            fullName: "",
            names: []
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]:value})
    }

    handleClick = (event) => {
        event.preventDefault()
        this.setState(prevState => {
            return {
                names: [...prevState.names, prevState.fullName]
            }
        })
    }

    render() {
        return (
            <div>
                <h1>This is what you're typing: {this.state.fullName}</h1>
                <form>
                    <input
                        type='text'
                        name='fullName'
                        value={this.state.fullName}
                        placeholder='Full Name Here'
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleClick}>Add Name To List</button>
                </form>
                <ol>
                    {this.state.names.map(name => <li>{name}</li>)}
                </ol>
            </div>
        )
    }
}