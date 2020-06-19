import React from "react"
import Pet from "./Pet"

export default function Friend(props){
    const {name, age, pets} = props
    return (
        <div className='card'>
            <div className='friends'>
                <p style={{textTransform: 'uppercase'}}>
                This is {name}</p>
                <p>He's {age}</p>
                <h1>'[insert picture here]'</h1>
            </div>
            <div className='pets'>
                <p>{`Who cares? These are ${name}'s PETS:`}</p>
                {pets.map(pet => <Pet name={pet.name} breed={pet.breed}/>)}
            </div>
        </div>
    )    
}