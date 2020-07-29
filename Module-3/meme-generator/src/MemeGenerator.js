import React, {Component} from 'react'

export default class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: 'http://i.imgflip.com/1bij.jpg'
        }
    }

    componentDidMount () {
        
    }

    render() {
        return (
            <h1>MEME GENERATOR SECTION</h1>
        )
    }
}