import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {FormContextProvider} from './FormContext'

ReactDOM.render(<FormContextProvider><App /></FormContextProvider>, document.getElementById('root'))