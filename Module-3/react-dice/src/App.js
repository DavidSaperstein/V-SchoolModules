import React from "react"
import DiceBox from './DiceBox'
import Parent from './Parent'
import "./styles.css" 

export default function App() {
    return (
        <>
        <div className='dicebox-container'>
            <h1>Roll the Dice!</h1>
            <DiceBox />
        </div>
            {/* <Parent text="text">
                <h1>{props.text}</h1>
                <h1></h1>
            </Parent> */}
        </>
    )
}
