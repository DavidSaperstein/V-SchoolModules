import React, {useState, useEffect} from 'react'
import axios from 'axios'
import BountyCard from './BountyCard'
import BountyForm from './BountyForm'
import './styles.css'

const App = () => {
  const [bounties, setBounties] = useState([])

  useEffect(() => {
    axios.get('/bountyRouter')
      .then(res => setBounties(res.data))
  }, [])

  const addBounty = (newBounty) => {
    axios.post('/bountyRouter', newBounty)
      .then(res => setBounties(prevBounties => [...prevBounties, res.data]))
      .catch(err => console.log(err))
  }

  const deleteBounty = (id) => {
    console.log(id)
    axios.delete(`/bountyRouter/${id}`)
    .then(res => {
      if(res.data === 'Successfully eliminated bounty') {
        setBounties(prevBounties => {
          console.log(res.data)
          const newBounties = [...prevBounties]
          const filteredBounties = newBounties.filter(bounty => bounty._id !== id)
          console.log(filteredBounties)
          return filteredBounties
        })
      } else {
        alert(res.data)
      }
    })
    .catch(err => {
        console.error(err)
        alert('An error has occured')
    })
  }

  const editBounty = (updates, id) => {
    console.log(id)
    axios.put(`/bountyRouter/${id}`, updates)
      .then(res => {
        setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== id ? bounty : res.data))
      })
      .catch(err => console.error(err))
  }

  return (
    <div>
      <BountyForm bounties={bounties} submit={addBounty}/>
      { bounties.map(bounty => 
      <BountyCard 
        {...bounty}
        key={bounty.lastName}
        deleteBounty={() => deleteBounty(bounty._id)}
        editBounty={editBounty}
      />
      ) }
    </div>
  )
}

export default App