import React from 'react'

export default function Square(props) {
    const secondaryColor = props.color === 'white' ? 'black' : 'white'
    return (
        <div 
            className='squares' 
            style={{
                backgroundColor: props.color, 
                color: secondaryColor, 
                border: `1px solid ${secondaryColor}`
            }}
        >
            <div>{props.number}</div>
        </div>
    )
}