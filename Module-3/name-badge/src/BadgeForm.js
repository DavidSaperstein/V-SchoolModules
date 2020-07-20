import React from 'react'

export default class BadgeForm extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: 'First Name',
            lastName: 'Last Name',
            email: 'E-mail',
            placeOfBirth: 'Place of Birth',
            phone: 'Phone',
            favoriteFood: 'Favorite Food',
            about: 'Tell us about yourself',
            completeBadges: []
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]:value})
    } 

    handleClick = () => {

    }

    render() {
        return (
            <form>
                <input
                    name='firstName' 
                    type='text' 
                    value={this.state.firstName}
                    minLength='3'
                    onChange = {(e) => this.handleChange(e)}
                    required
                />
                <input
                    name='lastName'
                    type='text'
                    value={this.state.lastName}
                    minlength='3'
                    onChange = {(e) => this.handleChange(e)}
                    required
                />
                <input
                    name='email'
                    type='email'
                    value={this.state.email}
                    minlength='3'
                    onChange = {(e) => this.handleChange(e)}
                    required
                />
                <input
                    name='placeOfBirth'
                    type='text'
                    value={this.state.placeOfBirth}
                    minlength='3'
                    onChange = {(e) => this.handleChange(e)}
                    required
                />
                <input
                    name='phone'
                    type='tel'
                    value={this.state.phone}
                    onChange = {(e) => this.handleChange(e)}
                    required
                />
                <input
                    name='favoriteFood'
                    type='text'
                    value={this.state.favoriteFood}
                    minlength='3'
                    onChange = {(e) => this.handleChange(e)}
                    required
                />
                <textarea 
                    value={this.state.about}
                    onChange = {(e) => this.handleChange(e)}
                />
            </form>
        )
    }
}