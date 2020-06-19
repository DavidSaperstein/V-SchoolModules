import React from "react"
import FriendList from "./FriendList"
import "./styles.css"

export default function App() {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>THESE ARE MY FRIENDS</h1>
            <FriendList />
        </div>
    )
}