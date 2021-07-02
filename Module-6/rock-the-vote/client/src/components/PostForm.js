import React, { useState } from 'react'

const initInputs = {
  title: "",
  description: ""
}

export default function PostForm(props){
  const [inputs, setInputs] = useState(initInputs)
  const { addPost } = props
  
  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    addPost(inputs)
    setInputs(initInputs)
  }

  const { title, description } = inputs
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        type="textarea"
        name="description"
        value={description}
        onChange={handlechange}
        placeholder="Description"
      />
    </form>
  )
}