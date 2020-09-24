import React, {useContext} from 'react'
import {ThemeContext} from './themeContext'

function Toggle(props) {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <button
            className={`${theme}-toggle`}
            onClick={toggleTheme}
        >
            Toggle Theme
        </button>
    )
}

export default Toggle