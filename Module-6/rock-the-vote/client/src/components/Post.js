import React from 'react'

export default function Post(props){
  const {title, description} = props

  return (
    <div className="post-container">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}