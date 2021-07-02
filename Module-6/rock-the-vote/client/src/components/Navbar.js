import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props){
  const { logout } = props
  return (
    <div className='navbar'>
      <Link to="/profile">Profile</Link>
      <Link to ="/allposts">All Posts</Link>
      <Link to ="/"><button type="button" onClick={logout}>Logout</button></Link>
    </div>
  )
}