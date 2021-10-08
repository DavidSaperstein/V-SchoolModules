import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from './../context/UserProvider.js'



export default function PostForm(props){

  const { user } = useContext(UserContext)

  const initInputs = {
    title: "",
    description: "",
    imgUrl: "",
    dateAdded: "",
    upvotes: [],
    downvotes: [],
    user: user._id
  }
  const [inputs, setInputs] = useState(initInputs)
  const { addIssue } = props
  let history = useHistory()
  
  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    let now = new Date().toString()
    console.log(typeof now)
    console.log("inputs1", inputs)
    await setInputs(prevInputs => ({
      ...prevInputs,
      dateAdded: now
    }))
    console.log(inputs.dateAdded)
    console.log("inputs2", inputs)
    addIssue(inputs)
    setInputs(initInputs)
    history.push("/issues")
  }

  const { title, description } = inputs

  return (
    <form onSubmit={handleSubmit} classname='form-container'>
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
        onChange={handleChange}
        placeholder="Description"
      />
      <input type="submit" value="Post"/>
    </form>
  )
}