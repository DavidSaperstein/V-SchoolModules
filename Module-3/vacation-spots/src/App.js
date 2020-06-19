import React from "react"
import Spot from "./Spot"
import './styles.css'

export default function App() {
    let vacationSpots = [
        {
          place: "Meridian, Idaho",
          price: 40,
          timeToGo: "Spring"
        },{
          place: "Cancun",
          price: 900,
          timeToGo: "Winter"
        },{
          place: "China",
          price: 1200,
          timeToGo: "Fall"
        },{
          place: "Russia",
          price: 1100,
          timeToGo: "Summer"
        },{
          place: "Lebanon",
          price: 400,
          timeToGo: "Spring"
        }
      ]
    const spotComponents = vacationSpots.map(spot => <Spot key={spot.place} spot={spot} />)

    return (
        <div>
            {spotComponents}
        </div>
    )
}