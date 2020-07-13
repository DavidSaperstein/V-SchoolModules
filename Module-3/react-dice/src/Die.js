import React from 'react'

export default function Die(props) {
    const {num} = props
    return (
        <div className='die'>
            {num}
        </div>
    )
}