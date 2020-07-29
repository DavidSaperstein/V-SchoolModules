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

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleClick = (e) => {
        e.preventDefault()
        const newMeme = this.state.allMemeImgs[Math.floor(Math.random() * Math.floor(this.state.allMemeImgs.length))].url
        console.log(newMeme)
        this.setState({randomImg: newMeme})
    }

    render() {
        return (
            <div>
                <form className='meme-form'>
                    <input 
                        name='topText'
                        type='text'
                        placeholder='Top Text'
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input
                        name='bottomText'
                        type='text'
                        placeholder='Bottom Text'
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleClick}>Gen</button>
                </form>
                <div className='meme'>
                    <img src={this.state.randomImg} alt='' />
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}