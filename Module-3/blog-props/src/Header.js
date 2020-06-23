import React from "react"
import NavBar from "./NavBar"

export default function Header() {
    return (
        <div>
            <NavBar />
            <div className="header-container">
                <h1>Clean Blog</h1>
                <h2>A Blog Theme by Start Bootstrap</h2>
            </div>
        </div>
    )
}