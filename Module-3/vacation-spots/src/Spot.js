import React from "react"

export default function Spot(props) {
    return (
        <div>
            <h3>{props.spot.place}</h3>
            <p>{props.spot.price}</p>
            <p>{props.spot.timeToGo}</p>
        </div>
    )
}