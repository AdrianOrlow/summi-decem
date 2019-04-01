import React from 'react'
import Home from './pages/Home'
import Quote from './pages/Quote'
import NotFound from './pages/NotFound'

import './app.scss'

import { Router, Route, Link, Switch } from 'react-router-dom'
import history from './history'

const App = () => {
  return (
    <Router history={history}>
      <div className='app'>
        <Link to='/'>
          <h1>KONFEDERACI</h1>
        </Link>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/quote/:pid/:qid' component={Quote} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
