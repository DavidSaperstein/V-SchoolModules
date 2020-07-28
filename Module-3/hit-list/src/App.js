import React, {Component} from 'react'
import axios from 'axios'
import Target from './Target'
import './styles.css'

export default class App extends Component{
    constructor() {
        super()
        this.state = {
            hits: []
        }
    }

    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json')
        .then(response => {
            this.setState({hits: response.data})
        })
        console.log(this.state.hits)
    }

    render() {
        console.log(this.state.hits)
        return (
            <div>
                <h1 id='heading'>Don Corleone's Hit List</h1>
                <div className='list-container'>
                    {this.state.hits.length > 0 
                        ? (this.state.hits.map((hit, i) => 
                            <Target key={i+1} 
                            name={hit.name} 
                            alt={hit.name} 
                            image={hit.image} />)) 
                        : (<div>...Loading</div>)
                    }
                </div>
            </div>
        )
    }
}
