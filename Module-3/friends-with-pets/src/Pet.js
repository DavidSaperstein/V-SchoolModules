import React from "react"

export default function Pet(props) {
    return (
        <div>
            <p>This is {props.name}</p>
            <p>She's a {props.breed}</p>
            <h1>'[insert picture here]'</h1>
        </div>
    )
}