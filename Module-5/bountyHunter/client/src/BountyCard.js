import React, {useState} from 'react'
import BountyForm from './BountyForm'

const BountyCard = (props) => {
  const {firstName, lastName, living, _id, deleteBounty, editBounty} = props
  const [toggle, setToggle] = useState(false)

  return (
    <div className='card-container'>
      {!toggle ?
        <>
          <h1>{firstName} {lastName}</h1>
          <p>Target Eliminated: {living ? 'No' : 'Yes'}</p>
          <button onClick={deleteBounty}>Delete</button>
          <button onClick={() => setToggle(prevToggle => !prevToggle)}>Edit</button>
        </>
          :
        <div className='edit-form'>
          <BountyForm 
            firstName={firstName} 
            lastName={lastName} 
            living={living} 
            id={_id} 
            submit={editBounty}
            toggle={setToggle}
          />
          <button onClick={() => setToggle(prevEditToggle => !prevEditToggle)}>Cancel Edit</button>
        </div>
      }
    </div>
  )
}

export default BountyCard