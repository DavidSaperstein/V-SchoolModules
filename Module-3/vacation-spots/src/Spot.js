import React from "react"

export default function Spot(props) {
    
    return (
        <div className = {`${props.spot.timeToGo} spotcard`}>
            <h3>Where: {props.spot.place}</h3>
            <p>
                Price: {
                    props.spot.price < 500 
                        ? '$' 
                        : props.spot.price < 1000 
                            ? '$$' 
                            : '$$$'
                }
            </p>
            <p>When: {props.spot.timeToGo}</p>
        </div>
    )
}