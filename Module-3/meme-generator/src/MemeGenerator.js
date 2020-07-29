import React, {Component} from 'react'
import axios from 'axios'

export default class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: []
        }
    }

    componentDidMount () {
        axios.get('https://api.imgflip.com/get_memes')
            .then(response => {
                const {memes} = response.data.data
                console.log(memes[0])
                this.setState({allMemeImgs: memes})
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <h1>MEME GENERATOR SECTION</h1>
        )
    }
}