import React from "react"
import Die from './Die'

export default class DiceBox extends React.Component {
    constructor() {
        super()
        this.state = {
            dice: [
                {
                    num: 1,
                    selected: false
                },
                {
                    num: 1,
                    selected: false
                },           
                {
                    num: 1,
                    selected: false
                },
                {
                    num: 1,
                    selected: false
                },
                {
                    num: 1,
                    selected: false
                }
            ]
        }
    }

    randomNumGen = () => {
        return Math.floor(Math.random() * (6-1+1)) + 1
    }

    handleRollDice = () => {
        this.setState(prevState => {
            const newDice = prevState.dice.map(die => {
                if(die.selected === false) {
                    const newNum = this.randomNumGen()
                    console.log(newNum)
                    return {num: newNum, selected: false}
                } else {
                    return die
                }
            })
            return {dice: newDice}    
        })
        // const newDice = this.state.dice.map(die => {
        //     if(die.selected === false) {
        //         const newNum = this.randomNumGen()
        //         console.log(newNum)
        //         return {num: newNum, selected: false}
        //     } else {
        //         return die
        //     }
        // })
        // this.setState(prevState => {            
        //     return {dice: newDice}
        // })
    }
    
    // handleSelectDice = (event) => {
    //     const target = event.target
    //     const selector = false
    //     if(event.target.selected === false) {
    //         selector = true
    //     } else {
    //         selector = false
    //     }
    //     this.setState(prevState => {
    //         return {dice[target.id].selected: selector}
    //     })
    // }

    handleSelectedDice = (id) => {
        this.setState(prevState => {
            const newState = prevState
            newState.dice[id].selected = !prevState.dice[id].selected
            return {newState}
        })
    }
    
    render() {
        console.log(this.state.dice)
        return (
            <div>
                <div className='dice-container'>
                    {this.state.dice.map((die, i) => <Die key={i} id={i} num={die.num} isSelected={die.selected} selector={this.handleSelectedDice}/>)}
                </div>
                <div className='button-container'>
                    <button id='button' onClick={() => this.handleRollDice()}>Roll</button>
                </div>
            </div>
        )
    }
}