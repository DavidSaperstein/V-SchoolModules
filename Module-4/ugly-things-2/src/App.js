import React from 'react'
import ViewImages from './ViewImages'
import ImageForm from './ImageForm'
import './styles.css'

const App = (props) => {
  return (
    <div>
      <ImageForm 
        isEdit={false}
        initialState={{
          description: '',
          title: '',
          url: ''
        }}
      />
      <ViewImages />
    </div>
  )
}

export default App