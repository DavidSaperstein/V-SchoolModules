import React, {useState} from 'react'

const BountyForm = (props) => {
  const initInputs = {
    firstName: props.firstName || '' ,
    lastName: props.lastName || '',
    living: props.living || true
  }
  const [inputs, setInputs] = useState(initInputs)
  

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputs(prevInputs => ({...prevInputs, [name]: value}))
  }

  const handleSubmit = (e) => {
    console.log(props.id)
    e.preventDefault()
    props.submit(inputs, props.id)
    setInputs(initInputs)
    if(props.toggle) {
      props.toggle(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text'
        name='firstName' 
        value={inputs.firstName} 
        onChange={handleChange}
        placeholder='First Name' 
      />
      <input 
        type='text'
        name='lastName' 
        value={inputs.lastName} 
        onChange={handleChange}
        placeholder='Last Name' 
      />
      <input
        name='living'
        value={inputs.living}
        onChange={handleChange}
        placeholder='Living?'
      />
      <button>Submit</button>
    </form>
  )
}

export default BountyForm