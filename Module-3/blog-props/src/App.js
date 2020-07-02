import React from "react"
import Header from "./Header"
import BlogList from "./BlogList"
import Footer from "./Footer"
import "./styles.css"

export default function App() {
    return (
        <div>
            <Header />
            <BlogList />
            <Footer />
        </div>
    )
}