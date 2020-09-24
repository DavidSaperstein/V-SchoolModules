import React, {useContext} from 'react'
import {ThemeContext} from './themeContext'

function Navbar(props) {
    const {theme} = useContext(ThemeContext)
    console.log('hello')
    return (
        <div className={`${theme}-navbar`}>
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Contact</h1>
        </div>
    )
}

export default Navbar