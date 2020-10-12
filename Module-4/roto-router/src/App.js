import react from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const App = (props) => {
  
  return (
      <>
        <Header />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/about'>
            <About />
          </Route>

          <Route exact path='/services'>
            <Services />
          </Route>
        </Switch>

        <Footer />
      </>
  )
}