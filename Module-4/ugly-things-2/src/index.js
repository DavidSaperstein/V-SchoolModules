import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {ImageContextProvider} from './imageContext'

ReactDOM.render(<ImageContextProvider><App /></ImageContextProvider>, document.getElementById('root'))

