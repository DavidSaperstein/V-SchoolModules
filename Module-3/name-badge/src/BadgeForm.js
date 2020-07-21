import React from 'react'

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
        this.setState(({firstName, lastName, email, placeOfBirth, phone, favoriteFood, about, completeBadges}) => {
            return {
                firstName: '',
                lastName: '',
                email: '',
                placeOfBirth: '',
                phone: '',
                favoriteFood: '',
                about: '',
                completeBadges: [{firstName, lastName, email, placeOfBirth, phone, favoriteFood, about}, ...completeBadges]
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
                        minLength='3'
                        onChange = {this.handleChange}
                        required
                        style={this.handleValidation(lastName)}
                    />
                    <input
                        name='email'
                        type='email'
                        value={this.state.email}
                        placeholder='E-mail'
                        minLength='3'
                        onChange = {this.handleChange}
                        required
                    />
                    <input
                        name='placeOfBirth'
                        type='text'
                        value={this.state.placeOfBirth}
                        placeholder='Place of Birth'
                        minLength='3'
                        onChange = {this.handleChange}
                        required
                    />
                    <input
                        name='phone'
                        type='number'
                        value={this.state.phone}
                        placeholder='Phone'
                        onChange = {this.handleChange}
                        required
                    />
                    <input
                        name='favoriteFood'
                        type='text'
                        value={this.state.favoriteFood}
                        placeholder='Favorite Food'
                        minLength='3'
                        onChange = {this.handleChange}
                        required
                    />
                    <textarea
                        name='about'
                        value={this.state.about}
                        placeholder='Tell us about yourself'
                        onChange = {this.handleChange}
                    />
                    <button>Submit</button>
                </form>
                <div>{completeBadges.length >= 1 && completeBadges[0].firstName}</div>
            </>
        )
    }
}