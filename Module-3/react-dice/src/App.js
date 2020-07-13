import React from "react"
import DiceBox from './DiceBox'
import "./styles.css" 

export default function App() {
    return (
        <div className='dicebox-container'>
            <h1>Roll the Dice!</h1>
            <DiceBox />
        </div>
    )
}
