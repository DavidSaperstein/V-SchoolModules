import React from 'react'
import PostList from './PostList.js'

export default function Profile(props){

  const { username } = props
  
  return(
    <div className="profile">
      <h1>Welcome {username}!</h1>
      <h2>Your posts</h2>
      <PostList />
    </div>
  )
}