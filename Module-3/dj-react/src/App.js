import React from "react"
import Square from "./Square"
import './styles.css'
import dragonballSoundFile from './dragonball.mp3'
import letitgo from './letitgo.mp3'
import otherfriends from './otherfriends.mp3'
import theotherside from './theotherside.mp3'

const dragonBall = new Audio(dragonballSoundFile)
const letItGo = new Audio(letitgo)
const otherFriends = new Audio(otherfriends)
const theOtherSide = new Audio(theotherside)
const songs = [dragonBall, letItGo, otherFriends, theOtherSide]

const stopAudio = (audio) => {
    audio.pause()
    audio.currentTime = 0
}

const stopBigTimeDJ = () => songs.forEach((song) => stopAudio(song))





export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            colors: ['white', 'white', 'white', 'white']
        }
        this.smallTimeDJ = this.smallTimeDJ.bind(this)
        this.partyDJ = this.partyDJ.bind(this)
        this.professionalDJleft = this.professionalDJleft.bind(this)
        this.professionalDJright = this.professionalDJright.bind(this)
        this.bigTimeDJ1 = this.bigTimeDJ1.bind(this)
        this.bigTimeDJ2 = this.bigTimeDJ2.bind(this)
        this.bigTimeDJ3 = this.bigTimeDJ3.bind(this)
        this.bigTimeDJ4 = this.bigTimeDJ4.bind(this)
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

    professionalDJleft() {
        this.setState(prevState => {
            return {
                colors: [prevState.colors[0], prevState.colors[1], 'blue', prevState.colors[3]]
            }
        })
    }

    professionalDJright() {
        this.setState(prevState => {
            return {
                colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], 'blue']
            }
        })
    }

    bigTimeDJ1() {
        stopBigTimeDJ()
        dragonBall.play()
        this.setState(prevState => {
            return {
                colors: ['red', prevState.colors[1], prevState.colors[2], prevState.colors[3]]
            }
        })
    }

    bigTimeDJ2() {
        stopBigTimeDJ()
        letItGo.play()
        this.setState(prevState => {
            return {
                colors: [prevState.colors[0], 'red', prevState.colors[2], prevState.colors[3]]
            }
        })
    }

    bigTimeDJ3() {
        stopBigTimeDJ()
        otherFriends.play()
        this.setState(prevState => {
            return {
                colors: [prevState.colors[0], prevState.colors[1], 'red', prevState.colors[3]]
            }
        })
    }

    bigTimeDJ4() {
        stopBigTimeDJ()
        theOtherSide.play()
        this.setState(prevState => {
            return {
                colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], 'red']
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
                <div className='professional-container'>
                    <button className='buttons left' onClick={this.professionalDJleft}>Professional DJ Left</button>
                    <button className='buttons right' onClick={this.professionalDJright}>Professional DJ Right</button>
                </div>
                <div className='big-time-container'>
                    <button className='buttons' onClick={this.bigTimeDJ1}>Big One</button>
                    <button className='buttons' onClick={this.bigTimeDJ2}>Big Two</button>
                    <button className='buttons' onClick={this.bigTimeDJ3}>Big Three</button>
                    <button className='buttons' onClick={this.bigTimeDJ4}>Big Four</button>
                </div>
            </div>
        )
    }
}
