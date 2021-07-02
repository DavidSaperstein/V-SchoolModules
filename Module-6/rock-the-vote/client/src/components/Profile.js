import React from 'react'

export default function Profile(){

  return(
    <div className="profile">
      <h1>Welcome {username}!</h1>
      <h2>Your posts</h2>
      <PostList />
    </div>
  )
}