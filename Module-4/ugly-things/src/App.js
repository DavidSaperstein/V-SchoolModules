import React from 'react'
import Form from './Form'
import ImageList from './ImageList'
import './styles.css'

const App = (props) => {
  return (
    <div className='app-container'>
      <Form isEdit={false}/>
      <ImageList />
    </div>
  )
}

export default App