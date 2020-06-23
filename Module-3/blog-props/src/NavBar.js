import React from "react"

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="left-navbar-container">
                <a>Start Bootstrap</a>
            </div>
            <div className="right-navbar-container">
                <a>Home</a>
                <a>About</a>
                <a>Sample Post</a>
                <a>Contact</a>
            </div>  
        </div>
    )
}