import react from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-rom'
import App from './App'

ReactDOM.render(
  <Router>
    <App />
  </Router>, 
  document.getElementById('root')
)