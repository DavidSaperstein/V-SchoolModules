import React from 'react'

export default function BadgeCard(props) {
    console.log(props)
    const {id, firstName, lastName, email, placeOfBirth, phone, favoriteFood, about} = props
    return (
        <>
            <div className='big-badge'>
                <h1>Badge: {id+1}</h1>
            </div>
            <div className='badge-container'>
                <p>Name: {firstName} {lastName}</p>
                <p>Phone: ({phone.substr(0,3)})-{phone.substr(3,3)}-{phone.substr(6,4)}</p>
                <p>Place of birth: {placeOfBirth}</p>
                <p>Favorite Food: {favoriteFood}</p>
                <p>Email: {email}</p>
                <p id='about'>{about}</p>
            </div>
        </>
    )
}