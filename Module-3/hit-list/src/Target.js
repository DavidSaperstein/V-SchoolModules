import React from 'react'

export default function Target(props) {
    const {name, image} = props
    return (
        <div className='image-container' style={{backgroundImage: `url(${image})`}}>
            <h2>{name}</h2>
        </div>
    )
}