import React, { useContext } from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(props){
  const { logout } = props
  const token = localStorage.getItem("token")

  return (
    <div className='navbar'>
      <Link to ="/profile">Profile</Link>
      <Link to ="/issues">All Issues</Link>
      <Link to ="/newIssue">Create New Issue</Link>
      { token &&
        <Link to ="/"><button type="button" onClick={logout}>Logout</button></Link>
      }
    </div>
  )
}