import React from "react"
import NavBar from "./NavBar"

export default function Header() {
    return (
        <div>
            <NavBar />
            <div className="header-container">
                <h1 className="headings heading">Clean Blog</h1>
                <h2 className="headings subheading">A Blog Theme by Start Bootstrap</h2>
            </div>
        </div>
    )
}