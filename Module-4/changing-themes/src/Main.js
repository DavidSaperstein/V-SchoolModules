import React, {useContext} from 'react'
import Toggle from './Toggle'
import {ThemeContext} from './themeContext'

function Main(props) {
    const {theme} = useContext(ThemeContext)
    return (
        <div className={`${theme}-main`}>
            <p className={`${theme}-message`}>Click the button to toggle the Light theme!</p>
            <Toggle />
        </div>
    )
}

export default Main