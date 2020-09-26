import React, {useContext} from 'react'
import {ThemeContext} from './themeContext'

function Footer(props) {
    /**/
    const {theme} = useContext(ThemeContext)
    return (
        <div className={`${theme}-footer`}>
            <p>The amazing Footer</p>
        </div>
    )
}

export default Footer
