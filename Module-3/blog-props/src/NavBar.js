import React from "react"

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="left-navbar-container">
                <a className="navlink">Start Bootstrap</a>
            </div>
            <div className="right-navbar-container">
                <a className="navlink">Home</a>
                <a className="navlink">About</a>
                <a className="navlink">Sample Post</a>
                <a className="navlink">Contact</a>
            </div>  
        </div>
    )
}