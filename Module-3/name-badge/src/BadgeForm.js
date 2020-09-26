import React from 'react'
import BadgeCard from './BadgeCard'

export default class BadgeForm extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            placeOfBirth: '',
            phone: '',
            favoriteFood: '',
            about: '',
            completeBadges: []
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]:value})
    } 

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState((prevState) => {
            const {firstName, lastName, email, placeOfBirth, phone, favoriteFood, about} = prevState
            let newBadge = {
                firstName, 
                lastName, 
                email, 
                placeOfBirth, 
                phone, 
                favoriteFood, 
                about
            }

            return {
                    completeBadges: [newBadge, ...prevState.completeBadges],
                    firstName: '',
                    lastName: '',
                    email: '',
                    placeOfBirth: '',
                    phone: '',
                    favoriteFood: '',
                    about: ''
            }
        })
    }

    handleValidation = (name) => {
        return {color: name.length >= 3 ? 'green' : 'red'}
    }

    render() {
        const {firstName, lastName, email, placeOfBirth, phone, favoriteFood, about, completeBadges} = this.state
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name='firstName' 
                        type='text' 
                        value={firstName}
                        placeholder='First Name'
                        onChange = {this.handleChange}
                        minLength='3'
                        style={this.handleValidation(firstName)}
                        required
                    />
                    <input
                        name='lastName'
                        type='text'
                        value={lastName}
                        placeholder='Last Name'
                        onChange = {this.handleChange}
                        style={this.handleValidation(lastName)}
                        minLength='3'
                        required
                    />
                    <input
                        name='email'
                        type='email'
                        value={email}
                        placeholder='E-mail'
                        onChange = {this.handleChange}
                        style={this.handleValidation(email)}
                        minLength='3'
                        required
                    />
                    <input
                        name='placeOfBirth'
                        type='text'
                        value={placeOfBirth}
                        placeholder='Place of Birth'
                        onChange = {this.handleChange}
                        style={this.handleValidation(placeOfBirth)}
                        minLength='3'
                        required
                    />
                    <input
                        name='phone'
                        type='number'
                        value={phone}
                        placeholder='Phone'
                        onChange = {this.handleChange}
                        required
                    />
                    <input
                        name='favoriteFood'
                        type='text'
                        value={favoriteFood}
                        placeholder='Favorite Food'
                        onChange = {this.handleChange}
                        style={this.handleValidation(favoriteFood)}
                        minLength='3'
                        required
                    />
                    <textarea
                        name='about'
                        value={about}
                        placeholder='Tell us about yourself'
                        onChange = {this.handleChange}
                    />
                    <button>Submit</button>
                </form>
                <div className='list-container'>{completeBadges.map((badge, i) => 
                    <BadgeCard 
                        key={i} 
                        id={i} 
                        firstName={badge.firstName} 
                        lastName={badge.lastName} 
                        email={badge.email} 
                        placeOfBirth={badge.placeOfBirth} 
                        phone={badge.phone} 
                        favoriteFood={badge.favoriteFood} 
                        about={badge.about} 
                    />)}
                </div>
            </>
        )
    }
}