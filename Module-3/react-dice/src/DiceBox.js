import React from "react"
import Die from './Die'

export default class DiceBox extends React.Component {
    constructor() {
        super()
        this.state = {
            nums: [1, 1, 1, 1, 1]
        }
    }

    randomNumGen = () => {
        return Math.floor(Math.random() * (6-1+1)) + 1
    }

    rollDice = () => {
        this.setState(prevState => {
            const newNums = prevState.nums.map(num => this.randomNumGen())
            return {nums: newNums}
        })
    }

    render() {
        console.log(this.state.nums)
        return (
            <div>
                <div className='dice-container'>
                    {this.state.nums.map((num, i) => <Die key={i} num={num}/>)}
                </div>
                <div className='button-container'>
                    <button id='button' onClick={() => this.rollDice()}>Roll</button>
                </div>
            </div>
        )
    }
}